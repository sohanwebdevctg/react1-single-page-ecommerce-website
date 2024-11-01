import BlogBanner from "../../Components/BlogCom/BlogBanner";
import BlogGallery from "../../Components/BlogCom/BlogGallery";
import BlogPost from "../../Components/BlogCom/BlogPost";


const Blog = () => {
  return (
    <div>
      {/* blogBanner start */}
      <BlogBanner></BlogBanner>
      {/* blogBanner end */}
      {/* blogGallery start */}
      <BlogGallery></BlogGallery>
      {/* blogGallery end */}
      {/* blogPost start */}
      <BlogPost></BlogPost>
      {/* blogPost end */}
    </div>
  );
};

export default Blog;