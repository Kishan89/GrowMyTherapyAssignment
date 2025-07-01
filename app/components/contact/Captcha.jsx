import ReCAPTCHA from "react-google-recaptcha";

export default function Captcha({ onVerify, error }) {
  return (
    <div className="mb-6">
      {/* Wrapping in a container to scale captcha based on screen size */}
      <div className="w-full overflow-hidden">
        <div
          className="
            transform 
            scale-[0.77] 
            sm:scale-[0.88] 
            md:scale-[0.95] 
            lg:scale-100 
            origin-top-left 
            w-[300px] 
            sm:w-[330px] 
            md:w-[370px] 
            lg:w-[400px]
          "
        >
          <ReCAPTCHA
            sitekey="6LcwEnMrAAAAAOwFGJVHd49Qf7N-czaZys1zRe6_"
            onChange={onVerify}
          />
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
