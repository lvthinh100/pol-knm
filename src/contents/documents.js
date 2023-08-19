import contract from "../assets/documents/contract.pdf";
import plan from "../assets/documents/plan.pdf";
import script from "../assets/documents/script.pdf";

const DOCUMENTS = [
  {
    title: "Hợp đồng thành lập nhóm",
    description:
      "Hợp đồng thành lập nhóm là một tài liệu quan trọng mà nhóm của mình đã tạo ra để xác định rõ nhiệm vụ và trách nhiệm của từng thành viên trong quá trình thực hiện đồ án. Trong hợp đồng này, chúng mình đã định rõ vai trò, đóng góp dự kiến và cam kết của mỗi thành viên đối với công việc chung. Hợp đồng này không chỉ giúp tạo ra sự rõ ràng và minh bạch trong nhóm, mà còn thể hiện sự cam kết của chúng mình đối với mục tiêu và thành công chung..",
    file: contract,
  },
  {
    title: "Kế hoạch thực hiện đồ án",
    description:
      "Kế hoạch thực hiện đồ án là bản định hình chi tiết về cách mình sẽ tiến hành và hoàn thành dự án. Trong kế hoạch này, mình đã xác định các bước cụ thể mà mình sẽ thực hiện, từ việc nghiên cứu và thu thập thông tin, thiết kế và phát triển, đến việc kiểm tra và đánh giá. Mỗi bước đều có thời gian và nguồn lực ứng viên được gắn kết, giúp mình duy trì tiến độ và đảm bảo sự hiệu quả trong quá trình làm việc. Kế hoạch thực hiện đồ án giúp mình theo dõi tiến trình một cách có hệ thống và đối phó hiệu quả với những thay đổi và thách thức nảy sinh trong quá trình thực hiện dự án..",
    file: plan,
  },
  {
    title: "Kịch bản chi tiết",
    description:
      "Nhóm của mình đã thực hiện một quá trình thảo luận chặt chẽ và tương tác để tạo ra kịch bản chi tiết cho video phỏng vấn. Trước hết, chúng mình đã tổ chức cuộc họp để thảo luận ý tưởng chung, đề xuất nội dung và xác định mục tiêu cụ thể của video. Mỗi thành viên đã có cơ hội đóng góp ý kiến, đề xuất và thảo luận về cách tạo nên một kịch bản thú vị và thể hiện đầy đủ thông điệp của chúng mình. ",
    file: script,
  },
];

export default DOCUMENTS;
