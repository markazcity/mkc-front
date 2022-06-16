import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const SocialShare = (props) => {
  return (
    <div className="mx-10 lg:mx-0 social-share">
      <FacebookShareButton quote={props.title} url={props.url}>
        <img src="/assets/icons/facebook.png" alt="" />
      </FacebookShareButton>
      <TwitterShareButton title={props.title} url={props.url}>
        <img src="/assets/icons/twitter.png" alt="" />
      </TwitterShareButton>
      <WhatsappShareButton
        title={"*" + props.title + "*" + "\n" + "_Read More:_ "}
        url={props.url}
      >
        <img src="/assets/icons/wa.png" alt="" />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShare;
