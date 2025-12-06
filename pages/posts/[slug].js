import posts from "../../data/posts.json";
import RelatedArticles from "../../components/RelatedArticles";
import HeaderBar from "../../components/HeaderBar";
import HeroImage from "../../components/HeroImage";
import ArticleBody from "../../components/ArticleBody";
import ExtraPoints from "../../components/ExtraPoints";
import AboutAuthor from "../../components/AboutAuthor";
import PrevNext from "../../components/PrevNext";
import Sidebar from "../../components/Sidebar";
import Comments from "../../components/Comments";

export async function getStaticPaths() {
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  return { props: { post } };
}

export default function Post({ post }) {
  return (
    <div className="blog-page">
      <HeaderBar title={post?.title} />
      <HeroImage image={post?.image} />
      <div className="main-container">
        <div className="inner-container">
          <div className="left">
            <ArticleBody post={post} />
            <ExtraPoints points={post?.extraPoints} />
            <AboutAuthor author={post?.authors} />
            {/* <PrevNext previous={post?.previous} next={post?.next} /> */}
          </div>
          <Sidebar />
        </div>
       <Comments comments={post?.comments} slug={post.slug} />
      </div>
      <RelatedArticles />
    </div>
  );
}
