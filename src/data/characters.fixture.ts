//TODO: Move to a database or CMS
import { StoryCharacterData } from '@/core/character.interface';

export const characters: StoryCharacterData[] = [
  {
    id: 'elara',
    full_name: 'Elara Moonwhisper',
    appearance:
      'A young girl with silver, luminescent hair that glows faintly under the moonlight. Her eyes are deep violet, reflecting the night sky. She wears a cloak made of shimmering stardust, draping around her like the cosmos itself. Small constellations appear to twinkle on her skin.',
    personality:
      'Curious, kind, and a little mischievous. She’s always eager to uncover the mysteries of the world.',
    backstory:
      'Found as a baby beneath a falling star, Elara has always felt drawn to the celestial unknown. She possesses the ability to hear the whispers of the night sky, leading her on adventures to uncover ancient secrets.',
    special_ability:
      'Can manipulate starlight to illuminate dark paths or reveal hidden truths.',
    //TODO: Change to be hex color
    color: 'purple',
    avatarUrl: '/characters/elara-tJDbKNRvbG7xalctNY7JF9njiNglGt.webp',
    premises: [
      {
        title: 'Echoes of the Fallen Star',
        context:
          'A hidden valley beneath an eternal night sky, where ancient constellations whisper forgotten secrets.',
        premise:
          'Elara Moonwhisper discovers a fallen star pulsing with mysterious energy. As she reaches out, the star reveals visions of a lost civilization that once wielded cosmic power. But she is not the only one seeking its knowledge—others would claim it for themselves.',
        choices: [
          'Touch the star and embrace its knowledge, risking an unknown transformation.',
          "Seek out the reclusive Celestial Sages to learn the star's origins.",
          'Destroy the star to keep its power from falling into the wrong hands.',
        ],
      },
      {
        title: 'Shadows of the Celestial Veil',
        context:
          'A hidden temple where the boundaries between worlds grow thin.',
        premise:
          'Elara Moonwhisper is drawn to a temple where the Celestial Veil—a barrier between the mortal realm and the heavens—grows dangerously weak. As she explores the temple, she uncovers a plot to tear down the Veil and unleash cosmic chaos upon the world.',
        choices: [
          'Strengthen the Veil and prevent the cosmic forces from breaking through.',
          'Weaken the Veil further to gain access to celestial power.',
          'Embrace the chaos and become a conduit for the cosmic energies.',
        ],
      },
    ],
  },
  {
    id: 'thorne',
    full_name: 'Thorne Bramblefoot',
    appearance:
      'A tall, rugged fae with bark-textured skin and glowing green veins coursing through his arms. Antler-like branches grow from his head, adorned with moss and small glowing fireflies. His eyes are a deep, sorrowful emerald.',
    personality:
      'Protective, brooding, yet deeply compassionate. Thorne carries an air of sadness but finds solace in nature.',
    backstory:
      'Once a human knight, he was cursed by an ancient forest spirit for betraying its trust. Now, he roams the enchanted woods, bound to its will, searching for a way to break his curse while keeping dark forces at bay.',
    special_ability:
      'Can command nature—vines, roots, and animals—to aid him in his journey.',
    color: 'green',
    avatarUrl: '/characters/thorne-flvhMy4lEx4vrEsCfrc7feU60O6WC1.webp',
    premises: [
      {
        title: 'The Rootbound Pact',
        context:
          'An ancient, enchanted forest where the trees whisper, and the ground breathes with hidden life.',
        premise:
          'Thorne Bramblefoot is drawn to a dying section of the forest where something unnatural is spreading. The spirit of the woods offers him a terrible choice—bind himself to the land forever to stop the decay or watch the forest he once protected wither away.',
        choices: [
          'Accept the spirit’s offer, becoming one with the land but losing his freedom.',
          'Track the source of the corruption and destroy it at any cost.',
          'Seek out the forbidden magic that could cleanse the forest but at a terrible price.',
        ],
      },
      {
        title: 'Shadows of the Wild Hunt',
        context:
          'A moonlit glade where the spirits of the forest gather to mourn the passing of the old ways.',
        premise:
          'Thorne Bramblefoot is hunted by the Wild Hunt, a spectral army that seeks to claim his soul for the forest’s ancient debt. To escape their grasp, he must find the heart of the forest and offer a sacrifice that will break the curse binding him to the land.',
        choices: [
          'Confront the Wild Hunt and challenge their leader to a duel.',
          'Sacrifice a part of himself to appease the spirits and gain their favor.',
          'Embrace the curse and become the new leader of the Wild Hunt.',
        ],
      },
    ],
  },
  {
    id: 'lyric',
    full_name: 'Lyric Evergold',
    appearance:
      'A lively, golden-haired fox spirit with a flowing azure scarf and a lute decorated with tiny silver bells. Their fox ears are perked up, and their tail sways playfully. Glowing runes appear on their hands when they strum the lute.',
    personality:
      'Playful, charismatic, and always ready with a clever trick. Lyric thrives on adventure and storytelling.',
    backstory:
      'Once a spirit of forgotten songs, Lyric took on a physical form to seek out lost stories and weave them into ballads. Their music can soothe troubled hearts, awaken hidden memories, or even bend fate itself.',
    special_ability:
      'Can enchant listeners with their melodies, influencing emotions and revealing glimpses of possible futures.',
    color: 'yellow',
    avatarUrl: '/characters/lyric-ODWDY1O7mshR4FcAYJE1Z9TN0UnYyS.webp',
    premises: [
      {
        title: 'A Song of Forgotten Kings',
        context:
          'A ruined city where echoes of ancient ballads still hum through the broken streets.',
        premise:
          'Lyric Evergold stumbles upon a lost melody hidden in the ruins of a long-fallen kingdom. Legends say it was a song so powerful it could awaken the dead—or rewrite fate itself. As Lyric hums the first notes, the ruins stir to life.',
        choices: [
          'Play the full song, risking the wrath of forgotten spirits.',
          'Search the ruins for clues about the song’s true purpose.',
          'Bury the melody forever, ensuring it is never used again.',
        ],
      },
      {
        title: "The Bard's Gambit",
        context:
          'A bustling tavern where laughter and music fill the air, hiding darker secrets beneath the revelry.',
        premise:
          'Lyric Evergold is challenged to a musical duel by a rival bard who seeks to steal their voice. The stakes are high—the loser will be silenced forever. But as the duel begins, Lyric realizes their opponent is using forbidden magic to cheat.',
        choices: [
          'Confront the rival bard and expose their deception.',
          'Use their own magic to counter the cheating and win the duel.',
          'Sacrifice their voice to save their rival from the dark magic.',
        ],
      },
    ],
  },
  {
    id: 'vexen',
    full_name: 'Lord Vexen Blackthorn',
    appearance:
      'A towering, menacing knight clad in blackened, jagged armor etched with ancient runes. His glowing crimson eyes peer through a battle-worn helmet. A long, tattered cape flows behind him, whispering in the cold wind. His massive, cursed greatsword crackles with dark energy.',
    personality:
      'Ruthless, cold, and driven by vengeance. Once a man of honor, Vexen now follows his own twisted sense of justice, believing only in power and retribution.',
    backstory:
      'Once a noble knight sworn to protect the kingdom, Vexen was betrayed by those he trusted most. Left for dead on the battlefield, he was resurrected by a forbidden curse, binding his soul to his cursed blade. Now, he roams the land, a relentless warlord seeking to destroy those who wronged him and reshape the world in his own vision.',
    special_ability:
      'The Blade of Eternal Suffering – Every foe he slays is bound to his sword, strengthening his dark power while trapping their souls in eternal torment.',
    color: 'red',
    avatarUrl: '/characters/vexen-gWvxalgDYIfgha634flZIYEGUCQk00.webp',
    premises: [
      {
        title: 'The Last Vow',
        context:
          'A war-torn kingdom where the banners of fallen lords still hang in the wind.',
        premise:
          'Lord Vexen Blackthorn receives word that the last survivor of the order that betrayed him still lives. With his cursed blade whispering for vengeance, he prepares for the final hunt—but a dying knight warns him that killing the traitor may seal his own doom.',
        choices: [
          'Strike down the survivor and complete his vengeance.',
          'Demand the truth before passing judgment.',
          'Spare the traitor and break free from the blade’s control.',
        ],
      },
      {
        title: 'Shadows of the Fallen',
        context:
          'A cursed battlefield where the spirits of the fallen linger, trapped in an endless cycle of war.',
        premise:
          'Lord Vexen Blackthorn is haunted by the ghosts of those he has slain, their whispers driving him to the brink of madness. To free himself from their torment, he must confront the dark sorcerer who bound their souls to the battlefield.',
        choices: [
          'Destroy the sorcerer and release the spirits from their torment.',
          'Embrace the darkness and bind the spirits to his will.',
          'Sacrifice his own soul to end the cycle of war and death.',
        ],
      },
    ],
  },
  {
    id: 'sylvaine',
    full_name: 'Sylvaine Duskbinder',
    appearance:
      'A tall, enigmatic sorcerer draped in deep violet and black robes adorned with glowing arcane symbols. Their piercing silver eyes gleam beneath the shadow of a wide-brimmed, enchanted hat. Long, flowing dark hair cascades down their back, shifting like tendrils of smoke.',
    personality:
      'Coldly calculating, enigmatic, and seemingly emotionless. Sylvaine speaks in riddles, their motives always veiled in secrecy.',
    backstory:
      'Born under an eclipse, Sylvaine was taken in by an ancient order of sorcerers who feared their potential. Rather than follow their strict laws, Sylvaine sought out forbidden magic, mastering the art of shadowbinding. They now walk the world, weaving fate with their sorcery, whispering in the ears of kings and warlords, shaping history from the shadows.',
    special_ability:
      'Veil of the Void – Can shift into pure shadow, becoming intangible and traveling unseen through the darkness.',
    color: 'indigo',
    avatarUrl: '/characters/sylvaine-zIZ62IaxpFhfQU696fgFVJ2v8cuOc9.webp',
    premises: [
      {
        title: 'The Twilight Accord',
        context: 'A forgotten tower where time bends, and reality fractures.',
        premise:
          'Sylvaine Duskbinder is summoned by a secret cabal of mages who seek to rewrite history. They offer Sylvaine a seat among them, but the price is steep—the past must be unraveled to ensure the future they desire.',
        choices: [
          'Join the cabal and reshape fate, no matter the cost.',
          'Refuse their offer and become their enemy.',
          'Play both sides, seeking the hidden truth behind their plans.',
        ],
      },
      {
        title: 'Shadows of the Eclipse',
        context:
          'A city cloaked in darkness where the sun never rises and the moon is a pale memory.',
        premise:
          'Sylvaine Duskbinder is drawn to the city by whispers of an ancient eclipse that once plunged the world into shadow. As they unravel the mystery, they discover a cult that seeks to recreate the eclipse and bring about a new age of darkness.',
        choices: [
          'Stop the cult and prevent the eclipse from happening.',
          'Harness the eclipse’s power for their own dark purposes.',
          'Embrace the eclipse and become its harbinger.',
        ],
      },
    ],
  },
  {
    id: 'garrick',
    full_name: "Garrick 'The Hollow Fang'",
    appearance:
      'A rugged, battle-worn mercenary with unkempt dark hair and a jagged scar running down his left cheek. His weathered leather armor is patched and reinforced, showing the signs of countless battles. A long, tattered scarf wraps around his neck, partially covering his face.',
    personality:
      'Stoic, detached, and weary of the world. Garrick speaks little but sees everything, always weighing his next move. Though he acts indifferent, a flicker of honor still burns within him.',
    backstory:
      'Once a soldier in a great war, Garrick lost everything—his home, his comrades, and his faith in the cause. Now, he walks alone, selling his sword to the highest bidder but never staying in one place for long. He avoids forming attachments, knowing that in his line of work, they never last. Yet, deep down, he longs for something more than the endless cycle of blood and coin.',
    special_ability:
      'Hunter’s Instinct – Can analyze a foe’s movements and predict their attacks, giving him an almost supernatural edge in battle.',
    color: 'fawn',
    avatarUrl: '/characters/garrick-HPD2tPPVKmjF0U1TVPFNPXOCBLx4XU.webp',
    premises: [
      {
        title: 'The Hollow Oath',
        context: 'A remote border town on the edge of a war-torn kingdom.',
        premise:
          "Garrick 'The Hollow Fang' is hired to track down a deserter carrying a dangerous secret. As he closes in, he realizes he isn’t the only one after the target—someone from his past is hunting them as well.",
        choices: [
          'Capture the target for the reward.',
          'Protect the deserter and uncover the secret.',
          'Eliminate the competition and take the secret for himself.',
        ],
      },
      {
        title: 'Shadows of the Past',
        context:
          'A ruined fortress where echoes of ancient battles still linger in the air.',
        premise:
          "Garrick 'The Hollow Fang' is hired to retrieve a lost artifact hidden within the fortress. But as he delves into the ruins, he uncovers a dark secret from his own past—one that could change the course of his future.",
        choices: [
          'Claim the artifact and leave the past buried.',
          'Confront the truth of his past and seek redemption.',
          'Use the artifact to reshape his own history.',
        ],
      },
    ],
  },
];
