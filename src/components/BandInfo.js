import parse from "html-react-parser";
import DOMPurify from "dompurify";

/**
 * Functional component that renders the band's image and description.
 * Displayed as the left column on the page.
 */
function BandInfo({ band }) {
  const { description_blurb, imgUrl, name } = band;

  // Sanitize and parse through the description_blurb JSON data which includes raw HTML.
  const cleanHtml = DOMPurify.sanitize(description_blurb);
  const descriptionContent = parse(cleanHtml);

  return (
    <div className="band-info">
      <img src={imgUrl} alt={`Band: ${name}`} className="band-image" />
      <p className="band-description">{descriptionContent}</p>
    </div>
  );
}

export default BandInfo;
