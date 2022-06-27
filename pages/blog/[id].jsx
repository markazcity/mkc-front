import { ROOT_URL } from "@/inc/Const";
import SocialShare from "@/components/Utils/SocialShare";
import renderHTML from "react-render-html";
import Logo from "@/components/Logo";
import Head from "next/head";
import MenuBar from "@/components/NavMenu/Menu";
import Footer from "@/components/Footer/Footer";
import Footer2 from "@/components/Footer/Footer2";

const SingleBlog = ({ params, blogs }) => {
  console.log(blogs.blogs);
  const data = blogs.blogs.filter((item) => item.blog_link == params.id)[0];
  return (
    <div>
      <Head>
        <title>{data.title} - Markaz Knowledge City</title>
        <meta name="description" content="Blog of Markaz Knowledge City" />
      </Head>
      <div className="py-5">
        <Logo logo="logob" className="z-9" />
        <MenuBar icoColor=" text-black" />
      </div>
      <div className="lg:w-6/12 mx-auto py-10">
        <h1 className="text-2xl lg:text-4xl text-center noto font-semibold text-kteal-800 px-4">
          {data.title}
        </h1>
        <p className="flex justify-center my-3"></p>
        <div className="relative my-10 ">
          <img src={ROOT_URL + data.thumb} className="lg:rounded-lg" alt="" />
        </div>
        <SocialShare
          title={data.post_title}
          url={`https://markazcity.in/blog/${data.blog_link}`}
        />
        <article
          className="lg:text-justify text-lg px-10 lg:px-0 noto"
          //   dangerouslySetInnerHTML={createMarkup(data.post_body)}
        >
          <p className="hyphenate text-base">
            {renderHTML(`<div class="noto hyphenate">${data.body}</div>`)}
          </p>
        </article>
      </div>

      <Footer2 />
    </div>
  );
};

export default SingleBlog;

export async function getStaticProps({ params }) {
  const blogs = await getAllPosts();

  if (!blogs) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blogs, params },
    revalidate: 6000,
  };
}

export async function getStaticPaths() {
  const blogs = await getAllPosts();

  const paths = blogs.blogs.map((postItems) => ({
    params: { id: `${postItems.blog_link}` },
  }));

  return { paths, fallback: "blocking" };
}

export const getAllPosts = async () => {
  const finalUrl = ROOT_URL + "blog.php?type=list";

  const res = await fetch(finalUrl)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return res;
};
