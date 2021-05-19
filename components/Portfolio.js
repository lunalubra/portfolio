import { Container, Flex, Grid, GridItem } from '@chakra-ui/layout';
import React from 'react';
import Badge from './Badge';
import { FadeInBox } from './FadeInBox';
import { IntersectionObserver } from './IntersectionObserver';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
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
              { type: 'video', data: '/floral_5.mp4' },
              { type: 'image', data: '/floral_1.png' },
              { type: 'image', data: '/floral_2.png' },
              { type: 'image', data: '/floral_3.png' }
            ]}
          />
        </GridItem>
        <GridItem>
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
        </GridItem>
        <GridItem>
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
        </GridItem>
        <GridItem>
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
        </GridItem>
        <GridItem>
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
        </GridItem>
        <GridItem>
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
              { type: '/shoe-customizer.png', data: '/shoe-customizer.png' }
            ]}
          />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Portfolio;
