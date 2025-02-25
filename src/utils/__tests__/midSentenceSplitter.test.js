import breakLongSentence, { msSplitter } from "../midSentenceSplitter";

describe("midSentenceSplitter", () => {
    describe("removeEllipsisFromTweet", () => {
        test("should remove any ellipsis from the end of the last tweet in an array", () => {
            const testCase = msSplitter.removeEllipsisFromTweet(
                "This is the last tweet..."
            );

            expect(testCase).toBe("This is the last tweet");
        });

        test("shouldn't do anything if the last tweet doesn't contain ellipsis", () => {
            const testCase = msSplitter.removeEllipsisFromTweet(
                "This is the last tweet"
            );

            expect(testCase).toBe("This is the last tweet");
        });
    });

    describe("breakVeryLongWord", () => {
        test("should break a single word that is longer than the maximum tweet length allowed", () => {
            const testCase = msSplitter.breakVeryLongWord(
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            );

            expect(testCase).toBeInstanceOf(Array);
            expect(testCase).toHaveLength(2);
            expect(testCase).toEqual([
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa...",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa...",
            ]);
        });

        test("shouldn't break a single long word as long as it is shorter than the maximum tweet length", () => {
            const testCase = msSplitter.breakVeryLongWord(
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            );

            expect(testCase).toBe(
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            );
        });
    });

    describe("recombineShortTweets", () => {
        test("should combine any consecutive tweets in an array if their combined length is less than or equal to the maximum tweet length", () => {
            const testCase = msSplitter.recombineShortTweets([
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Mi in nulla posuere sollicitudin aliquam ultrices...",
                "kjshdfkjherfkjherkjfhekrjfhekrjhfkejhrkfjherkfjherfkjhwerkjfhwekjfhwweferkjhferkjiuehrfkjerwefwefwefwfqwdsqwqwdkjshdfkjherfkjherkjfhekrjfhekrjhfkejhrkfjherkfjherfkjhwerkjfhwekjfhwweferkjhferkjiuehrfkjerwefwefwefwfqwdsqwqwdjshdfkjherfkjherkjfhekrjfhekrjhfkejhrkfjherkfjherfkjhwe...",
                "rkjfhwdwqedq",
                "Consequat ac felis donec et odio pellentesque diam volutpat commodo Sed libero enim sed faucibus turpis",
            ]);

            expect(testCase).toBeInstanceOf(Array);
            expect(testCase).toHaveLength(3);
            expect(testCase).toEqual([
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Mi in nulla posuere sollicitudin aliquam ultrices...",
                "kjshdfkjherfkjherkjfhekrjfhekrjhfkejhrkfjherkfjherfkjhwerkjfhwekjfhwweferkjhferkjiuehrfkjerwefwefwefwfqwdsqwqwdkjshdfkjherfkjherkjfhekrjfhekrjhfkejhrkfjherkfjherfkjhwerkjfhwekjfhwweferkjhferkjiuehrfkjerwefwefwefwfqwdsqwqwdjshdfkjherfkjherkjfhekrjfhekrjhfkejhrkfjherkfjherfkjhwe...",
                "rkjfhwdwqedq Consequat ac felis donec et odio pellentesque diam volutpat commodo Sed libero enim sed faucibus turpis",
            ]);
        });

        test("shouldn't combine any consecutive tweets if their combined length is longer than the maximum tweet length", () => {
            const testCase = msSplitter.recombineShortTweets([
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Mi in nulla posuere sollicitudin aliquam ultrices Consequat ac felis donec et odio pellentesque diam volutpat commodo Sed libero enim sed faucibus turpis...",
                "in In pellentesque massa placerat duis ultricies.",
            ]);

            expect(testCase).toBeInstanceOf(Array);
            expect(testCase).toHaveLength(2);
            expect(testCase).toEqual([
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Mi in nulla posuere sollicitudin aliquam ultrices Consequat ac felis donec et odio pellentesque diam volutpat commodo Sed libero enim sed faucibus turpis...",
                "in In pellentesque massa placerat duis ultricies.",
            ]);
        });
    });

    describe("breakLongSentence", () => {
        test("shouldn't break the sentence as long as its length is less than maximum tweet length", () => {
            const testCase = breakLongSentence("This is the first tweet");

            expect(testCase).toBe("This is the first tweet");
        });

        test("should break a long sentence that doesn't contain any long words", () => {
            const testCase = breakLongSentence(
                "The five features will be presented on Saturday, July 10 as part of the market’s Animation Days segment. They vary widely in themes, tone, and technique, ranging from 2d to cgi, and road-trip comedies to wartime dramas. Yet the stories are all steeped in the country of their origin, depicting the history, politics, traditions, and landscapes of Chile."
            );

            expect(testCase).toBeInstanceOf(Array);
            expect(testCase).toHaveLength(2);
            expect(testCase).toEqual([
                "The five features will be presented on Saturday, July 10 as part of the market’s Animation Days segment. They vary widely in themes, tone, and technique, ranging from 2d to cgi, and road-trip comedies to wartime dramas. Yet the stories are all steeped in the country of their...",
                "origin, depicting the history, politics, traditions, and landscapes of Chile.",
            ]);
        });

        test("should break long sentences that contain long words handling those long words in the process", () => {
            const testCase = breakLongSentence(
                "This is my sentence aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa and it ends here"
            );

            expect(testCase).toBeInstanceOf(Array);
            expect(testCase).toHaveLength(3);
            expect(testCase).toEqual([
                "This is my sentence...",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa...",
                "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa and it ends here",
            ]);
        });
    });
});
