import BookmarkComponent from "@/components/BookmarkComponent";
import { NEXT_AUTH } from "@/lib/auth";
import { getUserBookmarks } from "@/lib/db";
import { getServerSession } from "next-auth";


const page = async() => {
  const session = await getServerSession(NEXT_AUTH)
  const userId = session?.user?.id
  const bookmarks = await getUserBookmarks(userId)
  return (
    <BookmarkComponent userBookmarks={bookmarks} userId={userId}/>
  );
};

export default page;
