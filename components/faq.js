'use client'

import { useEffect } from "react"


export default function FAQs() {

    useEffect(() => {
        // This code will only run on the client side
        if (typeof window !== 'undefined') {
            const toggles = document.querySelectorAll('.faq-toggle');

            toggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    toggle.parentNode.classList.toggle('active');
                });
            });

            // Cleanup function to remove event listeners
            return () => {
                toggles.forEach(toggle => {
                    toggle.removeEventListener('click', () => {
                        toggle.parentNode.classList.toggle('active');
                    });
                });
            };
        }
    }, []);
    return (
        <>
            <h1 className="faq-heading" id="faqs">Frequently Asked Questions</h1>
            <div class="faq-container">
                <div class="faq active">
                    <h3 class="faq-title">
                        What materials are used in your furniture?
                    </h3>
                    <p class="faq-text">
                        We use premium quality solid wood, genuine leather, and high-grade metals to ensure durability and elegance in all our furniture pieces.
                    </p>
                    <button class="faq-toggle">
                        <i class="fas fa-chevron-down"></i>
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <div class="faq">
                    <h3 class="faq-title">
                        How long does delivery usually take?
                    </h3>
                    <p class="faq-text">
                        Standard delivery takes 7-10 business days. For custom pieces, please allow 3-4 weeks for crafting and delivery.
                    </p>
                    <button class="faq-toggle">
                        <i class="fas fa-chevron-down"></i>
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <div class="faq">
                    <h3 class="faq-title">
                        Do you offer assembly services?
                    </h3>
                    <p class="faq-text">
                        Yes, we provide professional assembly services for an additional fee. Most items can also be self-assembled with our detailed instructions.
                    </p>
                    <button class="faq-toggle">
                        <i class="fas fa-chevron-down"></i>
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <div class="faq">
                    <h3 class="faq-title">
                        What is your return policy?
                    </h3>
                    <p class="faq-text">
                        We offer a 30-day return policy for unused items in original packaging. Custom pieces are final sale.
                    </p>
                    <button class="faq-toggle">
                        <i class="fas fa-chevron-down"></i>
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <div class="faq">
                    <h3 class="faq-title">
                        How do I care for my furniture?
                    </h3>
                    <p class="faq-text">
                        Use a soft, dry cloth for regular cleaning. For wood, we recommend our specialty polish. Avoid direct sunlight and excessive moisture.
                    </p>
                    <button class="faq-toggle">
                        <i class="fas fa-chevron-down"></i>
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </>
    )
}