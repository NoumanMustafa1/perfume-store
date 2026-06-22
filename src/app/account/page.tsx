import Link from "next/link";

export const metadata = {
  title: "Account | NOIRÉ",
  description: "Manage your NOIRÉ account",
};


export default function AccountPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] px-6 py-16 text-[#1C1A17]">

      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-12 text-center">

          <p className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-[#9C8B6E]
          ">
            NOIRÉ Account
          </p>


          <h1 className="
            mt-4
            font-serif
            text-5xl
            italic
          ">
            Welcome Back
          </h1>


          <p className="
            mt-5
            text-gray-600
          ">
            Access your orders, saved fragrances, and personal preferences.
          </p>

        </div>



        {/* Account Cards */}

        <div className="
          grid
          gap-8
          md:grid-cols-2
        ">


          {/* Login */}

          <div className="
            rounded-xl
            border
            border-[#E4DDD4]
            bg-white
            p-8
          ">

            <h2 className="
              font-serif
              text-3xl
            ">
              Sign In
            </h2>


            <p className="
              mt-3
              text-sm
              text-gray-500
            ">
              Already have an account?
            </p>


            <form className="mt-8 space-y-5">


              <input
                type="email"
                placeholder="Email address"
                className="
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  px-4
                  py-3
                  outline-none
                  focus:border-[#C9A96E]
                "
              />


              <input
                type="password"
                placeholder="Password"
                className="
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  px-4
                  py-3
                  outline-none
                  focus:border-[#C9A96E]
                "
              />


              <button
                type="submit"
                className="
                  w-full
                  rounded-lg
                  bg-[#1C1A17]
                  py-3
                  text-sm
                  uppercase
                  tracking-widest
                  text-white
                  transition
                  hover:bg-black
                "
              >
                Sign In
              </button>


            </form>


            <Link
              href="#"
              className="
                mt-5
                block
                text-center
                text-sm
                text-[#9C8B6E]
              "
            >
              Forgot password?
            </Link>


          </div>






          {/* Register */}

          <div className="
            rounded-xl
            border
            border-[#E4DDD4]
            bg-[#1C1A17]
            p-8
            text-[#FAF8F4]
          ">


            <h2 className="
              font-serif
              text-3xl
            ">
              Create Account
            </h2>


            <p className="
              mt-3
              text-gray-400
            ">
              Join NOIRÉ and receive access to exclusive collections.
            </p>


            <ul className="
              mt-8
              space-y-4
              text-sm
              text-gray-300
            ">

              <li>
                ✦ Track your perfume orders
              </li>

              <li>
                ✦ Save your favorite fragrances
              </li>

              <li>
                ✦ Receive collection updates
              </li>

              <li>
                ✦ Create custom perfume profiles
              </li>

            </ul>



            <Link
              href="/register"
              className="
                mt-10
                block
                rounded-lg
                bg-[#C9A96E]
                py-3
                text-center
                text-sm
                uppercase
                tracking-widest
                text-black
                transition
                hover:bg-[#d8bb88]
              "
            >
              Create Account
            </Link>


          </div>


        </div>






        {/* Orders Preview */}

        <div className="
          mt-12
          rounded-xl
          border
          border-[#E4DDD4]
          bg-white
          p-8
        ">


          <h2 className="
            font-serif
            text-3xl
          ">
            Your Orders
          </h2>


          <p className="
            mt-3
            text-gray-500
          ">
            Sign in to view your fragrance history and order status.
          </p>


          <Link
            href="/shop"
            className="
              mt-6
              inline-block
              border-b
              border-[#C9A96E]
              pb-1
              text-sm
              uppercase
              tracking-widest
              text-[#9C8B6E]
            "
          >
            Explore Perfumes
          </Link>


        </div>


      </div>


    </main>
  );
}