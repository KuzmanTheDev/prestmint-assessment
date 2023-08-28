import { Blog } from '@components/Blog';
import { CustomerConnect } from '@components/CustomerConnect';
import { Hero } from '@components/Hero';
import { Services } from '@components/Services';
import { Testimonial } from '@components/Testimonial';

export const Home = () => {
  return (
    <>
      <Hero />

      <Services />

      <Testimonial />

      <CustomerConnect />

      <Blog />
    </>
  );
};
