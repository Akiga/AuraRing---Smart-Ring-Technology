import { useState } from "react";
import { toast } from 'sonner'
import { subscribe } from "../services/api";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.warning("Vui lòng nhập email");
      return;
    }

    try {
      setLoading(true);

      const { ok, data } = await subscribe(email);

      if (!ok) {
        throw new Error(data.message);
      }

      toast.success(data.message);
      setEmail("");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="subscribe"
      className="
        py-24
        bg-slate-900
        text-white
      "
    >

      <div className="max-w-4xl mx-auto px-6 text-center">


        {/* Heading */}
        <h2
          className="
            text-4xl
            font-bold
            mb-4
          "
        >
          Sẵn sàng trải nghiệm AuraRing?
        </h2>


        <p
          className="
            text-slate-400
            mb-10
          "
        >
          Đăng ký ngay để nhận thông tin sản phẩm và ưu đãi mới nhất.
        </p>



        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="
            flex
            flex-col
            md:flex-row
            gap-4
            justify-center
          "
        >

          <input
            type="email"
            placeholder="Nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              md:w-96
              px-5
              py-3
              rounded-xl
              bg-slate-950
              border
              border-slate-700
              text-white
              outline-none
              focus:border-blue-500
            "
          />


          <button
            type="submit"
            disabled={loading}
            className="
              bg-blue-600
              hover:bg-blue-700
              transition
              px-6
              py-3
              rounded-xl
              font-medium
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Đang gửi..." : "Đăng ký"}
          </button>


        </form>


      </div>


    </section>
  );
};


export default Newsletter;