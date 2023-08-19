import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import SearchIcon from "@mui/icons-material/Search";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import RepeatIcon from "@mui/icons-material/Repeat";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import Typography from "@mui/material/Typography";

const timelineConfig = [
  {
    date: "18/7/2023 - 21/7/2023",
    title: "Lên ý tưởng và xây dựng môi trường  làm việc",
    description:
      "Phân tích đề tài 'Real Value  of Life' và lên kế hoạch phát triển ",
    icon: SearchIcon,
    color: "#6CA7ED",
  },
  {
    date: "22/7/2023 - 28/7/2023",
    title: "Tạo kịch bản Video",
    description:
      "Đóng góp thêm ý tưởng cho video và hoàn thiện kịch bản chính cho video",
    icon: LocalLibraryIcon,
    color: "#63AFB4",
  },
  {
    date: "29/7/2023 - 04/8/2023",
    title: "Chuẩn bị cho quá trình quay Video",
    description: "Chuẩn bị công cụ, soạn thảo câu hỏi phỏng vấn, thực địa",
    icon: SettingsSuggestIcon,
    color: "#589B85",
  },
  {
    date: "5/8/2023 - 13/8/2023",
    title: "Bắt đầu phỏng vấn",
    description: "Tiến hành phỏng vấn, Thu thập đầy đủ Source Video",
    icon: Diversity3Icon,
    color: "#CBBE5D",
  },
  {
    date: "Từ 14/08 trở đi",
    title: "Hoàn thiện đồ án",
    description: "Edit Video, Thiết kế Poster, tạo và quản lý Website",
    icon: ArrowCircleRightIcon,
    color: "#E5A67F",
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
            <TimelineDot sx={{ backgroundColor: timeline.color }}>
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
