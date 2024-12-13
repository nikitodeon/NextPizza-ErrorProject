// import { Container, ProductForm } from '@/components/shared';
// import { prisma } from '@/prisma/prisma-client';
// import { notFound } from 'next/navigation';

import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { Container, ProductImage } from "@/components/shared";
import { Title } from "@/components/shared/title";

import { GroupVariants } from "@/components/shared/group-variants";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        {/* <ProductForm product={product} /> */}
        <ProductImage imageUrl={product.imageUrl} size={20} />
        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title
            text={product.name}
            size="sm"
            className="font-extrabold mb-1"
          />

          <p className=" text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </p>
          <GroupVariants
            value="2"
            items={[
              { name: "Маленькая", value: "1" },
              { name: "Средняя", value: "2" },
              { name: "Большая", value: "3", disabled: true },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
