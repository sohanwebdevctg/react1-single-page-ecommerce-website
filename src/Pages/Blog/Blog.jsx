import BlogBanner from "../../Components/BlogCom/BlogBanner";
import BlogGallery from "../../Components/BlogCom/BlogGallery";


const Blog = () => {
  return (
    <div>
      {/* blogBanner start */}
      <BlogBanner></BlogBanner>
      {/* blogBanner end */}
      {/* blogGallery start */}
      <BlogGallery></BlogGallery>
      {/* blogGallery end */}
    </div>
  );
};

export default Blog;