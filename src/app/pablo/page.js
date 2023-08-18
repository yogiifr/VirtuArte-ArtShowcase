import Link from "next/link";

export default function Pablo() {
  return (
    <main className="bg-white text-black h-screen">
      <title>Pablo Picasso- VirtuArte</title>
      <div className="grid grid-cols-2 content-center align-middle h-screen mx-[500px]">
        <div className=" text-right">
          <Link href="./">
            <div className="mb-10">Back to Home</div>
          </Link>
          <h1 className="text-[200px] leading-[180px]">Pablo Picasso</h1>
          <p className="text-[50px]"> ini siapa dia mengapa dan dimana apakah begitu sudah</p>
        </div>
        <div className="flex">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ml-[100px]">
            <a href="#">
              <img class="rounded-t-lg w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/L%C3%A9onard_de_Vinci%2C_sainte_Anne%2C_Louvre.jpg/270px-L%C3%A9onard_de_Vinci%2C_sainte_Anne%2C_Louvre.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">Anak Kambing</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">2001</p>
            </div>
          </div>

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ml-[100px]">
            <a href="#">
              <img class="rounded-t-lg w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/L%C3%A9onard_de_Vinci%2C_sainte_Anne%2C_Louvre.jpg/270px-L%C3%A9onard_de_Vinci%2C_sainte_Anne%2C_Louvre.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">Anak Kambing</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">2001</p>
            </div>
          </div>

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ml-[100px]">
            <a href="#">
              <img class="rounded-t-lg w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/L%C3%A9onard_de_Vinci%2C_sainte_Anne%2C_Louvre.jpg/270px-L%C3%A9onard_de_Vinci%2C_sainte_Anne%2C_Louvre.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">Anak Kambing</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">2001</p>
            </div>
          </div>

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ml-[100px]">
            <a href="#">
              <img class="rounded-t-lg w-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/L%C3%A9onard_de_Vinci%2C_sainte_Anne%2C_Louvre.jpg/270px-L%C3%A9onard_de_Vinci%2C_sainte_Anne%2C_Louvre.jpg" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">Anak Kambing</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">2001</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
