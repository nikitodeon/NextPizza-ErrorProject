import {
  Container,
  Filters,
  Title,
  TopBar,

  // Stories,
} from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { prisma } from "@/prisma/prisma-client";

// import { Suspense } from 'react';
// import { GetSearchParams, findPizzas } from '@/shared/lib/find-pizzas';

export default async function Home(/*{ searchParams }: { searchParams: GetSearchParams }*/) {
  const categories = await prisma.category.findMany({
    include: {
      products
      : {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar
        categories={categories.filter(
          (category) => category.products.length > 0
        )}
      />

      {/* <Stories /> */}

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            {/* <Suspense> */}
            <Filters />
            {/* </Suspense> */}
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
