import React, { useState } from "react";
import Link from "next/link";

export default function ListaModulosExtra() {
  const products = [
    {
      id: 9,
      name: "Javascript",
      href: "/JavascriptExtra",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
      imageAlt: "Front of men's Basic Tee in black.",
      className:
        "h-full w-full object-cover object-center lg:h-full lg:w-full imagen-producto",
    },

    {
      id: 10,
      name: "HTML",
      href: "/HtmlExtra",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 11,
      name: "CSS",
      href: "#",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 12,
      name: "Java",
      href: "#",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/560px-Java_programming_language_logo.svg.png",
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 13,
      name: "C",
      href: "#",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 14,
      name: "C++",
      href: "#",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 15,
      name: "C#",
      href: "#",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/d/d2/C_Sharp_Logo_2023.svg",
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 16,
      name: "Python",
      href: "#",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg",
      imageAlt: "Front of men's Basic Tee in black.",
    },
  ];
  return (
    <main className="relative">
      <div className="flex flex-col justify-center items-center min-h-screen min-w-screen text-center mt-2 mb-2 p-5">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-3">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Recursos Adicionales
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group relative ">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className={`h-full w-full object-cover object-center lg:h-full lg:w-full p-5 ${product.className}`}
                    />
                  </div>
                  <div className="mt-4 mb-4 p- flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700 ">
                        <Link href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 "
                          />
                          {product.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
