import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  // description: '',
  items: [
    {
      q: "How many projects can I use Creative Vision Design's services for?",
      a: (
        <>
          Our standard license covers one commercial project or product and unlimited internal tools. Additional licenses can be purchased for more projects.
        </>
      ),
    },
    {
      q: 'Can I use your designs for client work?',
      a: "Yes, you can use our designs for client projects as long as it complies with the licensing terms.",
    },
    {
      q: 'Can I use your designs for open source projects?',
      a: 'Currently, our designs are not available for open source projects. We prioritize offering our best resources through commercial licenses.',
    },
    {
      q: 'Do you provide design files like Figma or Sketch?',
      a: 'Yes, we provide design files along with our services. We believe in offering comprehensive resources to support your design needs.',
    },
  ],
}

export default faq
