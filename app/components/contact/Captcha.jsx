import ReCAPTCHA from "react-google-recaptcha";

export default function Captcha({ onVerify, error }) {
  return (
    <div className="mb-6">
      <ReCAPTCHA
        sitekey="6LcwEnMrAAAAAOwFGJVHd49Qf7N-czaZys1zRe6_"
        onChange={onVerify}
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
