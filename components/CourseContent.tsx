import VideoComponent from "./VideoComponent";
import DocsComponent from "./DocsComponent";

const CourseContent = ({
  params,
  contentDetails,
  userId
}: {
  params: { contentId: string };
  contentDetails: any;
  userId: number;
}) => {
  const contentType = contentDetails.type;
  return (
    contentType === 'video' ? (
      <VideoComponent params={params} contentDetails={contentDetails} userId={userId} />
    ) : (
      <div>
        <DocsComponent />
      </div>
    )
  );
};

export default CourseContent;
