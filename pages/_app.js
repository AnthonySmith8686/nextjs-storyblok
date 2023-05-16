import '../styles/globals.css';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import Article from '@/components/Article';
import AllArticles from '@/components/AllArticles';
import Config from '@/components/Config';
import Feature from '@/components/Feature';
import Grid from '@/components/Grid';
import Page from '@/components/Page';
import Hero from '@/components/Hero';
import Teaser from '@/components/Teaser';
import HeaderMenu from '@/components/HeaderMenu';
import MenuLink from '@/components/MenuLink';
import Layout from '@/components/Layout';
import PopularArticles from '@/components/PopularArticles';


const components = {
  article: Article,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero: Hero,
  config: Config,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
  layout: Layout,
  all_articles: AllArticles,
  popular_articles: PopularArticles,
};
  
storyblokInit({
  accessToken: "5HIyXzWdVHvFkYWyJ3RCHgtt",
  use: [apiPlugin],
  components
});

function MyApp({ Component, pageProps }) {
  
  return (
    <Layout story={pageProps.config}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
