import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

const timelineConfig = [
  {
    date: "10/4/2023 - 18/4/2023",
    title: "Tạo nhóm",
    description: "Chi tiết sơ về hoạt động",
    icon: RepeatIcon,
  },
  {
    date: "11/4/2023 - 18/4/2023",
    title: "Tạo nhóm",
    description: "Chi tiết sơ về hoạt động",
    icon: RepeatIcon,
  },
  {
    date: "12/4/2023 - 18/4/2023",
    title: "Tạo nhóm",
    description: "Chi tiết sơ về hoạt động",
    icon: RepeatIcon,
  },
];

const TimeLine = () => {
  return (
    <Timeline position="alternate">
      {timelineConfig.map((timeline) => (
        <TimelineItem key={timeline.date}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="secondary"
          >
            {timeline.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <timeline.icon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" color="primary">
              {timeline.title}
            </Typography>
            <Typography>{timeline.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimeLine;
