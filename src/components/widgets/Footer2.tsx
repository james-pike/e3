import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import IconFacebook from "../icons/IconFacebook";
import IconGithub from "../icons/IconGithub";
import IconInstagram from "../icons/IconInstagram";




export default component$(() => {
  const links = [
    {
      title: "About",
      items: [
        { title: "About", href: "#" },
        { title: "Team", href: "#" },
        { title: "Testimonials", href: "#" },
        { title: "FAQs", href: "#" },
        
     
      ],
    },
    {
      title: "About",
      items: [
        { title: "Our Story", href: "#" },
        { title: "Artisans", href: "#" },
        { title: "Techniques", href: "#" },
        { title: "Materials", href: "#" },
      ],
    },
    {
      title: "Community",
      items: [
        { title: "Partners", href: "#" },
        { title: "Gallery", href: "#" },
        { title: "FAQ", href: "#" },
      ],
    },
    {
      title: "Connect",
      items: [
        { title: "Instagram", href: "#" },
        { title: "Pinterest", href: "#" },
        { title: "Workshops", href: "#" },
      ],
    },
  ];

  const social = [
    { label: "Instagram", icon: IconInstagram, href: "#" },
    { label: "Pinterest", icon: IconFacebook, href: "#" },
    { label: "Facebook", icon: IconFacebook, href: "#" },
    {
      label: "Contact",
      icon: IconGithub,
      href: "#",
    },
  ];

  return (
    <footer class="relative border-t border-sage-200 dark:border-clay-700 overflow-hidden">
      {/* Background with pottedry textures */}
      <div class="absolute inset-0 bg-pottery-texture opacity-10" aria-hidden="true"></div>
      
      {/* Gradient background */}
      <div class="absolute inset-0 bg-gradient-to-br from-sage-100/50 via-earth-50/30 to-clay-50/50" aria-hidden="true"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="mb-4">
              <Link class="inline-block font-bold text-xl font-serif" href={"/"}>
                <span class="bg-gradient-to-r from-sage-600 to-clay-600 bg-clip-text text-transparent">
                  earthen vessels
                </span>
              </Link>
            </div>
            <div class="text-sm text-sage-700 dark:text-sage-300 leading-relaxed">
Here, we gather around clay, to listen deeply to one another, to ourselves, and to the earth as we shape earthen vessels.            </div>
            
            {/* Newsletter signup */}
            {/* <div class="mt-6">
              <h4 class="text-sm font-semibold text-clay-800 dark:text-clay-200 mb-3">Join our newsletter</h4>
              <div class="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  class="flex-1 px-4 py-2 text-sm border border-clay-200 dark:border-clay-600 rounded-l-full bg-white/80 dark:bg-clay-800/80 text-clay-900 dark:text-clay-100 placeholder-sage-500 focus:outline-none focus:ring-2 focus:ring-clay-500"
                />
                <button class="px-4 py-2 bg-gradient-to-r from-clay-600 to-clay-700 text-white text-sm font-medium rounded-r-full hover:from-clay-700 hover:to-clay-800 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div> */}

              <ul class="flex mb-0 mt-4 md:order-1 -ml-2 md:mb-0">
            {social.map(({ label, href, icon: Icon }, index) => (
              <li key={index}>
                <Link
                  class="text-sage-600 dark:text-sage-400 hover:bg-clay-100 dark:hover:bg-clay-700 focus:outline-none focus:ring-4 focus:ring-clay-200 dark:focus:ring-clay-700 rounded-lg text-sm p-2.5 inline-flex items-center transition-all duration-200"
                  aria-label={label}
                  title={label}
                  href={href}
                >
                  {typeof Icon !== "undefined" && <Icon />}
                </Link>
              </li>
            ))}
          </ul>
          </div>
          {links.map(({ title, items }, index) => (
            <div key={index} class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="text-clay-800 dark:text-clay-200 font-semibold mb-4">{title}</div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm space-y-2">
                  {items.map(({ title, href }, index2) => (
                    <li key={index2}>
                      <Link
                        class="text-sage-700 hover:text-clay-600 dark:text-sage-300 dark:hover:text-clay-300 transition-colors duration-200 ease-in-out"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div class="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-clay-200/50 dark:border-clay-700/50">
        

          <div class="text-sm text-sage-700 dark:text-sage-300">
<div style="width: 100px; height: 40px;" class="mb-4">
  <img src="/images/logo2.svg" alt="Logo"/>
</div>              © 2025 {" "}
            
            earthen vessels 
            <span class="text-clay-600 dark:text-clay-400"> ♥</span>{" "}
             All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
});
