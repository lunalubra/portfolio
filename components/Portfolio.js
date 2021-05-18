import { Container, Flex, Grid, GridItem } from '@chakra-ui/layout';
import React from 'react';
import Badge from './Badge';
import { FadeInBox } from './FadeInBox';
import { IntersectionObserver } from './IntersectionObserver';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const IMAGE =
    'data:image/jpeg;base64,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';
  return (
    <Container maxW={'6xl'} minW="80vw" mx="auto" mt={10}>
      <Flex>
        <Badge>Projects</Badge>
      </Flex>
      <Grid
        templateRows={['repeat(6, 1fr)', 'repeat(6, 1fr)', 'repeat(2, 1fr)']}
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']}
        gap={4}
      >
        <GridItem>
          <IntersectionObserver>
            <FadeInBox>
              <ProjectCard
                title="Floral | Green aesthetic shop"
                bgColor="green.400"
                subtitle="Using vanilla js, webpack, scss and WebGL"
                tags={[
                  { color: 'blue', text: 'Digital Ocean' },
                  { color: 'green', text: 'Node & Express' },
                  { color: 'purple', text: 'Prismic' },
                  { color: 'pink', text: 'SCSS' },
                  { color: 'blue', text: 'Webpack' },
                  { color: 'yellow', text: 'Javascript' },
                  { color: 'orange', text: 'Pug' },
                  { color: 'green', text: 'GSAP' },
                  { color: 'cyan', text: 'WebGL' },
                  { color: 'yellow', text: 'OGL' }
                ]}
                description="Floral is the result of completing and modifying the Bizarro's awwwards course! It uses an node/express based router, a webpack bundler, a content managment feature with prismic and animations & effects with SCSS, GSAP and OGL (a WebGL library). This is my version of the project of the course, i have changed the fonts, images, texts, colors, structure and animations to look more like me! I love green jaja. Hope you like it!"
                links={[
                  {
                    text: 'OGL',
                    href: 'https://oframe.github.io/ogl/examples/?src=load-json.html'
                  },
                  {
                    text: "Bizarro's personal page",
                    href: 'https://bizar.ro/'
                  },
                  {
                    text: "Bizarro's course at awwwards",
                    href: 'https://www.awwwards.com/academy/course/building-an-immersive-creative-website-from-scratch-without-frameworks'
                  },
                  {
                    text: 'Digital Ocean',
                    href: 'https://www.digitalocean.com/'
                  }
                ]}
                githubLink="https://github.com/LunacTec/floral"
                webLink="http://167.172.189.39"
                mainMedia={'/floral_1.png'}
                media={[
                  { type: 'video', data: '/floral_5.webm' },
                  { type: 'image', data: '/floral_1.png' },
                  { type: 'image', data: '/floral_2.png' },
                  { type: 'image', data: '/floral_3.png' }
                ]}
              />
            </FadeInBox>
          </IntersectionObserver>
        </GridItem>
        <GridItem>
          <IntersectionObserver>
            <FadeInBox>
              <ProjectCard
                title="Goposto | Client & Invoice dashboard"
                subtitle="The new way of handleing for freelancers"
                description="Goposto is the new way of handleling clients and invoices for freelancers, and even get analytics related to them! It has 2 dashboards, the invoice one, where you manage your invoices and get a analytics about your total gains, and the clients one, where you handle your clients information, and also how many $$$ a client has given you in total! Hope you like it"
                howTo="First, go to the page, then, register your account by clicking the top right button. Once that is completed, you gain access to the dashboards! You just need to start adding clients, and invoices related to them! (you need to have at least one client to start adding and receiving analytics abot invoices)"
                tags={[
                  { color: 'blue', text: 'React' },
                  { color: 'black', text: 'Next.js' },
                  { color: 'yellow', text: 'Recharts' },
                  { color: 'cyan', text: 'Chakra ui' },
                  { color: 'orange', text: 'Firebase' },
                  { color: 'black', text: 'SWR' },
                  { color: 'red', text: 'react-hook-form' }
                ]}
                githubLink="https://github.com/LunacTec/goposto"
                webLink="https://www.goposto.com/"
                links={[
                  {
                    text: 'Chakra-ui',
                    href: 'https://chakra-ui.com/'
                  },
                  {
                    text: 'Rechart',
                    href: 'https://recharts.org/en-US/'
                  }
                ]}
                mainMedia={'/goposto_1.png'}
                media={[
                  { type: 'image', data: '/goposto_1.png' },
                  { type: 'image', data: '/goposto_2.png' },
                  { type: 'image', data: '/goposto_3.png' }
                ]}
              />
            </FadeInBox>
          </IntersectionObserver>
        </GridItem>
        <GridItem>
          <IntersectionObserver>
            <FadeInBox>
              <ProjectCard
                title="WebRTC | Videochat App Showcase"
                bgColor="blue.400"
                subtitle="WebRTC showcase using socket.io & next.js"
                description="This project uses technologies like WebRTC, node.js and socket.io to create a videochat app! Its the result of completing and modifying a 3 hour course on udemy. Hope you like it"
                howTo="If you want to use this project by your own, just enter the page with your mobile and laptop, and call your self! (you need 2 devices with camera and microphone) (You should also make sure your microphone and camera are enabled in your browser) (You can not share screen from mobile)"
                tags={[
                  { color: 'purple', text: 'Heroku' },
                  { color: 'green', text: 'Node & Express' },
                  { color: 'black', text: 'socket.io' },
                  { color: 'red', text: 'WebRTC' },
                  { color: 'blue', text: 'React' },
                  { color: 'purple', text: 'Redux' },
                  { color: 'black', text: 'Next.js' },
                  { color: 'cyan', text: 'Chakra ui' }
                ]}
                githubLink="https://github.com/LunacTec/web-rtc-showcase-frontend"
                webLink="https://webrtc-videochat-showcase.vercel.app"
                links={[
                  {
                    text: 'WebRTC',
                    href: 'https://webrtc.org/'
                  },
                  {
                    text: 'socket.io',
                    href: 'https://socket.io/'
                  },
                  {
                    text: 'Heroku',
                    href: 'https://heroku.com/home'
                  }
                ]}
                mainMedia={'/webrtc.png'}
                media={[
                  { type: 'video', data: '/webrtc.mp4' },
                  { type: 'image', data: '/webrtc.png' }
                ]}
              />
            </FadeInBox>
          </IntersectionObserver>
        </GridItem>
        <GridItem>
          <IntersectionObserver>
            <FadeInBox>
              <ProjectCard
                title="Multiuser blogging plataform"
                bgColor="blue.600"
                subtitle="Using Next.js, Firebase and markdown"
                description="This multiuser blogging plataform is a dev.to clone! Hope you like it and find it interesting! Its the result of compliting a fireship.io course! Go and have fun, register, like some post, write your own and play with the images and markdown!"
                tags={[
                  { color: 'blue', text: 'React' },
                  { color: 'black', text: 'Next.js' },
                  { color: 'pink', text: 'SCSS' },
                  { color: 'purple', text: 'Markdown' },
                  { color: 'orange', text: 'Firebase' }
                ]}
                githubLink="https://github.com/LunacTec/dev.to-clone"
                webLink="https://dev-to-clone.vercel.app/"
                mainMedia={'/dev-to-clone.png'}
                media={[
                  { type: 'video', data: '/dev-to-clone.mp4' },
                  { type: 'image', data: '/dev-to-clone.png' }
                ]}
              />
            </FadeInBox>
          </IntersectionObserver>
        </GridItem>
        <GridItem>
          <IntersectionObserver>
            <FadeInBox>
              <ProjectCard
                title="Video transcriptor with symbl.ai"
                bgColor="orange.400"
                subtitle="Using Symbl.ai, chakra-ui & framer-motion"
                description="This project uses the symbl.ai artificial inteligence api to transcript your videos into text!"
                howTo="If you want to try it your self, go to the page, then, click on log in (you are login with my keys, if you want, you can go to symbl.ai, create an account, and copy your own keys). Then, you just need to select a downloaded video from your computer, and then click the 'Process' button! (I dont recommend using long videos, because you will need to wait a lot) (Make sure you select a video)"
                tags={[
                  { color: 'blue', text: 'React' },
                  { color: 'black', text: 'Next.js' },
                  { color: 'purple', text: 'Symbl.ai' },
                  { color: 'cyan', text: 'Chakra ui' },
                  { color: 'white', text: 'framer motion' }
                ]}
                githubLink="https://github.com/LunacTec/video-transcriptor-app"
                webLink="https://video-transcription-app.vercel.app/"
                links={[
                  {
                    text: 'Symbl.ai',
                    href: 'https://symbl.ai/'
                  }
                ]}
                mainMedia={'/video-transcriptor_3.png'}
                media={[
                  { type: 'video', data: '/video-transcriptor.mp4' },
                  { type: 'image', data: '/video-transcriptor_2.png' },
                  { type: 'image', data: '/video-transcriptor_1.png' },
                  { type: 'image', data: '/video-transcriptor_3.png' }
                ]}
              />
            </FadeInBox>
          </IntersectionObserver>
        </GridItem>
        <GridItem>
          <IntersectionObserver>
            <FadeInBox>
              <ProjectCard
                title="Shoe customizer | WebGL ~ SCSS"
                subtitle="3D Shoe customizer using framer-motion and react"
                description="This project is one of the simplest ones in my portfolio! Just go to the page, and start playing and customizing your own shoe! (If you struggle with the animations at the start, just refresh your page a couple of times)"
                tags={[
                  { color: 'black', text: 'Next.js' },
                  { color: 'blue', text: 'React' },
                  { color: 'pink', text: 'SCSS' },
                  { color: 'white', text: 'Three.js' },
                  { color: 'blue', text: 'WebGL' },
                  { color: 'black', text: 'framer motion' },
                  { color: 'orange', text: 'HTML' },
                  { color: 'white', text: 'Valtio' }
                ]}
                githubLink="https://github.com/LunacTec/shoe-customizer"
                webLink="https://shoe-customizer.vercel.app/"
                links={[
                  {
                    text: 'Three.js',
                    href: 'https://threejs.org/'
                  }
                ]}
                mainMedia={'/shoe-customizer.png'}
                media={[
                  { type: 'video', data: '/shoe-customizer.mp4' },
                  { type: '/shoe-customizer.png', data: IMAGE }
                ]}
              />
            </FadeInBox>
          </IntersectionObserver>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Portfolio;
