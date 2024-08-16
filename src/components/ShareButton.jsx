import {
  TwitterShareButton,
  FacebookShareButton,
  XIcon,
  FacebookIcon,
} from "react-share";

export const SocialShareButtons = (props) => {
  const { url, title } = props;
  return (
    <div className="text-right mt-2">
      <TwitterShareButton url={url} title={title} className="mx-2">
        <XIcon round size={32} />
      </TwitterShareButton>
      <FacebookShareButton url={url} className="mx-2">
        <FacebookIcon round size={32} />
      </FacebookShareButton>
    </div>
  );
};
