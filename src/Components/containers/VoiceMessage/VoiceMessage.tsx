import React, { useCallback } from "react";
import { useAppDispatch } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { Typography, Card, Button } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";

import { setRecordedMessage } from "../../../slices/UserDataSlice";
import DetailsHeading from "../../molecules/DetailsHeading";

import recorder from "../../../Assets/recorder.gif";

const BodyWeight: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const navigateToNextPage = useCallback(() => {
    dispatch(setRecordedMessage(transcript));
    navigate("/confirm-details");
  }, [dispatch, navigate, transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <Card className="p-2 m-4 br-2 mt-6">
      <DetailsHeading />

      <div className="flex flex-col w-full mb-4 items-center">
        <Typography variant="h6" align="left" className="mb-6 font-bold">
          Record your custom message
        </Typography>

        {listening && <img src={recorder} alt="recorder" className="my-3" />}

        {!listening && (
          <>
            <div
              className="recorder-start mb-3"
              onClick={() => SpeechRecognition.startListening()}
            >
              <MicIcon fontSize="large" className="text-white" />
            </div>
            <Typography
              variant="h6"
              align="left"
              className="mb-6 font-bold text-blue-950"
            >
              Press to Start Recording
            </Typography>
          </>
        )}
        {listening && (
          <>
            <div
              className="recorder-start recorder-stop"
              onClick={() => SpeechRecognition.stopListening()}
            >
              <StopIcon fontSize="large" className="text-white" />
            </div>
            <Typography
              variant="h6"
              align="left"
              className="mb-6 font-bold text-blue-950"
            >
              Press to Stop Recording
            </Typography>
          </>
        )}
        <p>{transcript}</p>
      </div>

      <Button
        variant="contained"
        className="w-full mb-4 my-2"
        size="large"
        disabled={!transcript?.length}
        onClick={navigateToNextPage}
      >
        Next
      </Button>
    </Card>
  );
};

export default BodyWeight;
