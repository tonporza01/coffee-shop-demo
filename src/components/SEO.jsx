import { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Aroma Oasis Cafe - อโรมา โอเอซิส คาเฟ่`;
    }
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
}
