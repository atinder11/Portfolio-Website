import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

function Cta() {
  return (
    <>
      <section className="py-24  dark:bg-secondary/40">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <h2 className="h2 max-w-xl text-center mb-8">
              Ready to build something amazing together? Let's connect!
            </h2>

            <Button>
              <Link href="/contact" passHref>
                Contact me
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cta;
