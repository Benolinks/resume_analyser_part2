import resume from "../assets/Resume_side_icon.png";
import { TiTick } from "react-icons/ti";
import { Score } from "../categories/category";

const Home = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 overflow-hidden rounded-3xl border border-blue-100 bg-linear-to-br from-white via-blue-50/70 to-slate-50 px-6 py-10 shadow-xl shadow-slate-200/50 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-14">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
            Smart resume analysis
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            <span className="text-blue-700">ATS</span> Resume Checker
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Scan your resume for ATS compatibility and get instant feedback to improve your chances.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {
            Score.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm"
              >
                <TiTick className="size-5 rounded-full bg-green-500 text-white" />
                {item.name}
              </div>
            ))}
          </div>

         
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-8 rounded-full bg-blue-200/50 blur-3xl" />
          <img
            className="relative mx-auto w-full max-w-97 object-contain drop-shadow-xl"
            src={resume}
            alt="Resume to be analysed"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
