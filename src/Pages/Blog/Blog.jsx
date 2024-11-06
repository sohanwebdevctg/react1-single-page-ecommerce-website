import BlogBanner from "../../Components/BlogCom/BlogBanner";
import BlogGallery from "../../Components/BlogCom/BlogGallery";
import BlogPost from "../../Components/BlogCom/BlogPost";
import Title from "../../Components/Title/Title";


const Blog = () => {
  return (
    <div>
      {/* title start */}
      <Title name={'blog'}></Title>
      {/* title end */}
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