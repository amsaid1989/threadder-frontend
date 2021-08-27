import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StyledButton from "./StyledButton";
import Hidden from "@material-ui/core/Hidden";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import "emoji-mart/css/emoji-mart.css";
import "./emojiPicker.css";
import data from "emoji-mart/data/twitter.json";
import { NimblePicker } from "emoji-mart";
import InputToolbar from "./InputToolbar";

/*
 * The styles and implementation of the tweet input component.
 * This component is where the user will input the text they
 * want to split into a thread of tweets.
 * It also shows some stats about the character count of the
 * text and how many tweets are generated from it.
 */

const useStyles = makeStyles((theme) => ({
    root: {
        flexFlow: "column nowrap",
    },
    fullHeight: {
        height: "100%",
    },
    containerWithShadow: {
        boxShadow: theme.shadows[4],
    },
    expandingFlexItem: {
        flex: 1,
    },
    fixedSizeFlexItem: {
        flex: 0,
    },
    textareaContainer: {
        display: "flex",
        flexFlow: "column nowrap",
        padding: "1.5em",
        paddingBottom: "0.55em",
        backgroundColor: theme.palette.primary.main,
    },
    threadTextarea: {
        fontFamily: "inherit",
        fontSize: "inherit",
        resize: "none",
        width: "100%",
        padding: "0.5em 0.75em",
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        border: 0,
        boxShadow: "inset 0px 0px 5px 0px rgba(0, 0, 0, 0.4)",
        "&:focus": {
            border: 0,
            outline: 0,
        },
    },
    statsContainer: {
        padding: "1em 1.5em",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        backgroundColor: theme.palette.primary.dark,
    },
    statsText: {
        color: theme.palette.primary.contrastText2,
    },
    emojiPicker: {
        position: "absolute",
    },
}));

const TweetInput = React.forwardRef((props, ref) => {
    const classes = useStyles();

    const [pickerOpen, setPickerOpen] = useState(false);

    const handlePickerClick = (event) => {
        /**
         * Handles the user click on the button the toggles
         * the emoji picker.
         */

        // Because the span that contains the button and the
        // picker has an onClick handler that closes the
        // picker, we have to stop the event propagation
        // to stop the click event from being passed from
        // the button to the its parent. Otherwise, the picker
        // won't open at all
        event.stopPropagation();

        setPickerOpen((prevState) => !prevState);
    };

    const handleClickAway = (event) => {
        if (event.target === event.currentTarget) {
            setPickerOpen(false);
        }
    };

    return (
        <Grid
            container
            spacing={2}
            className={classNames(classes.root, classes.fullHeight)}
        >
            {/* GRID ITEM 01: Tweet Input Textarea and toolbar */}
            <Grid
                item
                xs={12}
                className={classNames(
                    classes.expandingFlexItem,
                    classes.fullHeight
                )}
            >
                <Container
                    className={classNames(
                        classes.textareaContainer,
                        classes.fullHeight,
                        classes.containerWithShadow
                    )}
                >
                    <textarea
                        // autoFocus
                        className={classNames(
                            classes.threadTextarea,
                            classes.fullHeight
                        )}
                        onChange={props.handleTweetInput}
                        onSelect={props.handleCursorPositionChange}
                        placeholder="Type your tweet here..."
                        value={props.tweetText}
                        ref={ref}
                    />

                    <ClickAwayListener onClickAway={handleClickAway}>
                        <span
                            style={{ position: "relative" }}
                            onClick={handleClickAway}
                            id="input-toolbar"
                        >
                            {pickerOpen && (
                                <NimblePicker
                                    set="twitter"
                                    data={data}
                                    title=""
                                    emoji=""
                                    showPreview={false}
                                    perLine={8}
                                    onSelect={props.handleEmojiPicking}
                                />
                            )}
                            <InputToolbar
                                onClick={handleClickAway}
                                emojiPickerHandler={handlePickerClick}
                            />
                        </span>
                    </ClickAwayListener>
                </Container>
            </Grid>

            {/* GRID ITEM 02: Status Bar */}
            <Grid item xs={12} className={classes.fixedSizeFlexItem}>
                <Container
                    className={classNames(
                        classes.statsContainer,
                        classes.containerWithShadow
                    )}
                >
                    <Typography
                        variant="body2"
                        className={classes.statsText}
                    >{`Characters: ${props.tweetText.length}`}</Typography>
                    <Typography
                        variant="body2"
                        className={classes.statsText}
                    >{`Tweets: ${props.thread.length}`}</Typography>
                </Container>
            </Grid>

            {/* GRID ITEM 03: View Thread Button
            This button is hidden in the desktop view of the app */}
            <Hidden mdUp>
                <Grid item xs={12} className={classes.fixedSizeFlexItem}>
                    <StyledButton
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={props.viewThreadHandler}
                    >
                        View thread
                    </StyledButton>
                </Grid>
            </Hidden>
        </Grid>
    );
});

export default TweetInput;
