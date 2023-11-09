import React from "react";

const FAQ = () => {
  return (
    <section className="md:flex lg:flex gap-5 my-20 ">
      <div className="flex justify-center items-center rounded-xl md:w-[100%] lg:w-[50%] px-4">
        <img
          src="https://i.postimg.cc/J4H7PSTP/FAQ-PNG-Transparent.png"
          alt="FAQ img"
        />
      </div>
      <div className=" md:w-[100%] lg:w-[45%]">
        <h1 className="text-3xl font-semibold text-center py-4">
          Frequently asked Questions?
        </h1>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            01. Does a blog need a homepage?
          </div>
          <div className="collapse-content">
            <p>
              The purpose of a blog homepage It serves three key purposes:
              Attract and captivate visitors. Educate visitors on your brand.
              Encourage readers to visit other pages on your website.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            02. What is a mini blog?
          </div>
          <div className="collapse-content">
            <p>
              It's basically a short version of a blog that allows you to share
              small elements of content, such as single sentences, images, GIFs,
              infographics, videos, links, and audio clips with your audiences.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            03. Do I need FAQ on my website?
          </div>
          <div className="collapse-content">
            <p>
              Visitors will primarily use your site menus to navigate through
              your site, but an FAQ page can also serve as a way to point them
              where they need to go—whether that's a product page, a whitepaper,
              or a blog post they might not have found otherwise.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-5">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium bg-black text-white">
            04. What do blog websites end in?
          </div>
          <div className="collapse-content">
            <p>
              blog, you should probably stick with .com. If it's a good .com
              versus a great . blog, then you might want to go with . blog.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
