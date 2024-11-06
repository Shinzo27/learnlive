import VideoComponent from "./VideoComponent";
import DocsComponent from "./DocsComponent";

const CourseContent = ({
  params,
  contentDetails,
}: {
  params: { contentId: string };
  contentDetails: any;
}) => {
  const contentType = contentDetails.type;
  return (
    contentType === 'video' ? (
      <VideoComponent params={params} contentDetails={contentDetails} />
    ) : (
      <div>
        <DocsComponent />
      </div>
    )
  );
};

export default CourseContent;
