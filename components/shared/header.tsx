"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";
// import { CartButton } from './cart-button';
// import { useRouter, useSearchParams } from 'next/navigation';
// import toast from 'react-hot-toast';
// import { ProfileButton } from './profile-button';
// import { AuthModal } from './modals';

interface Props {
  //   hasSearch?: boolean;
  //   hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({
  /* hasSearch = true, hasCart = true, */ className,
}) => {
  //   const router = useRouter();
  //   const [openAuthModal, setOpenAuthModal] = React.useState(false);

  //   const searchParams = useSearchParams();

  //   React.useEffect(() => {
  //     let toastMessage = '';

  //     if (searchParams.has('paid')) {
  //       toastMessage = 'Заказ успешно оплачен! Информация отправлена на почту.';
  //     }

  //     if (searchParams.has('verified')) {
  //       toastMessage = 'Почта успешно подтверждена!';
  //     }

  //     if (toastMessage) {
  //       setTimeout(() => {
  //         router.replace('/');
  //         toast.success(toastMessage, {
  //           duration: 3000,
  //         });
  //       }, 1000);
  //     }
  //   }, []);

  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>

        {/* {hasSearch && (*/}
        <div className="mx-10 flex-1">
          <SearchInput />
        </div>
        {/*  )} */}

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16}></User>Войти
          </Button>
          <div>
            <Button className="group relative">
              <b>520 r</b>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className="h-4 w-4 relative " strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
          {/* <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />

          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

          {hasCart && <CartButton />} */}
        </div>
      </Container>
    </header>
  );
};
