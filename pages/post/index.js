import { getPosts } from '../../services';
import Categories from '../../components/Categories';
import PostCard from '../../components/PostCard';
import PostWidget from '../../components/PostWidget';
import Layout from '../../components/Layout';

const Home = ({ posts }) => {
  return (
    <Layout title={'Next Level Partners Post Page'}>
      <div className="container mx-auto my-8 px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 grid grid-cols-1 gap-12 lg:col-span-8 lg:grid-cols-2 lg:grid-cols-2">
            {posts.map((post) => (
              <div key={post.node.id} className="test">
                <PostCard post={post.node} />
              </div>
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

// Fetch data at build time
export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
};
