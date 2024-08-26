import _ from 'lodash';
import './style.css';
import io from 'socket.io-client';
import $ from 'jQuery'
import {
  discourseSet
} from './content.js';
import {
  discursiveOverlay
} from './present.js'

import {
  back,
  content
} from './threeCanvases.js';
import switchModeInstructions from './modeSwitch.js'

let path = require('path');
export let discourses = []
export let general = []
let splashUnits = []
let allData = []

export let position = 0;
let vertSpeed = 30;

export const socket = io();

export const overlay = new p5((p) => {
  let curs;
  let pointers = [p.createVector(0, 0), p.createVector(0, 0)];
  let cnv;

  p.preload = function() {

    curs = p.loadImage("swift.png")
  }


  p.setup = function() {
    cnv = p.createCanvas(p.windowWidth, p.windowHeight)
    p.cursor("swift.png")
    console.log("overlay canvas set up")
    socket.on('mouseRep', p.newDrawing)
    socket.on('unit', p.logUnit)
    p.fill(255)
    p.intSetStart();
  }

  p.intSetStart = function() {
    splashUnits.push({
        "c": "c/ The protocol as derivative management of digital processes, procedural social reproduction as discussed in the dispassionate terms of Alexander Galloway, is both the indirect site of attenuating cybernetic values, but also the site for negotiated new forms. ^^ Alexander R Galloway, Protocol: How Control Exists After Decentralization, 2004",
        "p": { "x": 560, "y": 4084 },
        "t": 0,
        "u": "**1631206169392",
        "r": [ "**1631205877825"],
        "d": [ 2021, 9, 9, 18, 49, 29],
        "db": [ "**"],        
        "_id": "03Tt1mdcyQ65QJ7h"
    })
    splashUnits.push({
        "c": "c/ The anarchic subversion of {adiscourse.net} reemerges here as the subversion of uneven discourse as it is actively maintained by technologies and abstract operations within academia insomuch that it dissolves the boundaries which academic intellectualism has built around itself.",
        "p": { "x": 673, "y": 2787 },
        "t": 0,
        "u": "**1631205179353",
        "r": ["**1631205299508"],
        "d": [2021,9,9,18,32,59],
        "db": ["**"],
        "_id": "0IFZ0cexYvhI4VJI",
    })
    splashUnits.push({
        "c": "c/ As a network model, what this brings into focus is a style of full distribution; a type of full distribution which doesn't have one goal. Unlike a terrorist organization, which must unify and focus (and subdue) internal agencies in pursuit of a privileged goal, and unlike capitalism, which seeks to homogenize expressions of agency down to the ease or conflict of capital flow, anarchist distribution is not unitarily focused and must be established without the meta-structural faith in centralized ideology, god or market.",
        "p": {"x": 668,"y": -3465},
        "t": 0,
        "u": "**1631202387201",
        "r": ["**1631202521977"],
        "d": [2021,9,9,17,46,27],
        "db": ["**"],
        "_id": "0oqd0nu1ofvdqYUB",
    })
    splashUnits.push({
        "c": "c/ To achieve such a vision of flexible, non-hierarchical and relatively equal forms of discourse, traditional models of social and intellectual exchange are not useful precedents. ",
        "p": {"x": 486,"y": 3748},
        "t": 0,
        "u": "**1631205725065",
        "r": [ "**1631205179353", "**1631205794230"],
        "d": [2021,9,9,18,42,5],
        "db": ["**"],
        "_id": "13TEYh8nMczTvmOC"
    })
    splashUnits.push({
        "c": "c/ In terms of media, architecture and discourse, anarchism provides the orientation of critique and alternity for {adiscourse.net}, an organizational position where any number of ideologies (market naturalism, MArxism, or an unexamined spectacle of aesthetics) might usually take their place.",
        "p": {"x": 513,"y": -187},
        "t": 0,
        "u": "**1631191010347",
        "r": ["**1631191079715"],
        "d": [2021,9,9,14,36,50],
        "db": ["**"],
        "_id": "1XICNKHoEsZKby65"
    })
    splashUnits.push({
        "c": "c/ In order to fully describe the effects and materials of the project, one must engage with what is meant by \"anarchic subversion\" and more generally what is meant by anarchism.",
        "p": {"x": 688,"y": 193},
        "t": 0,
        "u": "**1631190659054",
        "r": ["**1631190860350"],
        "d": [2021,9,9,14,30,59],
        "db": ["**"],
         "_id": "2MQ7tGSpXddtG34E"
    })
    splashUnits.push({
        "c": "q/ Accepting this, Foucault declares \"The role of the intellectual is no longer to place [themself] 'somewhat ahead and to the side' in order to express the stifled truth of the collectivity; rather, it is to struggle against the forms of power that transform him into its object and instrument in the sphere of 'knowledge', 'truth,' 'consciousness,' and 'discourse'.\" ^^Michel Foucault, \u201cIntellectuals and Power\u201d in Language / Counter-Memory / Practice: Selected Essays and Interviews, 1977, 207",
        "p": {"x": 1222,"y": 2575},
        "t": 0,
        "u": "**1631204518865",
        "r": [],
        "d": [2021,9,9,18,21,58],
        "db": ["**"],
        "_id": "3aNu1cZAvyApcyi1"
    })
    splashUnits.push({
        "c": "c/ Unlike the unitary values of liberal democracy, a humanist equality made possible through negating the human quality of much of the population, or Marxist socialism, social equality achieved historically through the division of mass and leadership, anarchism is a suite of competing values which cannot be prioritized.",
        "p": {"x": 308,"y": -759},
        "t": 0,
        "u": "**1631191607277",
        "r": ["**1631191708038"],
        "d": [2021,9,9,14,46,47],
        "db": ["**"],
        "_id": "4BuTUfmC0hADsjam"
    })
    splashUnits.push({
        "c": "c/ This brings up another contradiction: anarchism is always already present, here and now, and always permanently absent, there and away. ",
        "p": {"x": 840,"y": -3821},
        "t": 0,
        "u": "**1631202606014",
        "r": ["**1631202668612","**1631191398317"],
        "d": [2021,9,9,17,50,6],
        "db": ["**"],
        "_id": "5kIk7NP5PP9RbUxr"
    })
    splashUnits.push({
        "c": "c/ Because anarchism denies the existence of totalities, the uneven distribution and efficacy of individual agency must be an artificial and changeable construction. And also because there are no totalities, no single society or single ideology, there will always be agents which occupy frontiers of friction on the internal and external edges of these artificial constructions.",
        "p": {"x": 1239,"y": -2669},
        "t": 0,
        "u": "**1631201965871",
        "r": ["**1631202096287"],
        "d": [2021,9,9,17,39,25],
        "db": ["**"],      
        "_id": "64Pq4dLdh3aSRSL4"
    })
    splashUnits.push({
        "c": "c/ In academic and disciplinary discourse, the intellectual is a specific type of managerial role over the production of stable meanings, supported by abstract systems of recognition and concrete systems of financial investment.",
        "p": {"x": 484,"y": 2282},
        "t": 0,
        "u": "**1631204191079",
        "r": ["**1631204078299","**1631204319904"],
        "d": [2021,9,9,18,16,31],
        "db": ["**"],
        "_id": "6Av2W3sCeWt2xpH6"
    })
    splashUnits.push({
        "c": "c/ There is no permanence to anarchism, no final form, but only continuously reformed positions against well-known and emergent forms of coercion; anarchism believes in the end of things, the end of processes which no longer can be collectively legitimated, the end of projects which have ruin their course, the end of beliefs which can be adequately disproven.",
        "p": {"x": 775,"y": -1887},
        "t": 0,
        "u": "**1631192860149",
        "r": ["**1631193165926"],
        "d": [2021,9,9,15,7,40],
        "db": ["**"],
        "_id": "9v2aThbolv3qW1uP"
    })
    splashUnits.push({
        "c": "q/ Michel Foucault examines a possible method for determining specific conditions of disciplinary discourse in The Archaeology of Knowledge through \"rules of formation\": surfaces of emergence, authorities of delimitation and grids of specification. ^^ Michel Foucault, The Archaeology of Knowledge & The Discourse on Language, 1972, 40-49",
        "p": {"x": 1251,"y": 1575},
        "t": 0,
        "u": "**1631203590706",
        "r": ["**1631203688757"],
        "d": [2021,9,9,18,6,30],
        "db": ["**"],
        "_id": "CvsoUiDDYy3KvSLc"
    })
    splashUnits.push({
        "c": "c/ In this subversion, the delimitation of discourse in focus becomes intellectual production and organization without management. Howe this must be done, just as the artificial construction of management is performed, is through a set of practices and operations.",
        "p": {"x": 439,"y": 3018},
        "t": 0,
        "u": "**1631205299508",
        "r": ["**1631205370560","**1631205453594"],
        "d": [2021,9,9,18,34,59],
        "db": ["**"],     
        "_id": "Cya60sDo3zlWLOWG"
    })
    splashUnits.push({
        "c": "c/ Working with the new agencies provided by digital communication, the anarchic interstitial spaces that is created within {adiscourse.net} is as curious and unresolved as the object and meaning which are always at hand.",
        "p": {"x": 1140,"y": 4828},
        "t": 0,
        "u": "**1631206677040",
        "r": [],
        "d": [2021,9,9,18,57,57],
        "db": ["**"],      
        "_id": "DraKxlVkfpqSmOfi"
    })
    splashUnits.push({
        "c": "c/ Beyond the continuously beautiful ways that Ward describes anarchism, I must explain the position of anarchy as I see it, seeing as the definitions of an ungoverned political theory tend to proliferate and take on as many perspectives as there are anarchists.",
        "p": {"x": 955,"y": -280},
        "t": 0,
        "u": "**1631191079715",
        "r": ["**1631191320871"],
        "d": [2021,9,9,14,37,59],
        "db": ["**"],      
        "_id": "E9NTU38rIdTRe9rM"
    })
    splashUnits.push({
        "c": "c/ If {adiscourse.net} is meant to be an anarchic subversion, discourse is the field in which it subverts, and MediaArchitecture the context of operations with which it subverts.",
        "p": {"x": 1226,"y": 663},
        "t": 0,
        "u": "**1631202969619",
        "r": ["**1631202668612"],
        "d": [2021,9,9,17,56,9],
        "db": ["**"],      
        "_id": "EBx1L2lktvXggTXU"
    })
    splashUnits.push({
        "c": "c/ Of course, the matter of general discourse - and, cascading backwards, all discourse - is complicated by the fact hat discourse and its boundaries act more complexly than a simple nesting doll. These areas of discourse bleed into each other asynchronously and trans-locally.",
        "p": {"x": 575,"y": 1262},
        "t": 0,
        "u": "**1631203348231",
        "r": ["**1631203468006"],
        "d": [2021,9,9,18,2,28],
        "db": ["**"],     
        "_id": "FjKLbpm9xiFqyXY8"
    })
    splashUnits.push({    
        "c": "c/ Anarchism remains the negation of stable forms of uneven management. Fundamentally, this view of anarchism precludes totalities - nothing is perfect, nothing is essential, and everything can be contested and created.",
        "p": {"x": 273,"y": -2167},
        "t": 0,
        "u": "**1631193247907",
        "r": ["**1631201877010"],
        "d": [2021,9,9,15,14,7],
        "db": ["**"],
        "_id": "GuIzl3wtHdDKtfsX"
    })
    splashUnits.push({
        "c": "c/ Anarchism in {adiscourse.net} is understood after the post-structural turn embedded within the work of Colin Ward and various other anarchists who shifted away from utopic visions of a final society and teleological projects, beginning to focus on anarchic tactics and exchanges as enmeshed practices within immediate social relations.",
        "p": {"x": 723,"y": -1160},
        "t": 0,
        "u": "**1631191810904",
        "r": ["**1631191897005"],
        "d": [2021,9,9,14,50,10],
        "db": ["**"],
        "_id": "HwG3TXOAmTc5JL7y"
    })
    splashUnits.push({
        "c": "c/ These do not refer to chaos, which has been equated with anarchy through numerous propaganda campaigns by democratic, socialist, and totalitarian governments alike, but a set of negotiable values which surround what Colin Ward has called \"a social and political philosophy out of the natural and spontaneous tendency of humans to associate together for their mutual benefit.\" ^^ Colin Ward, Anarchy in Action, 1996, 19.",
        "p": {"x": 863,"y": 108}, 
        "t": 0,
        "u": "**1631190860350",
        "r": ["**1631191079715","**1631191010347"],
        "d": [2021,9,9,14,34,20],
        "db": ["**"],   
        "_id": "Idy6NZMSZh0YFaa3"
    })
    splashUnits.push({
        "c": "c/ These practices and operations of {adiscourse.net} orient away from the reproduction of management toward the reproduction of free agency, and do so through the negation of authorial attribution, impermeable disciplinary borders, and finality of outcome.",
        "p": {"x": 1185,"y": 3063},
        "t": 0,
        "u": "**1631205370560",
        "r": ["**1631205453594"],
        "d": [2021,9,9,18,36,10],
        "db": ["**"],
        "_id": "Jw76I5IfSxGsr2Ca"
    })
    splashUnits.push({  
        "c": "c/ \"Discourse\" is more explicitly detailed elsewhere, but now it is important to understand discourse in terms of negotiating meaning.",
        "p": {"x": 1086,"y": 833},
        "t": 0,
        "u": "**1631203066577",
        "r": ["**1631202969619","**1631203132590"],
        "d": [2021,9,9,17,57,46],
        "db": ["**"],   
        "_id": "KoTWwEURRmLjvXAJ"
    })
    splashUnits.push({
        "c": "c/ In {adiscourse.net}, the protocols and practices of discourse are built on relatively normal grounds, in tactile-human space and digital development, but the tactics of producing new direction of temporary social reproduction must exert themselves in between highly coercive operations, just as anarchist practice is built as interstitial spaces within the structure of dominant power.",
        "p": {"x": 1093,"y": 4297},
        "t": 0,
        "u": "**1631206297395",
        "r": ["**1631205603467"],
        "d": [2021,9,9,18,51,37],
        "db": ["**"], 
        "_id": "PAaFeFnftZhUtgV1"
    })
    splashUnits.push({    
        "c": "c/ This anarchism deals with the negation of coercive force, systems of false legitimation, and the supportive liberation of the individual. Ethics becomes the tension connection between Self and Other, \"the experience of the multiple singularities of the encounter with others that defines the experience of sociality. Each of these singularities overwhelms and undoes us and we can never do enough in response.\" ^^ Simon Critchley, Infinitely Demanding: Ethics of Commitment / Politics of Resistance, 2012, 123",
        "p": {"x": 433,"y": -1682},
        "t": 0,
        "u": "**1631192734897",
        "r": ["**1631192860149"],
        "d": [2021,9,9,15,5,34],
        "db": ["**"],    
        "_id": "R4TPYHPzz5hlBCkL"
    })
    splashUnits.push({
        "c": "c/ In general discourse these recursive boundaries are constantly illusive, so that the general discourse of a town is distinct but within the general discourse of a nation, which is distinct but within the the general discourse of continent, which is distinct but within a general discourse of a hemisphere, and so on and so on. ",
        "p": {"x": 352,"y": 1111},
        "t": 0,
        "u": "**1631203261993",
        "r": ["**1631203348231"],
        "d": [2021,9,9,18,1,1],
        "db": ["**"],    
        "_id": "S1G2V9sEzyo5Ee0g"
    })
    splashUnits.push({
        "c": "c/ Accepting the terms of negotiation and contradiction, anarchism takes an important view towards agency - the belief in equal constitution of agency and the goal of immediacy minimizing or abolishing styles of social reproduction which structurally deny the expression of agencies. ",
        "p": {"x": 631,"y": -2571},
        "t": 0,
        "u": "**1631201877010",
        "r": ["**1631201965871","**1631202096287"],
        "d": [2021,9,9,17,37,57],
        "db": ["**"],
        "_id": "TOhO9Wzw8vuP2tdV"
    })
    splashUnits.push({
        "c": "c/ However, the terms of anarchism here are not direct extensions from its classical formation, much as contemporary Marxist theory recuperates and reorients the intentions and perspectives of Marxian doctrine. ",
        "p": {"x": 253,"y": -1012},
        "t": 0,
        "u": "**1631191708038",
        "r": ["**1631191810904"],
        "d": [2021,9,9,14,48,28],
        "db": ["**"],     
        "_id": "VOojoUMbp6B2pLrg"
    })
    splashUnits.push({   
        "c": "c/ This anarchism dissolves into myriad activities which antagonize and un-organize systems of hierarchical control and coercive management; anarchism becomes immediate contestation negotiated through a political theory of contingency, the continuous inversion between praxis and theory.",
        "p": {"x": 613,"y": -1300},
        "t": 0,
        "u": "**1631191897005",
        "r": ["**1631192551377"],
        "d": [2021,9,9,14,51,37],
        "db": ["**"],
        "_id": "YuHgxSEuKbJYN5TU"
    })
    splashUnits.push({     
        "c": "c/ Cycles of commentary reproduce the special essences of texts written within previous academic institutions, supporting the reproduction of power relations and the position of the academic within that system.",
        "p": {"x": 703,"y": 2486},
        "t": 0,
        "u": "**1631204319904",
        "r": ["**1631205179353","**1631204518865"],
        "d": [2021,9,9,18,18,39],
        "db": ["**"],
        "_id": "a0IQ1XKhipFAhfXq"
    })
    splashUnits.push({
        "c": "c/ One's own discourse pins down the individual interpretation of meanings as they relate to any subject at hand, disciplinary discourse defines the interiority of meanings in a collective subject, and general discourse is the double fold of elucidating the positions of contestation and consensus within recursive boundaries.",
        "p": {"x": 1086,"y": 959},
        "t": 0,
        "u": "**1631203132590",
        "r": ["**1631203261993"],
        "d": [2021,9,9,17,58,52],
        "db": ["**"],     
        "_id": "a5zFqlVU7lEuUqiI"
    })
    splashUnits.push({
        "c": "c/  In anarchism there is no possible bifurcation of movement into mass of followers and leadership, no alternating terms of how and when types of people can express their agency, no tactical limitation of one group's agency in order to court the allegiance of another. ",
        "p": {"x": 1023,"y": -3036},
        "t": 0,
        "u": "**1631202166881",
        "r": ["**1631202244656","**1631202096287"],
        "d": [2021,9,9,17,42,46],
        "db": ["**"], 
        "_id": "blvEr6isdr9KbgSN"
    })
    splashUnits.push({
        "c": "c/ These present a good initial framework because much about anarchism is determined through the negotiation of contradictions: absence of hierarchical governance but the presence of organization, libertarian self-realization but the necessity of social solidarity, the building of tactics and practices but the imperative to dissolve and negate what has been previously been constructed.",
        "p": {"x": 703,"y": -522},
        "t": 0,
        "u": "**1631191398317",
        "r": ["**1631191607277","**1631191528511"],
        "d": [2021,9,9,14,43,18],
        "db": ["**"],
        "_id": "c5paCBkxTRe4LphM"
    })
    splashUnits.push({
        "c": "c/ {adiscourse.net} is used as a tool for unmanaged intellectual engagement in the conditions of MediaArchitecture - a spatial investigation of discourse - but its abstractness is also a flexibility which allows for a site of social organization or generative dialogue outside of pure erudition.",
        "p": {"x": 872,"y": 3399},
        "t": 0,
        "u": "**1631205567606",
        "r": ["**1631205603467"],
        "d": [2021,9,9,18,39,27],
        "db": ["**"],    
        "_id": "dLYo5ODYRETsgAEI"
    })
    splashUnits.push({
        "c": "c/ Dealing with an expansive constitution of agency, anarchism reacts in direct opposition to methods of simplifying agency down to binary choice or the serving of the cohesive society through a comprehensive authority.",
        "p": {"x": 775,"y": -2829},
        "t": 0,
        "u": "**1631202096287",
        "r": [],
        "d": [2021,9,9,17,41,36],
        "db": ["**"],
        "_id": "ecLLDGTlYs0d0LAL"
    })
    splashUnits.push({
        "c": "c/ Each of these rules approach discourse in an isolated manner which unveils the ways in which an incomprehensible exchange of meanings can both be analytically probed historically and can be understood in relation tot he power structure which produces them.",
        "p": {"x": 1156,"y": 1747},
        "t": 0,
        "u": "**1631203688757",
        "r": [],
        "d": [2021,9,9,18,8,8],
        "db": ["**"],      
        "_id": "feVGZoQ2I3XbxEic"
    })
    splashUnits.push({
        "c": "q/ A central core of anarchic contradiction was described by Mikhail Bakunin, contemporary and antagonist of Karl Marx in the First International, who wrote that \"Liberty without socialism is privilege, injustice; socialism without liberty is slavery and brutality.\" ^^ Mikhail Bakunin, \"Federalism, Socialism, Anti-Theologism\", 1867.",
        "p": {"x": 975,"y": -747},
        "t": 0,
        "u": "**1631191528511",
        "r": ["**1631191607277"],
        "d": [2021,9,9,14,45,28],
        "db": ["**"],    
        "_id": "g4JzmEqBnbcL7j1r"
    })
    splashUnits.push({
        "c": "c/ As an overflowing void, anarchism can never come into being because it already is - a practice of in-between activities and a theory of solidarity in tension, the shadows of transitory structuralisms lurking in the interstitial space.",
        "p": {"x": 851,"y": -3986},
        "t": 0,
        "u": "**1631202668612",
        "r": [],
        "d": [2021,9,9,17,51,8],
        "db": ["**"],
        "_id": "giyF5KpO4HwsNyAS"
    })
    splashUnits.push({
        "c": "c/ {adiscourse.net} follows loose methods for tactical production - interstitial production - which follow up the social focus of Christoph Spertz's theory of \"Free Cooperation\". ^^ Christoph Spertz, \"Free Cooperation\" in The Art of Free Cooperation, ed.s Geert Lovink and Trebor Scholz, 2006",
        "p": {"x": 1006,"y": 4549},
        "t": 0,
        "u": "**1631206477296",
        "r": ["**1631206297395","**1631206677040"],
        "d": [2021,9,9,18,54,37],
        "db": ["**"],
        "_id": "hDKxIG3b4JsqLeJJ"
    })
    splashUnits.push({
        "c": "c/ Through any discrete review of discourse it is clear that, as Foucault puts forward, the matter of knowledge and power are codependent, and the exertion of power, the expression of agency, is chronically built to be uneven in a way which is capable of temporarily fixing a static interior to discourse functions.",
        "p": {"x": 1232,"y": 1913},
        "t": 0,
        "u": "**1631203814989",
        "r": ["**1631203590706","**1631203912528","**1631204078299"],
        "d": [2021,9,9,18,10,14],
        "db": ["**"],
        "_id": "ip8J0XwiuByhzYVI"
    })
    splashUnits.push({  
        "c": "q/ Colin Ward, with bottomless poetry, declares that \"an anarchist society, a society which organizes itself without authority, is always in existence, like a seed beneath the snow, buried under the weight of the state and its bureaucracy, capitalism and its waste, privilege and its injustices, nationalism and its suicidal loyalties, religious differences and their superstitious separatism.\" ^^Colin Ward, Anarchy in Action, 1996, 18",
        "p": {"x": 439,"y": -3666},
        "t": 0,
        "u": "**1631202521977",
        "r": ["**1631202606014"],
        "d": [2021,9,9,17,48,41],
        "db": ["**"],
        "_id": "j5AZvTTmzlr39B2G"
    })
    splashUnits.push({
        "c": "c/ c/ The creation of central heroes and trappings of interpreation creates a chronic scholasticism which extends far past the theocratic involvement of pre-Enlightenment academia. ",
        "p": {"x": 218,"y": 2419},
        "t": 0,
        "u": "**1631204260426",
        "r": ["**1631204319904","**1631204191079"],
        "d": [2021,9,9,18,17,40],
        "db": ["**"],
        "_id": "jelKm4Clo8IqBJQN"
    })
    splashUnits.push({
        "c": "c/ Largely, what this develops is the impossibility of achieving general consensus - instead there are always forms of antagonism or, stealing from Chantal Mouffe's theories of radical democracy, agonism. There is no escape from necessary and immediate negotiation within a field of equally expressed agency.",
        "p": {"x": 1313,"y": -3261},
        "t": 0,
        "u": "**1631202244656",
        "r": ["**1631202387201"],
        "d": [2021,9,9,17,44,4],
        "db": ["**"],
        "_id": "k0qEYnLKJAnrep7H"
    })
    splashUnits.push({
        "c": "c/ However, as incomprehensible and generative and polyglot as the field of discourse is, artificial structures of regulation emerge in a number of ways. These managerial structures determine what the locally acceptable forms and objects of discourse are - the correct words, the correct pronunciation, the correct ideas - as well as link the technologies of production with the terms of discourse's material and immaterial mediation.",
        "p": {"x": 573,"y": 1418},
        "t": 0,
        "u": "**1631203468006",
        "r": ["**1631203688757","**1631203590706"],
        "d": [2021,9,9,18,4,28],
        "db": ["**"],
        "_id": "kvPZ1FBJV5pKrsXB"
    })
    splashUnits.push({
        "c": "c/ But anarchist theory must be practiced in the same space as modern control methods - the protocological exchange which distributes operations while maintaining centralized forms of validation.",
        "p": {"x": 1137,"y": 3992},
        "t": 0,
        "u": "**1631205877825",
        "r": ["**1631206297395"],
        "d": [2021,9,9,18,44,37],
        "db": ["**"],
        "_id": "pKp3bFYN8tGzdnLJ"
    })
    splashUnits.push({
        "c": "{adiscourse.net}",
        "p": {"x": 238,"y": 311},
        "t": 0,
        "u": "**1631190469364",
        "r": ["**1631190553178"],
        "d": [2021,9,9,14,27,49],
        "db": ["**"],  
        "_id": "pOSH6WV2Q0xAxHqi"
    })
    splashUnits.push({
        "c": "c/ Radical models and theories of cooperation must be the road map, negotiating opposing values with flexible and extinguishable protocols, and this style of radicality is easily developed from anarchist theory.",
        "p": {"x": 1101,"y": 3858},
        "t": 0,
        "u": "**1631205794230",
        "r": ["**1631205877825"],
        "d": [2021,9,9,18,43,14],
        "db": ["**"],
        "_id": "ppkcFv5W0yDXEnP3"
    })
    splashUnits.push({
        "c": "c/ The construction of these static interiors and their doctrines cannot successfully achieve totality or else disciplines would have already resolved themselves. The permanent flexibility - of unfixity - of discourse constantly produces exteriority within interiority, and so the managerial constructions must react and reorient themselves to re-attain higher levels of static constraint.",
        "p": {"x": 610,"y": 2059},
        "t": 0,
        "u": "**1631204078299",
        "r": [],
        "d": [2021,9,9,18,14,38],
        "db": ["**"],
        "_id": "u6Lkzr6R26CS7S1c"
    })
    splashUnits.push({
        "c": "c/ But in any of its applications, the base code - materially and metaphorically - reproduces an anarchist exchange of data and meaning.",
        "p": {"x": 914,"y": 3553},
        "t": 0,
        "u": "**1631205603467",
        "r": [],
        "d": [2021,9,9,18,40,3],
        "db": ["**"],
        "_id": "ujtOJYKWR9frjJGZ"
    })
    splashUnits.push({
        "c": "c/ First, one might best understand the conditions of anarchism through the terms of negotiation and contradiction. ",
        "p": {"x": 240,"y": -437},
        "t": 0,
        "u": "**1631191320871",
        "r": ["**1631191398317"],
        "d": [2021,9,9,14,42,0],
        "db": ["**"],
        "_id": "uy8v7JthxU0kxsee"
    })
    splashUnits.push({
        "c": "c/ Without specifying the exact roles and situation in which {adiscourse.net} might be used or deployed, a specific set of operations can be applied and manipulated in many unexpected ways.",
        "p": {"x": 872,"y": 3251},
        "t": 0,
        "u": "**1631205453594",
        "r": ["**1631205567606"],
        "d": [2021,9,9,18,37,33],
        "db": ["**"],
        "_id": "w4Yeqpv1SDt7ls5Z"
    })

    splashUnits.push({
        "c": "q/ Constructing an anarchist ethics in response to the work of Emmanuel Levinas, Simon Critchley describes this situational anarchism as a \"radical disturbance of the state, a disruption of the state's attempt to set itself up or erect itself into a whole (s'eriger en Tout). In our terms, anarchy is the creation of interstitial distance within the state, the continual questioning from below of any attempt to establish order from above.\" ^^ Simon Critchley, Infinitely Demanding: Ethic of Commitment / Politics of Resistance, 2012, 123 ",
        "p": {"x": 221,"y": -1417},
        "t": 0,
        "u": "**1631192551377",
        "r": ["**1631192734897"],
        "d": [2021,9,9,15,2,31],
        "db": ["**"],
        "_id": "wvzyGhoQCl85qnaJ"
    })
    splashUnits.push({
        "c": "c/ {adiscourse.net}, in hidden and overt qualities, is meant to be an anarchic subversion. The conditions of anarchy are as much involved as the  message of any medium, especially if one is to take McLuhan at his word.",
        "p": {"x": 321,"y": 388},
        "t": 0,
        "u": "**1631190553178",
        "r": ["**1631190659054","**1631202969619"],
        "d": [2021,9,9,14,29,13],
        "db": ["**"],
        "_id": "xvBFZ7hJPvx7bK3Z"
    })
    splashUnits.push({
        "c": "c/ This unevenness is also recursive within disciplinary discourses (architecture, media, political theory, mathematics, etc.). The deleuzian faction of any discipline must adhere to norms of both the discipline and their chosen framework of thought, established by specific texts, specific authors, specific interpretations.",
        "p": {"x": 1351,"y": 2051},
        "t": 0,
        "u": "**1631203912528",
        "r": [],
        "d": [2021,9,9,18,11,52],
        "db": ["**"],
        "_id": "y4CPmsMq8iTGvdPj"
    })
    splashUnits.push({
        "c": "c/ Where one might ask if anarchism itself has not been adequately disproven, in Catalonia or the Haymarket, the answer is visible in the ways in which solidarity is still shown without enforcement and erroneous observance of law is still defied. As of 2021, there are systems of mutual aid established (and actively obstructed) in reaction to the Covid19 pandemic, and in the last year there have been distributed movements of direct negation in the streets (also actively obstructed) in reaction to an endless stream of racist murders performed by numerous forms of police.",
        "p": {"x": 265,"y": -1997},
        "t": 0,
        "u": "**1631193165926",
        "r": ["**1631193247907"],
        "d": [2021,9,9,15,12,45],
        "db": ["**"],
        "_id": "zXWlyWxV6f0W95Wy"
    })
   
    discourses = loadDiscourseUnitsToArray(splashUnits)
    discourses.vis()
  }

  p.logUnit = function(data) {
    discourses.addUnit(data.c, data.p, data.t, data.u, data.r, data.d, data.db)
    discourses.vis()
  }

  p.newDrawing = function(data) {
    p.noFill();
    p.stroke(255, 0, 100);
    p.strokeWeight(1.5);
    p.line(data.x - 3, data.y - 3, data.x + 3, data.y + 3)
    p.line(data.x - 3, data.y + 3, data.x + 3, data.y - 3)
  }

  p.mouseDragged = function() {
    var data = {
      x: p.mouseX,
      y: p.mouseY,
    }
    socket.emit('mouse', data);
    p.noStroke();
    p.fill(47, 230, 240)
    p.ellipse(p.mouseX, p.mouseY, 6, 6);
  }

  p.mouseClicked = function() {
    if (document.getElementById('rp-b').classList.contains('current')) {
      discourses.concern()
    }
  }

  p.submitUnit = function() {
    let temp = document.getElementById('tempGeist')
    let tempButton = document.getElementById('tempGeistButton')
    let escButton = document.getElementById('escapeGeistButton')

    if (temp.value != "") {
      let ttop = temp.offsetTop
      let tleft = temp.offsetLeft
      let tcont = temp.value
      while(tcont.charAt(0) == " "){
        tcont = tcont.slice(1)
      }
      let filtKey = document.getElementById('filterKey').textContent
      let context = filtKey.split('|')
      let tDisc = {
        c: tcont,
        p: {
          x: tleft,
          y: ttop - position
        },
        t: 0,
        u: context+Date.now().toString(),
        r: [],
        d: [p.year(), p.month(), p.day(), p.hour(), p.minute(), p.second()],
        db: context
      }
      temp.remove()
      tempButton.remove()
      escButton.remove()
      discourses.addUnit(tDisc.c, tDisc.p, tDisc.t, tDisc.u, [], tDisc.d, tDisc.db)
      if (document.getElementById('filterKey').textContent !== "**") {
        socket.emit('unit', tDisc);
      }
      discourses.vis()
    } else {
      temp.placeholder = '!!! empty unit cannot be submitted \r\n \r\n fill the area with discursive content \r\n \r\n ...or press the X to remove the input area'
    }
  }

  p.escapeUnit = function() {
    let temp = document.getElementById('tempGeist')
    let tempButton = document.getElementById('tempGeistButton')
    let tempEscButton = document.getElementById('escapeGeistButton')
    if (temp != null) {
      temp.remove()
      tempButton.remove()
      tempEscButton.remove()
    }
  }

  p.keyPressed = function() {
    if (p.keyCode === 32) {
      if (document.getElementById('gp-b').classList.contains('current')) {
        if (document.getElementsByClassName('geist').length < 1) {
          let input = p.createElement("textarea").class('geist')
          let inputButton = p.createButton('submit').class('geistButton')
          let escButton = p.createButton('X').class('geistButton')
          inputButton.position(p.mouseX, p.mouseY - 20)
          escButton.position(p.mouseX + 380, p.mouseY - 20)
          input.position(p.mouseX, p.mouseY)
          input.id('tempGeist')
          input.attribute('placeholder', 'using "q/" distinguishes a quote or reference \r\n using "r/" distinguishes a response or reaction  \r\n using "c/" distinguishes a bit of composition\r\n using no preface distinguishes nothing \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n using "^^" between references and a citation separates the citation cleanly')
          inputButton.id('tempGeistButton')
          escButton.id('escapeGeistButton')
          inputButton.mousePressed(p.submitUnit)
          escButton.mousePressed(p.escapeUnit)
        } else {
          document.getElementById('tempGeist').focus()
        }
      }
    }
  }

  p.setPositions = function() {
    document.getElementById("vertPos").innerHTML = position
  }

  p.windowResized = function() {
    p.whoaSize();
  }

    p.whoaSize = function(){
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    back.resizeCanvas(p.windowWidth, p.windowHeight+60)
    content.resizeCanvas(p.windowWidth, p.windowHeight+60)
    back.refreshed()
    discourses.vis()
  }

}, 'overlay')

$(document).on('keydown', '.geist', function() {
  checkInput()
})

let checkInput = function() {
  let el = document.getElementById("tempGeist")
  if (el != null) {
    let tempText = el.value
    if (tempText.includes("r/")) {
      el.classList.remove('quotation')
      el.classList.add('response');

    } else if (tempText.includes("q/")) {
      el.classList.remove('response');
      el.classList.add('quotation')
    }
  }
}

let reposition = function(event) {
  content.clear()
  const delta = Math.sign(event.deltaY);
  position = position - (delta * vertSpeed)
  discourses.vis()

  document.getElementById("vertPos").innerHTML = position
}

function loadDiscourseUnitsToArray(units) {

  let discs = new discourseSet(content)
  for (let each in units) {
    let unit = units[each]
    discs.addUnit(unit.c, unit.p, unit.t, unit.u, unit.r, unit.d, unit.db)
  }
  return discs;
}

function downloadThatData(){

  let stringData = JSON.stringify(allData)
 let a = document.createElement("a")
 let file = new Blob([stringData], {type:'text/plain'})
 a.href = URL.createObjectURL(file)
 a.download ='adiscourseNet.JSON'
 a.click();
 URL.revokeObjectURL(a.href)

}

window.onload = function() {

  document.getElementById('overlay').addEventListener("wheel", event => reposition(event), {
    passive: true
  })
  socket.on('dataRep', data => {
    allData = data;
    general = loadDiscourseUnitsToArray(data)
  })

  document.getElementById('vert30').onclick = () => {
    vertSpeed = 30
  }

  document.getElementById('vert60').onclick = () => {
    vertSpeed = 60
  }

  document.getElementById('vert90').onclick = () => {
    vertSpeed = 90
  }

  document.getElementById('about-this-website').onclick = () => {
    document.getElementById('about-window-overlay').classList.remove('disabled');

  }
  document.getElementById('about-window-overlay-close').onclick = () => {
    document.getElementById('about-window-overlay').classList.add('disabled');
  }

  document.getElementById('fs').onclick = () => {
    let fs = overlay.fullscreen();
    overlay.fullscreen(!fs);
  }

  document.getElementById('rp-b').onclick = () => {
    document.getElementById('gp-b').classList.remove('current');
    document.getElementById('discourseLoad').classList.remove('current');
    document.getElementById('rp-b').classList.add('current');
    document.getElementById('rightCascade').classList.remove('away');
    switchModeInstructions(2)
    discourses.vis()
  }
  document.getElementById('gp-b').onclick = () => {
    document.getElementById('rp-b').classList.remove('current');
    document.getElementById('discourseLoad').classList.remove('current');
    document.getElementById('gp-b').classList.add('current');
    document.getElementById('rightCascade').classList.add('away');
    switchModeInstructions(1)
    discourses.vis()
  }

  document.getElementById('searchToggle').onclick = () => {
    document.getElementById('bump').classList.toggle('away')
    document.getElementById('searchKey').classList.toggle('away')
    document.getElementById('rp-search').classList.toggle('away')
    document.getElementById('searchItems').classList.toggle('away')
  }

  document.getElementById('discourseLoad').onclick = () => {
    document.getElementById('filterKey').textContent = "--"
    overlay.clear()
    content.clear()
    discourses = general
    let presenter = new discursiveOverlay(overlay)
    presenter.giveChoices()
    document.getElementById('gp-b').classList.add('away')
    document.getElementById('rp-b').classList.add('away')
    document.getElementById('discourseLoad').classList.add('away')
    document.getElementById('switchLoad').classList.remove('away')
    document.getElementById('rightCascade').classList.add('away')
  }


  document.getElementById('discourseLoad').onclick = () => {
    document.getElementById('filterKey').textContent = "--"
    overlay.clear()
    content.clear()
    discourses = general
    let presenter = new discursiveOverlay(overlay)
    presenter.giveChoices()
    document.getElementById('gp-b').classList.add('away')
    document.getElementById('rp-b').classList.add('away')
    document.getElementById('discourseLoad').classList.add('away')
    document.getElementById('switchLoad').classList.remove('away')
    document.getElementById('rightCascade').classList.add('away')
  }

  document.getElementById('switchLoad').onclick = () => {
    document.getElementById('rp-b').classList.remove('current')
    document.getElementById('gp-b').classList.remove('current')
    document.getElementById('gp-b').classList.add('away')
    document.getElementById('rp-b').classList.add('away')
    document.getElementById('filterKey').textContent = "--"
    document.getElementById('rightCascade').classList.add('away')
    content.clear()
    document.getElementById('printData').classList.toggle('away')
    switchModeInstructions(0)
    let presenter = new discursiveOverlay(overlay)
    overlay.clear()
    presenter.giveChoices()
    position = 0
    document.getElementById('vertPos').innerText = position
  }

  document.getElementById('downData').onclick = () => {
    downloadThatData()
  }

  document.getElementById("searchItems").onclick = () => event.stopPropagation()

  document.getElementById('rp-search').onclick = () => {
    event.stopPropagation()
    while (document.getElementsByClassName("resultItem")[0] != null) {
      document.getElementsByClassName("resultItem")[0].remove()
    }
    let currentKey = document.getElementById('searchKey').value
    let results
    if(currentKey != "" && currentKey != " "){
      results = discourses.set.filter(item => item.c.includes(currentKey))
    } else {
      results = []
    }

    for(let each in results){
      let tempSpan = document.createElement('span')
      tempSpan.classList.add('resultItem')
      tempSpan.id = results[each].u
      tempSpan.textContent = "["+results[each].u+"]\n\n"+results[each].c+"\n\n-----------------\n\n"
      document.getElementById('searchItems').appendChild(tempSpan)
      tempSpan.onclick = () => {
        //event.stopPropagation()
        console.log(tempSpan.id)
        if(discourses.pendingRelation.length == 0){
          let quickSelect = discourses.set.filter(item => item.u == tempSpan.id)
          discourses.pendingRelation.push(quickSelect[0])
          console.log(discourses.pendingRelation)
        } else if(discourses.pendingRelation.length == 1 && discourses.pendingRelation[0] != tempSpan.id){
          discourses.pendingRelation[1] = tempSpan.id
          let data = {
            u: discourses.pendingRelation[0].u,
            r: tempSpan.id
          }
          console.log(data)
          if (document.getElementById('filterKey').textContent !== "**") {
            socket.emit('relation', data);
          }
          console.log(discourses.pendingRelation)
          setTimeout(() => {
            discourses.pendingRelation[0].relatesTo.push(tempSpan.id)
            discourses.pendingRelation = []
            discourses.vis()
          }, 20)

          discourses.unhighlight();
        }
      }
    }
  }

  document.getElementById('printData').onclick = () => {
    let sets = document.getElementById('filterKey').textContent.split('|')
    let concat = sets.join('$-$')
    let site = window.location.href+concat
    window.open(site)
  }

let day = new Date()
  let thisDay = day.getDate();


if(thisDay <= 14){

  document.getElementById('about-window-overlay').classList.remove('disabled')
}



setTimeout(() =>{
  let datas = "frisk"
  socket.emit('gimmeData', datas);
},300)


}
