# Web Developer Assignment

This repository contains my implementation of the Interactive Customer Testimonial Development assignment.

## Assignment Definitions

### How highlighted reviews were selected
When considering which reviews were the most impactful towards the goals of strengthening the product experience and supporting the overall conversion flow, I prioritized reviews that: 
1. #### Explicitly stated a commonality
  > When I read through reviews, I am looking for evidence or validation that the product will apply to my specific situation. If I am unsure whether a particular pair of running shoes can be used for weight lifting, and I see many reviews about users who have had a great experience at the gym with this product, I am more inclined to trust that this product is for me. I had noticed there were a lot of reviews that explicitly mentioned Postpartum, Hormones, PCOS, Stress, and Menopause, so I selected these reviews so they could relate to the reader.
  
2. #### Specified a resolution to the problem
  > I favored reviews that described a situation they had, and how the product had solved it. It is a strong, definitive statement of how the product directly affected them in a positive way.

3. #### Related to the target age range of the product.
  > Because this section is being utilized for the same product (Nutrafol Core for Women), I believed it would make a lot more sense to only include reviews from the users within that age range. Since the product had been advertised for the age range of 18-44, I didn't want there to be any confusion if reviewers of that product were above or below that range.

### The structure and layout of the section
I decided to keep the structure and layout of this section very clean and simple. I included a couple of headlining titles at the top to invite users to view stories that are similar to their own stories and worries. The remainder of the section consists of the filter controls followed by the testimonies. I rendered the testimonies dynamically (instead of copy and pasting strings directly into the component) to simulate a practical scenario. Because there were a lot of strong testimonies, I implemented a carousel that allows the user navigate left and right, smoothly transitioning to the other reviews. I had some trouble trying to decide how I wanted to keep the testimony cards the same height with varying review lengths, but I realized that having vertical flex boxes for each column of reviews and letting those columns have its own height were both simple and visually effective. I went with the carousel approach instead of laying out a long list or grid of reviews because I didn't want to overwhelm the reader with too many words and wanted to keep the CTA button close while still being at the bottom. For the Call to Action button, I used the text: "Try it Yourself" as a way to connect the stories to the user's own experience. I attempted to keep a similar color palette as the original website.

### Any interactions or filtering I believe are valuable
The filtering options are the commonalities I've found when going through the reviews. As stated before, I find that reading testimonies that share the same experience as me will help me relate to those users and trust the product. I included hormones into the category "PCOS/Hormones" to include the demographic of users with general hormonal issues. For the sake of product relevance, I've chosen not to include menopause as one of the filtering options because not many authors that mentioned menopause were within that target age range. I believed these filters were valuable because they reinforce the company's claims that the product performs well in these areas. I included a small amount of filter options to make the actual filter component easy to use and simple.

## Other considerations

### Tech Stack
#### React 
- React is my go-to library when it comes to developing clean and performant components. It is also the library that Pacagen uses.

#### CSS
- I usually work with TailwindCSS to make styling easier, but I decided not to include this library as I wanted to prove I can work comfortably with plain CSS.

#### TypeScript
- I'm aware that Pacagen does not currently use TypeScript, but I chose to use it for this project because it's a statically typed version of JavaScript and shows that I can enforce strong code quality and discipline.

#### React Icons
- I installed react-icons for arrow icons. (Carousel left and right buttons, and the CTA button)
