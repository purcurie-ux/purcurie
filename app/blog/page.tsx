import BlogPostList from "@/components/blog/BlogPostList";
import PageTitle from "@/components/blog/PageTitle";
import { sampleBlogPosts } from "@/components/blog/sampleBlogPosts";


export default function Blog() {
    return (
      <>
        <PageTitle
          title="Latest Articles"
          subtitle="Stay informed with the freshest insights, trends, and beauty advice."
        />
        <BlogPostList
          posts={sampleBlogPosts}
          currentPage={1}
          hasNextPage={true}
        />
      </>
    );
}