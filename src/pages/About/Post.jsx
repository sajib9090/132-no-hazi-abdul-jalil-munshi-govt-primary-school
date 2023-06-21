const Post = () => {
  return (
    <div className="grid md:grid-cols-2 px-4 mt-14">
      <div className="h-[370px]">
        <img
          className="w-[100%] h-[100%]"
          src="https://i.ibb.co/gMpPwmR/news-1.jpg"
          alt=""
        />
      </div>
      <div className="h-[370px] flex flex-col justify-center md:pl-8">
        <h4 className="font-light text-sm tracking-[12px]">VISION</h4>
        <h1 className="font-bold text-[36px] max-w-sm text-[#666666]">
          Doing the right thing, at the right time.
        </h1>
        <p className="dividerr"></p>
        <p className="text-[#666666] text-sm mt-4 max-w-md">
          Duis vel erat quis justo vehicula vulputate sit amet nec nisi. Fusce a
          venenatis arcu, vel varius mi. Donec elit lacus, fringilla placerat
          aliquet sed, eleifend ac tortor. Morbi lectus mi, imperdiet a metus
          vel, consectetur blandit est.{" "}
        </p>
      </div>
    </div>
  );
};

export default Post;
