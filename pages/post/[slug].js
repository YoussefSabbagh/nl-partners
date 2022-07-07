import { useRouter } from 'next/router';

import PostDetail from '../../components/PostDetail';
import Categories from '../../components/Categories';
import PostWidget from '../../components/PostWidget';
import Author from '../../components/Author';
import Comments from '../../components/Comments';
import CommentsForm from '../../components/CommentsForm';
import Loader from '../../components/Loader';

import { getPosts, getPostDetails } from '../../services';
import Layout from '../../components/Layout';
// import { AdjacentPosts } from '../../sections'

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <Layout title={`Next Level Partners Post ${post.slug}`}>
      <div className="container mx-auto my-8 px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
            {/*
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
             */}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
