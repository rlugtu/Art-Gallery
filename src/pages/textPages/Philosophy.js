import React, { useRef } from "react";
import { Flex, Button, Heading, Text, Stack } from "@chakra-ui/react";

const Philosophy = () => {
  const myRef = useRef();

  const scrollTo = (id) => {
    let div = document.querySelector(`#${id}`);
    div.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Flex w="100%" pl="20px" pr="40px" pt="30px">
      <Stack spacing={20} mt={40} w="20%" position="fixed">
        <Button
          p={8}
          whiteSpace="normal"
          w="175px"
          border="1px solid black"
          onClick={() => scrollTo("artAndArtist")}
        >
          ART AND THE ARTIST
        </Button>
        <Button
          p={10}
          whiteSpace="normal"
          w="175px"
          border="1px solid black"
          onClick={() => scrollTo("creativeProcess")}
        >
          THE CREATIVE PROCESS
        </Button>
        <Button
          p={10}
          whiteSpace="normal"
          w="175px"
          border="1px solid black"
          onClick={() => scrollTo("noCompetitions")}
        >
          NO COMPETITIONS
        </Button>
        <Button
          p={10}
          whiteSpace="normal"
          w="175px"
          border="1px solid black"
          onClick={() => scrollTo("noColoringBooks")}
        >
          NO COLORING BOOKS
        </Button>
        <Button
          p={10}
          whiteSpace="normal"
          w="175px"
          border="1px solid black"
          onClick={() => scrollTo("liberatedWoman")}
        >
          LIBERATED WOMAN
        </Button>
        <Button
          p={10}
          whiteSpace="normal"
          w="175px"
          border="1px solid black"
          onClick={() => scrollTo("artAndNature")}
        >
          ART AND NATURE
        </Button>
        <Button
          p={10}
          whiteSpace="normal"
          w="175px"
          border="1px solid black"
          onClick={() => scrollTo("artEducation")}
        >
          ART EDUCATION
        </Button>
        <Button
          p={10}
          whiteSpace="normal"
          w="175px"
          border="1px solid black"
          onClick={() => scrollTo("artChildDev")}
        >
          ART AND CHILD DEVELOPMENT
        </Button>
        <Button
          p={10}
          whiteSpace="normal"
          w="175px"
          border="1px solid black"
          onClick={() => scrollTo("temimaBooks")}
        >
          TEMIMA'S BOOKS ON ART EDUCATION
        </Button>
      </Stack>

      <Flex flexDirection="column" px={80} pl={260}>
        <Stack spacing={20} id="artAndArtist">
          <Heading my={0} mt={40}>
            ART AND THE ARTIST
          </Heading>
          <Text>
            “For the artist, the discipline of the craft must always be
            maintained. That is, the understanding of space, color and form. You
            the artist, must be dedicated to the task you have set for yourself.
            Despite its heavy and relentless demands. It is a task from which
            you would never wish to be free.”
          </Text>
          <Text>
            “I am not a competitive artist. I am not interested in being better
            than anybody else. The person I compete with is myself. I am happy
            when people like my work, but if I am not satisfied, their
            compliments will have no meaning for me. It is impossible to be a
            free, creative human being if you try to satisfy someone else’s
            standard of what is good. I have always set my own standards and
            gone my own merry way.”
          </Text>
          <Text>
            “I am not an artist who says “let people get what they can out of my
            art.”
          </Text>
          <Text>
            I want the world to see my work, to understand and love it. When I
            put something down in stone or clay, I am sharing my insights into
            nature, my feelings about humanity.”
          </Text>
          <Text>
            “My art reflects my fundamental concerns and values. My sculpture
            represents the integration of traditional ideas of social justice,
            moral and ethical concepts with a personal interpretation of their
            application to contemporary life in our world today.”
          </Text>
        </Stack>

        <Stack spacing={20} id="creativeProcess">
          <Heading my={0} mt={40}>
            THE CREATIVE PROCESS
          </Heading>
          <Text>
            “The creative process gives meaning to life. When we finally learn
            that we are creative, we have an altogether different feeling about
            ourselves. When we feel good about ourselves, we feel good about our
            neighbors. This can lead to a peaceful world, where artist can
            create for the aesthetic pleasure of all people.”
          </Text>
          <Text>
            “I love the human figure, it’s organic design and engineering
            perfection. The part reflects the whole; in the leaf we see the
            tree, in the cell the future is born.”
          </Text>
          <Text>
            “I believe that human beings are essentially creators. There is no
            limit to their potential, or to the heights they can reach if they
            align themselves with the creative energy in the universe.”
          </Text>
        </Stack>

        <Stack spacing={20} id="noCompetitions">
          <Heading my={0} mt={40}>
            NO COMPETITIONS
          </Heading>
          <Text>
            “Prizes in art are basically destructive and self-defeating. The
            winner’s gratification is gained at the price of the rejection of
            those who failed. To rule that their best isn’t good enough is to
            inflict needless damage on their self-esteem. I reject the argument
            that contests provide incentive for productivity.”
          </Text>
        </Stack>

        <Stack spacing={20} id="noColoringBooks">
          <Heading my={0} mt={40}>
            NO COLORING BOOKS
          </Heading>
          <Text>
            “No coloring books!! The young children who learn to please their
            elders by staying inside the lines of coloring book drawings, grow
            up to be a followers, not leaders. This is the beginning of
            conformity. The seeds of a mentality that accepts without
            questioning.”
          </Text>
        </Stack>

        <Stack spacing={20} id="liberatedWoman">
          <Heading my={0} mt={40}>
            LIBERATED WOMAN
          </Heading>
          <Text>
            “I have always been liberated. At a very early age, I discovered
            that I was an artist, and had a natural talent to share with the
            world. That was the key to my personal freedom. However, I think
            many young female artists today need to be in the feminist movement.
            I'm all for young women if they don't get fair treatment, having
            co-op galleries, showing their work and speaking out. I don't blame
            the women who want their work to be seen; I blame the people who
            come to exhibitions not to look at paintings, but to see who's going
            to be there, to see who is and who is not showing. We have put value
            on the wrong things.“
          </Text>
          <Text>
            “Years ago I was paid less than a man despite the fact that I was at
            the top of my field and had brought with me a great deal of
            experience. Of course, things are much better for me now. But along
            the way, as a woman, I have had to prove my worth more times than
            was really necessary. It will have to change, and it will change. I
            am very optimistic.“
          </Text>
          <Text>
            “It is important that the female artist never forgets that she also
            has a most marvelous role to fulfill—that of a mother. My experience
            with my two children is one I would never give up. Struggling along
            as an artist while I was raising my children, I learned so much
            about life. I became a richer artist and a more fulfilled human
            being. Women can express certain things that men can never reach,
            because women have the gift of bearing life“
          </Text>
        </Stack>

        <Stack spacing={20} id="artAndNature">
          <Heading my={0} mt={40}>
            ART AND NATURE
          </Heading>
          <Text>
            “When I walk on Rocky Point beach, and the children who have been to
            my studio come running to me with stones they have found and tell me
            what they have discovered, I am delighted. Stooping to pick up a
            stone, one realizes that lying on the beach they are neutralized by
            proximity, lost in their numbers. Isolating one stone from the group
            reveals its uniqueness. Everything starts with nature. Add yourself…
            your imagination, your good mind, your wonderful hands… and you can
            create something marvelous which has never been known before.”
          </Text>
        </Stack>

        <Stack spacing={20} id="artEducation">
          <Heading my={0} mt={40}>
            ART EDUCATION
          </Heading>
          <Text>
            “I have taught many university courses over the years. The first day
            of class I tell the students that they have all passed the course.
            There are no examinations at the end of the semester. I am not
            interested in what dates or names they remember.”
          </Text>
          <Text>
            “I never teach with a textbook. I tell my students I will give them
            a list of books to read in their old age, when they are too old to
            get around to museums and galleries. I want them to have a wonderful
            experience. Now, while you are young and strong, go out and look and
            experience. Be humble. Don’t say “you call that art?” Come back
            again and again. Soon there will be communication, because you have
            reached out for understanding.”
          </Text>
          <Text>
            “I have my students work with art materials in all my courses
            because I believe, as Rousseau said, “A child may forget what he
            sees, and sooner still what is said to him, but he will never forget
            what he has made.”
          </Text>
          <Text>
            “I am an artist and an art educator. I love both careers. I don’t
            believe you are really an artist unless you have a concept to share.
            On the other hand, you are not a good art educator unless you are a
            functioning artist and have the challenges of the artist before you.
            An art educator, with skills and capabilities to give the world, is
            twice blessed.”
          </Text>
          <Text>
            Temima Gezari's book Footprints and New Worlds is an extraordinary
            collection of her experiences with children, her teaching methods,
            and her revolutionary approach to inspiring and motivating young
            children. This delightful book reveals an entirely new approach to
            teaching young children, young adults, and adults alike.
          </Text>
          <Text>
            Her book Art and Education is memoir summarizing her philosophy of
            art education, and experiences in 60 years of teaching.
          </Text>
          <Text>Click here to read parts ofFootprints and New Worlds</Text>
          <Text>Click here to read parts ofArt and Education</Text>
        </Stack>

        <Stack spacing={20} id="artChildDev">
          <Heading my={0} mt={40}>
            ART AND CHILD DEVELOPMENT
          </Heading>
          <Text>
            “Children instinctively have the knowledge of our world. It amazes
            me, what a child can do with one stroke. The art medium provides
            children with a universal language, through which they can express
            ideas and feelings that they may find difficult to convey in words.
            Through manipulation of basic materials, children develop
            confidence, courage, and creative spirit. People, especially
            parents, must be brought to the realization that art should become
            part of everyone’s experience to develop their greatest capability.
            A child’s creativity and perception of the world must be encouraged.
            An adult may look at a child’s painting and say, ‘I never saw a
            purple cow.’ When the child proudly holds it up. Of course, the
            child hasn’t either, but was looking with imagination. An
            understanding parent or teacher will tell the child, ‘that’s the
            most beautiful cow I’ve ever seen!’ ”
          </Text>
          <Text>
            “My philosophy of art is that the fundamental principles of art can
            be found in the artwork of a two-year-old, work which the child does
            instinctively.”
          </Text>
          <Text>
            Temima Gezari organized international exhibits of children’s art
            annually from 1943 to 2004. “First, the children learn that their
            work is accepted. We respect and appreciate their effort. With this
            acceptance they can go on to the exhibition and is proud to see
            their creation displayed. They look at other children’s work and
            learn that there are many ways of expressing the same subject. They
            learn to appreciate the efforts of htheir peers. Teachers see how
            other teachers have utilized the art medium to motivate their
            students. This expands children’s knowledge, and they go on to the
            next step in their development. Have you ever seen the absorbed
            concentration in children’s faces when they are permitted to do the
            creative work they love? There is intensity and involvement, no
            bribe is necessary.”
          </Text>
        </Stack>

        <Stack spacing={20} id="temimaBooks">
          <Heading>TEMIMA'S BOOKS ON ART EDUCATION</Heading>
          <Flex></Flex>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Philosophy;
