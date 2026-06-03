export const CIVILIZATIONS = [
  {
    id: 'greece',
    name: 'Ancient Greece',
    emoji: '🏛️',
    color: 0x1565c0,
    colorHex: '#1565c0',
    bg: '#0a0a0a',
    authors: [
      {
        name: 'Socrates',
        emoji: '🧠',
        quotes: [
          { start: 'The only true wisdom is in knowing', correct: 'you know nothing.', wrong: ['everything there is.', 'what others do not.', 'the way of the gods.'] },
          { start: 'An unexamined life is', correct: 'not worth living.', wrong: ['full of surprises.', 'a peaceful one.', 'a gift from gods.'] },
          { start: 'I cannot teach anybody anything. I can only make them', correct: 'think.', wrong: ['learn.', 'follow.', 'obey.'] },
          { start: 'There is only one good, knowledge, and one evil,', correct: 'ignorance.', wrong: ['weakness.', 'cowardice.', 'poverty.'] },
          { start: 'Be kind, for everyone you meet is fighting', correct: 'a hard battle.', wrong: ['their own war.', 'against the gods.', 'to survive.'] },
          { start: 'Strong minds discuss ideas, average minds discuss events, weak minds discuss', correct: 'people.', wrong: ['themselves.', 'the past.', 'the gods.'] },
          { start: 'Wonder is the beginning of', correct: 'wisdom.', wrong: ['knowledge.', 'all things.', 'philosophy.'] },
          { start: 'To find yourself, think', correct: 'for yourself.', wrong: ['of others.', 'without fear.', 'like a god.'] },
          { start: 'Education is the kindling of a flame, not the filling of', correct: 'a vessel.', wrong: ['a mind.', 'a soul.', 'empty hearts.'] },
          { start: 'He who is not contented with what he has, would not be contented with what he', correct: 'would like to have.', wrong: ['could ever own.', 'dreams of getting.', 'sees in others.'] },
          { start: 'Be slow to fall into friendship, but when you are in, continue firm and', correct: 'constant.', wrong: ['loyal.', 'devoted.', 'grateful.'] },
          { start: 'The secret of happiness is not found in seeking more, but in developing the capacity to enjoy', correct: 'less.', wrong: ['what you have.', 'simple things.', 'life itself.'] },
          { start: 'Let him who would move the world first move', correct: 'himself.', wrong: ['the masses.', 'his enemies.', 'his city.'] },
          { start: 'Contentment is natural wealth, luxury is artificial', correct: 'poverty.', wrong: ['pleasure.', 'ambition.', 'comfort.'] },
          { start: 'Do not do to others what angers you if done to you', correct: 'by others.', wrong: ['by your enemies.', 'in public.', 'without reason.'] },
          { start: 'Every action has its pleasures and its', correct: 'price.', wrong: ['reward.', 'consequence.', 'purpose.'] },
          { start: 'Prefer knowledge to wealth, for the one is transitory, the other', correct: 'perpetual.', wrong: ['eternal.', 'divine.', 'everlasting.'] },
          { start: 'We cannot live better than in seeking to become', correct: 'better.', wrong: ['wiser.', 'stronger.', 'worthy.'] },
          { start: 'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of', correct: 'the light.', wrong: ['the truth.', 'their fate.', 'dying alone.'] },
          { start: 'Sometimes you put walls up not to keep people out, but to see who cares enough to', correct: 'break them down.', wrong: ['let you in.', 'climb them.', 'tear them down.'] },
          { start: 'Know', correct: 'thyself.', wrong: ['your enemy.', 'your limits.', 'your city.'] },
          { start: 'Death may be the greatest of all human', correct: 'blessings.', wrong: ['fears.', 'mysteries.', 'journeys.'] },
          { start: 'The hour of departure has arrived, and we go our separate ways, I to die, and you to live. Which of these two is better only', correct: 'God knows.', wrong: ['the gods decide.', 'the wise can say.', 'time will tell.'] },
          { start: 'The only good is knowledge and the only evil is', correct: 'ignorance.', wrong: ['weakness.', 'poverty.', 'cowardice.'] },
          { start: 'I am not an Athenian or a Greek, but a citizen of', correct: 'the world.', wrong: ['all mankind.', 'no nation.', 'philosophy.'] },
          { start: 'I know that I am intelligent, because I know that I know', correct: 'nothing.', wrong: ['little.', 'enough.', 'the truth.'] },
          { start: 'The mind is everything. What you think,', correct: 'you become.', wrong: ['you believe.', 'you achieve.', 'you create.'] },
          { start: 'To move the world we must first move', correct: 'ourselves.', wrong: ['others.', 'our minds.', 'our hearts.'] },
          { start: 'He who is unable to live in society, or who has no need because he is sufficient for himself, must be either a beast or', correct: 'a god.', wrong: ['a king.', 'a fool.', 'a philosopher.'] },
          { start: 'False words are not only evil in themselves, but they infect the soul with', correct: 'evil.', wrong: ['doubt.', 'weakness.', 'darkness.'] },
          { start: 'The greatest way to live with honor in this world is to be what we pretend', correct: 'to be.', wrong: ['to know.', 'to feel.', 'to fight.'] },
          { start: 'Beware the barrenness of', correct: 'a busy life.', wrong: ['idle hands.', 'empty words.', 'wasted days.'] },
          { start: 'Not life, but good life, is to be', correct: 'chiefly valued.', wrong: ['always sought.', 'forever prized.', 'deeply desired.'] },
          { start: 'If a man is proud of his wealth, he should not be praised until it is known how he', correct: 'employs it.', wrong: ['acquired it.', 'protects it.', 'shares it.'] },
          { start: 'The poets are only the interpreters of the', correct: 'gods.', wrong: ['people.', 'truth.', 'world.'] },
          { start: 'Once made equal to man, woman becomes his', correct: 'superior.', wrong: ['partner.', 'equal.', 'reflection.'] },
          { start: 'Be of good cheer about death, and know this of a truth, that no evil can happen to a good', correct: 'man.', wrong: ['soul.', 'heart.', 'philosopher.'] },
          { start: 'The hottest love has the coldest', correct: 'end.', wrong: ['heart.', 'beginning.', 'silence.'] },
          { start: 'By all means marry; if you get a good wife, you\'ll become happy; if you get a bad one, you\'ll become', correct: 'a philosopher.', wrong: ['very strong.', 'truly wise.', 'a soldier.'] },
          { start: 'Wisdom begins in', correct: 'wonder.', wrong: ['silence.', 'suffering.', 'knowledge.'] },
          { start: 'To know, is to know that you know nothing. That is the meaning of true', correct: 'knowledge.', wrong: ['wisdom.', 'power.', 'philosophy.'] },
          { start: 'My advice to you is get married: if you find a good wife you\'ll be happy; if not, you\'ll become', correct: 'a philosopher.', wrong: ['a soldier.', 'truly wise.', 'strong-willed.'] },
          { start: 'Children nowadays are tyrants. They contradict their parents, gobble their food, and tyrannize their', correct: 'teachers.', wrong: ['elders.', 'siblings.', 'servants.'] },
          { start: 'The secret of change is to focus all your energy not on fighting the old but on building', correct: 'the new.', wrong: ['the future.', 'your strength.', 'what matters.'] },
          { start: 'One who is injured ought not to return the injury, for on no account can it be right to do an injustice; and it is not right to return an injury, or to do evil to any man, however much we have', correct: 'suffered from him.', wrong: ['been wronged.', 'lost because of him.', 'been hurt by him.'] },
          { start: 'From the deepest desires often come the deadliest', correct: 'hate.', wrong: ['sins.', 'wars.', 'regrets.'] },
          { start: 'Our prayers should be for blessings in general, for God knows best what is good', correct: 'for us.', wrong: ['for all.', 'in life.', 'for man.'] },
          { start: 'He is richest who is content with', correct: 'the least.', wrong: ['what he has.', 'simple things.', 'his own soul.'] },
          { start: 'Think not those faithful who praise all thy words and actions, but those who kindly reprove thy', correct: 'faults.', wrong: ['errors.', 'choices.', 'weaknesses.'] },
          { start: 'The beginning of wisdom is the definition of', correct: 'terms.', wrong: ['truth.', 'self.', 'knowledge.'] },
          { start: 'I pray thee, O God, that I may be beautiful within.', wrong: ['Let my outer self reflect it.', 'Grant me strength and wisdom.', 'Guide my steps in truth.'], correct: 'Let my outer self reflect it.' },
          { start: 'Envy is the ulcer of', correct: 'the soul.', wrong: ['the heart.', 'the mind.', 'mankind.'] },
          { start: 'Thou shouldst eat to live; not live to', correct: 'eat.', wrong: ['drink.', 'indulge.', 'feast.'] },
          { start: 'No man undertakes a trade he has not learned, even the meanest; yet everyone thinks himself sufficiently qualified for the hardest of all trades,', correct: 'that of government.', wrong: ['that of teaching.', 'that of philosophy.', 'that of war.'] },
          { start: 'If all misfortunes were laid in one common heap whence everyone must take an equal portion, most people would be contented to take their', correct: 'own and depart.', wrong: ['fair share quietly.', 'portion and leave.', 'burden and go.'] },
          { start: 'A system of morality which is based on relative emotional values is a mere illusion, a thoroughly vulgar conception which has nothing sound in it and nothing', correct: 'true.', wrong: ['real.', 'lasting.', 'worthy.'] },
          { start: 'Understanding a question is half an', correct: 'answer.', wrong: ['battle.', 'victory.', 'journey.'] },
          { start: 'When the debate is lost, slander becomes the tool of the', correct: 'loser.', wrong: ['weak.', 'coward.', 'fool.'] },
          { start: 'The tongue of a fool is the key of his', correct: 'counsel.', wrong: ['ruin.', 'shame.', 'undoing.'] },
          { start: 'Be slow to fall into friendship; but when thou art in, continue firm and', correct: 'constant.', wrong: ['loyal.', 'true.', 'steadfast.'] },
          { start: 'Worthless people live only to eat and drink; people of worth eat and drink only to', correct: 'live.', wrong: ['think.', 'grow.', 'endure.'] },
          { start: 'My mother was a midwife and I myself practice a kind of midwifery — not for bodies, but for', correct: 'minds.', wrong: ['souls.', 'ideas.', 'truths.'] },
          { start: 'The easiest and noblest way is not to be crushing others, but to be improving', correct: 'yourselves.', wrong: ['the world.', 'your city.', 'your craft.'] },
          { start: 'In childhood be modest, in youth temperate, in adulthood just, and in old age', correct: 'prudent.', wrong: ['wise.', 'peaceful.', 'grateful.'] },
          { start: 'Nature has given us two ears, two eyes, and but one tongue — to the end that we should hear and see more than we', correct: 'speak.', wrong: ['think.', 'feel.', 'judge.'] },
        ]
      },
      {
        name: 'Aristotle',
        emoji: '📚',
        quotes: [
          { start: 'We are what we repeatedly do. Excellence, then, is not an act but', correct: 'a habit.', wrong: ['a gift.', 'a choice.', 'a reward.'] },
          { start: 'Knowing yourself is the beginning of', correct: 'all wisdom.', wrong: ['great power.', 'true happiness.', 'your journey.'] },
          { start: 'The whole is greater than the sum of', correct: 'its parts.', wrong: ['all things.', 'its pieces.', 'what we see.'] },
          { start: 'The more you know, the more you know you', correct: 'don\'t know.', wrong: ['can achieve.', 'must learn.', 'will grow.'] },
          { start: 'I have gained this by philosophy: that I do without being commanded what others do only from fear of', correct: 'the law.', wrong: ['the gods.', 'their masters.', 'punishment.'] },
          { start: 'It is not always the same thing to be a good man and a good', correct: 'citizen.', wrong: ['soldier.', 'leader.', 'philosopher.'] },
          { start: 'The energy of the mind is the essence of', correct: 'life.', wrong: ['wisdom.', 'virtue.', 'power.'] },
          { start: 'All human actions have one or more of these seven causes: chance, nature, compulsion, habit, reason, passion, and', correct: 'desire.', wrong: ['will.', 'fate.', 'duty.'] },
          { start: 'It is during our darkest moments that we must focus to see', correct: 'the light.', wrong: ['the truth.', 'our path.', 'what matters.'] },
          { start: 'He who cannot be a good follower cannot be a good', correct: 'leader.', wrong: ['teacher.', 'citizen.', 'soldier.'] },
          { start: 'Without friends, no one would want to live, even if he had all other', correct: 'goods.', wrong: ['wealth.', 'power.', 'pleasures.'] },
          { start: 'Wit is educated', correct: 'insolence.', wrong: ['humor.', 'irony.', 'wisdom.'] },
          { start: 'All men by nature desire to', correct: 'know.', wrong: ['win.', 'live.', 'be free.'] },
          { start: 'Dignity does not consist in possessing honors, but in the consciousness that we', correct: 'deserve them.', wrong: ['have earned them.', 'are worthy.', 'honor others.'] },
          { start: 'Nature does nothing', correct: 'uselessly.', wrong: ['randomly.', 'without cause.', 'in vain.'] },
          { start: 'Wise men speak when they have something to say, fools speak because they have', correct: 'to say something.', wrong: ['no wisdom.', 'nothing better to do.', 'no restraint.'] },
          { start: 'All paid jobs absorb and degrade', correct: 'the mind.', wrong: ['the soul.', 'the spirit.', 'one\'s virtue.'] },
          { start: 'Where your talents and the needs of the world cross, there lies your', correct: 'vocation.', wrong: ['purpose.', 'destiny.', 'happiness.'] },
          { start: 'Misfortune shows those who are not really', correct: 'friends.', wrong: ['wise.', 'brave.', 'loyal.'] },
          { start: 'Learning is an ornament in prosperity, a refuge in adversity, and a provision in', correct: 'old age.', wrong: ['hard times.', 'times of war.', 'dark days.'] },
          { start: 'Happiness is a state of', correct: 'activity.', wrong: ['mind.', 'virtue.', 'being.'] },
          { start: 'Through discipline comes', correct: 'freedom.', wrong: ['wisdom.', 'strength.', 'virtue.'] },
          { start: 'All persons ought to endeavor to follow what is right, and not what is', correct: 'established.', wrong: ['popular.', 'commanded.', 'easy.'] },
          { start: 'The secret to humor is', correct: 'surprise.', wrong: ['timing.', 'wit.', 'truth.'] },
          { start: 'Great men are always of a nature originally', correct: 'melancholy.', wrong: ['bold.', 'restless.', 'proud.'] },
          { start: 'Character may almost be called the most effective means of', correct: 'persuasion.', wrong: ['wisdom.', 'leadership.', 'virtue.'] },
          { start: 'To lead an orchestra, you must turn your back on', correct: 'the crowd.', wrong: ['your musicians.', 'your rivals.', 'the audience.'] },
          { start: 'Fear is pain arising from the anticipation of', correct: 'evil.', wrong: ['danger.', 'failure.', 'loss.'] },
          { start: 'We make war that we may live in', correct: 'peace.', wrong: ['freedom.', 'safety.', 'strength.'] },
          { start: 'The only stable state is the one in which all men are equal before', correct: 'the law.', wrong: ['the gods.', 'the king.', 'justice.'] },
          { start: 'A friend is a second', correct: 'self.', wrong: ['soul.', 'life.', 'chance.'] },
          { start: 'What is a friend? A single soul dwelling in', correct: 'two bodies.', wrong: ['one heart.', 'shared wisdom.', 'eternal bond.'] },
          { start: 'Educating the mind without educating the heart is', correct: 'no education at all.', wrong: ['half the work.', 'a wasted effort.', 'true philosophy.'] },
          { start: 'Hope is a waking', correct: 'dream.', wrong: ['lie.', 'prayer.', 'vision.'] },
          { start: 'No great mind has ever existed without a touch of', correct: 'madness.', wrong: ['sorrow.', 'doubt.', 'passion.'] },
          { start: 'Happiness depends upon', correct: 'ourselves.', wrong: ['the gods.', 'fortune.', 'virtue alone.'] },
          { start: 'A friend to all is a friend to', correct: 'none.', wrong: ['everyone.', 'the world.', 'all mankind.'] },
          { start: 'Wishing to be friends is quick work, but friendship is a slow ripening', correct: 'fruit.', wrong: ['bond.', 'truth.', 'virtue.'] },
          { start: 'Patience is bitter, but its fruit is', correct: 'sweet.', wrong: ['worth it.', 'wisdom.', 'lasting.'] },
          { start: 'He who has overcome his fears will truly be', correct: 'free.', wrong: ['strong.', 'wise.', 'great.'] },
          { start: 'Those who know, do. Those that understand,', correct: 'teach.', wrong: ['lead.', 'create.', 'inspire.'] },
          { start: 'To perceive is to', correct: 'suffer.', wrong: ['learn.', 'grow.', 'think.'] },
          { start: 'Whosoever is delighted in solitude, is either a wild beast or a', correct: 'god.', wrong: ['fool.', 'philosopher.', 'saint.'] },
          { start: 'Poverty is the parent of revolution and', correct: 'crime.', wrong: ['despair.', 'war.', 'injustice.'] },
          { start: 'It is not enough to win a war; it is more important to organize', correct: 'the peace.', wrong: ['the people.', 'your allies.', 'the victory.'] },
          { start: 'The high-minded man must care more for the truth than for what', correct: 'people think.', wrong: ['others say.', 'power brings.', 'fame gives.'] },
          { start: 'Pleasure in the job puts perfection in', correct: 'the work.', wrong: ['the craft.', 'the mind.', 'the soul.'] },
          { start: 'One swallow does not make a summer, neither does one fine day; similarly one day or brief time of happiness does not make a person entirely', correct: 'happy.', wrong: ['wise.', 'content.', 'virtuous.'] },
          { start: 'For the things we have to learn before we can do them, we learn by', correct: 'doing them.', wrong: ['studying them.', 'watching others.', 'thinking deeply.'] },
          { start: 'In all things of nature there is something of the', correct: 'marvelous.', wrong: ['divine.', 'unknown.', 'beautiful.'] },
          { start: 'Courage is the first of human qualities because it is the quality which guarantees', correct: 'the others.', wrong: ['all virtue.', 'true freedom.', 'lasting peace.'] },
          { start: 'The roots of education are bitter, but the fruit is', correct: 'sweet.', wrong: ['lasting.', 'worth it.', 'wisdom.'] },
          { start: 'Give me a child until he is 7 and I will show you', correct: 'the man.', wrong: ['his soul.', 'his future.', 'his nature.'] },
          { start: 'He who is to be a good ruler must have first been', correct: 'ruled.', wrong: ['tested.', 'taught.', 'humbled.'] },
          { start: 'Time crumbles things; everything grows old under the power of Time and is forgotten through the lapse of', correct: 'Time.', wrong: ['years.', 'ages.', 'history.'] },
          { start: 'Memory is the scribe of', correct: 'the soul.', wrong: ['the mind.', 'all time.', 'our lives.'] },
          { start: 'The aim of the wise is not to secure pleasure, but to avoid', correct: 'pain.', wrong: ['conflict.', 'weakness.', 'excess.'] },
          { start: 'Man is by nature a', correct: 'political animal.', wrong: ['social creature.', 'rational being.', 'moral soul.'] },
          { start: 'Quality is not an act, it is a', correct: 'habit.', wrong: ['gift.', 'virtue.', 'choice.'] },
          { start: 'We become brave by doing', correct: 'brave acts.', wrong: ['hard things.', 'what is right.', 'noble deeds.'] },
          { start: 'Happiness belongs to the', correct: 'self-sufficient.', wrong: ['virtuous.', 'wise.', 'patient.'] },
          { start: 'If you would understand anything, observe its beginning and its', correct: 'development.', wrong: ['end.', 'purpose.', 'nature.'] },
          { start: 'It is well to be up before daybreak, for such habits contribute to health, wealth, and', correct: 'wisdom.', wrong: ['virtue.', 'success.', 'strength.'] },
          { start: 'Well begun is', correct: 'half done.', wrong: ['the key.', 'already won.', 'a great start.'] },
          { start: 'Education is the best provision for', correct: 'old age.', wrong: ['hard times.', 'all seasons.', 'a good life.'] },
          { start: 'Adventure is', correct: 'worthwhile.', wrong: ['necessary.', 'for the brave.', 'life itself.'] },
          { start: 'At his best, man is the noblest of all animals; separated from law and justice he is the', correct: 'worst.', wrong: ['most dangerous.', 'most savage.', 'lowest creature.'] },
          { start: 'Evil brings men', correct: 'together.', wrong: ['to ruin.', 'to their knees.', 'low.'] },
          { start: 'No one loves the man whom he', correct: 'fears.', wrong: ['envies.', 'does not know.', 'cannot trust.'] },
          { start: 'The saddest of all tragedies is', correct: 'the wasted life.', wrong: ['a broken heart.', 'dying alone.', 'lost friendship.'] },
          { start: 'The quality of life is determined by its', correct: 'activities.', wrong: ['virtues.', 'pleasures.', 'choices.'] },
          { start: 'Plato is dear to me, but dearer still is', correct: 'truth.', wrong: ['wisdom.', 'justice.', 'knowledge.'] },
        ]
      },
      {
        name: 'Plato',
        emoji: '💭',
        quotes: [
          { start: 'Be kind, for everyone you meet is', correct: 'fighting a harder battle.', wrong: ['seeking your approval.', 'hiding their strength.', 'waiting for success.'] },
          { start: 'Only the dead have seen the end', correct: 'of war.', wrong: ['of suffering.', 'of truth.', 'of fear.'] },
          { start: 'The price good men pay for indifference is to be ruled', correct: 'by evil men.', wrong: ['by fools.', 'by chaos.', 'by fate.'] },
          { start: 'Never discourage anyone who continually makes progress, no matter', correct: 'how slow.', wrong: ['how small.', 'how uncertain.', 'how difficult.'] },
          { start: 'The measure of a man is what he does', correct: 'with power.', wrong: ['with wealth.', 'with knowledge.', 'with freedom.'] },
          { start: 'Good people do not need laws to tell them to act responsibly, while bad people', correct: 'will find a way around the laws.', wrong: ['ignore them entirely.', 'fear punishment.', 'seek to change them.'] },
          { start: 'If women are expected to do the same work as men, we must teach them', correct: 'the same things.', wrong: ['different skills.', 'less responsibility.', 'greater patience.'] },
          { start: 'Ignorance is the root and stem', correct: 'of every evil.', wrong: ['of all fear.', 'of human weakness.', 'of injustice.'] },
          { start: 'Love is a serious', correct: 'mental disease.', wrong: ['human illusion.', 'emotional struggle.', 'form of weakness.'] },
          { start: 'Those who tell the stories', correct: 'rule society.', wrong: ['shape the future.', 'control history.', 'inspire the masses.'] },
          { start: 'Human behavior flows from three main sources: desire, emotion, and', correct: 'knowledge.', wrong: ['instinct.', 'power.', 'fear.'] },
          { start: 'Education is teaching our children to desire', correct: 'the right things.', wrong: ['great success.', 'endless knowledge.', 'true happiness.'] },
          { start: 'The madness of love is the greatest of heaven’s', correct: 'blessings.', wrong: ['mysteries.', 'secrets.', 'powers.'] },
          { start: 'Courage is knowing', correct: 'what not to fear.', wrong: ['how to fight.', 'when to act.', 'who to trust.'] },
          { start: 'There are three classes of men: lovers of wisdom, lovers of honor, and lovers of', correct: 'gain.', wrong: ['power.', 'truth.', 'glory.'] },
          { start: 'You should not honor men more than', correct: 'truth.', wrong: ['power.', 'wealth.', 'wisdom.'] },
          { start: 'The beginning is the most important part of the', correct: 'work.', wrong: ['process.', 'journey.', 'plan.'] },
          { start: 'Necessity is the mother of', correct: 'invention.', wrong: ['progress.', 'change.', 'creation.'] },
          { start: 'The greatest wealth is to live content with', correct: 'little.', wrong: ['honor.', 'purpose.', 'freedom.'] },
          { start: 'Death is not the worst that can happen to', correct: 'men.', wrong: ['the soul.', 'humanity.', 'life.'] },
          { start: 'An empty vessel makes the loudest', correct: 'sound.', wrong: ['noise.', 'voice.', 'echo.'] },
          { start: 'Character is simply habit long', correct: 'continued.', wrong: ['developed.', 'learned.', 'tested.'] },
          { start: 'Man is a being in search of', correct: 'meaning.', wrong: ['truth.', 'purpose.', 'power.'] },
          { start: 'No one is more hated than he who speaks the', correct: 'truth.', wrong: ['mind.', 'facts.', 'reality.'] },
          { start: 'Knowledge is the food of the', correct: 'soul.', wrong: ['mind.', 'heart.', 'spirit.'] },
          { start: 'Thinking is the talking of the soul with', correct: 'itself.', wrong: ['others.', 'truth.', 'reason.'] },
          { start: 'Wise men speak because they have something to say; fools speak because they', correct: 'have to say something.', wrong: ['seek attention.', 'fear silence.', 'lack wisdom.'] },
          { start: 'The unexamined life is not worth', correct: 'living.', wrong: ['knowing.', 'having.', 'pursuing.'] },
          { start: 'A house that has a library in it has a', correct: 'soul.', wrong: ['mind.', 'future.', 'heart.'] },
          { start: 'Virtue does not spring from riches, but riches and all other human blessings from', correct: 'virtue.', wrong: ['knowledge.', 'power.', 'pleasure.'] },
          { start: 'Until philosophers rule as kings or those who are now called kings genuinely philosophise, cities will have no rest from', correct: 'evils.', wrong: ['poverty.', 'war.', 'ignorance.'] },
          { start: 'Madness, provided it comes as the gift of heaven, is the channel by which we receive the greatest', correct: 'blessings.', wrong: ['curses.', 'knowledge.', 'riches.'] },
          { start: 'God only is wise; and the wisdom of men is worth', correct: 'little or nothing.', wrong: ['everything.', 'much.', 'power.'] },
          { start: 'Mankind censure injustice fearing that they may be the victims of it, and not because they shrink from', correct: 'committing it.', wrong: ['praising it.', 'ignoring it.', 'teaching it.'] },
          { start: 'Attention to health is life’s greatest', correct: 'hindrance.', wrong: ['blessing.', 'duty.', 'pleasure.'] },
          { start: 'Life must be lived as', correct: 'play.', wrong: ['work.', 'duty.', 'suffering.'] },
          { start: 'I know that I', correct: 'know nothing.', wrong: ['know everything.', 'am wise.', 'am powerful.'] },
          { start: 'Human nature was originally one and we were a whole, and the pursuit of the whole is called', correct: 'love.', wrong: ['hate.', 'fear.', 'wisdom.'] },
          { start: 'States will never be happy until rulers become', correct: 'philosophers.', wrong: ['warriors.', 'merchants.', 'priests.'] },
          { start: 'Ignorance, the root and stem of all', correct: 'evil.', wrong: ['good.', 'wisdom.', 'knowledge.'] },
          { start: 'Love is the joy of the good, the wonder of the wise, the amazement of the', correct: 'Gods.', wrong: ['mortals.', 'rich.', 'powerful.'] },
          { start: 'There will be no end to the troubles of the state until philosophers become', correct: 'kings.', wrong: ['soldiers.', 'merchants.', 'poets.'] },
          { start: 'We are twice armed if we fight with', correct: 'faith.', wrong: ['fear.', 'anger.', 'wealth.'] },
          { start: 'Opinion without knowledge is always a', correct: 'poor thing.', wrong: ['strong thing.', 'wise thing.', 'useful thing.'] },
          { start: 'A poet is a light thing, winged and holy, and cannot compose before he gets', correct: 'inspiration.', wrong: ['money.', 'training.', 'fame.'] },
          { start: 'The wise man will want to be ever with him who is', correct: 'better than himself.', wrong: ['weaker than himself.', 'richer than himself.', 'equal to himself.'] },
          { start: 'For a man to conquer himself is the first and noblest of all', correct: 'victories.', wrong: ['defeats.', 'battles.', 'pleasures.'] },
          { start: 'I am better off than he is—for he knows nothing, and thinks that he knows; I neither know nor think that I', correct: 'know.', wrong: ['care.', 'win.', 'rule.'] },
          { start: 'The beginning is the most important part of any', correct: 'work.', wrong: ['dream.', 'pleasure.', 'speech.'] },
          { start: 'Beauty is the splendor of', correct: 'truth.', wrong: ['wealth.', 'power.', 'youth.'] },
          { start: 'I would rather that the whole world should be at odds with me, rather than that I myself should be at odds with', correct: 'myself.', wrong: ['others.', 'the gods.', 'the law.'] },
          { start: 'Friends have all things in', correct: 'common.', wrong: ['secret.', 'competition.', 'rivalry.'] },
          { start: 'Good people do not need laws to tell them to act responsibly, while bad people will find a way around the', correct: 'laws.', wrong: ['truth.', 'gods.', 'people.'] },
          { start: 'Everything changes and nothing', correct: 'remains still.', wrong: ['is permanent.', 'matters.', 'is real.'] },
          { start: 'You learn more about a person in an hour of play than in a year of', correct: 'conversation.', wrong: ['work.', 'study.', 'war.'] },
          { start: 'There is no greater evil one can suffer than to hate reasonable', correct: 'discourse.', wrong: ['people.', 'wealth.', 'power.'] },
          { start: 'The greatest mistake in the treatment of diseases is that there are physicians for the body and physicians for the', correct: 'soul.', wrong: ['mind.', 'state.', 'wealth.'] },
          { start: 'Let no one destitute of Geometry enter my', correct: 'doors.', wrong: ['house.', 'school.', 'city.'] },
          { start: 'The word friend is common, the fact is', correct: 'rare.', wrong: ['easy.', 'cheap.', 'powerful.'] },
          { start: 'Crito, I owe a cock to', correct: 'Asclepius.', wrong: ['Zeus.', 'Athena.', 'Apollo.'] },
        ]
      },
      {
        name: 'Heraclitus',
        emoji: '🌊',
        quotes: [
          { start: 'No man ever steps in the same river twice, for it is not the same river and he is not the same', correct: 'man.', wrong: ['river.', 'god.', 'soul.'] },
          { start: 'The only thing that is constant is', correct: 'change.', wrong: ['truth.', 'wisdom.', 'peace.'] },
          { start: 'Nothing endures but', correct: 'change.', wrong: ['truth.', 'peace.', 'wealth.'] },
          { start: 'The soul is dyed the color of its', correct: 'thoughts.', wrong: ['actions.', 'words.', 'desires.'] },
          { start: 'Much learning does not teach', correct: 'understanding.', wrong: ['wisdom.', 'power.', 'wealth.'] },
          { start: 'Man’s character is his', correct: 'fate.', wrong: ['wealth.', 'glory.', 'body.'] },
          { start: 'Character is', correct: 'destiny.', wrong: ['luck.', 'wealth.', 'fame.'] },
          { start: 'The unlike is joined together, and from differences results the most beautiful', correct: 'harmony.', wrong: ['chaos.', 'silence.', 'war.'] },
          { start: 'The sun is new', correct: 'each day.', wrong: ['each year.', 'forever.', 'at night.'] },
          { start: 'Silence,', correct: 'healing.', wrong: ['speaking.', 'fighting.', 'thinking.'] },
          { start: 'All are', correct: 'one.', wrong: ['many.', 'separate.', 'divided.'] },
          { start: 'The road up and the road down is', correct: 'one and the same.', wrong: ['different.', 'opposite.', 'parallel.'] },
          { start: 'Everything flows, nothing', correct: 'stands still.', wrong: ['changes.', 'matters.', 'ends.'] },
          { start: 'Nature loves to', correct: 'hide.', wrong: ['reveal.', 'fight.', 'sleep.'] },
          { start: 'Dogs bark at what they', correct: 'don’t understand.', wrong: ['fear.', 'know.', 'love.'] },
          { start: 'Opposition brings', correct: 'concord.', wrong: ['war.', 'silence.', 'chaos.'] },
          { start: 'The waking have one world in common, but the asleep turn aside into', correct: 'private worlds.', wrong: ['the same world.', 'dreams.', 'darkness.'] },
          { start: 'You cannot step twice into the same', correct: 'river.', wrong: ['truth.', 'soul.', 'city.'] },
          { start: 'Time is a child playing', correct: 'beautifully.', wrong: ['seriously.', 'dangerously.', 'foolishly.'] },
          { start: 'Wisdom is one thing: to know the thought by which all things are', correct: 'steered.', wrong: ['destroyed.', 'created.', 'hidden.'] },
          { start: 'A man’s character is his', correct: 'daemon.', wrong: ['god.', 'fate.', 'body.'] },
          { start: 'The beginning and the end are', correct: 'one.', wrong: ['different.', 'separate.', 'opposites.'] },
          { start: 'The unseen harmony is better than the', correct: 'visible.', wrong: ['heard.', 'known.', 'spoken.'] },
          { start: 'Change alone is', correct: 'unchanging.', wrong: ['permanent.', 'good.', 'evil.'] },
          { start: 'The cosmos works by harmony of tensions, like the', correct: 'lyre and bow.', wrong: ['sun and moon.', 'fire and water.', 'day and night.'] },
          { start: 'War is the father of all and king of', correct: 'all.', wrong: ['peace.', 'men.', 'gods.'] },
          { start: 'To God all things are fair and good and right, but men hold some things', correct: 'wrong.', wrong: ['right.', 'holy.', 'just.'] },
          { start: 'The content of your character is your', correct: 'choice.', wrong: ['fate.', 'luck.', 'gods.'] },
          { start: 'Day by day, what you do is who you', correct: 'become.', wrong: ['were.', 'forget.', 'lose.'] },
          { start: 'Thinking is a sacred', correct: 'disease.', wrong: ['gift.', 'blessing.', 'cure.'] },
          { start: 'Eyes and ears are bad witnesses to men having barbarian', correct: 'souls.', wrong: ['bodies.', 'minds.', 'hearts.'] },
          { start: 'It is difficult to fight against', correct: 'anger.', wrong: ['fear.', 'love.', 'desire.'] },
          { start: 'Whoever cannot seek the unforeseen sees nothing, for the known way is an', correct: 'impasse.', wrong: ['easy path.', 'shortcut.', 'victory.'] },
          { start: 'Good character is not formed in a week or a month. It is created little by little,', correct: 'day by day.', wrong: ['by luck.', 'by birth.', 'by gods.'] },
          { start: 'We are most nearly ourselves when we achieve the seriousness of the child at', correct: 'play.', wrong: ['work.', 'war.', 'study.'] },
        ]
      },
      {
        name: 'Pericles',
        emoji: '🗿',
        quotes: [
          { start: 'Just because you do not take an interest in politics doesn’t mean politics won’t take an interest in', correct: 'you.', wrong: ['others.', 'me.', 'them.'] },
          { start: 'What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of', correct: 'others.', wrong: ['gods.', 'kings.', 'yourself.'] },
          { start: 'Those who can truly be accounted brave are those who best know the meaning of what is sweet in life and what is terrible, and then go out undeterred to meet what is to', correct: 'come.', wrong: ['pass.', 'end.', 'begin.'] },
          { start: 'Wait for that wisest of all', correct: 'counselors, Time.', wrong: ['gods.', 'warriors.', 'orators.'] },
          { start: 'Freedom is the sure possession of those alone who have the courage to', correct: 'defend it.', wrong: ['ignore it.', 'buy it.', 'sell it.'] },
          { start: 'To be happy means to be free and to be free means to be', correct: 'brave.', wrong: ['rich.', 'wise.', 'safe.'] },
          { start: 'Time is the wisest', correct: 'counselor of all.', wrong: ['teacher.', 'warrior.', 'ruler.'] },
          { start: 'What I fear is not the enemy’s strategy but our own', correct: 'mistakes.', wrong: ['strength.', 'victories.', 'gods.'] },
          { start: 'When it is a question of settling private disputes, everyone is equal before the', correct: 'law.', wrong: ['king.', 'gods.', 'rich.'] },
          { start: 'The greatest glory of a woman is to be least talked about among men, whether in praise or', correct: 'blame.', wrong: ['silence.', 'love.', 'wealth.'] },
          { start: 'A man who has the knowledge but lacks the power to express it is no better off than if he never had any', correct: 'ideas at all.', wrong: ['wealth.', 'power.', 'friends.'] },
          { start: 'Judging happiness to be the fruit of freedom and freedom of valor, never decline the dangers of', correct: 'war.', wrong: ['peace.', 'love.', 'wealth.'] },
          { start: 'Our public men have, besides politics, their private affairs to attend to, and our ordinary citizens, though occupied with the pursuits of industry, are still fair judges of public', correct: 'matters.', wrong: ['wealth.', 'gods.', 'war.'] },
        ]
      },
      {
        name: 'Alexander the Great',
        emoji: '⚔️',
        quotes: [
          { start: 'I am indebted to my father for living, but to my teacher for', correct: 'living well.', wrong: ['conquering.', 'ruling.', 'fighting.'] },
          { start: 'There is nothing impossible to him who will', correct: 'try.', wrong: ['wait.', 'fear.', 'rest.'] },
          { start: 'I am not afraid of an army of lions led by a sheep; I am afraid of an army of sheep led by a', correct: 'lion.', wrong: ['sheep.', 'king.', 'god.'] },
          { start: 'A tomb now suffices him for whom the world was not', correct: 'enough.', wrong: ['big.', 'mine.', 'yours.'] },
          { start: 'Through every generation of the human race there has been a constant war, a war with', correct: 'fear.', wrong: ['love.', 'wealth.', 'power.'] },
          { start: 'When we give someone our time, we actually give a portion of our life that we will never', correct: 'take back.', wrong: ['regret.', 'forget.', 'lose.'] },
          { start: 'An army of sheep led by a lion is better than an army of lions led by a', correct: 'sheep.', wrong: ['lion.', 'king.', 'soldier.'] },
          { start: 'Sex and sleep alone make me conscious that I am', correct: 'mortal.', wrong: ['great.', 'king.', 'god.'] },
          { start: 'But truly, if I were not Alexander, I would be', correct: 'Diogenes.', wrong: ['a god.', 'a king.', 'immortal.'] },
          { start: 'Each moment free from fear makes a man', correct: 'immortal.', wrong: ['weak.', 'rich.', 'wise.'] },
          { start: 'Upon the conduct of each depends the fate of', correct: 'all.', wrong: ['one.', 'few.', 'none.'] },
          { start: 'Glory crowns the deeds of those who expose themselves to toils and', correct: 'dangers.', wrong: ['pleasures.', 'riches.', 'peace.'] },
          { start: 'My treasure lies in my', correct: 'friends.', wrong: ['gold.', 'conquests.', 'power.'] },
          { start: 'There are no more worlds to', correct: 'conquer!', wrong: ['rule.', 'see.', 'love.'] },
          { start: 'Remember, upon the conduct of each depends the fate of', correct: 'all.', wrong: ['one.', 'kings.', 'gods.'] },
          { start: 'For my part, I think that to a man of spirit there is no other aim and end of his labours except the labours', correct: 'themselves.', wrong: ['of others.', 'of war.', 'of peace.'] },
          { start: 'Toil and risk are the price of glory, but it is a lovely thing to live with courage and die leaving an everlasting', correct: 'fame.', wrong: ['wealth.', 'kingdom.', 'tomb.'] },
          { start: 'When you bury my body, don’t build any monument and keep my hands outside so that the world knows that the person who won the whole world had nothing in his', correct: 'hands.', wrong: ['heart.', 'mind.', 'tomb.'] },
        ]
      },
      {
        name: 'Diogenes of Sinope',
        emoji: '🏺',
        quotes: [
          { start: 'It is not that I am mad, it is only that my head is different from', correct: 'yours.', wrong: ['theirs.', 'Alexander\'s.', 'the gods\'.'] },
          { start: 'Of what use is a philosopher who doesn\'t hurt anybody\'s', correct: 'feelings?', wrong: ['wallet.', 'pride.', 'sleep.'] },
          { start: 'In a rich man\'s house there is no place to spit but his', correct: 'face.', wrong: ['floor.', 'table.', 'hands.'] },
          { start: 'It is the privilege of the gods to want nothing, and of godlike men to want', correct: 'little.', wrong: ['much.', 'everything.', 'power.'] },
          { start: 'I am a citizen of the', correct: 'world.', wrong: ['city.', 'Athens.', 'Greece.'] },
          { start: 'Dogs and philosophers do the greatest good and get the fewest', correct: 'rewards.', wrong: ['punishments.', 'thanks.', 'riches.'] },
          { start: 'I have nothing to ask but that you would remove to the other side, that you may not intercept the', correct: 'sunshine.', wrong: ['wind.', 'rain.', 'light.'] },
          { start: 'Blushing is the color of', correct: 'virtue.', wrong: ['shame.', 'fear.', 'weakness.'] },
          { start: 'No man is hurt but by', correct: 'himself.', wrong: ['others.', 'fate.', 'the gods.'] },
          { start: 'Poverty is a virtue which one can teach', correct: 'oneself.', wrong: ['others.', 'children.', 'kings.'] },
          { start: 'The foundation of every state is the education of its', correct: 'youth.', wrong: ['soldiers.', 'rulers.', 'priests.'] },
          { start: 'It takes a wise man to discover a', correct: 'wise man.', wrong: ['rich man.', 'king.', 'fool.'] },
          { start: 'He has the most who is most content with the', correct: 'least.', wrong: ['most.', 'power.', 'fame.'] },
          { start: 'The sun too penetrates the privies, but it is not', correct: 'polluted by them.', wrong: ['harmed.', 'changed.', 'weakened.'] },
          { start: 'The insult dishonors the one who infers it, not the one who', correct: 'receives it.', wrong: ['gives it.', 'ignores it.', 'forgets it.'] },
          { start: 'When some one reminded him that the people of Sinope had sentenced him to exile, he said, "And I sentenced them to stay at', correct: 'home.', wrong: ['exile.', 'war.', 'silence.'] },
          { start: 'Stand a little out of my', correct: 'sun.', wrong: ['way.', 'light.', 'shadow.'] },
        ]
      },
      {
        name: 'Epicurus',
        emoji: '🌿',
        quotes: [
          { start: 'Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only', correct: 'hoped for.', wrong: ['feared.', 'lost.', 'earned.'] },
          { start: 'He who is not satisfied with a little is satisfied with', correct: 'nothing.', wrong: ['everything.', 'much.', 'wealth.'] },
          { start: 'Death, therefore, the most awful of evils, is nothing to us, seeing that when we are, death is not come, and when death is come, we', correct: 'are not.', wrong: ['suffer.', 'fear.', 'exist.'] },
          { start: 'Of all the means to insure happiness throughout the whole life, by far the most important is the acquisition of', correct: 'friends.', wrong: ['wealth.', 'power.', 'knowledge.'] },
          { start: 'Not what we have but what we', correct: 'enjoy, constitutes our abundance.', wrong: ['own.', 'desire.', 'fear.'] },
          { start: 'It is folly for a man to pray to the gods for that which he has the power to obtain by', correct: 'himself.', wrong: ['force.', 'prayer.', 'others.'] },
          { start: 'The art of living well and the art of dying well are', correct: 'one.', wrong: ['different.', 'separate.', 'opposites.'] },
          { start: 'He who has peace of mind disturbs neither', correct: 'himself nor another.', wrong: ['the gods.', 'his friends.', 'the state.'] },
          { start: 'I was not, I was, I am not, I', correct: 'care not.', wrong: ['fear.', 'regret.', 'suffer.'] },
          { start: 'The wealth required by nature is limited and easy to procure; but the wealth required by vain ideals extends to', correct: 'infinity.', wrong: ['nothing.', 'happiness.', 'virtue.'] },
          { start: 'If you wish to make a man happy, add not to his riches but take away from his', correct: 'desires.', wrong: ['fears.', 'friends.', 'knowledge.'] },
          { start: 'It is better for you to be free of fear lying upon a pallet, than to have a golden couch and be full of', correct: 'trouble.', wrong: ['wealth.', 'power.', 'joy.'] },
          { start: 'Empty is the argument of the philosopher which does not relieve any human', correct: 'suffering.', wrong: ['pleasure.', 'wealth.', 'power.'] },
          { start: 'The greatest fruit of self-sufficiency is', correct: 'freedom.', wrong: ['wealth.', 'power.', 'fame.'] },
          { start: 'Why should I fear death? If I am, then death is not. If death is, then I', correct: 'am not.', wrong: ['fear it.', 'suffer.', 'exist.'] },
          { start: 'Be moderate in order to taste the joys of life in', correct: 'abundance.', wrong: ['excess.', 'poverty.', 'fear.'] },
          { start: 'The fool’s life is empty of gratitude and full of', correct: 'fears.', wrong: ['joys.', 'wealth.', 'friends.'] },
          { start: 'We should look for someone to eat and drink with before looking for something to', correct: 'eat and drink.', wrong: ['possess.', 'conquer.', 'pray for.'] },
          { start: 'Self-sufficiency is the greatest of all', correct: 'wealth.', wrong: ['pleasures.', 'powers.', 'fears.'] },
          { start: 'If a little is not enough for you, then', correct: 'nothing is.', wrong: ['everything is.', 'much is.', 'wealth is.'] }
        ]
      },
      {
        name: 'Democritus',
        emoji: '⚛️',
        quotes: [
          { start: 'Everywhere man blames nature and fate yet his fate is mostly but the echo of his character and', correct: 'passion.', wrong: ['wealth.', 'gods.', 'stars.'] },
          { start: 'Nothing exists except atoms and empty space; everything else is', correct: 'opinion.', wrong: ['truth.', 'reality.', 'gods.'] },
          { start: 'Many much-learned men have no', correct: 'intelligence.', wrong: ['wisdom.', 'wealth.', 'power.'] },
          { start: 'By desiring little, a poor man makes himself', correct: 'rich.', wrong: ['happy.', 'wise.', 'free.'] },
          { start: 'By convention sweet and by convention bitter, by convention hot, by convention cold, but in reality', correct: 'atoms and void.', wrong: ['gods and fate.', 'mind and soul.', 'pleasure and pain.'] },
          { start: 'Everything existing in the universe is the fruit of chance and', correct: 'necessity.', wrong: ['gods.', 'fate.', 'will.'] },
          { start: 'Happiness resides not in possessions, and not in gold, happiness dwells in the', correct: 'soul.', wrong: ['body.', 'wealth.', 'power.'] },
          { start: 'To a wise and good man the whole earth is his', correct: 'fatherland.', wrong: ['prison.', 'kingdom.', 'tomb.'] },
          { start: 'Good means not merely not to do wrong, but rather not to desire to do', correct: 'wrong.', wrong: ['good.', 'nothing.', 'much.'] },
          { start: 'It is greed to do all the talking but not to want to', correct: 'listen at all.', wrong: ['speak.', 'act.', 'learn.'] },
          { start: 'I would rather discover one cause than gain the kingdom of', correct: 'Persia.', wrong: ['Greece.', 'heaven.', 'wealth.'] },
          { start: 'No power and no treasure can outweigh the extension of our', correct: 'knowledge.', wrong: ['wealth.', 'power.', 'pleasure.'] },
          { start: 'If thou sustain injustice, console thyself; the true unhappiness is in', correct: 'doing it.', wrong: ['suffering it.', 'seeing it.', 'ignoring it.'] },
          { start: 'He is a sensible man who does not grieve for what he has not, but enjoys what he', correct: 'has.', wrong: ['wants.', 'sees.', 'fears.'] },
          { start: 'The word is the shadow of the', correct: 'deed.', wrong: ['thought.', 'soul.', 'god.'] },
          { start: 'Education is an ornament for the prosperous, a refuge for the', correct: 'unfortunate.', wrong: ['rich.', 'wise.', 'strong.'] },
          { start: 'The wrongdoer is more unfortunate than the man', correct: 'wronged.', wrong: ['wise.', 'rich.', 'happy.'] },
          { start: 'A life without festivity is a long road without an', correct: 'inn.', wrong: ['end.', 'purpose.', 'friend.'] },
          { start: 'If your desires are not great, a little will seem much to you; for small appetite makes poverty equivalent to', correct: 'wealth.', wrong: ['happiness.', 'wisdom.', 'freedom.'] }
        ]
      },
      {
        name: 'Epictetus',
        emoji: '🪨',
        quotes: [
          { start: 'It\'s not what happens to you, but how you react to it that', correct: 'matters.', wrong: ['defines you.', 'changes you.', 'controls you.'] },
          { start: 'There is only one way to happiness and that is to cease worrying about things which are beyond the power of our', correct: 'will.', wrong: ['control.', 'desire.', 'fate.'] },
          { start: 'Don\'t explain your philosophy. Embody', correct: 'it.', wrong: ['it in words.', 'your success.', 'your knowledge.'] },
          { start: 'Wealth consists not in having great possessions, but in having few', correct: 'wants.', wrong: ['needs.', 'desires.', 'fears.'] },
          { start: 'If anyone tells you that a certain person speaks ill of you, do not make excuses but answer, "He was ignorant of my other faults, else he would not have mentioned these', correct: 'alone."', wrong: ['at all."', 'publicly."', 'loudly."'] },
          { start: 'Man is not worried by real problems so much as by his imagined anxieties about real', correct: 'problems.', wrong: ['people.', 'future.', 'past.'] },
          { start: 'First say to yourself what you would be; and then do what you have to', correct: 'do.', wrong: ['say.', 'think.', 'feel.'] },
          { start: 'Any person capable of angering you becomes your master; he can anger you only when you permit yourself to be disturbed by', correct: 'him.', wrong: ['them.', 'it.', 'fate.'] },
          { start: 'If you want to improve, be content to be thought foolish and', correct: 'stupid.', wrong: ['wise.', 'strong.', 'great.'] },
          { start: 'It is impossible for a man to learn what he thinks he already', correct: 'knows.', wrong: ['wants.', 'needs.', 'has.'] },
          { start: 'The key is to keep company only with people who uplift you, whose presence calls forth your', correct: 'best.', wrong: ['worst.', 'ego.', 'desires.'] },
          { start: 'He who laughs at himself never runs out of things to', correct: 'laugh at.', wrong: ['cry about.', 'complain about.', 'fear.'] },
          { start: 'Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our', correct: 'control.', wrong: ['reach.', 'power.', 'desire.'] },
          { start: 'Circumstances don\'t make the man, they only reveal him to', correct: 'himself.', wrong: ['others.', 'the world.', 'God.'] },
          { start: 'People are not disturbed by things, but by the views they take of', correct: 'them.', wrong: ['life.', 'others.', 'themselves.'] },
          { start: 'Only the educated are', correct: 'free.', wrong: ['wise.', 'happy.', 'rich.'] },
          { start: 'No man is free who is not master of', correct: 'himself.', wrong: ['others.', 'fate.', 'wealth.'] },
          { start: 'First learn the meaning of what you say, and then', correct: 'speak.', wrong: ['act.', 'think.', 'write.'] },
          { start: 'To accuse others for one\'s own misfortune is a sign of want of education. To accuse oneself shows that one\'s education has begun. To accuse neither oneself nor others shows that one\'s education is', correct: 'complete.', wrong: ['useless.', 'perfect.', 'begun.'] },
          { start: 'He is a wise man who does not grieve for the things which he has not, but rejoices for those which he', correct: 'has.', wrong: ['wants.', 'loses.', 'desires.'] }
        ]
      },
      {
        name: 'Pythagoras',
        emoji: '🔺',
        quotes: [
          { start: 'As long as Man continues to be the ruthless destroyer of lower living beings, he will never know health or', correct: 'peace.', wrong: ['wealth.', 'power.', 'fame.'] },
          { start: 'Be silent or let thy words be worth more than', correct: 'silence.', wrong: ['gold.', 'action.', 'thought.'] },
          { start: 'If there be light, then there is darkness; if cold, heat; if height, depth; if solid, fluid; if hard, soft; if rough, smooth; if calm, tempest; if prosperity, adversity; if life,', correct: 'death.', wrong: ['joy.', 'love.', 'truth.'] },
          { start: 'No one is free who has not obtained the empire of', correct: 'himself.', wrong: ['others.', 'fate.', 'the gods.'] },
          { start: 'Educate the children and it won\'t be necessary to punish the', correct: 'men.', wrong: ['gods.', 'animals.', 'women.'] },
          { start: 'Do not say a little in many words, but a great deal in', correct: 'few!', wrong: ['many.', 'silence.', 'action.'] },
          { start: 'Rest satisfied with doing well, and leave others to talk of you as they', correct: 'please.', wrong: ['will.', 'want.', 'must.'] },
          { start: 'In anger we should refrain both from speech and', correct: 'action.', wrong: ['thought.', 'feeling.', 'desire.'] },
          { start: 'The oldest, shortest words — "yes" and "no" — are those which require the most', correct: 'thought.', wrong: ['effort.', 'time.', 'courage.'] },
          { start: 'No man is free who cannot command', correct: 'himself.', wrong: ['others.', 'fate.', 'wealth.'] },
          { start: 'Choose rather to be strong of soul than strong of', correct: 'body.', wrong: ['mind.', 'will.', 'heart.'] },
          { start: 'Silence is better than unmeaning', correct: 'words.', wrong: ['actions.', 'thoughts.', 'promises.'] },
          { start: 'Above all things,', correct: 'respect yourself.', wrong: ['others.', 'the gods.', 'wealth.'] },
          { start: 'Let no one persuade you by word or deed to do or say whatever is not best for', correct: 'you.', wrong: ['others.', 'the state.', 'the gods.'] },
          { start: 'A man is never as big as when he is on his knees to help a', correct: 'child.', wrong: ['king.', 'god.', 'friend.'] },
          { start: 'Friends share all', correct: 'things.', wrong: ['secrets.', 'fears.', 'joys.'] },
          { start: 'Choose always the way that seems the best, however rough it may be; custom will soon render it easy and', correct: 'agreeable.', wrong: ['difficult.', 'painful.', 'boring.'] },
          { start: 'Anger begins in folly, and ends in', correct: 'repentance.', wrong: ['victory.', 'strength.', 'joy.'] },
          { start: 'We ought so to behave to one another as to avoid making enemies of our friends, and at the same time to make friends of our', correct: 'enemies.', wrong: ['gods.', 'selves.', 'fears.'] },
          { start: 'A blow from your friend is better than a kiss from your', correct: 'enemy.', wrong: ['lover.', 'king.', 'god.'] }
        ]
      },
      {
        name: 'Thales',
        emoji: '🌊',
        quotes: [
          { start: 'Nothing is more active than thought, for it travels over the universe, and nothing is stronger than', correct: 'necessity.', wrong: ['fate.', 'time.', 'wealth.'] },
          { start: 'Time is the wisest of all things that are; for it brings everything to', correct: 'light.', wrong: ['darkness.', 'ruin.', 'wealth.'] },
          { start: 'If there is a change, there must be some thing that changes, yet does not', correct: 'change.', wrong: ['move.', 'exist.', 'die.'] },
          { start: 'Know', correct: 'thyself.', wrong: ['others.', 'the gods.', 'the stars.'] },
          { start: 'The way of living virtuously is by never doing ourselves what we blame in', correct: 'others.', wrong: ['ourselves.', 'the gods.', 'fate.'] },
          { start: 'All things are full of', correct: 'gods.', wrong: ['atoms.', 'water.', 'numbers.'] },
          { start: 'The way of living virtuously is by never doing ourselves what', correct: 'we blame in others.', wrong: ['is easy.', 'is impossible.', 'requires wealth.'] }
        ]
      },
      {
        name: 'Thucydides',
        emoji: '📜',
        quotes: [
          { start: 'Self-control is the chief element in self-respect, and self-respect is the chief element in', correct: 'courage.', wrong: ['wisdom.', 'power.', 'wealth.'] },
          { start: 'Most people, in fact, will not take the trouble in finding out the truth, but are much more inclined to accept the first story they', correct: 'hear.', wrong: ['like.', 'believe.', 'fear.'] },
          { start: 'Right, as the world goes, is only in question between equals in power, while the strong do what they can and the weak suffer what they', correct: 'must.', wrong: ['deserve.', 'want.', 'fear.'] },
          { start: 'The bravest are surely those who have the clearest vision of what is before them, glory and danger alike, and yet notwithstanding, go out to', correct: 'meet it.', wrong: ['avoid it.', 'ignore it.', 'fear it.'] },
          { start: 'The society that separates its scholars from its warriors will have its thinking done by cowards and its fighting done by', correct: 'fools.', wrong: ['heroes.', 'philosophers.', 'kings.'] },
          { start: 'We Greeks believe that a man who takes no part in public affairs is not merely lazy, but good for', correct: 'nothing.', wrong: ['himself.', 'the state.', 'the gods.'] },
          { start: 'Ignorance is bold, and knowledge is', correct: 'reserved.', wrong: ['powerful.', 'dangerous.', 'weak.'] },
          { start: 'When will there be justice in Athens? There will be justice in Athens when those who are not injured are as outraged as those who', correct: 'are.', wrong: ['suffer.', 'rule.', 'win.'] },
          { start: 'War is a matter not so much of arms as of', correct: 'money.', wrong: ['courage.', 'honor.', 'gods.'] },
          { start: 'In practice we always base our preparations against an enemy on the assumption that his plans are good; indeed, it is right to rest our hopes not on a belief in his blunders, but on the soundness of our', correct: 'provisions.', wrong: ['courage.', 'numbers.', 'gods.'] },
          { start: 'It is frequently a misfortune to have very brilliant men in charge of affairs. They expect too much of', correct: 'ordinary men.', wrong: ['themselves.', 'the gods.', 'their enemies.'] },
          { start: 'Men who are capable of real action first make their plans and then go forward without hesitation while their enemies have still not made up their', correct: 'minds.', wrong: ['plans.', 'courage.', 'strength.'] },
          { start: 'I am more afraid of our own blunders than of the enemy\'s', correct: 'devices.', wrong: ['numbers.', 'courage.', 'gods.'] },
          { start: 'The strong do what they can and the weak suffer what they', correct: 'must.', wrong: ['deserve.', 'fear.', 'want.'] }
        ]
      },
      {
        name: 'Euripides',
        emoji: '🎭',
        quotes: [
          { start: 'Talk sense to a fool and he calls you', correct: 'foolish.', wrong: ['wise.', 'clever.', 'mad.'] },
          { start: 'Stronger than lover\'s love is lover\'s', correct: 'hate.', wrong: ['joy.', 'fear.', 'hope.'] },
          { start: 'Come back. Even as a shadow, even as a', correct: 'dream.', wrong: ['ghost.', 'memory.', 'lie.'] },
          { start: 'When one with honeyed words but evil mind persuades the mob, great woes befall the', correct: 'state.', wrong: ['gods.', 'king.', 'people.'] },
          { start: 'Anger exceeding limits causes fear and excessive kindness eliminates', correct: 'respect.', wrong: ['love.', 'trust.', 'fear.'] },
          { start: 'The fiercest anger of all, the most incurable, is that which rages in the place of dearest', correct: 'love.', wrong: ['hate.', 'fear.', 'hope.'] },
          { start: 'One loyal friend is worth ten thousand', correct: 'relatives.', wrong: ['enemies.', 'lovers.', 'gold.'] },
          { start: 'This is slavery, not to speak one\'s', correct: 'thought.', wrong: ['mind.', 'heart.', 'truth.'] },
          { start: 'Let no one think of me that I am humble or weak or passive; let them understand I am of a different kind: dangerous to my enemies, loyal to my friends. To such a life glory', correct: 'belongs.', wrong: ['fades.', 'dies.', 'waits.'] },
          { start: 'Cleverness is not', correct: 'wisdom.', wrong: ['strength.', 'power.', 'love.'] },
          { start: 'Waste not fresh tears over old', correct: 'griefs.', wrong: ['joys.', 'fears.', 'dreams.'] },
          { start: 'I would rather die on my feet than live on my', correct: 'knees.', wrong: ['back.', 'hands.', 'terms.'] },
          { start: 'The wisest men follow their own', correct: 'direction.', wrong: ['gods.', 'fate.', 'crowd.'] },
          { start: 'He is not a lover who does not love', correct: 'forever.', wrong: ['truly.', 'deeply.', 'wisely.'] },
          { start: 'In case of dissension, never dare to judge till you\'ve heard the other', correct: 'side.', wrong: ['story.', 'man.', 'god.'] },
          { start: 'My love for you was greater than my', correct: 'wisdom.', wrong: ['strength.', 'power.', 'hate.'] },
          { start: 'Nothing is hopeless; we must hope for', correct: 'everything.', wrong: ['nothing.', 'peace.', 'victory.'] },
          { start: 'Your very silence shows you', correct: 'agree.', wrong: ['fear.', 'hate.', 'lie.'] },
          { start: 'Do not mistake the rule of force for true', correct: 'power.', wrong: ['wisdom.', 'love.', 'justice.'] },
          { start: 'Human misery must somewhere have a stop; there is no wind that always blows a storm; great good fortune comes to failure in the end. All is change; all yields its place and goes; to persevere, trusting in what hopes he has, is courage in a man. The coward', correct: 'despairs.', wrong: ['wins.', 'fights.', 'hides.'] }
        ]
      },
      {
        name: 'Aristophanes',
        emoji: '🎭',
        quotes: [
          { start: 'Youth ages, immaturity is outgrown, ignorance can be educated, and drunkenness sobered, but stupid lasts', correct: 'forever.', wrong: ['a while.', 'sometimes.', 'briefly.'] },
          { start: 'Open your mind before your', correct: 'mouth.', wrong: ['eyes.', 'heart.', 'ears.'] },
          { start: 'Quickly, bring me a beaker of wine, so that I may wet my mind and say something', correct: 'clever.', wrong: ['wise.', 'true.', 'bold.'] },
          { start: 'To win the people, always cook them some savoury that', correct: 'pleases them.', wrong: ['nourishes them.', 'challenges them.', 'educates them.'] },
          { start: 'Look at the orators in our republics; as long as they are poor, both state and people can only praise their uprightness; but once they are fattened on the public funds, they conceive a hatred for justice, plan intrigues against the people and attack the', correct: 'democracy.', wrong: ['rich.', 'gods.', 'wise.'] },
          { start: 'By words the mind is', correct: 'winged.', wrong: ['bound.', 'broken.', 'blinded.'] },
          { start: 'Wise people, even though all laws were abolished, would still lead the same', correct: 'life.', wrong: ['chaos.', 'war.', 'ruin.'] },
          { start: 'High thoughts must have high', correct: 'language.', wrong: ['silence.', 'action.', 'deeds.'] },
          { start: 'Let each man exercise the art he', correct: 'knows.', wrong: ['fears.', 'desires.', 'hates.'] },
          { start: 'It is from their foes, not their friends, that cities learn the lesson of building high walls and ships of', correct: 'war.', wrong: ['peace.', 'trade.', 'love.'] },
          { start: 'A man can learn wisdom even from his', correct: 'enemies.', wrong: ['friends.', 'gods.', 'self.'] },
          { start: 'Even from enemies much can be learned by the', correct: 'intelligent.', wrong: ['foolish.', 'rich.', 'powerful.'] },
          { start: 'The trickiest thing is the nature of man, apparent in', correct: 'everything.', wrong: ['nothing.', 'war.', 'love.'] },
          { start: 'One’s country is wherever one does', correct: 'well.', wrong: ['badly.', 'nothing.', 'harm.'] }
        ]
      },
      {
        name: 'Archimedes',
        emoji: '⚖️',
        quotes: [
          { start: 'Give me a place to stand and I will move the', correct: 'earth.', wrong: ['stars.', 'gods.', 'sea.'] },
          { start: 'Give me a lever long enough and a fulcrum on which to place it, and I shall move the', correct: 'world.', wrong: ['sky.', 'stars.', 'gods.'] },
          { start: 'Give me but a firm spot on which to stand, and I shall move the', correct: 'earth.', wrong: ['heavens.', 'fate.', 'stars.'] },
          { start: 'Mathematics reveals its secrets only to those who approach it with pure love, for its own', correct: 'beauty.', wrong: ['power.', 'wealth.', 'fame.'] },
          { start: 'Don\'t disturb my', correct: 'circles!', wrong: ['work.', 'peace.', 'thoughts.'] },
          { start: 'He who knows how to speak, knows also', correct: 'when.', wrong: ['why.', 'how.', 'where.'] }
        ]
      },
      {
        name: 'Plutarch',
        emoji: '📖',
        quotes: [
          { start: 'The mind is not a vessel to be filled, but a fire to be', correct: 'kindled.', wrong: ['extinguished.', 'contained.', 'ignored.'] },
          { start: 'I don\'t need a friend who changes when I change and who nods when I nod; my shadow does that much', correct: 'better.', wrong: ['worse.', 'faster.', 'louder.'] },
          { start: 'Know how to listen, and you will profit even from those who talk', correct: 'badly.', wrong: ['loudly.', 'wisely.', 'softly.'] },
          { start: 'An imbalance between rich and poor is the oldest and most fatal ailment of all', correct: 'republics.', wrong: ['empires.', 'kingdoms.', 'cities.'] },
          { start: 'To find fault is easy; to do better may be', correct: 'difficult.', wrong: ['impossible.', 'easy.', 'foolish.'] },
          { start: 'To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the', correct: 'future.', wrong: ['past.', 'present.', 'gods.'] },
          { start: 'The poor go to war, to fight and die for the delights, riches, and superfluities of', correct: 'others.', wrong: ['themselves.', 'the rich.', 'the gods.'] },
          { start: 'Neither blame or praise', correct: 'yourself.', wrong: ['others.', 'the gods.', 'fate.'] },
          { start: 'Character is simply habit long', correct: 'continued.', wrong: ['forgotten.', 'broken.', 'ignored.'] },
          { start: 'Adversity is the only balance to weigh', correct: 'friends.', wrong: ['enemies.', 'wealth.', 'power.'] },
          { start: 'The whole of life is but a moment of time. It is our duty, therefore to use it, not to', correct: 'misuse it.', wrong: ['waste it.', 'hoard it.', 'fear it.'] },
          { start: 'Do not speak of your happiness to one less fortunate than', correct: 'yourself.', wrong: ['others.', 'the gods.', 'your friends.'] },
          { start: 'The Spartans do not ask how many are the enemy but', correct: 'where are they.', wrong: ['who they are.', 'why they fight.', 'what they want.'] },
          { start: 'It is a thing of no great difficulty to raise objections against another man\'s oration, it is a very easy matter; but to produce a better in its place is a work extremely', correct: 'troublesome.', wrong: ['easy.', 'foolish.', 'unnecessary.'] },
          { start: 'Painting is silent poetry, and poetry is painting that', correct: 'speaks.', wrong: ['sings.', 'moves.', 'lives.'] }
        ]
      },
      {
        name: 'Solon',
        emoji: '⚖️',
        quotes: [
          { start: 'Call no man happy until he is', correct: 'dead.', wrong: ['rich.', 'wise.', 'powerful.'] },
          { start: 'No more good must be attempted than the nation can', correct: 'bear.', wrong: ['afford.', 'understand.', 'endure.'] },
          { start: 'Seek to learn constantly while you live; do not wait in the faith that old age by itself will bring', correct: 'wisdom.', wrong: ['wealth.', 'peace.', 'power.'] },
          { start: 'In giving advice seek to help, not to please, your', correct: 'friend.', wrong: ['enemy.', 'ruler.', 'self.'] },
          { start: 'If all our misfortunes were laid in one common heap, whence every one must take an equal portion, most people would be contented to take their own and', correct: 'depart.', wrong: ['complain.', 'fight.', 'share.'] },
          { start: 'Reprove thy friend privately: commend him', correct: 'publicly.', wrong: ['privately.', 'loudly.', 'never.'] },
          { start: 'Many bad men are rich, many good men are poor; but we shall not exchange wealth for honour, for money flits from man to man but honour abides', correct: 'forever.', wrong: ['briefly.', 'sometimes.', 'rarely.'] },
          { start: 'That city in which those who are not wronged, no less than those who are wronged, exert themselves to punish the', correct: 'wrongdoers.', wrong: ['innocent.', 'rich.', 'powerful.'] }
        ]
      },
      {
        name: 'Xenophon',
        emoji: '🏹',
        quotes: [
          { start: 'Anything forced is not', correct: 'beautiful.', wrong: ['useful.', 'wise.', 'strong.'] },
          { start: 'In my experience, men who respond to good fortune with modesty and kindness are harder to find than those who face adversity with', correct: 'courage.', wrong: ['fear.', 'anger.', 'greed.'] },
          { start: 'No human being will ever know the truth, for even if they happened to say it by chance, they would not know they had done', correct: 'so.', wrong: ['well.', 'right.', 'badly.'] },
          { start: 'You are well aware that it is not numbers or strength that bring the victories in war. No, it is when one side goes against the enemy with the gods\' gift of a stronger morale that their adversaries, as a rule, cannot withstand', correct: 'them.', wrong: ['us.', 'you.', 'it.'] },
          { start: 'Self-confidence should always ride side by side with a strong sense of', correct: 'humility.', wrong: ['pride.', 'power.', 'wealth.'] },
          { start: 'Moderation in all things healthful; total abstinence from all things', correct: 'harmful.', wrong: ['pleasant.', 'necessary.', 'useful.'] },
          { start: 'Remember the lessons of history. Remember how often whole peoples have allowed themselves to be persuaded to go to war by \'wise\' men — and then been utterly destroyed by the very enemy they agreed to', correct: 'attack!', wrong: ['defend.', 'ignore.', 'join.'] },
          { start: 'Most people, when they are set upon looking into other people\'s affairs, never turn to examine', correct: 'themselves.', wrong: ['others.', 'the gods.', 'their wealth.'] },
          { start: 'People often say what is right and do what is wrong; but nobody can be in the wrong if he is doing what is', correct: 'right.', wrong: ['easy.', 'popular.', 'profitable.'] },
          { start: 'To quote a dictum of Simon, what a horse does under compulsion he does blindly, and his performance is no more beautiful than would be that of a ballet-dancer taught by whip and', correct: 'goad.', wrong: ['love.', 'reason.', 'fear.'] }
        ]
      },
      {
        name: 'Herodotus',
        emoji: '📜',
        quotes: [
          { start: 'Of all men’s miseries the bitterest is this: to know so much and to have control over', correct: 'nothing.', wrong: ['everything.', 'fate.', 'the gods.'] },
          { start: 'It is better by noble boldness to run the risk of being subject to half of the evils we anticipate than to remain in cowardly listlessness for fear of what might', correct: 'happen.', wrong: ['come.', 'be.', 'pass.'] },
          { start: 'After all, no one is stupid enough to prefer war to peace; in peace sons bury their fathers and in war fathers bury their', correct: 'sons.', wrong: ['daughters.', 'friends.', 'enemies.'] },
          { start: 'The saddest aspect of life is that there is no one on earth whose happiness is such that he won\'t sometimes wish he were dead rather than', correct: 'alive.', wrong: ['poor.', 'weak.', 'ignorant.'] },
          { start: 'If anyone, no matter who, were given the opportunity of choosing from amongst all the nations in the world the set of beliefs which he thought best, he would inevitably — after careful consideration of their relative merits — choose that of his own', correct: 'country.', wrong: ['heart.', 'gods.', 'wisdom.'] },
          { start: 'Some men give up their designs when they have almost reached the goal, while others, on the contrary, obtain a victory by exerting, at the last moment, more vigorous efforts than ever', correct: 'before.', wrong: ['after.', 'expected.', 'thought.'] },
          { start: 'The worst pain a man can suffer: to have insight into much and power over', correct: 'nothing.', wrong: ['everything.', 'fate.', 'the gods.'] },
          { start: 'The most hateful grief of all human griefs is this, to have knowledge of the truth but no power over the', correct: 'event.', wrong: ['gods.', 'fate.', 'future.'] },
          { start: 'If an important decision is to be made, they [the Persians] discuss the question when they are drunk, and the following day the master of the house where the discussion was held submits their decision for reconsideration when they are', correct: 'sober.', wrong: ['drunk.', 'angry.', 'happy.'] },
          { start: 'Men trust their ears less than their', correct: 'eyes.', wrong: ['hearts.', 'minds.', 'gods.'] },
          { start: 'Force has no place where there is need of', correct: 'skill.', wrong: ['courage.', 'strength.', 'numbers.'] },
          { start: 'In peace, children inter their parents; war violates the order of nature and causes parents to inter their', correct: 'sons.', wrong: ['daughters.', 'friends.', 'enemies.'] },
          { start: 'Great deeds are usually wrought at great', correct: 'risks.', wrong: ['costs.', 'prices.', 'efforts.'] },
          { start: 'Hippocleides doesn\'t', correct: 'care.', wrong: ['know.', 'mind.', 'think.'] },
          { start: 'The Andrians were the first of the islanders to refuse Themistocles\' demand for money. He had put it to them that they would be unable to avoid paying, because the Athenians had the support of two powerful deities, one called Persuasion and the other', correct: 'Compulsion.', wrong: ['Fear.', 'War.', 'Victory.'] }
        ]
      },
      {
        name: 'Protagoras',
        emoji: '⚖️',
        quotes: [
          { start: 'Concerning the gods I cannot know either that they exist or that they do not exist, or what form they might have, for there is much to prevent one\'s knowing: the obscurity of the subject and the shortness of man\'s', correct: 'life.', wrong: ['wisdom.', 'power.', 'wealth.'] },
          { start: 'Man is the measure of all', correct: 'things.', wrong: ['gods.', 'stars.', 'fate.'] },
          { start: 'Man is the measure of all things of things that are, that they are, of things that are not, that they are', correct: 'not.', wrong: ['good.', 'evil.', 'wise.'] },
          { start: 'My own opinion is more or less this: no wise man believes that anyone sins willingly or willingly perpetuates any base or evil act; they know very well that every base or evil action is committed', correct: 'involuntarily.', wrong: ['willingly.', 'justly.', 'wisely.'] },
          { start: 'I can\'t know whether the gods exist or not, nor what they are like if they do. Two things in particular prevent any certain knowledge — the topic is obscure and life is', correct: 'short.', wrong: ['long.', 'easy.', 'simple.'] },
          { start: 'About the gods I have no means of knowing either that they exist or that they do not exist or what they are to look at. For there are many hindrances to knowledge, the obscurity of the subject and the brevity of human', correct: 'life.', wrong: ['wisdom.', 'power.', 'wealth.'] }
        ]
      },
      {
        name: 'Sophocles',
        emoji: '🎭',
        quotes: [
          { start: 'One word frees us of all the weight and pain of life: That word is', correct: 'love.', wrong: ['hope.', 'faith.', 'time.'] },
          { start: 'All men make mistakes, but a good man yields when he knows his course is wrong, and repairs the evil. The only crime is', correct: 'pride.', wrong: ['greed.', 'fear.', 'anger.'] },
          { start: 'Fortune is not on the side of the', correct: 'faint-hearted.', wrong: ['wise.', 'strong.', 'rich.'] },
          { start: 'Go then if you must, but remember, no matter how foolish your deeds, those who love you will love you', correct: 'still.', wrong: ['never.', 'always.', 'more.'] },
          { start: 'One must wait until the evening to see how splendid the day has', correct: 'been.', wrong: ['ended.', 'passed.', 'begun.'] },
          { start: 'The keenest sorrow is to recognize ourselves as the sole cause of all our', correct: 'adversities.', wrong: ['joys.', 'hopes.', 'fears.'] },
          { start: 'To throw away an honest friend is, as it were, to throw your life', correct: 'away.', wrong: ['away.', 'to the winds.', 'into the sea.'] },
          { start: 'A man, though wise, should never be ashamed of learning more, and must unbend his', correct: 'mind.', wrong: ['will.', 'heart.', 'soul.'] },
          { start: 'I have no desire to suffer twice, in reality and then in', correct: 'retrospect.', wrong: ['dream.', 'memory.', 'hope.'] },
          { start: 'If you try to cure evil with evil you will add more pain to your', correct: 'fate.', wrong: ['soul.', 'life.', 'heart.'] },
          { start: 'Fear? What has a man to do with fear? Chance rules our lives, and the future is all unknown. Best live as we may, from day to', correct: 'day.', wrong: ['night.', 'hour.', 'moment.'] },
          { start: 'Time, which sees all things, has found you', correct: 'out.', wrong: ['in.', 'away.', 'gone.'] },
          { start: 'There\'s nothing in the world so demoralizing as', correct: 'money.', wrong: ['power.', 'love.', 'war.'] },
          { start: 'I was born to join in love, not', correct: 'hate - that is my nature.', wrong: ['fear.', 'anger.', 'grief.'] },
          { start: 'Tomorrow is tomorrow. Future cares have future cures, and we must mind', correct: 'today.', wrong: ['yesterday.', 'tomorrow.', 'now.'] }
        ]
      },
      {
        name: 'Homer',
        emoji: '🏺',
        quotes: [
          { start: 'Of all creatures that breathe and move upon the earth, nothing is bred that is weaker than', correct: 'man.', wrong: ['gods.', 'lions.', 'heroes.'] },
          { start: 'Hateful to me as the gates of Hades is that man who hides one thing in his heart and speaks', correct: 'another.', wrong: ['truth.', 'wisdom.', 'honor.'] },
          { start: 'There is a time for many words, and there is also a time for', correct: 'sleep.', wrong: ['war.', 'feast.', 'battle.'] },
          { start: 'There is nothing more admirable than when two people who see eye to eye keep house as man and wife, confounding their enemies and delighting their', correct: 'friends.', wrong: ['gods.', 'foes.', 'kin.'] },
          { start: 'A man who has been through bitter experiences and travelled far enjoys even his sufferings after a', correct: 'time.', wrong: ['while.', 'battle.', 'feast.'] },
          { start: 'Let me not then die ingloriously and without a struggle, but let me first do some great thing that shall be told among men', correct: 'hereafter.', wrong: ['today.', 'now.', 'forever.'] },
          { start: 'Be strong, saith my heart; I am a soldier; I have seen worse sights than', correct: 'this.', wrong: ['death.', 'war.', 'fate.'] },
          { start: 'For a friend with an understanding heart is worth no less than a', correct: 'brother.', wrong: ['king.', 'god.', 'hero.'] },
          { start: 'Sing, O muse, of the rage of Achilles, son of Peleus, that brought countless ills upon the', correct: 'Achaeans.', wrong: ['Trojans.', 'gods.', 'men.'] },
          { start: 'Even a fool learns something once it', correct: 'hits him.', wrong: ['speaks.', 'comes.', 'falls.'] },
          { start: 'Like the generations of leaves, the lives of mortal men. Now the wind scatters the old leaves across the earth, now the living timber bursts with the new buds and spring comes round again. And so with men: as one generation comes to life, another', correct: 'dies away.', wrong: ['lives on.', 'rises up.', 'endures.'] },
          { start: 'Why so much grief for me? No man will hurl me down to Death, against my fate. And fate? No one alive has ever escaped it, neither brave man nor coward, I tell you — it’s born with us the day that we are', correct: 'born.', wrong: ['dead.', 'wise.', 'strong.'] },
          { start: 'Men are so quick to blame the gods: they say that we devise their misery. But they themselves — in their depravity — design grief greater than the griefs that fate', correct: 'assigns.', wrong: ['gives.', 'sends.', 'brings.'] },
          { start: 'The difficulty is not so great to die for a friend as to find a friend worth dying', correct: 'for.', wrong: ['with.', 'against.', 'beside.'] }
        ]
      },
      {
        name: 'Antisthenes',
        emoji: '🐕',
        quotes: [
          { start: 'The most valuable skill we can learn in our lives is to unlearn what is', correct: 'untrue.', wrong: ['unknown.', 'forgotten.', 'hidden.'] },
          { start: 'Virtue . . . is the same for men and for', correct: 'women.', wrong: ['gods.', 'slaves.', 'kings.'] },
          { start: 'The most useful piece of learning for the uses of life is to unlearn what is', correct: 'untrue.', wrong: ['difficult.', 'painful.', 'forgotten.'] },
          { start: 'Virtue is a weapon that cannot be taken', correct: 'away.', wrong: ['lightly.', 'easily.', 'back.'] },
          { start: 'If you intend a boy to live with the gods, teach him philosophy; if you intend him to live with men, teach him', correct: 'rhetoric.', wrong: ['war.', 'wealth.', 'power.'] }
        ]
      },
      {
        name: 'Anacharsis',
        emoji: '🌊',
        quotes: [
          { start: 'There are three sorts of people: those who are alive, those who are dead, and those who are at', correct: 'sea.', wrong: ['war.', 'home.', 'power.'] },
          { start: 'Written laws are like spiders\' webs; they will catch, it is true, the weak and poor, but would be torn in pieces by the rich and', correct: 'powerful.', wrong: ['wise.', 'just.', 'good.'] },
          { start: 'A man\'s felicity consists not in the outward and visible blessing of fortune, but in the inward and unseen perfections and riches of the', correct: 'mind.', wrong: ['body.', 'wealth.', 'gods.'] },
          { start: 'Every man is his own chief', correct: 'enemy.', wrong: ['friend.', 'ally.', 'master.'] },
          { start: 'Wise men argue causes; fools', correct: 'decide them.', wrong: ['ignore them.', 'create them.', 'follow them.'] }
        ]
      },
      {
        name: 'Hesiod',
        emoji: '🌾',
        quotes: [
          { start: 'But he who neither thinks for himself nor learns from others, is a failure as a', correct: 'man.', wrong: ['god.', 'king.', 'hero.'] },
          { start: 'That man is best who sees the truth himself. Good too is he who listens to wise counsel. But who is neither wise himself nor willing to ponder wisdom is not worth a', correct: 'straw.', wrong: ['coin.', 'word.', 'thought.'] },
          { start: 'A man who works evil against another works it really against himself, and bad advice is worst for the one who', correct: 'devised it.', wrong: ['received it.', 'ignored it.', 'followed it.'] },
          { start: 'He\'s only harming himself who\'s bent upon harming', correct: 'another.', wrong: ['himself.', 'the gods.', 'the just.'] },
          { start: 'For a man can win nothing better than a good wife, and nothing more painful than a', correct: 'bad one.', wrong: ['rich one.', 'beautiful one.', 'powerful one.'] },
          { start: 'Do not let any sweet-talking woman beguile your good sense with the fascination of her shape. It\'s your barn she\'s', correct: 'after.', wrong: ['heart.', 'bed.', 'soul.'] },
          { start: 'No gossip ever dies away entirely, if many people voice it: It too is a kind of', correct: 'divinity.', wrong: ['evil.', 'truth.', 'lie.'] },
          { start: 'He is happy whom the Muses love. For though a man has sorrow and grief in his soul, yet when the servant of the Muses sings, at once he forgets his dark thoughts and remembers not his', correct: 'troubles.', wrong: ['sins.', 'fears.', 'labors.'] }
        ]
      },
    ]
  },
  {
    id: 'rome',
    name: 'Ancient Rome',
    emoji: '⚔️',
    color: 0x7f0000,
    colorHex: '#7f0000',
    bg: '#0a0a0a',
    authors: [
      {
        name: 'Gaius Julius Caesar',
        emoji: '⚔️',
        quotes: [
          { start: 'Veni, vidi,', correct: 'vici.', wrong: ['vici.', 'fui.', 'regnavi.'] },
          { start: 'In the end, it is impossible not to become what others believe you', correct: 'are.', wrong: ['were.', 'will be.', 'should be.'] },
          { start: 'Experience is the teacher of all', correct: 'things.', wrong: ['men.', 'gods.', 'wars.'] },
          { start: 'The greatest enemy will hide in the last place you would ever', correct: 'look.', wrong: ['expect.', 'fear.', 'find.'] },
          { start: 'It is easier to find men who will volunteer to die, than to find those who are willing to endure pain with', correct: 'patience.', wrong: ['courage.', 'strength.', 'honor.'] },
          { start: 'I love the name of honor more than I fear', correct: 'death.', wrong: ['life.', 'defeat.', 'betrayal.'] },
          { start: 'Men are nearly always willing to believe what they', correct: 'wish.', wrong: ['fear.', 'know.', 'hear.'] },
          { start: 'No one is so brave that he is not disturbed by something', correct: 'unexpected.', wrong: ['great.', 'small.', 'known.'] },
          { start: 'If you must break the law, do it to seize power: in all other cases', correct: 'observe it.', wrong: ['ignore it.', 'enforce it.', 'change it.'] },
          { start: 'Divide and', correct: 'Conquer.', wrong: ['Rule.', 'Unite.', 'Fight.'] }
        ]
      },
      {
        name: 'Marcus Aurelius',
        emoji: '🛡️',
        quotes: [
          { start: 'You have power over your mind - not outside events. Realize this, and you will find', correct: 'strength.', wrong: ['peace.', 'wealth.', 'fame.'] },
          { start: 'Dwell on the beauty of life. Watch the stars, and see yourself running with', correct: 'them.', wrong: ['fate.', 'time.', 'death.'] },
          { start: 'The happiness of your life depends upon the quality of your', correct: 'thoughts.', wrong: ['actions.', 'wealth.', 'fame.'] },
          { start: 'Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the', correct: 'truth.', wrong: ['whole.', 'end.', 'goal.'] },
          { start: 'Waste no more time arguing about what a good man should be.', correct: 'Be one.', wrong: ['wise.', 'rich.', 'strong.'] },
          { start: 'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any', correct: 'moment.', wrong: ['cost.', 'price.', 'time.'] },
          { start: 'When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to', correct: 'love ...', wrong: ['win.', 'rule.', 'fight.'] },
          { start: 'The best revenge is to be unlike him who performed the', correct: 'injury.', wrong: ['deed.', 'act.', 'wrong.'] },
          { start: 'The soul becomes dyed with the colour of its', correct: 'thoughts.', wrong: ['fears.', 'desires.', 'actions.'] },
          { start: 'It is not death that a man should fear, but he should fear never beginning to', correct: 'live.', wrong: ['rule.', 'fight.', 'win.'] }
        ]
      },
      {
        name: 'Tacitus',
        emoji: '📜',
        quotes: [
          { start: 'The more corrupt the state, the more numerous the', correct: 'laws.', wrong: ['rulers.', 'wars.', 'crimes.'] },
          { start: 'Men are more ready to repay an injury than a benefit, because gratitude is a burden and revenge a', correct: 'pleasure.', wrong: ['duty.', 'need.', 'right.'] },
          { start: 'If you would know who controls you see who you may not', correct: 'criticise.', wrong: ['praise.', 'trust.', 'serve.'] },
          { start: 'They have plundered the world, stripping naked the land in their hunger… they are driven by greed, if their enemy be rich; by ambition, if poor… They ravage, they slaughter, they seize by false pretenses, and all of this they hail as the construction of empire. And when in their wake nothing remains but a desert, they call that', correct: 'peace.', wrong: ['victory.', 'glory.', 'justice.'] },
          { start: 'Viewed from a distance, everything is', correct: 'beautiful.', wrong: ['clear.', 'simple.', 'true.'] },
          { start: 'To show resentment at a reproach is to acknowledge that one may have deserved', correct: 'it.', wrong: ['praise.', 'honor.', 'reward.'] },
          { start: 'The desire for safety stands against every great and noble', correct: 'enterprise.', wrong: ['deed.', 'act.', 'victory.'] },
          { start: 'They make a desolation and call it', correct: 'peace.', wrong: ['victory.', 'empire.', 'justice.'] }
        ]
      },
      {
        name: 'Horace',
        emoji: '📖',
        quotes: [
          { start: 'Pulvis et umbra sumus.', correct: '(We are but dust and shadow.)', wrong: ['(We are eternal.)', '(We are gods.)', '(We conquer all.)'] },
          { start: 'Carpe diem.', correct: '(Seize the day.)', wrong: ['(Wait for tomorrow.)', '(Live forever.)', '(Fear nothing.)'] },
          { start: 'Begin, be bold, and venture to be', correct: 'wise.', wrong: ['rich.', 'strong.', 'famous.'] },
          { start: 'Caelum non animum mutant qui trans mare currunt.', correct: '(They change their sky, not their soul, who rush across the sea.)', wrong: ['(They find new life.)', '(They escape fate.)', '(They become gods.)'] },
          { start: 'Rule your mind or it will rule', correct: 'you.', wrong: ['the world.', 'fate.', 'others.'] },
          { start: 'Happy the man, and happy he alone, he who can call today his own: he who, secure within, can say, Tomorrow do thy worst, for I have lived', correct: 'today.', wrong: ['forever.', 'wisely.', 'bravely.'] },
          { start: 'Pactum serva" - "Keep the', correct: 'faith.', wrong: ['peace.', 'silence.', 'secret.'] },
          { start: 'Live as brave men; and if fortune is adverse, front its blows with brave', correct: 'hearts.', wrong: ['minds.', 'words.', 'deeds.'] },
          { start: 'Dimidium facti qui coepit habet: sapere aude" ("He who has begun is half done: dare to', correct: 'know!").', wrong: ['act!', 'win!', 'live!'] },
          { start: 'he who is greedy is always in', correct: 'want.', wrong: ['power.', 'control.', 'wealth.'] }
        ]
      },
      {
        name: 'Juvenal',
        emoji: '📜',
        quotes: [
          { start: 'Quis custodiet ipsos custodes?', correct: '(Who will watch the watchers?)', wrong: ['(Who guards the guards?)', '(Who judges the judges?)', '(Who rules the rulers?)'] },
          { start: 'Never does Nature say one thing and Wisdom', correct: 'another.', wrong: ['the same.', 'lie.', 'contradict.'] },
          { start: 'Many commit the same crime with a very different result. One bears a cross for his crime; another a', correct: 'crown.', wrong: ['sword.', 'throne.', 'grave.'] },
          { start: 'The people that once bestowed commands, consulships, legions, and all else, now concerns itself no more, and longs eagerly for just two things: bread and', correct: 'circuses!', wrong: ['gold.', 'power.', 'wars.'] },
          { start: 'No man becomes bad all at', correct: 'once.', wrong: ['forever.', 'night.', 'day.'] },
          { start: 'All wish to possess knowledge, but few, comparatively speaking, are willing to pay the', correct: 'price.', wrong: ['debt.', 'toll.', 'fine.'] },
          { start: 'Sit mens sana in corpore sano', correct: '(a healthy mind in a healthy body)', wrong: ['(a strong body in a strong mind)', '(a wise soul in a wise heart)', '(a pure spirit in a pure form)'] },
          { start: 'Many suffer from the incurable disease of writing, and it becomes chronic in their sick', correct: 'minds.', wrong: ['hearts.', 'souls.', 'bodies.'] }
        ]
      },
      {
        name: 'Marcus Tullius Cicero',
        emoji: '📜',
        quotes: [
          { start: 'A room without books is like a body without a', correct: 'soul.', wrong: ['mind.', 'heart.', 'brain.'] },
          { start: 'If you have a garden and a library, you have everything you', correct: 'need.', wrong: ['want.', 'desire.', 'seek.'] },
          { start: 'To be ignorant of what occurred before you were born is to remain always a', correct: 'child.', wrong: ['fool.', 'youth.', 'student.'] },
          { start: 'In times of war, the law falls silent. Silent enim leges inter', correct: 'arma', wrong: ['pacem.', 'populum.', 'senatum.'] },
          { start: 'Read at every wait; read at all hours; read within leisure; read in times of labor; read as one goes in; read as one goest out. The task of the educated mind is simply put: read to', correct: 'lead.', wrong: ['learn.', 'grow.', 'know.'] },
          { start: 'Non nobis solum nati sumus. (Not for ourselves alone are we', correct: 'born.)', wrong: ['made.', 'created.', 'destined.'] },
          { start: 'If we are not ashamed to think it, we should not be ashamed to', correct: 'say it.', wrong: ['write it.', 'do it.', 'hide it.'] },
          { start: 'Gratitude is not only the greatest of virtues, but the parent of all', correct: 'others.', wrong: ['evils.', 'sins.', 'vices.'] },
          { start: 'Friendship improves happiness, and abates misery, by doubling our joys, and dividing our', correct: 'grief.', wrong: ['pain.', 'sorrow.', 'loss.'] }
        ]
      },
      {
        name: 'Augustus',
        emoji: '🏛️',
        quotes: [
          { start: 'I found Rome built of bricks; I leave her clothed in', correct: 'marble.', wrong: ['gold.', 'stone.', 'glory.'] },
          { start: 'Have I have played my part well in the comedy of life? If so, clap your hands and dismiss me from the stage with', correct: 'applause.', wrong: ['tears.', 'silence.', 'honor.'] },
          { start: 'Festina Lente!!! (Make Haste,', correct: 'Slowly!!', wrong: ['Quickly!!', 'Boldly!!', 'Wisely!!'] },
          { start: 'If I have played my part well, clap your hands, and dismiss me with applause from the', correct: 'stage.', wrong: ['world.', 'throne.', 'empire.'] },
          { start: 'At the age of nineteen, on my own initiative and at my own expense, I raised an army by means of which I restored liberty to the republic, which had been oppressed by the tyranny of a', correct: 'faction.', wrong: ['king.', 'senate.', 'people.'] }
        ]
      },
      {
        name: 'Seneca',
        emoji: '📜',
        quotes: [
          { start: 'We suffer more often in imagination than in', correct: 'reality.', wrong: ['dreams.', 'truth.', 'silence.'] },
          { start: 'It is not that we have a short time to live, but that we waste a lot of', correct: 'it.', wrong: ['life.', 'time.', 'opportunity.'] },
          { start: 'Luck is what happens when preparation meets', correct: 'opportunity.', wrong: ['fate.', 'chance.', 'hard work.'] },
          { start: 'All cruelty springs from', correct: 'weakness.', wrong: ['strength.', 'power.', 'anger.'] },
          { start: 'Difficulties strengthen the mind, as labor does the', correct: 'body.', wrong: ['soul.', 'heart.', 'spirit.'] },
          { start: 'It is not the man who has too little, but the man who craves more, that is', correct: 'poor.', wrong: ['rich.', 'happy.', 'wise.'] },
          { start: 'Sometimes even to live is an act of', correct: 'courage.', wrong: ['madness.', 'foolishness.', 'weakness.'] },
          { start: 'True happiness is to enjoy the present, without anxious dependence upon the', correct: 'future.', wrong: ['past.', 'wealth.', 'fame.'] },
          { start: 'Wherever there is a human being, there is an opportunity for a', correct: 'kindness.', wrong: ['profit.', 'gain.', 'victory.'] },
          { start: 'He suffers more than necessary, who suffers before it is', correct: 'necessary.', wrong: ['possible.', 'real.', 'true.'] },
          { start: 'Begin at once to live, and count each separate day as a separate', correct: 'life.', wrong: ['chance.', 'gift.', 'moment.'] },
          { start: 'Throw me to the wolves and I will return leading the', correct: 'pack.', wrong: ['way.', 'charge.', 'fight.'] },
          { start: 'As is a tale, so is life: not how long it is, but how good it is, is what', correct: 'matters.', wrong: ['counts.', 'lasts.', 'ends.'] },
          { start: 'They lose the day in expectation of the night, and the night in fear of the', correct: 'dawn.', wrong: ['day.', 'future.', 'past.'] },
          { start: 'Every night before going to sleep, we must ask ourselves: what weakness did I overcome', correct: 'today?', wrong: ['yesterday?', 'tomorrow?', 'now?'] },
          { start: 'The greatest blessings of mankind are within us and within our', correct: 'reach.', wrong: ['grasp.', 'power.', 'control.'] },
          { start: 'A gem cannot be polished without friction, nor a man perfected without', correct: 'trials.', wrong: ['pain.', 'suffering.', 'effort.'] },
          { start: 'It does not matter what you bear, but how you bear', correct: 'it.', wrong: ['suffering.', 'hardship.', 'adversity.'] }
        ]
      },
      {
        name: 'Livy',
        emoji: '📜',
        quotes: [
          { start: 'The study of history is the best medicine for a sick mind; for in history you have a record of the infinite variety of human experience, plainly set out for all to see; and in that record you can find for yourself and your country both', correct: 'examples and warnings.', wrong: ['teaches us nothing.', 'repeats itself exactly.', 'the present matters.'] },
          { start: 'We can endure neither our vices nor their', correct: 'cures.', wrong: ['voices.', 'diseases.', 'vices.'] },
          { start: 'Men are only too apt to forget their own faults when they are busy exposing', correct: 'those of others.', wrong: ['quick to admit their mistakes.', 'on self-improvement.', 'their faults.'] },
          { start: 'The greatest remedy for anger is', correct: 'delay.', wrong: ['anger.', 'action.', 'revenge.'] },
          { start: 'A city is well-fortified which has a wall of men instead of', correct: 'brick.', wrong: ['walls.', 'fortifications.', 'weapons.'] },
          { start: 'It is better to be feared than loved, if you cannot be', correct: 'both.', wrong: ['conquers.', 'a man.', 'kind.'] },
          { start: 'History is the witness that testifies to the passing of time; it illumines reality, vitalizes memory, provides guidance in daily life, and brings us tidings of', correct: 'antiquity.', wrong: ['history.', 'the past.', 'be forgotten.'] },
          { start: 'The worst kind of shame is being ashamed of', correct: 'honesty', wrong: ['speaking the truth.', 'showing integrity.', 'doing what is right.'] }
        ]
      },
      {
        name: 'Ovid',
        emoji: '🏛️',
        quotes: [
          { start: 'Let others praise ancient times; I am glad I was born in', correct: 'these.', wrong: ['those.', 'future.', 'past.'] },
          { start: 'Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a', correct: 'fish.', wrong: ['catch.', 'prize.', 'reward.'] },
          { start: 'Dripping water hollows out stone, not through force but through', correct: 'persistence.', wrong: ['strength.', 'power.', 'speed.'] },
          { start: 'Be patient and tough; someday this pain will be useful to', correct: 'you.', wrong: ['me.', 'them.', 'all.'] },
          { start: 'If you want to be loved, be', correct: 'lovable.', wrong: ['rich.', 'strong.', 'wise.'] },
          { start: 'Courage conquers all things: it even gives strength to the', correct: 'body.', wrong: ['mind.', 'soul.', 'heart.'] },
          { start: 'Everything changes, nothing', correct: 'perishes.', wrong: ['lasts.', 'dies.', 'ends.'] },
          { start: 'Happy is the man who has broken the chains which hurt the mind, and has given up worrying once and for', correct: 'all.', wrong: ['now.', 'ever.', 'more.'] }
        ]
      },
      {
        name: 'Pliny the Younger',
        emoji: '📜',
        quotes: [
          { start: 'The true sign of intelligence is not knowledge but', correct: 'imagination.', wrong: ['memory.', 'wealth.', 'power.'] },
          { start: 'There is nothing to write about, you say. Well then, write and let me know just this – that there is nothing to write about; or tell me in the good old style if you are well. That\'s right. I am quite content.', correct: '', wrong: ['I am unhappy.', 'Everything is exciting.', 'Life is boring.'] },
          { start: 'An object in possession seldom retains the same charm that it had in', correct: 'pursuit.', wrong: ['it.', 'time.', 'before it becomes worthless.'] },
          { start: 'The happier a man is, the more he fears the approach of', correct: 'misfortune.', wrong: ['the less he worries.', 'the more he celebrates.', 'the stronger he becomes.'] },
          { start: 'It is wonderful how the mind is stirred and quickened into activity by brisk bodily', correct: 'exercise.', wrong: ['rest.', 'sleep.', 'idleness.'] }
        ]
      },
      {
        name: 'Suetonius',
        emoji: '📜',
        quotes: [
          { start: 'He so improved the city that he justly boasted that he found it brick and left it', correct: 'marble.', wrong: ['gold.', 'stone.', 'glory.'] },
          { start: 'As the Jews were making constant disturbances at the instigation of Chrestus, he expelled them from', correct: 'Rome.', wrong: ['welcomed them.', 'ignored them.', 'rewarded them.'] },
          { start: 'He used to say that the lot of emperors was most unhappy, since when they discovered a conspiracy, no one believed them unless', correct: 'they had been killed.', wrong: ['everyone believed them.', 'they were always safe.', 'they had no worries.'] },
          { start: 'He gave orders that no one was to approach him unless he was alone and without his', correct: 'guards.', wrong: ['people.', 'friends in public.', 'friends.'] },
          { start: 'Beware the Ides of', correct: 'March.', wrong: ['April.', 'June.', 'July.'] }
        ]
      },
      {
        name: 'Sallust',
        emoji: '📜',
        quotes: [
          { start: 'All our power lies in the mind and in the', correct: 'body.', wrong: ['wealth.', 'fame.', 'gods.'] },
          { start: 'The renown which riches or beauty confer is fleeting and frail; mental excellence is a splendid and', correct: 'lasting possession.', wrong: ['easily lost.', 'worthless.', 'temporary.'] },
          { start: 'Ambition drove many men to become false; to have one thought locked in the breast,', correct: 'another ready on the tongue.', wrong: ['honest.', 'loyal.', 'brave.'] },
          { start: 'The man who is most in the right is he who can endure the', correct: 'most wrongs.', wrong: ['least.', 'fewest.', 'none.'] },
          { start: 'Few men desire liberty; most men wish only for a', correct: 'just master.', wrong: ['tyrant.', 'king.', 'emperor.'] }
        ]
      },
    ]
  },
  {
    id: 'egypt',
    name: 'Ancient Egypt',
    emoji: '𓂀',
    color: 0xf9a825,
    colorHex: '#f9a825',
    bg: '#0a0a0a',
    authors: [
      {
        name: 'Ptahhotep',
        emoji: '📜',
        quotes: [
          { start: 'Be a craftsman in speech that thou mayest be strong, for the strength of one is the tongue, and speech is mightier than all', correct: 'fighting.', wrong: ['silence.', 'wealth.', 'power.'] },
          { start: 'Do not be arrogant because of your knowledge, and have no confidence in that you are a learned man. Take counsel with the ignorant as', correct: 'with the wise.', wrong: ['only the wise.', 'only the powerful.', 'only the rich.'] },
          { start: 'If you are a leader commanding the affairs of the multitude, seek out for yourself every beneficial deed, until it may be that your own affairs', correct: 'are without wrong.', wrong: ['until you are rich.', 'until you are feared.', 'until you are praised.'] },
          { start: 'The wise man is known by his wisdom, the great man by', correct: 'his good actions.', wrong: ['his wealth.', 'his power.', 'his words.'] },
          { start: 'Do not be angry with him who is greater than you. If he wrongs you,', correct: 'he will not listen to your complaint.', wrong: ['he will reward you.', 'he will fear you.', 'he will apologize.'] },
          { start: 'Silence is more profitable than', correct: 'abundance of speech.', wrong: ['more dangerous.', 'more powerful.', 'more useless.'] },
          { start: 'He who listens is beloved of God; he who does not listen is hated by', correct: 'God.', wrong: ['he who speaks.', 'he who fights.', 'he who rules.'] },
          { start: 'Do not make yourself the leader of a multitude when you do not even know how to', correct: 'lead yourself.', wrong: ['your family.', 'your city.', 'your empire.'] }
        ]
      },
      {
        name: 'Imhotep',
        emoji: '🛠️',
        quotes: [
          { start: 'Eat, drink, and be merry, for tomorrow we', correct: 'die.', wrong: ['live.', 'forget.', 'suffer.'] },
          { start: 'The wise man knows that he knows', correct: 'nothing.', wrong: ['everything.', 'much.', 'little.'] },
          { start: 'Silence is better than speech when speech is', correct: 'foolish.', wrong: ['wise.', 'necessary.', 'kind.'] },
          { start: 'A good name is better than great', correct: 'riches.', wrong: ['power.', 'fame.', 'honor.'] },
          { start: 'The heart of the wise is in his', correct: 'head.', wrong: ['hands.', 'mouth.', 'stomach.'] },
          { start: 'Do not speak against anyone behind his', correct: 'back.', wrong: ['face.', 'name.', 'presence.'] },
          { start: 'Knowledge is the path to', correct: 'immortality.', wrong: ['wealth.', 'power.', 'pleasure.'] },
          { start: 'He who learns to control himself learns to control the', correct: 'world.', wrong: ['gods.', 'fate.', 'others.'] }
        ]
      },
      {
        name: 'Ramesses II',
        emoji: '🏛️',
        quotes: [
          { start: 'I am Ramesses, called the Great, pharaoh of', correct: 'Egypt.', wrong: ['Rome.', 'Nubia.', 'Africa.'] },
          { start: 'My name is Ozymandias, king of kings; Look on my works, ye', correct: 'Mighty!', wrong: ['Powerful.', 'Strong.', 'Glorious.'] },
          { start: 'I have subdued the lands; I have extended the borders of', correct: 'Egypt.', wrong: ['Nubia.', 'Asia.', 'the world.'] },
          { start: 'Abu Simbel and the temples I built shall be remembered for', correct: 'eternity.', wrong: ['centuries.', 'ages.', 'time.'] },
          { start: 'Nubians and Hittites alike tremble at the name of', correct: 'Ramesses.', wrong: ['Pharaoh.', 'Egypt.', 'the King.'] }
        ]
      },
      {
        name: 'Amenemope',
        emoji: '📜',
        quotes: [
          { start: 'Better is a handful of quietness than two hands full of toil and a striving after', correct: 'wind.', wrong: ['wealth.', 'power.', 'fame.'] },
          { start: 'Do not move the markers on the borders of', correct: 'fields.', wrong: ['the poor.', 'the king.', 'your neighbor.'] },
          { start: 'The silent man is a find of', correct: 'gold.', wrong: ['a fool.', 'a loudmouth.', 'a coward.'] },
          { start: 'Do not associate with the', correct: 'hot-tempered man.', wrong: ['the wise man.', 'the rich man.', 'the powerful man.'] },
          { start: 'Better is poverty in the hand of the god than riches', correct: 'in a storehouse.', wrong: ['in the hand of man.', 'in the treasury.', 'in the palace.'] }
        ]
      },
      {
        name: 'Ani',
        emoji: '📜',
        quotes: [
          { start: 'Do not indulge in drinking beer, for it will lead you to', correct: 'folly.', wrong: ['wisdom.', 'strength.', 'honor.'] },
          { start: 'A woman who is respected is a woman who is', correct: 'silent.', wrong: ['loud.', 'angry.', 'demanding.'] },
          { start: 'Do not be arrogant because you are', correct: 'learned.', wrong: ['rich.', 'powerful.', 'famous.'] },
          { start: 'The house of the silent man is', correct: 'well-ordered.', wrong: ['the loud man.', 'the angry man.', 'the greedy man.'] },
          { start: 'Do not speak evil of anyone, whether great or', correct: 'small.', wrong: ['only the small.', 'only the great.', 'only your enemies.'] }
        ]
      },
      {
        name: 'Merikare',
        emoji: '📜',
        quotes: [
          { start: 'Be a craftsman in speech, for the tongue is a sword to', correct: 'a king.', wrong: ['a weapon of war.', 'a tool of peace.', 'a sign of weakness.'] },
          { start: 'Do justice, that you may live long upon the', correct: 'earth.', wrong: ['gain wealth.', 'win battles.', 'be feared.'] },
          { start: 'The king who is a ruler of truth is a king who is', correct: 'eternal.', wrong: ['powerful.', 'rich.', 'feared.'] },
          { start: 'Do not oppress the widow and', correct: 'the orphan.', wrong: ['the rich.', 'the powerful.', 'the priests.'] },
          { start: 'The throne is established by', correct: 'justice.', wrong: ['fear.', 'wealth.', 'war.'] }
        ]
      },
    ]
  },
  {
    id: 'byzantine',
    name: 'Byzantine Empire',
    emoji: '✝️',
    color: 0x6a1b9a,
    colorHex: '#6a1b9a',
    bg: '#0a0a0a',
    authors: [
      {
        name: 'Procopius',
        emoji: '📜',
        quotes: [
          { start: 'The emperor and his wife were a pair of bloodthirsty', correct: 'demons.', wrong: ['saints.', 'heroes.', 'lovers.'] },
          { start: 'Justice was never done in the courts except when it was', correct: 'bought.', wrong: ['always done.', 'never needed.', 'freely given.'] },
          { start: 'The people of Byzantium were divided into two factions, the Blues and the Greens, and their hatred for each other was greater than their hatred for', correct: 'the Persians.', wrong: ['the emperor.', 'the church.', 'the poor.'] },
          { start: 'Power tends to corrupt, and absolute power', correct: 'corrupts absolutely.', wrong: ['is always good.', 'is never abused.', 'is divine.'] },
          { start: 'The secret history reveals what the official history', correct: 'conceals.', wrong: ['celebrates.', 'praises.', 'ignores.'] },
          { start: 'Theodora was a woman of great beauty and greater', correct: 'ambition.', wrong: ['virtue.', 'piety.', 'humility.'] }
        ]
      },
      {
        name: 'Michael Psellos',
        emoji: '📜',
        quotes: [
          { start: 'The history of the emperors is a history of human weakness and divine', correct: 'judgment.', wrong: ['mercy.', 'favor.', 'power.'] },
          { start: 'Ambition is the mother of all', correct: 'vices.', wrong: ['virtues.', 'success.', 'wisdom.'] },
          { start: 'A ruler who cannot control himself cannot control an', correct: 'empire.', wrong: ['army.', 'people.', 'church.'] },
          { start: 'The tongue is a little member, but it can set the whole world on', correct: 'fire.', wrong: ['peace.', 'silence.', 'love.'] },
          { start: 'Fortune is a fickle goddess who raises men up only to cast them', correct: 'down.', wrong: ['higher.', 'aside.', 'away.'] },
          { start: 'True wisdom lies not in knowledge alone, but in the application of knowledge with', correct: 'virtue.', wrong: ['power.', 'wealth.', 'fame.'] }
        ]
      },
      {
        name: 'Anna Komnene',
        emoji: '📜',
        quotes: [
          { start: 'My father was a man of great courage and even greater', correct: 'wisdom.', wrong: ['ambition.', 'cruelty.', 'weakness.'] },
          { start: 'Women are not suited to rule, yet necessity sometimes forces them to', correct: 'lead.', wrong: ['obey.', 'follow.', 'submit.'] },
          { start: 'The history of emperors is written in blood and', correct: 'tears.', wrong: ['gold.', 'glory.', 'silence.'] },
          { start: 'A ruler must be both lion and', correct: 'fox.', wrong: ['sheep and dove.', 'eagle and serpent.', 'wolf and bear.'] },
          { start: 'The greatest danger to an empire is not the enemy without, but the traitor', correct: 'within.', wrong: ['above.', 'below.', 'beside.'] }
        ]
      },
      {
        name: 'Justinian I',
        emoji: '🏛️',
        quotes: [
          { start: 'Justice is the constant and perpetual will to render to every man his', correct: 'due.', wrong: ['share.', 'portion.', 'reward.'] },
          { start: 'Theodora said: "Purple is the noblest', correct: 'shroud."', wrong: ['color.', 'robe.', 'garment.'] },
          { start: 'A ruler must be both feared and', correct: 'loved.', wrong: ['hated.', 'ignored.', 'worshipped.'] },
          { start: 'The law is the king of all mortal and immortal', correct: 'beings.', wrong: ['things.', 'gods.', 'men.'] }
        ]
      },
      {
        name: 'John Chrysostom',
        emoji: '📜',
        quotes: [
          { start: 'The rich man is not he who has much, but he who gives', correct: 'much.', wrong: ['little.', 'nothing.', 'all.'] },
          { start: 'Hell is paved with the skulls of', correct: 'bishops.', wrong: ['priests.', 'kings.', 'saints.'] },
          { start: 'The love of money is the root of all', correct: 'evil.', wrong: ['good.', 'power.', 'wisdom.'] },
          { start: 'To commit a sin is to wound your own', correct: 'soul.', wrong: ['body.', 'mind.', 'reputation.'] }
        ]
      },
      {
        name: 'Leo VI the Wise',
        emoji: '📜',
        quotes: [
          { start: 'It is not any of those things sought after and esteemed by men that brings such joy to Our Majesty as does the peace and prosperity of our', correct: 'subjects.', wrong: ['enemies.', 'treasury.', 'army.'] },
          { start: 'The voice of a general is better than the sound of the', correct: 'trumpet.', wrong: ['sword.', 'drum.', 'horn.'] },
          { start: 'Share on all occasions the work and fatigue of war with those you', correct: 'command.', wrong: ['defeat.', 'rule.', 'fear.'] },
          { start: 'Your morals must be a model for', correct: 'others.', wrong: ['yourself.', 'the enemy.', 'the court.'] },
          { start: 'Without divine assistance nothing will', correct: 'succeed.', wrong: ['fail.', 'matter.', 'endure.'] },
          { start: 'Justice is the constant and perpetual will to render to every man his', correct: 'due.', wrong: ['share.', 'portion.', 'reward.'] },
          { start: 'A ruler must govern with no other goal than the honor of', correct: 'them.', wrong: ['himself.', 'God alone.', 'the army.'] },
          { start: 'The multitude of my unmeasured trespasses, rightly and justly I am', correct: 'suffering.', wrong: ['rejoicing.', 'ruling.', 'victorious.'] }
        ]
      },
      {
        name: 'Photios I',
        emoji: '📜',
        quotes: [
          { start: 'Nothing is dearer than the', correct: 'Truth.', wrong: ['Power.', 'Wealth.', 'Glory.'] },
          { start: 'Love virtue more than life. For life passes, but virtue remains with you for', correct: 'eternity.', wrong: ['a moment.', 'fame.', 'riches.'] },
          { start: 'Hate sin, but not the sinner. Sin is darkness, but man is the image of', correct: 'God.', wrong: ['the devil.', 'dust.', 'nothing.'] },
          { start: 'Seek wisdom, not worldly glory. Worldly glory is vanity, but wisdom is a gift from God that cannot be taken', correct: 'away.', wrong: ['lightly.', 'back.', 'seriously.'] },
          { start: 'Speak little, but with meaning. Empty words wound, but words full of grace', correct: 'build up.', wrong: ['destroy.', 'entertain.', 'confuse.'] },
          { start: 'Be temperate in all things. Temperance guards the soul, brings peace to the mind, and sheds light in', correct: 'decisions.', wrong: ['battles.', 'debates.', 'prayers.'] },
          { start: 'The peace and happiness of the subjects lie in the agreement and harmony of kingship and', correct: 'priesthood.', wrong: ['war.', 'wealth.', 'power.'] },
          { start: 'A small deviation in matters of Faith represents a deadly', correct: 'sin.', wrong: ['virtue.', 'mistake.', 'choice.'] }
        ]
      },
      {
        name: 'Symeon Metaphrastes',
        emoji: '🙏',
        quotes: [
          { start: 'Burn, O Good Lord, the thorns of my transgressions, cleanse my soul, and purify all my', correct: 'thoughts.', wrong: ['sins.', 'body.', 'heart.'] },
          { start: 'Ever shelter, guard, and keep me in your', correct: 'love.', wrong: ['grace.', 'mercy.', 'power.'] },
          { start: 'Chasten me, purify me, control all my', correct: 'passions.', wrong: ['thoughts.', 'desires.', 'words.'] },
          { start: 'Adorn me, teach me, and enlighten me', correct: 'always.', wrong: ['sometimes.', 'forever.', 'now.'] },
          { start: 'Show me how to be a tabernacle of your Holy', correct: 'Spirit.', wrong: ['Church.', 'Temple.', 'Body.'] },
          { start: 'Only spiritual conversation is beneficial; it is better to preserve', correct: 'stillness.', wrong: ['silence.', 'speech.', 'activity.'] },
          { start: 'The love of money is the root of all', correct: 'evil.', wrong: ['good.', 'power.', 'wisdom.'] },
          { start: 'Hate sin, but love the', correct: 'sinner.', wrong: ['saint.', 'righteous.', 'poor.'] }
        ]
      },

    ]
  },
  {
    id: 'achaemenid',
    name: 'Achaemenid Persian Empire',
    emoji: '🏺',
    color: 0x8b0000,
    colorHex: '#8b0000',
    bg: '#0a0a0a',
    authors: [
      {
        name: 'Cyrus the Great',
        emoji: '👑',
        quotes: [
          { start: 'I am Cyrus, king of the world, great king, legitimate king, king of Babylon, king of Sumer and Akkad, king of the four rims of the', correct: 'earth.', wrong: ['heavens.', 'Persia.', 'Greece.'] },
          { start: 'Whenever you can, act as a', correct: 'liberator.', wrong: ['conqueror.', 'tyrant.', 'ruler.'] },
          { start: 'Freedom, dignity, wealth — these three together constitute the greatest happiness of', correct: 'humanity.', wrong: ['kings.', 'gods.', 'soldiers.'] },
          { start: 'Success should always call for showing greater kindness, generosity, and justice — though most people treat it as an occasion for greater', correct: 'greed.', wrong: ['pride.', 'power.', 'wealth.'] },
          { start: 'Better to live in a rugged land and rule than to cultivate rich plains and be a', correct: 'slave.', wrong: ['king.', 'farmer.', 'warrior.'] },
          { start: 'I did not allow anyone to terrorize the land. I restored peace to all', correct: 'countries.', wrong: ['cities.', 'temples.', 'armies.'] },
          { start: 'All men have their frailties; and whoever looks for a friend without imperfections will never find what he', correct: 'seeks.', wrong: ['deserves.', 'wants.', 'needs.'] },
          { start: 'Even if the skies were shorter than my knees, I would not', correct: 'kneel.', wrong: ['rise.', 'bow.', 'yield.'] },
          { start: 'A man\'s enjoyment of all good things is in exact proportion to the pains he has undergone to gain', correct: 'them.', wrong: ['wealth.', 'power.', 'fame.'] },
          { start: 'O man, whoever you are and wherever you come from, for I know you will come — I am Cyrus who won the Persians their empire. Do not therefore begrudge me this bit of earth that covers my', correct: 'bones.', wrong: ['tomb.', 'statue.', 'legacy.'] },
          { start: 'Soft countries breed soft men. It is not possible for the same land to bear both wonderful fruits and men who are good at', correct: 'war.', wrong: ['peace.', 'trade.', 'rule.'] }
        ]
      },
      {
        name: 'Darius I the Great',
        emoji: '👑',
        quotes: [
          { start: 'I am Darius, the great king, king of kings, king in Persia, king of', correct: 'countries.', wrong: ['Greece.', 'Egypt.', 'Rome.'] },
          { start: 'By the grace of Ahura Mazda I became king; Ahura Mazda bestowed the kingdom upon', correct: 'me.', wrong: ['my father.', 'the people.', 'my enemies.'] },
          { start: 'The countries which are subject unto me — by the grace of Ahura Mazda I became king of', correct: 'them.', wrong: ['one.', 'none.', 'all the earth.'] },
          { start: 'Punish the liar and the rebel severely, that justice may prevail in the', correct: 'land.', wrong: ['empire.', 'army.', 'court.'] },
          { start: 'What is right, that is what I love. What is not right, that I', correct: 'hate.', wrong: ['ignore.', 'tolerate.', 'praise.'] },
          { start: 'You who shall be king hereafter, protect this inscription and these sculptures. Do not', correct: 'destroy them.', wrong: ['ignore them.', 'expand them.', 'copy them.'] },
          { start: 'From antiquity our family have been kings. From antiquity we have been', correct: 'noble.', wrong: ['powerful.', 'rich.', 'feared.'] },
          { start: 'I rewarded well the man who was loyal; him who was evil, him I punished', correct: 'well.', wrong: ['lightly.', 'harshly.', 'quickly.'] },
        ]
      },
      {
        name: 'Xerxes I',
        emoji: '👑',
        quotes: [
          { start: 'I am Xerxes, great king, king of kings, king of countries containing all kinds of', correct: 'men.', wrong: ['gods.', 'Persians.', 'Greeks.'] },
          { start: 'Only by great risks can great', correct: 'results be achieved.', wrong: ['riches.', 'peace.', 'safety.'] },
          { start: 'We should so extend the boundaries of the Persian territory that the sea will be its boundary on every', correct: 'side.', wrong: ['mountain.', 'river.', 'city.'] },
          { start: 'I am moved to pity when I think of the brevity of human life, seeing that of all this host of men not one will be alive in a hundred', correct: 'years.', wrong: ['days.', 'battles.', 'generations.'] },
          { start: 'The best man is he who lays his plans warily, with an eye for every disaster which might occur, but when the time comes, acts', correct: 'boldly.', wrong: ['cautiously.', 'slowly.', 'rashly.'] },
          { start: 'Great successes are not won save by great', correct: 'risks.', wrong: ['luck.', 'planning.', 'wealth.'] }
        ]
      },
      {
        name: 'Artaxerxes I',
        emoji: '👑',
        quotes: [
          { start: 'A king should be like the sun — shining equally upon all his', correct: 'subjects.', wrong: ['enemies.', 'friends.', 'nobles.'] },
          { start: 'Generosity is the mark of a true', correct: 'king.', wrong: ['warrior.', 'priest.', 'merchant.'] },
          { start: 'Justice delayed is justice', correct: 'denied.', wrong: ['served.', 'forgotten.', 'ignored.'] }
        ]
      },
      {
        name: 'Khosrow I Anushirvan',
        emoji: '👑',
        quotes: [
          { start: 'A king without justice is no better than a', correct: 'bandit.', wrong: ['god.', 'hero.', 'priest.'] },
          { start: 'The worst ruler is he who rules by fear rather than by', correct: 'justice.', wrong: ['love.', 'wisdom.', 'strength.'] },
          { start: 'Knowledge without action is like a bow without a', correct: 'string.', wrong: ['arrow.', 'target.', 'archer.'] },
          { start: 'The throne is established by', correct: 'justice.', wrong: ['fear.', 'wealth.', 'war.'] },
          { start: 'A ruler must first rule himself before he can rule', correct: 'others.', wrong: ['the empire.', 'the army.', 'the court.'] }
        ]
      },
    ]
  },
  {
    id: 'china',
    name: 'Ancient China',
    emoji: '🏯',
    color: 0x8b4513,
    colorHex: '#8b4513',
    bg: '#0a0a0a',
    authors: [
      {
        name: 'Confucius',
        emoji: '🧠',
        quotes: [
          { start: 'It does not matter how slowly you go as long as you do not', correct: 'stop.', wrong: ['fall.', 'rush.', 'complain.'] },
          { start: 'The man who moves a mountain begins by carrying away small', correct: 'stones.', wrong: ['boulders.', 'rocks.', 'hills.'] },
          { start: 'Respect yourself and others will respect', correct: 'you.', wrong: ['your power.', 'your wealth.', 'your words.'] },
          { start: 'Real knowledge is to know the extent of one\'s', correct: 'ignorance.', wrong: ['wisdom.', 'power.', 'wealth.'] },
          { start: 'Silence is a true friend who never', correct: 'betrays.', wrong: ['lies.', 'flatters.', 'argues.'] },
          { start: 'The superior man is modest in his speech, but exceeds in his', correct: 'actions.', wrong: ['promises.', 'wealth.', 'appearance.'] },
          { start: 'When you see a good man, try to imitate him. When you see a bad man, examine your own', correct: 'heart.', wrong: ['actions.', 'words.', 'wealth.'] },
          { start: 'To put the world in order, we must first put the nation in order. To put the nation in order, we must first put the family in order... We must first set our', correct: 'hearts right.', wrong: ['minds right.', 'bodies right.', 'kingdom right.'] },
          { start: 'Everything has its beauty, but not everyone sees', correct: 'it.', wrong: ['it clearly.', 'its value.', 'its truth.'] },
          { start: 'The man who asks a question is a fool for a minute, the man who does not ask is a fool for', correct: 'life.', wrong: ['a day.', 'an hour.', 'a moment.'] },
          { start: 'To see what is right and not do it is a lack of', correct: 'courage.', wrong: ['wisdom.', 'knowledge.', 'strength.'] },
          { start: 'Choose a job you love, and you will never have to work a day in your', correct: 'life.', wrong: ['kingdom.', 'mind.', 'heart.'] },
          { start: 'Learning without thought is labor lost. Thought without learning is', correct: 'perilous.', wrong: ['useless.', 'wise.', 'safe.'] },
          { start: 'The superior man understands what is right; the inferior man understands what will', correct: 'sell.', wrong: ['win.', 'gain.', 'please.'] },
          { start: 'By three methods we may learn wisdom: First, by reflection, which is noblest; second, by imitation, which is easiest; and third by', correct: 'experience.', wrong: ['force.', 'books.', 'teachers.'] },
          { start: 'It is more shameful to distrust our friends than to be deceived by', correct: 'them.', wrong: ['enemies.', 'strangers.', 'ourselves.'] },
          { start: 'The strength of a nation derives from the integrity of the', correct: 'home.', wrong: ['army.', 'king.', 'temple.'] },
          { start: 'Before you embark on a journey of revenge, dig two', correct: 'graves.', wrong: ['trenches.', 'wells.', 'paths.'] },
          { start: 'Life is really simple, but we insist on making it', correct: 'complicated.', wrong: ['easy.', 'beautiful.', 'long.'] },
          { start: 'The gentleman seeks truth, the small man seeks', correct: 'profit.', wrong: ['power.', 'fame.', 'pleasure.'] },
          { start: 'Do not impose on others what you yourself do not', correct: 'desire.', wrong: ['understand.', 'know.', 'possess.'] },
          { start: 'A gentleman is ashamed to let his words outrun his', correct: 'deeds.', wrong: ['thoughts.', 'wealth.', 'promises.'] },
          { start: 'To know what you know and to know what you do not know — that is true', correct: 'knowledge.', wrong: ['wisdom.', 'power.', 'humility.'] },
          { start: 'Hold faithfulness and sincerity as first', correct: 'principles.', wrong: ['duties.', 'goals.', 'virtues.'] },
          { start: 'The noble-minded are calm and steady. Little people are forever fussing and', correct: 'fretting.', wrong: ['planning.', 'arguing.', 'complaining.'] },
          { start: 'When anger rises, think of the', correct: 'consequences.', wrong: ['rewards.', 'causes.', 'benefits.'] },
          { start: 'I hear and I forget. I see and I remember. I do and I', correct: 'understand.', wrong: ['forget.', 'teach.', 'repeat.'] },
          { start: 'Wheresoever you go, go with all your', correct: 'heart.', wrong: ['mind.', 'strength.', 'wealth.'] },
          { start: 'The noble-minded cultivate roots. When roots are secure, the Way is', correct: 'born.', wrong: ['lost.', 'forgotten.', 'hidden.'] },
          { start: 'If you govern the people legalistically and control them by punishment, they will avoid crime, but have no sense of', correct: 'shame.', wrong: ['honor.', 'duty.', 'respect.'] },
          { start: 'If the people be led by virtue, and uniformity sought to be given them by the rules of propriety, they will have the sense of shame, and moreover will become', correct: 'good.', wrong: ['obedient.', 'rich.', 'powerful.'] },
          { start: 'The gentleman never shuns humaneness even for the time it takes to finish a', correct: 'meal.', wrong: ['day.', 'battle.', 'journey.'] },
          { start: 'Virtue is never isolated; it always has', correct: 'neighbors.', wrong: ['enemies.', 'rivals.', 'followers.'] },
          { start: 'At fifteen I set my heart upon learning. At thirty I stood firm. At forty I had no more doubts. At fifty I knew the mandate of Heaven. At sixty my ear was obedient. At seventy I could follow my heart’s desire without transgressing the', correct: 'norm.', wrong: ['law.', 'rules.', 'boundaries.'] }
        ]
      },
      {
        name: 'Laozi (Lao Tzu)',
        emoji: '🌿',
        quotes: [
          { start: 'Simplicity, patience, compassion. These three are your greatest', correct: 'treasures.', wrong: ['virtues.', 'weapons.', 'goals.'] },
          { start: 'Knowing others is intelligence; knowing yourself is true', correct: 'wisdom.', wrong: ['power.', 'strength.', 'wealth.'] },
          { start: 'Mastering others is strength; mastering yourself is true', correct: 'power.', wrong: ['wisdom.', 'victory.', 'peace.'] },
          { start: 'When you are content to be simply yourself and don\'t compare or compete, everyone will respect', correct: 'you.', wrong: ['fear.', 'envy.', 'ignore.'] },
          { start: 'The Tao that can be told is not the eternal', correct: 'Tao.', wrong: ['Way.', 'Truth.', 'Path.'] },
          { start: 'A journey of a thousand miles begins with a single', correct: 'step.', wrong: ['thought.', 'word.', 'plan.'] },
          { start: 'Nature does not hurry, yet everything is', correct: 'accomplished.', wrong: ['delayed.', 'rushed.', 'perfect.'] },
          { start: 'He who knows does not speak. He who speaks does not', correct: 'know.', wrong: ['understand.', 'act.', 'win.'] },
          { start: 'The best fighter is never', correct: 'angry.', wrong: ['afraid.', 'strong.', 'victorious.'] },
          { start: 'To attain knowledge, add things every day. To attain wisdom, remove things every', correct: 'day.', wrong: ['week.', 'moment.', 'year.'] },
          { start: 'Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to', correct: 'you.', wrong: ['others.', 'fate.', 'heaven.'] },
          { start: 'Act without expectation. By letting it go, it all gets', correct: 'done.', wrong: ['ruined.', 'delayed.', 'complicated.'] },
          { start: 'The flame that burns twice as bright burns half as', correct: 'long.', wrong: ['bright.', 'fast.', 'often.'] },
          { start: 'If you realize that all things change, there is nothing you will try to', correct: 'hold on to.', wrong: ['understand.', 'control.', 'fear.'] },
          { start: 'The wise man is one who knows what he does not', correct: 'know.', wrong: ['want.', 'need.', 'have.'] },
          { start: 'Manifest plainness, embrace simplicity, reduce selfishness, have few', correct: 'desires.', wrong: ['needs.', 'fears.', 'goals.'] },
          { start: 'Those who know do not speak. Those who speak do not', correct: 'know.', wrong: ['act.', 'win.', 'understand.'] },
          { start: 'The highest good is like', correct: 'water.', wrong: ['fire.', 'stone.', 'wind.'] },
          { start: 'Water gives life to the ten thousand things and does not', correct: 'strive.', wrong: ['stop.', 'fight.', 'win.'] },
          { start: 'The soft overcomes the', correct: 'hard.', wrong: ['weak.', 'strong.', 'fast.'] },
          { start: 'The Tao is called the Great Mother: empty yet inexhaustible, it gives birth to infinite', correct: 'worlds.', wrong: ['ideas.', 'wars.', 'riches.'] },
          { start: 'Do the difficult things while they are easy and do the great things while they are', correct: 'small.', wrong: ['big.', 'far.', 'near.'] },
          { start: 'To the mind that is still, the whole universe', correct: 'surrenders.', wrong: ['fights.', 'opens.', 'closes.'] },
          { start: 'Being deeply loved by someone gives you strength, while loving someone deeply gives you', correct: 'courage.', wrong: ['wisdom.', 'power.', 'peace.'] },
          { start: 'If you do not change direction, you may end up where you are', correct: 'heading.', wrong: ['starting.', 'losing.', 'winning.'] },
          { start: 'The snow goose need not bathe to make itself white. Neither need you do anything but be', correct: 'yourself.', wrong: ['strong.', 'wise.', 'rich.'] },
          { start: 'True straightness seems', correct: 'crooked.', wrong: ['straight.', 'bent.', 'broken.'] },
          { start: 'The greatest love seems', correct: 'indifferent.', wrong: ['passionate.', 'strong.', 'loud.'] },
          { start: 'He who conquers others has force; he who conquers himself is', correct: 'strong.', wrong: ['wise.', 'lucky.', 'happy.'] },
          { start: 'When nothing disturbs your emotional center, this is true', correct: 'power.', wrong: ['peace.', 'wisdom.', 'strength.'] },
          { start: 'The wise person acts without effort and teaches by quiet', correct: 'example.', wrong: ['words.', 'force.', 'wealth.'] },
          { start: 'Hold on to the', correct: 'center.', wrong: ['edge.', 'power.', 'truth.'] },
          { start: 'Favor and disgrace are equally', correct: 'problematic.', wrong: ['rewarding.', 'useful.', 'harmless.'] },
          { start: 'Hope and fear are phantoms of the', correct: 'body.', wrong: ['mind.', 'soul.', 'heart.'] }
        ]
      },
      {
        name: 'Sun Tzu',
        emoji: '⚔️',
        quotes: [
          { start: 'The supreme art of war is to subdue the enemy without', correct: 'fighting.', wrong: ['effort.', 'strategy.', 'planning.'] },
          { start: 'Appear weak when you are strong, and strong when you are', correct: 'weak.', wrong: ['ready.', 'afraid.', 'victorious.'] },
          { start: 'If you know the enemy and know yourself, you need not fear the result of a hundred', correct: 'battles.', wrong: ['days.', 'years.', 'wars.'] },
          { start: 'Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to', correct: 'win.', wrong: ['survive.', 'fight.', 'retreat.'] },
          { start: 'All warfare is based on', correct: 'deception.', wrong: ['strength.', 'honor.', 'truth.'] },
          { start: 'In the midst of chaos, there is also', correct: 'opportunity.', wrong: ['danger.', 'fear.', 'defeat.'] },
          { start: 'He will win who knows when to fight and when not to', correct: 'fight.', wrong: ['win.', 'retreat.', 'attack.'] },
          { start: 'The greatest victory is that which requires no', correct: 'battle.', wrong: ['effort.', 'strategy.', 'sacrifice.'] },
          { start: 'To win one hundred victories in one hundred battles is not the acme of skill. To subdue the enemy without fighting is the acme of', correct: 'skill.', wrong: ['war.', 'strength.', 'courage.'] },
          { start: 'Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before', correct: 'defeat.', wrong: ['victory.', 'battle.', 'war.'] },
          { start: 'Know thy self, know thy enemy. A thousand battles, a thousand', correct: 'victories.', wrong: ['defeats.', 'draws.', 'losses.'] },
          { start: 'The general who wins the battle makes many calculations in his temple before the battle is', correct: 'fought.', wrong: ['during the battle.', 'after the battle.', 'never.'] },
          { start: 'Be extremely subtle, even to the point of formlessness. Be extremely mysterious, even to the point of', correct: 'soundlessness.', wrong: ['loudness.', 'visibility.', 'weakness.'] },
          { start: 'The skillful leader subdues the enemy\'s troops without', correct: 'battle.', wrong: ['effort.', 'loss.', 'blood.'] },
          { start: 'Let your plans be dark and impenetrable as', correct: 'night.', wrong: ['day.', 'steel.', 'fire.'] },
          { start: 'When you surround an army, leave an outlet', correct: 'free.', wrong: ['closed.', 'guarded.', 'blocked.'] },
          { start: 'The wise warrior avoids what is', correct: 'strong.', wrong: ['weak.', 'easy.', 'obvious.'] },
          { start: 'Attack is the secret of', correct: 'defense.', wrong: ['victory.', 'defeat.', 'survival.'] },
          { start: 'He who is prudent and lies in wait for an enemy who is not, will be', correct: 'victorious.', wrong: ['defeated.', 'equal.', 'surprised.'] },
          { start: 'There is no instance of a country having benefited from prolonged', correct: 'warfare.', wrong: ['peace.', 'victory.', 'battle.'] },
          { start: 'The clever combatant imposes his will on the enemy, but does not allow the enemy\'s will to be imposed on', correct: 'him.', wrong: ['others.', 'himself.', 'the army.'] },
          { start: 'Speed is the essence of', correct: 'war.', wrong: ['victory.', 'strategy.', 'peace.'] },
          { start: 'The opportunity to secure ourselves against defeat lies in our own', correct: 'hands.', wrong: ['enemy.', 'fate.', 'gods.'] },
          { start: 'If ignorant both of your enemy and yourself, you are certain to be defeated in every', correct: 'battle.', wrong: ['war.', 'skirmish.', 'campaign.'] },
          { start: 'The art of war teaches us to rely not on the likelihood of the enemy\'s not coming, but on our own readiness to receive', correct: 'him.', wrong: ['defeat.', 'victory.', 'peace.'] },
          { start: 'Victorious warriors win first and then go to', correct: 'war.', wrong: ['battle.', 'fight.', 'retreat.'] },
          { start: 'All men can see the tactics whereby I conquer, but what none can see is the strategy out of which victory is', correct: 'evolved.', wrong: ['won.', 'lost.', 'planned.'] }
        ]
      },
      {
        name: 'Mencius',
        emoji: '🧠',
        quotes: [
          { start: 'Human nature is', correct: 'good.', wrong: ['evil.', 'neutral.', 'weak.'] },
          { start: 'The great man is he who does not lose the heart of a', correct: 'child.', wrong: ['king.', 'scholar.', 'warrior.'] },
          { start: 'He who has a thousand friends has not a single', correct: 'enemy.', wrong: ['doubt.', 'fear.', 'regret.'] },
          { start: 'A gentleman does not forget his roots even when he reaches', correct: 'high position.', wrong: ['wealth.', 'power.', 'fame.'] },
          { start: 'The people are the most important element in a nation; the ruler is', correct: 'the least.', wrong: ['the opposite.', 'equally important.', 'the most important.'] },
          { start: 'If the ruler is benevolent, the people will be', correct: 'benevolent.', wrong: ['obedient.', 'fearful.', 'rich.'] },
          { start: 'The heart that cannot bear to see the suffering of others is the beginning of', correct: 'benevolence.', wrong: ['wisdom.', 'courage.', 'justice.'] },
          { start: 'A man must first despise himself before others will despise', correct: 'him.', wrong: ['the ruler.', 'his enemies.', 'his friends.'] },
          { start: 'He who exerts himself to the utmost knows his', correct: 'nature.', wrong: ['limits.', 'fate.', 'enemies.'] },
          { start: 'The superior man loves his own soul; the inferior man loves his own', correct: 'body.', wrong: ['wealth.', 'power.', 'fame.'] },
          { start: 'Benevolence is the heart of man, and righteousness is the path of', correct: 'man.', wrong: ['kings.', 'gods.', 'soldiers.'] },
          { start: 'The wise man knows his own ignorance; the foolish man knows only the wisdom of', correct: 'others.', wrong: ['himself.', 'the ruler.', 'the crowd.'] },
          { start: 'If you know the path and walk on it every day, you will eventually reach the', correct: 'destination.', wrong: ['beginning.', 'end.', 'truth.'] }
        ]
      },
      {
        name: 'Zhuangzi (Chuang Tzu)',
        emoji: '🌊',
        quotes: [
          { start: 'The fish trap exists because of the', correct: 'fish.', wrong: ['water.', 'river.', 'net.'] },
          { start: 'I dreamed I was a butterfly, and when I awoke I did not know whether I was a man who had dreamed he was a butterfly, or a butterfly dreaming he was a', correct: 'man.', wrong: ['god.', 'bird.', 'fish.'] },
          { start: 'Happiness is the absence of the', correct: 'striving for happiness.', wrong: ['pursuit of pleasure.', 'fear of pain.', 'desire for wealth.'] },
          { start: 'The perfect man has no', correct: 'self.', wrong: ['fear.', 'desire.', 'ego.'] },
          { start: 'Flow with whatever may happen and let your mind', correct: 'be free.', wrong: ['resist everything.', 'control everything.', 'fear everything.'] },
          { start: 'The wise man knows that he is', correct: 'nothing.', wrong: ['everything.', 'wise.', 'powerful.'] },
          { start: 'A good traveler has no fixed', correct: 'plans.', wrong: ['destination.', 'route.', 'goals.'] },
          { start: 'Life is a series of natural and spontaneous changes. Do not', correct: 'resist them.', wrong: ['force them.', 'fear them.', 'ignore them.'] },
          { start: 'The sound of the wind in the trees is the voice of', correct: 'the Tao.', wrong: ['the emperor.', 'the ancestors.', 'the gods.'] },
          { start: 'When the shoe fits, the foot is', correct: 'forgotten.', wrong: ['happy.', 'free.', 'strong.'] },
          { start: 'The greatest man is he who does not lose his childlike', correct: 'heart.', wrong: ['mind.', 'strength.', 'ambition.'] }
        ]
      },
      {
        name: 'Han Feizi',
        emoji: '⚖️',
        quotes: [
          { start: 'When the ruler is lawless, the people are', correct: 'disobedient.', wrong: ['obedient.', 'wise.', 'silent.'] },
          { start: 'A wise ruler uses law and', correct: 'punishment.', wrong: ['mercy.', 'rituals.', 'virtue.'] },
          { start: 'The strength of the state lies in', correct: 'order and discipline.', wrong: ['compassion.', 'trust.', 'freedom.'] },
          { start: 'Humans are naturally', correct: 'self-interested.', wrong: ['virtuous.', 'generous.', 'obedient.'] },
          { start: 'Reward and punishment must be', correct: 'clear and impartial.', wrong: ['hidden and subtle.', 'lenient.', 'flexible.'] },
          { start: 'Those who are too lenient invite', correct: 'chaos.', wrong: ['loyalty.', 'prosperity.', 'peace.'] },
          { start: 'The ruler who relies on virtue alone will', correct: 'lose power.', wrong: ['gain respect.', 'control all.', 'be loved.'] },
          { start: 'Law should be applied', correct: 'equally to all.', wrong: ['only to enemies.', 'only to officials.', 'only to commoners.'] },
          { start: 'Human nature cannot be changed, but behavior can be', correct: 'controlled.', wrong: ['ignored.', 'cured.', 'worshiped.'] },
          { start: 'Power is maintained by strict', correct: 'regulations.', wrong: ['trust.', 'forgiveness.', 'ceremony.'] },
          { start: 'Those who obey laws without understanding them will', correct: 'avoid punishment.', wrong: ['be wise.', 'be praised.', 'gain freedom.'] },
          { start: 'A ruler who depends on men rather than laws will', correct: 'lose control.', wrong: ['gain loyalty.', 'be respected.', 'achieve peace.'] },
          { start: 'People will follow rewards, but flee', correct: 'punishment.', wrong: ['virtue.', 'ritual.', 'pleasure.'] },
          { start: 'Governance is like sharp weapons: it must be', correct: 'handled carefully.', wrong: ['ignored.', 'hidden.', 'trusted blindly.'] },
          { start: 'Those who seek to be loved by all often', correct: 'fail.', wrong: ['succeed.', 'rule wisely.', 'gain fame.'] },
          { start: 'Laws are like nets: if they are', correct: 'too wide, the guilty escape.', wrong: ['too strict, they catch nothing.', 'too soft, they bind all.', 'too hidden, they are obeyed.'] },
          { start: 'A ruler’s mind should be free from', correct: 'personal favor.', wrong: ['laws.', 'rituals.', 'advisors.'] },
          { start: 'The cleverest ministers cannot save a ruler who', correct: 'ignores the law.', wrong: ['follows tradition.', 'trusts everyone.', 'punishes criminals.'] },
          { start: 'People obey rules not because they are', correct: 'moral, but because of fear.', wrong: ['wise.', 'good.', 'loyal.'] },
          { start: 'Reward those who follow the law and punish', correct: 'those who break it.', wrong: ['those who speak.', 'those who fear.', 'those who serve.'] },
          { start: 'A state without strict law is like a', correct: 'house without walls.', wrong: ['tree without roots.', 'river without water.', 'soldier without armor.'] },
          { start: 'The foundation of power is', correct: 'control over behavior.', wrong: ['love of virtue.', 'wisdom of advisors.', 'pleasure of people.'] },
          { start: 'Merit alone cannot sustain a ruler; he must also', correct: 'enforce law.', wrong: ['show mercy.', 'seek loyalty.', 'perform rituals.'] },
          { start: 'Laws must be impartial, and the ruler must not', correct: 'interfere.', wrong: ['favor relatives.', 'trust ministers.', 'consult spirits.'] },
          { start: 'Those who are weak or lenient are soon', correct: 'overthrown.', wrong: ['respected.', 'trusted.', 'rewarded.'] },
          { start: 'Rulers who punish too lightly invite', correct: 'rebellion.', wrong: ['obedience.', 'loyalty.', 'wisdom.'] },
          { start: 'The wise ruler uses rewards and punishments as', correct: 'tools, not as favors.', wrong: ['miracles.', 'virtue.', 'gifts.'] },
          { start: 'Virtue without law is like a', correct: 'boat without a rudder.', wrong: ['sword without a handle.', 'tree without roots.', 'shield without armor.'] },
          { start: 'People’s hearts are drawn more by fear than', correct: 'by love.', wrong: ['rituals.', 'virtue.', 'mercy.'] },
          { start: 'A ruler must rely on the system, not', correct: 'personal whims.', wrong: ['wise ministers.', 'rituals.', 'his family.'] },
          { start: 'The state prospers when the laws are', correct: 'strong and clear.', wrong: ['hidden and lenient.', 'flexible and soft.', 'ignored and symbolic.'] }
        ]
      },
      {
        name: 'Xunzi',
        emoji: '📜',
        quotes: [
          { start: 'Human nature is', correct: 'evil by nature.', wrong: ['good by nature.', 'neutral.', 'divine.'] },
          { start: 'Education and ritual transform', correct: 'human behavior.', wrong: ['the stars.', 'the gods.', 'fortune.'] },
          { start: 'The wise ruler governs through', correct: 'ritual and law.', wrong: ['pleasure.', 'fear.', 'force alone.'] },
          { start: 'A person who is self-disciplined controls', correct: 'their desires.', wrong: ['others.', 'fate.', 'time.'] },
          { start: 'Learning is the foundation of', correct: 'virtue.', wrong: ['wealth.', 'strength.', 'power.'] },
          { start: 'Without law, people cannot', correct: 'maintain order.', wrong: ['be happy.', 'gain wisdom.', 'be free.'] },
          { start: 'He who corrects himself will', correct: 'correct others.', wrong: ['rule the world.', 'gain riches.', 'avoid conflict.'] },
          { start: 'Desire left unchecked leads to', correct: 'chaos.', wrong: ['peace.', 'freedom.', 'happiness.'] },
          { start: 'A ruler must be firm, impartial, and', correct: 'wise.', wrong: ['lenient.', 'merciful.', 'secretive.'] },
          { start: 'Virtue alone cannot govern; one must also use', correct: 'law.', wrong: ['ritual.', 'fear.', 'ritual and fear.'] }
        ]
      },
      {
        name: 'Mozi',
        emoji: '🛡️',
        quotes: [
          { start: 'Universal love means caring for', correct: 'all people equally.', wrong: ['only family.', 'only friends.', 'the ruler.'] },
          { start: 'The highest good is', correct: 'benefiting others.', wrong: ['personal happiness.', 'wealth.', 'power.'] },
          { start: 'Rituals are useless if they', correct: 'waste resources.', wrong: ['honor ancestors.', 'teach morality.', 'bring people together.'] },
          { start: 'A ruler should appoint officials based on', correct: 'merit.', wrong: ['favor.', 'family ties.', 'popularity.'] },
          { start: 'War should only be waged for', correct: 'defense.', wrong: ['conquest.', 'glory.', 'ambition.'] },
          { start: 'Helping others strengthens', correct: 'the state.', wrong: ['personal wealth.', 'social status.', 'rituals.'] },
          { start: 'Greed and selfishness cause', correct: 'conflict.', wrong: ['prosperity.', 'peace.', 'virtue.'] },
          { start: 'The people are happiest when rulers are', correct: 'just and caring.', wrong: ['fearsome.', 'distant.', 'ritualistic.'] },
          { start: 'The foundation of society is', correct: 'mutual benefit.', wrong: ['ritual.', 'power.', 'religion.'] },
          { start: 'Those who love only themselves bring', correct: 'harm to all.', wrong: ['prosperity.', 'peace.', 'wisdom.'] }
        ]
      },
      {
        name: 'Liezi',
        emoji: '🌿',
        quotes: [
          { start: 'The wise man is like water, for it', correct: 'flows without force.', wrong: ['controls all.', 'stops often.', 'rises above all.'] },
          { start: 'Happiness comes when the mind is', correct: 'free and untroubled.', wrong: ['ambitious.', 'controlled.', 'fearful.'] },
          { start: 'To live fully, one must', correct: 'embrace change.', wrong: ['resist fate.', 'plan everything.', 'seek power.'] },
          { start: 'A good life is like', correct: 'a natural stream.', wrong: ['a fortified castle.', 'an endless climb.', 'a captured treasure.'] },
          { start: 'The sage knows the limits of', correct: 'knowledge.', wrong: ['power.', 'desire.', 'honor.'] },
          { start: 'Freedom is found in', correct: 'letting go.', wrong: ['grasping.', 'planning.', 'fighting.'] },
          { start: 'The universe does not hurry, yet', correct: 'everything is accomplished.', wrong: ['nothing moves.', 'time stops.', 'chaos reigns.'] },
          { start: 'All things are connected, and understanding this', correct: 'brings peace.', wrong: ['brings wealth.', 'gives power.', 'creates fear.'] },
          { start: 'Those who desire control over all will', correct: 'lose themselves.', wrong: ['gain respect.', 'rule easily.', 'find joy.'] },
          { start: 'Life is short; the sage therefore', correct: 'cherishes the present.', wrong: ['plans endlessly.', 'stores wealth.', 'fights constantly.'] }
        ]
      },
      {
        name: 'Tao Hongjing',
        emoji: '🪷',
        quotes: [
          { start: 'The sage moves with the', correct: 'flow of nature.', wrong: ['will of men.', 'laws of rulers.', 'force of desire.'] },
          { start: 'True immortality is found in', correct: 'harmony with the Dao.', wrong: ['wealth.', 'fame.', 'power.'] },
          { start: 'The mind that seeks stillness finds', correct: 'clarity.', wrong: ['conflict.', 'chaos.', 'desire.'] },
          { start: 'All things are temporary; only the', correct: 'Dao endures.', wrong: ['emperor endures.', 'mind endures.', 'law endures.'] },
          { start: 'Nature does not hurry, yet', correct: 'everything is accomplished.', wrong: ['nothing moves.', 'the wise fail.', 'desires flourish.'] },
          { start: 'The heart that is unattached is', correct: 'free.', wrong: ['troubled.', 'ambitious.', 'fearful.'] },
          { start: 'To follow the Dao is to', correct: 'live without striving.', wrong: ['control others.', 'seek wealth.', 'seek recognition.'] },
          { start: 'He who knows simplicity is', correct: 'rich in spirit.', wrong: ['poor in knowledge.', 'weak.', 'powerless.'] },
          { start: 'Wisdom comes not from learning alone but', correct: 'from observing nature.', wrong: ['from authority.', 'from wealth.', 'from ambition.'] },
          { start: 'The wise do not speak to show knowledge, they', correct: 'act in accordance with the Dao.', wrong: ['debate endlessly.', 'control others.', 'accumulate wealth.'] }
        ]
      },
      {
        name: 'Huainanzi',
        emoji: '📚',
        quotes: [
          { start: 'The ruler who understands Heaven and Earth governs', correct: 'without force.', wrong: ['with cruelty.', 'through wealth.', 'with fear.'] },
          { start: 'He who conquers himself is', correct: 'stronger than one who conquers others.', wrong: ['weak.', 'fearful.', 'confused.'] },
          { start: 'The wise man adapts to', correct: 'circumstances.', wrong: ['his whims.', 'fortune.', 'the law.'] },
          { start: 'All things arise from the', correct: 'Dao.', wrong: ['emperor.', 'mind.', 'ritual.'] },
          { start: 'A good ruler values', correct: 'order and balance.', wrong: ['wealth and fame.', 'ritual alone.', 'fear and force.'] },
          { start: 'Those who are patient endure', correct: 'all things.', wrong: ['nothing.', 'only wealth.', 'only power.'] },
          { start: 'The mind that is in harmony with Heaven is', correct: 'at peace.', wrong: ['troubled.', 'restless.', 'ambitious.'] },
          { start: 'Power without virtue leads to', correct: 'destruction.', wrong: ['success.', 'peace.', 'happiness.'] },
          { start: 'Knowledge alone is insufficient; it must be', correct: 'applied.', wrong: ['ignored.', 'hidden.', 'praised.'] },
          { start: 'The greatest ruler governs with', correct: 'quiet influence.', wrong: ['loud commands.', 'force.', 'punishment.'] }
        ]
      },
      {
        name: 'Shen Buhai',
        emoji: '⚖️',
        quotes: [
          { start: 'A ruler must control the', correct: 'administration.', wrong: ['weather.', 'wealth.', 'rituals.'] },
          { start: 'Officials must be evaluated by', correct: 'performance, not words.', wrong: ['appearance.', 'family.', 'loyalty.'] },
          { start: 'Law and method govern better than', correct: 'personal favor.', wrong: ['mercy.', 'virtue.', 'ritual.'] },
          { start: 'The clever ruler relies on', correct: 'systems, not men.', wrong: ['wisdom alone.', 'fear.', 'ritual.'] },
          { start: 'To maintain order, the ruler must', correct: 'assign duties clearly.', wrong: ['trust everyone.', 'give freedom.', 'allow chaos.'] },
          { start: 'An official who does not follow method', correct: 'must be removed.', wrong: ['is praised.', 'is forgiven.', 'is ignored.'] },
          { start: 'The state prospers when law and', correct: 'administration are clear.', wrong: ['rituals.', 'mercy.', 'virtue.'] },
          { start: 'Control without clarity leads to', correct: 'confusion.', wrong: ['loyalty.', 'success.', 'peace.'] },
          { start: 'The ruler’s mind must be', correct: 'calm and impartial.', wrong: ['fearful.', 'ambitious.', 'fickle.'] },
          { start: 'Those who rely on personal talent rather than method', correct: 'invite failure.', wrong: ['succeed.', 'gain respect.', 'rule wisely.'] }
        ]
      },
      {
        name: 'Li Kui',
        emoji: '📏',
        quotes: [
          { start: 'The foundation of a state is', correct: 'clear laws.', wrong: ['rituals.', 'virtue.', 'fame.'] },
          { start: 'Punishment must be', correct: 'strict and impartial.', wrong: ['lenient.', 'hidden.', 'arbitrary.'] },
          { start: 'Officials should be chosen for', correct: 'merit.', wrong: ['family ties.', 'popularity.', 'wealth.'] },
          { start: 'The ruler who ignores law invites', correct: 'chaos.', wrong: ['loyalty.', 'prosperity.', 'obedience.'] },
          { start: 'A law without enforcement is', correct: 'useless.', wrong: ['moral.', 'respected.', 'powerful.'] },
          { start: 'The wise ruler governs by', correct: 'system, not favor.', wrong: ['virtue alone.', 'rituals.', 'fear.'] },
          { start: 'Those who break the law must be', correct: 'punished equally.', wrong: ['forgiven.', 'hidden.', 'praised.'] },
          { start: 'Power depends on', correct: 'order and discipline.', wrong: ['wealth.', 'fear.', 'popularity.'] },
          { start: 'Officials must follow method and', correct: 'duty.', wrong: ['ambition.', 'desire.', 'ritual.'] },
          { start: 'A state prospers when the law is', correct: 'clear and consistent.', wrong: ['hidden.', 'flexible.', 'lenient.'] }
        ]
      },
      {
        name: 'Zengzi',
        emoji: '🕊️',
        quotes: [
          { start: 'Filial piety begins at home and extends to', correct: 'all people.', wrong: ['wealth.', 'power.', 'rituals.'] },
          { start: 'A person who cultivates virtue becomes', correct: 'respected by all.', wrong: ['fearful.', 'wealthy.', 'ambitious.'] },
          { start: 'Self-reflection is the path to', correct: 'wisdom.', wrong: ['power.', 'fear.', 'wealth.'] },
          { start: 'Those who are sincere in heart and action', correct: 'inspire trust.', wrong: ['gain power.', 'accumulate wealth.', 'seek fame.'] },
          { start: 'Moral character is shown in', correct: 'small daily actions.', wrong: ['grand ceremonies.', 'speech.', 'wealth.'] },
          { start: 'The filial child respects parents and', correct: 'guides the young.', wrong: ['seeks fame.', 'controls others.', 'ignores others.'] },
          { start: 'Virtue grows through', correct: 'practice and learning.', wrong: ['inheritance.', 'luck.', 'ritual alone.'] },
          { start: 'A ruler should value', correct: 'moral ministers.', wrong: ['wealthy ministers.', 'fearful ministers.', 'obedient ministers only.'] },
          { start: 'Those who act with sincerity', correct: 'win hearts.', wrong: ['gain riches.', 'avoid laws.', 'rule kingdoms.'] },
          { start: 'A person who cannot govern themselves cannot', correct: 'govern others.', wrong: ['gain wealth.', 'perform rituals.', 'control fate.'] }
        ]
      },
      {
        name: 'Cao Cao',
        emoji: '⚔️',
        quotes: [
          { start: 'Ambition without action leads to', correct: 'nothing.', wrong: ['success.', 'wisdom.', 'peace.'] },
          { start: 'He who controls the present shapes', correct: 'the future.', wrong: ['the past.', 'destiny alone.', 'others only.'] },
          { start: 'A wise man values', correct: 'strategy over force.', wrong: ['strength.', 'ritual.', 'fear.'] },
          { start: 'Opportunities favor those who', correct: 'act decisively.', wrong: ['wait patiently.', 'speak loudly.', 'seek advice endlessly.'] },
          { start: 'Life is like a journey; one must', correct: 'adapt to obstacles.', wrong: ['fight all challenges.', 'plan nothing.', 'ignore fate.'] },
          { start: 'Those who chase fame often', correct: 'lose peace.', wrong: ['gain loyalty.', 'win all.', 'are praised.'] },
          { start: 'Power is temporary; only wisdom', correct: 'endures.', wrong: ['fame endures.', 'force endures.', 'wealth endures.'] },
          { start: 'The ruler who trusts only force', correct: 'invites rebellion.', wrong: ['achieves peace.', 'gains love.', 'secures loyalty.'] },
          { start: 'Courage without planning leads to', correct: 'defeat.', wrong: ['success.', 'prosperity.', 'wisdom.'] },
          { start: 'He who controls himself can', correct: 'control the world.', wrong: ['gain wealth.', 'avoid fear.', 'ignore law.'] }
        ]
      },
      {
        name: 'Han Yu',
        emoji: '🖋️',
        quotes: [
          { start: 'The scholar must uphold', correct: 'morality above all.', wrong: ['wealth.', 'fame.', 'comfort.'] },
          { start: 'Righteousness should guide', correct: 'every action.', wrong: ['only ritual.', 'only law.', 'fortune.'] },
          { start: 'Those who value virtue over gain', correct: 'earn respect.', wrong: ['gain wealth.', 'avoid laws.', 'seek power.'] },
          { start: 'Filial piety is the root of', correct: 'all virtue.', wrong: ['ritual.', 'power.', 'learning.'] },
          { start: 'A true leader governs by', correct: 'principle, not force.', wrong: ['fear.', 'wealth.', 'ceremony.'] },
          { start: 'Learning without practice is', correct: 'incomplete.', wrong: ['perfect.', 'easy.', 'enough.'] },
          { start: 'Those who speak truth may', correct: 'face opposition.', wrong: ['gain immediate praise.', 'avoid responsibility.', 'be wealthy.'] },
          { start: 'The mind that seeks virtue is', correct: 'unshakable.', wrong: ['weak.', 'ambitious.', 'fearful.'] },
          { start: 'Respect for tradition should not override', correct: 'reason.', wrong: ['ritual.', 'power.', 'fortune.'] },
          { start: 'A ruler must value', correct: 'honest counsel.', wrong: ['wealthy ministers.', 'ritual alone.', 'fame.'] }
        ]
      },
      {
        name: 'Liu Zongyuan',
        emoji: '🍃',
        quotes: [
          { start: 'A clear mind perceives', correct: 'the truth of things.', wrong: ['only appearances.', 'fame.', 'wealth.'] },
          { start: 'Nature teaches us to', correct: 'be patient and enduring.', wrong: ['force events.', 'seek power.', 'ignore virtue.'] },
          { start: 'A virtuous person is guided by', correct: 'principle.', wrong: ['desire.', 'fear.', 'chance.'] },
          { start: 'Suffering teaches the wise to', correct: 'be humble.', wrong: ['seek revenge.', 'ignore others.', 'seek power.'] },
          { start: 'True happiness comes from', correct: 'simplicity and virtue.', wrong: ['wealth.', 'fame.', 'control.'] },
          { start: 'Those who act with foresight avoid', correct: 'regret.', wrong: ['success.', 'wealth.', 'peace.'] },
          { start: 'The heart that is untroubled finds', correct: 'peace.', wrong: ['conflict.', 'power.', 'fear.'] },
          { start: 'Virtue is cultivated through', correct: 'practice and reflection.', wrong: ['luck.', 'wealth.', 'ritual alone.'] },
          { start: 'A person who ignores nature', correct: 'loses harmony.', wrong: ['gains control.', 'becomes wise.', 'is praised.'] },
          { start: 'The wise see all things as', correct: 'connected.', wrong: ['separate.', 'random.', 'unimportant.'] }
        ]
      },
      {
        name: 'Sima Qian',
        emoji: '📖',
        quotes: [
          { start: 'History teaches those who', correct: 'learn from it.', wrong: ['ignore it.', 'rewrite it.', 'mock it.'] },
          { start: 'A life without reflection is', correct: 'wasted.', wrong: ['complete.', 'successful.', 'fortunate.'] },
          { start: 'The deeds of the past reveal', correct: 'the patterns of human nature.', wrong: ['only wealth.', 'only rulers.', 'only ritual.'] },
          { start: 'A wise man studies history to', correct: 'guide the present.', wrong: ['gain fame.', 'avoid learning.', 'control others.'] },
          { start: 'Greatness is measured by', correct: 'impact on others.', wrong: ['wealth.', 'ceremony.', 'power alone.'] },
          { start: 'Those who ignore history', correct: 'repeat mistakes.', wrong: ['create fortune.', 'gain fame.', 'are free.'] },
          { start: 'Knowledge without action', correct: 'is incomplete.', wrong: ['is wisdom.', 'is enough.', 'brings success.'] },
          { start: 'The historian observes', correct: 'patterns and consequences.', wrong: ['rituals only.', 'wealth only.', 'power only.'] },
          { start: 'A ruler who studies the past', correct: 'avoids failure.', wrong: ['gains power.', 'seeks wealth.', 'ignores laws.'] },
          { start: 'True understanding comes from', correct: 'careful observation.', wrong: ['blind faith.', 'wealth.', 'ceremony.'] }
        ]
      },
    ]
  },
  {
    id: 'india',
    name: 'Ancient India',
    emoji: '🕉️',
    color: 0xffd700,
    colorHex: '#ffd700',
    bg: '#0a0a0a',
    authors: [
      {
        name: 'Bhagavad Gita',
        emoji: '📜',
        quotes: [
          { start: 'You have the right to work, but never to the', correct: 'fruits of work.', wrong: ['results of others.', 'wealth.', 'pleasure.'] },
          { start: 'Perform your duties without attachment, and you will be', correct: 'free.', wrong: ['bound.', 'confused.', 'afraid.'] },
          { start: 'The soul is neither born, nor does it', correct: 'die.', wrong: ['age.', 'change.', 'suffer.'] },
          { start: 'Those who are motivated by desire find', correct: 'pain.', wrong: ['peace.', 'joy.', 'strength.'] },
          { start: 'A person can control their mind through', correct: 'discipline.', wrong: ['wealth.', 'fame.', 'fear.'] },
          { start: 'True wisdom is knowing the difference between', correct: 'eternal and temporary.', wrong: ['good and evil.', 'rich and poor.', 'strong and weak.'] },
          { start: 'Do not be led by selfish desire, but by', correct: 'dharma.', wrong: ['fame.', 'wealth.', 'anger.'] },
          { start: 'The mind is restless; it can be controlled through', correct: 'meditation.', wrong: ['action.', 'words.', 'rituals.'] },
          { start: 'Happiness and sorrow arise from', correct: 'attachment.', wrong: ['power.', 'pleasure.', 'fate.'] },
          { start: 'One who sees all beings in the self, and the self in all beings, never', correct: 'hates.', wrong: ['fears.', 'desires.', 'fails.'] },
          { start: 'A person who is even-minded in pleasure and pain is considered', correct: 'wise.', wrong: ['weak.', 'powerful.', 'fearful.'] },
          { start: 'The one who surrenders all actions to the Supreme attains', correct: 'peace.', wrong: ['wealth.', 'fame.', 'pleasure.'] },
          { start: 'Selfless action leads to', correct: 'liberation.', wrong: ['conflict.', 'power.', 'fear.'] },
          { start: 'Knowledge alone without action is', correct: 'incomplete.', wrong: ['enough.', 'dangerous.', 'powerful.'] },
          { start: 'A person who controls anger and greed is truly', correct: 'strong.', wrong: ['weak.', 'fearful.', 'ambitious.'] },
          { start: 'The wise see the same in all beings, whether', correct: 'friend or enemy.', wrong: ['king or peasant.', 'rich or poor.', 'good or bad.'] },
          { start: 'He who is devoted to the selfless service of others attains', correct: 'liberation.', wrong: ['wealth.', 'power.', 'pleasure.'] },
          { start: 'Attachment to results leads to', correct: 'suffering.', wrong: ['freedom.', 'joy.', 'peace.'] },
          { start: 'Those who remain unattached, even in success or failure, are', correct: 'wise.', wrong: ['weak.', 'fearful.', 'ambitious.'] },
          { start: 'A disciplined mind is the source of', correct: 'all happiness.', wrong: ['wealth.', 'fame.', 'power.'] },
          { start: 'The wise do not mourn for the past, nor do they', correct: 'fear the future.', wrong: ['seek wealth.', 'desire fame.', 'ignore others.'] },
          { start: 'Perform all actions as an offering to', correct: 'the divine.', wrong: ['yourself.', 'others.', 'power.'] },
          { start: 'Those who meditate steadily and control their mind attain', correct: 'freedom.', wrong: ['fear.', 'conflict.', 'desire.'] },
          { start: 'One should act according to their dharma without', correct: 'attachment.', wrong: ['fear.', 'anger.', 'greed.'] },
          { start: 'True wisdom comes from the understanding of', correct: 'self and universe.', wrong: ['wealth and fame.', 'rituals.', 'desire.'] },
          { start: 'The soul is eternal and cannot be', correct: 'destroyed.', wrong: ['controlled.', 'hidden.', 'created.'] }
        ]
      },
      {
        name: 'Upanishads',
        emoji: '🌿',
        quotes: [
          { start: 'As one acts, so one', correct: 'becomes.', wrong: ['learns.', 'suffers.', 'changes.'] },
          { start: 'The Self is hidden in all, yet', correct: 'revealed to the wise.', wrong: ['unknown forever.', 'obscure.', 'lost.'] },
          { start: 'Know that which pervades all beings and is in all things; that is the', correct: 'Self.', wrong: ['world.', 'mind.', 'body.'] },
          { start: 'He who sees the eternal in the temporal attains', correct: 'peace.', wrong: ['fear.', 'pleasure.', 'power.'] },
          { start: 'The wise are united with the', correct: 'Brahman.', wrong: ['king.', 'world.', 'flesh.'] },
          { start: 'Ignorance binds the soul; knowledge', correct: 'liberates.', wrong: ['confuses.', 'binds.', 'destroys.'] },
          { start: 'Detach from worldly desires, and the mind becomes', correct: 'free.', wrong: ['restless.', 'strong.', 'weak.'] },
          { start: 'The eternal is beyond', correct: 'birth and death.', wrong: ['wealth.', 'pleasure.', 'pain.'] },
          { start: 'Seek truth not from fear or desire, but from', correct: 'wisdom.', wrong: ['power.', 'anger.', 'fame.'] },
          { start: 'The Self is realized when one sees', correct: 'unity in diversity.', wrong: ['conflict in all.', 'power in all.', 'fear in all.'] },
          { start: 'He who knows the Self becomes', correct: 'free from sorrow.', wrong: ['wealthy.', 'powerful.', 'feared.'] },
          { start: 'All beings originate from the', correct: 'Brahman.', wrong: ['king.', 'earth.', 'mind.'] },
          { start: 'The world is illusion; the wise see', correct: 'truth.', wrong: ['fear.', 'pleasure.', 'wealth.'] },
          { start: 'The Self cannot be grasped by', correct: 'senses.', wrong: ['wealth.', 'rituals.', 'fame.'] },
          { start: 'Freedom comes to those who know', correct: 'the eternal Self.', wrong: ['pleasure.', 'desire.', 'power.'] },
          { start: 'He who is free from attachment experiences', correct: 'bliss.', wrong: ['fear.', 'conflict.', 'power.'] },
          { start: 'The Self is the same in all; realizing this leads to', correct: 'compassion.', wrong: ['power.', 'pleasure.', 'fear.'] },
          { start: 'True knowledge is knowing the', correct: 'eternal Self.', wrong: ['worldly law.', 'king.', 'rituals.'] },
          { start: 'Meditation leads to', correct: 'understanding.', wrong: ['wealth.', 'pleasure.', 'fear.'] },
          { start: 'Those who realize the Self live', correct: 'without fear.', wrong: ['for power.', 'for wealth.', 'in desire.'] },
          { start: 'He who acts with knowledge sees all', correct: 'as one.', wrong: ['as separate.', 'as weak.', 'as powerful.'] },
          { start: 'The eternal is beyond time, and understanding it leads to', correct: 'peace.', wrong: ['fear.', 'desire.', 'conflict.'] },
          { start: 'Detach from false identification and embrace the', correct: 'true Self.', wrong: ['world.', 'wealth.', 'body.'] },
          { start: 'The wise see life and death as', correct: 'illusion.', wrong: ['fear.', 'power.', 'pleasure.'] },
          { start: 'Those who know Brahman are', correct: 'free from sorrow.', wrong: ['wealthy.', 'fearful.', 'ambitious.'] },
          { start: 'Self-knowledge is the foundation of', correct: 'liberation.', wrong: ['power.', 'pleasure.', 'fame.'] },
          { start: 'The universe is pervaded by the', correct: 'Self.', wrong: ['king.', 'wealth.', 'body.'] },
          { start: 'All paths lead to the realization of the', correct: 'Self.', wrong: ['king.', 'world.', 'wealth.'] }
        ]
      },
      {
        name: 'Mahabharata',
        emoji: '⚔️',
        quotes: [
          { start: 'A person who conquers themselves is greater than one who conquers', correct: 'a city.', wrong: ['a king.', 'fame.', 'wealth.'] },
          { start: 'Anger and greed destroy the', correct: 'mind.', wrong: ['body.', 'wealth.', 'kingdom.'] },
          { start: 'Fortune comes to those who act with', correct: 'righteousness.', wrong: ['fear.', 'trickery.', 'desire.'] },
          { start: 'It is better to live your own dharma imperfectly than to live', correct: 'another’s perfectly.', wrong: ['wisely.', 'carefully.', 'powerfully.'] },
          { start: 'The wise are content with', correct: 'little.', wrong: ['much.', 'pleasure.', 'power.'] },
          { start: 'Speech should be truthful, pleasant, and', correct: 'beneficial.', wrong: ['clever.', 'loud.', 'wise.'] },
          { start: 'Those who perform actions without attachment to the results gain', correct: 'freedom.', wrong: ['fear.', 'power.', 'pleasure.'] },
          { start: 'The heart that is pure sees', correct: 'truth.', wrong: ['illusion.', 'fame.', 'desire.'] },
          { start: 'Knowledge without humility leads to', correct: 'arrogance.', wrong: ['wisdom.', 'strength.', 'peace.'] },
          { start: 'A wise person does not grieve for what is', correct: 'lost.', wrong: ['gained.', 'hidden.', 'known.'] },
          { start: 'One who controls the tongue and mind gains', correct: 'peace.', wrong: ['wealth.', 'power.', 'fame.'] },
          { start: 'He who gives freely without expectation receives', correct: 'blessings.', wrong: ['nothing.', 'fear.', 'power.'] },
          { start: 'The path of virtue is difficult, but it leads to', correct: 'liberation.', wrong: ['wealth.', 'power.', 'pleasure.'] },
          { start: 'A person who is humble in heart attains', correct: 'wisdom.', wrong: ['wealth.', 'fame.', 'strength.'] },
          { start: 'Control your desires and you will be', correct: 'free.', wrong: ['bound.', 'fearful.', 'weak.'] },
          { start: 'He who is truthful and just is', correct: 'respected.', wrong: ['feared.', 'ignored.', 'envied.'] },
          { start: 'The wise choose friends who are', correct: 'virtuous.', wrong: ['powerful.', 'wealthy.', 'famous.'] },
          { start: 'Anger leads to loss; patience brings', correct: 'strength.', wrong: ['fear.', 'fame.', 'desire.'] },
          { start: 'Those who follow dharma find', correct: 'peace.', wrong: ['conflict.', 'fear.', 'desire.'] },
          { start: 'Selfless service is greater than', correct: 'rituals.', wrong: ['knowledge.', 'wealth.', 'power.'] },
          { start: 'The soul is eternal; the body is', correct: 'temporary.', wrong: ['eternal.', 'powerful.', 'hidden.'] },
          { start: 'Wisdom is superior to', correct: 'strength.', wrong: ['wealth.', 'ritual.', 'fame.'] },
          { start: 'He who acts with dharma prospers while avoiding', correct: 'sin.', wrong: ['fear.', 'conflict.', 'desire.'] },
          { start: 'The mind of the wise is calm like', correct: 'still water.', wrong: ['fire.', 'storm.', 'mountain.'] },
          { start: 'Truth is the highest', correct: 'virtue.', wrong: ['power.', 'knowledge.', 'wealth.'] },
          { start: 'A virtuous person benefits not only themselves but', correct: 'all beings.', wrong: ['few friends.', 'family.', 'the king.'] },
          { start: 'He who meditates steadily conquers', correct: 'the self.', wrong: ['others.', 'wealth.', 'fate.'] }
        ]
      },
      {
        name: 'Chanakya',
        emoji: '🧠',
        quotes: [
          { start: 'A person should not be too honest. Straight trees are', correct: 'cut first.', wrong: ['planted first.', 'ignored first.', 'blessed first.'] },
          { start: 'Education is the best friend. An educated person is', correct: 'respected everywhere.', wrong: ['feared everywhere.', 'ignored everywhere.', 'envied everywhere.'] },
          { start: 'He who is overly attached to his family members experiences', correct: 'sorrow.', wrong: ['joy.', 'peace.', 'freedom.'] },
          { start: 'Before you start some work, always ask yourself three questions: Why am I doing it, What will the result be, and', correct: 'Will I succeed?', wrong: ['Who will notice?', 'Is it easy?', 'Will others help?'] },
          { start: 'Test a servant while in the happiness of your', correct: 'prosperity.', wrong: ['poverty.', 'fear.', 'anger.'] },
          { start: 'There is some self-interest behind every', correct: 'friendship.', wrong: ['gift.', 'action.', 'prayer.'] },
          { start: 'The king shall lose no time when the opportunity to act', correct: 'arises.', wrong: ['fails.', 'delays.', 'dies.'] },
          { start: 'As soon as the fear approaches near, attack and', correct: 'destroy it.', wrong: ['run away.', 'ignore it.', 'hesitate.'] },
          { start: 'Wealth, a friend, and fame are gained easily, but', correct: 'lost quickly.', wrong: ['kept forever.', 'ignored easily.', 'earned slowly.'] },
          { start: 'Before you start a war, always analyze the enemy’s', correct: 'strengths and weaknesses.', wrong: ['intentions only.', 'fame.', 'wealth.'] },
          { start: 'The biggest guru-mantra is: Never share your', correct: 'secrets with anyone.', wrong: ['wealth with anyone.', 'power with anyone.', 'food with anyone.'] },
          { start: 'He who is overly greedy loses', correct: 'everything.', wrong: ['some things.', 'nothing.', 'friends.'] },
          { start: 'A man is great by deeds, not by', correct: 'birth.', wrong: ['wealth.', 'knowledge.', 'clothes.'] },
          { start: 'Even if a snake is dead, it can still', correct: 'bite.', wrong: ['slither.', 'hiss.', 'freeze.'] },
          { start: 'The fragrance of flowers spreads only in', correct: 'the direction of the wind.', wrong: ['all directions.', 'your house.', 'silence.'] },
          { start: 'Once you start working on something, don’t be afraid of', correct: 'failure.', wrong: ['effort.', 'help.', 'success.'] },
          { start: 'A person who is too clever is not always', correct: 'wise.', wrong: ['rich.', 'powerful.', 'respected.'] },
          { start: 'A man is great not by his money but by his', correct: 'character.', wrong: ['weapons.', 'followers.', 'clothes.'] },
          { start: 'The world\'s biggest enemy is', correct: 'ignorance.', wrong: ['fear.', 'power.', 'greed.'] },
          { start: 'An uneducated ruler is like a', correct: 'blind man.', wrong: ['strong man.', 'rich man.', 'wise man.'] },
          { start: 'The wise should always be wary of', correct: 'friends who flatter.', wrong: ['enemies who fight.', 'wealth that grows.', 'power that fades.'] },
          { start: 'Do not reveal your secrets to a person who', correct: 'cannot keep them.', wrong: ['is weak.', 'is rich.', 'is famous.'] },
          { start: 'He who is disciplined in thought, speech, and action attains', correct: 'success.', wrong: ['fear.', 'poverty.', 'conflict.'] },
          { start: 'A person should always be prepared for', correct: 'difficulties.', wrong: ['pleasure.', 'sleep.', 'wealth.'] },
          { start: 'The greatest wealth is', correct: 'knowledge.', wrong: ['gold.', 'power.', 'friends.'] },
          { start: 'Do not delay action; the right time is', correct: 'now.', wrong: ['tomorrow.', 'later.', 'never.'] },
          { start: 'Even a small enemy can', correct: 'cause harm.', wrong: ['do nothing.', 'help.', 'be ignored.'] },
          { start: 'Success comes to those who are', correct: 'persistent.', wrong: ['lucky.', 'clever.', 'fearful.'] },
          { start: 'Do not waste energy on', correct: 'useless things.', wrong: ['friends.', 'learning.', 'wealth.'] },
          { start: 'He who controls his mind and desires gains', correct: 'happiness.', wrong: ['power.', 'fear.', 'fame.'] }
        ]
      },
      {
        name: 'Patanjali',
        emoji: '🧘',
        quotes: [
          { start: 'Yoga is the cessation of the', correct: 'modifications of the mind.', wrong: ['body’s desires.', 'worldly actions.', 'speech.'] },
          { start: 'The mind is restless; controlling it brings', correct: 'peace.', wrong: ['fear.', 'wealth.', 'conflict.'] },
          { start: 'Practice and detachment are the means to', correct: 'liberation.', wrong: ['power.', 'fame.', 'pleasure.'] },
          { start: 'The disciplined mind sees the same in', correct: 'all beings.', wrong: ['friends only.', 'enemies only.', 'wealthy people.'] },
          { start: 'Yoga is not about controlling the body, but controlling the', correct: 'mind.', wrong: ['world.', 'fame.', 'speech.'] },
          { start: 'Meditation is the means to', correct: 'self-realization.', wrong: ['knowledge.', 'power.', 'pleasure.'] },
          { start: 'Detach from desires, and the mind becomes', correct: 'steady.', wrong: ['restless.', 'fearful.', 'weak.'] },
          { start: 'The yogi who sees all actions as', correct: 'sacred.', wrong: ['useless.', 'difficult.', 'powerful.'] },
          { start: 'Freedom comes to those who are free from', correct: 'attachment.', wrong: ['friends.', 'enemies.', 'fear.'] },
          { start: 'The mind becomes pure through', correct: 'practice.', wrong: ['wealth.', 'power.', 'rituals.'] },
          { start: 'Yoga unites the individual self with the', correct: 'supreme self.', wrong: ['king.', 'world.', 'body.'] },
          { start: 'Control of the mind leads to control of the', correct: 'body.', wrong: ['king.', 'wealth.', 'desires.'] },
          { start: 'The yogi who conquers the mind conquers', correct: 'the world.', wrong: ['enemies.', 'wealth.', 'friends.'] },
          { start: 'Inner stillness is the gateway to', correct: 'freedom.', wrong: ['pleasure.', 'fear.', 'power.'] },
          { start: 'The mind can be trained through', correct: 'discipline.', wrong: ['luck.', 'fear.', 'power.'] },
          { start: 'Steady effort overcomes', correct: 'obstacles.', wrong: ['friends.', 'enemies.', 'wealth.'] },
          { start: 'A focused mind perceives', correct: 'truth.', wrong: ['illusion.', 'wealth.', 'fear.'] },
          { start: 'Detachment does not mean indifference; it means', correct: 'freedom.', wrong: ['weakness.', 'fear.', 'ignorance.'] },
          { start: 'Self-control is stronger than', correct: 'external power.', wrong: ['money.', 'enemies.', 'fame.'] },
          { start: 'Those who meditate constantly experience', correct: 'bliss.', wrong: ['fear.', 'conflict.', 'weakness.'] },
          { start: 'The yogi acts without attachment to', correct: 'results.', wrong: ['friends.', 'rituals.', 'power.'] },
          { start: 'Purity of mind leads to', correct: 'wisdom.', wrong: ['wealth.', 'fear.', 'power.'] },
          { start: 'A tranquil mind overcomes', correct: 'suffering.', wrong: ['pleasure.', 'fame.', 'weakness.'] },
          { start: 'Yoga is the path to', correct: 'self-mastery.', wrong: ['wealth.', 'fame.', 'pleasure.'] },
          { start: 'The yogi perceives the same reality in', correct: 'all beings.', wrong: ['friends only.', 'enemies only.', 'kings only.'] },
          { start: 'Mindful action without desire leads to', correct: 'peace.', wrong: ['fear.', 'conflict.', 'power.'] },
          { start: 'The power of yoga lies in', correct: 'self-discipline.', wrong: ['strength.', 'wealth.', 'fame.'] },
          { start: 'Conquering the mind is more difficult than', correct: 'conquering the world.', wrong: ['fighting enemies.', 'gaining wealth.', 'winning power.'] },
          { start: 'A controlled mind cannot be', correct: 'disturbed.', wrong: ['weak.', 'ignored.', 'confused.'] },
          { start: 'Through meditation, the yogi realizes', correct: 'eternal truth.', wrong: ['temporary gains.', 'wealth.', 'power.'] }
        ]
      },
      {
        name: 'Bhartrihari',
        emoji: '📜',
        quotes: [
          { start: 'Speech is the bridge between the', correct: 'mind and the world.', wrong: ['body and the soul.', 'king and his subjects.', 'friends and enemies.'] },
          { start: 'Desire is the root of', correct: 'suffering.', wrong: ['knowledge.', 'power.', 'wealth.'] },
          { start: 'A man who conquers himself is', correct: 'truly wise.', wrong: ['weak.', 'powerful.', 'rich.'] },
          { start: 'Words are powerful; choose them with', correct: 'care.', wrong: ['fear.', 'anger.', 'wealth.'] },
          { start: 'Those who speak without thought cause', correct: 'harm.', wrong: ['joy.', 'wealth.', 'peace.'] },
          { start: 'Pleasure without discipline leads to', correct: 'pain.', wrong: ['freedom.', 'knowledge.', 'success.'] },
          { start: 'A virtuous mind sees the same in', correct: 'all beings.', wrong: ['friends only.', 'enemies only.', 'kings only.'] },
          { start: 'Ignorance is the enemy of', correct: 'wisdom.', wrong: ['strength.', 'wealth.', 'fame.'] },
          { start: 'He who controls speech and thought attains', correct: 'liberation.', wrong: ['fear.', 'power.', 'desire.'] },
          { start: 'Happiness is found within, not in', correct: 'external objects.', wrong: ['wealth.', 'fame.', 'friends.'] },
          { start: 'The wise avoid indulgence in', correct: 'empty pleasures.', wrong: ['food.', 'rituals.', 'study.'] },
          { start: 'Silence is the companion of', correct: 'wisdom.', wrong: ['wealth.', 'power.', 'fear.'] },
          { start: 'He who understands the self transcends', correct: 'suffering.', wrong: ['wealth.', 'power.', 'desire.'] },
          { start: 'Desires are chains that bind the', correct: 'mind.', wrong: ['body.', 'friends.', 'wealth.'] },
          { start: 'A disciplined life brings', correct: 'peace.', wrong: ['power.', 'fame.', 'fear.'] },
          { start: 'Truth is the foundation of', correct: 'all virtue.', wrong: ['wealth.', 'power.', 'pleasure.'] },
          { start: 'Those who understand language grasp', correct: 'reality.', wrong: ['wealth.', 'power.', 'fame.'] },
          { start: 'Control over words is control over', correct: 'the mind.', wrong: ['the world.', 'wealth.', 'friends.'] },
          { start: 'He who renounces desire experiences', correct: 'bliss.', wrong: ['fear.', 'conflict.', 'loss.'] },
          { start: 'The mind is a mirror that reflects', correct: 'truth.', wrong: ['power.', 'wealth.', 'pleasure.'] },
          { start: 'Attachment leads to suffering, detachment leads to', correct: 'freedom.', wrong: ['fear.', 'wealth.', 'power.'] },
          { start: 'He who is humble in speech attains', correct: 'wisdom.', wrong: ['wealth.', 'fame.', 'power.'] },
          { start: 'A wise person speaks only when', correct: 'necessary.', wrong: ['pleasure.', 'angry.', 'desired.'] },
          { start: 'Knowledge without practice is', correct: 'useless.', wrong: ['powerful.', 'wealthy.', 'pleasurable.'] },
          { start: 'The heart free of desire is', correct: 'peaceful.', wrong: ['fearful.', 'angry.', 'weak.'] },
          { start: 'Words can heal or harm; choose', correct: 'carefully.', wrong: ['freely.', 'quickly.', 'easily.'] },
          { start: 'He who conquers anger and greed gains', correct: 'happiness.', wrong: ['power.', 'fear.', 'fame.'] },
          { start: 'The wise live by', correct: 'truth.', wrong: ['wealth.', 'pleasure.', 'fear.'] },
          { start: 'Detach from vanity to find', correct: 'freedom.', wrong: ['power.', 'fame.', 'pleasure.'] },
          { start: 'Speech without meaning is like a', correct: 'bow without an arrow.', wrong: ['river without water.', 'tree without leaves.', 'horse without rider.'] }
        ]
      },
      {
        name: 'Valmiki',
        emoji: '📝',
        quotes: [
          { start: 'A wise man should act without attachment to', correct: 'results.', wrong: ['friends.', 'enemies.', 'fame.'] },
          { start: 'The mind guided by dharma leads to', correct: 'peace.', wrong: ['fear.', 'conflict.', 'wealth.'] },
          { start: 'Righteous action is greater than', correct: 'wealth.', wrong: ['power.', 'pleasure.', 'knowledge.'] },
          { start: 'A person’s character is revealed in', correct: 'difficult times.', wrong: ['wealthy times.', 'happy times.', 'peaceful times.'] },
          { start: 'Virtue and truth are the pillars of', correct: 'a great life.', wrong: ['wealth.', 'power.', 'pleasure.'] },
          { start: 'He who controls his desires gains', correct: 'freedom.', wrong: ['fame.', 'wealth.', 'pleasure.'] },
          { start: 'Speech should be pure, for words have the power to', correct: 'heal or harm.', wrong: ['entertain.', 'confuse.', 'delay.'] },
          { start: 'Even the smallest act of kindness can', correct: 'bring great merit.', wrong: ['go unnoticed.', 'cause weakness.', 'be punished.'] },
          { start: 'A person who respects elders and teachers attains', correct: 'wisdom.', wrong: ['power.', 'fear.', 'pleasure.'] },
          { start: 'Attachment to wealth and pleasure leads to', correct: 'suffering.', wrong: ['joy.', 'freedom.', 'peace.'] },
          { start: 'Courage is tested not in peace, but in', correct: 'battle.', wrong: ['wealth.', 'pleasure.', 'celebration.'] },
          { start: 'A true friend stands by you in', correct: 'adversity.', wrong: ['success only.', 'wealth only.', 'pleasure only.'] },
          { start: 'Actions done with selfish motives yield', correct: 'sorrow.', wrong: ['joy.', 'peace.', 'strength.'] },
          { start: 'One should forgive those who', correct: 'repent.', wrong: ['harm you.', 'ignore you.', 'praise you.'] },
          { start: 'Knowledge gained but not applied is', correct: 'worthless.', wrong: ['powerful.', 'pleasurable.', 'strong.'] },
          { start: 'The wise man chooses companions who are', correct: 'virtuous.', wrong: ['wealthy.', 'powerful.', 'famous.'] },
          { start: 'Anger is the enemy of', correct: 'peace.', wrong: ['strength.', 'knowledge.', 'joy.'] },
          { start: 'Humility is the foundation of', correct: 'greatness.', wrong: ['fame.', 'power.', 'wealth.'] },
          { start: 'He who controls his mind is', correct: 'truly free.', wrong: ['fearful.', 'powerful.', 'wealthy.'] },
          { start: 'The path of dharma may be difficult, but it leads to', correct: 'liberation.', wrong: ['fear.', 'loss.', 'conflict.'] },
          { start: 'A ruler must govern with', correct: 'justice.', wrong: ['fear.', 'power.', 'wealth.'] },
          { start: 'Even the bravest warrior is defeated by', correct: 'lust and anger.', wrong: ['friends.', 'enemies.', 'fear.'] },
          { start: 'One’s words reflect one’s', correct: 'character.', wrong: ['wealth.', 'fame.', 'power.'] },
          { start: 'Greed is the root of', correct: 'all suffering.', wrong: ['all success.', 'all happiness.', 'all knowledge.'] },
          { start: 'A person who follows dharma conquers', correct: 'fear.', wrong: ['friends.', 'enemies.', 'wealth.'] },
          { start: 'True happiness comes from', correct: 'righteous living.', wrong: ['wealth.', 'pleasure.', 'power.'] },
          { start: 'The wise man listens more and', correct: 'speaks less.', wrong: ['speaks more.', 'acts blindly.', 'ignores advice.'] },
          { start: 'Courage combined with virtue is', correct: 'strength.', wrong: ['fame.', 'fear.', 'pleasure.'] },
          { start: 'A heart free from hatred attains', correct: 'peace.', wrong: ['power.', 'fear.', 'wealth.'] }
        ]
      },
      {
        name: 'Jaimini',
        emoji: '📖',
        quotes: [
          { start: 'Actions performed according to dharma yield', correct: 'merit.', wrong: ['fear.', 'loss.', 'conflict.'] },
          { start: 'The consequences of one’s actions are determined by', correct: 'intentions.', wrong: ['wealth.', 'friends.', 'fame.'] },
          { start: 'A person who studies the scriptures with diligence gains', correct: 'wisdom.', wrong: ['power.', 'pleasure.', 'fear.'] },
          { start: 'Knowledge without action is like a', correct: 'tree without fruit.', wrong: ['river without water.', 'house without walls.', 'bird without wings.'] },
          { start: 'Those who follow dharma without attachment attain', correct: 'peace.', wrong: ['fear.', 'sorrow.', 'power.'] },
          { start: 'A person’s destiny is shaped by', correct: 'his actions.', wrong: ['fate alone.', 'friends.', 'wealth.'] },
          { start: 'He who desires only the fruits of his actions suffers', correct: 'pain.', wrong: ['joy.', 'peace.', 'freedom.'] },
          { start: 'Virtue is the guide to', correct: 'liberation.', wrong: ['wealth.', 'power.', 'pleasure.'] },
          { start: 'The wise act without attachment and', correct: 'fear.', wrong: ['greed.', 'envy.', 'delay.'] },
          { start: 'Actions done in ignorance lead to', correct: 'suffering.', wrong: ['wisdom.', 'peace.', 'joy.'] },
          { start: 'A person who controls speech and thought gains', correct: 'freedom.', wrong: ['wealth.', 'fame.', 'power.'] },
          { start: 'The fruits of good deeds are always', correct: 'beneficial.', wrong: ['harmful.', 'uncertain.', 'delayed.'] },
          { start: 'Detachment from desires is the path to', correct: 'liberation.', wrong: ['power.', 'fame.', 'pleasure.'] },
          { start: 'He who meditates constantly over dharma attains', correct: 'clarity.', wrong: ['confusion.', 'fear.', 'loss.'] },
          { start: 'Even small virtuous actions lead to', correct: 'great merit.', wrong: ['insignificance.', 'loss.', 'sorrow.'] },
          { start: 'A wise person chooses companions who are', correct: 'virtuous.', wrong: ['wealthy.', 'powerful.', 'famous.'] },
          { start: 'One should not act without', correct: 'knowledge.', wrong: ['desire.', 'fear.', 'envy.'] },
          { start: 'The mind focused on dharma is', correct: 'steady.', wrong: ['restless.', 'fearful.', 'weak.'] },
          { start: 'Patience and discipline together lead to', correct: 'success.', wrong: ['conflict.', 'loss.', 'fear.'] },
          { start: 'The consequences of actions cannot be avoided by', correct: 'ignorance.', wrong: ['fear.', 'wealth.', 'fame.'] },
          { start: 'A life devoted to dharma is a life of', correct: 'freedom.', wrong: ['pleasure.', 'power.', 'fear.'] },
          { start: 'He who acts with selfish motives binds himself with', correct: 'karma.', wrong: ['wealth.', 'friends.', 'power.'] },
          { start: 'Knowledge of dharma enlightens the', correct: 'mind.', wrong: ['body.', 'king.', 'world.'] },
          { start: 'Virtue is superior to', correct: 'strength.', wrong: ['wealth.', 'fame.', 'pleasure.'] },
          { start: 'One should perform actions without attachment to', correct: 'rewards.', wrong: ['friends.', 'fame.', 'power.'] },
          { start: 'He who understands dharma transcends', correct: 'fear.', wrong: ['wealth.', 'fame.', 'pleasure.'] },
          { start: 'Discipline of thought leads to', correct: 'wisdom.', wrong: ['fear.', 'conflict.', 'pleasure.'] },
          { start: 'The wise see the same reality in', correct: 'all beings.', wrong: ['friends only.', 'enemies only.', 'wealthy people.'] },
          { start: 'Self-control is the key to', correct: 'liberation.', wrong: ['power.', 'fame.', 'pleasure.'] },
          { start: 'Those who follow dharma sincerely are', correct: 'blessed.', wrong: ['cursed.', 'ignored.', 'weak.'] }
        ]
      },
      {
        name: 'Nagarjuna',
        emoji: '☸️',
        quotes: [
          { start: 'All phenomena are empty of', correct: 'inherent existence.', wrong: ['beauty.', 'power.', 'desire.'] },
          { start: 'Nothing arises independently; everything is', correct: 'interdependent.', wrong: ['isolated.', 'eternal.', 'strong.'] },
          { start: 'Attachment and aversion are the roots of', correct: 'suffering.', wrong: ['joy.', 'knowledge.', 'freedom.'] },
          { start: 'The mind perceives duality, but true wisdom sees', correct: 'non-duality.', wrong: ['conflict.', 'pleasure.', 'fear.'] },
          { start: 'Emptiness is not nothingness; it is the absence of', correct: 'inherent self.', wrong: ['value.', 'pain.', 'desire.'] },
          { start: 'One who understands emptiness is free from', correct: 'delusion.', wrong: ['pleasure.', 'fear.', 'power.'] },
          { start: 'All conditioned things are', correct: 'impermanent.', wrong: ['eternal.', 'solid.', 'powerful.'] },
          { start: 'Wisdom arises when one realizes the', correct: 'emptiness of phenomena.', wrong: ['power of kings.', 'pleasure of life.', 'wealth of the world.'] },
          { start: 'Freedom comes from letting go of', correct: 'clinging.', wrong: ['power.', 'friends.', 'fame.'] },
          { start: 'Nothing can exist in isolation; everything is', correct: 'connected.', wrong: ['independent.', 'permanent.', 'weak.'] },
          { start: 'Suffering ceases when the mind sees', correct: 'emptiness.', wrong: ['power.', 'pleasure.', 'fear.'] },
          { start: 'Desire is rooted in', correct: 'ignorance.', wrong: ['wealth.', 'strength.', 'pleasure.'] },
          { start: 'The enlightened mind is free from', correct: 'attachment.', wrong: ['pleasure.', 'power.', 'fear.'] },
          { start: 'All phenomena arise from causes and', correct: 'conditions.', wrong: ['chance.', 'desire.', 'fame.'] },
          { start: 'Realizing the emptiness of self leads to', correct: 'liberation.', wrong: ['fear.', 'wealth.', 'pleasure.'] },
          { start: 'The path of wisdom is free from', correct: 'delusion.', wrong: ['pleasure.', 'fear.', 'wealth.'] },
          { start: 'All distinctions exist only in', correct: 'concepts.', wrong: ['reality.', 'nature.', 'power.'] },
          { start: 'The wise do not cling to', correct: 'views.', wrong: ['wealth.', 'pleasure.', 'friends.'] },
          { start: 'Compassion arises when one sees the interconnectedness of all', correct: 'beings.', wrong: ['kings.', 'women.', 'enemies.'] },
          { start: 'Nothing can be grasped as', correct: 'permanent.', wrong: ['powerful.', 'pleasurable.', 'eternal.'] },
          { start: 'The mind that perceives emptiness is', correct: 'peaceful.', wrong: ['fearful.', 'confused.', 'restless.'] },
          { start: 'Attachment binds; understanding emptiness', correct: 'frees.', wrong: ['controls.', 'ignores.', 'creates.'] },
          { start: 'All dharmas are empty; their essence is', correct: 'dependence.', wrong: ['power.', 'pleasure.', 'fear.'] },
          { start: 'He who knows emptiness transcends', correct: 'suffering.', wrong: ['wealth.', 'power.', 'pleasure.'] },
          { start: 'The mind enlightened by emptiness sees', correct: 'truth.', wrong: ['illusion.', 'fear.', 'wealth.'] },
          { start: 'Non-duality is the state beyond', correct: 'opposites.', wrong: ['pleasure.', 'wealth.', 'power.'] },
          { start: 'Liberation comes from understanding', correct: 'interdependence.', wrong: ['isolation.', 'power.', 'fear.'] },
          { start: 'The path of meditation reveals the', correct: 'emptiness of all phenomena.', wrong: ['strength of kings.', 'wealth of the world.', 'pleasure of life.'] },
          { start: 'Peace arises when the mind is free from', correct: 'clinging.', wrong: ['wealth.', 'fear.', 'power.'] },
          { start: 'The ultimate wisdom is the realization of', correct: 'emptiness.', wrong: ['pleasure.', 'power.', 'fear.'] }
        ]
      },
    ]
  },
  {
    id: 'mesopotamia',
    name: 'Mesopotamia (Evidence-Based)',
    emoji: '🧱',
    color: 0x6d4c41,
    colorHex: '#38bea3',
    bg: '#0a0a0a',
    authors: [
      {
        name: 'Code of Hammurabi (Authentic Legal Document)',
        emoji: '⚖️',
        quotes: [
          { 
            start: "The Code of Hammurabi, contains 282 laws that governed Babylonian society, with the famous lex talionis principle (\"an eye for an eye\") documented as law 196: \"If a man put out the eye of another man, his eye shall be.\"",
            "correct": "put out",
            "wrong": ["restore.", "strike.", "blind."] 
          },
          { 
            start: "The law \"If a man destroys the eye of another man, they shall destroy his eye\" (law 196) demonstrates the principle of retaliation but also reveals that the code was stratified because different punishments applied based on",
            "correct": "social class.",
            "wrong": ["gender only.", "no distinctions.", "purely personal factors."] 
          },
          { 
            start: "The law \"If a builder builds a house and it collapses and kills the owner, the builder shall be put to death\" (law 229) shows that the code held professionals accountable for their work, and reflected the code's emphasis on",
            "correct": "accountability.",
            "wrong": ["arbitrary punishment.", "no standards.", "no responsibility."] 
          },
          { 
            start: "The law \"If a son strikes his father, his hands shall be cut off\" (law 195) reflects the code's emphasis on family hierarchy and the protection of parental authority, showing that the code served to",
            "correct": "reinforce hierarchy.",
            "wrong": ["promote equality.", "challenge authority.", "eliminate tradition."] 
          },
          { 
            start: "The law \"If a man steals property, he shall be put to death\" represents a capital crime only for certain types of theft (particularly of temple or state property), not all theft, indicating that the code",
            "correct": "distinguished carefully.",
            "wrong": ["treated all equally.", "made no distinctions.", "was uniform."] 
          },
          { 
            start: "The Code of Hammurabi was not a legal code in the modern sense but rather a collection of case laws and precedents compiled to demonstrate the king's justice and authority, serving to",
            "correct": "legitimize rule.",
            "wrong": ["regulate behavior.", "have no political purpose.", "lack ideological function."] 
          }
        ]
      },
      {
        name: 'Epic of Gilgamesh (Literary & Mythological Text)',
        emoji: '📖',
        quotes: [
          { 
            start: "The Epic of Gilgamesh, dating to the late 2nd millennium BCE (though with earlier sources), is one of the oldest known literary works and contains multiple versions and translations, indicating that the text requires",
            "correct": "careful interpretation.",
            "wrong": ["no analysis.", "simple reading.", "surface understanding."] 
          },
          { 
            start: "The famous passage often translated as \"Life which you look for you will never find, for when the gods created man they let death be his share\" (Tablet X, from Siduri's speech) advises accepting human mortality and enjoying",
            "correct": "life.",
            "wrong": ["chaos.", "war.", "games."] 
          },
          { 
            start: "The advice \"Fill your belly with good things; day and night, night and day, dance and be merry, let your clothes be fresh, bathe yourself in water, cherish the little child that holds your hand\" is attributed to",
            "correct": "Siduri.",
            "wrong": ["Shamash.", "Enkidu.", "Utnapishtim."] 
          },
          { 
            start: "The epic's central themes—friendship (Gilgamesh and Enkidu), mortality, the search for immortality, and the flood narrative—are well-documented and represent authentic Mesopotamian",
            "correct": "concerns.",
            "wrong": ["facts.", "events.", "history."] 
          },
          { 
            start: "The flood narrative in the Epic of Gilgamesh shares similarities with the biblical flood account but also significant differences, indicating that the flood narrative represents",
            "correct": "recurring theme.",
            "wrong": ["unique event.", "single source.", "biblical invention."] 
          }
        ]
      },
      {
        name: 'Sumerian Wisdom Literature (ETCSL Collection)',
        emoji: '🧠',
        quotes: [
          { 
            start: "Sumerian wisdom literature, preserved in cuneiform and translated by the Electronic Text Corpus of Sumerian Literature (ETCSL) project, includes works like the Instructions of Shuruppak, showing that authentic Sumerian wisdom texts",
            "correct": "exist.",
            "wrong": ["disappeared.", "never existed.", "were destroyed."] 
          },
          { 
            start: "The proverb \"He who possesses much silver may be happy, he who possesses much barley may be happy, but he who has nothing may sleep\" cannot be verified in the ETCSL collection, indicating that this quote is likely",
            "correct": "modern invention.",
            "wrong": ["authentic translation.", "verified source.", "documented proverb."] 
          },
          { 
            start: "Authentic Sumerian proverbs, documented in cuneiform texts, address practical concerns like agriculture, trade, and proper conduct, such as warnings against laziness and praise for wisdom, showing that Sumerian wisdom literature reflects",
            "correct": "practical values.",
            "wrong": ["abstract theory.", "mystical knowledge.", "impractical ideals."] 
          },
          { 
            start: "The Instructions of Shuruppak, is preserved in multiple cuneiform copies and has been translated by scholars, demonstrating that verified Sumerian wisdom texts are",
            "correct": "accessible.",
            "wrong": ["lost.", "unknown.", "inaccessible."] 
          }
        ]
      },
      {
        name: 'Akkadian Proverbs & Wisdom (Documented Sources)',
        emoji: '📜',
        quotes: [
          { 
            start: "Akkadian wisdom literature, preserved in cuneiform and including works like the Counsels of Wisdom and various proverb collections, represents authentic Mesopotamian philosophical thinking, though specific proverbs must be",
            "correct": "verified carefully.",
            "wrong": ["accepted blindly.", "assumed true.", "taken literally."] 
          },
          { 
            start: "The proverb \"A man who is wise is known by his deeds, not by his words\" appears in various forms in ancient wisdom literature from multiple cultures (not uniquely Akkadian), showing that such sentiments, while authentic to ancient wisdom, may",
            "correct": "appear widely.",
            "wrong": ["originate uniquely.", "derive from one source.", "belong exclusively."] 
          },
          { 
            start: "Authentic Akkadian wisdom texts address topics including proper conduct toward superiors and inferiors, the importance of wisdom and self-control, documented in scholarly translations of cuneiform sources, showing that verified Akkadian wisdom reflects",
            "correct": "practical concerns.",
            "wrong": ["abstract theory.", "mystical knowledge.", "impractical ideals."] 
          },
          { 
            start: "The phrase \"Speak little, listen much; understanding comes in silence\" appears in various ancient wisdom traditions but cannot be verified as a specific Akkadian proverb in cuneiform sources, indicating that popular wisdom sayings often",
            "correct": "lack attribution.",
            "wrong": ["are verified.", "are documented.", "are authenticated."] 
          }
        ]
      },
      {
        name: 'Assyrian Royal Inscriptions & Wisdom',
        emoji: '🗡️',
        quotes: [
          { 
            start: "Assyrian royal inscriptions, preserved in cuneiform and dating from the Assyrian Empire's height (particularly 9th-7th centuries BCE), document the deeds, military campaigns, providing authentic historical material, though these are primarily",
            "correct": "propaganda.",
            "wrong": ["objective.", "neutral.", "unbiased."] 
          },
          { 
            start: "Wisdom attributed to Assyrian kings reflects values documented in royal inscriptions, though specific \"proverbs\" attributed to Assyrian figures often lack verification in primary sources, indicating that Assyrian values can be",
            "correct": "reconstructed carefully.",
            "wrong": ["assumed easily.", "accepted blindly.", "taken literally."] 
          },
          { 
            start: "The proverb \"A strong city is built not with walls, but with loyal citizens\" reflects a common theme in ancient political philosophy but cannot be verified as an authentic Assyrian proverb, showing that popular proverbs often represent",
            "correct": "modern sentiments.",
            "wrong": ["ancient wisdom.", "verified sources.", "historical truth."] 
          },
          { 
            start: "Assyrian military strategy, documented in royal inscriptions describing campaigns, sieges, and military innovations, demonstrates the sophistication of Assyrian military",
            "correct": "organization.",
            "wrong": ["power.", "villages.", "society."] 
          }
        ]
      },
      {
        name: 'Babylonian Astronomy & Mathematical Texts',
        emoji: '🔢',
        quotes: [
          { 
            start: "Babylonian achievements in mathematics and astronomy, demonstrate sophisticated knowledge of geometry, algebra, and celestial observation, showing that Babylonian intellectual achievements were grounded in",
            "correct": "empirical knowledge.",
            "wrong": ["pure magic.", "mystical belief.", "superstitious practice."] 
          },
          { 
            start: "The famous phrase \"The life of man is like a river; it flows to the sea of death\" represents a common metaphor in ancient wisdom traditions but cannot be verified, indicating that popular philosophical sayings often",
            "correct": "lack sourcing.",
            "wrong": ["are verified.", "are documented.", "are authenticated."] 
          },
          { 
            start: "Babylonian wisdom literature, when verified in cuneiform sources like the Babylonian Theodicy, provides genuine insight into Babylonian philosophical thinking, showing that authentic Babylonian wisdom texts are",
            "correct": "accessible.",
            "wrong": ["lost.", "destroyed.", "unknown."] 
          }
        ]
      },
      {
        name: 'Mesopotamian Religion & Cosmology',
        emoji: '🌍',
        quotes: [
          { 
            start: "Mesopotamian religious texts, including the Enuma Elish (creation myth) and other mythological narratives, were preserved in cuneiform and provide insight into Mesopotamian cosmology and religious beliefs, though these texts should be understood as",
            "correct": "mythology.",
            "wrong": ["history.", "documentation.", "facts."] 
          },
          { 
            start: "The concept of the gods in Mesopotamian religion, depicted them as powerful but not omnipotent, as sometimes acting against human interests, and as requiring human service and sacrifice, showing that Mesopotamian theology represented",
            "correct": "complexity.",
            "wrong": ["benevolence.", "omnipotence.", "perfection."] 
          },
          { 
            start: "The role of priests and temples in Mesopotamian society, documented in administrative texts and inscriptions, was central to the functioning of the state, as temples controlled significant resources, indicating that religious institutions were",
            "correct": "fundamental.",
            "wrong": ["marginal.", "powerless.", "irrelevant."] 
          }
        ]
      },
      {
        name: 'Mesopotamian Social Structure & Law',
        emoji: '⚖️',
        quotes: [
          { 
            start: "Mesopotamian society was hierarchically organized with the king at the top, followed by nobles and priests, merchants and craftspeople, farmers, and enslaved persons, as documented in legal codes, showing that Mesopotamian societies were",
            "correct": "stratified.",
            "wrong": ["equal.", "unified.", "classless."] 
          },
          { 
            start: "The role of women in Mesopotamian society, documented in legal codes, included property ownership in some cases and legal standing, though women's legal status was generally subordinate to men's, indicating that women had",
            "correct": "limited rights.",
            "wrong": ["full equality.", "no restrictions.", "complete freedom."] 
          },
          { 
            start: "Slavery in Mesopotamian societies, documented in legal codes and administrative texts, was central to the economy, with enslaved persons obtained through debt bondage, war, and trade, showing that enslaved labor was",
            "correct": "essential.",
            "wrong": ["forbidden.", "nonexistent.", "unnecessary."] 
          }
        ]
      },
    ]
  },
  {
    id: 'japan',
    name: 'Ancient Japan (Evidence-Based)',
    emoji: '⛩️',
    color: 0xc62828,
    colorHex: '#c62828',
    bg: '#0a0a0a',
    authors: [
      {
        name: 'Miyamoto Musashi (Swordmaster & Historical Figure)',
        emoji: '⚔️',
        quotes: [
          { 
            start: "Miyamoto Musashi (1584-1645) was a legendary swordmaster documented in historical records, but the quotes attributed to him come primarily from his Book of Five Rings (Gorin no Sho), written late in his life, indicating that his exact words are",
            "correct": "filtered through transmission.",
            "wrong": ["directly verified.", "purely authentic.", "completely unchanged."] 
          },
          { 
            start: "The Book of Five Rings, Musashi's treatise on strategy and the way of the warrior, was written around 1645 and primarily discusses swordsmanship, strategy, and martial philosophy as applicable to individual combat, showing that the text is",
            "correct": "specialized work.",
            "wrong": ["universal guide.", "general wisdom.", "abstract philosophy."] 
          },
          { 
            start: "Musashi's famous duel with Sasaki Kojirou, described in biographical accounts, demonstrates his skill but the details are subject to later embellishment and hagiography, indicating that historical accounts of Musashi contain",
            "correct": "legendary elements.",
            "wrong": ["pure facts.", "no exaggeration.", "complete accuracy."] 
          },
          { 
            start: "Many quotes popularly attributed to Musashi, including \"There is nothing outside of yourself\" and \"Do not sleep under a roof,\" cannot be verified in the Book of Five Rings, suggesting that popular Musashi quotes often come from",
            "correct": "later inventions.",
            "wrong": ["authenticated sources.", "verified texts.", "documented statements."] 
          },
          { 
            start: "Musashi's philosophy emphasized direct perception rather than abstract theorizing, which is authentically reflected in the Book of Five Rings' focus on concrete technique and strategy, showing that verified Musashi teachings emphasize",
            "correct": "empirical mastery.",
            "wrong": ["abstract theory.", "philosophical speculation.", "intellectual contemplation."] 
          }
        ]
      },
      {
        name: 'Matsuo Bashō (Poet & Historical Figure)',
        emoji: '🌸',
        quotes: [
          { 
            start: "Matsuo Bashō (1644-1694) was a renowned haiku poet whose works are preserved in collections and whose diaries documenting his travels survive, providing authentic records of his thoughts and poetry, though the diaries were",
            "correct": "edited later.",
            "wrong": ["written today.", "never compiled.", "purely fictional."] 
          },
          { 
            start: "The famous haiku \"Old silent pond / A frog jumps into the pond / Splash! Silence again\" (Furuike ya / Kawazu tobikomu / Mizu no oto) is documented in multiple sources and represents authentic Bashō work, but English translations",
            "correct": "vary in accuracy.",
            "wrong": ["are identical.", "match perfectly.", "are consistent."] 
          },
          { 
            start: "Bashō's philosophy emphasized direct observation of nature and the principle of \"karumi\" (lightness/levity), documented in his diaries and poetry, showing that Bashō's authentic philosophical positions can be",
            "correct": "reconstructed from sources.",
            "wrong": ["completely lost.", "entirely invented.", "never documented."] 
          },
          { 
            start: "Quotes attributed to Bashō such as \"Do not seek to follow in the footsteps of the wise\" appear in later biographical compilations but may represent editorial interpretation, indicating that popular Bashō quotes require",
            "correct": "careful verification.",
            "wrong": ["blind acceptance.", "no checking.", "automatic belief."] 
          },
          { 
            start: "Bashō's actual haiku works, documented in collections like Oku no Hosomichi (The Narrow Road to the Deep North), reflect his genuine poetic vision and can be consulted in reliable translations, demonstrating that authentic Bashō material is",
            "correct": "accessible.",
            "wrong": ["inaccessible.", "completely lost.", "permanently hidden."] 
          }
        ]
      },
      {
        name: 'Tokugawa Ieyasu (Shogun & Historical Figure)',
        emoji: '🏯',
        quotes: [
          { 
            start: "Tokugawa Ieyasu (1543-1616) was the founder of the Tokugawa Shogunate that ruled Japan for over 250 years, and his historical importance is well-documented in contemporary sources and historical records, though quotes attributed to him come from",
            "correct": "later sources.",
            "wrong": ["contemporary records.", "direct transcripts.", "verified documentation."] 
          },
          { 
            start: "Ieyasu's political philosophy, emphasized stability, hierarchical order, and long-term strategy rather than immediate conquest, showing that his actual philosophy can be inferred from",
            "correct": "his actions.",
            "wrong": ["popular quotes.", "legendary accounts.", "invented sayings."] 
          },
          { 
            start: "The quote \"Life is like unto a long journey with a heavy burden\" attributed to Ieyasu cannot be verified in contemporary sources and may represent later editorial invention or paraphrase, indicating that popular Ieyasu quotes require",
            "correct": "careful verification.",
            "wrong": ["blind acceptance.", "no questioning.", "automatic belief."] 
          },
          { 
            start: "Ieyasu's actual writings and documented statements, provide insight into his thinking on governance and strategy, though these are less commonly quoted than popular aphorisms, showing that authentic Ieyasu material is",
            "correct": "overshadowed.",
            "wrong": ["widely celebrated.", "commonly known.", "frequently quoted."] 
          }
        ]
      },
      {
        name: 'Yamamoto Tsunetomo (Bushidō Philosopher)',
        emoji: '🌑',
        quotes: [
          { 
            start: "Yamamoto Tsunetomo (1659-1719) was a samurai who served the Saga Domain and whose thoughts on bushidō (the way of the samurai) were recorded by his student Hasegawa Dokuzan, indicating that Tsunetomo's words are",
            "correct": "filtered through interpretation.",
            "wrong": ["directly transcribed.", "purely authentic.", "unmediated records."] 
          },
          { 
            start: "The Hagakure, was not widely known until the 20th century and has been subject to reinterpretation, particularly by Japanese militarists in the 1930s-1940s who used it to support militaristic ideology, showing that the Hagakure's reception has been",
            "correct": "shaped by context.",
            "wrong": ["unchanging.", "static interpretation.", "never reinterpreted."] 
          },
          { 
            start: "The famous opening \"The way of the samurai is found in death\" (Bushido to iu wa, shinu koto to mituke keri) is authentically documented in the Hagakure, showing that verified Hagakure quotes are",
            "correct": "contextual.",
            "wrong": ["self-explanatory.", "transparent meaning.", "needing no analysis."] 
          },
          { 
            start: "Tsunetomo's philosophy emphasized loyalty to one's lord and the acceptance of death as part of the samurai path, documented in the Hagakure, indicating that authentic Tsunetomo philosophy is",
            "correct": "accessible carefully.",
            "wrong": ["inaccessible.", "completely lost.", "permanently distorted."] 
          }
        ]
      },
      {
        name: 'Takeda Shingen (Warlord & Military Strategist)',
        emoji: '🦅',
        quotes: [
          { 
            start: "Takeda Shingen (1521-1573) was a powerful daimyo (feudal lord) whose military campaigns and strategies are documented in historical records and contemporary accounts, though quotes attributed to him come from",
            "correct": "later compilations.",
            "wrong": ["direct transcripts.", "contemporary records.", "verified sources."] 
          },
          { 
            start: "The famous motto \"Swift as the wind, silent as the forest, fierce as fire, immovable as the mountain\" is attributed to Shingen but its historical authenticity is disputed, indicating that popular quotes attributed to Shingen should be",
            "correct": "treated cautiously.",
            "wrong": ["accepted completely.", "trusted entirely.", "believed automatically."] 
          },
          { 
            start: "Shingen's actual military strategy, emphasized organization, supply lines, and careful positioning rather than reckless aggression, showing that his actual strategic philosophy can be",
            "correct": "inferred from actions.",
            "wrong": ["ignored entirely.", "dismissed completely.", "overlooked fully."] 
          },
          { 
            start: "Shingen's conflict with Uesugi Kenshin, the neighboring warlord, though the famous \"Battle of Kawanakajima\" accounts include legendary elements, indicating that historical events involving Shingen contain elements of",
            "correct": "legend and fact.",
            "wrong": ["pure invention.", "complete fabrication.", "total mythology."] 
          }
        ]
      },
      {
        name: 'Zen Buddhism & Philosophy (Complex Historical Development)',
        emoji: '☯️',
        quotes: [
          { 
            start: "Zen Buddhism, which developed in China as Chan Buddhism and was transmitted to Japan beginning in the 12th century, emphasizes direct experience and meditation (zazen) over textual study, meaning that Zen teachings",
            "correct": "accumulated gradually.",
            "wrong": ["appeared suddenly.", "came from one person.", "have no history."] 
          },
          { 
            start: "Famous Zen sayings like \"The obstacle is the path\" appear in collections of Zen anecdotes (koans) but often lack specific attribution and may represent later compilations, indicating that popular Zen quotes are",
            "correct": "uncertain in origin.",
            "wrong": ["completely verified.", "precisely documented.", "clearly sourced."] 
          },
          { 
            start: "Zen influence on Japanese culture, is well-documented and represents a genuine historical synthesis of Buddhist ideas with Japanese cultural traditions, indicating that Zen's historical influence is real but quotes are",
            "correct": "uncertain.",
            "wrong": ["completely fabricated.", "entirely invented.", "purely mythical."] 
          }
        ]
      },
      {
        name: 'Samurai Code & Bushidō (Historical Development)',
        emoji: '🗡️',
        quotes: [
          { 
            start: "The concept of bushidō (the way of the samurai), was formally systematized and codified as a philosophical system primarily during the Edo period (1603-1868), indicating that bushidō as a coherent ideology developed during",
            "correct": "peace.",
            "wrong": ["warfare.", "conquest.", "expansion."] 
          },
          { 
            start: "The samurai code emphasized loyalty to one's lord (daimyo), martial skill, honor, and acceptance of death, values documented in historical accounts and codified in works like the Hagakure, showing that samurai values",
            "correct": "evolved.",
            "wrong": ["stagnated.", "disappeared.", "reversed."] 
          },
          { 
            start: "The practice of seppuku (ritual suicide by cutting one's abdomen) was part of samurai culture and is documented in historical records, indicating that extreme samurai practices were",
            "correct": "limited.",
            "wrong": ["universal.", "permanent.", "widespread."] 
          },
          { 
            start: "Popular representations of samurai culture in modern media often romanticize or misrepresent historical bushidō, showing that modern popular culture has",
            "correct": "distorted it.",
            "wrong": ["preserved it.", "documented it.", "verified it."] 
          }
        ]
      },
      {
        name: 'Japanese Literature & Poetic Tradition',
        emoji: '📖',
        quotes: [
          { 
            start: 'Japanese poetic traditions including tanka (31-syllable poems) and haiku (17-syllable poems) developed over centuries with documented practitioners and collections, providing authentic material for',
            "correct": "study.",
            "wrong": ["glass production.", "textile manufacturing.", "mining operations."] 
          },
          { 
            start: 'The most reliable way to encounter authentic Japanese philosophy and aesthetics is through consultation of primary sources in reliable translations, including verified collections of poetry, historical documents, and',
            "correct": "philosophical texts.",
            "wrong": ["internet memes.", "greeting cards.", "social media posts."] 
          },
          { 
            start: 'Japanese aesthetic principles like wabi-sabi (the beauty of imperfection and impermanence), documented in historical sources and artistic practice, represent genuine cultural values that can be studied directly rather than through',
            "correct": "invented quotes.",
            "wrong": ["authentic texts.", "primary sources.", "verified records."] 
          }
        ]
      },
      {
        name: 'Historical Context & Social Structure',
        emoji: '🏛️',
        quotes: [
          { 
            start: 'Medieval and early modern Japan (12th-19th centuries) was organized around feudal relationships between daimyo (lords) and samurai (warriors), with a separate merchant and peasant class, documented in historical records and',
            "correct": "administrative documents.",
            "wrong": ["production records.", "textile manufacturing logs.", "mining operation reports."] 
          },
          { 
            start: 'The role of women in Japanese society varied by class and period, with elite women sometimes holding significant power, while commoner and peasant women had more',
            "correct": "restricted roles.",
            "wrong": ["military authority.", "political leadership.", "religious dominance."] 
          },
          { 
            start: 'The introduction of Buddhism and Chinese cultural elements into Japan, beginning in the 6th century and continuing through the medieval period, resulted in cultural synthesis rather than',
            "correct": "cultural replacement.",
            "wrong": ["complete isolation.", "total rejection.", "unchanged tradition."] 
          }
        ]
      },
    ]
  },
  {
    id: 'norse',
    name: 'Norse & Viking (Evidence-Based)',
    emoji: '⚡',
    color: 0x4a6fa5,
    colorHex: '#4a6fa5',
    bg: '#0a0a0a',
    authors: [
      {
        name: 'Hávamál (Codex Regius - Actual Norse Text)',
        emoji: '🐦',
        quotes: [
          { 
            start: 'The Hávamál, a poem preserved in the 13th-century Codex Regius, presents wisdom attributed to Odin but was composed during the Viking Age or possibly earlier, reflecting that the text represents Viking Age values and',
            "correct": "worldview.",
            "wrong": ["glass production techniques.", "textile manufacturing methods.", "mining operations."] 
          },
          { 
            start: 'The stanza \"Cattle die, kinsmen die, every man is mortal: but the good name never dies of one who has done well\" reflects the Viking cultural emphasis on achieving lasting fame through',
            "correct": "deeds.",
            "wrong": ["wealth accumulation.", "artistic creation.", "scholarly achievement."] 
          },
          { 
            start: 'The Hávamál\'s advice about hospitality (\"a guest needs water, towel, and welcome\") and the dangers of over-trust (\"never trust one whose father or brother you have slain\") reflects the social realities of',
            "correct": "Viking Age Scandinavia.",
            "wrong": ["Ancient Egypt.", "Medieval Japan.", "Classical Rome."] 
          },
          { 
            start: 'The advice \"wake early if you want another man\'s life or land\" directly acknowledges that Viking Age societies were characterized by competition for resources, raiding, and',
            "correct": "territorial conflict.",
            "wrong": ["peaceful cooperation.", "religious harmony.", "artistic collaboration."] 
          },
          { 
            start: 'The Hávamál\'s emphasis on moderate wisdom (\"moderately wise a man should be, not too crafty\") and warnings against excessive cleverness reflect that Norse culture valued practical wisdom over',
            "correct": "theoretical knowledge.",
            "wrong": ["military strength.", "seafaring ability.", "commercial success."] 
          }
        ]
      },
      {
        name: 'Viking Age Society & Social Structure',
        emoji: '👑',
        quotes: [
          { 
            start: 'Viking Age Scandinavian society (ca. 790-1066 CE) was hierarchically organized into jarl (jarls/nobles), karls (freemen), and thralls (enslaved persons), with the jarls controlling land, military forces, and',
            "correct": "trade networks.",
            "wrong": ["glass production.", "textile manufacturing.", "mining operations."] 
          },
          { 
            start: 'The role of women in Viking Age society included property ownership (in some cases), the management of households and farms, religious leadership as völva (seers), and',
            "correct": "legal standing in courts.",
            "wrong": ["military command.", "seafaring expeditions.", "political governance."] 
          },
          { 
            start: 'The practice of slavery (thralldom) was central to Viking Age economies, with enslaved persons obtained through raiding, war, trade, and debt bondage, providing labor for agriculture and',
            "correct": "domestic work.",
            "wrong": ["artistic creation.", "scholarly pursuits.", "religious ceremonies."] 
          },
          { 
            start: 'The complex web of kinship obligations in Viking Age societies, created systems where injury to one person created obligations for entire family groups, showing that Viking Age societies functioned through networks of',
            "correct": "mutual obligation.",
            "wrong": ["complete independence.", "individual autonomy.", "personal isolation."] 
          }
        ]
      },
      {
        name: 'Viking Raids & Expansion (Archaeological & Documentary Evidence)',
        emoji: '🛡️',
        quotes: [
          { 
            start: 'The Viking raids on European targets, including monasteries, trading centers, and coastal settlements, combined with archaeological evidence of destruction, showing that Viking expansion involved organized',
            "correct": "military campaigns.",
            "wrong": ["glass production.", "textile manufacturing.", "religious conversions."] 
          },
          { 
            start: 'The Viking attacks on monasteries like Lindisfarne (793 CE) and Iona targeted institutions known to hold wealth in the form of precious metals, reliquaries, and',
            "correct": "manuscripts.",
            "wrong": ["mining equipment.", "agricultural tools.", "pottery vessels."] 
          },
          { 
            start: 'The Viking settlement of Iceland (beginning ca. 874 CE), documented in medieval sources like Landnámabók and confirmed by archaeological evidence, demonstrates that Vikings engaged in deliberate colonization and',
            "correct": "settlement.",
            "wrong": ["piracy.", "permanent raiding.", "seasonal occupation."] 
          },
          { 
            start: 'The establishment of Viking trading posts and settlements in Russia (Varangian routes through present-day Russia to Constantinople and Baghdad), shows that Viking activities included extensive trade networks and long-distance',
            "correct": "commerce.",
            "wrong": ["military conquest.", "religious missions.", "artistic exchange."] 
          },
          { 
            start: 'The Norman settlement of Normandy (early 10th century), established through agreement with the Frankish king and documented in contemporary sources, demonstrates that some Viking expansion was integrated into existing',
            "correct": "political structures.",
            "wrong": ["glass factories.", "textile workshops.", "mining colonies."] 
          }
        ]
      },
      {
        name: 'Norse Shipbuilding & Maritime Technology',
        emoji: '⛵',
        quotes: [
          { 
            start: 'The Viking ships (longships), excavated at archaeological sites like Gokstad, Oseberg, and Skuldelev, reveal sophisticated construction techniques including oak construction, clinker-built planking, and',
            "correct": "shallow drafts.",
            "wrong": ["glass panels.", "textile sails.", "iron anchors."] 
          },
          { 
            start: 'The Oseberg ship burial (ca. 834 CE), excavated in Norway and containing a wealthy woman\'s grave goods including carved wooden items and household goods, shows that Viking Age societies had sophisticated',
            "correct": "craftsmanship.",
            "wrong": ["mining operations.", "glass production.", "agricultural methods."] 
          },
          { 
            start: 'Viking ships\' ability to navigate both open ocean and shallow rivers allowed Vikings to penetrate deep into continental Europe and establish settlements in places that were difficult for other medieval powers to',
            "correct": "reach.",
            "wrong": ["fortify.", "abandon.", "destroy."] 
          }
        ]
      },
      {
        name: 'Norse Religion & Cosmology',
        emoji: '🌍',
        quotes: [
          { 
            start: 'Norse religion, preserved in texts like the Poetic Edda and Prose Edda (compiled in 13th century Iceland but reflecting older traditions), presents a cosmology centered on Yggdrasil (world tree), nine realms, and gods like Odin, Thor, and',
            "correct": "Freyja.",
            "wrong": ["Zeus.", "Poseidon.", "Apollo."] 
          },
          { 
            start: 'The concept of Ragnarök (apocalyptic destruction and renewal), prominent in Norse mythology, reflects a cyclical worldview where death and rebirth are inevitable, possibly related to seasonal cycles in Scandinavian',
            "correct": "climate.",
            "wrong": ["glass production.", "textile manufacturing.", "mining operations."] 
          },
          { 
            start: 'The religious emphasis on honor in battle and the concept of Valhalla (afterlife for those who die in combat), documented in literary sources, appears to reflect the cultural values of a warrior society where martial prowess was',
            "correct": "highly valued.",
            "wrong": ["discouraged.", "forbidden.", "prohibited."] 
          },
          { 
            start: 'The conversion of Scandinavia to Christianity beginning in the 10th century, documented in contemporary sources and',
            "correct": "archaeological evidence.",
            "wrong": ["glass artifacts.", "textile fragments.", "mining tools."] 
          },
          { 
            start: 'The preservation of Norse mythology in medieval Icelandic texts written long after Christianization means that the myths were transmitted through a Christian lens and may reflect post-Viking',
            "correct": "religious syncretism.",
            "wrong": ["purely pagan beliefs.", "unchanged traditions.", "original practices."] 
          }
        ]
      },
      {
        name: 'Viking Age Trade Networks',
        emoji: '💰',
        quotes: [
          { 
            start: 'Archaeological evidence and contemporary sources document extensive Viking trade networks extending from Baghdad to',
            "correct": "the Atlantic.",
            "wrong": ["the Arctic.", "Australia.", "the Sahara Desert."] 
          },
          { 
            start: 'The discovery of Arab coins (dirhams) in Scandinavian hoards, with concentrations increasing during the 8th-10th centuries, indicates that Vikings had access to',
            "correct": "Islamic commercial networks.",
            "wrong": ["glass manufacturing centers.", "textile production workshops.", "mining operations."] 
          },
          { 
            start: 'The establishment of trading centers like Haithabu (in present-day Germany), Birka (Sweden), and Novgorod (Russia), documented archaeologically and in historical sources, demonstrates that Vikings created sophisticated',
            "correct": "commercial centers.",
            "wrong": ["religious monasteries.", "military fortresses.", "artistic studios."] 
          },
          { 
            start: 'The role of Viking merchants (kaupmen) in establishing trade routes and commercial networks, shows that Viking societies had specialized merchants who conducted commerce alongside warriors and',
            "correct": "farmers.",
            "wrong": ["sailors.", "poets.", "priests."] 
          }
        ]
      },
      {
        name: 'Ragnar Lothbrok (Historical Legend vs. Fictional Construction)',
        emoji: '🪓',
        quotes: [
          { 
            start: 'Ragnar Lothbrok (\"Lothbrok the legendary hero\") appears in multiple sources including the Saga of Ragnar Lothbrok and other Norse sagas as a great warrior and king, but modern scholars debate whether he was a historical person or a',
            "correct": "purely legendary character.",
            "wrong": ["glass manufacturer.", "textile weaver.", "mining engineer."] 
          },
          { 
            start: 'The legendary account of Ragnar\'s conquest of England and his death in a snake pit is presented in Norse sagas but has no corroboration in contemporary sources or',
            "correct": "archaeological evidence.",
            "wrong": ["Christian writings.", "Islamic records.", "Japanese chronicles."] 
          },
          { 
            start: 'If Ragnar was a historical figure, he likely lived in the 9th century, suggesting that legendary sagas may contain kernels of historical events transformed through',
            "correct": "storytelling.",
            "wrong": ["complete fabrication.", "deliberate lies.", "total invention."] 
          }
        ]
      },
      {
        name: 'Viking Age Warfare & Military Organization',
        emoji: '⚔️',
        quotes: [
          { 
            start: 'Viking warfare, reconstructed from archaeological evidence, written sources, and saga accounts, involved shield-wall formations, hand-to-hand combat with swords and axes, and psychological intimidation through',
            "correct": "noise.",
            "wrong": ["glass production.", "textile weaving.", "mining operations."] 
          },
          { 
            start: 'The Great Heathen Army\'s invasion of England (865-878 CE), documented in the Anglo-Saxon Chronicle, shows that Vikings conducted organized military campaigns with strategic objectives including conquest and',
            "correct": "settlement.",
            "wrong": ["artistic pursuits.", "scholarly research.", "religious conversion."] 
          },
          { 
            start: 'The resistance to Vikings by figures like King Alfred the Great, documented in contemporary sources, demonstrates that Viking expansion faced organized military opposition and that their success was not',
            "correct": "inevitable.",
            "wrong": ["predictable.", "guaranteed.", "assured."] 
          }
        ]
      },
      {
        name: 'Scandinavian Political Development',
        emoji: '👑',
        quotes: [
          { 
            start: 'The unification of Norway under figures like Harald Fairhair (late 9th century), shows that Viking Age Scandinavia experienced political consolidation as regional kingdoms merged into',
            "correct": "larger units.",
            "wrong": ["smaller tribes.", "isolated settlements.", "independent city-states."] 
          },
          { 
            start: 'The relationship between Viking raiding and internal Scandinavian politics, suggested by some historians, indicates that the need to control resources and maintain warrior followings may have motivated some Vikings to seek power through',
            "correct": "raiding.",
            "wrong": ["glass production.", "textile manufacturing.", "peaceful trade."] 
          },
          { 
            start: 'The adoption of Christianity by Scandinavian rulers in the 10th-11th centuries, documented in sources and reflected in archaeological evidence of church building, served political purposes including integration with',
            "correct": "Christian European powers.",
            "wrong": ["Islamic empires.", "Buddhist kingdoms.", "Hindu states."] 
          }
        ]
      },
      {
        name: 'Runic Writing & Literacy',
        emoji: '📜',
        quotes: [
          { 
            start: 'Runic inscriptions, found on stones, weapons, and portable objects throughout the Viking Age Scandinavian region, were used for short inscriptions, commemorations, and possibly magical or',
            "correct": "religious purposes.",
            "wrong": ["glass production.", "textile dyeing.", "mining operations."] 
          },
          { 
            start: 'The extensive use of the Latin alphabet in Viking Age sources, particularly for legal documents and religious texts, demonstrates that as Scandinavian societies became more complex and Christianized, literacy in Latin became',
            "correct": "important.",
            "wrong": ["obsolete.", "forgotten.", "prohibited."] 
          },
          { 
            start: 'The limited literacy of most Viking Age people, means that the preservation of sagas and stories through oral tradition before written compilation centuries later introduces possibilities for change and',
            "correct": "alteration.",
            "wrong": ["complete accuracy.", "perfect preservation.", "exact reproduction."] 
          }
        ]
      },
      {
        name: 'Archaeological Evidence & Material Culture',
        emoji: '🏺',
        quotes: [
          { 
            start: 'Archaeological excavations at Viking Age sites like Hedeby, Birka, and Gotland reveal extensive trade networks indicated by artifacts including Byzantine coins, Islamic glass, and',
            "correct": "rare woods.",
            "wrong": ["Arctic ice.", "desert sand.", "oceanic salt."] 
          },
          { 
            start: 'The discovery of Viking weapons including swords, axes, and spears with sophisticated metalwork demonstrates that Norse metalworking technology was advanced and produced',
            "correct": "high-quality weapons.",
            "wrong": ["artistic sculptures.", "religious reliquaries.", "textile patterns."] 
          },
          { 
            start: 'The evidence of extensive house settlements and farm structures from the Viking Age shows that most Vikings were farmers and settlers, not raiders, and raiding was',
            "correct": "seasonal.",
            "wrong": ["permanent.", "prohibited.", "ceremonial."] 
          }
        ]
      },
      {
        name: 'Saga Literature & Historical Reliability',
        emoji: '📖',
        quotes: [
          { 
            start: 'The Norse sagas, including the Íslendingasögur (Sagas of Icelanders) and other works, were composed and written down primarily in the',
            "correct": "13th-14th centuries.",
            "wrong": ["9th century.", "20th century.", "5th century."] 
          },
          { 
            start: 'The sagas contain anachronisms, internal contradictions, and elements of folklore and legend mixed with possible historical kernels, showing that the sagas must be treated as literary sources requiring careful analysis to extract possible',
            "correct": "historical information.",
            "wrong": ["glass production techniques.", "textile manufacturing methods.", "mining technology."] 
          },
          { 
            start: 'The debate among scholars about the historical reliability of specific saga accounts demonstrates that saga narratives cannot be used as straightforward historical sources without',
            "correct": "corroboration.",
            "wrong": ["complete acceptance.", "blind faith.", "total rejection."] 
          }
        ]
      },
      {
        name: 'Women in Viking Age Society',
        emoji: '👩',
        quotes: [
          { 
            start: 'The evidence for women\'s roles in Viking Age society, including the Oseberg ship burial containing grave goods indicating a woman of high status, shows that women in Viking societies had more legal authority than their counterparts in many medieval',
            "correct": "European societies.",
            "wrong": ["communities.", "villages.", "mining colonies."] 
          },
          { 
            start: 'The role of völva (female seers/shamans) in Viking Age religious practice, documented in sagas and supported by archaeological evidence of female religious practitioners, demonstrates that women held important religious and',
            "correct": "ceremonial roles.",
            "wrong": ["military positions.", "seafaring duties.", "mining operations."] 
          },
          { 
            start: 'Women\'s ability to own property, conduct business, and manage farms during the absence of men, documented in saga accounts and legal sources, indicates that women had economic agency and could',
            "correct": "act independently.",
            "wrong": ["sail the oceans.", "control politics.", "command armies."] 
          }
        ]
      },
      {
        name: 'The End of the Viking Age & Integration into European Society',
        emoji: '⚔️',
        quotes: [
          { 
            start: 'The end of the Viking Age is conventionally dated to 1066 CE (Battle of Stamford Bridge and Norman Conquest of England), which marks the point when Scandinavian societies had been',
            "correct": "Christianized.",
            "wrong": ["industrialized.", "democratized.", "alphabetized."] 
          },
          { 
            start: 'The transformation of Vikings into European nobility, particularly evident in the Norman conquest of England and the Varangian influence in Constantinople, demonstrates that Vikings adapted to and integrated into existing',
            "correct": "medieval power structures.",
            "wrong": ["glass manufacturing systems.", "textile production networks.", "mining operations."] 
          },
          { 
            start: 'The legacy of the Viking Age included the settlement of Iceland, Greenland, and the brief colonization of',
            "correct": "North America (Vinland).",
            "wrong": ["Australia.", "Japan.", "the Sahara Desert."] 
          }
        ]
      }
    ]
  },
  {
    id: "ottoman",
    name: "Ottoman Empire",
    emoji: "🕌",
    color: 0x1b5e20,
    colorHex: "#1b5e20",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Osman I & Early Ottoman Expansion",
        emoji: "👑",
        quotes: [
          { 
            start: "Osman I, the founder of the Ottoman Empire in the late 13th century, began as the leader of a small Turkish principality (beylik) in Anatolia that gradually expanded through military conquest and strategic",
            "correct": "marriages.",
            "wrong": ["glass production.", "textile weaving.", "mining operations."] 
          },
          { 
            start: "The early Ottomans, led by Osman and his successors, systematized military organization and administrative structures that would distinguish them from other Anatolian principalities, allowing them to develop",
            "correct": "institutional frameworks.",
            "wrong": ["seafaring fleets.", "artistic traditions.", "scholarly institutions."] 
          },
          { 
            start: "The Ottomans' crossing into the Balkans in the 14th century marked a crucial expansion that transformed them from an Anatolian power into a",
            "correct": "European power.",
            "wrong": ["African empire.", "Arctic nation.", "oceanic dominion."] 
          }
        ]
      },
      {
        name: "Mehmed II & the Conquest of Constantinople",
        emoji: "⚔️",
        quotes: [
          { 
            start: "The conquest of Constantinople in 1453 by Mehmed II represented a watershed moment in world history, ending over a thousand years of Byzantine rule and demonstrating that the Ottoman Empire possessed superior military technology, organization, and",
            "correct": "resources.",
            "wrong": ["glass production.", "textile manufacturing.", "mining wealth."] 
          },
          { 
            start: "Mehmed II's use of massive bombards and gunpowder artillery at Constantinople showed that early Ottoman military innovations with firearms and siege weaponry were crucial to their",
            "correct": "conquests.",
            "wrong": ["artistic achievements.", "scholarly pursuits.", "commercial ventures."] 
          },
          { 
            start: "The fall of Constantinople allowed the Ottomans to control the crucial strait connecting Europe and Asia and to establish their capital in Istanbul, which meant that they secured a geopolitically strategic position controlling",
            "correct": "trade routes.",
            "wrong": ["Arctic passages.", "desert pathways.", "forest trails."] 
          }
        ]
      },
      {
        name: "The Devshirme System & Janissaries",
        emoji: "🎖️",
        quotes: [
          { 
            start: "The Ottoman devshirme system, which recruited boys from conquered Christian territories for training as elite soldiers (Janissaries) or administrators, was a sophisticated mechanism for converting subject populations into",
            "correct": "loyal imperial servants.",
            "wrong": ["glass manufacturers.", "textile weavers.", "mining laborers."] 
          },
          { 
            start: "The Janissaries, the elite military corps formed through devshirme, became the Ottoman Empire's most formidable",
            "correct": "fighting force.",
            "wrong": ["artistic school.", "scholarly institution.", "merchant guild."] 
          },
          { 
            start: "The devshirme system, though based on forced recruitment, created opportunities for social mobility among non-Muslim subjects who could rise to positions of high administrative and",
            "correct": "military rank.",
            "wrong": ["religious authority.", "royal marriage.", "imperial lineage."] 
          }
        ]
      },
      {
        name: "Ottoman Administrative Organization",
        emoji: "📜",
        quotes: [
          { 
            start: "The Ottoman administrative system was based on a hierarchical bureaucracy headed by the",
            "correct": "Sultan.",
            "wrong": ["Pope.", "Pharaoh.", "Shogun."] 
          },
          { 
            start: "The Ottoman millet system, which granted religious minorities (Christians, Jews, Armenians) legal autonomy in personal and religious matters, was a pragmatic approach to governing a religiously diverse empire that allowed the Ottomans to",
            "correct": "rule diverse populations.",
            "wrong": ["eliminate all resistance.", "force religious conversion.", "suppress all minorities."] 
          },
          { 
            start: "Ottoman governors (pashas) were appointed by the central government and could be removed and reassigned, unlike the hereditary nobility of many European states, which meant that the Ottoman Empire could maintain",
            "correct": "tighter central control.",
            "wrong": ["local autonomy.", "regional independence.", "hereditary authority."] 
          }
        ]
      },
      {
        name: "Military Innovations & The Sipahi",
        emoji: "🏇",
        quotes: [
          { 
            start: "The Ottoman military system, featuring both the elite Janissaries and the sipahi cavalry supported by a land-grant (timar) system, created a standing army and cavalry force capable of sustained",
            "correct": "imperial expansion.",
            "wrong": ["glass production.", "textile weaving.", "mining operations."] 
          },
          { 
            start: "The Ottoman adoption of firearms and gunpowder artillery earlier and more systematically than many European powers gave them a crucial military advantage during the 15th and 16th centuries, allowing them to dominate",
            "correct": "regional conflicts.",
            "wrong": ["seafaring expeditions.", "artistic competitions.", "scholarly debates."] 
          },
          { 
            start: "The transformation of the Ottoman military from mounted archer-based to firearms-based combat reflected strategic adaptation to changing military technologies, which demonstrates that the Ottomans were responsive to",
            "correct": "military innovation.",
            "wrong": ["agricultural improvement.", "textile development.", "glass manufacturing."] 
          }
        ]
      },
      {
        name: "Suleiman the Magnificent & Imperial Zenith",
        emoji: "👑",
        quotes: [
          { 
            start: "Suleiman I (r. 1520-1566), known as 'the Magnificent' in the West and 'the Lawgiver' in Turkish tradition, expanded Ottoman territorial control to its greatest extent and established legal codes that defined",
            "correct": "imperial governance.",
            "wrong": ["glass production.", "textile manufacturing.", "mining operations."] 
          },
          { 
            start: "During Suleiman's reign, the Ottoman Empire controlled vast territories spanning three continents—from Hungary to Yemen and from North Africa to Iraq—making it one of the largest and most powerful states of the",
            "correct": "16th century.",
            "wrong": ["Arctic regions.", "oceanic islands.", "desert settlements."] 
          },
          { 
            start: "Suleiman's legal reforms, including the kanun (Ottoman law code) system that standardized administrative and legal procedures, represented a commitment to rational governance and",
            "correct": "predictable administration.",
            "wrong": ["artistic creation.", "scholarly debate.", "commercial expansion."] 
          }
        ]
      },
      {
        name: "Ottoman Naval Power & Mediterranean Dominance",
        emoji: "⛵",
        quotes: [
          { 
            start: "The Ottoman development of a powerful navy under admirals like Barbarossa transformed them into a Mediterranean naval power capable of controlling sea trade, allowing them to challenge Christian European",
            "correct": "naval powers.",
            "wrong": ["glass manufacturers.", "textile producers.", "mining operations."] 
          },
          { 
            start: "The Battle of Lepanto in 1571, while tactically a Christian naval victory, did not significantly alter Ottoman naval dominance because the Ottomans quickly",
            "correct": "rebuilt their fleet.",
            "wrong": ["abandoned seafaring.", "ceased naval operations.", "withdrew from the Mediterranean."] 
          },
          { 
            start: "Ottoman control of Mediterranean trade routes and ports gave them significant economic advantages and allowed them to tax and monitor commercial activity, contributing to",
            "correct": "Ottoman wealth.",
            "wrong": ["military defeat.", "economic poverty.", "cultural decline."] 
          }
        ]
      },
      {
        name: "Ottoman Culture & Architecture",
        emoji: "🏛️",
        quotes: [
          { 
            start: "Ottoman architectural achievements, including the Topkapi Palace, the Blue Mosque, and the Sultan Ahmed Mosque, reflected a synthesis of Islamic, Byzantine, and Persian architectural traditions adapted to",
            "correct": "Ottoman purposes.",
            "wrong": ["glass production.", "textile weaving.", "mining operations."] 
          },
          { 
            start: "Ottoman literature, poetry, and calligraphy flourished under imperial patronage, with poets and scholars supported by the sultan's court, showing that Ottoman elites invested in cultural and intellectual pursuits alongside",
            "correct": "military expansion.",
            "wrong": ["seafaring exploration.", "glass manufacturing.", "agricultural innovation."] 
          },
          { 
            start: "The development of Ottoman Turkish language and literature created a cultural identity distinct from both Arab and Persian traditions, which helped to forge a sense of Ottoman identity that transcended ethnic and",
            "correct": "religious boundaries.",
            "wrong": ["geographic territories.", "military hierarchies.", "economic classes."] 
          }
        ]
      },
      {
        name: "Economic Organization & Trade",
        emoji: "💰",
        quotes: [
          { 
            start: "The Ottoman Empire controlled crucial trade routes connecting Europe, Asia, and Africa, including the overland Silk Road routes and Mediterranean sea routes, which gave them significant economic power through",
            "correct": "taxation.",
            "wrong": ["glass production.", "textile manufacturing.", "mining operations."] 
          },
          { 
            start: "Ottoman state monopolies on certain goods (like salt) and control over trade through merchants' guilds and regulations reflected systematic economic organization designed to maximize state revenue and",
            "correct": "prevent economic competition.",
            "wrong": ["encourage artistic creation.", "promote scholarly learning.", "advance agricultural innovation."] 
          },
          { 
            start: "The Ottoman economy, though initially strong, began to face challenges in the 16th and 17th centuries as European colonial expansion diverted trade away from",
            "correct": "Ottoman-controlled routes.",
            "wrong": ["Arctic regions.", "forest settlements.", "glass factories."] 
          }
        ]
      },
      {
        name: "Ottoman Decline & Internal Challenges",
        emoji: "📉",
        quotes: [
          { 
            start: "The Ottoman Empire's military power declined relative to European states in the 17th and 18th centuries due to factors including military innovations in Europe, persistent wars on multiple fronts, and",
            "correct": "internal fiscal problems.",
            "wrong": ["increased glass production.", "textile expansion.", "mining wealth."] 
          },
          { 
            start: "The Janissaries, originally the Ottoman Empire's most formidable military force, became increasingly a conservative force opposed to military reforms, eventually leading to",
            "correct": "military stagnation.",
            "wrong": ["artistic flourishing.", "commercial expansion.", "scholarly advancement."] 
          },
          { 
            start: "Ottoman governance in the later centuries was sometimes destabilized by rapid succession of sultans, court intrigues, and competition between imperial officials, which weakened the",
            "correct": "centralized control.",
            "wrong": ["seafaring capability.", "textile production.", "mining operations."] 
          }
        ]
      },
      {
        name: "Relations with Christian Europe",
        emoji: "⛪",
        quotes: [
          { 
            start: "Ottoman-European relations in the early modern period were characterized by military competition, with the Ottomans frequently victorious in the 15th and 16th centuries, though by the 17th and 18th centuries European powers increasingly",
            "correct": "gained the upper hand.",
            "wrong": ["lost all influence.", "abandoned the region.", "disappeared entirely."] 
          },
          { 
            start: "The Ottoman threat to European security, particularly the sieges of Vienna in 1529 and 1683, galvanized European coalitions against Ottoman expansion and influenced European",
            "correct": "political alliances.",
            "wrong": ["textile production.", "glass manufacturing.", "mining operations."] 
          },
          { 
            start: "Ottoman-European diplomatic and cultural exchanges, show that despite military competition, the Ottoman Empire engaged in regular diplomatic and commercial relations with",
            "correct": "Christian European states.",
            "wrong": ["Arctic settlements.", "oceanic nomads.", "desert tribes."] 
          }
        ]
      },
      {
        name: "Religious Governance & the Sultanate",
        emoji: "🕌",
        quotes: [
          { 
            start: "The Ottoman sultan held both political and religious authority, claiming to be the protector of Islam and the guardian of the holy cities of Mecca and Medina after their conquest in",
            "correct": "1517.",
            "wrong": ["1066.", "1492.", "1776."] 
          },
          { 
            start: "The Ottoman chief mufti (Shaykh al-Islam) issued legal opinions (fatwas) that interpreted Islamic law for the empire, showing that Ottoman religious governance involved institutional structures interpreting and applying",
            "correct": "Islamic law.",
            "wrong": ["Christian doctrine.", "Buddhist teachings.", "Hindu philosophy."] 
          },
          { 
            start: "Ottoman treatment of non-Muslim subjects through the millet system, while maintaining Islamic state authority and Muslim privilege, was pragmatic rather than",
            "correct": "egalitarian.",
            "wrong": ["authoritarian.", "oppressive.", "hierarchical."] 
          }
        ]
      },
      {
        name: "The Long Decline & Modern Reform",
        emoji: "🔄",
        quotes: [
          { 
            start: "The Ottoman Empire's territorial losses accelerated in the 19th century as European powers expanded in North Africa and the",
            "correct": "Balkans.",
            "wrong": ["Arctic regions.", "glass-producing areas.", "textile workshops."] 
          },
          { 
            start: "Ottoman reform movements in the 19th century, including the Tanzimat reforms attempting to modernize administration and military, reflected an effort to adapt Ottoman institutions to survive",
            "correct": "changing circumstances.",
            "wrong": ["ocean exploration.", "glass manufacturing.", "mining operations."] 
          },
          { 
            start: "The collapse of the Ottoman Empire at the end of World War I, after centuries of territorial loss and military defeats, marked the end of one of world history's longest-lasting",
            "correct": "imperial states.",
            "wrong": ["seafaring nations.", "textile producers.", "glass factories."] 
          }
        ]
      }
    ]
  },
  {
    id: "israel",
    name: "Ancient Israel & Judah",
    emoji: "✡️",
    color: 0x00796b,
    colorHex: "#00796b",
    bg: "#0a0a0a",
    authors: [
      {
        name: "David (Biblical Narrative & Archaeological Evidence)",
        emoji: "👑",
        quotes: [
          {
            start: "The Tel Dan Stele — a 9th-century BCE Aramaic inscription — mentions the 'House of David,' providing rare extrabiblical evidence that David was",
            correct: "a historical figure, not purely legendary.",
            wrong: ["a mythological invention entirely.", "a Babylonian god figure.", "identical to the biblical portrait."]
          },
          {
            start: "Archaeological evidence suggests David's actual kingdom was considerably smaller than the biblical account portrays — reflecting that ancient texts often",
            correct: "magnify rulers for theological purposes.",
            wrong: ["record history with scientific precision.", "understate royal achievements.", "confirm all biblical narratives exactly."]
          },
          {
            start: "The accounts of David's conflicts with the Philistines and his establishment of Jerusalem contain historical elements mixed with",
            correct: "later legendary embellishment.",
            wrong: ["complete modern fabrication.", "purely astronomical symbolism.", "Greek mythological borrowings."]
          },
          {
            start: "David's story — shepherd to king, poet to warrior — became foundational to Jewish, Christian, and Islamic traditions, showing that",
            correct: "historical figures can transcend their historical context.",
            wrong: ["the biblical account is purely fictional.", "all ancient kings were equally celebrated.", "archaeology always confirms religious texts."]
          }
        ]
      },
      {
        name: "Solomon (Biblical Splendor vs. Archaeological Reality)",
        emoji: "👑",
        quotes: [
          {
            start: "No archaeological evidence has been found confirming Solomon's temple as described in the Bible — suggesting either the account is idealized or that",
            correct: "later construction destroyed all traces.",
            wrong: ["the temple definitely never existed.", "Babylonians removed all evidence deliberately.", "Egyptian records confirm every detail."]
          },
          {
            start: "The biblical portrait of Solomon as ruler of a vast empire contrasts with archaeological evidence of a small Iron Age Levantine kingdom — showing that",
            correct: "biblical texts served theological more than historical purposes.",
            wrong: ["archaeology always disproves the Bible.", "Solomon was purely mythological.", "the Bible is a reliable historical document."]
          },
          {
            start: "The Wisdom of Solomon tradition — presenting him as history's wisest ruler — reflects the Bible's interest in",
            correct: "theological idealization of the monarchy.",
            wrong: ["precise biographical documentation.", "Greek philosophical influence on Judaism.", "accurate economic record-keeping."]
          }
        ]
      },
      {
        name: "The United & Divided Monarchy (Historical Reconstruction)",
        emoji: "⚖️",
        quotes: [
          {
            start: "The 'United Kingdom' under Saul, David, and Solomon is presented in the Bible as a golden age — but archaeological evidence suggests it was",
            correct: "a modest Iron Age chiefdom at most.",
            wrong: ["larger than the Egyptian empire.", "confirmed in every detail by excavation.", "identical to the Greek city-state system."]
          },
          {
            start: "The split into northern Israel (capital Samaria) and southern Judah (capital Jerusalem) is confirmed by extrabiblical sources — making it",
            correct: "one of the most historically secure biblical events.",
            wrong: ["a purely theological narrative.", "unconfirmed by any external evidence.", "a later invention by Jewish scribes."]
          },
          {
            start: "The northern kingdom of Israel was likely more populous and powerful than Judah — yet the Bible, written from a Judean perspective, focuses on",
            correct: "Judah's theological significance.",
            wrong: ["Israel's military superiority.", "purely economic trade records.", "Phoenician cultural influence."]
          },
          {
            start: "Assyrian inscriptions naming Israelite and Judean kings — Ahab, Jehu, Hezekiah — prove that these rulers were",
            correct: "historical figures known to neighboring empires.",
            wrong: ["purely invented by later scribes.", "identical to how the Bible portrays them.", "unknown outside of Jewish tradition."]
          }
        ]
      },
      {
        name: "The Kingdom of Judah & Assyrian Pressure",
        emoji: "👑",
        quotes: [
          {
            start: "The Siloam Tunnel inscription — carved in Jerusalem around 700 BCE — and Assyrian records of Sennacherib's siege confirm that",
            correct: "Hezekiah was a real king facing real threats.",
            wrong: ["the siege was purely legendary.", "Jerusalem was never actually attacked.", "Assyrian records are unreliable."]
          },
          {
            start: "Sennacherib's prism records his siege of Jerusalem but claims tribute rather than conquest — a discrepancy with the Bible that shows",
            correct: "both sides recorded events favorably.",
            wrong: ["the Bible is always more reliable.", "Assyrian records are always accurate.", "the siege definitely never happened."]
          },
          {
            start: "King Josiah's religious reforms — centralizing worship in Jerusalem and eliminating rural shrines — served both theological and",
            correct: "political centralization purposes.",
            wrong: ["purely spiritual individual motivations.", "Assyrian imperial demands.", "Babylonian cultural requirements."]
          },
          {
            start: "Josiah's death at Megiddo fighting Pharaoh Necho (609 BCE) ended Judah's brief independence, showing that",
            correct: "small kingdoms were always vulnerable to imperial powers.",
            wrong: ["religious reform guarantees political success.", "Egypt was always Judah's ally.", "biblical kings always died peacefully."]
          }
        ]
      },
      {
        name: "The Babylonian Destruction & Exile",
        emoji: "🏛️",
        quotes: [
          {
            start: "Nebuchadnezzar's destruction of Jerusalem in 586 BCE is confirmed by both the Bible and Babylonian administrative records — one of the best-documented events in",
            correct: "ancient Near Eastern history.",
            wrong: ["purely mythological tradition.", "medieval Christian invention.", "Greek historical speculation."]
          },
          {
            start: "The exile of Judean elites to Babylon — while most people remained in the land — fundamentally reshaped Israelite religion by forcing it to function",
            correct: "without a temple or homeland.",
            wrong: ["without any form of worship.", "under Babylonian religious requirements.", "identically to pre-exile practice."]
          },
          {
            start: "Much of the Hebrew Bible was likely compiled or edited during and after the Babylonian exile — meaning the Bible we have reflects",
            correct: "theology shaped by catastrophic national defeat.",
            wrong: ["purely pre-exile royal court records.", "objective historical documentation.", "Babylonian scribal traditions."]
          },
          {
            start: "Cyrus the Great's decree allowing exiles to return (538 BCE) reflected Persian imperial policy, not divine intervention — though the Bible presents it as",
            correct: "God using a foreign king to fulfill his purpose.",
            wrong: ["a military Israelite victory.", "purely accidental Persian policy.", "proof that Cyrus converted to Judaism."]
          }
        ]
      },
      {
        name: "Religious Development & Monotheism",
        emoji: "🕯️",
        quotes: [
          {
            start: "Archaeological finds — household idols, inscriptions mentioning 'Yahweh and his Asherah' — confirm that pre-exilic Israelites often practiced",
            correct: "polytheism alongside Yahweh worship.",
            wrong: ["strict biblical monotheism always.", "purely Canaanite paganism.", "Greek-style philosophical deism."]
          },
          {
            start: "Exclusive monotheism — worshipping only Yahweh — developed gradually through prophetic challenges, royal reforms, and especially",
            correct: "the trauma of the Babylonian exile.",
            wrong: ["sudden divine revelation at Sinai.", "Greek philosophical influence alone.", "Egyptian religious reform borrowings."]
          },
          {
            start: "The Hebrew prophets challenged kings and priests by claiming divine authority — establishing a tradition where",
            correct: "moral law could override political power.",
            wrong: ["priests always controlled prophets.", "kings were always religiously obedient.", "prophecy was purely poetic entertainment."]
          },
          {
            start: "The Torah's dietary laws, Sabbath observance, and circumcision became markers of Jewish identity precisely because they were",
            correct: "practices that distinguished Jews in diaspora.",
            wrong: ["borrowed from Babylonian religion.", "invented after the New Testament.", "identical to Egyptian priestly codes."]
          }
        ]
      },
      {
        name: "Archaeological Evidence & Historical Reconstruction",
        emoji: "🏺",
        quotes: [
          {
            start: "The Tel Dan Stele, Mesha Stele, and Siloam Tunnel inscription provide the primary extrabiblical evidence for Israelite and Judean history — all discovered within the last",
            correct: "150 years of archaeology.",
            wrong: ["500 years of Christian scholarship.", "3,000 years of Jewish tradition.", "2,000 years of Greek records."]
          },
          {
            start: "The absence of evidence for a massive Exodus from Egypt — no Egyptian records, no archaeological sites, no Sinai encampments for 600,000 people — suggests the Exodus story is",
            correct: "theological narrative more than literal history.",
            wrong: ["definitively proven by recent excavations.", "confirmed by all Egyptian sources.", "irrelevant to Jewish religious identity."]
          },
          {
            start: "Minimalist scholars argue archaeology disproves most of the Bible; maximalists argue it confirms it — the truth is that the Bible and archaeology address",
            correct: "different types of questions.",
            wrong: ["identical factual claims.", "purely contradictory realities.", "only archaeological questions."]
          }
        ]
      },
      {
        name: "Israelite Warfare & Military Organization",
        emoji: "⚔️",
        quotes: [
          {
            start: "Israelite military organization reflected typical Iron Age Levantine practice — chariots for elites, infantry conscripts, and city-based fortifications — not fundamentally different from",
            correct: "neighboring Canaanite and Aramean states.",
            wrong: ["Roman legion organization.", "Greek hoplite warfare.", "Egyptian chariot-only armies."]
          },
          {
            start: "Extrabiblical sources confirm Israelite and Judean kings fought in the regional power politics of the Levant — making them",
            correct: "typical small Iron Age kingdoms.",
            wrong: ["uniquely powerful regional empires.", "purely peaceful religious communities.", "military equals of Assyria."]
          },
          {
            start: "Assyria's destruction of northern Israel (722 BCE) and Babylon's destruction of Judah (586 BCE) show that small kingdoms cannot permanently resist",
            correct: "the organized military of major empires.",
            wrong: ["internal religious reforms.", "prophetic moral authority.", "divine protection indefinitely."]
          }
        ]
      },
      {
        name: "Social Structure & Daily Life",
        emoji: "🏛️",
        quotes: [
          {
            start: "Archaeological evidence from Israelite houses, storage jars, and ostraca (pottery inscriptions) reveals a society of",
            correct: "farmers, herders, and artisans — not temple-centered elites.",
            wrong: ["wealthy merchants dominating society.", "purely nomadic tribal peoples.", "philosophically sophisticated urban elites."]
          },
          {
            start: "Biblical law codes — Deuteronomy, Leviticus — regulate slavery, debt, and women's rights, showing that these institutions existed and required",
            correct: "legal management, not just moral condemnation.",
            wrong: ["immediate total abolition.", "Greek philosophical justification.", "purely ceremonial acknowledgment."]
          },
          {
            start: "Women in ancient Israel had fewer legal rights than men — yet figures like Deborah the judge and Hulda the prophetess appear as authoritative in texts that",
            correct: "reflect a more complex social reality.",
            wrong: ["were entirely invented later.", "show women were always equal.", "prove the Bible is unreliable."]
          }
        ]
      },
      {
        name: "Religious Reforms & Textual Development",
        emoji: "📖",
        quotes: [
          {
            start: "Josiah's Deuteronomic Reform — destroying rural shrines and centralizing worship at Jerusalem — served both religious and",
            correct: "political power-consolidation purposes.",
            wrong: ["purely personal spiritual motivation.", "Assyrian imperial requirements.", "Babylonian cultural demands."]
          },
          {
            start: "The Documentary Hypothesis identifies four source traditions (J, E, D, P) compiled into the Torah — suggesting the Bible was",
            correct: "edited across centuries by multiple authors.",
            wrong: ["written by Moses at Sinai.", "composed in a single generation.", "entirely authored by Babylonian scribes."]
          },
          {
            start: "The Dead Sea Scrolls (discovered 1947) contain biblical manuscripts 1,000 years older than previous copies — revealing",
            correct: "both textual stability and significant variations.",
            wrong: ["that the Bible was unchanged across millennia.", "that all modern Bibles are inaccurate.", "confirmation of every biblical narrative."]
          }
        ]
      },
      {
        name: "Historical Assessment & Legacy",
        emoji: "📜",
        quotes: [
          {
            start: "Ancient Israel and Judah were minor Levantine kingdoms — yet their religious texts became foundational to",
            correct: "Judaism, Christianity, and Islam.",
            wrong: ["Greek philosophy and Roman law.", "Babylonian and Persian religion.", "Egyptian and Phoenician culture."]
          },
          {
            start: "The Babylonian exile transformed Israelite religion into Judaism — a portable, text-based faith that could survive",
            correct: "without land, temple, or political power.",
            wrong: ["only with continuous military victory.", "only through priestly temple ritual.", "only in its ancestral homeland."]
          },
          {
            start: "The scholarly tension between biblical narrative and archaeological evidence reflects a broader truth: ancient peoples wrote texts to",
            correct: "find meaning, not document history precisely.",
            wrong: ["deceive future generations deliberately.", "satisfy modern historical standards.", "record facts with journalistic accuracy."]
          }
        ]
      }
    ]
  },
  {
    id: "maurya",
    name: "Maurya Empire",
    emoji: "☸️",
    color: 0x8b5e3c,
    colorHex: "#8b5e3c",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Chandragupta Maurya (As Recorded by Megasthenes & Later Sources)",
        emoji: "👑",
        quotes: [
          {
            start: "I overthrew the Nanda dynasty and founded the Maurya Empire by recognizing that military victory required immediate follow-up through",
            correct: "sound administrative systems.",
            wrong: ["Greek-style democratic councils.", "purely religious legitimacy.", "nomadic tribal alliances."]
          },
          {
            start: "Pataliputra became the imperial capital — a center from which the vast empire could be",
            correct: "governed and taxed efficiently.",
            wrong: ["purely religiously celebrated.", "explored by sea expeditions.", "defended from underground."]
          },
          {
            start: "My reliance on Chanakya showed that military conquest had to be combined with political intelligence and",
            correct: "ruthless administrative skill.",
            wrong: ["Buddhist spiritual virtue.", "Greek philosophical learning.", "purely priestly religious authority."]
          },
          {
            start: "Efficient tax extraction from conquered territories sustained military campaigns — showing that expansion depended on",
            correct: "economic organization, not just armies.",
            wrong: ["divine religious blessing alone.", "purely voluntary tributary payments.", "simple agricultural surplus."]
          },
          {
            start: "My abdication and conversion to Jainism — ending life as an ascetic — shows that the man who built India's first empire ultimately rejected",
            correct: "worldly power and violence.",
            wrong: ["Buddhist philosophical ideas.", "all forms of taxation.", "the city of Pataliputra."]
          }
        ]
      },
      {
        name: "Chanakya / Kautilya (The Arthashastra)",
        emoji: "📜",
        quotes: [
          {
            start: "The Arthashastra advocates that the ruler use spies, deception, and strategic marriages — a pragmatic view where ethics serve the state's",
            correct: "survival, not the other way around.",
            wrong: ["purely spiritual development.", "Greek philosophical ideals.", "Brahmin priestly approval."]
          },
          {
            start: "An extensive spy network monitoring officials and nobles served one clear purpose:",
            correct: "detecting and preventing rebellion.",
            wrong: ["encouraging commercial trade.", "promoting Buddhist dharma.", "measuring agricultural yields."]
          },
          {
            start: "The Mandala doctrine — classifying neighbors as natural enemies and enemies' enemies as natural allies — reflects the insight that alliances are determined by",
            correct: "strategic position, not friendship.",
            wrong: ["shared religious traditions.", "common cultural heritage.", "mutual artistic tastes."]
          },
          {
            start: "Advising rulers to use conciliation, gifts, discord, and force as needed shows that successful governance requires",
            correct: "flexibility, not rigid moral principle.",
            wrong: ["purely military coercion.", "exclusively diplomatic negotiation.", "absolute religious observance."]
          },
          {
            start: "The Arthashastra's emphasis on economic prosperity as the foundation of military power reflects the insight that",
            correct: "armies require funded treasuries.",
            wrong: ["poetry inspires greater loyalty.", "religious faith replaces material wealth.", "trade always causes political instability."]
          },
          {
            start: "Chanakya's advice on preventing ministers from accumulating independent power reflects his core belief that the greatest threat to any ruler comes from",
            correct: "powerful subordinates, not foreign enemies.",
            wrong: ["ordinary peasant farmers.", "Buddhist religious monks.", "Silk Road merchant caravans."]
          }
        ]
      },
      {
        name: "Ashoka the Great (Transformation & Moral Governance)",
        emoji: "☸️",
        quotes: [
          {
            start: "The Kalinga war killed an estimated 100,000 people — a scale of destruction that transformed me from a conquering emperor into",
            correct: "an advocate of non-violence.",
            wrong: ["a purely military strategist.", "an opponent of all taxation.", "a worshipper of Brahmin gods."]
          },
          {
            start: "My edicts — inscribed on rocks and pillars across the subcontinent — are among the earliest surviving examples of a ruler addressing",
            correct: "his subjects directly in their own languages.",
            wrong: ["purely foreign diplomatic audiences.", "only the Brahmin priestly class.", "exclusively military commanders."]
          },
          {
            start: "Adopting Buddhism and promoting Dhamma served both spiritual and political purposes — creating an imperial ideology that emphasized",
            correct: "moral conduct over military glory.",
            wrong: ["military conquest as sacred duty.", "Brahmin ritual supremacy.", "purely economic productivity."]
          },
          {
            start: "Dhammamahattas — officers of moral righteousness — were posted across the empire to promote justice and ethical conduct, showing that I tried to govern through",
            correct: "institutional virtue, not just fear.",
            wrong: ["purely military garrisons.", "Brahmin priestly networks.", "commercial tax collectors."]
          },
          {
            start: "Tolerating multiple religious traditions — Buddhism, Jainism, Brahmanism, Ajivikas — while personally following Buddhism showed that",
            correct: "pragmatic tolerance serves imperial unity.",
            wrong: ["all religions are identical in content.", "personal faith must match state religion.", "Buddhist dharma requires eliminating rivals."]
          },
          {
            start: "My edicts survive today on at least 33 rock and pillar inscriptions — making them our primary evidence for Maurya governance and showing that",
            correct: "stone outlasts even the greatest empires.",
            wrong: ["Ashoka personally carved every inscription.", "the Arthashastra is a fictional text.", "Greek sources are more reliable than Indian."]
          },
          {
            start: "Renouncing aggressive expansion allowed the empire to consolidate what it held while focusing resources on",
            correct: "roads, hospitals, and welfare.",
            wrong: ["further military conquest.", "accumulating personal treasury wealth.", "building ocean trading fleets."]
          }
        ]
      },
      {
        name: "Maurya Administrative System & Governance",
        emoji: "⚖️",
        quotes: [
          {
            start: "Chanakya's administrative system centered on appointed officials extracting taxes, administering justice, and",
            correct: "maintaining internal order.",
            wrong: ["conducting ocean trade.", "composing religious texts.", "producing artistic monuments."]
          },
          {
            start: "Dividing the empire into provinces governed by appointed officials allowed central control while delegating",
            correct: "day-to-day administrative authority.",
            wrong: ["purely military command decisions.", "religious temple management.", "artistic production oversight."]
          },
          {
            start: "The state claimed roughly one-sixth of agricultural production in taxation — funding the military and administration while leaving",
            correct: "some surplus for farmers.",
            wrong: ["farmers completely impoverished.", "no revenue for the central state.", "merchants bearing the entire burden."]
          },
          {
            start: "Standardized weights, measures, and currency across the empire enabled commerce and administration — showing that governance efficiency requires",
            correct: "consistent systems across diverse regions.",
            wrong: ["eliminating all local customs.", "purely religious legal codes.", "nomadic tribal organization."]
          },
          {
            start: "The spy network described in the Arthashastra monitored officials as well as the population — demonstrating that the state distrusted",
            correct: "its own administrators as much as enemies.",
            wrong: ["ordinary Buddhist monks.", "foreign Greek ambassadors.", "Silk Road merchant caravans."]
          }
        ]
      },
      {
        name: "Maurya Military Organization & Conquest",
        emoji: "⚔️",
        quotes: [
          {
            start: "Greek ambassador Megasthenes described a Maurya army of 600,000 infantry, 30,000 cavalry, and 9,000 elephants — numbers suggesting",
            correct: "the largest military force of its era.",
            wrong: ["a small tribal raiding party.", "a purely ceremonial palace guard.", "a defensive force only."]
          },
          {
            start: "Chandragupta's military success combined battlefield skill, strategic alliances with local rulers, and wealth extracted from",
            correct: "previously conquered regions.",
            wrong: ["purely religious donations.", "Greek mercenary payments.", "Buddhist monastery treasuries."]
          },
          {
            start: "Ashoka's Kalinga edict describes the war's horror — an unusually honest royal admission that conquest causes",
            correct: "suffering that cannot be undone.",
            wrong: ["inevitable glory and reward.", "purely administrative challenges.", "no moral consequences."]
          },
          {
            start: "War elephants gave tactical advantages but could be turned by fire or sharp obstacles — making them",
            correct: "powerful but dangerously unpredictable.",
            wrong: ["perfectly reliable in all terrain.", "effective only against Greek armies.", "useless against infantry formations."]
          },
          {
            start: "Maintaining garrisons across conquered territories was expensive — a financial drain that contributed to",
            correct: "the empire's eventual fiscal strain.",
            wrong: ["increased agricultural productivity.", "greater trade route security.", "stronger provincial loyalty."]
          }
        ]
      },
      {
        name: "Maurya Economy & Infrastructure",
        emoji: "💰",
        quotes: [
          {
            start: "Agricultural taxation supplemented by trade duties and state monopolies on salt and mining provided the empire's revenue — all ultimately resting on",
            correct: "the labor of rural peasant farmers.",
            wrong: ["ocean exploration profits.", "purely military plunder.", "Buddhist monastery donations."]
          },
          {
            start: "Roads, rest houses, and wells built across the empire served trade and administration — but also demonstrated that",
            correct: "infrastructure is a tool of imperial control.",
            wrong: ["Maurya rulers were purely altruistic.", "military conquest requires no logistics.", "trade was secondary to religious ritual."]
          },
          {
            start: "Standardized coinage enabled long-distance commerce across the subcontinent — providing merchants reliable exchange and",
            correct: "the state predictable customs revenue.",
            wrong: ["purely decorative royal display.", "Buddhist religious ceremony needs.", "Greek-style democratic economic policy."]
          },
          {
            start: "Maurya control of routes connecting India to Persia and Central Asia brought foreign goods and customs revenue — showing that",
            correct: "trade route control multiplies state power.",
            wrong: ["military conquest always beats trade.", "India had no desirable exports.", "Silk Road trade began with the Mughals."]
          }
        ]
      },
      {
        name: "Chanakya's Political Philosophy & The Arthashastra",
        emoji: "📜",
        quotes: [
          {
            start: "The Arthashastra's central principle of artha — material prosperity and power — places governance in a pragmatic tradition that treats morality as",
            correct: "a tool of statecraft, not its foundation.",
            wrong: ["the supreme guide to all decisions.", "irrelevant to any governance question.", "identical to Greek democratic ideals."]
          },
          {
            start: "Detailed instructions on spying, seducing enemy ministers, and spreading discord among rivals show that Chanakya viewed statecraft as fundamentally",
            correct: "amoral and results-oriented.",
            wrong: ["purely spiritual and dharmic.", "identical to Buddhist teaching.", "based on Brahmin priestly codes."]
          },
          {
            start: "Chanakya's warning that rulers must prevent ministers from becoming too powerful predates Machiavelli by 1,800 years — suggesting that the problem of",
            correct: "dangerous subordinates is universal.",
            wrong: ["democracy is always preferable.", "empires never face internal threats.", "loyalty can be purchased permanently."]
          },
          {
            start: "Advice on food tasting and bodyguard selection reflects Chanakya's belief that the ruler's greatest vulnerability was",
            correct: "betrayal from within the palace.",
            wrong: ["foreign military invasion.", "Buddhist philosophical challenges.", "agricultural tax resistance."]
          },
          {
            start: "The Arthashastra's pragmatic flexibility — adapting governance to local conditions — contrasts with the rigid universal principles found in",
            correct: "Platonic or Confucian political philosophy.",
            wrong: ["all of Buddhist teaching.", "Ashoka's own edicts.", "purely military tactical manuals."]
          }
        ]
      },
      {
        name: "Maurya Decline & Legacy",
        emoji: "📜",
        quotes: [
          {
            start: "Maurya decline in the 2nd century BCE came from overextension, rising regional powers, and the erosion of central authority over",
            correct: "distant peripheral provinces.",
            wrong: ["purely religious disagreements.", "Buddhist monastic resistance.", "Greek military invasion."]
          },
          {
            start: "Pushyamitra Shunga's assassination of the last Maurya emperor — his own general — demonstrates that",
            correct: "military commanders eventually become threats.",
            wrong: ["Buddhist dharma prevents violence.", "Chanakya's advice was always followed.", "dynastic succession is always peaceful."]
          },
          {
            start: "Ashoka's edicts — surviving on 33 inscriptions across South Asia — represent the most direct documentary evidence of ancient Indian governance, predating",
            correct: "almost all other Indian historical records.",
            wrong: ["the Arthashastra by many centuries.", "the existence of the Maurya Empire.", "all forms of Indian literature."]
          },
          {
            start: "The Maurya Empire's legacy includes the first pan-Indian political unity, sophisticated administration, promotion of Buddhism, and",
            correct: "the Arthashastra as political theory.",
            wrong: ["ocean maritime dominance.", "the invention of zero.", "building the Taj Mahal."]
          },
          {
            start: "The study of the Maurya Empire — through Greek accounts, archaeological sites, coins, and Ashoka's edicts — demonstrates that ancient India produced",
            correct: "sophisticated statecraft comparable to any civilization.",
            wrong: ["only religious and spiritual texts.", "purely mythological narratives.", "no interest in governance theory."]
          }
        ]
      },
      {
        name: "Bindusara (Consolidation & International Recognition)",
        emoji: "👑",
        quotes: [
          {
            start: "Inheriting Chandragupta's empire required maintaining administrative systems while managing the political challenge of",
            correct: "preventing noble fragmentation.",
            wrong: ["purely ocean exploration.", "converting all subjects to Jainism.", "building Greek-style temples."]
          },
          {
            start: "Bindusara maintained trade and diplomatic relations with the Seleucid kingdom and Egypt — showing that Maurya India was recognized as",
            correct: "a major civilized power.",
            wrong: ["a purely isolated subcontinent.", "inferior to Hellenistic kingdoms.", "uninterested in foreign contact."]
          },
          {
            start: "The succession struggle after Bindusara's death — Ashoka reportedly killing rival brothers — illustrates that Maurya succession was",
            correct: "violent, not ceremonially peaceful.",
            wrong: ["determined by democratic election.", "always decided by the eldest son.", "governed by Buddhist dharma alone."]
          }
        ]
      },
      {
        name: "Maurya Society & Social Structure",
        emoji: "🏛️",
        quotes: [
          {
            start: "The varna hierarchy — royalty, Brahmins, merchants, farmers, enslaved persons — concentrated power while providing",
            correct: "specialized roles for all groups.",
            wrong: ["complete social equality.", "purely military organization.", "Greek-style democratic councils."]
          },
          {
            start: "Brahmin priests served as royal advisors and repositories of legal and ritual knowledge — but their power was challenged by Ashoka's promotion of",
            correct: "Buddhism as an alternative authority.",
            wrong: ["ocean maritime culture.", "purely military governance.", "Greek philosophical schools."]
          },
          {
            start: "Merchants and craftspeople generated taxable wealth — making them economically essential while remaining",
            correct: "politically subordinate to the nobility.",
            wrong: ["the empire's actual rulers.", "exempt from all taxation.", "opponents of imperial authority."]
          },
          {
            start: "Megasthenes observed that Maurya society had no widespread chattel slavery — a distinction from the Mediterranean world that suggests",
            correct: "Indian labor systems differed significantly.",
            wrong: ["India had no social hierarchy.", "all people were equally free.", "Maurya law was identical to Roman."]
          }
        ]
      },
      {
        name: "Buddhist Influence & Ashoka's Dhamma",
        emoji: "☸️",
        quotes: [
          {
            start: "Ashoka's Dhamma was not pure Buddhism but a simplified ethical code promoting non-violence, respect, and charity — designed to appeal across",
            correct: "religious and social boundaries.",
            wrong: ["only Buddhist monastic communities.", "purely the Brahmin priestly class.", "exclusively Greek philosophical schools."]
          },
          {
            start: "Sending Buddhist missionaries to Sri Lanka, Central Asia, and possibly Egypt shows that Ashoka understood",
            correct: "soft power can extend an empire's influence.",
            wrong: ["military conquest is always necessary.", "Buddhism spread only through conquest.", "Sri Lanka was part of the Maurya Empire."]
          },
          {
            start: "Prohibiting animal slaughter on royal holidays and limiting the royal hunt showed Ashoka's personal Buddhist values influencing",
            correct: "actual state policy — not just rhetoric.",
            wrong: ["purely court ceremonial practices.", "Brahmin ritual requirements.", "Silk Road trade regulations."]
          }
        ]
      }
    ]
  },
  {
    id: "mughal",
    name: "Mughal Empire",
    emoji: "👑",
    color: 0x8b0000,
    colorHex: "#8b0000",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Akbar the Great (As Recorded in the Akbarnama)",
        emoji: "👑",
        quotes: [
          {
            start: "I ruled over a population that was 80% Hindu — making tolerance not just moral policy but a practical necessity for maintaining",
            correct: "stable Mughal authority.",
            wrong: ["purely religious purity.", "a small tribal confederation.", "a purely Muslim empire."]
          },
          {
            start: "Abolishing the jizya tax on non-Muslims reduced resentment and increased revenue by bringing more subjects into willing compliance — showing that",
            correct: "fairness can be fiscally smart.",
            wrong: ["religious taxes always maximize revenue.", "discrimination strengthens empires.", "Hindu subjects never paid taxes."]
          },
          {
            start: "The mansabdari system assigned military ranks and land grants based on performance rather than birth — creating incentives for loyalty grounded in",
            correct: "merit rather than heritage.",
            wrong: ["purely religious devotion.", "Greek-style democratic election.", "hereditary noble privilege."]
          },
          {
            start: "My Nine Gems — Abul Fazl, Todar Mal, Birbal, Tansen, and others — showed that diverse talents in administration, finance, and arts could",
            correct: "strengthen an empire simultaneously.",
            wrong: ["replace military power entirely.", "eliminate the need for taxation.", "make religious policy irrelevant."]
          },
          {
            start: "Efficient tax collection through the diwani system funded military campaigns and building projects — demonstrating that conquest required",
            correct: "sound administrative foundations.",
            wrong: ["purely divine blessing.", "simple brute military force.", "no organizational infrastructure."]
          }
        ]
      },
      {
        name: "Akbar's Religious Policy & Tolerance",
        emoji: "🕌",
        quotes: [
          {
            start: "Patronizing Hindu temples, hosting Christian missionaries, and abolishing discriminatory taxes reduced religious conflict while positioning Akbar as",
            correct: "ruler of all Indians equally.",
            wrong: ["a secret convert to Hinduism.", "an enemy of Islamic orthodoxy.", "purely a military conqueror."]
          },
          {
            start: "Placing Hindus and Muslims together in the bureaucracy based on competence — not religion — showed that administrative efficiency mattered more than",
            correct: "religious identity in governance.",
            wrong: ["military conquest outcomes.", "architectural monument quality.", "poetic composition skill."]
          },
          {
            start: "The Din-i Ilahi combined elements of Islam, Hinduism, Zoroastrianism, and Christianity — an attempt to create",
            correct: "an imperial unifying ideology.",
            wrong: ["a replacement for all religions.", "a purely personal philosophy.", "a new military religion."]
          },
          {
            start: "The Din-i Ilahi attracted only about 18 followers despite imperial patronage — showing that even emperors cannot easily replace",
            correct: "deeply held religious commitments.",
            wrong: ["commercial trading interests.", "architectural preferences.", "military tactical choices."]
          }
        ]
      },
      {
        name: "Shah Jahan (Builder Emperor & Political Prisoner)",
        emoji: "🏛️",
        quotes: [
          {
            start: "The Taj Mahal — built over 22 years by 20,000 workers for his wife Mumtaz Mahal — represents both extraordinary love and the",
            correct: "colossal cost of imperial vanity.",
            wrong: ["cheapest Mughal building project.", "purely military defensive structure.", "a simple garden tomb."]
          },
          {
            start: "Shah Jahan's massive building program produced magnificent monuments but created",
            correct: "severe financial strain on the treasury.",
            wrong: ["increased agricultural productivity.", "stronger military frontier defenses.", "improved trade route security."]
          },
          {
            start: "Moving the capital to the new city of Shahjahanabad diverted enormous resources — a symbolic assertion of power that weakened the empire's",
            correct: "military and fiscal capacity.",
            wrong: ["artistic production quality.", "textile manufacturing output.", "ocean trade connections."]
          },
          {
            start: "Shah Jahan was imprisoned by his son Aurangzeb and spent his last years under house arrest viewing the Taj Mahal — showing that imperial succession was",
            correct: "often violent and ruthless.",
            wrong: ["always peaceful and ceremonial.", "determined by popular vote.", "decided by Islamic scholars."]
          }
        ]
      },
      {
        name: "Aurangzeb (Orthodox Conqueror & Empire Overextender)",
        emoji: "⚖️",
        quotes: [
          {
            start: "Reimposing the jizya and destroying Hindu temples reversed Akbar's tolerance — alienating the Hindu majority and",
            correct: "fueling resistance across the empire.",
            wrong: ["strengthening Mughal military power.", "increasing agricultural tax revenue.", "uniting all Muslims behind Mughal rule."]
          },
          {
            start: "The Deccan campaigns against the Marathas lasted 27 years — consuming resources, troops, and Aurangzeb's personal attention while",
            correct: "the empire frayed at its edges.",
            wrong: ["the treasury grew steadily larger.", "northern defenses strengthened.", "Hindu-Muslim relations improved."]
          },
          {
            start: "Aurangzeb's reign reached the greatest Mughal territorial extent — but simultaneously began its",
            correct: "irreversible structural decline.",
            wrong: ["most stable administrative period.", "greatest religious tolerance era.", "peak of architectural achievement."]
          },
          {
            start: "The Jat, Rajput, Sikh, and Maratha rebellions during Aurangzeb's reign shared a common cause — resistance to",
            correct: "religious discrimination and heavy taxation.",
            wrong: ["purely personal grievances.", "Aurangzeb's building projects.", "his restrictions on poetry."]
          },
          {
            start: "Aurangzeb's personal piety — he copied Qurans and made prayer caps to earn money — coexisted with brutal political methods, showing that",
            correct: "personal virtue and political violence can coexist.",
            wrong: ["religious rulers are always merciful.", "Islamic law prevents political violence.", "piety guarantees administrative success."]
          }
        ]
      },
      {
        name: "Mughal Administrative System & Bureaucracy",
        emoji: "⚖️",
        quotes: [
          {
            start: "The emperor balanced rewarding supporters and preventing any single noble from accumulating enough power to",
            correct: "challenge the throne.",
            wrong: ["trade with foreign merchants.", "build private temples.", "compose rival poetry."]
          },
          {
            start: "The diwani extracted roughly one-third of agricultural production from peasants — funding the empire's military and monuments while leaving",
            correct: "most farmers at subsistence level.",
            wrong: ["peasants wealthy and prosperous.", "rural areas largely untaxed.", "merchants bearing the main burden."]
          },
          {
            start: "Akbar's administrative genius was including Hindu Rajput nobles as mansabdars — creating stakeholders in Mughal success who provided",
            correct: "military forces and regional loyalty.",
            wrong: ["purely ceremonial court prestige.", "textile production expertise.", "ocean navigation knowledge."]
          },
          {
            start: "Later Mughal governors retained taxes rather than remitting them to Delhi — a form of administrative decay that",
            correct: "financially hollowed out central power.",
            wrong: ["strengthened provincial governance.", "increased overall tax collection.", "improved local service delivery."]
          },
          {
            start: "The Ain-i Akbari documented every aspect of Mughal administration — a comprehensive record showing that Akbar understood",
            correct: "knowledge of the state is power.",
            wrong: ["poetry mattered more than governance.", "religious law replaced civil law.", "merchants ran the empire secretly."]
          }
        ]
      },
      {
        name: "Mughal Military Organization & Campaigns",
        emoji: "⚔️",
        quotes: [
          {
            start: "Mughal cavalry and artillery dominated medieval Indian opponents but faced growing challenges from the Marathas' guerrilla warfare and",
            correct: "European-armed coastal powers.",
            wrong: ["Arctic tribal invasions.", "Chinese naval forces.", "Egyptian military technology."]
          },
          {
            start: "Artillery and gunpowder gave Mughal forces decisive advantages in siege warfare over opponents who lacked",
            correct: "comparable weapons technology.",
            wrong: ["poetic court culture.", "agricultural management skills.", "textile production expertise."]
          },
          {
            start: "Aurangzeb's Deccan campaigns lasted decades — demonstrating that military dominance cannot indefinitely compensate for",
            correct: "unwinnable guerrilla resistance.",
            wrong: ["insufficient agricultural taxation.", "absence of court poetry.", "poor glass manufacturing."]
          },
          {
            start: "Mughal naval weakness meant that Portuguese, Dutch, and British maritime powers could establish coastal footholds that would eventually",
            correct: "undermine Mughal territorial sovereignty.",
            wrong: ["improve Mughal textile exports.", "increase Mughal pilgrimage revenues.", "strengthen Mughal diplomatic ties."]
          }
        ]
      },
      {
        name: "Mughal Culture & Intellectual Achievement",
        emoji: "📚",
        quotes: [
          {
            start: "Mughal court culture synthesized Persian literary tradition, Islamic geometry, Hindu visual iconography, and Indian music — creating",
            correct: "a genuinely new hybrid civilization.",
            wrong: ["purely Persian imitation art.", "exclusively Islamic architecture.", "simple tribal folk traditions."]
          },
          {
            start: "Akbar — who was likely illiterate — ran one of history's most intellectually vibrant courts, showing that",
            correct: "patronage matters more than personal learning.",
            wrong: ["illiteracy always limits rulers.", "scholars need no royal support.", "court culture is purely decorative."]
          },
          {
            start: "The Akbarnama presents Akbar as nearly divine — reminding us that court histories are",
            correct: "propaganda as much as record.",
            wrong: ["completely objective accounts.", "always confirmed by archaeology.", "neutral administrative documents."]
          },
          {
            start: "Hindi and Persian blending created Hindustani — the ancestor of modern Urdu and Hindi — showing that linguistic fusion can produce",
            correct: "enduring new cultural forms.",
            wrong: ["the extinction of both languages.", "purely elite court jargon.", "temporary pidgin trade language."]
          }
        ]
      },
      {
        name: "Mughal Economy & Trade",
        emoji: "💰",
        quotes: [
          {
            start: "Agricultural taxation provided roughly 80% of Mughal revenue — making the empire's grandeur dependent on",
            correct: "the labor of rural peasant farmers.",
            wrong: ["ocean trade monopolies.", "underground mining operations.", "urban merchant guilds primarily."]
          },
          {
            start: "Indian cotton textiles were so prized in Europe that Britain eventually banned their import to protect domestic manufacturers — showing Mughal India was",
            correct: "a global manufacturing powerhouse.",
            wrong: ["technologically backward in textiles.", "dependent on European cloth imports.", "unable to compete internationally."]
          },
          {
            start: "Mughal banking instruments like hundis (bills of exchange) enabled long-distance commerce — demonstrating a financial sophistication that went well beyond",
            correct: "simple barter or coin exchange.",
            wrong: ["Greek-style democratic economics.", "purely religious charity systems.", "nomadic gift exchange traditions."]
          },
          {
            start: "When provincial governors stopped remitting taxes to Delhi in the 18th century, the empire could no longer fund armies — showing that",
            correct: "revenue collection is imperial survival.",
            wrong: ["military loyalty is irrelevant to finance.", "architecture was the empire's main cost.", "religious policy drove fiscal collapse."]
          }
        ]
      },
      {
        name: "Mughal Decline & Fall",
        emoji: "📜",
        quotes: [
          {
            start: "Mughal decline combined Aurangzeb's overextension, Maratha military pressure, succession wars, and",
            correct: "European colonial encroachment.",
            wrong: ["sudden climate catastrophe.", "mass conversion to Christianity.", "Chinese military invasion."]
          },
          {
            start: "The 1739 sack of Delhi by Nadir Shah of Persia — who carried off the Peacock Throne and Koh-i-Noor diamond — announced to the world that",
            correct: "Mughal military power had collapsed.",
            wrong: ["Persia had converted to Islam.", "India had no valuable resources.", "the Marathas had been defeated."]
          },
          {
            start: "The British East India Company exploited Mughal weakness not through direct conquest at first but through",
            correct: "trade privileges, debt, and divide-and-rule.",
            wrong: ["purely military invasion from the start.", "religious conversion of the nobility.", "Mughal invitation and consent."]
          },
          {
            start: "The last Mughal emperor Bahadur Shah Zafar was exiled to Rangoon by the British in 1858 — ending a dynasty that had",
            correct: "ruled India for over 300 years.",
            wrong: ["lasted only a single generation.", "been founded by Akbar himself.", "originated in southern India."]
          },
          {
            start: "The Mughal legacy — the Taj Mahal, Hindustani music, Urdu literature, and subcontinental cuisine — persists today, proving that",
            correct: "cultural achievements outlast political power.",
            wrong: ["empires never truly end.", "British rule erased all Mughal influence.", "only military victories create lasting legacies."]
          }
        ]
      },
      {
        name: "Abul Fazl (Historian & Imperial Ideologist)",
        emoji: "📖",
        quotes: [
          {
            start: "Abul Fazl's Akbarnama served simultaneously as historical record and as imperial propaganda — presenting Akbar's policies while systematically minimizing",
            correct: "failures, revolts, and contradictions.",
            wrong: ["Akbar's architectural projects.", "the empire's military campaigns.", "Persian cultural influences."]
          },
          {
            start: "As chief ideologue, Abul Fazl developed the concept of Akbar as a divine light (nur) — legitimizing imperial authority through",
            correct: "quasi-religious royal charisma.",
            wrong: ["purely Islamic legal authority.", "Hindu priestly endorsement.", "Greek-style democratic mandate."]
          },
          {
            start: "The Ain-i Akbari documented revenues, military strength, religious practices, and provincial geography — a statistical survey showing that",
            correct: "information is a tool of governance.",
            wrong: ["Akbar personally wrote all records.", "the Mughal economy was purely barter.", "administration required no written records."]
          }
        ]
      },
      {
        name: "Mughal Women & Gender Relations",
        emoji: "👩",
        quotes: [
          {
            start: "Nur Jahan — Jahangir's wife — issued imperial orders, minted coins in her name, and negotiated with foreign powers, demonstrating that a determined royal woman could exercise",
            correct: "real political and state power.",
            wrong: ["only ceremonial court influence.", "purely religious authority.", "power only through male proxies."]
          },
          {
            start: "The purdah system confined elite women to the zenana — reflecting Islamic practice and political calculation about controlling",
            correct: "royal marriages and succession.",
            wrong: ["purely textile production.", "agricultural land ownership.", "ocean trade permissions."]
          },
          {
            start: "Non-elite women participated in agriculture, trade, and craft production — holding more economic freedom than elite women, showing that",
            correct: "seclusion was a marker of high status.",
            wrong: ["poor women had no rights.", "Islamic law banned female labor.", "elite women were more free."]
          }
        ]
      },
      {
        name: "Mughal Legacy & Historical Significance",
        emoji: "📜",
        quotes: [
          {
            start: "The Mughal synthesis of Persian, Islamic, and Indian traditions created a distinctive South Asian civilization whose influence on architecture, cuisine, music, and language",
            correct: "continues to the present day.",
            wrong: ["disappeared entirely after 1858.", "was purely limited to Delhi.", "was erased by British colonialism."]
          },
          {
            start: "British colonial rule replaced Mughal authority by exploiting internal fragmentation rather than purely military superiority — showing that empires collapse from",
            correct: "within as much as from outside.",
            wrong: ["purely external military invasion.", "complete economic collapse alone.", "sudden religious conversion of elites."]
          },
          {
            start: "The Mughal Empire demonstrates how a Muslim ruling minority could govern a Hindu majority for 300 years through",
            correct: "administrative inclusion, cultural synthesis, and selective coercion.",
            wrong: ["purely religious persecution.", "complete cultural assimilation.", "continuous genocidal violence."]
          }
        ]
      }
    ]
  },
  {
    id: "arabia",
    name: "Ancient Arabia",
    emoji: "🌴",
    color: 0xcc6600,
    colorHex: "#cc6600",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Pre-Islamic Arabian Tribal Chiefs",
        emoji: "🗡️",
        quotes: [
          {
            start: "A chief's authority required demonstrating fairness in disputes, protection from enemies, and distribution of wealth from raids and",
            correct: "trade.",
            wrong: ["deep sea fishing.", "iron ore mining.", "temple construction."]
          },
          {
            start: "In the tribal honor system, a chief's actions reflected on the entire tribe — enhancing or damaging its",
            correct: "collective standing.",
            wrong: ["personal merchant profits.", "individual warrior skills.", "scholarly reputation."]
          },
          {
            start: "Excessive raiding could unify victims against the raider, creating",
            correct: "dangerous long-term enemies.",
            wrong: ["willing trade partners.", "loyal tributary states.", "religious converts."]
          },
          {
            start: "The chief served as judge and arbiter because internal conflict would weaken the tribe — legitimacy depended on the perception of",
            correct: "fair dispute settlement.",
            wrong: ["ocean navigation skill.", "military weapons quality.", "poetic composition ability."]
          },
          {
            start: "Tribal leadership passed through kinship networks but required ongoing support from allies — otherwise facing challenges from",
            correct: "rival family claimants.",
            wrong: ["foreign merchant guilds.", "distant Islamic scholars.", "Mediterranean sea powers."]
          }
        ]
      },
      {
        name: "Pre-Islamic Arabian Poets (Mu'allaqat & Jahiliyyah Tradition)",
        emoji: "🖋️",
        quotes: [
          {
            start: "Poets were respected and feared because their verses, memorized and transmitted across Arabia, could permanently shape a leader's",
            correct: "reputation for good or ill.",
            wrong: ["cattle herd size.", "water supply access.", "military weapon quality."]
          },
          {
            start: "The Mu'allaqat — seven celebrated poems hung at the Kaaba — preserved tribal values, heroic deeds, and",
            correct: "the Arabic language at its finest.",
            wrong: ["precise trade route maps.", "maritime navigation techniques.", "iron smelting instructions."]
          },
          {
            start: "Poetry competitions at the 'Ukaz fair let tribes demonstrate cultural sophistication — the best poet brought prestige comparable to",
            correct: "winning a military victory.",
            wrong: ["discovering new trade routes.", "building the largest fort.", "owning the most camels."]
          },
          {
            start: "Pre-Islamic poetry explored love, loss, honor, and the desert — encoding cultural values that Islam would later transform but",
            correct: "never entirely erase.",
            wrong: ["immediately and completely abolished.", "replace with pure mathematics.", "convert into legal codes."]
          }
        ]
      },
      {
        name: "Arabian Merchants & Trade Networks",
        emoji: "💰",
        quotes: [
          {
            start: "Arabian merchants connected the Mediterranean, East Africa, Persia, and",
            correct: "India through overland caravan routes.",
            wrong: ["Scandinavia by sea.", "the Arctic by camel.", "China by underground tunnels."]
          },
          {
            start: "Mecca's merchant families built wealth by controlling trans-Arabian routes and providing security — demonstrating that",
            correct: "protecting commerce generates power.",
            wrong: ["purely religious authority suffices.", "raiding always beats trading.", "agriculture drives all wealth."]
          },
          {
            start: "Long-distance trade required systems of credit and partnership — working only when merchants had a reputation for",
            correct: "reliably honoring agreements.",
            wrong: ["breaking contracts opportunistically.", "avoiding all foreign partners.", "paying bribes to officials."]
          },
          {
            start: "Meccan merchant wealth created social tension with tribal elites — a conflict that contributed directly to",
            correct: "the conditions that produced Islam.",
            wrong: ["the spread of Buddhism.", "Persian imperial expansion.", "Byzantine military weakness."]
          },
          {
            start: "The Quraysh tribe's control of Mecca's sanctuary and trade gave them religious and commercial authority that Muhammad would eventually both challenge and",
            correct: "ultimately inherit.",
            wrong: ["completely destroy.", "ignore entirely.", "replace with Persian customs."]
          }
        ]
      },
      {
        name: "Arabian Warriors & Raiding Culture",
        emoji: "⚔️",
        quotes: [
          {
            start: "Raiding served economic purposes while simultaneously reinforcing warrior skills and",
            correct: "tribal identity and cohesion.",
            wrong: ["maritime navigation abilities.", "agricultural calendar knowledge.", "architectural construction skills."]
          },
          {
            start: "The warrior values of pre-Islamic Arabia — courage, loyalty, generosity — were performed through poetry, storytelling, and the conduct of",
            correct: "raids, feuds, and defense.",
            wrong: ["peaceful merchant caravans.", "scholarly religious debates.", "temple construction projects."]
          },
          {
            start: "Blood money (diyya) resolved feuds without endless revenge cycles — showing that even honor-based societies develop",
            correct: "practical conflict resolution mechanisms.",
            wrong: ["purely pacifist legal systems.", "democratic voting procedures.", "written constitutional laws."]
          },
          {
            start: "Warrior prestige through battlefield courage and generosity to followers created leaders who could mobilize",
            correct: "large loyal fighting groups.",
            wrong: ["permanent ocean fleets.", "underground mining operations.", "Greek-style citizen armies."]
          }
        ]
      },
      {
        name: "Arabian Religious Life & Pre-Islamic Beliefs",
        emoji: "🕌",
        quotes: [
          {
            start: "Pre-Islamic Arabia had hundreds of deities — the Kaaba in Mecca alone housed idols representing many tribes, making Mecca a religious center that reinforced",
            correct: "tribal and regional identities.",
            wrong: ["purely commercial monopolies.", "agricultural irrigation systems.", "ocean navigation knowledge."]
          },
          {
            start: "The annual pilgrimage to Mecca served simultaneously as religious observance, trade fair, and forum for",
            correct: "inter-tribal dispute resolution.",
            wrong: ["military weapons testing.", "poetry composition contests only.", "camel racing tournaments."]
          },
          {
            start: "Belief in jinn, divination, and sacred oaths reflected Arabian efforts to understand forces beyond human control — a spiritual framework Islam would later",
            correct: "partially absorb and partially reject.",
            wrong: ["completely preserve unchanged.", "ignore as entirely irrelevant.", "replace with Greek philosophy."]
          },
          {
            start: "Violations of sacred oaths carried serious social and spiritual consequences — showing that religion served as",
            correct: "a moral enforcement mechanism.",
            wrong: ["a purely decorative tradition.", "a source of financial profit.", "a military recruitment tool."]
          }
        ]
      },
      {
        name: "The Rightly Guided Caliphs (As Recorded in Islamic Sources)",
        emoji: "🕌",
        quotes: [
          {
            start: "The first four caliphs derived authority from their proximity to Muhammad and their claim to represent",
            correct: "authentic Islamic teaching.",
            wrong: ["ancient Persian royal lineage.", "Roman imperial succession.", "tribal military dominance."]
          },
          {
            start: "The early caliphate needed administrative systems for taxation, armies, and justice — imposing a governance structure on what had been",
            correct: "a decentralized tribal society.",
            wrong: ["a highly centralized monarchy.", "a democratic Greek-style state.", "a purely religious monastic community."]
          },
          {
            start: "The rapid Islamic conquests of Persia, Syria, and Egypt within twenty years of Muhammad's death showed that the new faith provided",
            correct: "unity, motivation, and military discipline.",
            wrong: ["superior iron weapons only.", "Byzantine military defectors.", "Persian administrative secrets."]
          },
          {
            start: "The split between Sunni and Shia over Ali's succession shows that questions of legitimate authority were",
            correct: "unresolved from Islam's earliest days.",
            wrong: ["settled peacefully by consensus.", "irrelevant to most believers.", "invented centuries later by enemies."]
          }
        ]
      },
      {
        name: "Arabian Trade Routes & Commerce",
        emoji: "💰",
        quotes: [
          {
            start: "Controlling trade routes between Yemen's frankincense coast and Mediterranean markets meant controlling",
            correct: "luxury goods entire empires craved.",
            wrong: ["purely local grain markets.", "Atlantic ocean shipping lanes.", "underground silver mines."]
          },
          {
            start: "Caravans required trust, shared rules, and organization — developing proto-commercial institutions long before",
            correct: "formal written contracts existed.",
            wrong: ["camels were domesticated.", "Islam was founded.", "Arabia was unified politically."]
          },
          {
            start: "Merchant wealth rivaling tribal leaders created social competition that contributed to political instability and eventually to",
            correct: "the conditions Islam emerged from.",
            wrong: ["peaceful democratic governance.", "Byzantine military decline.", "Persian agricultural expansion."]
          },
          {
            start: "Mecca's dual role as trade hub and pilgrimage center gave it economic advantages no purely commercial or purely religious city could match — demonstrating that",
            correct: "combining functions multiplies power.",
            wrong: ["religion and commerce always conflict.", "trade routes make cities purely secular.", "pilgrimage reduces commercial activity."]
          }
        ]
      },
      {
        name: "Arabian Poetry & Cultural Values",
        emoji: "🖋️",
        quotes: [
          {
            start: "Pre-Islamic poetry's themes — love, loss, tribal honor, the harsh desert — transmitted cultural values across generations through",
            correct: "memorization rather than writing.",
            wrong: ["stone monument inscriptions.", "royal palace archives.", "temple library collections."]
          },
          {
            start: "Poetry competitions at the 'Ukaz fair elevated the tribes of winning poets — demonstrating that cultural achievement was",
            correct: "a form of tribal prestige.",
            wrong: ["irrelevant to political power.", "purely personal entertainment.", "less valued than cattle wealth."]
          },
          {
            start: "The Quran's extraordinary Arabic style was immediately recognized as surpassing existing poetry — Islam leveraged the culture's deep reverence for",
            correct: "linguistic mastery and eloquence.",
            wrong: ["purely military conquest.", "commercial accounting skills.", "architectural monument building."]
          },
          {
            start: "Pre-Islamic poetry survived into the Islamic period because scholars recognized its value for understanding Arabic and history — showing that",
            correct: "cultural inheritance rarely disappears entirely.",
            wrong: ["Islam banned all pre-Islamic knowledge.", "poetry was considered purely sinful.", "written Arabic predated Islam fully."]
          }
        ]
      },
      {
        name: "Arabian Social Structure & Tribal Organization",
        emoji: "🏛️",
        quotes: [
          {
            start: "Identity, obligation, and protection in pre-Islamic Arabia flowed primarily through membership in",
            correct: "a specific tribe and family.",
            wrong: ["a merchant trading guild.", "a religious monastic order.", "a Greek-style city-state."]
          },
          {
            start: "The honor-shame system meant individuals' actions affected their entire tribe's reputation — creating strong social pressure toward",
            correct: "collective behavior standards.",
            wrong: ["purely individual selfishness.", "complete personal freedom.", "Greek democratic individualism."]
          },
          {
            start: "The mawali system — extending tribal protection to non-kinship clients — showed that even kinship societies develop",
            correct: "flexible incorporation mechanisms.",
            wrong: ["purely exclusionary practices.", "formal written citizenship laws.", "permanent hereditary slavery only."]
          },
          {
            start: "Some pre-Islamic Arabian women owned property, led caravans, and composed poetry — Khadijah, Muhammad's first wife, was a wealthy merchant, showing that female roles were",
            correct: "more varied than stereotypes suggest.",
            wrong: ["identical to medieval European women.", "purely domestic in all cases.", "defined entirely by Islamic law."]
          }
        ]
      },
      {
        name: "Arabian Economic Foundations",
        emoji: "💰",
        quotes: [
          {
            start: "The pre-Islamic Arabian economy combined camel herding, oasis agriculture, long-distance trade, and",
            correct: "raiding as legitimate income.",
            wrong: ["deep sea fishing fleets.", "underground gem mining.", "large-scale textile manufacturing."]
          },
          {
            start: "Market centers like Mecca, Medina, and Taif hosted trade fairs that simultaneously served commercial, poetic, and",
            correct: "diplomatic social functions.",
            wrong: ["purely military fortification purposes.", "royal ceremonial display only.", "Islamic prayer congregation needs."]
          },
          {
            start: "The rise of a merchant class with wealth rivaling tribal elites created structural social tension between",
            correct: "old kinship power and new commercial power.",
            wrong: ["seafaring kingdoms and desert tribes.", "mining colonies and farming settlements.", "Buddhist and Islamic religious systems."]
          },
          {
            start: "Arabia's economic integration of pastoralism, agriculture, trade, and raiding sustained populations in one of the world's most",
            correct: "challenging environments.",
            wrong: ["fertile agricultural zones.", "well-watered river valleys.", "richly forested landscapes."]
          }
        ]
      },
      {
        name: "Arabian Transformation & Islamic Influence",
        emoji: "🕌",
        quotes: [
          {
            start: "Islam appealed across Arabian social classes — offering wealthy merchants, poor nomads, and tribal warriors different but real",
            correct: "frameworks for justice and belonging.",
            wrong: ["purely military conquest opportunities.", "methods for ocean seafaring.", "techniques for metal mining."]
          },
          {
            start: "The transformation from competing tribes to a unified Islamic state shows that Islam provided the organizational and ideological framework to",
            correct: "overcome centuries of tribal division.",
            wrong: ["simply continue existing tribal structures.", "eliminate all pre-Islamic traditions.", "adopt Persian administrative practices."]
          },
          {
            start: "Arabia's tribal poetry traditions, legal customs, and commercial practices were absorbed into Islamic civilization — showing that",
            correct: "new religions transform rather than erase culture.",
            wrong: ["Islam rejected all Arabian heritage.", "Arabic culture was entirely foreign to Islam.", "tribal customs disappeared immediately."]
          },
          {
            start: "The Quran's oral recitation tradition built on Arabia's deep culture of memorization — Islam spread partly because its message fit the",
            correct: "existing oral communication infrastructure.",
            wrong: ["extensive written literary tradition.", "established printing press network.", "Greek philosophical academy system."]
          }
        ]
      }
    ]
  },
  {
    id: "mali",
    name: "Mali Empire",
    emoji: "🟢",
    color: 0xf0c808,
    colorHex: "#f0c808",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Sundiata Keita (As Recorded in Oral Tradition & Ibn Khaldun)",
        emoji: "👑",
        quotes: [
          {
            start: "I overcame physical disability and childhood hardship to unite the Mandinka peoples because determination and military strategy could overcome seemingly",
            correct: "insurmountable obstacles.",
            wrong: ["minor border disputes.", "weak Sosso defenses.", "willing local allies."]
          },
          {
            start: "The Battle of Kirina in 1235 established Mali as a major power by proving that united Mandinka groups could defeat",
            correct: "the militarily dominant Sosso.",
            wrong: ["peaceful farming villages.", "a distant sea empire.", "nomadic desert traders."]
          },
          {
            start: "Founding the empire required controlling gold trade routes because gold funded armies, administration, and",
            correct: "political influence.",
            wrong: ["ocean exploration fleets.", "Arctic territorial claims.", "Greek-style philosophy schools."]
          },
          {
            start: "Building the empire through both conquest and alliance showed that durable state-building required military power combined with",
            correct: "diplomatic political skill.",
            wrong: ["purely religious authority.", "maritime trade dominance.", "astronomical calendar knowledge."]
          },
          {
            start: "The Sundiata epic, preserved by griots for eight centuries, shows that oral tradition can maintain",
            correct: "historical and cultural memory.",
            wrong: ["precise military blueprints.", "accurate population statistics.", "written legal codes."]
          }
        ]
      },
      {
        name: "Mansa Musa I (As Recorded by Arab Chroniclers)",
        emoji: "👑",
        quotes: [
          {
            start: "My 1324 pilgrimage to Mecca demonstrated Mali's wealth and piety while establishing relationships with Islamic powers, showing the world that Mali was",
            correct: "a major civilized power.",
            wrong: ["an isolated forest kingdom.", "a minor tributary state.", "a purely nomadic confederacy."]
          },
          {
            start: "Distributing so much gold in Egypt that I caused inflation shows both Mali's immense wealth and the danger of",
            correct: "unplanned generosity destabilizing markets.",
            wrong: ["hoarding gold domestically.", "refusing Islamic charity obligations.", "taxing Egyptian merchants unfairly."]
          },
          {
            start: "Patronizing the Sankore Madrasah and other centers of Islamic learning showed the Islamic world that Mali could support",
            correct: "scholarship alongside military power.",
            wrong: ["purely military conquest alone.", "simple agricultural production.", "nomadic pastoral traditions."]
          },
          {
            start: "Controlling trade routes, maintaining military power, and supporting cultural achievement created",
            correct: "multiple overlapping sources of power.",
            wrong: ["complete dependence on gold alone.", "rivalry with all neighbors.", "religious conflict with scholars."]
          },
          {
            start: "Arab historians' detailed accounts of my pilgrimage created a permanent international record showing that documentation by literate outsiders could",
            correct: "preserve a ruler's legacy permanently.",
            wrong: ["distort all historical facts.", "replace oral tradition entirely.", "create purely mythological figures."]
          }
        ]
      },
      {
        name: "Mali Trade & Economic Power",
        emoji: "💰",
        quotes: [
          {
            start: "Mali's wealth came from taxing gold and salt trade passing through its territory — a system where controlling the route mattered more than",
            correct: "controlling the mines directly.",
            wrong: ["having a large army.", "converting traders to Islam.", "building stone fortresses."]
          },
          {
            start: "Mali's position in Saharan trade networks made it strategically essential because anyone trading between West Africa and the Mediterranean had to",
            correct: "pass through Mali territory.",
            wrong: ["convert to Islam first.", "pay tribute to Egypt.", "avoid all desert routes."]
          },
          {
            start: "Merchants operating under royal protection accumulated wealth and extended Mali's",
            correct: "commercial reach into distant regions.",
            wrong: ["military occupation zones.", "purely religious pilgrim routes.", "Antarctic exploration missions."]
          },
          {
            start: "The wealth from trade funded military expansion and monumental building, proving that in Mali economic and military power were",
            correct: "fundamentally inseparable.",
            wrong: ["permanently in conflict.", "separately administered always.", "irrelevant to each other."]
          },
          {
            start: "Mali's decline accelerated when Portuguese ships began trading directly with West African coastal peoples, bypassing the Saharan routes that had been",
            correct: "the foundation of Mali's wealth.",
            wrong: ["irrelevant to Mali's economy.", "controlled by Songhai alone.", "purely religious pilgrimage paths."]
          }
        ]
      },
      {
        name: "Mali Rulers & Administration",
        emoji: "⚖️",
        quotes: [
          {
            start: "The Mansa held supreme authority but needed the loyalty of powerful chiefs and the cooperation of",
            correct: "the merchant and noble classes.",
            wrong: ["purely fishing communities.", "distant European traders.", "Saharan nomadic raiders."]
          },
          {
            start: "Military conquest had to be followed by administration because territory without governance generates",
            correct: "rebellion and economic waste.",
            wrong: ["immediate popular loyalty.", "spontaneous cultural integration.", "automatic tribute collection."]
          },
          {
            start: "Allowing some local autonomy and recognizing local leaders maintained stability across an empire too large for",
            correct: "direct central administration.",
            wrong: ["any military presence.", "Islamic legal authority.", "gold trade taxation."]
          },
          {
            start: "Mali governed vast territories without standing armies everywhere by relying on the credible threat of force and the real",
            correct: "benefits Mali rule provided.",
            wrong: ["fear of divine punishment.", "absence of rival powers.", "Greek-style democratic consent."]
          },
          {
            start: "Mali's 15th-century decline resulted from Songhai's rise, shifting trade routes, and",
            correct: "succession disputes fragmenting authority.",
            wrong: ["sudden climate improvement.", "discovery of new crops.", "peaceful dissolution by consent."]
          }
        ]
      },
      {
        name: "Mali Islam & Religious Authority",
        emoji: "🕯️",
        quotes: [
          {
            start: "Mali rulers adopted Islam to integrate into international networks while maintaining traditional practices — a balance Ibn Battuta noted showed",
            correct: "pragmatic rather than doctrinaire faith.",
            wrong: ["complete rejection of local customs.", "hostility toward Muslim scholars.", "identical practice to Arabian Islam."]
          },
          {
            start: "Patronizing Islamic scholars created bonds with the broader Islamic world and gave rulers religious legitimacy that",
            correct: "complemented military authority.",
            wrong: ["replaced all traditional power.", "angered the griot class entirely.", "required abandoning local customs."]
          },
          {
            start: "Islamic judges and qadis provided legal authority in cities while traditional law operated in rural areas — a dual system that",
            correct: "managed diversity practically.",
            wrong: ["caused constant legal conflict.", "was identical to Sharia alone.", "pleased all parties equally."]
          },
          {
            start: "Tolerating traditional African spiritual practices alongside Islam showed that Mali rulers prioritized",
            correct: "stability over religious purity.",
            wrong: ["complete conversion of all subjects.", "expelling traditional priests.", "adopting purely Egyptian Islam."]
          }
        ]
      },
      {
        name: "Sankore Madrasah & Centers of Learning",
        emoji: "📚",
        quotes: [
          {
            start: "The Sankore Madrasah in Timbuktu attracted scholars from across the Islamic world because Mali rulers provided patronage and",
            correct: "a safe prosperous environment.",
            wrong: ["forced all scholars to attend.", "paid higher than Egyptian universities.", "banned all non-Islamic learning."]
          },
          {
            start: "Timbuktu's scholars studied law, theology, mathematics, and medicine — subjects that served both",
            correct: "religious and practical governance needs.",
            wrong: ["purely ceremonial court entertainment.", "Atlantic ocean navigation.", "bronze and iron metalworking."]
          },
          {
            start: "Hundreds of thousands of manuscripts were produced and preserved in Timbuktu — many surviving today — representing one of Africa's greatest",
            correct: "intellectual documentary legacies.",
            wrong: ["purely decorative artistic traditions.", "secret military codebooks.", "agricultural farming manuals."]
          },
          {
            start: "The combination of trade wealth and scholarly reputation made Timbuktu a place where commerce and intellectual achievement",
            correct: "reinforced each other.",
            wrong: ["constantly competed for resources.", "were kept strictly separate.", "declined simultaneously after 1400."]
          }
        ]
      },
      {
        name: "Griots & Oral Tradition",
        emoji: "🪕",
        quotes: [
          {
            start: "Griots memorized genealogies, historical events, and moral teachings — serving as living libraries in a society where",
            correct: "writing was not widely used.",
            wrong: ["books were too expensive.", "all records were destroyed.", "rulers banned written records."]
          },
          {
            start: "Griots served as royal advisors and interpreters of tradition, showing that controlling narrative and historical memory was",
            correct: "central to political legitimacy.",
            wrong: ["purely entertaining to rulers.", "irrelevant to governance decisions.", "less important than military strength."]
          },
          {
            start: "The Sundiata epic taught values, explained the empire's founding, and justified Keita dynasty rule — combining",
            correct: "entertainment, history, and propaganda.",
            wrong: ["purely fictional storytelling.", "accurate census data.", "military tactical manuals."]
          },
          {
            start: "Griots remain culturally significant in West Africa today, showing that oral tradition can preserve",
            correct: "identity across many centuries.",
            wrong: ["precise geographical maps.", "accurate scientific data.", "detailed architectural plans."]
          }
        ]
      },
      {
        name: "Mali Military & Defense",
        emoji: "⚔️",
        quotes: [
          {
            start: "Mali's cavalry-based military proved effective across the savanna because horses gave commanders",
            correct: "speed and striking power.",
            wrong: ["immunity to arrows.", "control of river routes.", "automatic noble loyalty."]
          },
          {
            start: "Maintaining control without garrisons everywhere required that the threat of military response remain",
            correct: "credible and swift.",
            wrong: ["purely ceremonial and symbolic.", "dependent on foreign mercenaries.", "based on religious curses alone."]
          },
          {
            start: "Mali's vulnerability to Songhai expansion showed that military power ultimately depends on",
            correct: "economic strength and political unity.",
            wrong: ["purely defensive fortifications.", "the quality of royal monuments.", "Islamic scholarly support alone."]
          }
        ]
      },
      {
        name: "Mali Society & Social Structure",
        emoji: "🏛️",
        quotes: [
          {
            start: "Mali's social hierarchy — royalty, nobility, merchants, craftspeople, farmers, enslaved persons — concentrated wealth while creating",
            correct: "specialized roles across society.",
            wrong: ["complete social equality.", "purely religious class divisions.", "Greek-style democratic councils."]
          },
          {
            start: "Merchants held elevated status because their trade generated the empire's wealth, showing that in Mali economic contribution translated directly into",
            correct: "social and political standing.",
            wrong: ["automatic noble titles.", "religious authority over scholars.", "military command positions."]
          },
          {
            start: "Mali's prosperity depended partly on enslaved labor obtained through warfare and trans-Saharan trade — a fact that complicates any purely celebratory account of",
            correct: "the empire's golden age.",
            wrong: ["Mansa Musa's piety.", "griot cultural traditions.", "Islamic scholarly achievement."]
          }
        ]
      },
      {
        name: "Mali Decline & Historical Legacy",
        emoji: "📜",
        quotes: [
          {
            start: "Mali's decline came from Songhai's rise, shifting trade routes, and succession disputes — showing that empires built on trade route control are vulnerable when",
            correct: "routes shift or rivals emerge.",
            wrong: ["scholars leave the capital.", "rainfall patterns improve.", "new crops are introduced."]
          },
          {
            start: "When Portuguese ships began trading directly along the West African coast after 1415, they bypassed the Saharan routes that had",
            correct: "sustained Mali's economic power.",
            wrong: ["been irrelevant to Mali.", "been controlled by Songhai only.", "provided purely religious pilgrimage paths."]
          },
          {
            start: "Mali left a legacy of Islamic scholarship, trade network organization, and the demonstration that West African states could achieve",
            correct: "international recognition and sophistication.",
            wrong: ["Atlantic maritime dominance.", "conquest of North Africa.", "military defeat of Egypt."]
          },
          {
            start: "Mansa Musa's documented pilgrimage means Mali appears on 14th-century European maps — one of the few sub-Saharan polities recognized as",
            correct: "a major world power.",
            wrong: ["a minor trading post.", "a mysterious lost civilization.", "a purely mythological kingdom."]
          },
          {
            start: "The study of Mali demonstrates that African civilizations achieved political, economic, and intellectual sophistication comparable to",
            correct: "any contemporary civilization elsewhere.",
            wrong: ["purely European medieval kingdoms.", "only ancient Greek city-states.", "the Roman Empire alone."]
          }
        ]
      }
    ]
  },
  {
    id: "aztec",
    name: "Aztec Empire",
    emoji: "🦅",
    color: 0xd32f2f,
    colorHex: "#d32f2f",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Montezuma I (As Recorded in Aztec Codices & Spanish Chronicles)",
        emoji: "👑",
        quotes: [
          {
            start: "I expanded the empire through conquest and tribute because the Aztec state depended on a constant flow of goods and captives for",
            correct: "sacrifice and redistribution.",
            wrong: ["purely religious ceremonies.", "royal personal luxury.", "feeding the priesthood alone."]
          },
          {
            start: "The aqueducts bringing fresh water to Tenochtitlan demonstrated that supporting a city of hundreds of thousands required sophisticated",
            correct: "hydraulic engineering.",
            wrong: ["purely magical water rituals.", "Egyptian-style canal systems.", "simple wooden pipe networks."]
          },
          {
            start: "Tributary provinces needed governors who could collect goods, prevent rebellion, and enforce",
            correct: "the emperor's will.",
            wrong: ["local elected law.", "purely priestly authority.", "the nobility's preferences."]
          },
          {
            start: "Elevating Huitzilopochtli and expanding sacrifice justified imperial expansion as serving divine will and legitimized the dominance of",
            correct: "the Mexica people.",
            wrong: ["all Mesoamerican peoples equally.", "purely the priesthood class.", "Spanish colonial ambitions."]
          },
          {
            start: "Tribute wealth funded building projects, supported the nobility, and established Tenochtitlan as",
            correct: "the greatest city in Mesoamerica.",
            wrong: ["a modest regional trading post.", "second to Tlaxcala in size.", "a purely ceremonial center."]
          }
        ]
      },
      {
        name: "Montezuma II (Empire at Peak & Spanish Arrival)",
        emoji: "👑",
        quotes: [
          {
            start: "I inherited an empire at its greatest extent but also its greatest vulnerability — a system that required",
            correct: "continuous military success.",
            wrong: ["peaceful diplomatic expansion.", "purely religious legitimacy.", "Greek-style democratic consent."]
          },
          {
            start: "The arrival of Cortés posed a challenge that exposed the limits of an empire built on traditional warfare and assumptions about",
            correct: "its own invulnerability.",
            wrong: ["purely agricultural productivity.", "the loyalty of distant allies.", "the priesthood's divine protection."]
          },
          {
            start: "My initial attempts at diplomacy rather than immediate military confrontation reflected genuine uncertainty about how to respond to an",
            correct: "entirely unprecedented threat.",
            wrong: ["ordinary Mayan border dispute.", "familiar nomadic raiding party.", "well-understood tributary revolt."]
          },
          {
            start: "The rapid collapse after my death showed that Aztec power rested on fear and continuous victory — once that illusion broke, subject peoples",
            correct: "joined Cortés against us.",
            wrong: ["peacefully accepted Spanish rule.", "retreated to their home cities.", "appealed to distant kingdoms for help."]
          },
          {
            start: "The smallpox epidemic that killed perhaps half of Tenochtitlan's population before the final siege demonstrated that biological factors — not just Spanish steel — determined",
            correct: "the conquest's outcome.",
            wrong: ["purely military superiority alone.", "the will of Huitzilopochtli.", "Aztec warriors' lack of courage."]
          }
        ]
      },
      {
        name: "Aztec Military Organization & Warfare",
        emoji: "⚔️",
        quotes: [
          {
            start: "Jaguar Warriors and Eagle Warriors were elite units whose battlefield role and social prestige showed that the Aztec military was",
            correct: "a structured ranked institution.",
            wrong: ["a purely voluntary militia.", "a priestly ceremonial body.", "identical to Spanish armies."]
          },
          {
            start: "Aztec warfare prioritized capturing enemies alive for sacrifice — a requirement that shaped tactics in ways that sometimes made",
            correct: "killing enemies secondary to capturing them.",
            wrong: ["defensive warfare impossible.", "naval combat necessary.", "cavalry attacks essential."]
          },
          {
            start: "The macuahuitl — an obsidian-edged wooden sword — was devastatingly effective against unarmored opponents but failed against",
            correct: "Spanish steel armor and firearms.",
            wrong: ["Mayan wooden shields.", "Tlaxcalan archers exclusively.", "simple leather protection."]
          },
          {
            start: "Flower wars with neighboring city-states maintained military readiness and secured captives, but also created experienced enemies who later",
            correct: "allied with Cortés against Tenochtitlan.",
            wrong: ["peacefully submitted to Spain.", "converted to Christianity willingly.", "became loyal Aztec tributaries."]
          },
          {
            start: "Mobilizing armies across the empire required tribute-funded logistics, roads, and coordination — showing military power depended as much on",
            correct: "administration as on warriors.",
            wrong: ["purely divine religious favor.", "the emperor's personal bravery.", "spontaneous popular enthusiasm."]
          }
        ]
      },
      {
        name: "Tenochtitlan & Urban Achievement",
        emoji: "🏛️",
        quotes: [
          {
            start: "Building Tenochtitlan on a lake island with aqueducts, causeways, and floating gardens (chinampas) demonstrated mastery of",
            correct: "hydraulic engineering and urban planning.",
            wrong: ["purely religious architectural symbolism.", "Egyptian pyramid construction techniques.", "simple wooden raft technology."]
          },
          {
            start: "Tenochtitlan's population of 200,000–400,000 made it larger than any contemporary European city, fed through the",
            correct: "chinampas and tributary food supply.",
            wrong: ["purely hunting and gathering.", "Egyptian-style grain imports.", "trade with North American peoples."]
          },
          {
            start: "The Tlatelolco market — witnessed by Spanish conquistadors who compared it favorably to anything in Europe — demonstrated that Aztec commerce was",
            correct: "highly organized and specialized.",
            wrong: ["primitive barter without fixed prices.", "controlled entirely by priests.", "limited to local food exchange."]
          },
          {
            start: "The Templo Mayor sat at the cosmic center of Tenochtitlan, physically representing Aztec belief that their city was the axis around which",
            correct: "the universe itself turned.",
            wrong: ["purely regional trade operated.", "Spanish influence would eventually spread.", "Mayan civilization had collapsed."]
          },
          {
            start: "Twin aqueducts from Chapultepec brought fresh water while the other was used for cleaning — a system showing the Aztecs understood",
            correct: "the importance of clean water supply.",
            wrong: ["purely ceremonial water rituals.", "Greek-style democratic water rights.", "simple seasonal rainfall collection."]
          }
        ]
      },
      {
        name: "Aztec Religion & Cosmology",
        emoji: "🕯️",
        quotes: [
          {
            start: "The Aztec Fifth Sun cosmology held that four previous worlds had been destroyed and the current one could only be sustained through",
            correct: "regular human sacrifice.",
            wrong: ["purely animal offerings.", "agricultural harvest festivals.", "peaceful prayer and fasting."]
          },
          {
            start: "Huitzilopochtli as war god and solar deity linked the Mexica people's divine mission to imperial expansion — conquest was not optional but",
            correct: "cosmically required.",
            wrong: ["purely economically motivated.", "the emperor's personal ambition.", "borrowed from Mayan religion."]
          },
          {
            start: "The scale of sacrifice — potentially thousands per year at peak — served to terrorize subject peoples and demonstrate that Aztec power extended into",
            correct: "the cosmic order itself.",
            wrong: ["purely agricultural planning.", "diplomatic relationship management.", "simple population control."]
          },
          {
            start: "Priests held real political power because they interpreted omens, managed the calendar, and advised rulers — making religious and political authority",
            correct: "inseparable in Aztec governance.",
            wrong: ["permanently in conflict with each other.", "divided strictly between separate institutions.", "irrelevant to military decisions."]
          },
          {
            start: "Aztec rulers incorporated conquered peoples' gods into their pantheon while asserting Huitzilopochtli's supremacy — a religious policy that managed",
            correct: "diversity while asserting Mexica dominance.",
            wrong: ["purely theological scholarly debates.", "resistance from all conquered peoples.", "the conversion of subjects to monotheism."]
          }
        ]
      },
      {
        name: "Aztec Trade & Commerce",
        emoji: "💰",
        quotes: [
          {
            start: "The tributary system collected cacao, jade, feathers, obsidian, and cloth from conquered territories — redistributing this wealth to demonstrate",
            correct: "the emperor's boundless generosity and power.",
            wrong: ["purely egalitarian social values.", "the priesthood's economic independence.", "Spanish-style commercial capitalism."]
          },
          {
            start: "Pochteca merchants conducted long-distance trade and simultaneously gathered intelligence for the military — showing commerce and",
            correct: "espionage served the state together.",
            wrong: ["religious pilgrimage were identical activities.", "purely private profit motivated all trade.", "merchants opposed military expansion."]
          },
          {
            start: "Cacao beans served as currency — a commodity money system showing the Aztecs understood that exchange required a medium that was",
            correct: "portable, divisible, and broadly valued.",
            wrong: ["purely edible and perishable.", "controlled only by priests.", "worthless outside Tenochtitlan."]
          },
          {
            start: "The Tlatelolco market connected the empire to coastal, highland, and Yucatan trade networks, integrating the Aztec economy into",
            correct: "a broad Mesoamerican commercial system.",
            wrong: ["purely local village barter.", "direct Chinese maritime trade.", "North American buffalo trade routes."]
          },
          {
            start: "Tribute wealth supported priests, warriors, administrators, and artisans — a large non-productive population that could only exist through",
            correct: "systematic extraction from subject peoples.",
            wrong: ["purely voluntary community donations.", "sophisticated agricultural technology alone.", "peaceful trade without coercion."]
          }
        ]
      },
      {
        name: "Aztec Administration & Governance",
        emoji: "⚖️",
        quotes: [
          {
            start: "The Aztec Empire held together through coercion and the demonstration of military power rather than",
            correct: "the willing consent of subjects.",
            wrong: ["purely religious legitimacy.", "Spanish-style legal administration.", "Greek democratic participation."]
          },
          {
            start: "Unlike Rome, Aztec governance left local rulers in place as long as tribute flowed — a system that was efficient but created",
            correct: "potential allies for any future invader.",
            wrong: ["permanent loyalty from all subjects.", "purely peaceful inter-city relationships.", "identical governance across all provinces."]
          },
          {
            start: "The calpulli system organized neighborhoods for labor drafts, military service, and taxation — making the administrative unit the",
            correct: "clan group, not the individual.",
            wrong: ["Spanish colonial district.", "purely religious congregation.", "voluntary merchant association."]
          },
          {
            start: "Aztec law maintained separate courts for nobles and commoners — a dual system that reinforced hierarchy while providing",
            correct: "some predictable legal order.",
            wrong: ["purely arbitrary royal judgment.", "complete equality before the law.", "Greek-style jury trials."]
          },
          {
            start: "The imperial court at Tenochtitlan concentrated wealth, religious authority, and administrative power — a system that was effective but dangerously",
            correct: "dependent on one central city.",
            wrong: ["distributed across many capitals.", "resistant to military attack.", "acceptable to all subject peoples."]
          }
        ]
      },
      {
        name: "Aztec Culture & Intellectual Life",
        emoji: "📚",
        quotes: [
          {
            start: "Aztec pictographic writing recorded history, tribute lists, and religious knowledge — a system practical for administration but less flexible than",
            correct: "fully phonetic alphabetic scripts.",
            wrong: ["Egyptian hieroglyphs.", "Mayan glyphs.", "Mesopotamian cuneiform."]
          },
          {
            start: "Aztec astronomers tracked Venus, predicted solar eclipses, and maintained two interlocking calendars — a 365-day solar year and a 260-day ritual cycle — demonstrating",
            correct: "sophisticated mathematical and astronomical knowledge.",
            wrong: ["purely magical star reading.", "simple seasonal farming guides.", "borrowed Egyptian astronomy."]
          },
          {
            start: "Aztec nobles were trained in cuicacalli (houses of song) to master poetry, rhetoric, and oratory — showing that intellectual achievement was valued alongside",
            correct: "military and religious roles.",
            wrong: ["purely commercial skills.", "Spanish-style scholastic philosophy.", "agricultural management training."]
          },
          {
            start: "The Florentine Codex, compiled by Sahagún with indigenous informants after conquest, is our richest source on Aztec life — but it reflects",
            correct: "both Aztec knowledge and colonial filtering.",
            wrong: ["purely objective neutral observation.", "entirely the Spanish perspective.", "Hannibal's own military writings."]
          },
          {
            start: "Aztec sculpture — from the Sun Stone to Coatlicue — encoded cosmological beliefs in stone, showing that monumental art served",
            correct: "religious and political propaganda simultaneously.",
            wrong: ["purely decorative aesthetic purposes.", "mathematical calculation functions.", "agricultural calendar marking only."]
          }
        ]
      },
      {
        name: "Aztec Social Structure & Hierarchy",
        emoji: "🏛️",
        quotes: [
          {
            start: "The pipiltin (nobility), macehualtin (commoners), and tlacotin (slaves) formed a rigid hierarchy where birth largely determined",
            correct: "status, occupation, and legal rights.",
            wrong: ["purely religious roles only.", "access to military service exclusively.", "the amount of tribute owed."]
          },
          {
            start: "Elite women managed households, participated in commerce, and served as priestesses — holding real influence within a society where ultimate political power remained",
            correct: "in male noble hands.",
            wrong: ["equally distributed by gender.", "controlled by the merchant class.", "determined by combat prowess."]
          },
          {
            start: "Unlike chattel slavery in the Atlantic world, Aztec slaves could own property, marry, and in some cases purchase their freedom — showing Aztec slavery was",
            correct: "a distinct institution with specific rules.",
            wrong: ["identical to Roman slavery.", "voluntary and temporary always.", "purely a religious practice."]
          },
          {
            start: "The pochteca merchant class occupied an unusual position — wealthier than ordinary commoners but kept ritually separate from nobility, reflecting",
            correct: "tension between commercial and warrior values.",
            wrong: ["purely accidental social placement.", "Spanish influence on Aztec society.", "the priesthood's deliberate design."]
          },
          {
            start: "Military success was one of the few paths for a commoner to rise in status — a social mobility mechanism that",
            correct: "incentivized aggressive warfare.",
            wrong: ["discouraged voluntary military service.", "created a pacifist merchant class.", "undermined the priestly hierarchy."]
          }
        ]
      },
      {
        name: "Aztec Decline & Spanish Conquest",
        emoji: "📜",
        quotes: [
          {
            start: "The Spanish conquest succeeded not through Spanish military superiority alone but through an alliance with Tlaxcala and other peoples who",
            correct: "resented Aztec tributary domination.",
            wrong: ["were paid in Spanish gold.", "had converted to Christianity.", "feared Aztec supernatural power."]
          },
          {
            start: "The smallpox epidemic of 1520 — spreading ahead of Spanish forces — killed perhaps half of Tenochtitlan's population, demonstrating that",
            correct: "disease was the conquest's most powerful weapon.",
            wrong: ["Spanish cannons were invincible.", "Aztec gods had abandoned their people.", "Cortés was militarily undefeatable."]
          },
          {
            start: "The eighty-day siege of Tenochtitlan in 1521 ended with the city's systematic destruction — Cortés demolished it deliberately to",
            correct: "build Mexico City on its ruins.",
            wrong: ["eliminate all Aztec religious sites only.", "punish the nobility specifically.", "prevent the city from ever flooding."]
          },
          {
            start: "The Spanish destruction of Aztec codices — books burned by Diego de Landa-style campaigns — meant that most of what we know about Aztec civilization comes through",
            correct: "colonial-era reconstruction and surviving fragments.",
            wrong: ["complete unbiased archival records.", "purely archaeological excavation.", "Aztec oral traditions alone."]
          },
          {
            start: "The Aztec administrative system — tribute networks, roads, local governance — was partly preserved and adapted by Spain, showing that conquest",
            correct: "often builds on what it destroys.",
            wrong: ["always eliminates all prior institutions.", "was purely destructive in nature.", "created entirely new social structures."]
          }
        ]
      },
      {
        name: "Aztec Writing & Record-Keeping",
        emoji: "📜",
        quotes: [
          {
            start: "Aztec codices recorded tribute obligations, religious calendars, and historical annals — making them administrative and",
            correct: "sacred documents simultaneously.",
            wrong: ["purely decorative artistic works.", "private merchant account books.", "military tactical manuals."]
          },
          {
            start: "The Florentine Codex compiled by Sahagún represents the most comprehensive record of Aztec life but was created under Spanish supervision, meaning its contents reflect",
            correct: "indigenous knowledge filtered through colonial purpose.",
            wrong: ["purely objective pre-conquest Aztec views.", "entirely Spanish invented descriptions.", "Mayan rather than Aztec traditions."]
          },
          {
            start: "The Spanish burning of Aztec books — which one bishop estimated numbered in the thousands — was one of history's greatest",
            correct: "deliberate destructions of human knowledge.",
            wrong: ["accidental archival losses.", "natural disaster outcomes.", "Aztec self-initiated acts."]
          }
        ]
      },
      {
        name: "Aztec Warfare & Conquest Methods",
        emoji: "⚔️",
        quotes: [
          {
            start: "Prioritizing capture over killing shaped Aztec tactics in ways that proved strategically counterproductive against Spanish enemies who",
            correct: "fought to kill, not capture.",
            wrong: ["also preferred taking prisoners.", "used identical ritual warfare rules.", "feared Aztec religious power equally."]
          },
          {
            start: "Leaving local rulers in place as tributary vassals was administratively efficient but created a fragile empire where subject peoples were",
            correct: "always potential rebel allies.",
            wrong: ["permanently loyal through shared religion.", "integrated into Mexica culture fully.", "protected from all outside contact."]
          },
          {
            start: "Flower wars maintained mutual military readiness between Aztec and Tlaxcalan warriors — but also kept Tlaxcala strong enough to become",
            correct: "Cortés' most decisive ally.",
            wrong: ["a permanent peaceful partner.", "a tributary state after 1450.", "irrelevant to the Spanish conquest."]
          }
        ]
      }
    ]
  },
  {
    id: "carthage",
    name: "Carthage Empire",
    emoji: "🐘",
    color: 0x8b0000,
    colorHex: "#8b0000",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Hannibal Barca (As Recorded by Polybius & Livy)",
        emoji: "🐘",
        quotes: [
          {
            start: "At Cannae I weakened my center deliberately, drawing the Romans in, then crushed them from both sides with my stronger wings — a double envelopment that destroyed an army because I understood",
            correct: "encirclement beats brute force.",
            wrong: ["frontal assault wins battles.", "cavalry alone decides wars.", "defense is always superior."]
          },
          {
            start: "The crossing of the Alps with elephants demonstrated that careful planning and knowledge of terrain could overcome seemingly",
            correct: "impossible obstacles.",
            wrong: ["minor logistical problems.", "well-defended Roman passes.", "the Senate's objections."]
          },
          {
            start: "After Cannae, when Maharbal urged me to march on Rome, I hesitated — a decision history judges harshly, showing that even a tactical genius can lose a war through",
            correct: "strategic indecision.",
            wrong: ["too many battlefield victories.", "excessive caution in diplomacy.", "underestimating Roman morale."]
          },
          {
            start: "My campaigns in Italy ultimately failed because Rome could replace its losses, hold its allies, and eventually bring Scipio's forces against",
            correct: "Carthage itself.",
            wrong: ["my Numidian cavalry.", "my Spanish recruits.", "my supply lines."]
          },
          {
            start: "Coordinating Libyans, Numidians, and Spanish mercenaries showed that diverse unit types, each with different strengths, could be combined into a",
            correct: "decisive combined force.",
            wrong: ["reliable citizen army.", "purely cavalry force.", "simple infantry line."]
          },
          {
            start: "Political rivals in Carthage withheld reinforcements, showing that a great field commander can be undone by",
            correct: "a hostile home government.",
            wrong: ["too many battlefield victories.", "generous terms to enemies.", "slow marching speeds."]
          },
          {
            start: "Scipio Africanus defeated me at Zama by turning my own Numidian cavalry against me after Rome won that alliance, proving that",
            correct: "losing key allies can reverse any advantage.",
            wrong: ["Roman legions always defeat Carthaginians.", "elephants are useless in battle.", "tactics matter less than numbers."]
          }
        ]
      },
      {
        name: "Carthaginian Generals & Military Strategy",
        emoji: "⚔️",
        quotes: [
          {
            start: "The Carthaginian military, built on mercenaries rather than citizens, required commanders who could motivate troops of",
            correct: "different cultures and loyalties.",
            wrong: ["identical training and background.", "purely Phoenician heritage.", "Roman-style discipline."]
          },
          {
            start: "War elephants served Carthaginian commanders as psychological weapons, formation-breakers, and symbols of",
            correct: "overwhelming exotic power.",
            wrong: ["purely ceremonial display.", "defensive battlefield anchors.", "cheap replaceable units."]
          },
          {
            start: "The Mercenary War (241–238 BCE), where unpaid soldiers nearly destroyed Carthage after the First Punic War, exposed the fatal vulnerability of",
            correct: "armies loyal to pay, not country.",
            wrong: ["democratic governance in crisis.", "trading cities against land powers.", "wealthy oligarchies under pressure."]
          },
          {
            start: "Carthaginian naval dominance allowed the empire to control trade routes and prevent enemies from",
            correct: "operating freely at sea.",
            wrong: ["trading with North Africa.", "building their own warships.", "recruiting Numidian cavalry."]
          },
          {
            start: "Taking war into Italy rather than defending Carthage showed commanders understood that offensive pressure could disrupt Rome's",
            correct: "agricultural base and Italian allies.",
            wrong: ["senate's decision-making.", "purely ceremonial military parades.", "gold reserves in the treasury."]
          },
          {
            start: "Rome's eventual superiority showed that military innovation cannot permanently overcome a rival with vastly greater",
            correct: "manpower and replacement capacity.",
            wrong: ["naval shipbuilding tradition.", "diplomatic skill in Africa.", "religious unity at home."]
          }
        ]
      },
      {
        name: "Carthaginian Trade & Economic Power",
        emoji: "💰",
        quotes: [
          {
            start: "Carthaginian wealth came from taxing Mediterranean trade routes connecting North Africa, the Levant, and the western Mediterranean — wealth built on",
            correct: "controlling commercial chokepoints.",
            wrong: ["farming the North African interior.", "tribute from Roman allies.", "Egyptian grain monopolies."]
          },
          {
            start: "Trading colonies across the Mediterranean extended Carthage's commercial reach and secured",
            correct: "resources unavailable locally.",
            wrong: ["purely military garrison positions.", "religious pilgrimage networks.", "grain stores for Carthage alone."]
          },
          {
            start: "Carthage's control of Atlantic tin routes and Baltic amber routes demonstrated that prosperity required",
            correct: "mastering long-distance trade networks.",
            wrong: ["conquering producing regions militarily.", "sharing routes with Greek rivals.", "relying only on local resources."]
          },
          {
            start: "The wealth from trade funded Carthage's navy and mercenary armies, proving that economic and military power were",
            correct: "inseparable in Carthage's system.",
            wrong: ["always in tension with each other.", "independently managed by the Senate.", "irrelevant to battlefield outcomes."]
          },
          {
            start: "Carthaginian commerce built relationships across cultures, showing that trade created dependencies that outlasted",
            correct: "purely military alliances.",
            wrong: ["religious and cultural differences.", "the lifespan of individual merchants.", "the Senate's political decisions."]
          }
        ]
      },
      {
        name: "Carthaginian Government & Administration",
        emoji: "⚖️",
        quotes: [
          {
            start: "Carthage's oligarchic senate, dominated by merchant families, sometimes prioritized factional interests over",
            correct: "unified national strategy.",
            wrong: ["religious ceremonial duties.", "the welfare of mercenary troops.", "Hannibal's tactical preferences."]
          },
          {
            start: "Relying on mercenaries gave military flexibility but created vulnerability because armies dissolved without",
            correct: "continuous reliable payment.",
            wrong: ["Carthaginian citizenship rights.", "a charismatic Barcid commander.", "strong naval support."]
          },
          {
            start: "The Barcid family's independent power base in Spain — essentially a private empire — showed that Carthage's fractured politics allowed generals to operate",
            correct: "almost independently of the Senate.",
            wrong: ["only with papal-style authority.", "strictly under Senate supervision.", "purely as mercenary contractors."]
          },
          {
            start: "Factional politics meant Carthage struggled to send Hannibal the reinforcements that might have",
            correct: "changed the Second Punic War's outcome.",
            wrong: ["prevented the First Punic War.", "satisfied Roman peace terms.", "kept Sicily in Carthaginian hands."]
          },
          {
            start: "Managing territories in North Africa, Spain, and the islands required tribute systems and local arrangements because Carthage lacked",
            correct: "Rome's integrated provincial administration.",
            wrong: ["the population to garrison them.", "interest in overseas territories.", "naval forces to connect them."]
          }
        ]
      },
      {
        name: "Carthaginian Religion & Culture",
        emoji: "🕯️",
        quotes: [
          {
            start: "Ancient sources describe child sacrifice at Carthage's tophet sanctuary, but modern archaeologists debate whether these were ritual sacrifices or infant burials — showing that our understanding of Carthage depends heavily on",
            correct: "often hostile Roman sources.",
            wrong: ["confirmed Carthaginian written records.", "neutral Greek archaeological reports.", "Hannibal's own memoirs."]
          },
          {
            start: "The goddess Tanit and the god Baal Hammon were Carthage's supreme deities, whose worship reinforced community identity and provided divine legitimacy for",
            correct: "rulers and military campaigns.",
            wrong: ["purely private household rituals.", "Greek philosophical schools.", "the Roman Senate's decisions."]
          },
          {
            start: "Religious festivals and public ceremonies demonstrated Carthage's wealth and reinforced social bonds, showing religion served both spiritual and",
            correct: "civic political functions.",
            wrong: ["purely entertainment purposes.", "military recruitment goals.", "anti-Roman propaganda needs."]
          },
          {
            start: "Carthaginian art blended Phoenician and Hellenistic influences, showing that a trading civilization could absorb foreign styles while maintaining",
            correct: "a distinctive local identity.",
            wrong: ["strict artistic isolation.", "purely Egyptian artistic traditions.", "Roman artistic dominance."]
          },
          {
            start: "Because Rome destroyed Carthage's libraries and records in 146 BCE, almost everything we know about Carthaginian culture comes from",
            correct: "enemies and outside observers.",
            wrong: ["well-preserved Punic archives.", "Hannibal's personal letters.", "neutral Etruscan records."]
          }
        ]
      },
      {
        name: "Carthaginian Naval Dominance & Maritime Power",
        emoji: "⛵",
        quotes: [
          {
            start: "Centuries of maritime tradition gave Carthage the ability to control Mediterranean sea lanes and project power across",
            correct: "the entire Mediterranean basin.",
            wrong: ["the North African interior exclusively.", "the Iberian interior only.", "the Red Sea trade routes."]
          },
          {
            start: "The cothon — Carthage's unique circular military harbor — demonstrated that naval dominance required permanent",
            correct: "purpose-built infrastructure investment.",
            wrong: ["reliance on hired Greek shipwrights.", "seasonal fleet deployments only.", "open beach landing sites."]
          },
          {
            start: "Carthaginian naval forces transported armies, protected merchants, and conducted amphibious operations, showing that sea control provided",
            correct: "strategic flexibility land powers lacked.",
            wrong: ["cheaper armies than mercenaries.", "immunity from Roman land attack.", "automatic control of Sicily."]
          },
          {
            start: "Rome built its first serious navy using a captured Carthaginian ship as a template and added the corvus boarding bridge — defeating Carthage by",
            correct: "copying and then improving on its technology.",
            wrong: ["bribing Carthaginian naval commanders.", "avoiding sea battles entirely.", "using only allied Greek fleets."]
          },
          {
            start: "Hanno's voyage along the West African coast showed Carthage valued commercial knowledge and exploration beyond",
            correct: "the Pillars of Hercules.",
            wrong: ["military conquest of new lands.", "purely religious pilgrimage routes.", "established Greek trading zones."]
          }
        ]
      },
      {
        name: "Carthage vs. Rome: Strategic Conflict",
        emoji: "⚔️",
        quotes: [
          {
            start: "The Punic Wars revealed a fundamental strategic contrast: Carthage relied on naval power and merchant wealth while Rome relied on",
            correct: "citizen legions and Italian alliances.",
            wrong: ["diplomatic isolation of Carthage.", "Greek mercenary superiority.", "religious crusading ideology."]
          },
          {
            start: "Rome's ultimate victory depended not only on defeating Carthaginian armies but on holding the loyalty of",
            correct: "its Italian allied states.",
            wrong: ["Greek city-states in Sicily.", "North African Berber kingdoms.", "Egyptian Ptolemaic support."]
          },
          {
            start: "The destruction of Carthage in 146 BCE — the city burned for seventeen days — showed Rome viewed Carthage not as a rival to manage but as",
            correct: "an existential threat to eliminate.",
            wrong: ["a potential commercial partner.", "a useful Mediterranean buffer state.", "a source of skilled administrators."]
          },
          {
            start: "Scipio Africanus took the war to Africa, forcing Hannibal home from Italy — demonstrating that Rome's strategic genius lay in",
            correct: "attacking the enemy's base, not just his army.",
            wrong: ["superior numbers on every battlefield.", "purchasing Numidian betrayal with gold.", "waiting for Hannibal to retreat voluntarily."]
          },
          {
            start: "The outcome of the Punic Wars was not inevitable — had Carthage reinforced Hannibal after Cannae, the Mediterranean world might have looked",
            correct: "fundamentally different today.",
            wrong: ["exactly as it does now.", "more Greek than Roman.", "dominated by the Seleucid Empire."]
          }
        ]
      },
      {
        name: "Carthaginian Society & Social Structure",
        emoji: "🏛️",
        quotes: [
          {
            start: "Wealth and political power coincided in Carthage — merchant families controlled both the Senate and military appointments, producing policies that often",
            correct: "prioritized commercial over military needs.",
            wrong: ["favored the poorest citizens first.", "gave generals unlimited authority.", "ignored the merchant class entirely."]
          },
          {
            start: "The Barcid family's independent control of Spain demonstrated that Carthage's political structure allowed successful generals to build",
            correct: "personal empires within the empire.",
            wrong: ["purely symbolic honorific positions.", "strictly Senate-approved outposts.", "temporary seasonal encampments."]
          },
          {
            start: "Elite Carthaginian women held more property rights and economic freedom than in many contemporary Mediterranean societies, reflecting",
            correct: "the Phoenician commercial tradition of female participation.",
            wrong: ["Roman legal influence on Carthaginian law.", "Greek philosophical ideas about gender.", "purely ceremonial royal privileges."]
          },
          {
            start: "Enslaved people — obtained through trade and conquest — provided the agricultural labor that underpinned Carthaginian prosperity, meaning the city's wealth was built partly on",
            correct: "systematic forced labor.",
            wrong: ["purely voluntary hired workers.", "tribute paid in Roman silver.", "Greek artisan immigration."]
          }
        ]
      },
      {
        name: "Carthaginian Decline & Fall",
        emoji: "📜",
        quotes: [
          {
            start: "Carthage's decline combined military defeats, loss of naval dominance, commercial disruption, and Senate factionalism that prevented",
            correct: "a unified response to Roman pressure.",
            wrong: ["any diplomatic contact with Rome.", "mercenary recruitment in Spain.", "the construction of new warships."]
          },
          {
            start: "The Third Punic War began when Rome demanded Carthage relocate inland — effectively destroying a sea-trading civilization by separating it from",
            correct: "its harbor and maritime identity.",
            wrong: ["its North African grain supply.", "its Greek cultural connections.", "its Numidian cavalry allies."]
          },
          {
            start: "Rome rebuilt Carthage as a prosperous Roman city — showing the site retained value, but the Carthaginian civilization had been",
            correct: "completely and deliberately erased.",
            wrong: ["peacefully absorbed into Roman culture.", "partially preserved in written records.", "continued secretly by Punic communities."]
          },
          {
            start: "The myth that Rome 'salted the earth' of Carthage is modern invention — the real destruction was of its people, archives, and culture, meaning we know Carthage almost entirely through",
            correct: "the accounts of those who destroyed it.",
            wrong: ["Hannibal's own written memoirs.", "neutral Etruscan historical records.", "Greek archaeological excavations."]
          },
          {
            start: "The study of Carthage demonstrates that the Mediterranean world was not destined to be Roman — the outcome could have been different if",
            correct: "Carthage had reinforced Hannibal after Cannae.",
            wrong: ["Rome had never built a navy.", "Hannibal had avoided the Alps entirely.", "the Senate had been more democratic."]
          }
        ]
      },
      {
        name: "Carthaginian Commerce & Merchants",
        emoji: "💰",
        quotes: [
          {
            start: "Carthaginian merchants built networks from the Atlantic coasts of Africa and Britain to the eastern Mediterranean, making the city a dominant commercial hub connecting",
            correct: "western and eastern Mediterranean worlds.",
            wrong: ["the Indian Ocean to the Baltic.", "China to the Saharan interior.", "Rome to Persia directly."]
          },
          {
            start: "Merchant wealth translated directly into political power in Carthage because the Senate was dominated by",
            correct: "the same families who controlled trade.",
            wrong: ["hereditary military aristocrats.", "elected popular assemblies.", "Zoroastrian priestly classes."]
          },
          {
            start: "Trading posts served multiple purposes: securing supplies, controlling routes, supporting naval operations, and extending Carthaginian",
            correct: "cultural and economic presence abroad.",
            wrong: ["purely military garrison networks.", "religious missionary activities.", "agricultural colonial settlements."]
          },
          {
            start: "Customs duties and trade taxes meant Carthaginian rulers understood that protecting merchants was essential to",
            correct: "funding the state itself.",
            wrong: ["pleasing the priestly class.", "satisfying Roman treaty demands.", "preventing Greek competition."]
          }
        ]
      },
      {
        name: "Carthaginian Influence & Cultural Legacy",
        emoji: "🌍",
        quotes: [
          {
            start: "Carthaginian commercial and colonial influence shaped the western Mediterranean even after 146 BCE, showing that economic networks outlast",
            correct: "the political power that built them.",
            wrong: ["the military forces that protected them.", "the merchants who created them.", "the religious institutions behind them."]
          },
          {
            start: "Carthaginian culture blended Phoenician foundations with Greek and North African influences, creating something distinctive that reflected its position as a",
            correct: "crossroads commercial civilization.",
            wrong: ["purely military empire.", "Greek philosophical colony.", "Egyptian religious satellite."]
          },
          {
            start: "Hannibal's tactical innovations — the double envelopment, combined arms coordination, strategic use of terrain — were studied by commanders from Scipio to Napoleon, showing that",
            correct: "military genius transcends the civilization that produced it.",
            wrong: ["Roman generals always surpassed Carthaginian ones.", "elephants remained central to later warfare.", "Carthaginian tactics were purely defensive."]
          },
          {
            start: "Because Rome destroyed Carthage's written records, Hannibal is remembered almost entirely through Roman eyes — which means history's portrait of him reflects",
            correct: "the perspective of those he nearly defeated.",
            wrong: ["objective neutral Greek historians.", "Hannibal's own surviving letters.", "confirmed Carthaginian royal inscriptions."]
          }
        ]
      }
    ]
  },
  {
    id: "sassanid",
    name: "Sassanid Empire",
    emoji: "🗡️",
    color: 0xd32f2f,
    colorHex: "#d32f2f",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Ardashir I (Founder & Consolidator)",
        emoji: "👑",
        quotes: [
            { 
              start: "I overthrew the Parthian Arsacid dynasty by recognizing that their feudal system of powerful nobles had weakened central authority and that a more centralized, efficient administrative system could overcome",
              "correct": "decentralized rival powers.",
              "wrong": ["maintain the feudal noble system.", "rely on traditional Parthian alliances.", "achieve victory through diplomacy alone."] 
            },
            { 
              start: "The establishment of the Sassanid dynasty required demonstrating that the new system could provide better governance than the old, including a more efficient taxation system, a professional bureaucracy, and the ability to",
              "correct": "defend the realm.",
              "wrong": ["expand into Roman territory.", "convert all subjects to Zoroastrianism.", "eliminate the noble class entirely."] 
            },
            { 
              start: "My adoption of Zoroastrianism as the state religion served to unite the diverse peoples under my rule because it provided a shared spiritual framework, gave legitimacy to my rule through religious authority, and created a sense of",
              "correct": "common identity.",
              "wrong": ["local autonomy.", "tribal independence.", "collective belonging."] 
            },
            { 
              start: "The organization of the empire into provinces with appointed governors and a professional bureaucracy showed that I understood that an empire of such size and diversity required a centralized administrative system more efficient than",
              "correct": "feudal relationships.",
              "wrong": ["noble authority.", "aristocratic rule.", "decentralized power."] 
            },
            { 
              start: "The establishment of a professional army, distinct from the feudal levies of the Parthian system, was necessary because the king needed forces that could be mobilized quickly and were loyal to the king rather than to",
              "correct": "individual nobles.",
              "wrong": ["local aristocrats.", "regional lords.", "powerful landowners."] 
            }
        ]
      },
      {
        name: "Shapur I (Military Triumph & Territorial Expansion)",
        emoji: "⚔️",
        quotes: [
          { 
            start: "My defeat of the Roman Emperor Valerian demonstrated that Sassanid military power could stand against Rome and that Sassanid forces, despite Rome's reputation, were capable of defeating Roman armies through superior tactics and",
            "correct": "coordination.",
            "wrong": ["strategy.", "organization.", "leadership."] 
          },
          { 
            start: "The capture of the Roman Emperor and the procession celebrating the victory served to demonstrate that Sassanid power was real, that the king was a great warrior, and that Rome, despite its power, could",
            "correct": "be defeated.",
            "wrong": ["be conquered.", "be challenged.", "suffer defeat."] 
          },
          { 
            start: "My campaigns extended Sassanid territory and brought wealth through conquest, but I also understood that maintaining these territories required establishing administrative control and preventing rivals from using the conquered lands as",
            "correct": "bases against Sassanid power.",
            "wrong": ["strongholds for rebellion.", "staging grounds for attacks.", "launching points for invasion."] 
          },
          { 
            start: "The relationship between Sassanid and Roman power showed that the two great empires of the age could recognize each other's strength and establish a pattern of conflict and negotiation where neither could",
            "correct": "completely conquer the other.",
            "wrong": ["defeat the other.", "dominate the rival.", "permanently subjugate the enemy."] 
          },
          { 
            start: "My military campaigns against the eastern rivals and the expansion toward India demonstrated that a Sassanid king could project power across vast distances and establish dominance over a region stretching from the Mediterranean to",
            "correct": "the borders of Central Asia and Bactria.",
            "wrong": ["the Indus River.", "Central Asia.", "the Arabian Sea."] 
          }
        ]
      },
      {
        name: "Khosrow I Anushirvan (The Just - Golden Age)",
        emoji: "👑",
        quotes: [
            { 
              start: "I am remembered as 'Anushirvan' (of immortal soul) because my reign was characterized by establishing a system of justice that benefited the people, created stable governance, and made Sassanid rule appear fair and",
              "correct": "efficient and stable.",
              "wrong": ["prosperous and organized.", "powerful and united.", "wealthy and secure."]
            },
            { 
              start: "My administrative reforms, including the establishment of a professional tax system and a centralized bureaucracy, served to ensure consistent revenue collection, reduce corruption, and make the empire more",
              "correct": "efficient and stable.",
              "wrong": ["prosperous and organized.", "powerful and united.", "wealthy and secure."] 
            },
            { 
              start: "The establishment of the Peace of 50 Years with the Byzantine Empire through negotiation and treaty showed that even powerful rulers could recognize that endless warfare was costly and that mutual recognition of strength served both empires",
              "correct": "better than conflict.",
              "wrong": ["more than war.", "over endless fighting.", "above constant struggle."] 
            },
            { 
              start: "My patronage of scholars, physicians, and the preservation of knowledge through the establishment of Jundishapur Academy demonstrated that I believed an empire's greatness lay not only in military power but in cultural achievement and",
              "correct": "the advancement of knowledge.",
              "wrong": ["intellectual progress.", "scholarly pursuits.", "educational excellence."] 
            },
            { 
              start: "My military campaigns against the White Huns, who threatened from Central Asia, showed that even during a period of relative peace with Rome, the Sassanid king needed to remain vigilant against",
              "correct": "external threats.",
              "wrong": ["northern invasions.", "nomadic raiders.", "frontier dangers."] 
            },
            { 
              start: "The reputation for justice and good governance that characterized my reign created stability and loyalty because the people understood that a king who governed fairly and maintained order provided benefits that outweighed the",
              "correct": "taxes they paid.",
              "wrong": ["burdens of rule.", "cost of empire.", "demands of the state."] 
            },
            { 
              start: "My continuation and improvement of the Sassanid road and communication systems served to facilitate trade, ensure rapid communication across the empire, and allow the king to maintain control over distant provinces and",
              "correct": "respond quickly to threats.",
              "wrong": ["react swiftly to crises.", "address emergencies promptly.", "mobilize forces rapidly."] 
            },
            { 
              start: "When the Byzantine Emperor Justinian closed the Platonic Academy in Athens in 529 CE, Khosrow I welcomed the fleeing Greek philosophers to his court, demonstrating", 
              "correct": "that the Sassanid Empire was a refuge for learning that Byzantium rejected.", 
              "wrong": ["hostility toward Byzantine culture.", "that Zoroastrianism was compatible with Greek philosophy.", "that Khosrow sought to undermine Byzantium culturally."] 
            }
        ]
      },
      {
        name: "Sassanid Zoroastrian State & Ideology",
        emoji: "🕯️",
        quotes: [
            { 
              start: "The establishment of Zoroastrianism as the state religion served to create a shared ideology across the diverse peoples of the empire because it provided a philosophical framework (good vs. evil, order vs. chaos) that justified Sassanid rule and",
              "correct": "created common values.",
              "wrong": ["regional tribal independence.", "tolerance for all local religions equally.", "Greek cultural dominance."] 
            },
            { 
              start: "The role of the Zoroastrian priesthood (Magi) in Sassanid governance meant that religious and political authority were intertwined, allowing the king to draw on religious legitimacy for his authority while the priesthood benefited from",
              "correct": "royal patronage and influence.",
              "wrong": ["political power.", "state support.", "governmental authority."] 
            },
            { 
              start: "The concept of Ahura Mazda (Wise Lord) as the supreme god, who favored justice and order, provided a religious justification for Sassanid rule that framed the king as an instrument of divine will and presented Sassanid authority as",
              "correct": "reflecting cosmic order.",
              "wrong": ["divinely ordained.", "cosmically justified.", "part of universal balance."] 
            },
            { 
              start: "While some Sassanid rulers persecuted Christians and other minorities for political rather than purely religious reasons, the empire's religious policy varied significantly by ruler, ranging from tolerance to active persecution in service of",
              "correct": "ideological unity.",
              "wrong": ["religious conformity.", "spiritual uniformity.", "doctrinal consistency."] 
            },
            { 
              start: "The fire temples that were centers of religious practice also served as administrative and social centers where rulers could present themselves as guardians of the faith and where communities gathered for religious and",
              "correct": "civic purposes.",
              "wrong": ["communal gatherings.", "public assemblies.", "social functions."] 
            }
        ]
      },
      {
        name: "Sassanid Military Organization & Strategy",
        emoji: "⚔️",
        quotes: [
            { 
              start: "The Sassanid military, organized into cavalry units (the famous Cataphracts—heavily armored mounted warriors), infantry, and support forces, achieved dominance because this organization allowed for the support of heavy cavalry with",
              "correct": "infantry.",
              "wrong": ["archers.", "siege equipment.", "supply trains."] 
            },
            { 
              start: "The development of Cataphract cavalry—heavily armored mounted warriors—gave Sassanid forces a significant advantage against enemies because they could break through enemy formations, resist damage from arrows and light weapons, and",
              "correct": "project force at high speed.",
              "wrong": ["dominate close combat.", "intimidate opponents.", "scatter light cavalry."] 
            },
            { 
              start: "Sassanid military campaigns against Rome required that commanders understand that Roman legions, despite their reputation, could be defeated through tactics that exploited their weaknesses, such as using",
              "correct": "superior cavalry mobility.",
              "wrong": ["hit-and-run attacks.", "mounted archers.", "swift flanking maneuvers."] 
            },
            { 
              start: "The maintenance of permanent garrisons along the frontier with Rome served to defend against attack, monitor Roman movements, and establish a forward defense that could",
              "correct": "slow an invasion.",
              "wrong": ["absorb the initial assault.", "delay enemy advances.", "weaken attacking forces."] 
            },
            { 
              start: "The logistics required to supply large Sassanid armies across vast distances required that the empire establish supply lines, depots, the ability to requisition resources from provinces, and",
              "correct": "efficient administrative systems.",
              "wrong": ["well-maintained roads.", "organized record-keeping.", "coordinated planning."] 
            },
            { 
              start: "The Sassanid use of naval forces on the Persian Gulf and in coastal regions served to protect trade routes, defend against amphibious assault, and",
              "correct": "project power across water.",
              "wrong": ["control maritime trade.", "prevent piracy.", "establish naval supremacy."] 
            }
        ]
      },
      {
        name: "Sassanid Administration & Governance",
        emoji: "⚖️",
        quotes: [
          { 
            start: "The Sassanid system of governance required the establishment of a professional bureaucracy with appointed officials because the king could not personally oversee all provinces and coordinate military affairs across",
            "correct": "the empire.",
            "wrong": ["such vast distances.", "multiple continents.", "so many regions."] 
          },
          { 
            start: "The Sassanid approach to taxation required establishing consistent rates and systems that could extract revenue without driving subject peoples to rebellion, showing that rulers understood the balance between extracting sufficient resources and",
            "correct": "maintaining stability.",
            "wrong": ["preserving peace.", "avoiding unrest.", "preventing revolts."] 
          },
          { 
            start: "The appointment of local administrators and the establishment of provincial capitals allowed rulers to maintain control over distant territories while allowing some local autonomy, demonstrating that centralization could coexist with",
            "correct": "recognition of local conditions.",
            "wrong": ["regional independence.", "cultural diversity.", "traditional customs."] 
          },
          { 
            start: "The legal codes and systems of justice established in the Sassanid Empire served to create the perception that Sassanid rule was orderly, predictable, and fair, which helped maintain loyalty and",
            "correct": "legitimacy.",
            "wrong": ["authority.", "obedience.", "compliance."] 
          },
          { 
            start: "The integration of conquered territories into the Sassanid system where possible while establishing Sassanid administrative control, showing that effective governance meant balancing imposition of central authority with respect for",
            "correct": "local practices.",
            "wrong": ["existing traditions.", "regional preferences.", "indigenous customs."] 
          }
        ]
      },
      {
        name: "Sassanid Trade & Economic Power",
        emoji: "💰",
        quotes: [
          { 
            start: "Sassanid prosperity came from the control of trade routes connecting the Mediterranean, Central Asia, India, and the Far East, which allowed rulers to tax merchants and establish relationships with",
            "correct": "distant powers.",
            "wrong": ["neighboring tribes.", "rival empires.", "foreign merchants."] 
          },
          { 
            start: "The cities of Ctesiphon, Seleucia, and other Sassanid centers flourished as trade hubs because rulers invested in infrastructure that made trade safe and profitable, demonstrating that merchants would concentrate in cities where they could",
            "correct": "conduct business securely.",
            "wrong": ["achieve maximum profits.", "find rare goods.", "access skilled craftsmen."] 
          },
          { 
            start: "The Sassanid minting of high-quality drachmas (coins) served to facilitate long-distance trade and demonstrated that Sassanid currency was trusted across regions and that the empire was recognized as a",
            "correct": "major economic power.",
            "wrong": ["trading partner.", "unified political entity.", "military force."] 
          },
          { 
            start: "The wealth from trade allowed Sassanid rulers to finance military campaigns, conduct building projects, support the court and administration, and distribute gifts, showing that economic power and military power were interconnected—trade wealth could",
            "correct": "fund military dominance.",
            "wrong": ["sustain imperial expansion.", "support endless wars.", "finance empire-building."] 
          },
          { 
            start: "The establishment of roads, caravanserais (roadside inns), and security measures to protect merchants served the dual purpose of facilitating trade (and collecting taxes) while also preventing bandits and rivals from",
            "correct": "using trade routes.",
            "wrong": ["disrupting commerce.", "threatening merchants.", "controlling regions."] 
          }
        ]
      },
      {
        name: "Sassanid Culture & Intellectual Achievement",
        emoji: "📚",
        quotes: [
          {
            start: "The Sassanid patronage of scholarship, medicine, and astronomy through institutions like Jundishapur Academy served to demonstrate that the empire valued knowledge and that Sassanid civilization could rival Byzantine and",
            "correct": "other cultures intellectually.",
            "wrong": ["military power only.", "religious dogma.", "barbarian tribes."]
          },
          {
            start: "The preservation of Zoroastrian religious texts and the composition of literary works under Sassanid rule created a cultural legacy that would influence Islamic civilization and beyond, showing that intellectual achievements could",
            "correct": "survive political and military changes.",
            "wrong": ["vanish overnight.", "be easily destroyed.", "remain isolated."]
          },
          {
            start: "Sassanid art and architecture, which synthesized Persian, Greek, and other influences, reflected that the empire could absorb foreign influences while maintaining its own identity, demonstrating that cultural sophistication",
            "correct": "did not require cultural isolation.",
            "wrong": ["demanded isolation.", "required purity.", "meant rejection."]
          },
          {
            start: "The development of a distinctive Sassanid literary tradition, including the Pahlavi language texts and historical records, served to preserve knowledge, record historical events, and create a sense of",
            "correct": "cultural continuity and identity.",
            "wrong": ["foreign domination.", "total decline.", "religious chaos."]
          },
          {
            start: "Sassanid scholars' engagement with Greek learning, Indian mathematics, and Chinese knowledge through trade and contact demonstrated that the empire was open to external influences and could learn from other civilizations while",
            "correct": "maintaining its own traditions.",
            "wrong": ["copying blindly.", "rejecting everything.", "losing identity."]
          }
        ]
      },
      {
        name: "Sassanid Relations with Rome/Byzantium",
        emoji: "🌍",
        quotes: [
          { 
            start: "The centuries-long conflict between Sassanid and Roman/Byzantine empires remained largely inconclusive because both empires had comparable military resources and neither could muster sufficient force to",
            "correct": "continuous warfare.",
            "wrong": ["endless conflict.", "perpetual fighting.", "ongoing battles."]
          },
          { 
            start: "The establishment of border regions, buffer states, and treaty obligations showed that both empires understood that maintaining peace, even if temporary, was sometimes more advantageous than",
            correct: "continuous warfare.",
            wrong: ["endless conflict.", "perpetual fighting.", "ongoing battles."] 
          },
          { 
            start: "The exchange of embassies and the conduct of diplomacy alongside military conflict demonstrated that even great rivals could recognize each other's strength and maintain relationships that included both",
            correct: "military competition and diplomatic negotiation.",
            wrong: ["warfare and peace talks.", "conflict and alliance.", "hostility and discussion."] 
          },
          { 
            start: "The conflicts over Armenia and other buffer regions showed that both empires valued strategic territory and that the struggle for dominance in these regions was a prolonged competition where neither side could",
            correct: "maintain permanent control.",
            wrong: ["achieve lasting victory.", "secure lasting dominance.", "establish lasting authority."] 
          },
          { 
            start: "The ultimately successful invasion of Sassanid territories by Arab Muslim forces after centuries of standing against Rome demonstrated that even militarily dominant empires face challenges when new, determined rivals emerge with",
            correct: "organizational advantages.",
            wrong: ["military innovation.", "strategic superiority.", "tactical improvements."] 
          }
        ]
      },
      {
        name: "Sassanid Women & Royal Family",
        emoji: "👩",
        quotes: [
          { 
            start: "Women in Sassanid royal families held important roles including serving as regents, advising rulers, managing royal estates, and sometimes participating in governance because elite women could exercise real power and",
            correct: "influence.",
            wrong: ["no real political agency.", "purely ceremonial roles.", "authority only through male relatives."] 
          },
          { 
            start: "The succession of rulers through the royal family and the sometimes contested nature of Sassanid succession meant that different factions within the royal family could",
            correct: "support different candidates.",
            wrong: ["back rival claimants.", "champion opposing heirs.", "promote competing successors."] 
          },
          { 
            start: "The role of the royal family in maintaining the stability of the empire was important because they provided networks of relationship and obligation, control over provinces and resources, and potential sources of",
            correct: "legitimacy for rulers.",
            wrong: ["authority for kings.", "sanction for leadership.", "validation for power."] 
          }
        ]
      },
      {
        name: "Sassanid Decline & Fall",
        emoji: "📜",
        quotes: [
          { 
            start: "The decline of Sassanid power came from multiple factors: the exhaustion of the empire from centuries of conflict with Rome/Byzantium, internal civil conflict, the rise of powerful generals who challenged central authority, and",
            correct: "the emergence of the Islamic Arab caliphate.",
            wrong: ["the rise of Islamic powers.", "Arab military expansion.", "Muslim conquest movements."] 
          },
          { 
            start: "The Battle of Qadisiyyah (~636 CE) broke Sassanid military power, but the empire finally collapsed after Nahavand (642 CE) and the death of Yazdegerd III, showing that even after a decisive defeat",
            correct: "empires can resist for years before final collapse.",
            wrong: ["sufficient military strength.", "adequate military resources.", "strong military organization."] 
          },
          { 
            start: "The rapid spread of Islam throughout former Sassanid territories after the military conquest suggests that despite Sassanid cultural and religious sophistication, many subject peoples were willing to",
            correct: "accept the new Islamic rule.",
            wrong: ["embrace the new faith.", "adopt Islamic practices.", "submit to Islamic authority."] 
          },
          { 
            start: "The legacy of Sassanid civilization included contributions to art, literature, and religious philosophy that would influence Islamic civilization and beyond, demonstrating that cultural and intellectual achievements could",
            correct: "survive political collapse.",
            wrong: ["outlast empires.", "endure conquest.", "transcend political change."] 
          },
          { 
            start: "The study of the Sassanid Empire demonstrates that it was not merely a continuation of Persian tradition but rather a sophisticated, centralized empire that maintained dominance for nearly",
            correct: "500 years.",
            wrong: ["50 years.", "100 years.", "250 years."] 
          },
          { 
            start: "Khosrow II initially conquered Egypt, Syria, and Anatolia from Byzantium (~619 CE), bringing the Sassanid Empire to its greatest territorial extent, but his overextension was reversed by Heraclius, showing that", 
            "correct": "military overexpansion can exhaust an empire and create the conditions for its eventual collapse.", 
            "wrong": ["Byzantine military was always superior.", "territorial gains are always permanent.", "religious wars are inevitably lost."] 
          }
        ]
      },
      {
        name: "Sassanid Social Structure & Hierarchy",
        emoji: "🏛️",
        quotes: [
          { 
            start: "Sassanid society was organized into distinct classes: the royal family and nobility, priests (Magi), warriors, scribes and administrators, merchants and craftspeople, and farmers/commoners because",
            correct: "this hierarchy allowed for specialization.",
            wrong: ["social order was necessary.", "control was maintained.", "stability was ensured."] 
          },
          { 
            start: "The status of the priestly class in Sassanid society meant that religious authority and political authority were closely connected, with priests serving to advise rulers, maintain religious orthodoxy, and",
            correct: "provide moral authority.",
            wrong: ["enforce spiritual law.", "ensure religious compliance.", "preserve sacred order."] 
          },
          { 
            start: "The recognition of merit in the selection of administrators and the advancement of capable individuals regardless of birth showed that Sassanid rulers understood that effective administration required talented personnel and that the empire benefited from appointing capable individuals to",
            correct: "important positions.",
            wrong: ["positions of power.", "roles of responsibility.", "offices of influence."] 
          },
          { 
            start: "The wealth and status of merchants and craftspeople in Sassanid society depended on the king's patronage and the provision of security and trade opportunities, showing that economic classes benefited from royal support and",
            correct: "contributed to the empire's prosperity.",
            wrong: ["enhanced imperial wealth.", "strengthened state resources.", "advanced national success."] 
          }
        ]
      }
    ]
  },
  {
    id: "inca",
    name: "Inca Empire",
    emoji: "🌄",
    color: 0xff7043,
    colorHex: "#ff7043",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Pachacuti Inca Yupanqui (Empire Reformer)",
        emoji: "👑",
        quotes: [
            { 
              start: "I, Pachacuti, have transformed Cusco from a small valley into the center of a great empire because the Sun God Inti commanded me to expand and organize the realm; I rebuilt Cusco with fine stonework and created the system of",
              correct: "mit'a labor for public works.",
              wrong: ["direct taxation in silver.", "market trade at fixed prices.", "voluntary gifts to the state."] 
            },
            { 
              start: "A good ruler must care for the people as a father cares for his children because the Sapa Inca is the son of the Sun; he must ensure no one goes hungry, provide for widows and orphans, and maintain justice and",
              correct: "order throughout Tawantinsuyu.",
              wrong: ["private wealth for the nobility.", "tribute flowing to Cusco.", "expansion into new territories."] 
            },
            { 
              start: "I saw a vision from the Sun God Inti who told me because I would become the greatest ruler and turn the world upside down (pachacuti); with his help I defeated the Chancas and",
              correct: "began the true expansion of the empire.",
              wrong: ["expelled all foreign priests from Cusco.", "sent envoys to the coast kingdoms.", "divided the empire among my sons."] 
            },
            { 
              start: "The Sapa Inca must act as a father to all his subjects because he should feed the hungry, clothe the naked, and care for the sick and elderly; only then will the people love and obey him as",
              correct: "a true son of Inti.",
              wrong: ["a military conqueror.", "an earthly king with no divine claim.", "a ruler who taxes without giving."] 
            },
            { 
              start: "I rebuilt Cusco as the navel of the world because a capital must reflect the glory of Inti and the order of the empire; with fine stonework and planned districts, it became the sacred and",
              correct: "administrative center of Tawantinsuyu.",
              wrong: ["coastal trading hub of the empire.", "site of the largest silver mines.", "marketplace for all subject kingdoms."] 
            },
            { 
              start: "A noble and courageous man is known by his patience in adversity because impatience reveals a vulgar and low mind; a true leader remains calm and wise even in difficult times, just as I did when",
              correct: "facing the Chanca invasion.",
              wrong: ["my own generals urged retreat to the south.", "Cusco seemed certain to fall.", "Inti's oracle gave an unfavorable sign."] 
            },
            { 
              start: "Governors and officials must observe two things with great care because first, they and their subjects must perfectly obey the emperor's laws; second, they must watch over the resources and welfare of their province so that",
              correct: "no one suffers want.",
              wrong: ["the nobility accumulates private wealth.", "tribute reaches Cusco before the harvest.", "local customs replace imperial law."] 
            }
        ]
      },
      {
        name: "Túpac Inca Yupanqui (Great Conqueror)",
        emoji: "⚔️",
        quotes: [
          { 
            start: "I extended the empire to the ends of the known world because the Sun commanded it; I conquered lands from Chile to Ecuador, built roads and fortresses, and brought new provinces into the empire through both",
            correct: "war and wise administration.",
            wrong: ["the mit'a system alone.", "gifts and religious conversion.", "trade agreements without military pressure."] 
          },
          { 
            start: "According to later Spanish chronicles, I sailed westward into the Pacific seeking new lands, though the historical accuracy of this voyage remains debated; what is certain is that I pushed the empire's boundaries to the",
            correct: "Pacific coast and far south into Chile.",
            wrong: ["hoarding conquered gold in Cusco.", "excluding foreigners from Inca rites.", "punishing all who refused conversion."] 
          },
          { 
            start: "My father Pachacuti gave me the command to conquer because the Sun God Inti willed that the empire should grow; I marched north and south, subduing kingdoms and bringing them under",
            correct: "the protection of the Inca.",
            wrong: ["the oversight of the coastal merchant guilds.", "the priesthood of Inti alone.", "the council of regional governors."] 
          },
          { 
            start: "After conquering the Chimu kingdom, I brought their skilled artisans to Cusco because they were masters of goldwork, textiles, and irrigation; a wise ruler incorporates the knowledge of conquered peoples to",
            correct: "strengthen the entire empire.",
            wrong: ["diminish the identity of conquered peoples.", "concentrate all talent in one region.", "prevent future rebellions through displacement."] 
          },
          { 
            start: "I ordered the construction of great fortresses and storehouses throughout the land because the empire must be able to feed its people even in times of drought or war; through the mit'a system and royal warehouses, no one in",
            correct: "Tawantinsuyu went hungry.",
            wrong: ["Cusco paid taxes to subject lords.", "the coastal kingdoms resisted integration.", "the storehouses remained empty."] 
          },
          { 
            start: "When I returned from my campaigns, I inspected the roads and bridges because a well-maintained Qhapaq Ñan allows the Sapa Inca to govern a vast territory; the roads are the veins through which the life of the",
            correct: "empire flows.",
            wrong: ["merchants profit without the state.", "nobles travel without royal permission.", "tribute disappears before reaching Cusco."] 
          },
          { 
            start: "A true Inca ruler must be both a lion in war and a father in peace because he conquers with strength but rules with justice and generosity; only then will the people obey willingly and the gods continue to",
            correct: "bless the empire.",
            wrong: ["demand harsher tribute.", "withhold rain from the terraces.", "withdraw Inti's light from the Andes."] 
          }
        ]
      },
      {
        name: "Huayna Cápac (Last Great Sapa Inca)",
        emoji: "👑",
        quotes: [
          {
            start: "I ruled the empire at its greatest extent because I continued the work of my father and grandfather; I maintained the roads, storehouses, and administrative system that fed the people and",
            "correct": "supported the army.",
            "wrong": ["enriched the nobles.", "pleased the priests.", "funded luxuries."]
          },
          {
            start: "When a great pestilence — likely smallpox spread ahead of Spanish contact — killed thousands including possibly myself, the empire was left without a clear successor, showing that even the mightiest state can be undone by",
            "correct": "disease and disputed succession.",
            "wrong": ["the anger of Inti alone.", "a single military defeat.", "the disloyalty of road builders."]
          }
        ]
      },
      {
        name: "Atahualpa & the Spanish Conquest",
        emoji: "⚔️",
        quotes: [
          {
            start: "When the strangers arrived at Cajamarca, I met them as a ruler secure in his power, not knowing that their small number concealed steel, firearms, and a willingness to violate the sacred rules of encounter; what destroyed the empire was not only Spanish weapons but also",
            "correct": "the civil war that had already weakened us.",
            "wrong": ["the cowardice of the Inca army.", "the withdrawal of Inti's favor years earlier.", "the refusal of the nobles to fight."]
          },
          {
            start: "Francisco Pizarro captured me at Cajamarca and demanded a ransom of a room filled with gold and two rooms with silver; I filled them, but the Spaniards executed me anyway, showing that",
            "correct": "a conqueror's promises cannot be trusted when power is already lost.",
            "wrong": ["gold was worth less than the Spaniards expected.", "the priests of Inti failed to intercede.", "Atahualpa underestimated Spanish intentions."]
          }
        ]
      },
      {
        name: "Priests & Spiritual Leaders (Willaq Umu & Inti Worship)",
        emoji: "🕯️",
        quotes: [
          {
            start: "Inti, our father the Sun, gives light and life to the world because he is the ancestor of the Sapa Inca; we perform daily rituals at Coricancha and Inti Raymi so that he continues to bless the crops, the people, and",
            "correct": "the empire.",
            "wrong": ["our enemies.", "foreign lands.", "the Spaniards."]
          },
          {
            start: "We honor Pachamama, the Earth Mother, with offerings because she nourishes the terraces and fields; harmony with her, Inti, and the mountains (apus) ensures good harvests and protects the land from",
            "correct": "disaster.",
            "wrong": ["the anger of Inti alone.", "military invasion from the east.", "drought caused by Pachamama's displeasure."]
          },
          {
            start: "The acllakuna, the chosen women selected from across the empire, lived in the acllahuasi and served Inti through weaving, brewing chicha, and ritual service because their dedication demonstrated that the empire's sacred order extended into every household, not only into",
            "correct": "the temples and royal palaces.",
            "wrong": ["the armies and fortresses.", "the marketplace and merchant class.", "the quipu records."]
          }
        ]
      },
      {
        name: "Engineers & Road Builders",
        emoji: "🏗️",
        quotes: [
          {
            start: "The Qhapaq Ñan, the Great Royal Road, stretches more than 40,000 kilometers because we built it with stone paving, suspension bridges of ichu grass, and waystations (tambos) so that the empire could be governed, armies moved quickly, and",
            "correct": "goods distributed efficiently.",
            "wrong": ["enemies kept out.", "taxes collected slowly.", "nobles traveled alone."]
          },
          {
            start: "We carved terraces into the steep mountainsides because they prevent erosion, create fertile farmland, and demonstrate our mastery of the land; with irrigation canals and storehouses, we ensured",
            "correct": "food security even in harsh conditions.",
            "wrong": ["wealth for elites.", "dependence on imports.", "frequent famines."]
          },
          { 
            start: "Machu Picchu, built at 2430 meters on a ridge between two mountain peaks, demonstrates that Inca architects understood how to integrate monumental construction with the natural landscape using", 
            "correct": "earthquake-resistant techniques.", 
            "wrong": ["floating foundations.", "steel reinforcement beams.", "large defensive walls."] 
          }
        ]
      },
      {
        name: "Administrators & Lawgivers",
        emoji: "⚖️",
        quotes: [
          {
            start: "The Inca laws were few but strictly enforced because they promoted justice, hard work, and respect for authority; no one went hungry in the empire because of the mit'a system and",
            "correct": "royal storehouses.",
            "wrong": ["private farms.", "market trading.", "individual wealth."]
          },
          { 
            start: "The decimal administrative system organized the population into units of 10, 100, 1000, and 10000 households, each with appointed leaders, allowing the state to", 
            "correct": "mobilize labor, tribute, and military service with precision.", 
            "wrong": ["collect taxes in gold and silver.", "ignore regional differences.", "rely on voluntary participation."] 
          }
        ]
      },
      {
        name: "Legacy of the Sapa Inca",
        emoji: "📜",
        quotes: [
          {
            start: "The Sapa Inca was the son of the Sun and father of the people because he owned all land and resources in trust for the empire; through wise rule, redistribution of goods, and public works, he maintained harmony and",
            "correct": "prosperity across Tawantinsuyu.",
            "wrong": ["poverty for all.", "chaos and famine.", "private wealth."]
          }
        ]
      },
      {
        name: "Quipucamayoc (Record Keepers)",
        emoji: "📜",
        quotes: [
          {
            start: "We, the quipucamayoc, recorded everything with knotted strings because quipus allowed us to keep exact accounts of tribute, population, livestock, harvests, and history; without them the vast empire could",
            "correct": "not be governed efficiently.",
            "wrong": ["easily be governed.", "remain small forever.", "ignore all records."]
          },
          { 
            start: "Recent research suggests that some quipus may have recorded not only numerical data but also narrative information, meaning the Inca may have had a form of", 
            "correct": "non-alphabetic writing that remains undeciphered.", 
            "wrong": ["alphabetic script similar to Spanish.", "purely decorative textile art.", "oral tradition with no written component."] 
          }
        ]
      },
      {
        name: "Military Leaders",
        emoji: "⚔️",
        quotes: [
          {
            start: "The Inca army was highly organized because soldiers were trained from youth, supplied from state storehouses, and moved rapidly along the Qhapaq Ñan; discipline and logistics made us one of the most effective forces in",
            "correct": "the Andes.",
            "wrong": ["the Amazon.", "the desert.", "the islands."]
          }
        ]
      }
    ]
  },
  {
    id: "kush",
    name: "Kingdom of Kush",
    emoji: "🐆",
    color: 0x6d4c41,
    colorHex: "#6d4c41",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Piye (Piankhi) – Conqueror of Egypt",
        emoji: "👑",
        quotes: [
          { 
            start: "Hear of what I did, more than the ancestors! I am a king, divine emanation, living image of Atum because Amun of Napata made me ruler; I came northward at his command to restore order and purify the temples, acting with",
            correct: "justice and piety.",
            wrong: ["military strength.", "political power.", "ruthless force."] 
          },
          { 
            start: "When the northern princes neglected the temples and lived unclean lives, I marched north because Amun commanded me to restore ma'at (order and justice); I fought with divine support and treated the defeated with compassion when",
            correct: "they submitted.",
            wrong: ["they continued to resist.", "they appealed to foreign kings.", "they fled into the desert."] 
          },
          { 
            start: "Command which My Majesty has spoken: Hear what I did, more than the ancestors because I am the king, the representation of god, who issued from the womb marked as ruler; my father knew and my mother perceived even in the egg that",
            correct: "I would be ruler.",
            wrong: ["the land needed saving.", "Egypt had fallen into chaos.", "Amun required a champion."] 
          },
          { 
            start: "As I live, as Re loves me, as my father Amun favours me, I shall go northward myself because I will overturn what Tefnakht has done and make him retreat from fighting forever; Amun has commanded me to act and",
            correct: "to show forth his might.",
            wrong: ["to punish the corrupt priests.", "to restore tribute to Napata.", "to crown a loyal prince in Memphis."] 
          },
          { 
            start: "When my troops entered Thebes, I commanded them because purify yourselves in the river, clothe yourselves in fine linen, lay down your bows; fight in the shadow of Amun's strong arm, for he makes the weak strong and",
            correct: "turns multitudes to flight before the few.",
            wrong: ["rewards the pious with long life.", "grants wisdom to the humble.", "blesses those who fast before battle."] 
          },
          { 
            start: "When I saw that the horses in the stables of the defeated rulers were starved, I became more angry than at any other crime because the neglect of horses pained my heart greatly; I love horses, and their mistreatment showed the rulers' lack of",
            correct: "proper order and respect.",
            wrong: ["wealth and resources.", "loyalty to their troops.", "interest in governing well."] 
          },
          { 
            start: "I swear: as Re loves me, as my father Amun favours me, this shall befall the city because I shall seize it like a cloudburst; Amun has commanded me, and he has done this expressly to show his wrath and",
            correct: "to cause that his grandeur be seen.",
            wrong: ["to punish those who profaned his temples.", "to restore the tribute roads from Memphis.", "to place a Kushite governor in every northern city."] 
          }
        ]
      },
      {
        name: "Taharqa (Taharka) – Builder & Defender",
        emoji: "🏛️",
        quotes: [
          { 
            start: "O Great God, swift one, who comes to him who calls, watch over my sister because do for her as I have done for you; elevate her children and make them prosper, even as you did for me — for I rebuilt your temples and",
            correct: "honored you in Kawa and Jebel Barkal.",
            wrong: ["expelled the Assyrians from your precincts.", "recruited new priests for your festivals.", "funded expeditions to find fresh incense."] 
          },
          { 
            start: "I, Taharqa, beloved of Amun-Re, restored and enlarged the temples because Amun of Napata is my father; through his favor I ruled Egypt and Kush, brought prosperity, and",
            correct: "defended the land against invaders.",
            wrong: ["extended the southern trade routes.", "reformed the system of royal succession.", "united the priesthoods of Napata and Memphis."] 
          },
          { 
            start: "I was only a youth, but the god Amun placed me on the throne because he knew the heart within me; even when I was a young prince, Amun chose me and raised me up to be king of",
            correct: "Upper and Lower Egypt.",
            wrong: ["the Nile Delta alone.", "Nubia south of the cataracts.", "Thebes and its surrounding nomes."] 
          },
          { 
            start: "Hail to You, Amun-Re, Lord of Maat, whose shrine is hidden because you are the one who made me ruler; I rebuilt your temples at Kawa and filled them with musicians to rattle the sistrum before your beautiful face so that",
            correct: "you may grant me life and prosperity.",
            wrong: ["the Assyrians would fear your name.", "my brother's sons would be protected.", "the Nile would flood at the right season."] 
          },
          { 
            start: "When I saw the temple of Amun at Kawa in ruins, my heart was sad until I became king because I restored it in fine sandstone, enlarged it, and endowed it with servants, fields, and musicians so that the god would be pleased and",
            correct: "continue to favor Kush and Egypt.",
            wrong: ["draw pilgrims and tribute from distant regions.", "inspire future kings to build still greater temples.", "grant rain to the fields of the Butana plain."] 
          },
          { 
            start: "O Amun, my father, I have given you gold and many precious things because you gave me the kingship and protected me; in return I filled your house with wealth, servants, and offerings so that you may continue to",
            correct: "give me victory and long life.",
            wrong: ["drive the Assyrians back across the Sinai.", "restore Memphis to my control.", "let my name outlast the pyramids."] 
          },
          { 
            start: "I sailed northward to Thebes with the young men sent by my brother because Amun of Napata guided my steps; through his power I was crowned in Memphis and ruled both Kush and Egypt as",
            correct: "a beloved son of the god.",
            wrong: ["a ruler feared by the Assyrian court.", "the successor of Shabaka and Shebitku.", "a king who never forgot his Nubian origins."] 
          }
        ]
      },
      {
        name: "Taharqa & the Assyrian Conflict",
        emoji: "⚔️",
        quotes: [
          {
            start: "When Esarhaddon of Assyria invaded Egypt and drove me from Memphis, I withdrew southward but did not abandon my claim because a king who retreats to fight again preserves his people better than one who dies defending",
            correct: "an already-lost position.",
            wrong: ["the temples of Amun.", "the loyalty of his vassals.", "the blessing of the gods."]
          },
          {
            start: "The Assyrian inscriptions boast of defeating me twice, but Kush endured because the Nile and the desert protected Napata; great empires can conquer Egypt but struggle to reach the heartland of",
            correct: "Kush south of the fourth cataract.",
            wrong: ["the Sahara and its oases.", "Punt and its trade routes.", "the Levantine coast."]
          }
        ]
      },
      {
        name: "Aspelta (Chosen by Amun)",
        emoji: "📜",
        quotes: [
          { 
            start: "The army and the priests assembled in Napata and asked Amun of Napata to choose the king because the god himself selected me as ruler; I was brought forward and Amun confirmed me, showing that kingship in Kush comes from",
            correct: "divine will, not only birth.",
            wrong: ["military strength alone.", "the consent of the army commanders.", "hereditary descent without divine confirmation."] 
          },
          { 
            start: "When the priests inquired of the god, Amun declared because this is the king who will sit upon the throne; he shall be given life, health, and all good things, for he will honor the gods and",
            correct: "maintain justice.",
            wrong: ["expand the borders of Kush.", "defeat the enemies of Napata.", "build temples greater than his predecessors."] 
          },
          { 
            start: "The Host of His Majesty gathered after the Falcon flew to heaven and said because we do not know whom we should raise to the throne; the decision belongs to Amun of Napata, our good father, who has been the god of the",
            correct: "kings of Kush since the beginning.",
            wrong: ["Nile cataracts and their peoples.", "traders on the road to Punt.", "soldiers who defend the southern frontier."] 
          },
          { 
            start: "They prostrated themselves before Amun of Napata and said because O great god, lord of the Thrones of the Two Lands who dwells in the Pure Mountain, choose for us the king who will revive us, build your temples, and",
            correct: "make the land of Kush strong again.",
            wrong: ["reclaim Egypt from foreign rulers.", "push the Assyrians beyond the Sinai.", "bring the treasure of Ophir to Napata."] 
          },
          { 
            start: "The god Amun of Napata then chose me from among the royal brethren because",
            correct: "he knows the hearts of men; he brought me forward and declared: 'This is the king who shall sit upon the throne of Horus, beloved of Amun, given life, stability, and dominion forever.'",
            wrong: ["I was the eldest brother.", "the priests favored me.", "I was born to rule."] 
          },
          { 
            start: "After the god confirmed me, I entered the sanctuary alone because I received the crowns and the staff of my predecessor from the hand of Amun; then I came forth to the army and the people who acclaimed me as",
            correct: "the true king chosen by the god.",
            wrong: ["a king who had earned his throne in battle.", "the eldest surviving son of the last ruler.", "the candidate endorsed by the Napatan merchants."] 
          }
        ]
      },
      {
        name: "Kandake (Kushite Queens)",
        emoji: "👑",
        quotes: [
          {
            start: "The Kandakes of Meroë ruled and commanded armies as autonomous monarchs because Kushite society recognized women as legitimate rulers; a Kandake's authority rested on the same divine foundations as a king's, showing that royal power in Kush was not",
            correct: "restricted by gender.",
            wrong: ["granted by Egyptian pharaohs.", "limited to religious ceremonies.", "dependent on male co-regents."]
          },
          {
            start: "When Amanirenas led the Kushite army against Roman forces and sent envoys to negotiate with Augustus at Samos, securing favorable terms, she demonstrated that a Kandake could defend borders through both",
            correct: "military resistance and skilled diplomacy.",
            wrong: ["surrender and tribute payments.", "appeals to the Egyptian priesthood.", "alliances with Parthian rivals of Rome."]
          }
        ]
      },
      {
        name: "Priests & Temple Officials",
        emoji: "🕯️",
        quotes: [
          { 
            start: "The priests of Amun at Jebel Barkal and Napata served because Amun is the king of the gods and father of the ruler; we maintained the rituals, oracles, and temples that gave divine legitimacy to",
            correct: "the kings of Kush.",
            wrong: ["the merchants of the Nile routes.", "the generals who led campaigns northward.", "the foreign ambassadors in Napata."] 
          },
          { 
            start: "We performed oracles and festivals so that the god could speak directly, choose kings, and grant victory and prosperity to the land when the people and ruler lived",
            correct: "in ma'at (truth and justice).",
            wrong: ["in wealth and military strength.", "in constant war against enemies.", "in isolation from Egyptian traditions."] 
          }
        ]
      },
      {
        name: "Kings of Meroë (Natakamani & Amanitore)",
        emoji: "🏛️",
        quotes: [
          { 
            start: "We, Natakamani and Amanitore, built and restored temples at Naqa and Amara because we honored Amun, Apedemak the lion-god, and the other deities; through their favor we maintained prosperity, trade, and the strength of the kingdom in the",
            correct: "Meroitic period.",
            wrong: ["Nile Valley.", "royal court.", "southern lands."]
          },
          {
            start: "The lion-god Apedemak, strong of arm, stands before the armies of Kush because he is a god born of Nubian soil, not borrowed from Egypt; his temple at Naqa shows that Meroë honored its own gods alongside Amun, proving that Kushite religion could",
            correct: "develop independently from Egyptian tradition.",
            wrong: ["replace Amun as the supreme deity.", "exclude all foreign religious influence.", "unite every southern kingdom under Meroë."]
          }
        ]
      },
      {
        name: "Military & Royal Power",
        emoji: "⚔️",
        quotes: [
          {
            start: "The kings of Kush sent armies against rebels because Amun granted victory when the cause was just; we used cavalry, infantry, and boats effectively while showing mercy to those who submitted, maintaining order across",
            correct: "vast territories.",
            wrong: ["the Nile Delta alone.", "territories south of the fifth cataract only.", "regions where Egypt had direct control."]
          },
          { 
            start: "The decline of Meroë around 350 CE, possibly accelerated by the Aksumite king Ezana's invasion, shows that even a kingdom that had endured for a thousand years", 
            "correct": "could fall when trade routes shifted and rivals grew stronger.", 
            "wrong": ["was destroyed overnight.", "collapsed due to internal religious conflict alone.", "was abandoned without external pressure."] 
          },
          { 
            start: "The Nubian pyramids at Meroë — steeper and narrower than Egyptian ones — demonstrate that Kushite architects", 
            "correct": "adapted Egyptian forms to create a distinctly Kushite style.", 
            "wrong": ["copied Egyptian designs without modification.", "rejected all Egyptian architectural influence.", "built pyramids only for religious, not royal, purposes."] 
          }
        ]
      },
      {
        name: "Trade & Prosperity",
        emoji: "💰",
        quotes: [
          {
            start: "The Kingdom of Kush grew rich through trade in gold, ivory, ebony, and incense because we controlled the Nile routes and desert caravans; fair dealings and strong royal protection allowed merchants to thrive and bring wealth to the",
            correct: "temples and people.",
            wrong: ["Egyptian pharaohs.", "Assyrian kings.", "foreign conquerors."]
          },
          {
            start: "Meroë's iron-smelting industry gave Kush a military and economic advantage because iron tools and weapons could be produced locally without dependence on foreign suppliers; control of iron production allowed the kingdom to",
            correct: "arm its forces and supply local and regional needs.",
            wrong: ["replace all bronze with iron overnight.", "defeat Rome in open battle.", "force Egypt to pay tribute in ore."]
          }
        ]
      }
    ]
  },
  {
    id: "phoenicia",
    name: "Phoenicians",
    emoji: "⛵",
    color: 0xffa000,
    colorHex: "#ffa000",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Hiram I of Tyre (Ally of Israel)",
        emoji: "👑",
        quotes: [
          {
            start: "I, Hiram, king of Tyre, sent cedar logs, carpenters, and masons to David because we were longtime friends; I continued this alliance with his son Solomon, supplying timber and skilled craftsmen for the Temple in exchange for",
            "correct": "food and olive oil.",
            "wrong": ["gold and silver.", "military aid.", "tribute payments."]
          },
          {
            start: "When Solomon asked for help building the Temple, I replied that the Lord God of Israel has made Solomon king over a wise and understanding people; I will send skilled men and cedar from",
            "correct": "Lebanon as much as you need.",
            "wrong": ["Egypt as tribute.", "Assyria by force.", "my own palace."]
          },
          {
            start: "Hiram king of Tyre sent this message to Solomon because Hiram had always been a friend of David; when I heard that Solomon had been anointed king, I sent my servants to congratulate him and",
            "correct": "confirm our alliance.",
            "wrong": ["demand payment.", "refuse help.", "declare war."]
          },
          {
            start: "I, Hiram, have considered the things which thou sentest to me for and I will do all thy desire concerning timber of cedar and fir because my servants shall bring it down from Lebanon to the sea, make it into rafts, and deliver it to the",
            "correct": "place you indicate.",
            "wrong": ["Assyrian king.", "Egyptian border.", "nearest enemy."]
          },
          {
            start: "Blessed be the Lord this day, who has given to David a wise son to be over this great people because the Lord God of Israel loves His people and has made Solomon king; therefore I will gladly supply cedar, cypress, and skilled craftsmen for",
            "correct": "the Temple and palace.",
            "wrong": ["my own temples.", "military campaigns.", "royal tribute."]
          },
          {
            start: "I sent Huram-Abi, a skilled master craftsman, because he is trained in working gold, silver, bronze, iron, stone, wood, and fabrics; he will work with your craftsmen to complete all that you desire for",
            "correct": "the Temple.",
            "wrong": ["my own fleet.", "Assyrian palaces.", "trade profits."]
          },
          {
            start: "After twenty years, when Solomon gave me twenty cities in Galilee, I came to see them and said 'What cities are these which thou hast given me, my brother?' — yet I still sent Solomon 120 talents of gold and maintained our friendship and",
            "correct": "joint trading voyages to Ophir.",
            "wrong": ["a formal defense pact.", "annual tribute in silver.", "control of his northern ports."]
          }
        ]
      },
      {
        name: "Eshmunazar II of Sidon (Temple Builder)",
        emoji: "🏛️",
        quotes: [
          {
            start: "I, Eshmunazar, king of the Sidonians, and my mother Amoashtart built temples for the gods because we constructed the house of Baal of Sidon, the house of Astarte, the sanctuary of Eshmun, and other shrines so that the gods would",
            "correct": "bless our city.",
            "wrong": ["demand more tribute.", "send pestilence upon us.", "withdraw their protection entirely."]
          },
          {
            start: "Whoever you are, king or common man, do not open this sarcophagus because may the gods curse anyone who disturbs my resting place; I built these temples and extended Sidon's territory, and my deeds should",
            "correct": "be respected after death.",
            "wrong": ["justify desecrating the tomb.", "be undone by successors.", "count for nothing before the gods."]
          },
          {
            start: "I, Eshmunazar, king of the Sidonians, son of Tabnit, was carried away before my time because I was an orphan, the son of a widow, cut off in the fourteenth year of my reign; I lie in this coffin and tomb which",
            "correct": "I myself built.",
            "wrong": ["the gods built.", "my enemies built.", "my mother built."]
          },
          {
            start: "We built temples and shrines for the gods of Sidon because we raised up the house of Baal of Sidon, the house of Astarte in Sidon (the land by the sea), so the gods would",
            "correct": "dwell among us.",
            "wrong": ["demand we abandon the city.", "withdraw favor from our fleet.", "raise up a rival dynasty."]
          },
          {
            start: "The Lord of Kings (the Persian king) granted me Dor and Joppa and the rich lands of the Sharon because I performed mighty deeds for him; these territories were added to the borders of Sidon forever so that the gods would be honored and",
            "correct": "my name remembered.",
            "wrong": ["my successors enriched.", "my temples expanded.", "Sidon made tributary to Persia."]
          },
          {
            start: "Whoever opens this resting-place or carries me away from this coffin, may the sacred gods deliver them to destruction; may they have no resting-place among the shades (Rephaim), no burial in a grave, and no son or",
            "correct": "offspring to succeed them.",
            "wrong": ["ally to protect them.", "city to shelter them.", "merchant to trade with them."]
          }
        ]
      },
      {
        name: "Dido (Elissa) – Founder of Carthage",
        emoji: "🏙️",
        quotes: [
          {
            start: "According to ancient tradition, when Elissa fled Tyre after her brother Pygmalion murdered her husband, she led followers westward and — through legendary cleverness with an ox-hide — established",
            "correct": "Carthage as a refuge and trading center.",
            "wrong": ["a new capital in Phoenicia.", "an alliance of Mediterranean tribes.", "a religious sanctuary in Cyprus."]
          },
          {
            start: "I founded Carthage — Qart-Hadasht, the New City — as a refuge for exiles and a center for trade, because a city's strength comes not from the wealth of a single king but from the",
            "correct": "enterprise and loyalty of its people.",
            "wrong": ["tribute collected from weaker neighbors.", "temples built to please the gods.", "harbors controlled by royal decree."]
          }
        ]
      },
      {
        name: "Maritime Leaders & Navigators",
        emoji: "🚢",
        quotes: [
          {
            start: "Our ships sailed beyond the Pillars of Hercules to distant lands because skilled navigation, knowledge of currents and stars, and sturdy vessels allowed us to reach Britain for tin, Africa for resources, and establish colonies across",
            "correct": "the Mediterranean.",
            "wrong": ["inland deserts.", "Assyrian control.", "Egyptian rivers."]
          },
          {
            start: "The Phoenician sailors were renowned because we were the first to 'plough the sea' regularly, using advanced shipbuilding and celestial navigation to dominate",
            "correct": "Mediterranean trade for centuries.",
            "wrong": ["land caravans.", "royal tribute.", "temple rituals."]
          },
          {
            start: "The Periplus of Hanno records that I sailed with sixty ships and thirty thousand colonists — numbers likely exaggerated — beyond the Pillars of Hercules because exploration extended both knowledge and trade; we founded colonies and recorded",
            "correct": "peoples and lands no Phoenician had seen before.",
            "wrong": ["routes already known to Egyptians.", "territory claimed by Assyria.", "ports controlled by Greek rivals."]
          },
          { 
            start: "Herodotus records that Phoenician sailors, commissioned by the Egyptian pharaoh Necho II around 600 BCE, circumnavigated Africa — a feat considered plausible by modern historians because they reported the sun on", 
            "correct": "their right when sailing west.", 
            "wrong": ["their left when sailing north.", "their stern while crossing deserts.", "their bow during every season."] 
          }
        ]
      },
      {
        name: "Merchants & Traders",
        emoji: "💰",
        quotes: [
          {
            start: "Our wealth came from trading purple dye, cedar, glass, and metals because we established fair networks across the Mediterranean, exchanging goods honestly while building trust that turned distant ports into",
            "correct": "reliable partners.",
            "wrong": ["competitors to be undercut.", "ports to be avoided.", "hostile rivals."]
          },
          {
            start: "A merchant's reputation is his greatest asset because trust built over generations allowed us to trade safely in foreign lands; reliable dealings brought more profit than",
            "correct": "short-term deception.",
            "wrong": ["aggressive price manipulation.", "bribing foreign officials.", "breaking contracts when profitable."]
          },
          { 
            start: "Tyrian purple dye, extracted from thousands of murex sea snails to produce a single gram of pigment, was so valuable that it became associated with royalty across the ancient world, showing that", 
            "correct": "control of a rare resource can define a civilization's identity and wealth.", 
            "wrong": ["purple was used only for religious purposes.", "the dyeing process was shared freely with competitors.", "Phoenician wealth came mainly from cedar trade."] 
          }
        ]
      },
      {
        name: "Scribes & Alphabet Innovators",
        emoji: "📜",
        quotes: [
          {
            start: "We refined and spread an alphabetic script of 22 consonants derived from earlier Semitic writing because its simplicity made it accessible for trade; this system was adopted by the Greeks who added vowels, eventually influencing",
            "correct": "many modern alphabets.",
            "wrong": ["cuneiform tablets.", "Egyptian hieroglyphs.", "royal decrees only."]
          },
          {
            start: "Knowledge preserved in writing endures longer than stone monuments or gold; our alphabet allowed merchants, scribes, and future generations to record agreements, stories, and",
            "correct": "learning efficiently.",
            "wrong": ["divine commands.", "royal genealogies.", "military orders."]
          },
          { 
            start: "The Phoenician alphabet's greatest advantage over cuneiform and hieroglyphics was that it required learning only 22 signs rather than hundreds, making literacy", 
            "correct": "accessible beyond royal scribal classes for the first time.", 
            "wrong": ["impossible for common merchants.", "restricted to temple priests.", "dependent on Egyptian teaching traditions."] 
          }
        ]
      },
      {
        name: "Kings & City Builders",
        emoji: "🏰",
        quotes: [
          {
            start: "The kings of Tyre and Sidon strengthened our cities because we built harbors, temples, and defensive walls while fostering trade and alliances that turned small coastal towns into",
            "correct": "powerful independent centers.",
            "wrong": ["rivals too weak to survive.", "cities abandoned to pirates.", "settlements forgotten by history."]
          }
        ]
      }
    ]
  },
  {
    id: "hittites",
    name: "Hittites",
    emoji: "🛡️",
    color: 0x795548,
    colorHex: "#795548",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Hattusili I (Early Conqueror & Lawgiver)",
        emoji: "👑",
        quotes: [
          {
            start: "I, Hattusili, Great King, have conquered many lands with my army because a king must be both a warrior and a wise ruler; I appointed my grandson Mursili as successor and warned the nobles against internal strife so",
            "correct": "the kingdom would endure.",
            "wrong": ["nobles gain power.", "princes rebel freely.", "division strengthens us."]
          },
          {
            start: "When appointing my successor I declared that the king must speak with one tongue and the land must be united; internal division and betrayal by princes would bring",
            "correct": "ruin to Hatti.",
            "wrong": ["temporary weakness but ultimate unity.", "the need for a new dynasty.", "stronger provincial governors."]
          },
          {
            start: "I, the Great King, Tabarna Hattusili, spoke to you saying 'Let the young Labarna sit securely upon the throne' but he showed himself a youth not fit to be seen so I rejected him and declared he is",
            "correct": "no longer my son.",
            "wrong": ["still my heir.", "the true king.", "beloved by all."]
          },
          {
            start: "Now Mursili is my son; him you must acknowledge and enthrone because he is still a child, but you nobles must guide and protect him; read my words to him every month so he learns how to rule wisely and",
            "correct": "keep the land united.",
            "wrong": ["allow rebellion.", "divide the realm.", "favor the nobles."]
          },
          {
            start: "Let no one in the future raise the son of his sister to kingship because such appointments have led to rebellion and division; the king must speak with one tongue, the nobles must obey, and the land of Hatti must",
            "correct": "remain united under one ruler.",
            "wrong": ["split among princes.", "favor family branches.", "encourage revolts."]
          },
          {
            start: "I have conquered many lands but now, being ill, I warn you that if you do not keep my words and support my chosen successor, the kingdom will fall into chaos; only unity, loyalty, and obedience to the king's will can",
            "correct": "preserve Hatti.",
            "wrong": ["weaken the throne.", "bring civil war.", "destroy the kingdom."]
          }
        ]
      },
      {
        name: "Suppiluliuma I (Empire Builder)",
        emoji: "⚔️",
        quotes: [
          {
            start: "I, Suppiluliuma, Great King, Hero, Beloved of the Storm God, crossed the Euphrates and conquered because the gods granted me victory; I restored the weakened kingdom, expanded into Syria, and made vassal kings",
            "correct": "swear binding oaths of loyalty.",
            "wrong": ["pay heavy tribute.", "fight as slaves.", "beg for mercy."]
          },
          {
            start: "In my treaty with Shattiwaza of Mitanni I declared that the daughter of the King of Hatti shall be queen in Mitanni; treaties sealed with oaths before the gods create lasting alliances stronger than",
            "correct": "raw conquest.",
            "wrong": ["a temporary occupation.", "gifts alone.", "intimidation without agreement."]
          },
          {
            start: "When I, My Majesty Suppiluliuma, reached the land of Alše and the district of Kutmar, I overpowered the enemy because the Storm God went before me; I plundered the lands west of the Euphrates and annexed",
            "correct": "Syrian territories including Amurru and Qadesh.",
            "wrong": ["all of Egypt.", "the Hittite heartland.", "Mitanni forever."]
          },
          {
            start: "When Tushratta, king of Mitanni, acted presumptuously toward me a second time, I responded because a Great King cannot tolerate insolence; I defeated his forces, installed Shattiwaza as my vassal, and secured Mitanni through",
            "correct": "marriage and a binding treaty.",
            "wrong": ["total destruction.", "mass executions.", "brutal revenge."]
          },
          {
            start: "In my letter to the king of Egypt I wrote that your father and I were brothers and desired friendship; whatever he asked I granted, and whatever I asked he granted — let us now continue in peace and",
            "correct": "mutual help.",
            "wrong": ["deliberate silence.", "formal separation.", "competing territorial claims."]
          },
          {
            start: "When the Egyptian queen wrote asking for one of my sons to become her husband and king of Egypt, I first sent a chamberlain to investigate because a Great King must act with",
            "correct": "caution.",
            "wrong": ["blind trust.", "reckless haste.", "foolish greed."]
          },
          {
            start: "I, Suppiluliuma, Great King, Hero, made Shattiwaza king in Mitanni and gave him my daughter in marriage because a wise ruler turns former enemies into loyal vassals through marriage alliances and solemn treaties sworn before many gods,",
            "correct": "ensuring long-term stability.",
            "wrong": ["gaining quick glory.", "weakening the empire.", "pleasing the nobles."]
          }
        ]
      },
      {
        name: "Mursili II (Annalist & Plague-Stricken King)",
        emoji: "📜",
        quotes: [
          {
            start: "When I, Mursili, ascended the throne, the enemy lands said 'His father was a mighty king but now a child sits on the throne' because I first restored the neglected festivals of the Sun-goddess of Arinna and",
            "correct": "prayed for her support.",
            "wrong": ["raised new armies immediately.", "punished the doubting nobles.", "demanded tribute first."]
          },
          {
            start: "For twenty years the plague has raged in Hatti; I have prayed to the Storm-god and the Assembly of Gods because the plague was divine punishment for sins such as the murder of Tudhaliya the Younger and",
            "correct": "breaking oaths.",
            "wrong": ["foreign invasion.", "weak leadership.", "royal neglect."]
          },
          {
            start: "In my annals I recorded that the gods went before me in battle because true victory comes from divine support combined with careful planning and loyal troops; I detailed every campaign so future kings would",
            "correct": "learn from my deeds.",
            "wrong": ["avoid military campaigns.", "rely only on diplomacy.", "trust in wealth alone."]
          },
          {
            start: "O Sun-goddess of Arinna, my lady, come stand by my side, smite those enemy lands before me, and show that the gods support even a young king who",
            "correct": "honors you.",
            "wrong": ["serves foreign gods.", "makes war without prayer.", "trusts only in chariots."]
          },
          {
            start: "O Storm-god of Hatti, my lord, and all the gods, my lords, what is this that you have done because you have allowed the plague to rage in Hatti for twenty years; under my father, my brother, and now under me, people keep dying —",
            "correct": "will the plague never be eliminated from the land?",
            "wrong": ["was sent by foreign gods?", "can be stopped by sacrifice alone?", "requires a new king to end?"]
          },
          {
            start: "I, Mursili, your servant, confess the sins of my father Suppiluliuma because he broke the oath with Egypt by attacking the land of Amka while Egyptian prisoners brought the plague; I have made restitution and now beg you, gods, to be pacified and",
            "correct": "remove this evil from Hatti.",
            "wrong": ["demand more offerings.", "grant us no mercy.", "turn to Egypt instead."]
          },
          {
            start: "In the land of Hatti I have searched for the cause of the plague through oracles because the gods demand that we discover and correct past offenses; only when the sin is identified, confessed, and atoned for can the land be",
            "correct": "freed from divine wrath.",
            "wrong": ["praised by foreign nations.", "handed to another dynasty.", "abandoned by its kings."]
          }
        ]
      },
      {
        name: "Muwatalli II (Battle of Kadesh)",
        emoji: "🐎",
        quotes: [
          { 
            start: "At Kadesh (~1274 BCE) I assembled a massive force against Ramesses II; the battle ended inconclusively, but Hittite control of Syria was maintained, showing that", 
          "correct": "strategic objectives matter more than battlefield glory.", 
          "wrong": ["Egypt won a decisive victory.", "the Hittites were permanently weakened.", "chariot warfare was ineffective."]},
          {
            start: "The battle of Kadesh showed that even when an enemy king like Ramesses rallied his troops and claimed divine protection, the outcome on the ground was determined by numbers, positioning, and the loyalty of",
            "correct": "chariot forces and allied troops.",
            "wrong": ["individual royal bravery alone.", "prayers and omens only.", "the size of the capital city."]
          }
        ]
      },
      {
        name: "Hattusili III (Usurper & Diplomat)",
        emoji: "🕯️",
        quotes: [
          {
            start: "I, Hattusili, was a sickly child but the goddess Ishtar took me by the hand and made me Great King because divine favor and legitimate grievances against my nephew Urhi-Teshub justified my actions; I defended my rule in the Apology and",
            "correct": "sought peace with Egypt.",
            "wrong": ["demanded Urhi-Teshub's execution.", "expelled Egyptian envoys.", "rejected all foreign alliances."]
          },
          {
            start: "In the Eternal Treaty with Ramesses II of Egypt we both swore that we would remain at peace forever, assist each other against enemies, and respect the borders; diplomacy and mutual oaths before the gods",
            "correct": "prevent endless war.",
            "wrong": ["weaken the empire's frontiers.", "displease the military commanders.", "reduce royal prestige abroad."]
          },
          {
            start: "I, Hattusili, the youngest son of Mursili, was a frail child but the goddess Šaušga of Šamuha requested me from my father because she took me under her protection from childhood; thanks to her favor my health improved and she",
            "correct": "guided me to kingship.",
            "wrong": ["abandoned me.", "cursed my rule.", "favored Urhi-Teshub."]
          },
          {
            start: "In his Apology, Hattusili claims he rose against Urhi-Teshub only when left with",
            "correct": "no other choice.",
            "wrong": ["secured foreign backing.", "gathered a large enough army.", "received a favorable oracle."]
          },
          {
            start: "I did not take Puduhepa in marriage out of passion but because the goddess commanded it in a dream; she assigned Puduhepa to me, and together we served the goddess and",
            "correct": "strengthened the kingdom.",
            "wrong": ["gained personal wealth.", "pleased the court factions.", "secured the northern borders."]
          },
          {
            start: "In the treaty with Ramesses, Great King of Egypt, my brother, we established that from this day forward there shall be good peace and good brotherhood between us forever; if an enemy comes against one of us, the other shall send troops and",
            "correct": "chariots to help.",
            "wrong": ["demand tribute first.", "consult the gods alone.", "send only messengers."]
          },
          {
            start: "We swore before the thousand gods of Hatti and the thousand gods of Egypt because oaths sworn in the presence of the gods, the mountains, rivers, sky, earth, and sea make the treaty binding for eternity; whoever breaks it shall",
            "correct": "be destroyed by the gods.",
            "wrong": ["lose the protection of every divine witness.", "be forgiven after paying tribute.", "pass judgment to human courts."]
          }
        ]
      },
      {
        name: "Hittite Laws & Justice",
        emoji: "⚖️",
        quotes: [
          {
            start: "The laws of Hatti state that if anyone kills a man or woman in a quarrel, he shall bring the body for burial and give four persons (heads) in compensation; justice requires restitution rather than",
            "correct": "simple vengeance.",
            "wrong": ["enslavement of the offender.", "permanent exile.", "execution by the state."]
          },
          {
            start: "If anyone blinds a free person or knocks out his tooth, he shall pay twenty shekels of silver (reduced from earlier amounts); the laws show a preference for compensation and mercy over",
            "correct": "harsh physical punishment.",
            "wrong": ["collective family punishment.", "trial by ordeal.", "permanent mutilation in return."]
          },
          { 
            start: "The Hittite laws show an evolution from older to newer versions where punishments were systematically reduced — death penalties replaced by fines — suggesting that Hittite society became", 
            "correct": "progressively less harsh in its legal approach over time.", 
            "wrong": ["more brutal as the empire expanded.", "identical to Babylonian law under Hammurabi.", "focused on revenge rather than restitution."] 
          }
        ]
      },
      {
        name: "Generals & Military Organization",
        emoji: "⚔️",
        quotes: [
          {
            start: "In the campaigns of Suppiluliuma and Mursili, the Hittite army succeeded because it combined disciplined infantry, chariot forces, careful logistics, and coordination with vassal troops under",
            "correct": "royal command.",
            "wrong": ["vassal councils.", "priestly orders.", "local chiefs."]
          },
          {
            start: "When marching against rebellious vassals or northern enemies like the Kaska, commanders understood that swift decisive action combined with offers of mercy to those who submitted maintained long-term control over a vast and",
            "correct": "diverse empire.",
            "wrong": ["poorly fortified frontier.", "diplomatically isolated state.", "religiously uniform population."]
          },
          { 
            start: "Around 1200 BCE, Hattusa was burned and the Hittite Empire collapsed along with many other Bronze Age civilizations — an event so widespread it suggests systemic causes like climate change, migrations, and trade network collapse rather than", 
            "correct": "a single enemy.", 
            "wrong": ["a series of natural disasters.", "a conspiracy.", "a plague."] 
          }
        ]
      },
      {
        name: "Priests, Diplomats & Religion",
        emoji: "🕯️",
        quotes: [
          {
            start: "Hittite kings performed oracles, prayers, and festivals because the gods demanded proper worship and moral order; neglecting rituals or breaking oaths brought divine punishment such as plague or",
            "correct": "military defeat.",
            "wrong": ["abundant harvests.", "enemy conversion.", "automatic forgiveness."]
          },
          {
            start: "In treaties and prayers we invoked many gods as witnesses because oaths sworn before the Storm-god, Sun-goddess of Arinna, and others created binding international and internal obligations;",
            "correct": "breaking them invited divine wrath.",
            "wrong": ["honoring them allowed renegotiation.", "reciting them brought automatic success.", "signing them required no further action."]
          },
          { 
            start: "The Hittites were unusual in the ancient Near East for incorporating the gods of conquered peoples into their own pantheon, calling themselves the land of a thousand gods' and using this religious inclusivity to", 
            "correct": "integrate subject peoples.", 
            "wrong": ["eliminate all local traditions.", "promote a single state religion.", "suppress dissenting voices."] 
          }
        ]
      }
    ]
  },
  {
    id: "holy_roman",
    name: "Holy Roman Empire",
    emoji: "🏰",
    color: 0x4b0082,
    colorHex: "#4b0082",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Charlemagne (Founder & Christian Emperor)",
        emoji: "👑",
        quotes: [
          {
            start: "I, Charles, most serene Augustus, crowned by God, great and pacific emperor, issued capitularies and reformed education because right action is better than knowledge; but in order to do what is right, we must first know",
            "correct": "what is right.",
            "wrong": ["the classics.", "pagan wisdom.", "court gossip."]
          },
          {
            start: "After my coronation in Rome on Christmas Day 800, I understood the empire's purpose as defending Christianity, protecting the weak, and uniting diverse peoples under just Christian rule as a successor to Rome and",
            "correct": "the Franks.",
            "wrong": ["the pope.", "Byzantium.", "the Saxons."]
          },
          {
            start: "I chose the most prudent and wisest men—archbishops, bishops, and pious laymen—and sent them throughout the realm as missi because they must inquire diligently into every injustice and report back so that the empire lives according to",
            "correct": "law and right.",
            "wrong": ["royal whim.", "noble custom.", "papal decree."]
          },
          {
            start: "I admonished the nobles and sons of leading men who neglected learning and gave themselves to luxury and idleness because unless you make up for your idleness by eager effort in study, you will never receive benefit from me nor",
            "correct": "advance in my service.",
            "wrong": ["gain lands.", "win battles.", "please the court."]
          },
          {
            start: "I ordered schools to be attached to every monastery and cathedral because no difference should be made between the sons of serfs and freemen; all must study grammar, music, arithmetic, and",
            "correct": "the liberal arts.",
            "wrong": ["warfare only.", "hunting skills.", "feudal duties."]
          },
          {
            start: "In the Admonitio Generalis and other capitularies I commanded that priests must preach faithfully and that all believers should know the Lord's Prayer, the Creed, and",
            "correct": "the essentials of the faith.",
            "wrong": ["Latin poetry.", "German sagas.", "noble titles."]
          }
        ]
      },
      {
        name: "Otto I (The Great – Reviver of the Empire)",
        emoji: "🛡️",
        quotes: [
          {
            start: "After victories like Lechfeld, I prayed before the Holy Lance and revived the imperial title in 962 because divine favor, proven in battle and shown through piety, allowed me to unite German kingship with Roman imperial dignity and",
            "correct": "control both lords and church.",
            "wrong": ["submit to the pope.", "obey the dukes.", "serve the nobles."]
          },
          {
            start: "My appointment of loyal bishops and intervention in Italy showed that the emperor must act as protector of the church while asserting authority to maintain",
            "correct": "unity across the realm.",
            "wrong": ["papal independence.", "ducal power.", "feudal chaos."]
          },
          {
            start: "When the Magyars invaded in 955, I dismounted and knelt with my army before the Holy Lance because victory comes from God's favor and the protection of holy relics; true kingship is proven by piety in battle and defense of Christendom against",
            "correct": "pagans.",
            "wrong": ["Christians.", "the pope.", "internal foes."]
          },
          {
            start: "After the great victory on the Lechfeld, my troops acclaimed me because God had granted us triumph over the enemies of Christendom; this success confirmed my right to rule and demonstrated that imperial authority rested on",
            "correct": "military prowess and divine favor.",
            "wrong": ["papal blessing.", "noble consent.", "hereditary claim alone."]
          },
          {
            start: "I appointed loyal men from my own chapel and family as bishops because bishops must serve both God and the realm; by investing them with spiritual and temporal authority, I created reliable administrators who strengthened royal power against",
            "correct": "rebellious dukes.",
            "wrong": ["the church.", "the pope.", "papal claims."]
          }
        ]
      },
      {
        name: "Otto III (Renovatio Imperii Romanorum)",
        emoji: "📜",
        quotes: [
          {
            start: "I pursued the Renovatio Imperii Romanorum because the empire should revive the glory and universal Christian order of ancient Rome, blending German, Roman, and Byzantine elements under",
            "correct": "divine mandate.",
            "wrong": ["papal control.", "German tradition.", "feudal custom."]
          },
          {
            start: "My policies in Rome and choice of advisors demonstrated that a young emperor could seek a universal Christian empire guided by piety, learning, and direct imperial authority over both secular and",
            "correct": "ecclesiastical spheres.",
            "wrong": ["papal spheres.", "noble spheres.", "German spheres."]
          },
          {
            start: "I adopted the seal and bull with the inscription Renovatio Imperii Romanorum because the empire of the Romans must be renewed in its ancient dignity and Christian splendor, with Rome as its true capital and center of a universal",
            "correct": "Christian order.",
            "wrong": ["German empire.", "feudal realm.", "papal state."]
          },
          {
            start: "I appointed the brilliant scholar Gerbert of Aurillac as Pope Sylvester II, choosing as advisor a man who combined mastery of mathematics, logic, and classical learning, showing that Christian reform and ancient learning could unite in service of",
            "correct": "the renewed empire.",
            "wrong": ["papal power.", "German custom.", "secular rule."]
          },
          {
            start: "I built a palace on the Aventine Hill in Rome and resided there because the emperor belongs at the ancient heart of the empire; Rome must once again be the living capital where secular and",
            "correct": "spiritual power unite in harmony.",
            "wrong": ["remain separate.", "favor the pope.", "serve the nobles."]
          },
          {
            start: "In my charters and court I emphasized that I rule as Imperator Augustus by divine grace, continuing the work of the ancient Roman emperors and Charlemagne while creating a theocratic Christian empire guided by",
            "correct": "God.",
            "wrong": ["the pope.", "the nobles.", "German law."]
          }
        ]
      },
      {
        name: "Henry IV & the Investiture Controversy",
        emoji: "⚔️",
        quotes: [
          {
            start: "As anointed king I asserted my authority against Pope Gregory VII because kingship is a sacred office granted directly by God, and the emperor traditionally held rights over bishop appointments to",
            "correct": "preserve order in church and state.",
            "wrong": ["obey the pope.", "please the curia.", "follow canon law."]
          },
          {
            start: "My journey to Canossa in 1077 revealed that even an emperor must sometimes humble himself before the church to restore peace and legitimacy, while defending the proper balance between royal and",
            "correct": "priestly power.",
            "wrong": ["crush the papacy.", "ignore the church.", "assert total power."]
          },
          {
            start: "Henry, king not through usurpation but through the holy ordination of God, to Hildebrand, at present not pope but false monk, I wrote because the pope had overstepped by trying to depose anointed kings and",
            "correct": "interfere in imperial rights.",
            "wrong": ["defend the empire.", "strengthen royal power.", "respect divine order."]
          },
          {
            start: "I declared together with our bishops that Gregory must descend from the apostolic chair which he had usurped, because he had trodden under foot the anointed rulers of the church and brought confusion instead of",
            "correct": "order.",
            "wrong": ["peace to Christian lands.", "stability to the faithful.", "harmony among bishops."]
          },
          {
            start: "I, Henry, king by the grace of God, with all my bishops say to you: descend, descend, to be damned throughout the ages — because the pope had disturbed the proper order between regnum (royal power) and",
            "correct": "sacerdotium (priestly power).",
            "wrong": ["imperial supremacy.", "royal dominance.", "secular control."]
          },
          {
            start: "At Canossa in 1077, standing barefoot in the snow for three days, I performed penance because I sought absolution from excommunication to regain legitimacy and prevent my enemies in Germany from",
            "correct": "using the pope against me.",
            "wrong": ["gathering strength for rebellion.", "organizing armed resistance.", "forming papal alliances."]
          },
          {
            start: "In my oath at Canossa I promised that I would satisfy the grievances of the German princes and bishops according to the pope's judgment or counsel, and guarantee safe passage and",
            "correct": "protection to Gregory if he came to Germany.",
            "wrong": ["freedom for the papacy.", "independence for Italian lands.", "autonomy for church officials."]
          }
        ]
      },
      {
        name: "Frederick I Barbarossa (Hohenstaufen Restorer)",
        emoji: "🛡️",
        quotes: [
          {
            start: "The kingdom and empire are ours by the election of the princes and by God alone, therefore imperial authority derives directly from God and the princes, not as a fief from the pope, enabling recovery of regalian rights and",
            "correct": "restoration of peace and Roman law.",
            "wrong": ["papal supremacy.", "church approval.", "feudal submission."]
          },
          {
            start: "I sought to recover rights and enforce peace because strong central authority, supported by feudal bonds and Roman law, was essential to limit powerful princes and",
            "correct": "rebellious communes.",
            "wrong": ["loyal vassals.", "papal legates.", "imperial allies."]
          },
          {
            start: "An emperor is subject to no one but God and justice; therefore I will restore the ancient rights and dignities of the empire, using Roman law as",
            "correct": "the foundation for just rule across all territories.",
            "wrong": ["a papal gift.", "church tradition.", "temporary measure."]
          },
          {
            start: "At the Diet of Roncaglia in 1158, with the advice of learned doctors of Roman law, I decreed that all regalian rights — tolls, mints, markets, judicial authority, and other imperial prerogatives — belong to the",
            "correct": "emperor alone.",
            "wrong": ["pope alone.", "cities freely.", "princes jointly."]
          },
          {
            start: "I issued the Land Peace because by the divine mercy that raised me to the throne, I must preserve divine and human laws, protect churches and the weak, and punish violence so that",
            "correct": "peace may reign throughout the realm.",
            "wrong": ["papal power grows.", "princes stay weak.", "communes dominate."]
          },
          {
            start: "When dealing with rebellious cities like Milan and the Lombard communes, I understood that the emperor must assert the majesty of the empire and restore order through law and, when necessary, force, so that",
            "correct": "the ancient dignity of Rome could be revived.",
            "wrong": ["papal authority prevails.", "cities remain free.", "princes gain power."]
          },
          {
            start: "In my conflicts with the papacy I maintained that the empire receives its authority from God through the election of the",
            "correct": "princes.",
            "wrong": ["pope.", "people.", "clergy."]
          },
          {
            start: "My recognition of the Welf family in northern Italy and balance between Guelphs and Ghibellines showed that imperial power derived from managing competing noble factions rather than from any single source, requiring constant",
            "correct": "negotiation and strategic concessions.",
            "wrong": ["absolute military dominance.", "papal authorization.", "total centralization."]
          },
          { 
            start: "Frederick Barbarossa drowned in the Saleph River in 1190 during the Third Crusade, and his death caused the German crusading army to dissolve, demonstrating that personal leadership was so central to medieval empire that one death could", 
            "correct": "destroy a major military campaign.", 
            "wrong": ["alter succession customs.", "reshape religious doctrine.", "increase royal revenues."] 
          }
        ]
      },
      {
        name: "Frederick II (Stupor Mundi – Lawgiver)",
        emoji: "📖",
        quotes: [
          { 
              start: "In the Constitutions of Melfi (1231) I established that the emperor is the living law upon earth, deriving authority directly from God, with the imperial office as the sole source of temporal justice and",
              correct: "centralized administration.",
              wrong: ["subjugation of the clergy.", "expansion of feudal powers.", "elimination of local traditions."] 
            },
            { 
              start: "My rule in Sicily and the empire showed that effective governance required a hierarchical administrative system, trained lay officials, and strong royal control to replace clerical officialdom and",
              correct: "curb noble autonomy.",
              wrong: ["strengthen papal influence.", "preserve feudal independence.", "protect diocesan authority."] 
            },
            { 
              start: "We, whom divine providence elevated beyond human hope to the pinnacle of the Roman Empire, have promulgated these laws because the emperor must provide for the common welfare, protect the weak, and ensure justice flows from",
              correct: "the throne alone.",
              wrong: ["councils of the realm.", "the voice of the people.", "multiple competing authorities."] 
            },
            { 
              start: "In the Kingdom of Sicily I decreed that no one may bear arms without royal license and that all justice must be rendered by royal magistrates alone, so that peace and order replace the chaos of private warfare and",
              correct: "baronial courts.",
              wrong: ["episcopal jurisdiction.", "feudal arbitration.", "noble judgment halls."] 
            },
            { 
              start: "In the Kingdom of Sicily I prohibited the sale of fiefs and ended subinfeudation because all fiefs ultimately belong to the crown; this centralization served as a model showing that feudal fragmentation weakens the state while central control ensures",
              correct: "effective administration.",
              wrong: ["noble independence.", "vassal autonomy.", "local self-governance."] 
            },
            { 
              start: "Through these constitutions I replaced clerical officials with trained laymen because secular administration by professional officials loyal to the crown creates a more efficient and reliable system of government than",
              correct: "reliance on churchmen with divided loyalties.",
              wrong: ["delegation to the papacy.", "trust in episcopal councils.", "cooperation with religious orders."] 
            },
            { 
              start: "As emperor and king I understood that true authority demands the supremacy of written law, the abolition of trial by ordeal, equality before royal courts for all subjects, and the emperor's role as",
              correct: "the living source of justice.",
              wrong: ["interpreter of divine will.", "representative of the church.", "mediator between God and people."] 
            },
            { 
              start: "My patronage of scholars, translation of Arabic texts, and scientific curiosity demonstrated that even an absolute lawgiver understood the value of learning and reason, showing that imperial authority encompassed not just law but also",
              correct: "advancement of human knowledge.",
              wrong: ["defense of religious doctrine.", "preservation of feudal traditions.", "protection of noble privileges."] 
            },
            { 
              start: "Frederick II negotiated the return of Jerusalem through diplomacy with the Ayyubid Sultan al-Kamil in 1229 without military conquest, achieving what crusaders had failed to do by force, but was condemned by the Pope for", 
              "correct": "treating with Muslims rather than fighting them.", 
              "wrong": ["giving away too much territory.", "returning without papal permission.", "converting to Islam during negotiations."] 
            }
        ]
      },
      {
        name: "Charles IV (Golden Bull & Constitutional Order)",
        emoji: "⚖️",
        quotes: [
          { 
            start: "In the Golden Bull of 1356 I decreed that the lands of the prince-electors must remain undivided and pass by primogeniture, so that the pillars of the empire would not collapse and elections could proceed without",
            correct: "dangerous divisions.",
            wrong: ["papal interference.", "foreign invasion.", "noble conspiracy."] 
          },
          { 
            start: "I ordained that electors and their heirs be instructed in languages and liberal arts because the emperor must govern diverse nations with different customs and tongues; the electors, as columns of the empire, needed wisdom to",
            correct: "understand and be understood.",
            wrong: ["wage military campaigns.", "collect taxes efficiently.", "command respect through force."] 
          },
          { 
            start: "Every realm that is divided internally will go to ruin because its princes become comrades of thieves; the Lord pours out the spirit of deceit so that they grope in darkness and bring about evil deeds which",
            correct: "occur in disunity.",
            wrong: ["benefit from weakness.", "strengthen external powers.", "create opportunity for invasion."] 
          },
          { 
            start: "I have promulgated these laws for the purpose of cherishing unity among the electors, bringing about a unanimous election, and closing all approach to detestable discord and the various dangers that",
            correct: "arise from it.",
            wrong: ["weaken competing kingdoms.", "strengthen rival powers.", "threaten Christian lands."] 
          },
          { 
            start: "The seven electors are the columns and sides of the holy empire because through them, as through seven candlesticks, the empire ought to be illumined with the unity of a septiform spirit; when they are shaken,",
            correct: "the whole edifice risks ruin.",
            wrong: ["neighboring kingdoms prosper.", "papal authority increases.", "the church grows stronger."] 
          },
          { 
            start: "I decreed that each elector must ensure safe passage for the others so the royal election proceeds without interference or",
            correct: "fear.",
            wrong: ["papal interference.", "noble rivalry.", "foreign bribery."] 
          },
          { 
            start: "Since the Holy Roman Empire governs diverse peoples, the prince electors should learn Italian and Slavic as well as German from age seven so they may understand and rule",
            correct: "effectively.",
            wrong: ["militarily.", "piously.", "justly."] 
          },
          {
            start: "I chose Prague as my imperial capital and founded Charles University in 1348 because the emperor's role extended beyond military conquest to include patronage of learning and urban development, making Prague a center of",
            "correct": "culture and scholarship.",
            "wrong": ["military fortification.", "commercial trading.", "religious pilgrimage."]
          }
        ]
      },
      {
        name: "Maximilian I (Imperial Reformer)",
        emoji: "🏛️",
        quotes: [
          { 
            start: "At the Diet of Worms in 1495 I proclaimed the Perpetual Public Peace because private feuds and wars must end; law and order, enforced through imperial institutions, are necessary to preserve the empire and",
            correct: "defend Christendom.",
            wrong: ["expand territorial holdings.", "increase imperial revenue.", "subjugate rebellious nobles."] 
          },
          { 
            start: "I introduced the Common Penny tax and supported the Imperial Chamber Court because the empire required new institutions and revenue to resist external enemies like the Turks and to administer",
            correct: "justice across the territories.",
            wrong: ["personal wealth for the crown.", "military conquest of neighbors.", "expansion of imperial lands."] 
          },
          { 
            start: "We, Maximilian, Roman King, have seen that Christendom is under threat at the Empire's borders; therefore we establish law and order to",
            correct: "defend it.",
            wrong: ["negotiate tribute payments.", "rely on papal crusade calls alone.", "leave defense to individual princes."] 
          },
          { 
            start: "Following the unanimous counsel of the electors and Estates, We establish a common peace: no one shall wage war, rob, or feud; all disputes must be resolved through",
            correct: "law.",
            wrong: ["the sword.", "personal combat.", "noble judgment."] 
          },
          { 
            start: "Whoever has a quarrel with another shall take his case to the courts because the regime of law and order must replace the old right of feud; only through impartial justice can the empire be preserved and its honor, population, and",
            correct: "dignity maintained.",
            wrong: ["military might increased.", "economic power expanded.", "territorial borders extended."] 
          },
          { 
            start: "We have also established the Common Penny, a direct tax on every subject, because the empire needs reliable revenue to fund the new imperial institutions and the maintenance of",
            correct: "public peace and justice.",
            wrong: ["personal imperial luxury.", "noble entertainment.", "clerical wealth."] 
          },
          { 
            start: "By creating the Imperial Chamber Court alongside the Perpetual Public Peace, I ensured that justice would be administered according to law so that the strong could no longer oppress the weak and the empire could",
            correct: "function as one body under orderly rule.",
            wrong: ["wage wars of conquest.", "accumulate imperial treasure.", "dominate neighboring states."] 
          }
        ]
      },
      {
        name: "Knights & Chivalry",
        emoji: "⚔️",
        quotes: [
          { start: "A knight must defend the church, protect the weak, and uphold justice because chivalry combined martial skill with Christian duty: fidelity to oaths, mercy to the vulnerable, generosity, and",
          "correct": "service to God, lord, and lady.",
            "wrong": ["military glory above all else.", "loyalty to the highest bidder.", "personal honor over sworn oaths."] 
    },
          { start: "A knight's oath binds him to respect weaknesses and constitute himself their defender because true courage requires performing feudal duties faithfully, showing mercy where appropriate, and fighting infidels without",
          "correct": "compromise when required.",
            "wrong": ["hesitation or doubt.", "fear of death.", "concern for personal safety."] }
        ]
      },
      {
        name: "Scholars & Chroniclers (e.g. Otto of Freising)",
        emoji: "📖",
        quotes: [
          { start: "We chroniclers recorded the deeds of emperors and the history of the two cities because the empire and church together form part of God's divine order on earth, restraining chaos; knowledge and philosophy guide rulers toward",
          "correct": "just governance.",
            "wrong": ["military conquest.", "territorial expansion.", "personal enrichment."] },
          { start: "Wisdom serves the empire because a ruler who balances force with justice, education, and awareness of both earthly and heavenly realms better maintains peace and",
          "correct": "legitimacy.",
            "wrong": ["military supremacy.", "economic dominance.", "hereditary succession."] }
        ]
      },
      {
        name: "Administration, Faith & Unity",
        emoji: "🕯️",
        quotes: [
          { start: "The Holy Roman Empire endured because its rulers understood that legitimate power required a balance of princely election, often papal coronation, Christian legitimacy, and adaptation to diverse laws and",
          "correct": "territories.",
            "wrong": ["military force alone.", "external conquest.", "papal supremacy."] },
          { start: "Despite periods of fragmentation, the empire preserved Roman legal traditions, chivalric ideals, scholarly continuity, and the ideal of a universal Christian order that",
          "correct": "shaped later European institutions.",
            "wrong": ["was completely forgotten.", "had no lasting impact.", "disappeared entirely."] },
          { 
            start: "The Concordat of Worms (1122) resolved the Investiture Controversy by distinguishing between spiritual investiture (ring and staff, given by the church) and temporal investiture (scepter, given by the emperor), establishing", 
            "correct": "a formal separation between spiritual and temporal authority.", 
            "wrong": ["total papal victory over emperors.", "complete imperial control of church appointments.", "the end of all conflict between pope and emperor."] 
          }
        ]
      },
      {
        name: "Decline & Legacy",
        emoji: "📜",
        quotes: [
          { 
            start: "The empire's gradual decentralization showed that while strong personal leadership and institutions could unify it temporarily, competing princely interests, external pressures, and",
            correct: "evolving European states ultimately limited central authority.",
            wrong: ["the pope's intervention alone.", "the people's rebellion.", "economic depression."] 
          },
          { 
            start: "Even as the empire dissolved in 1806, its legacy demonstrated that the ideal of a Christian universal empire, Roman law, and constitutional experiments like the Golden Bull influenced modern concepts of federalism, law, and",
            correct: "European order.",
            wrong: ["autocratic rule.", "monarchical supremacy.", "centralized state power."] 
          }
        ]
      }
    ]
  },
  {
    id: "babylon",
    name: "Babylonian Empire",
    emoji: "📜",
    color: 0xf57c00,
    colorHex: "#f57c00",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Hammurabi (Lawgiver & Unifier)",
        emoji: "👑",
        quotes: [
          { 
            start: "I, Hammurabi, the exalted prince who feared the gods, established these laws so that the strong should not harm the weak, justice would appear in the land, and",
            correct: "the well-being of mankind would be furthered.",
            wrong: ["the king's glory would endure forever.", "the army would remain victorious.", "the gods would receive more offerings."] 
          },
          { 
            start: "When Marduk sent me to rule over men and give the protection of right to the land, I did right and righteousness because a king must bring about the rule of righteousness, destroy the wicked, and",
            correct: "protect widows and orphans.",
            wrong: ["care for the vulnerable.", "defend the helpless.", "safeguard the weak."] 
          },
          { 
            start: "I set up my stele with these precious words before my image as king of righteousness so that the oppressed who have a case at law could come, read the inscription, understand what is just, and",
            correct: "calm their heart.",
            wrong: ["appeal to higher authority.", "seek compensation from the king.", "challenge unjust rulings."] 
          },
          { 
            start: "The laws I inscribed demonstrate that justice must be clear, public, and proportional, applying across social classes while",
            correct: "maintaining order in the realm.",
            wrong: ["preserving social structure.", "ensuring stability.", "promoting harmony."] 
          },
          { 
            start: "The Code of Hammurabi established different penalties for the same crime depending on the social status of the victim, showing that Babylonian justice", 
            "correct": "reflected and reinforced existing social hierarchies.", 
            "wrong": ["treated all citizens equally.", "was purely based on merit.", "ignored social distinctions."] 
          }
        ]
      },
      {
        name: "Nebuchadnezzar II (Builder & Restorer)",
        emoji: "🏛️",
        quotes: [
          { 
            start: "I, Nebuchadnezzar, laid the foundations of the Ishtar Gate and its walls with blue stone and adorned them with bulls and dragons because I magnificently adorned them with luxurious splendor for all mankind to behold in awe and",
            correct: "to glorify Marduk.",
            wrong: ["honor the gods.", "praise the divine.", "exalt the heavens."] 
          },
          { 
            start: "I built the strong outer wall of Babylon with bitumen and baked bricks, raising its top as high as a mountain, so that the fortifications of Esagila and Babylon would be strengthened and",
            correct: "the name of my reign established forever.",
            wrong: ["my legacy preserved eternally.", "memory endure for ages.", "power remembered always."] 
          },
          { start: "My restoration of the great ziggurat Etemenanki and other ancient sanctuaries demonstrated that Babylonian kings derived legitimacy from", 
          "correct": "restoring and honoring ancient sacred traditions.", 
          "wrong": ["building entirely new monuments.", "rejecting earlier religious practices.", "surpassing all previous kings."]
          },
          { 
            start: "I had the widespread people undertake labor for Etemenanki and other works because Marduk granted me dominion over them, and such projects honored the gods while showcasing Babylonian organizational power and",
            correct: "resources.",
            wrong: ["wealth.", "capability.", "strength."] 
          }
        ]
      },
      {
        name: "Priests & Astronomers",
        emoji: "🕯️",
        quotes: [
          { 
            start: "The stars and celestial phenomena recorded in the Enuma Anu Enlil series reveal omens because the gods Anu, Enlil, and Ea designed the heavens, and careful observation allows the wise to interpret divine will for kings and the",
            correct: "land.",
            wrong: ["priests alone.", "the military commanders.", "foreign ambassadors."] 
          },
          { 
            start: "Prayer to Marduk, Shamash, or the gods of the night, combined with astronomical observation, maintains balance between human action and divine order, agriculture, and",
            correct: "kingship.",
            wrong: ["rule.", "governance.", "authority."] 
          },
          { 
            start: "Babylonian scribes and priests compiled thousands of celestial omens and mathematical tables because accurate prediction of lunar phases and planetary movements served both practical administration and",
            correct: "religious divination.",
            wrong: ["spiritual guidance.", "priestly authority.", "sacred interpretation."] 
          },
          { 
            start: "Babylonian astronomers developed the saros cycle — an 18-year period for predicting eclipses — demonstrating that systematic record-keeping over generations could", 
            "correct": "reveal patterns in celestial phenomena.", 
            "wrong": ["replace religious interpretation of omens.", "prove the gods controlled the heavens.", "eliminate the need for observation."] 
          }
        ]
      },
      {
        name: "Merchants & Economic Life",
        emoji: "💰",
        quotes: [
          { 
            start: "Babylonian merchants (tamkarum) conducted long-distance trade in textiles, grain, and luxury goods because control of routes, fair regulations in the law code, and tribute from subject regions created",
            correct: "a prosperous economy supporting the empire.",
            wrong: ["widespread wealth.", "economic power.", "stability."] 
          },
          { 
            start: "The Code of Hammurabi regulated contracts, loans, and commerce so that transactions would be orderly, disputes minimized, and the strong prevented from oppressing traders or",
            correct: "debtors.",
            wrong: ["creditors.", "borrowers.", "merchants."] 
          },
          { 
            start: "Tribute and taxes from conquered territories, combined with internal production and trade tolls, allowed Babylon to fund massive building projects, maintain temples, and sustain a complex urban society with",
            correct: "specialized labor.",
            wrong: ["diverse populations.", "imperial institutions.", "cultural institutions."] 
          }
        ]
      },
      {
        name: "Babylonian Religion & Ideology",
        emoji: "🕯️",
        quotes: [
          { 
            start: "The king was seen as the representative of Marduk, who commissioned him to rule, because royal authority derived from divine mandate, making conquest, justice, and building acts of piety that",
            correct: "upheld cosmic order.",
            wrong: ["maintained harmony.", "preserved balance.", "sustained creation."] 
          },
          { 
            start: "Tolerance of local cults while elevating Marduk and restoring temples demonstrated that Babylonian rule integrated diverse peoples by honoring their gods (as long as supremacy was acknowledged), ensuring",
            correct: "stability.",
            wrong: ["loyalty.", "compliance.", "obedience."] 
          },
          { 
            start: "Inscriptions and prayers, such as those invoking Shamash as the just judge or Marduk as creator, served to legitimize the king's actions, record achievements for posterity, and seek divine favor for",
            correct: "the prosperity of the land.",
            wrong: ["the kingdom's wealth.", "the people's welfare.", "the realm's success."] 
          }
        ]
      },
      {
        name: "Babylonian Legacy & Administration",
        emoji: "📜",
        quotes: [
          { 
            start: "The preservation of knowledge through libraries, scribal training, and cuneiform records showed that Babylonian rulers understood administration of a vast empire required written laws, astronomical data, and literary texts for",
            correct: "continuity.",
            wrong: ["stability.", "organization.", "order."] 
          },
          { 
            start: "Babylon's greatness under kings like Hammurabi and Nebuchadnezzar lay in combining law, monumental architecture, trade networks, and celestial science to create a sophisticated civilization that",
            correct: "influenced later empires.",
            wrong: ["disappeared without trace.", "were surpassed immediately by Persia.", "had no impact beyond Mesopotamia."] 
          },
          { 
            start: "Even after political shifts, the Babylonian tradition of scholarship endured because texts on law, astronomy, and literature were copied and studied, transmitting knowledge to",
            correct: "Persians, Greeks, and beyond.",
            wrong: ["Mediterranean civilizations.", "ancient societies.", "neighboring cultures."] 
          },
          { 
            start: "When Cyrus the Great entered Babylon in 539 BCE, he was welcomed by many citizens because he presented himself as a liberator restoring Marduk's worship, demonstrating that how a king frames his conquest can determine whether people resist or", 
            "correct": "welcome him.", 
            "wrong": ["negotiate treaties.", "change languages.", "ignore taxation."] 
          }
        ]
      },
      {
        name: "Nabopolassar & Nabonidus (Founders & Later Kings)",
        emoji: "🏛️",
        quotes: [
          { start: "As Nabopolassar, I pleased the hearts of Nabû and Marduk when I restored the walls of Babylon and strengthened the sanctuaries, laying foundations for the empire's renewed",
          "correct": "greatness.",
            "wrong": ["prosperity.", "glory.", "power."] },
          { start: "Nabonidus' devotion to the moon god Sin over Marduk alienated Babylon's powerful priestly class, showing that a king who neglects the chief state religion risks", 
          "correct": "losing the support of powerful religious institutions.", 
          "wrong": ["divine punishment alone.", "popular rebellion.", "no real political consequences."]}
        ]
      }
    ]
  },
  {
    id: "assyria",
    name: "Assyrian Empire",
    emoji: "🪓",
    color: 0x8b0000,
    colorHex: "#8b0000",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Ashurnasirpal II (Expansion & Military Organization)",
        emoji: "👑",
        quotes: [
          { 
            start: "I expanded the Assyrian Empire through relentless military campaigns by understanding that successive conquests could not only add territory but also establish Assyria as a feared power that would",
            correct: "be difficult to challenge.",
            wrong: ["be seen as culturally sophisticated.", "win the loyalty of subjects.", "be remembered favorably."] 
          },
          { 
            start: "The establishment of Assyrian military superiority required creating a professional standing army because an empire of such size needed forces that could be mobilized quickly and coordinated effectively across",
            correct: "vast distances.",
            wrong: ["seasonal campaigns only.", "local conflicts.", "defensive operations."] 
          },
          { 
            start: "My construction of a new capital at Kalhu (Nimrud) and the palaces within it served to demonstrate that Assyrian power was permanent, that resources were being accumulated, and",
            correct: "that the king controlled wealth and labor.",
            wrong: ["that authority was supreme.", "that dominance was total.", "that rule was absolute."] 
          },
          { 
            start: "The detailed recording of my military campaigns on palace reliefs and in texts served to proclaim achievements to subjects and enemies, establish the king's historical record, and",
            correct: "demonstrate that Assyrian power was irresistible.",
            wrong: ["show Assyrian strength.", "prove military might.", "display imperial force."] 
          },
          { 
            start: "The use of terror—the deportation of conquered populations, the execution of rebels, the flaying of enemies—served the strategic purpose of discouraging rebellion, making the cost of resistance so high that",
            correct: "compliance seemed rational.",
            wrong: ["submission appeared necessary.", "obedience seemed wise.", "loyalty became inevitable."] 
          },
          { 
            start: "The organization of the empire into provinces with appointed governors meant that the king could maintain direct control from the capital rather than relying on vassal kings who might",
            correct: "pursue their own interests.",
            wrong: ["seek independence.", "claim autonomy.", "demand authority."] 
          }
        ]
      },
      {
        name: "Sargon II (Administration & Conquest)",
        emoji: "⚔️",
        quotes: [
          { 
            start: "My conquest of the northern kingdom of Israel and the deportation of its population demonstrated that no kingdom could resist Assyrian military power and that defiance would result in destruction and",
            correct: "exile.",
            wrong: ["captivity.", "displacement.", "relocation."] 
          },
          { 
            start: "The construction of a new capital at Dur-Sharrukin and the establishment of new administrative centers served to consolidate power, demonstrate resources, and establish control over",
            correct: "newly conquered territories.",
            wrong: ["expanded lands.", "recent conquests.", "subject regions."] 
          },
          { 
            start: "My military campaigns against the Urartu kingdom and other rivals required understanding that maintaining Assyrian dominance meant constant military action to prevent rivals from building sufficient power to",
            correct: "challenge Assyria.",
            wrong: ["threaten supremacy.", "rival power.", "contest control."] 
          },
          { 
            start: "The recruitment of soldiers from conquered territories into the Assyrian army served to augment military forces, create incentives for loyalty by allowing advancement, and",
            correct: "disperse potentially rebellious populations.",
            wrong: ["prevent uprisings.", "weaken local unity.", "limit resistance."] 
          },
          { 
            start: "The maintenance of Assyrian power required that my successors understand that an empire built on fear and military dominance needs continuous military success and the demonstration of strength, or rivals will begin to",
            correct: "challenge Assyrian authority.",
            wrong: ["resist empire.", "defy control.", "question supremacy."] 
          }
        ]
      },
      {
        name: "Sennacherib (Assimilation & Infrastructure)",
        emoji: "🏛️",
        quotes: [
          { 
            start: "I understood that Assyrian power required not only military dominance but also the development of infrastructure because roads, water systems, and administrative centers allowed the empire to function and",
            correct: "resources to be mobilized.",
            wrong: ["goods to be transported.", "supplies to flow.", "materials to move."] 
          },
          { 
            start: "The expansion of Nineveh into one of the ancient world's greatest cities served to demonstrate that Assyrian resources were immense and that Assyrian civilization was",
            correct: "sophisticated.",
            wrong: ["advanced.", "cultured.", "refined."] 
          },
          { 
            start: "My construction of the 'Palace Without Rival' at Nineveh demonstrated Assyrian resources, and later my grandson Ashurbanipal would add a great library, showing that military and cultural achievements could",
            correct: "coexist within the same dynasty.",
            wrong: ["cultural (preserving traditions) purposes.", "educational (training scribes) purposes.", "scholarly (advancing learning) purposes."] 
          },
          { 
            start: "The military failure against Jerusalem, despite the city's vulnerability, showed that even a powerful king could not always achieve success and that factors including leadership, morale, and resistance could",
            correct: "sometimes prevent conquest.",
            wrong: ["occasionally hinder victory.", "at times impede success.", "rarely allow triumph."] 
          },
          { 
            start: "My reign demonstrated that successful Assyrian rulers understood that military conquest had to be followed by administration  and sometimes the incorporation of local populations into the",
            correct: "empire.",
            wrong: ["state.", "kingdom.", "realm."] 
          }
        ]
      },
      {
        name: "Ashurbanipal (Culture & Administration)",
        emoji: "📚",
        quotes: [
          { 
            start: "I am remembered not only as a military conqueror but also as a patron of learning and culture because I understood that an empire's greatness lay not only in military dominance but in the sophistication of its culture and",
            correct: "administration.",
            wrong: ["organization.", "governance.", "institutions."] 
          },
          { 
            start: "The expansion of Sennacherib's library into one of the most comprehensive collections of cuneiform texts was possible because I commissioned the copying of texts and established a systematic archive of",
            correct: "human knowledge.",
            wrong: ["written records.", "scholarly works.", "ancient texts."] 
          },
          { 
            start: "My military campaigns extended Assyrian territory to its greatest extent, demonstrating that an Assyrian king who could mobilize resources and organize military campaigns could achieve",
            correct: "conquest across vast distances.",
            wrong: ["territorial expansion.", "regional dominance.", "imperial power."] 
          },
          { 
            start: "The maintenance of control over Egypt, conquered by my father Esarhaddon, required understanding that the logistics of such distant territories made permanent occupation nearly impossible without",
            correct: "continuous military presence.",
            wrong: ["battlefield success.", "tactical advantage.", "military triumph."] 
          },
          { 
            start: "The decline of Assyrian power after my death shows that an empire dependent on continuous military expansion and strong personal leadership faced challenges when a weaker successor took the throne and",
            correct: "the empire began to fragment.",
            wrong: ["power was dispersed.", "unity weakened.", "authority scattered."] 
          },
          { 
            start: "My patronage of scholarship, the arts, and the preservation of knowledge created a legacy that transcended military conquest, as these texts would influence future civilizations including the Persian, Greek, Islamic, and",
            correct: "modern worlds.",
            wrong: ["contemporary societies.", "later ages.", "future centuries."] 
          }
        ]
      },
      {
        name: "Assyrian Military Organization & Strategy",
        emoji: "⚔️",
        quotes: [
            { 
              start: "The Assyrian military achieved dominance through a combination of cavalry, chariotry, and infantry because different unit types could work together—cavalry for rapid movement and pursuit,",
              correct: "infantry for holding territory.",
              wrong: ["priests for legitimacy.", "scribes for administration.", "merchants for supply."] 
            },
            { 
              start: "The use of siege warfare technology—battering rams, siege towers, sappers—by Assyrian forces allowed them to breach city fortifications that would otherwise have",
              correct: "provided protection against field armies.",
              wrong: ["resisted conquest.", "withstood armies.", "repelled attacks."] 
            },
            { 
              start: "The organization of the Assyrian army into professional units with appointed commanders meant that the king could field large armies that could be coordinated and could",
              correct: "operate across vast distances.",
              wrong: ["function independently.", "act autonomously.", "move effectively."] 
            },
            { 
              start: "The rapid communication systems used by Assyrian commanders, including mounted messengers and signal systems, allowed for coordination of military campaigns across distances and",
              correct: "the ability to adjust strategy based on new information.",
              wrong: ["tactical flexibility.", "strategic adaptation.", "responsive action."] 
            },
            { 
              start: "The Assyrian practice of maintaining garrison forces in conquered cities served to prevent rebellion, maintain control, demonstrate Assyrian presence, and",
              correct: "provide a base for further campaigns.",
              wrong: ["support military operations.", "enable future expansion.", "facilitate regional conquest."] 
            },
            { 
              start: "The logistics required to supply large Assyrian armies across vast distances required that the empire establish supply depots, roads and the coordination of",
              correct: "resources across provinces.",
              wrong: ["materials throughout empire.", "supplies among regions.", "goods across territories."] 
            },
            { 
              start: "The Assyrian use of iron weapons and armor, more widely than their contemporaries, gave their armies a decisive advantage because iron was", 
              "correct": "harder and more widely available than bronze.", 
              "wrong": ["easier to cast than bronze.", "lighter than copper.", "already used by all major powers."] 
            }
        ]
      },
      {
        name: "Assyrian Administration & Governance",
        emoji: "⚖️",
        quotes: [
            { 
              start: "The Assyrian system of governance required establishing appointed governors in conquered territories because appointed officials loyal to the king would implement royal policy rather than",
              correct: "pursuing their own interests.",
              wrong: ["claiming autonomy.", "seeking independence.", "acting independently."] 
            },
            { 
              start: "The Assyrian deportation policy aimed to prevent rebellion by dispersing populations, redistributing labor, and ensuring no region remained",
              correct: "strong.",
              wrong: ["individually powerful.", "culturally cohesive.", "economically self-sufficient."] 
            },
            { 
              start: "The collection of tribute from vassal states and conquered kingdoms provided the Assyrian treasury with resources that could be used for military campaigns, administrative expenses, and",
              correct: "gifts to secure loyalty.",
              wrong: ["rewards for officials.", "payments to allies.", "incentives for obedience."] 
            },
            { 
              start: "The Assyrian approach to subject peoples required that rulers understand that brutal repression of rebellion deterred future resistance, but reasonable treatment of compliant subjects ensured stability and allowed resources to be",
              correct: "extracted without constant military presence.",
              wrong: ["collected efficiently.", "gathered sustainably.", "obtained peacefully."] 
            },
            { 
              start: "The maintaining of order in the empire required establishing a system of justice and law that applied consistently across the empire and created the perception that Assyrian rule was",
              correct: "orderly and predictable.",
              wrong: ["fair and just.", "firm and authoritative.", "stable and secure."] 
            }
        ]
      },
      {
        name: "Assyrian Diplomacy & Foreign Relations",
        emoji: "🌍",
        quotes: [
          { 
            start: "The Assyrian approach to other kingdoms included a spectrum from complete conquest to tributary relationships to diplomatic equals, depending on the relative power of the other kingdom, Assyria's military capabilities at the moment, and",
            correct: "the strategic value of the relationship.",
            wrong: ["cultural similarities.", "geographic proximity.", "economic benefits."] 
          },
          { 
            start: "The exchange of embassies and diplomatic correspondence by Assyrian kings served to communicate demands, negotiate tributary relationships, gather intelligence, and",
            correct: "maintain relationships with distant powers.",
            wrong: ["establish trade networks.", "share cultural values.", "coordinate military strategy."] 
          },
          { 
            start: "In the final years of the empire, Assyria sought alliances with Egypt against the rising Medo-Babylonian coalition, demonstrating that even dominant empires must seek",
            correct: "allies when facing existential threats.",
            wrong: ["ambition.", "supremacy.", "control."] 
          },
          { 
            start: "The Assyrian relationship with Babylonia alternated between conquest and coexistence, requiring that Assyrian kings understand that maintaining indefinite control over Babylonia required either continuous military presence or",
            correct: "accommodation of Babylonian interests.",
            wrong: ["diplomatic negotiations.", "cultural assimilation.", "political compromise."] 
          }
        ]
      },
      {
        name: "Assyrian Religion & Ideology",
        emoji: "🕯️",
        quotes: [
          { 
            start: "The Assyrian religious system, reinforced royal authority because the king was understood as the representative of Ashur, making the king's conquest and",
            correct: "rule appear divinely sanctioned.",
            wrong: ["personally justified.", "politically legitimized.", "spiritually blessed."] 
          },
          { 
            start: "The inscription of the king's deeds on palace reliefs and in texts served religious purposes including demonstrating that the gods favored the king and that conquest and building were evidence of",
            correct: "divine support.",
            wrong: ["celestial approval.", "heavenly favor.", "godly blessing."] 
          },
          { 
            start: "The religious justification for Assyrian conquest and the imposition of Assyrian rule on other peoples created an ideology where submission to Assyria was understood as submission to divine order and",
            correct: "Assyrian dominance as reflecting cosmic hierarchy.",
            wrong: ["natural order.", "universal law.", "spiritual balance."] 
          },
          { 
            start: "The tolerance of local religions and gods by Assyrian rulers, as long as Assyrian supremacy was acknowledged, served to integrate conquered peoples into the empire while",
            correct: "maintaining religious legitimacy among diverse populations.",
            wrong: ["preserving cultural unity.", "ensuring social stability.", "promoting imperial loyalty."] 
          },
          { 
            start: "The god Ashur, unlike Babylonian Marduk, was explicitly a war god whose worship was inseparable from Assyrian imperial expansion, meaning that military defeat", 
            "correct": "threatened the religious legitimacy of Assyrian kings.", 
            "wrong": ["had no religious implications.", "strengthened Ashur's worship.", "was seen as divine testing."] 
          }
        ]
      },
      {
        name: "Assyrian Art & Culture",
        emoji: "🎨",
        quotes: [
          { 
            start: "The distinctive Assyrian artistic style—depicting scenes of hunting, warfare, ritual, and telling stories of conquest and achievement that proclaimed Assyrian dominance and",
            correct: "the king's hunting prowess.",
            wrong: ["royal strength.", "imperial power.", "warrior spirit."] 
          },
          { 
            start: "The construction of palaces decorated with relief sculptures showing the king's achievements served to reinforce that the king was the center of power and that Assyrian civilization was",
            correct: "sophisticated.",
            wrong: ["advanced.", "cultured.", "refined."] 
          },
          { 
            start: "The Assyrian adoption of Babylonian cultural elements—language, religion—while maintaining military dominance showed that Assyria recognized the cultural sophistication of Babylon and could",
            correct: "absorb influences while maintaining political supremacy.",
            wrong: ["blend traditions successfully.", "integrate cultures effectively.", "preserve dominance."] 
          },
          { 
            start: "The training and status of scribes in Assyrian civilization served both practical and cultural purposes: maintaining administrative records, preserving knowledge through texts, making scribes essential to both",
            correct: "governance and the transmission of civilization.",
            wrong: ["state power and learning.", "administration and knowledge.", "rule and culture."] 
          }
        ]
      },
      {
        name: "Assyrian Decline & Fall",
        emoji: "📜",
        quotes: [
          { 
            start: "The fall of the Assyrian Empire came from a combination of factors: the weakness of late Assyrian kings, the fragmentation of Assyrian military and political unity that had been maintained only through",
            correct: "continuous strong leadership.",
            wrong: ["military dominance.", "centralized control.", "authoritarian rule."] 
          },
          { 
            start: "The rapid destruction of Nineveh and the complete destruction of Assyrian power by 609 BCE demonstrated that an empire built primarily on military dominance and fear",
            correct: "could collapse quickly when military power failed.",
            wrong: ["could survive through diplomacy alone.", "would be replaced by a similar empire.", "could reform before collapse."] 
          },
          { 
            start: "The final years of the Assyrian Empire, with Assyrian forces fighting defensive campaigns and losing territory, showed that even the greatest military powers cannot maintain dominance indefinitely when facing determined rivals with",
            correct: "comparable resources.",
            wrong: ["equal strength.", "sufficient power.", "adequate forces."] 
          },
          { 
            start: "The legacy of Assyria included the demonstration that a militarily sophisticated empire with advanced administration and infrastructure could dominate vast territories, but also that empires built primarily on fear and military force,",
            correct: "were vulnerable to collapse.",
            wrong: ["lacked permanence.", "faced instability.", "had weakness."] 
          },
          { 
            start: "The Assyrian Library at Nineveh created a legacy of knowledge that would influence the Persian, Greek, and future civilizations, showing that cultural and intellectual achievements could",
            correct: "transcend military and political collapse.",
            wrong: ["survive empires.", "outlast nations.", "endure civilizations."] 
          },
          { 
            start: "The fall of Nineveh in 612 BCE to the combined Median and Babylonian forces was celebrated across the ancient Near East, with texts like the Book of Nahum recording rejoicing, suggesting that Assyrian rule had", 
            "correct": "generated widespread hatred among subject peoples.", 
            "wrong": ["been largely popular.", "produced loyal subjects.", "created a stable regional order."] 
          }
        ]
      },
      {
        name: "Assyrian Scribes & Intellectual Life",
        emoji: "📜",
        quotes: [
          { 
            start: "Assyrian scribes held high status in society and served crucial functions including maintaining administrative records, preserving literary and scholarly texts from Assyria and Babylonia,",
            correct: "making them essential to both governance and culture.",
            wrong: ["purely administrative.", "no real authority.", "no cultural importance."] 
          },
          { 
            start: "The Assyrian practice of copying and preserving Babylonian literary works shows that Assyrian rulers understood that controlling and knowledge enhanced the prestige of the kingdom and",
            correct: "created cultural legitimacy.",
            wrong: ["displayed intellectual power.", "demonstrated superiority.", "established authority."] 
          },
          { 
            start: "The composition of royal inscriptions, which recorded the king's deeds, campaigns, and achievements, served purposes including historical record and propaganda that proclaimed Assyrian power and",
            correct: "success to both subjects and enemies.",
            wrong: ["strength to rivals.", "dominance to others.", "authority to all."] 
          },
          { 
            start: "The development of cuneiform administrative systems that could record complex information about taxes and personnel showed that Assyria had a sophisticated bureaucracy capable of",
            correct: "managing vast empire through written records.",
            wrong: ["controlling territories.", "organizing resources.", "governing populations."] 
          }
        ]
      },
      {
        name: "Assyrian Economic Systems & Trade",
        emoji: "💰",
        quotes: [
          { 
            start: "The Assyrian economy was based on conquest and the extraction of tribute because the empire maintained military forces and built infrastructure through the wealth taken from conquered territories and",
            correct: "the control of valuable resources.",
            wrong: ["purely agricultural wealth.", "internal production alone.", "no real economy."] 
          },
          { 
            start: "The control of trade routes and valuable resources by Assyrian territories meant that merchants conducting trade had to pay tolls and taxes to Assyrian authorities,",
            correct: "providing revenue for the empire.",
            wrong: ["funding local governments.", "enriching merchants.", "supporting commerce."] 
          },
          { 
            start: "The exploitation of subject peoples through taxation and forced labor served to enrich the Assyrian heartland and provide resources for military campaigns, but also created constant threat of rebellion that required military garrisons and",
            correct: "the periodic use of brutal force.",
            wrong: ["strict laws.", "violent repression.", "harsh punishment."] 
          },
          { 
            start: "The Assyrian accumulation of tribute and goods allowed rulers to demonstrate power through building projects, but this system was vulnerable to collapse if military power failed and",
            correct: "conquered peoples could revolt.",
            wrong: ["the empire weakened.", "rebellions erupted.", "control was lost."] 
          }
        ]
      }
    ]
  },
  {
    id: "maya",
    name: "Maya Civilization",
    emoji: "☀️",
    color: 0x388e3c,
    colorHex: "#388e3c",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Maya Kings (K'uhul Ajaw) - Historical Records",
        emoji: "👑",
        quotes: [
          { 
              start: "A Maya king's authority came from his role as intermediary between the human and divine worlds because the people believed that the king could communicate with the gods and ensure the continuation of cosmic cycles necessary for",
              correct: "survival.",
              wrong: ["military conquest.", "agricultural abundance.", "trade prosperity."] 
            },
            { 
              start: "The construction of temple-pyramids and palaces served to demonstrate that a king possessed the ability to command vast labor forces, accumulate resources, and", 
              correct: "establish a lasting monument to his divine authority.",
              wrong: ["create symbols of power.", "display his wealth.", "immortalize his reign."] 
            },
            { 
              start: "Maya kings conducted rituals including bloodletting (auto-sacrifice) because they believed that the shedding of royal blood sustained the cosmos and",
              correct: "ensured the continued motion of celestial bodies.",
              wrong: ["maintained cosmic order.", "preserved the world.", "sustained life force."] 
            },
            { 
              start: "The warfare conducted between Maya city-states served multiple purposes: capturing enemies for sacrifice, establishing dominance and",
              correct: "the prestige of the king and his city.",
              wrong: ["royal honor.", "political supremacy.", "territorial expansion."] 
            },
            { 
              start: "A successful Maya king demonstrated his power through commissioning inscriptions on stelae and altars recording his victories and divine connections because these texts proclaimed his achievements and",
              correct: "ensured his memory would endure.",
              wrong: ["intimidated rival cities.", "recorded trade agreements.", "documented astronomical events."] 
            },
            { 
              start: "The organization of Maya kingdoms into city-states meant that a king's power extended primarily over his immediate urban center and surrounding territory, with influence but not direct control over",
              correct: "other city-states.",
              wrong: ["distant regions.", "neighboring kingdoms.", "rival powers."] 
            },
            { 
              start: "The decline and abandonment of major Maya cities in the Classic period showed that even sophisticated rulers could not prevent the collapse of their kingdoms when facing environmental stress, warfare, or",
              correct: "the breakdown of trade networks.",
              wrong: ["economic decline.", "social upheaval.", "political fragmentation."] 
            },
            { 
              start: "The rivalry between Tikal and Calakmul — two superpowers of the Classic Maya world — shaped the politics of dozens of smaller cities through", 
              "correct": "alliance networks and proxy warfare.", 
              "wrong": ["direct military conquest.", "economic domination alone.", "religious authority."] 
            }
        ]
      },
      {
        name: "Maya Astronomy & Calendar Systems",
        emoji: "🌌",
        quotes: [
          { 
            start: "The Maya Long Count calendar counted days from a mythological base date corresponding to 3114 BCE, demonstrating sophisticated chronological and",
            correct: "mathematical knowledge.",
            wrong: ["computational skills.", "numerical systems.", "calendrical understanding."] 
          },
          { 
            start: "The accuracy of Maya astronomical predictions, including solar and lunar eclipses, came from centuries of careful",
            correct: "observation.",
            wrong: ["divine revelation.", "mathematical theory alone.", "ritual calendar consultation."] 
          },
          { 
            start: "The 260-day tzolkin (sacred calendar) and the 365-day haab' (solar calendar) worked together in a 52-year cycle because Maya priests understood that this combined system tracked both ritual time and",
            correct: "seasonal time.",
            wrong: ["natural cycles.", "agricultural periods.", "annual patterns."] 
          },
          { 
            start: "The importance of astronomical knowledge to Maya rulers came from the belief that understanding and predicting celestial events demonstrated the king's connection to",
            correct: "divine forces.",
            wrong: ["the gods.", "spiritual power.", "celestial realms."] 
          },
          { 
            start: "The Maya creation myth, encoded in the Popol Vuh and reflected in astronomical knowledge, linked the movements of Venus to events in the divine realm because Maya cosmology understood the sky as the domain where divine forces",
            correct: "operated.",
            wrong: ["ruled.", "dwelled.", "manifested."] 
          }
        ]
      },
      {
        name: "Maya Writing & Intellectual Achievement",
        emoji: "📜",
        quotes: [
          { start: "The Maya development of a complete writing system—including logograms and phonetic signs—was a major intellectual achievement because it allowed for the recording of history and",
          "correct": "religious knowledge.",
            "wrong": ["random marks.", "visual art.", "daily gossip."] },
          { start: "Maya scribes, who held high status in society and were often members of the royal family, served the crucial function of recording royal achievements, maintaining historical records and",
          "correct": "serving as advisors to kings.",
            "wrong": ["daily events.", "decorating temple walls.", "had no influence."] },
          { start: "The contents of Maya texts, recorded on stelae, altars, codices, and buildings, included information about rulers, dates, rituals, and astronomical observations, genealogies, and accounts of warfare and",
          "correct": "divine events.",
            "wrong": ["religious content.", "no historical information.", "basic ceremonial notes."] },
          { start: "Of the many Maya codices that once existed, only four survived the Spanish destruction — yet these preserved detailed knowledge about",
          "correct": "astronomy, medicine, ritual, mathematics.",
            "wrong": ["simple mythic symbols.", "purely religious texts.", "oral storytelling only."] },
          { start: "The Maya mathematical system, using a base-20 (vigesimal) system and including the concept of zero, was used for astronomical calculations, calendar computations, and",
          "correct": "administrative record-keeping.",
            "wrong": ["simple counting only.", "no practical application.", "non-functional symbolism."] },
          { start: "The decipherment of Maya hieroglyphic writing in the 20th century revealed that Maya texts contained historical information, dynastic records, and",
          "correct": "accounts of real events.",
            "wrong": ["purely religious texts.", "no historical value.", "only mythology."] },
          { 
            start: "The decipherment of Maya writing was largely achieved by Yuri Knorozov in the 1950s who proved that the script was", 
            "correct": "partly phonetic, contrary to what most scholars believed.", 
            "wrong": ["purely pictographic.", "already understood by scholars.", "based on an alphabet like Greek."] 
          }
        ]
      },
      {
        name: "Maya Architecture & Urban Planning",
        emoji: "🏛️",
        quotes: [
          { 
            start: "The construction of monumental buildings at Maya cities—pyramids, palaces, temples—served to demonstrate that rulers possessed control over vast labor forces and the ability to organize and",
            correct: "execute complex projects.",
            wrong: ["direct resources.", "mobilize workers.", "complete construction."] 
          },
          { 
            start: "The arrangement of buildings around plazas at Maya cities served multiple purposes: religious ceremonies, public gatherings, markets, and the display of",
            correct: "royal power.",
            wrong: ["state authority.", "political control.", "divine favor."] 
          },
          { 
            start: "The sophisticated water management systems at Maya cities—reservoirs, canals, and drainage—show that builders understood the importance of controlling water in a tropical environment where rainfall was seasonal and",
            correct: "unpredictable.",
            wrong: ["variable.", "inconsistent.", "erratic."] 
          },
          { 
            start: "The use of corbelled (false) arches in Maya architecture, rather than true arches with keystones, reflects that Maya architects developed an engineering solution appropriate to their materials and",
            correct: "technology.",
            wrong: ["resources.", "available methods.", "building techniques."] 
          },
          { 
            start: "The decorative arts—sculpture, painting, stucco work—that adorned Maya buildings served to glorify rulers and demonstrate the sophistication of",
            correct: "Maya culture.",
            wrong: ["royal courts.", "artistic traditions.", "elite society."] 
          },
          { 
            start: "The location of major Maya cities in the rainforest, often at considerable distances from each other, required that rulers establish trade networks and establish relationships with other cities to",
            correct: "ensure survival.",
            wrong: ["maintain prosperity.", "expand influence.", "build alliances."] 
          }
        ]
      },
      {
        name: "Maya Agriculture & Environmental Knowledge",
        emoji: "🌾",
        quotes: [
          { start: "The Maya development of agriculture, including the domestication of maize, beans, and squash, required understanding that these three crops together provided balanced nutrition and that",
          "correct": "they could be grown together in the same field.",
            "wrong": ["they must be grown separately.", "they could only grow in different seasons.", "they required constant rotation."] },
          { start: "The construction of terraces, raised fields, and reservoirs in the Maya landscape shows that farmers understood how to adapt agriculture to tropical soil conditions and",
          "correct": "maximize yields in a challenging environment.",
            "wrong": ["avoid agricultural work.", "depend only on wild food sources.", "ignore environmental constraints."] },
          { start: "The population of major Maya cities required agricultural surplus because the urban population needed to be fed by",
          "correct": "the farmers of surrounding territories.",
            "wrong": ["hunting and gathering alone.", "imported food.", "no real agriculture."] },
          { start: "The vulnerability of Maya civilization to drought shows that despite sophisticated agricultural knowledge, the civilization remained dependent on rainfall and was vulnerable to environmental stress when",
          "correct": "water supplies were disrupted.",
            "wrong": ["rainfall increased steadily.", "irrigation systems expanded.", "water supplies were stable."] },
          { 
            start: "The Maya practice of milpa agriculture — clearing, planting, and rotating fields — shows that farmers understood that land needs periods of rest to maintain", 
            "correct": "fertility over the long term.", 
            "wrong": ["constant productivity.", "year-round cultivation.", 
            "maximum short-term yields."] 
          }
        ]
      },
      {
        name: "Maya Religion & Cosmology",
        emoji: "🕯️",
        quotes: [
          { start: "The Maya cosmology, with its understanding of multiple creations and destructions of the world, provided a framework for understanding that the cosmos operated in cycles and that human ritual action could",
          "correct": "help sustain the current world.",
            "wrong": ["restore cosmic balance.", "influence divine order.", "prevent world ending."] },
          { start: "The concept of k'inich ('sun-faced'), applied to both the sun god and to rulers, served to link divine and royal power because it established the king as",
          "correct": "a solar figure who embodied divine authority.",
            "wrong": ["a ceremonial representative of the sun.", "no real meaning.", "a symbolic link to celestial power."] },
          { start: "The Maya religious emphasis on blood and water as life forces led to ritual practices including bloodletting ceremonies and",
          "correct": "the ritual use of water in ceremonies.",
            "wrong": ["purely violent.", "seasonal offerings.", "ancestral rites."] },
          { start: "The role of royal lineages in Maya cosmology meant that rulers were understood as embodying continuity with divine ancestors and as",
          "correct": "essential to maintaining the order of the cosmos.",
            "wrong": ["symbols of unity.", "sources of authority.", "heirs to power."] },
          { start: "The Maya ball game (pitz), depicted in art and described in texts, held religious significance because it likely represented a symbolic enactment of cosmic forces and the struggle between creation and",
          "correct": "destruction.",
            "wrong": ["seasonal cycles.", "royal authority.", "social hierarchy."] },
          { start: "The relationship between Maya rulers and the divine realm was understood as reciprocal—the ruler maintained the cosmos through ritual, and the gods ensured that the crops grew, the rains came, and",
          "correct": "the kingdom prospered.",
            "wrong": ["order was preserved.", "rituals continued.", "balance endured."] }
        ]
      },
      {
        name: "Maya Warfare & Captive Taking",
        emoji: "⚔️",
        quotes: [
          { 
            start: "Maya warfare, depicted in art and described in inscriptions, served purposes beyond territorial conquest: capturing enemies to be sacrificed, taking tribute, and establishing the military dominance of the victor and",
            correct: "the prestige of the king.",
            wrong: ["royal authority.", "divine favor.", "state power."] 
          },
          { 
            start: "The practice of taking captives and holding them for sacrifice shows that Maya rulers understood warfare as having religious significance because the sacrifice of captives was believed to sustain the cosmos and",
            correct: "ensure its continuation.",
            wrong: ["maintain balance.", "preserve order.", "sustain life."] 
          },
          { 
            start: "The concentration of captive-taking warfare in the Late Classic period, as reflected in inscriptions, suggests that the increasing need for captives for sacrifice may have reflected rulers' need to appease",
            correct: "the gods.",
            wrong: ["divine powers.", "celestial forces.", "spiritual entities."] 
          },
          { 
            start: "The alliance systems and vassal relationships described in Maya inscriptions show that warfare was sometimes about establishing dominance without conquest, requiring that defeated rulers accept subordinate status while retaining their thrones and",
            correct: "territories.",
            wrong: ["military forces.", "religious authority.", "divine legitimacy."] 
          }
        ]
      },
      {
        name: "Maya Trade & Economic Systems",
        emoji: "💰",
        quotes: [
          { 
            start: "The evidence of trade goods at Maya sites—obsidian from highlands, jade from specific sources, shells from coasts—demonstrates that Maya cities participated in extensive trade networks exchanging valued",
            correct: "materials across the region.",
            wrong: ["only local stone tools.", "purely ceremonial objects.", "food products only."] 
          },
          { 
            start: "The control of trade routes and valuable resources by powerful Maya cities gave rulers significant economic and political power because they could accumulate wealth and establish relationships with",
            correct: "distant cities.",
            wrong: ["other rulers.", "rival kingdoms.", "neighboring powers."] 
          },
          { 
            start: "The development of merchant classes and trading guilds in Maya society suggests that successful merchants held important",
            correct: "social positions.",
            wrong: ["political roles.", "economic status.", "community standing."] 
          },
          { 
            start: "The use of cacao as a medium of exchange in Maya society shows that this valuable product served both practical and economic purposes: it was consumed by elites and",
            correct: "traded across long distances.",
            wrong: ["valued by nobility.", "exchanged widely.", "used commercially."] 
          }
        ]
      },
      {
        name: "Maya Society & Social Hierarchy",
        emoji: "🏛️",
        quotes: [
          { 
            start: "Maya society was organized into distinct classes: the royal family and nobility, priests and scribes, merchants and craftspeople, farmers, and enslaved persons because this hierarchy allowed for",
            correct: "specialization.",
            wrong: ["social order.", "social control.", "political order."] 
          },
          { 
            start: "The role of women in Maya society included serving as regents, advising rulers, managing households, and potentially conducting religious ceremonies because women of elite status held",
            correct: "real power.",
            wrong: ["social influence.", "religious authority.", "administrative roles."] 
          },
          { 
            start: "The status of captured enemies as slaves showed that Maya society had a system where defeated individuals could be incorporated into society at the lowest level through",
            correct: "enslavement.",
            wrong: ["servitude.", "bondage.", "captivity."] 
          },
          { 
            start: "The concentration of authority and resources in the royal family meant that a ruler's children and relatives occupied positions of power, creating networks of kinship and obligation that could be mobilized for",
            correct: "military purposes.",
            wrong: ["political gain.", "territorial expansion.", "warfare."] 
          }
        ]
      },
      {
        name: "Maya Art & Aesthetics",
        emoji: "🎨",
        quotes: [
          { 
            start: "The distinctive Maya artistic style—featuring naturalistic human figures, complex compositions, and detailed iconographic elements—developed because artists worked",
            correct: "within royal courts.",
            wrong: ["for temples.", "in workshops.", "under patronage."] 
          },
          { 
            start: "The subjects of Maya art—including rulers, gods, battles, and mythological scenes—served to communicate religious narratives, and",
            correct: "the divine authority of rulers.",
            wrong: ["cultural values.", "historical events.", "social beliefs."] 
          },
          { 
            start: "The precision and sophistication of Maya sculpture, painting, and ceramic production indicate that Maya artists possessed",
            correct: "technical mastery.",
            wrong: ["artistic genius.", "creative skill.", "professional training."] 
          },
          { 
            start: "The placement of artworks in temples, palaces, and tombs served to communicate the wealth, power, and divine connections of rulers and provided",
            correct: "lasting records of royal achievements.",
            wrong: ["evidence of status.", "displays of power.", "tributes to gods."] 
          }
        ]
      },
      {
        name: "Maya Decline & Historical Significance",
        emoji: "📜",
        quotes: [
          { 
            start: "The decline and abandonment of major Classic period Maya cities came from multiple factors: environmental stress (drought), warfare between cities, the breakdown of trade networks, and",
            correct: "the fragmentation of political authority.",
            wrong: ["social inequality.", "religious conflict.", "economic decline."] 
          },
          { 
            start: "The collapse of the Classic period Maya civilization by around 900 CE demonstrates that even sophisticated societies with advanced mathematics, astronomy, and writing systems are",
            correct: "vulnerable to environmental stress.",
            wrong: ["susceptible to collapse.", "affected by drought.", "dependent on resources."] 
          },
          { 
            start: "Maya civilization survived the Classic collapse because its culture continued in the",
            correct: "Post-Classic period.",
            wrong: ["later era.", "subsequent age.", "following centuries."] 
          },
          { 
            start: "The legacy of the Maya civilization includes contributions to mathematics (zero, base-20 system), astronomy (accurate eclipse predictions), writing and",
            correct: "literature, art, architecture.",
            wrong: ["law.", "music.", "dance."] 
          },
          { 
            start: "The study of Maya civilization demonstrates that the Americas developed sophisticated civilizations with complex cities and written systems",
            correct: "independent of Old World influence.",
            wrong: ["without external help.", "without foreign contact.", "in isolation."] 
          },
          { 
            start: "The Terminal Classic drought, documented through lake sediment cores and speleothems, coincided directly with the abandonment of major cities, providing scientific evidence that climate change", 
            "correct": "was a primary driver of the Classic Maya collapse.", 
            "wrong": ["had no effect on Maya civilization.", "only affected agriculture slightly.", "was less important than warfare."] 
          }
        ]
      },
      {
        name: "Maya Medicine & Healing Knowledge",
        emoji: "💊",
        quotes: [
          { start: "The Maya development of medical knowledge, preserved in texts and inferred from archaeological evidence, included understanding of herbal remedies and",
          "correct": "surgical procedures.",
            "wrong": ["magic only.", "basic healing.", "no surgery."] },
          { start: "Maya medical practitioners served both practical and spiritual purposes because illness was understood as having both physical and spiritual causes requiring",
          "correct": "treatment addressing both dimensions.",
            "wrong": ["single treatment.", "no real treatment.", "no real impact."] },
          { start: "The discovery of trepanation (skull surgery) evidence among Maya skeletal remains indicates that Maya healers possessed",
          "correct": "surgical skill.",
            "wrong": ["no real skill.", "no real knowledge.", "no real impact."] }
        ]
      },
      {
        name: "Maya Mathematical & Scientific Achievement",
        emoji: "🧮",
        quotes: [
          { start: "The Maya development of the concept of zero, independent of Old World mathematics, was a breakthrough that allowed for more efficient mathematical notation and",
          "correct": "the ability to perform complex calculations.",
            "wrong": ["had only theoretical significance.", "provided no practical use.", "was not a genuine innovation."] },
          { start: "The accuracy of Maya astronomical predictions, including the determination that the tropical year was approximately",
          "correct": "365.2420 days (remarkably close to the modern value).",
            "wrong": ["180 days.", "360 days.", "300 days."] },
          { start: "The development of the Long Count calendar, which tracked days from a mythological base date, served practical purposes including the creation of a system",
          "correct": "for recording historical events.",
            "wrong": ["which was purely mythological.", "with no practical use.", "with no scientific value."] }
        ]
      }
    ]
  },
  {
    id: "axum",
    name: "Axumite Empire",
    emoji: "✝️",
    color: 0x6d4c41,
    colorHex: "#6d4c41",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Ezana of Axum (Expansion & Conversion to Christianity)",
        emoji: "👑",
        quotes: [
          { start: "I conquered the kingdom of Kush and established Axumite dominance in the region by combining military campaigns with the establishment of administrative control and the winning of", "correct": "local populations' acceptance.", "wrong": ["forced submission.", "constant fear.", "total destruction."] },
          { start: "My conversion to Christianity and the establishment of Christianity as the official religion of Axum served to align the kingdom with the broader", "correct": "Christian world.", "wrong": ["Roman imperial world.", "Persian sphere.", "Buddhist world."] },
          { start: "My military campaigns against the Blemmyes and other rivals showed that Axumite power depended on maintaining military strength while establishing diplomatic relationships with", "correct": "neighboring powers.", "wrong": ["enemies.", "friends.", "force alone."] },
          { start: "The consolidation of Axumite power under my reign required understanding that the kingdom's prosperity depended on the ability to control access to the interior of", "correct": "Africa.", "wrong": ["America.", "Europe.", "Asia."] },
          { start: "The establishment of Axum as a major Christian power alongside Rome and Byzantium demonstrated that a kingdom's religious status could equal that of the Mediterranean powers despite being in", "correct": " Africa.", "wrong": ["Europe.", "Asia.", "America."] }
        ]
      },
      {
        name: "Axumite Kings & Political Authority",
        emoji: "👑",
        quotes: [
          { 
            start: "The Axumite king's authority came from demonstrating that he could protect the kingdom from external threats, control trade, and",
            correct: "ensure prosperity.",
            wrong: ["maintain order.", "build monuments.", "advance religion."] 
          },
          { 
            start: "Axumite rulers maintained power by establishing relationships with the Byzantine Empire because this provided diplomatic recognition and",
            correct: "access to Mediterranean trade networks.",
            wrong: ["military support.", "financial aid.", "technological knowledge."] 
          },
          { 
            start: "The use of Greek language on Axumite coinage and in official inscriptions served to demonstrate that Axum",
            correct: "was integrated into the Hellenistic world.",
            wrong: ["was integrated into the Roman world.", "respected foreign traditions.", "had educated rulers."] 
          },
          { 
            start: "An Axumite king's legitimacy depended on being recognized as both a political ruler and a guardian of the Christian faith because it united political and",
            correct: "religious authority.",
            wrong: ["spiritual power.", "moral influence.", "cultural authority."] 
          },
          { 
            start: "The expansion of Axumite territory under successful kings required maintaining the loyalty of subordinate rulers and military commanders by",
            correct: "distributing wealth.",
            wrong: ["granting titles.", "sharing power.", "offering positions."] 
          }
        ]
      },
      {
        name: "Axumite Trade & Economic Power",
        emoji: "💰",
        quotes: [
          { 
            start: "Axumite wealth and power came primarily from control of trade routes connecting the Red Sea, the Mediterranean, and Indian Ocean networks because this allowed the kingdom to",
            "correct": "establish relationships with distant powers.",
            "wrong": ["tax merchants along routes.", "control production of gold.", "exclude rival traders."]
          },
          { 
            start: "The development of Axumite ports like Adulis as major trade centers provided the kingdom with access to goods, making Axum a crucial node in",
            correct: "international commerce.",
            wrong: ["global networks.", "maritime trade.", "economic systems."] 
          },
          { 
            start: "Axumite control of gold trade, ivory, and other luxury goods from Africa's interior gave the kingdom significant power because these goods",
            correct: "were highly valued.",
            wrong: ["brought wealth.", "generated income.", "created demand."] 
          },
          { 
            start: "The minting of high-quality Axumite coins in gold, silver, and copper served",
            correct: "finance military campaigns.",
            wrong: ["build monuments only.", "pay tribute to Rome.", "fund religious missions only."]
          },
          { 
            start: "Axumite merchants and traders operating under the protection of the crown could accumulate wealth and establish trade networks because the king provided safe passage and access to",
            correct: "major trade routes.",
            wrong: ["commercial markets.", "valuable goods.", "profitable opportunities."] 
          },
          { 
            start: "The wealth from trade allowed Axumite rulers to",
            correct: "finance military campaigns.",
            wrong: ["support expansion.", "fund conquests.", "sustain armies."] 
          }
        ]
      },
      {
        name: "Axumite Christianity & Religious Authority",
        emoji: "✝️",
        quotes: [
          { 
            start: "The conversion of Axum to Christianity under Ezana transformed the kingdom's identity because it positioned Axum as part of the Christian world and aligned it with",
            correct: "the Alexandrian (Coptic) Christian tradition.",
            wrong: ["the Roman Catholic church.", "the Byzantine Orthodox church.", "Western Christianity."]
          },
          { 
            start: "The establishment of a Christian church hierarchy in Axum, with bishops and clergy, served to",
            correct: "institutionalize Christianity.",
            wrong: ["organize believers.", "spread faith.", "strengthen authority."] 
          },
          { 
            start: "The use of Christian symbols—the cross on coins, on monuments, and in official insignia—demonstrated that rulers believed that religious identity was",
            correct: "central to state legitimacy.",
            wrong: ["essential to power.", "key to authority.", "vital to rule."] 
          },
          { 
            start: "The relationship between Axumite rulers and the religious establishment required that kings be seen as pious Christians whose decisions aligned with",
            correct: "Christian principles.",
            wrong: ["church teachings.", "divine will.", "religious law."] 
          },
          { 
            start: "The spread of Christianity in Axum and the regions it controlled created a shared faith identity because Christianity provided a framework for",
            correct: "understanding the world.",
            wrong: ["interpreting events.", "explaining nature.", "making sense."] 
          },
          { 
            start: "The maintenance of Christian orthodoxy in Axum showed that rulers understood that controlling religious doctrine was essential to",
            correct: "maintaining political unity.",
            wrong: ["ensuring loyalty.", "preserving order.", "preventing conflict."] 
          },
          { start: "The Nine Saints (Tsadqan) who arrived from the Byzantine world in the 5th century established monasteries and translated the Bible into Ge'ez, ensuring that", "correct": "Christianity became rooted in local language and culture.", "wrong": ["Greek remained the language of worship.", "Christianity stayed an elite religion.", "monasticism was rejected."]
          }
        ]
      },
      {
        name: "Axumite Military & Defense",
        emoji: "⚔️",
        quotes: [
          { 
            start: "The Axumite military maintained power for centuries but eventually lost Arabian territories to Persian forces in 575 CE, demonstrating that even strong kingdoms",
            correct: "face limits to their power.",
            wrong: ["superior weapons.", "strategic advantages.", "experienced commanders."] 
          },
          { 
            start: "The use of the Red Sea fleet by Axumite rulers served to protect trade routes because control of the sea allowed Axum to project power into the Mediterranean and",
            correct: "Arabian Sea regions.",
            wrong: ["Indian Ocean territories.", "coastal areas.", "distant waters."] 
          },
          { 
            start: "Axumite military campaigns against rivals in Arabia, Persia, and Africa demonstrated that Axum",
            correct: "was a regional power.",
            wrong: ["controlled territories.", "dominated militarily.", "had influence."] 
          },
          { 
            start: "The maintenance of Axumite military strength required continuous recruitment and",
            correct: "training of soldiers.",
            wrong: ["equipping forces.", "organizing armies.", "strengthening defenses."] 
          }
        ]
      },
      {
        name: "Axumite Architecture & Monuments",
        emoji: "🏛️",
        quotes: [
          { 
            start: "The construction of monumental stelae (tall stone markers) at Axum served to demonstrate that rulers possessed the ability to",
            correct: "command resources.",
            wrong: ["control territory.", "display power.", "impress visitors."] 
          },
          { 
            start: "The development of Axumite architectural style reflected that Axumite architects and builders synthesized foreign influences with",
            correct: "local traditions.",
            wrong: ["Christian values.", "imperial styles.", "coastal designs."] 
          },
          { 
            start: "The construction of churches and religious buildings during the Christian period served to demonstrate that the king was a pious ruler supporting",
            correct: "religion.",
            wrong: ["chaos.", "war.", "Islam."] 
          },
          { 
            start: "The labor and resources required to construct Axumite monuments came from the accumulated wealth of the kingdom, the ability to command labor, and the organization of",
            correct: "building projects.",
            wrong: ["construction efforts.", "workforce management.", "architectural planning."] 
          },
          { 
            start: "The preservation of Axumite monuments shows that builders understood that stone structures, when properly constructed could endure for",
            correct: "centuries.",
            wrong: ["decades only.", "a single ruler's reign.", "a few generations at most."] 
          },
          { 
            start: "The Great Stele of Axum, standing over 33 meters, was the tallest single stone structure in the ancient world, demonstrating that Axumite engineering", 
            "correct": "rivaled any contemporary civilization.", 
            "wrong": ["used foreign architects.", "copied Egyptian techniques.", "required supernatural assistance."] 
          }
        ]
      },
      {
        name: "Axumite Administration & Governance",
        emoji: "⚖️",
        quotes: [
          { 
            start: "The Axumite system of governance required establishing officials in major cities and regions because the king could not personally oversee",
            correct: "all trade activities.",
            wrong: ["every settlement.", "daily operations.", "local matters."] 
          },
          { 
            start: "Axumite administrators in port cities like Adulis were responsible for overseeing trade, collecting taxes, and maintaining order because these cities were",
            correct: "critical to the kingdom's security.",
            wrong: ["centers of power.", "sources of wealth.", "economic hubs."] 
          },
          { 
            start: "The Axumite approach to administering diverse populations required rulers to understand that respect for local traditions, allowing some local autonomy would",
            correct: "win the loyalty of subject peoples.",
            wrong: ["ensure stability.", "prevent rebellion.", "maintain control."] 
          },
          { 
            start: "Axumite legal systems likely incorporated both local customary law and Christian principles because rulers understood that justice systems that combined familiar traditions with new Christian values would",
            correct: "be more acceptable and effective.",
            wrong: ["strengthen authority.", "enforce compliance.", "promote harmony."] 
          },
          { 
            start: "The stability of Axumite rule for centuries came from establishing systems where rulers could maintain control through",
            correct: "appointed officials.",
            wrong: ["military force.", "legal codes.", "religious authority."] 
          }
        ]
      },
      {
        name: "Axumite Relations with Foreign Powers",
        emoji: "🌍",
        quotes: [
          { 
            start: "The Axumite relationship with the Byzantine Empire was mutually beneficial because trade, military alliances, and shared Christian faith created economic and",
            correct: "political ties between the two powers.",
            wrong: ["cultural exchanges.", "religious bonds.", "strategic partnerships."] 
          },
          { 
            start: "Axumite diplomatic relationships with Persia, Arabia, and other powers showed that rulers understood that using diplomacy alongside military power were",
            correct: "essential to Axumite survival.",
            wrong: ["keys to expansion.", "paths to dominance.", "routes to prosperity."] 
          },
          { 
            start: "The Axumite intervention in Arabia to support Christian populations and prevent Persian dominance demonstrated that Axumite rulers saw themselves as",
            correct: "guardians of Christianity.",
            wrong: ["regional protectors.", "imperial authorities.", "military defenders."] 
          },
          { 
            start: "The decline of Axumite power in the Red Sea region, particularly after the rise of Islamic powers, showed that even powerful kingdoms",
            correct: "face challenges.",
            wrong: ["face decline.", "lose influence.", "encounter obstacles."] 
          }
        ]
      },
      {
        name: "Axumite Culture & Intellectual Life",
        emoji: "📚",
        quotes: [
          { 
            start: "The use of the Ge'ez language in Axumite inscriptions, church services, and literature served to establish a shared cultural and",
            correct: "religious identity across the kingdom.",
            wrong: ["linguistic unity.", "political authority.", "social hierarchy."] 
          },
          { 
            start: "The development of Axumite written culture, particularly after the conversion to Christianity, created a tradition of literature that would survive and influence Ethiopian culture for",
            correct: "centuries.",
            wrong: ["decades only.", "a single ruler's reign.", "a few generations at most."] 
          },
          { 
            start: "Axumite scholars and priests engaged with Christian theology and biblical interpretation because the integration of Christian learning into Axumite intellectual life enhanced",
            correct: "the kingdom's prestige.",
            wrong: ["spiritual authority.", "religious power.", "clerical influence."] 
          },
          { 
            start: "The establishment of scriptoriums and centers of learning in Axumite monasteries served to preserve",
            correct: "Christian texts.",
            wrong: ["knowledge.", "learning.", "wisdom."] 
          },
          { 
            start: "Axumite intellectual life benefited from the kingdom's position on trade routes because scholars had access to knowledge from the Mediterranean, Persia, India, and",
            correct: "the broader Christian world.",
            wrong: ["distant lands.", "foreign regions.", "eastern markets."] 
          }
        ]
      },
      {
        name: "Axumite Decline & Historical Significance",
        emoji: "📜",
        quotes: [
          { 
            start: "The decline of Axumite power came from multiple factors: the rise of Islamic powers controlling the Red Sea, the loss of trade routes, Persian expansion, and the inability of later rulers to",
            correct: "maintain the military strength of earlier periods.",
            wrong: ["adapt to change.", "preserve unity.", "govern effectively."] 
          },
          { 
            start: "The rise of Islam and the establishment of Islamic control over the Red Sea and Arabian coast fundamentally altered Axumite power because Axumite prosperity depended on",
            correct: "controlling these trade routes.",
            wrong: ["Islamic cooperation.", "religious dominance.", "military superiority."] 
          },
          { 
            start: "The retreat of Axumite influence from Arabia and the loss of ports showed that even a sophisticated, militarily powerful kingdom with strong religious foundations",
            correct: "could face decline.",
            wrong: ["faced competition.", "lost direction.", "needed reform."] 
          },
          { 
            start: "The legacy of Axum included establishing that an African kingdom could become",
            correct: "a major world power.",
            wrong: ["highly civilized.", "culturally advanced.", "economically strong."] 
          },
          { 
            start: "Axum shows that ancient African civilizations achieved levels comparable to",
            correct: "contemporary powers elsewhere.",
            wrong: ["Mediterranean empires.", "Asian kingdoms.", "Middle Eastern states."] 
          },
          { 
            start: "The Prophet Muhammad instructed early Muslims not to harm Axum because the Axumite king had sheltered Muslim refugees (the First Hijra, 615 CE), creating an unusual period of peaceful coexistence between Axum and", 
            "correct": "early Islam.", 
            "wrong": ["the Byzantine Empire.", "European Crusaders.", "the Umayyad Caliphate."] 
          }
        ]
      },
      {
        name: "Axumite Society & Social Structure",
        emoji: "🏛️",
        quotes: [
          { 
            start: "Axumite society was organized hierarchically with the king at the top, followed by nobles, clergy, merchants, craftspeople, and farmers because this structure allowed for",
            correct: "specialization.",
            wrong: ["social control.", "resource distribution.", "efficient governance."] 
          },
          { 
            start: "The role of the church and clergy in Axumite society increased after Christianization because priests and bishops became",
            correct: "advisors to rulers.",
            wrong: ["collectors of taxes.", "military commanders.", "landowners."] 
          },
          { 
            start: "Women in Axumite society, particularly those of royal or noble status, held important roles in managing estates and",
            correct: "maintaining family relationships.",
            wrong: ["conducting trade.", "influencing politics.", "directing ceremonies."] 
          },
          { 
            start: "The relationship between Axumite rulers and merchants was mutually beneficial because merchants depended on royal protection while rulers depended on the taxes, goods, and",
            correct: "connections to distant markets that merchants provided.",
            wrong: ["information networks.", "military support.", "commercial expertise."] 
          }
        ]
      },
      {
        name: "Axumite Coinage & Economic Systems",
        emoji: "💰",
        quotes: [
          { 
            start: "The production of Axumite coins in gold, silver, and copper served to facilitate long-distance trade, establish the kingdom's prestige as a major economic power, and",
            correct: "control the money supply.",
            wrong: ["standardize weights.", "prevent counterfeiting.", "increase revenue."] 
          },
          { 
            start: "The design of Axumite coins, featuring the king's portrait and Christian symbols, served to reinforce that the king was the ultimate authority and a guardian of the",
            correct: "Christian faith.",
            wrong: ["kingdom's wealth.", "state's values.", "imperial legacy."] 
          },
          { 
            start: "The wide circulation of Axumite coins across trade networks demonstrated that the kingdom",
            correct: "was trusted by merchants.",
            wrong: ["controlled commerce.", "dominated regions.", "expanded influence."] 
          },
          { 
            start: "The ability to mint coins gave Axumite rulers power because they could control the money supply, collect seigniorage (profit from minting), and influence trade through",
            correct: "monetary policy.",
            wrong: ["currency exchange.", "price controls.", "trade agreements."] 
          }
        ]
      }
    ]
  },
  {
    id: "great_zimbabwe",
    name: "Great Zimbabwe",
    emoji: "⛰️",
    color: 0x795548,
    colorHex: "#795548",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Kings & Rulers - Archaeological & Documentary Evidence",
        emoji: "👑",
        quotes: [
          { 
            start: "The construction of Great Zimbabwe's distinctive stone structures without mortar demonstrated that builders possessed", 
            correct: "advanced knowledge of stone fitting.", 
            wrong: ["superior materials.", "exceptional strength.", "innovative tools."] 
          },
          { 
            start: "The Great Enclosure, the largest stone structure at Great Zimbabwe, likely served as a royal residence and ceremonial center because it", 
            correct: "served as a focus for ritual and governance.", 
            wrong: ["provided defensive shelter.", "displayed architectural skill.", "symbolized royal power."] 
          },
          { 
            start: "The arrangement of stone structures at Great Zimbabwe in a pattern of sacred and secular spaces suggests that builders understood the integration of religious, ceremonial, and", 
            correct: "administrative functions within a single complex.", 
            wrong: ["residential areas.", "defensive zones.", "public spaces."] 
          },
          { 
            start: "The labor required to build Great Zimbabwe's structures came from a combination of voluntary labor organized by the ruler, tribute labor owed by subject peoples, and", 
            correct: "possibly enslaved workers.", 
            wrong: ["hired craftsmen.", "foreign merchants.", "allied kingdoms."] 
          },
          { 
            start: "The maintenance of Great Zimbabwe's stone structures required systems to ensure that", 
            correct: "repairs were made.", 
            wrong: ["deterioration stopped.", "standards remained.", "quality persisted."] 
          },
          { 
            start: "The sophistication of Great Zimbabwe's architecture indicates that architects and builders possessed generations of accumulated knowledge about stone working, geometry, and", 
            correct: "structural design.", 
            wrong: ["artistic expression.", "religious symbolism.", "defensive planning."] 
          },
          { 
            start: "The location of Great Zimbabwe on a plateau near water sources and in a region rich in gold and other resources demonstrates that rulers understood the importance of", 
            correct: "strategic location.", 
            wrong: ["environmental control.", "resource access.", "natural protection."] 
          },
          { start: "The Zimbabwe birds — soapstone sculptures found only at Great Zimbabwe — likely represented royal ancestors or divine authority, serving as symbols that", "correct": "legitimized the ruler's power through spiritual connection.", "wrong": ["decorated the buildings.", "marked trade boundaries.", "recorded historical events."] },
          { start: "The title 'Mambo' (king) at Great Zimbabwe carried both political and ritual authority because the ruler was believed to control rain and", "correct": "agricultural fertility through spiritual power.", "wrong": ["military forces alone.", "trade routes only.", "stone construction."] },
          { 
            start: "Portuguese records from the 16th century describing Great Zimbabwe as 'Symbaoe' provide external documentary evidence that complements archaeological findings, though by then the city was", "correct": "already largely abandoned.", 
            "wrong": ["still at its peak.", "recently constructed.", "under Swahili control."] 
          }
        ]
      },
      {
        name: "Great Zimbabwe Architecture & Stone Structures",
        emoji: "🏗️",
        quotes: [
          { 
            start: "The construction of Great Zimbabwe's distinctive stone structures without mortar demonstrated that builders possessed", 
            correct: "advanced knowledge of stone fitting.", 
            wrong: ["superior materials.", "exceptional strength.", "innovative tools."] 
          },
          { 
            start: "The Great Enclosure, the largest stone structure at Great Zimbabwe, likely served as a royal residence and ceremonial center because it", 
            correct: "served as a focus for ritual and governance.", 
            wrong: ["provided defensive shelter.", "displayed architectural skill.", "symbolized royal power."] 
          },
          { 
            start: "The arrangement of stone structures at Great Zimbabwe in a pattern of sacred and secular spaces suggests that builders understood the integration of religious, ceremonial, and", 
            correct: "administrative functions within a single complex.", 
            wrong: ["residential areas.", "defensive zones.", "public spaces."] 
          },
          { 
            start: "The labor required to build Great Zimbabwe's structures came from a combination of voluntary labor organized by the ruler, tribute labor owed by subject peoples, and", 
            correct: "possibly enslaved workers.", 
            wrong: ["hired craftsmen.", "foreign merchants.", "allied kingdoms."] 
          },
          { 
            start: "The maintenance of Great Zimbabwe's stone structures required systems to ensure that", 
            correct: "repairs were made.", 
            wrong: ["deterioration stopped.", "standards remained.", "quality persisted."] 
          },
          { 
            start: "The sophistication of Great Zimbabwe's architecture indicates that architects and builders possessed generations of accumulated knowledge about stone working, geometry, and", 
            correct: "structural design.", 
            wrong: ["artistic expression.", "religious symbolism.", "defensive planning."] 
          },
          { 
            start: "The location of Great Zimbabwe on a plateau near water sources and in a region rich in gold and other resources demonstrates that rulers understood the importance of", 
            correct: "strategic location.", 
            wrong: ["environmental control.", "resource access.", "natural protection."] 
          }
        ]
      },
      {
        name: "Great Zimbabwe Trade & Economic Power",
        emoji: "💰",
        quotes: [
          { 
            start: "The control of gold production and trade by Great Zimbabwe rulers allowed them to accumulate wealth that could be used for", 
            correct: "redistribution to followers.", 
            wrong: ["military expansion.", "personal luxury.", "religious ceremonies."] 
          },
          { start: "Great Zimbabwe's role as intermediary in the gold trade gave rulers power because controlling trade meant deciding who could access gold and", "correct": "at what price.", "wrong": ["building more stone structures.", "expanding military forces.", "replacing coastal merchants."] },
          { 
            start: "The evidence of trade goods from Persia, Arabia, and the Indian Ocean region found at Great Zimbabwe shows that the city was connected to", 
            correct: "long-distance trade networks.", 
            wrong: ["wealthy merchants.", "coastal settlements.", "maritime routes."] 
          },
          { 
            start: "Great Zimbabwe merchants and traders who conducted business under the protection and patronage of the ruler", 
            correct: "could accumulate wealth.", 
            wrong: ["paid heavy taxes.", "reported profits.", "shared earnings."] 
          },
          { 
            start: "The taxation of trade passing through Great Zimbabwe served to maintain the military and", 
            correct: "administrative apparatus.", 
            wrong: ["religious institutions.", "building projects.", "trade routes."] 
          },
          { 
            start: "The wealth from trade allowed Great Zimbabwe to import resources like tin, copper, and exotic goods that would have been", 
            correct: "unavailable locally.", 
            wrong: ["too expensive.", "difficult to produce.", "rarely needed."] 
          }
        ]
      },
      {
        name: "Great Zimbabwe Craftsmanship & Artistry",
        emoji: "🎨",
        quotes: [
          { 
            start: "The discovery of soapstone bird sculptures at Great Zimbabwe suggests that craftspeople in the city possessed specialized skills in", 
            correct: "stone carving.", 
            wrong: ["artistic design.", "religious expression.", "symbolic representation."] 
          },
          { 
            start: "The production of high-quality pottery at Great Zimbabwe indicates that craftspeople had developed techniques for firing, shaping and", 
            correct: "decorating vessels.", 
            wrong: ["glazing surfaces.", "strengthening clay.", "mixing pigments."] 
          },
          { 
            start: "Craftspeople working under the patronage of Great Zimbabwe rulers could focus on their craft because the rulers provided resources, protection, and", 
            correct: "markets for their goods.", 
            wrong: ["training programs.", "raw materials.", "artistic freedom."] 
          },
          { 
            start: "The quality and consistency of artifacts from Great Zimbabwe demonstrates that", 
            correct: "knowledge of craft techniques was preserved.", 
            wrong: ["standards were enforced.", "apprenticeships existed.", "trade was organized."] 
          },
          { 
            start: "Great Zimbabwe craftspeople produced goods that could be traded or given as gifts to allies because these items represented the prestige and", 
            correct: "sophistication of Great Zimbabwe.", 
            wrong: ["wealth of rulers.", "skill of artisans.", "power of the city."] 
          }
        ]
      },
      {
        name: "Great Zimbabwe Society & Social Organization",
        emoji: "🏛️",
        quotes: [
          { 
            start: "Great Zimbabwe society was organized hierarchically with the ruler at the top, followed by nobles, merchants, craftspeople, and commoners because this structure allowed for the accumulation and redistribution of", 
            correct: "wealth.", 
            wrong: ["power.", "resources.", "authority."] 
          },
          { 
            start: "The residences of elites in the Great Enclosure and other elevated areas suggest that the city had", 
            correct: "distinct residential zones.", 
            wrong: ["social inequality.", "architectural diversity.", "defensive positions."] 
          },
          { 
            start: "The power of Great Zimbabwe's ruler depended on maintaining the loyalty of subordinate chiefs and nobles by ensuring that they", 
            correct: "benefited from the ruler's power.", 
            wrong: ["respected his authority.", "followed his laws.", "shared his vision."] 
          },
          { 
            start: "Women in Great Zimbabwe society, particularly those of royal or noble status, held important roles in managing properties and participating in ceremonial and", 
            correct: "social functions.", 
            wrong: ["political affairs.", "military duties.", "trade negotiations."] 
          },
          { 
            start: "The relationship between Great Zimbabwe and surrounding settlements shows that the city functioned as a regional center that controlled", 
            correct: "trade.", 
            wrong: ["agriculture.", "labor.", "territories."] 
          }
        ]
      },
      {
        name: "Great Zimbabwe Religion & Cosmology",
        emoji: "🕯️",
        quotes: [
          { 
            start: "The religious significance of Great Zimbabwe is suggested by architectural features and artifacts that indicate the city was a sacred center where religious ceremonies and cosmic beliefs were", 
            correct: "enacted and maintained.", 
            wrong: ["documented.", "recorded.", "studied."] 
          },
          { 
            start: "The incorporation of astronomical alignments in some structures suggests that Great Zimbabwe's builders understood the cosmological importance of", 
            correct: "celestial events.", 
            wrong: ["stone placement.", "building design.", "solar patterns."] 
          },
          { 
            start: "The veneration of ancestors in Great Zimbabwe culture likely meant that the living sought guidance from and honored the spirits of deceased rulers and ancestors through", 
            correct: "ritual and ceremony.", 
            wrong: ["oral tradition.", "written records.", "artistic expression."] 
          },
          { 
            start: "The religious authority of Great Zimbabwe's rulers was based on their claim to mediate between the human and", 
            correct: "spiritual worlds.", 
            wrong: ["control trade routes.", "command military forces.", "inherit divine status."] 
          },
          { start: "The Great Zimbabwe birds are now the national symbol of Zimbabwe, demonstrating that pre-colonial African heritage", "correct": "remains central to modern national identity.", "wrong": ["has been forgotten.", "is purely archaeological.", "belongs only to academics."] }
        ]
      },
      {
        name: "Great Zimbabwe Decline & Historical Significance",
        emoji: "📜",
        quotes: [
          { start: "The decline of Great Zimbabwe likely resulted from a combination of factors: environmental stress (possibly drought), the depletion of easily accessible gold resources, and the rise of the Mutapa kingdom to the north which", "correct": "diverted trade routes.", wrong: ["strengthened local trade networks.", "encouraged agricultural expansion.", "unified neighboring ethnic groups."] },
          { start: "The abandonment of Great Zimbabwe as a major center by the 15th century does not diminish its achievement; rather it demonstrates that even sophisticated urban centers are vulnerable to", "correct": "environmental change.", "wrong": ["human error.", "economic collapse.", "inevitable failure."] },
          { start: "The legacy of Great Zimbabwe included establishing that sophisticated urban settlements, stone architecture, and centralized trade control could develop in southern Africa independent of", "correct": "external influence.", "wrong": ["internal collapse.", "cultural stagnation.", "economic failure."] },
          { start: "The rediscovery and study of Great Zimbabwe in the modern era corrected the misconception that Africans lacked the capacity for sophisticated architecture, urban planning and", "correct": "trade organization.", "wrong": ["cultural decline.", "external dependence.", "historical absence."] },
          { start: "Great Zimbabwe shows that medieval African societies achieved levels of political organization, economic development comparable to", "correct": "contemporary civilizations elsewhere.", "wrong": ["isolated tribes.", "primitive states.", "foreign control."] }
        ]
      },
      {
        name: "Great Zimbabwe & Regional Trade Networks",
        emoji: "🌍",
        quotes: [
          { start: "Great Zimbabwe's connections to coastal Swahili cities allowed rulers to establish trade relationships with merchants from the Arab world, Persia, India, and eventually", "correct": "China and Southeast Asia.", "wrong": ["America.", "Scandinavia.", "Australia."] },
          { start: "The evidence of Indian Ocean trade goods at Great Zimbabwe shows that the city was part of a regional system where", "correct": "foreign products flowed in.", "wrong": ["trade moved in only one direction.", "goods were taken without exchange.", "no meaningful exchange took place."] },
          { start: "Great Zimbabwe served as a trade center because it was", "correct": "a safe and reliable place for trade.", "wrong": ["a market with no wider connections.", "purely local market.", "limited to local exchange."] },
          { start: "Great Zimbabwe’s relationship with Indian Ocean trade was beneficial because foreign merchants gained access to gold and other goods while Great Zimbabwe gained", "correct": "access to foreign products.", "wrong": ["no real advantages.", "no real benefit.", "one-sided trade."] }
        ]
      },
      {
        name: "Great Zimbabwe Governance & Administration",
        emoji: "⚖️",
        quotes: [
          { start: "The governance of Great Zimbabwe required establishing systems to ensure that tribute was collected from subject populations, trade was regulated and", "correct": "wealth could be redistributed.", "wrong": ["military force.", "social chaos.", "no system."] },
          { start: "Great Zimbabwe rulers maintained power by demonstrating that they could provide", "correct": "protection from external threats.", "wrong": ["no defense.", "internal chaos.", "unstable rule."] },
          { start: "The administrative system at Great Zimbabwe was necessary because the ruler could not personally", "correct": "oversee all activities.", "wrong": ["control everything.", "lack authority.", "ignore governance."] },
          { start: "Evidence of administration at Great Zimbabwe shows that successful empires require bureaucracies that can manage complex economic and", "correct": "social activities.", "wrong": ["social disorder.", "economic collapse.", "random activity."] }
        ]
      },
      {
        name: "Great Zimbabwe Labor & Construction",
        emoji: "⚙️",
        quotes: [
          { start: "The construction of Great Zimbabwe's massive stone structures required the organization of labor forces numbering in the thousands because the sheer volume of stone had to be quarried, transported, and", "correct": "fitted together according to a plan.", "wrong": ["handled by only a small workforce.", "put together without coordinated labor.", "small numbers could do it."] },
          { start: "The labor that built Great Zimbabwe came from sources including voluntary participation and possibly enslaved individuals, demonstrating that the ruler had multiple mechanisms", "correct": "for mobilizing and directing labor.", "wrong": ["based on voluntary participation.", "without control.", "without any form of compulsion."] },
          { start: "The coordination of such massive construction projects required the existence of architects or master builders who could design structures, plan construction sequences, and", "correct": "oversee quality control.", "wrong": ["proceed without any planning.", "operate without supervising the work.", "rely on random construction methods."] },
          { start: "The long duration of Great Zimbabwe's construction—spanning centuries—shows that the project required continuity of vision across multiple rulers' reigns and sustained commitment to", "correct": "the original plan.", "wrong": ["random experimentation.", "chaotic redesign.", "individual builders' preferences."] }
        ]
      },
      {
        name: "Great Zimbabwe & Environmental Knowledge",
        emoji: "🌿",
        quotes: [
          { start: "The location of Great Zimbabwe and the systems for water management suggest that builders and rulers understood the effects of climate and rainfall, and the need to manage", "correct": "water resources.", "wrong": ["agricultural expansion.", "mining operations.", "population growth."] },
          { start: "The development of agricultural systems that could support the large population of Great Zimbabwe required knowledge of", "correct": "local soil conditions.", "wrong": ["unknown terrain.", "random planting.", "foreign soil."] },
          { start: "The evidence of settlement patterns and resource management at Great Zimbabwe shows that the population understood how to extract resources sustainably without completely depleting them in the", "correct": "short term.", "wrong": ["long term.", "long horizon.", "past."] }
        ]
      }
    ]
  },
  {
    id: "gupta",
    name: "Gupta Empire",
    emoji: "📿",
    color: 0xffb300,
    colorHex: "#ffb300",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Chandragupta I (Founder & Historical Records)",
        emoji: "👑",
        quotes: [
          { start: "I established the Gupta Empire by uniting the northern Indian kingdoms through a combination of military conquest, strategic marriages, and the winning of allies rather than", "correct": "relying on force alone.", "wrong": ["peaceful unity.", "diplomatic skill.", "stable governance."] },
          { start: "The strategic marriage with the Licchhavi dynasty provided legitimacy because it connected the Gupta family to an established royal line and", "correct": "won the support of a powerful neighboring kingdom.", "wrong": ["had no effect.", "empty alliance.", "lost influence."] },
          { start: "The establishment of Gupta rule required demonstrating that a new dynasty could provide order, justice, and", "correct": "prosperity.", "wrong": ["military conquest alone.", "divine appointment.", "inherited privilege."] },
          { start: "The Gupta approach to conquered territories emphasized that rulers must establish stable governance and ensure that people benefited from", "correct": "Gupta rule.", "wrong": ["destruction.", "neglect.", "chaos."] }
        ]
      },
      {
        name: "Samudragupta (Expansion & Military Conquest)",
        emoji: "⚔️",
        quotes: [
          { start: "My extensive military campaigns across India demonstrated that a Gupta emperor could defeat rival kingdoms, consolidate power over much of the subcontinent, and", "correct": "establish imperial authority.", "wrong": ["lose control.", "collapse effort.", "empty rule."] },
          { start: "The Allahabad Pillar inscription recording my conquests served to publicly proclaim my military achievements and establish my legitimacy as", "correct": "a powerful ruler.", "wrong": ["a religious leader.", "a peaceful diplomat.", "a scholar-king."] },
          { start: "My style of conquest often involved accepting the submission of rival kings rather than destroying them because allowing defeated rulers to retain local authority while accepting Gupta supremacy was", "correct": "more efficient than complete conquest.", "wrong": ["weakness.", "failure.", "hesitation."] },
          { start: "The military organization required for my campaigns showed that the Gupta Empire possessed the administrative capacity to", "correct": "raise armies.", "wrong": ["avoid warfare.", "weak military.", "disband forces."] },
          { start: "My use of war elephants, cavalry, and infantry demonstrated that Gupta military strategy involved", "correct": "combining different unit types.", "wrong": ["single unit type.", "no strategy.", "no planning."] },
          { start: "The expansion of Gupta territory under my reign established the foundation for what would become", "correct": "one of India's greatest empires.", "wrong": ["empty victories.", "fragmented rule.", "short-lived gains."] }
        ]
      },
      {
        name: "Chandragupta II Vikramaditya (Golden Age & Culture)",
        emoji: "🌟",
        quotes: [
          { start: "I am remembered not only for military victory but also for establishing a golden age of culture because I believed that an empire's true greatness lay in its art, literature, science, and philosophy,", "correct": "not only military power.", "wrong": ["only conquest mattered.", "culture was irrelevant.", "art served no purpose."] },
          { start: "My patronage of scholars, poets, and artists served multiple purposes: enhancing the prestige of the Gupta court, ensuring that knowledge and culture flourished were transmitted to", "correct": "future generations.", "wrong": ["oblivion.", "decay.", "silence."] },
          { start: "The assembly of the 'Nine Gems' (Navratnas)—brilliant scholars and artists at my court—demonstrated that I understood that intellectual and cultural achievement was as important as", "correct": "military power in establishing a great empire.", "wrong": ["simply showing off wealth.", "having no real significance.", "having no real impact."] },
          { start: "My military victories, particularly the conquest of the western regions, were made possible by understanding that economic prosperity and stable governance allowed the empire", "correct": "to finance large military campaigns.", "wrong": ["to rely solely on brute force.", "to succeed without strategy.", "to succeed without planning."] },
          { start: "The defeat of the Shaka Western Kshatrapas brought the western trade ports under Gupta control, which allowed the empire to", "correct": "control maritime trade.", "wrong": ["gain no real benefit.", "ignore overseas commerce.", "have no influence."] },
          { start: "My promotion of both Hinduism and Buddhism demonstrated that a wise Gupta ruler understood that religious tolerance and the patronage of multiple traditions created", "correct": "stability.", "wrong": ["chaos.", "one religion only.", "instability."] }
        ]
      },
      {
        name: "Gupta Scholars & Intellectual Achievement",
        emoji: "📚",
        quotes: [
          { start: "The Gupta court attracted the greatest scholars of the age because the emperor provided the intellectual freedom to pursue knowledge in mathematics, astronomy, medicine, and", "correct": "literature.", "wrong": ["military strategy.", "agricultural science.", "administrative law."] },
          { start: "Aryabhata's contributions to mathematics and astronomy, made under Gupta patronage, demonstrated that when scholars receive support and resources, they can make discoveries", "correct": "that advance human knowledge.", "wrong": ["of no value.", "by accident.", "in isolation."] },
          { start: "The development of positional notation and early concepts of zero by Gupta-era mathematicians like Aryabhata represented a breakthrough in", "correct": "mathematical understanding.", "wrong": ["mathematical decline.", "numerical confusion.", "basic arithmetic."] },
          { start: "Kalidasa's literary masterpieces, supported by Gupta imperial patronage, showed that cultural achievement requires", "correct": "a ruler's recognition.", "wrong": ["no support.", "self isolation.", "accidental success."] },
          { start: "The Gupta approach to supporting scholars included establishing centers of learning where knowledge could be preserved and transmitted because the empire understood that institutionalizing knowledge", "correct": "ensured its survival.", "wrong": ["had no real effect.", "was unnecessary.", "benefited only individuals."] },
          { start: "Gupta support for the study of Sanskrit and the composition of literature in Sanskrit served to establish Sanskrit as the language of the", "correct": "educated elite.", "wrong": ["common people.", "merchants and traders.", "peasants and laborers."] }
        ]
      },
      {
        name: "Gupta Science & Technology",
        emoji: "🔬",
        quotes: [
          { start: "The achievements in medicine during the Gupta period, including the surgical techniques documented in medical texts, came from accumulation of knowledge over generations preserved through", "correct": "written texts.", "wrong": ["oral tradition.", "divine revelation.", "random chance."] },
          { start: "Gupta astronomers made accurate observations and calculations about celestial bodies because they understood that astronomy had practical applications for agriculture and", "correct": "the creation of accurate calendars.", "wrong": ["astrological superstition.", "random prediction.", "cosmic guessing."] },
          { start: "The technological innovations in metallurgy and engineering under the Gupta period, visible in the Iron Pillar of Delhi and other artifacts, demonstrate that the empire possessed sophisticated knowledge of", "correct": "manufacturing techniques.", "wrong": ["primitive tools.", "basic materials.", "random processes."] },
          { start: "Gupta support for technological advancement served both practical and symbolic purposes: improving productivity, demonstrating imperial power, and establishing the Gupta Empire as the center of", "correct": "knowledge and civilization.", "wrong": ["decline.", "isolation.", "disorder."] },
          { start: "Aryabhata correctly calculated the approximate value of pi and proposed that the Earth rotates on its axis, demonstrating that Gupta science was capable of", "correct": "conclusions that contradicted common assumptions.", "wrong": ["only confirming existing beliefs.", "purely practical calculations.", "religious interpretations of nature."] }
        ]
      },
      {
        name: "Gupta Governance & Administration",
        emoji: "⚖️",
        quotes: [
          { start: "The Gupta system of governance required establishing a centralized administration with appointed officials in provinces because the emperor could not", "correct": "personally oversee all territories.", "wrong": ["rely on pure feudalism.", "direct control.", "absolute oversight."] },
          { start: "Gupta emperors maintained power by balancing the authority of local rulers and the central authority because allowing local elites some autonomy while maintaining ultimate imperial authority created", "correct": "stability.", "wrong": ["absolute centralization.", "chaos.", "pure military rule."] },
          { start: "The Gupta legal system, based on written codes and administered by judges, served to", "correct": "provide consistent justice.", "wrong": ["arbitrary rulings.", "lawless chaos.", "symbolic law."] },
          { start: "Gupta taxation required striking a balance between extracting sufficient revenue and not driving the people to rebellion because overtaxation would cause economic collapse and", "correct": "rebellion.", "wrong": ["state collapse.", "economic stagnation.", "no real concern."] },
          { start: "The Gupta approach to administration of conquered territories involved respecting local customs and allowing some local autonomy because this strategy won", "correct": "the cooperation of local elites.", "wrong": ["cultural suppression.", "pure domination.", "constant rebellion."] },
          { start: "The stability of Gupta rule for nearly two centuries came from establishing a system where successive emperors understood that maintaining justice, supporting knowledge, and protecting merchants created", "correct": "conditions for prosperity.", "wrong": ["military dominance.", "random chance.", "sheer luck."] }
        ]
      },
      {
        name: "Gupta Trade & Economic Power",
        emoji: "💰",
        quotes: [
          { start: "The Gupta control of trade routes—both overland through Central Asia and maritime through the Indian Ocean—gave them wealth through", "correct": "taxation of merchants.", "wrong": ["military plunder.", "royal monopolies.", "agricultural surplus."] },
          { start: "The prosperity of merchants during the Gupta period came from the empire's provision of safe roads, protection from bandits and", "correct": "fair taxation.", "wrong": ["total neglect.", "no protection.", "arbitrary taxes."] },
          { start: "The Gupta support for merchant guilds and trade associations served to ensure that merchants had", "correct": "organized forums to settle disputes.", "wrong": ["ceremonial gatherings.", "heavy taxation.", "total royal control."] },
          { start: "The economic prosperity of the Gupta Empire allowed the government to", "correct": "finance military campaigns.", "wrong": ["simply accumulate wealth.", "gain no real benefits from it.", "have no practical use."] },
          { start: "The Gupta mints produced high-quality coins inscribed with the emperor's names and titles because this served to establish the emperor's face as a symbol of", "correct": "imperial authority.", "wrong": ["personal vanity.", "economic reform.", "religious devotion."] },
          { start: "The volume of trade during the Gupta period, with goods flowing from China, Central Asia, Persia, Rome, and Southeast Asia, demonstrated that the Gupta Empire was a major node in international trade networks stretching across", "correct": "Eurasia.", "wrong": ["America.", "Scandinavia.", "Antarctica."] },
          { start: "The Gupta port of Tamralipti on the Bay of Bengal served as the main departure point for Buddhist missionaries and traders to Southeast Asia, showing that maritime trade", "correct": "spread both commerce and culture simultaneously.", "wrong": ["was purely economic.", "had no cultural dimension.", "was controlled only by merchants."] }
        ]
      },
      {
        name: "Gupta Art & Architecture",
        emoji: "🏛️",
        quotes: [
          { start: "The distinctive Gupta style of sculpture, painting, and architecture represented a synthesis because it combined Indian traditions with influences from Hellenistic art encountered through", "correct": "trade and contact.", "wrong": ["military conquest.", "internal isolation.", "local traditions."] },
          { start: "Gupta patronage of Buddhist cave temples and sculptures served both religious and political purposes: demonstrating piety, supporting religion, and establishing the Gupta court as a center of culture and", "correct": "spirituality recognized across Asia.", "wrong": ["local influence.", "royal luxury.", "military strength."] },
          { start: "The construction of temples and public buildings during the Gupta period reflected the empire's belief that permanent structures demonstrated", "correct": "imperial power.", "wrong": ["religious piety.", "artistic skill.", "no real purpose."] },
          { start: "The development of the Gupta artistic style influenced art across Asia because the empire's prestige and the trade networks it controlled allowed its cultural achievements to", "correct": "be widely known and emulated.", "wrong": ["stay local.", "have minimal impact.", "remain isolated."] },
          { start: "Gupta artists and architects working under imperial patronage created works that demonstrated technical mastery, aesthetic sophistication, and the integration of", "correct": "religious and secular themes.", "wrong": ["only religious motifs.", "strict Hindu style.", "Buddhist exclusivity."] }
        ]
      },
      {
        name: "Gupta Religion & Philosophy",
        emoji: "🕯️",
        quotes: [
          { start: "The Gupta approach to religion included patronage of both Hindu temples and Buddhist monasteries because the emperors understood that religious tolerance and support for multiple traditions created", "correct": "stability.", "wrong": ["division.", "conflict.", "intolerance."] },
          { start: "The revival of Sanskrit literature and philosophy during the Gupta period served to", "correct": "establish Hindu classical traditions.", "wrong": ["create religious divide.", "reject philosophy.", "reject history."] },
          { start: "Gupta patronage supported the standardization and written preservation of epic traditions like the Mahabharata and Ramayana, which served to", "correct": "preserve these epic traditions.", "wrong": ["entertain people.", "standardize Sanskrit.", "boost Gupta power."] },
          { start: "The Gupta engagement with Buddhist scholarship, particularly at Nalanda — established under Kumaragupta I — demonstrated that the empire supported", "correct": "learning across religious traditions.", "wrong": ["oppression of Buddhists.", "learning in one.", "no learning."] },
          { start: "The Gupta period saw the development of Hindu philosophy because thinkers could", "correct": "work freely and access resources.", "wrong": ["produce no real philosophy.", "follow only purely traditional ideas.", "create nothing innovative."] }
        ]
      },
      {
        name: "Gupta Decline & Historical Significance",
        emoji: "📜",
        quotes: [
          { start: "The decline of the Gupta Empire came from multiple factors: Hun invasions, the fragmentation of central authority, economic decline, and the inability of later emperors to", "correct": "maintain the system of governance.", "wrong": ["keep it stable.", "hold power.", "run things properly."] },
          { start: "The Gupta inability to completely repel the Huna (Hun) invasions from Central Asia showed that even powerful empires face challenges from determined external enemies with", "correct": "superior military capabilities.", "wrong": ["worst weapons.", "less power.", "no real resistance."] },
          { start: "The fragmentation of the Gupta Empire into regional kingdoms after the central authority weakened demonstrated that without a strong central authority and the prosperity that supported it, the system of governance", "correct": "could not be maintained.", "wrong": ["was weak from the start.", "had no real unity.", "fell apart."] },
          { start: "The legacy of the Gupta Empire included establishing that a civilization that values knowledge, supports cultural achievement, and provides stable governance can", "correct": "create a golden age.", "wrong": ["leave no lasting legacy.", "achieve only military success.", "experience only temporary cultural achievements."] },
          { start: "The study of the Gupta period demonstrates that in the ancient world mathematical breakthroughs (zero, decimal system) and scientific discoveries could emerge", "correct": "from patronage and institutional support.", "wrong": ["without any support.", "completely by random chance.", "just by chance."] },
          { start: "The Huna (Hunas/White Huns) invasions under Toramana and Mihirakula in the late 5th century disrupted Gupta administration so severely that provincial governors", "correct": "began acting as independent rulers.", "wrong": ["remained loyal to the emperor.", "were replaced by Huna administrators.", "continued normal governance."] }
        ]
      },
      {
        name: "Gupta Women & Social Structure",
        emoji: "👩",
        quotes: [
          { start: "Women in Gupta society had more restricted roles than in some earlier Indian periods, reflecting that", "correct": "social norms shift over time.", "wrong": ["women had complete freedom.", "no restrictions existed.", "all women were equal."] },
          { start: "The roles of queens and female members of the royal family in Gupta politics showed that even with overall restrictions on women, those with royal birth could", "correct": "exercise significant influence.", "wrong": ["hold no power at all.", "perform purely ceremonial duties.", "have no real influence whatsoever."] },
          { start: "Gupta society was organized hierarchically with brahmins (priests), kshatriyas (warriors), vaishyas (merchants), and shudras (servants) because this varna system provided a social hierarchy that", "correct": "organized society.", "wrong": ["assigned roles randomly.", "offered no real structure.", "was purely based on wealth."] },
          { start: "The relative stability of Gupta society despite its hierarchical nature came from the fact that each level had defined", "correct": "roles and responsibilities.", "wrong": ["only chaos.", "no advancement possible.", "constant rebellion."] }
        ]
      },
      {
        name: "Gupta Mathematics & Philosophy",
        emoji: "🧮",
        quotes: [
          { start: "The Gupta mathematical achievement of developing zero and the decimal system was revolutionary because it allowed for more efficient calculations and would eventually transform", "correct": "mathematics worldwide.", "wrong": ["other unrelated fields.", "math only.", "local ideas."] },
          { start: "Gupta philosophers developed sophisticated systems of thought because they worked in an environment that valued intellectual achievement and had access to the patronage and", "correct": "resources necessary for deep study.", "wrong": ["no real philosophy.", "no help for thinking.", "no original thought."] },
          { start: "The Gupta synthesis of Greek, Indian, and other philosophical traditions created a distinctive approach that drew from multiple sources while maintaining", "correct": "Indian intellectual traditions.", "wrong": ["American intellectual traditions.", "no intellectual traditions.", "no real synthesis."] }
        ]
      },
      {
        name: "Gupta Diplomacy & Foreign Relations",
        emoji: "🌍",
        quotes: [
          { start: "The Gupta establishment of relationships with distant powers like Rome, China, and Southeast Asian kingdoms showed that an empire's prestige and prosperity made it attractive", "correct": "as a diplomatic partner.", "wrong": ["without engaging in diplomacy.", "with purely military contact.", "without diplomacy."] },
          { start: "The Gupta exchange of embassies with other states served to establish that the Gupta Empire was recognized as a major power worthy of", "correct": "formal diplomatic recognition.", "wrong": ["no importance.", "no real status.", "no significance."] },
          { start: "The influence of Gupta culture beyond India's borders demonstrated that a great civilization could extend influence", "correct": "far beyond military conquest.", "wrong": ["without having any real influence.", "only within local boundaries.", "through military power alone."] }
        ]
      }
    ]
  },
  {
    id: "songhai",
    name: "Songhai Empire",
    emoji: "🌍",
    color: 0x33691e,
    colorHex: "#33691e",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Sunni Ali Ber (Conqueror & Expander)",
        emoji: "👑",
        quotes: [
          { start: "I conquered the Mali Empire's former territories by understanding that military strength must be combined with administrative skill and the ability to win", "correct": "the loyalty of conquered peoples.", "wrong": ["without any follow-up administration.", "relying solely on military force.", "only through pure conquest."] },
          { start: "The capture of Timbuktu and Gao demonstrated that a ruler must", "correct": "establish control over major cities.", "wrong": ["only take territory.", "have no governance plan.", "fight only wars."] },
          { start: "My expansion of Songhai required understanding that the Niger River valley could support a powerful state through", "correct": "control of trade routes and agriculture.", "wrong": ["pure military conquest.", "no economic foundation.", "random expansion."] },
          { start: "The use of military force to consolidate Songhai power also required establishing a navy to control the", "correct": "Niger River.", "wrong": ["land.", "mountains.", "villages."] },
          { start: "My relationship with Islamic leaders and scholars showed that even a warrior king must understand that cultural and religious legitimacy were important to", "correct": "ruling diverse peoples.", "wrong": ["ignore religion.", "use only military force.", "dismiss scholars."] },
          { start: "The consolidation of Songhai power under my rule required eliminating rival power centers while ensuring that administrators and merchants recognized Songhai authority and", "correct": "benefited from it.", "wrong": ["supported rule.", "shared profit.", "gained power."] },
          { start: "Sunni Ali's complex relationship with Islamic scholars in Timbuktu — sometimes persecuting them — showed that his power was based on", "correct": "military and traditional authority rather than Islamic legitimacy.", "wrong": ["pure Islamic piety.", "scholarly consensus.", "foreign alliances."] }
        ]
      },
      {
        name: "Muhammad Askia the Great (Organization & Administration)",
        emoji: "👑",
        quotes: [
          { start: "I reorganized the Songhai Empire after taking power by establishing", "correct": "a centralized administrative system.", "wrong": ["a pure military rule.", "a feudal decentralization.", "no real organization."] },
          { start: "My pilgrimage to Mecca served multiple purposes: demonstrating Islamic piety, establishing relationships with Muslim rulers, and enhancing my legitimacy as a Muslim ruler", "correct": "within the Islamic world.", "wrong": ["without political benefit.", "with no real purpose.", "without political significance."] },
          { start: "The expansion of Songhai to its greatest extent under my rule required establishing control over trade routes and cities while maintaining the balance between military power and", "correct": "civilian administration.", "wrong": ["relying only on military leaders.", "ignoring administrative systems.", "having no governance at all."] },
          { start: "My approach to justice and administration emphasized that a ruler must", "correct": "be accessible to his people.", "wrong": ["treat justice as unimportant.", "consider only the nobles in decisions.", "rule arbitrarily without concern."] },
          { start: "The establishment of a civil service of educated administrators showed that I understood that complex empires required specialized knowledge in law, finance, and administration beyond", "correct": "military command.", "wrong": ["art.", "music.", "dance."] },
          { start: "My reign demonstrated that a strong Songhai Empire required balance between military power to defend against external threats, trade to generate wealth, and", "correct": "justice to maintain internal stability.", "wrong": ["only military strength.", "random taxation.", "total isolation."] },
          { start: "The later military challenges to my authority showed that even a successful ruler must", "correct": "maintain the loyalty of military commanders.", "wrong": ["assume absolute obedience at all times.", "expect that challenges would never happen.", "rely on automatic loyalty."] }
        ]
      },
      {
        name: "Songhai Trade & Economic Power",
        emoji: "💰",
        quotes: [
          { start: "The Songhai Empire's wealth came from controlling the gold trade because merchants crossing the Sahara had to", "correct": "pass through Songhai territory.", "wrong": ["bypass Songhai completely.", "trade only outside Songhai lands.", "avoid Songhai territory entirely."] },
          { start: "The cities of Timbuktu, Gao, and Djenné flourished under Songhai rule because they served as", "correct": "centers of trade.", "wrong": ["rural farming zones.", "abandoned ruins.", "isolated fortresses."] },
          { start: "The Songhai control of the Niger River allowed them to", "correct": "move goods efficiently.", "wrong": ["have no real advantage.", "eliminate trade routes.", "destroy surrounding settlements."] },
          { start: "Songhai merchants and traders became wealthy because they could participate in trade networks stretching from the Mediterranean to", "correct": "the Indian Ocean.", "wrong": ["the Pacific Ocean.", "isolated villages.", "only local markets."] },
          { start: "The Songhai approach to merchants and traders emphasized fairness in taxation, protection from bandits, and the establishment of law and order that", "correct": "enabled commerce to flourish.", "wrong": ["discouraged merchants from trading.", "made commerce dangerous.", "led to frequent confiscation of goods."] },
          { start: "The economic foundation of Songhai power allowed the empire to maintain", "correct": "a large military.", "wrong": ["isolated villages.", "constant famine.", "military weakness."] }
        ]
      },
      {
        name: "Timbuktu & Centers of Learning",
        emoji: "📚",
        quotes: [
          { start: "Timbuktu became a major center of Islamic learning under Songhai rule because the emperors understood that supporting scholars, establishing madrasas (schools), and preserving knowledge", "correct": "enhanced the prestige and legitimacy of Songhai rule.", "wrong": ["did not benefit anyone.", "was completely useless.", "had no impact on the empire."] },
          { start: "The Sankore Madrasah of Timbuktu and other institutions of learning attracted scholars from across the Islamic world because Songhai emperors provided", "correct": "financial support.", "wrong": ["forced exile.", "religious bans.", "no support."] },
          { start: "Songhai rulers invested in preserving manuscripts and establishing libraries because they understood that controlling knowledge", "correct": "enhanced their authority.", "wrong": ["was purely altruistic.", "had no political benefit.", "had no real value."] },
          { start: "The scholars and judges of Timbuktu helped Songhai emperors by", "correct": "providing legal knowledge.", "wrong": ["having no real influence.", "serving purely ceremonial roles.", "no practical authority."] },
          { start: "The preservation of African Islamic scholarship in Timbuktu created a legacy because the accumulated knowledge and manuscripts ensured that African Islamic intellectual traditions would survive", "correct": "for future generations.", "wrong": ["without interruption.", "only briefly.", "in isolation."] },
          { start: "The decline of Songhai learning after the empire's fall showed that without state support, institutions of learning", "correct": "struggle to survive.", "wrong": ["grew even stronger.", "continued to flourish.", "remained completely unaffected."] }
        ]
      },
      {
        name: "Songhai Islamic Governance & Law",
        emoji: "⚖️",
        quotes: [
          { start: "The Songhai emperors' adoption of Islam as the foundation of governance meant that Islamic law (Sharia), Islamic courts, and Islamic judges became central to the", "correct": "justice system.", "wrong": ["military administration.", "agricultural system.", "traditional law system."] },
          { start: "The balance Songhai maintained between Islamic law and traditional African law showed that rulers understood that incorporating local traditions while respecting Islam allowed diverse peoples to accept", "correct": "Songhai authority.", "wrong": ["pure Islamic law alone.", "foreign rule.", "constant rebellion."] },
          { start: "Songhai judges and Islamic scholars were given authority to interpret law and settle disputes because their knowledge and religious authority made them", "correct": "trusted arbiters.", "wrong": ["untrustworthy officials.", "tax collectors.", "foreign envoys."] },
          { start: "The establishment of Islamic courts in major Songhai cities served to provide a system of justice that was perceived as fair and based on religious law rather than", "correct": "arbitrary ruler decree.", "wrong": ["written legal codes.", "trained judges.", "consistent legal principles."] },
          { start: "The Songhai approach to religious law required that rulers be knowledgeable about Islam because kings had to be seen as", "correct": "pious Muslims.", "wrong": ["local village leaders.", "rulers who ignored Islam.", "military generals only."] }
        ]
      },
      {
        name: "Songhai Military & Defense",
        emoji: "⚔️",
        quotes: [
          { start: "The Songhai military consisted of professional soldiers, cavalry, and navy because defending such a large empire required specialized military units able to", "correct": "respond to threats from various directions.", "wrong": ["rely on militia alone.", "fight only on one front.", "avoid conflict."] },
          { start: "The Songhai control of the Niger River required maintaining a navy because command of the waterway prevented rivals from using it for trade or military movement, and", "correct": "allowed Songhai forces to patrol the empire.", "wrong": ["eliminated all trade.", "made rivers disappear.", "removed all borders."] },
          { start: "Songhai military commanders gained status and wealth through success in war because victorious generals were rewarded with land, slaves, and", "correct": "treasure.", "wrong": ["imprisonment.", "exile.", "punishment."] },
          { start: "The weakness of Songhai military power against the Moroccan invasion of 1591 showed that a military effective against African rivals could not", "correct": "match a well-organized external invader.", "wrong": ["protect the empire indefinitely.", "guarantee military dominance.", "operate without leadership."] },
          { start: "The Songhai military organization included appointed generals and commanders loyal to the emperor because", "correct": "the emperor needed military officers he could trust.", "wrong": ["command was unnecessary.", "loyalty was not necessary.", "leadership was random."] }
        ]
      },
      {
        name: "Songhai Administration & Governance",
        emoji: "👑",
        quotes: [
          { start: "The Songhai system of government under Muhammad Askia included appointed administrators in major cities because this allowed the emperor to", "correct": "maintain control.", "wrong": ["dissolve the empire.", "lose oversight.", "allow complete independence."] },
          { start: "Songhai governors were expected to collect taxes, maintain order, and ensure that local merchants prospered because prosperous regions produced", "correct": " more tax revenue.", "wrong": ["purely oppressive taxation.", "no local development.", "less tax revenue."] },
          { start: "The Songhai approach to administering diverse ethnic and religious groups required", "correct": "respecting local traditions.", "wrong": ["pure cultural erasure.", "no respect for locals.", "eliminating administration."] },
          { start: "Songhai corruption of administrators was controlled through a system of checks because rulers understood that officials who embezzled tax revenue weakened imperial power and", "correct": "provoked rebellion.", "wrong": ["strengthened the empire.", "increased loyalty.", "were rarely punished."] },
          { start: "The capital at Gao served as the center of Songhai administration, housing the emperor, his court, and government officials because a centralized capital allowed the emperor to oversee", "correct": "administration.", "wrong": ["trade routes.", "foreign armies.", "rural villages."] },
          { start: "Muhammad Askia divided the empire into provinces each administered by a governor (fari), creating one of the most", "correct": "sophisticated administrative systems in 15th century Africa.", "wrong": ["disorganized systems in the region.", "purely military structures.", "temporary arrangements."] }
        ]
      },
      {
        name: "Songhai Diplomacy & Foreign Relations",
        emoji: "🌍",
        quotes: [
          { start: "The Songhai relationship with North African kingdoms across the Sahara was based on trade and", "correct": "shared Islamic faith.", "wrong": ["pure hostility.", "no real contact.", "constant warfare."] },
          { start: "Muhammad Askia's pilgrimage to Mecca and his establishment of relationships with other Muslim rulers served to position Songhai within the", "correct": "Islamic world.", "wrong": ["Christendom.", "European feudal system.", "local tribal networks."] },
          { start: "The Songhai approach to neighboring African kingdoms that resisted Songhai expansion required", "correct": "military campaigns when necessary.", "wrong": ["immediate withdrawal.", "no flexibility.", "no response."] },
          { start: "The relationship between Songhai and the Moroccan kingdom across the Sahara eventually became hostile because Morocco sought control of Songhai's wealth and trade routes, leading to the", "correct": "1591 invasion.", "wrong": ["1885 invasion.", "824 invasion.", "1651 invasion."] }
        ]
      },
      {
        name: "Songhai Culture & Religious Authority",
        emoji: "🕯️",
        quotes: [
          { start: "The Songhai adoption of Islam created a framework for governance because it provided a shared set of principles with other", "correct": "Islamic states.", "wrong": ["local villages.", "isolated tribes.", "rural communities."] },
          { start: "The balance Songhai emperors maintained between Islamic law and traditional African practices showed that accepting local traditions while adopting Islam allowed diverse populations to", "correct": "accept Songhai authority.", "wrong": ["resist all rule.", "ignore governance.", "avoid authority."] },
          { start: "The respect shown to Islamic scholars and judges in Songhai demonstrated that emperors understood that religious and intellectual authority could be as important as", "correct": "military power.", "wrong": ["territorial expansion.", "taxation policy.", "military recruitment."] },
          { start: "Songhai artistic and literary traditions flourished under imperial patronage because the emperors believed that supporting cultural expression", "correct": "enhanced the prestige of the empire.", "wrong": ["had no value.", "was purely decorative.", "had no real importance."] },
          { start: "The preservation of African Islamic culture in Songhai cities created a legacy because African Islamic intellectual tradition", "correct": "was maintained for future generations.", "wrong": ["quickly disappeared.", "collapsed immediately.", "failed completely."] }
        ]
      },
      {
        name: "Songhai Decline & Fall",
        emoji: "📜",
        quotes: [
          { start: "The invasion of Songhai by Morocco in 1591 succeeded because Moroccan forces possessed superior firepower (arquebuses and cannons) that Songhai", "correct": "cavalry could not effectively counter.", "wrong": ["easily resisted.", "fully matched.", "quickly surpassed."] },
          { start: "The fall of Songhai showed that even well-organized African empires could not resist external military invasion with", "correct": "superior weapons and tactics.", "wrong": ["inferior technology.", "equal resources.", "internal stability."] },
          { start: "The decline of Songhai after the Moroccan invasion resulted from the disruption of trade routes, the fragmentation of the empire into smaller states, and", "correct": "the loss of control over major cities.", "wrong": ["increasing unity.", "immediate collapse.", "expanding territory."] },
          { start: "The legacy of Songhai included the establishment of centers of Islamic learning that preserved", "correct": "African Islamic scholarship.", "wrong": ["no real legacy.", "pure destruction.", "no cultural contribution."] },
          { start: "The study of Songhai demonstrates that organized African states with justice systems and complex administrations existed well before", "correct": "European colonization.", "wrong": ["modern times.", "any development.", "recorded history."] },
          { start: "The Moroccan invasion of 1591 was led by Ahmad al-Mansur who used Sa'adian arquebusiers crossing the Sahara — a military feat that succeeded because Songhai commanders", "correct": "had no effective response to gunpowder weapons.", "wrong": ["refused to fight.", "outnumbered the Moroccans.", "had superior cavalry tactics."] }
        ]
      },
      {
        name: "Songhai Merchants & Craftspeople",
        emoji: "🛠️",
        quotes: [
          { start: "Songhai merchants who traveled across West Africa and to North Africa built wealth through", "correct": "understanding market prices.", "wrong": ["pure luck.", "ignoring prices.", "rejecting markets."] },
          { start: "The craftspeople of Songhai cities—metalworkers, weavers, potters—gained status in society because", "correct": "their skills were valued.", "wrong": ["they had no status.", "crafts were unimportant.", "only military people were valued."] },
          { start: "Songhai support for merchants and traders through protection and fair taxation served to make Songhai cities attractive to", "correct": "traders.", "wrong": ["rulers from neighboring kingdoms.", "competitors.", "foreign invaders."] },
          { start: "The role of markets in Songhai cities was central to empire because they", "correct": "served as centers of economic exchange.", "wrong": ["discouraged all trade.", "prevented commerce.", "limited economic activity."] }
        ]
      },
      {
        name: "Songhai Social Structure & Values",
        emoji: "🏛️",
        quotes: [
          { start: "Songhai society was organized into distinct classes: the royal family, nobles, merchants, scholars, soldiers, and commoners because this hierarchy allowed for", "correct": "specialization of complex tasks.", "wrong": ["identical roles.", "coordination between different groups.", "randomly assigned tasks."] },
          { start: "The role of scholars and judges in Songhai society was elevated because they possessed knowledge that was essential to understanding Islamic law, recording important information, and", "correct": "advising rulers.", "wrong": ["ignoring governance.", "avoiding politics.", "rejecting authority."] },
          { start: "Women in Songhai society could own property and exercise authority within families because the society recognized women's economic contributions and their role in", "correct": "maintaining families and communities.", "wrong": ["any business activities.", "property ownership.", "participation in decision-making."] },
          { start: "Songhai values emphasized justice, honor, and knowledge because a ruler who was just and knowledgeable would be respected and his empire would", "correct": "be stable and prosperous.", "wrong": ["guaranteed loyalty and success.", "undermined by a ruler's authority.", "thrive through deception and ignorance."] }
        ]
      }
    ]
  },
  {
    id: "parthia",
    name: "Parthian Empire",
    emoji: "🏇",
    color: 0x4e342e,
    colorHex: "#4e342e",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Arsaces I & Early Parthian Kings (As Recorded by Appian & Justin)",
        emoji: "👑",
        quotes: [
          { start: "We Parthians broke free from Seleucid rule by understanding that guerrilla warfare, mobility, and control of the steppes could overcome", "correct": "more heavily equipped armies.", "wrong": ["mobile tactics.", "strategy.", "cavalry warfare."] },
          { start: "The early Parthian kings consolidated power by establishing a feudal system where powerful nobles maintained semi-autonomous territories in exchange for military support and", "correct": "loyalty to the king.", "wrong": ["centralized control.", "equal governance.", "no hierarchy."] },
          { start: "Our success in establishing an independent kingdom from Seleucid collapse showed that timing, military effectiveness, and the ability to exploit a weakening empire were essential to", "correct": "independence.", "wrong": ["conquest.", "resistance.", "luck."] },
          { start: "A Parthian king's authority derived from the support of powerful nobles called the 'King's Friends' because without their loyalty and military support, a king could be removed and", "correct": "replaced.", "wrong": ["crowned automatically.", "made immortal.", "left in permanent rule."] },
          { start: "The Parthian preference for light cavalry and horse archers proved more effective against Seleucid forces because they allowed quick strikes, rapid retreat, and the ability to", "correct": "harass armies across open terrain.", "wrong": ["avoid all movement.", "run away.", "fight only in cities."] }
        ]
      },
      {
        name: "Mithridates I the Great (Expansion & Power)",
        emoji: "🐴",
        quotes: [
          { start: "My conquest of Mesopotamia from the Seleucids required not only military campaigns but also establishing administration, winning over local populations, and securing the region against", "correct": "counterattack.", "wrong": ["festivals.", "internal trade bans.", "diplomatic ceremonies."] },
          { start: "I recognized that the Parthian Empire's greatest strength was the ability to field mounted archers who could strike from distance while remaining mobile making them", "correct": "superior in open terrain.", "wrong": ["rely on fortresses.", "avoid all movement.", "dependent on infantry."] },
          { start: "The expansion of Parthian territory under my reign to stretch from the Euphrates to the borders of India demonstrated that a king who could successfully campaign and maintain the loyalty of nobles could", "correct": "build a vast empire.", "wrong": ["achieve unlimited conquest.", "face no limits.", "ignore Roman power."] },
          { start: "My relations with the Seleucid and Greek rulers showed that a Parthian king must understand diplomacy, recognizing when to negotiate, when to fight, and when to use", "correct": "marriages and alliances.", "wrong": ["only military force.", "diplomacy.", "no negotiation."] },
          { start: "The maintenance of Parthian independence required understanding that the Parthian Empire occupied a position between Roman and Indian powers and had to", "correct": "navigate these relationships carefully.", "wrong": ["ignore surrounding powers.", "face no external threats.", "assume Rome could not attack."] }
        ]
      },
      {
        name: "Parthian Warfare & Military Strategy",
        emoji: "🏹",
        quotes: [
          { start: "The Parthian 'Parthian shot'—shooting arrows while retreating on horseback—proved devastatingly effective against Roman legions because it allowed Parthian cavalry to inflict casualties while", "correct": "avoiding close combat.", "wrong": ["standing still.", "charging forward.", "immediate surrender."] },
          { start: "Parthian military organization centered on powerful nobles with their own cavalry forces because the feudal system required that each major noble contribute military forces", "correct": "under the king's command.", "wrong": ["without royal oversight.", "without centralization.", "without a coordinated army."] },
          { start: "The Parthian use of combined arms—light cavalry, heavy cavalry, and infantry—showed that effective military strategy required", "correct": "diverse unit types.", "wrong": ["cavalry alone.", "infantry.", "no coordination."] },
          { start: "The Parthian victories against Rome at Carrhae and elsewhere demonstrated that light cavalry could defeat heavy infantry when the cavalry had", "correct": "superior mobility.", "wrong": ["no horses.", "no tactics.", "fixed positions."] },
          { start: "Parthian generals who successfully maintained power understood that preserving their cavalry forces was more important than capturing territory, because without cavalry, Parthian power would", "correct": "collapse.", "wrong": ["remain strong.", "expand easily.", "control lands."] },
          { start: "The Parthian approach to fortress warfare often involved using siege equipment, cutting supply lines, and exhausting defenders rather than", "correct": "accepting casualties in direct assault.", "wrong": ["avoiding all warfare.", "ignoring fortifications.", "suffering heavy losses."] },
          { start: "The Roman general Crassus underestimated Parthian cavalry at Carrhae because he expected a traditional pitched battle, not realizing that Parthian horse archers could maintain pressure without ever", "correct": "closing to hand-to-hand combat.", "wrong": ["retreating from the field.", "running out of arrows.", "losing formation."] }
        ]
      },
      {
        name: "Parthian Nobles & Feudal System",
        emoji: "👑",
        quotes: [
          { start: "The Parthian system of government relied on powerful nobles who", "correct": "maintained their own territories.", "wrong": ["served at the king's pleasure.", "had no real power.", "were completely subordinate."] },
          { start: "A Parthian king who tried to centralize power or reduce noble autonomy would", "correct": "face rebellion or deposition.", "wrong": ["succeed easily.", "gain more power.", "be accepted by the nobles."] },
          { start: "The 'King's Friends'—the highest tier of Parthian nobility—held power because they controlled vast territories, commanded military forces, and", "correct": "could make or break a king's reign.", "wrong": ["were chosen at random.", "had no real influence.", "served only as messengers."] },
          { start: "Parthian succession disputes often involved competing claimants supported by different noble factions because the nobles had the power to choose between candidates and would back", "correct": "those favorable to their interests.", "wrong": ["any candidate at random.", "the weakest claimant.", "foreign princes."] },
          { start: "The strength of the Parthian feudal system was that it allowed a decentralized structure that could survive the loss of a weak king and adapt to", "correct": "regional differences.", "wrong": ["complete centralization.", "absolute monarchy.", "uniform governance."] },
          { start: "The weakness of the Parthian feudal system was that it", "correct": "made unified action difficult.", "wrong": ["prevented military success.", "made the empire weak.", "allowed easy conquest."] }
        ]
      },
      {
        name: "Parthian Relations with Rome",
        emoji: "⚔️",
        quotes: [
          { start: "The Parthian Empire's greatest challenge was the rise of Rome because Rome could field massive armies with superior organization and discipline, requiring Parthian strategy to focus on", "correct": "avoiding direct confrontation.", "wrong": ["direct frontal assault.", "siege warfare.", "naval confrontation."] },
          { start: "The Parthian strategy against Rome involved defensive campaigns, using terrain advantages, harassing Roman armies, and avoiding large-scale pitched battles when", "correct": "possible.", "wrong": ["unnecessary.", "forbidden.", "advantageous."] },
          { start: "The Battle of Carrhae in 53 BCE, where Parthian forces under the general Surena defeated Crassus, demonstrated that skilled use of cavalry and terrain could overcome even", "correct": "experienced Roman legions.", "wrong": ["untrained soldiers.", "entire Roman armies always.", "ordinary infantry."] },
          { start: "The long-term conflict between Parthia and Rome remained inconclusive because Parthian light cavalry was superior in open terrain but Romans were superior", "correct": "in siege warfare, creating a strategic stalemate.", "wrong": ["in trade.", "in border treaties.", "in all situations."] },
          { start: "Parthian kings maintained peace with Rome when necessary because they recognized that continuous war with Rome would", "correct": "drain resources.", "wrong": ["make Parthia stronger.", "bring endless prosperity.", "guarantee easy victories."] },
          { start: "The Parthian use of Armenia as a buffer state and zone of competition with Rome showed that control of territories between the two empires was essential to maintaining balance and", "correct": "preventing direct Roman invasion.", "wrong": ["ensuring isolation.", "eliminating diplomacy.", "dissolving borders."] }
        ]
      },
      {
        name: "Parthian Trade & Economic Power",
        emoji: "💰",
        quotes: [
          { start: "The Parthian control of the Silk Road trade routes gave them enormous power because they could tax merchants, control the flow of goods between China, India, and the Mediterranean, and", "correct": "accumulate wealth.", "wrong": ["lose all income.", "abandon taxation.", "destroy trade networks."] },
          { start: "Parthian kings used control of trade routes to establish relationships with distant powers like China because trade created mutual interests and opportunities for diplomacy without", "correct": "direct military confrontation.", "wrong": ["military alliances.", "political benefit.", "territorial expansion."] },
          { start: "The Parthian approach to merchants and trade emphasized", "correct": "maintaining the flow of commerce.", "wrong": ["no regulations.", "blocking trade routes.", "abolishing commerce."] },
          { start: "Parthian cities like Ctesiphon became wealthy centers of trade and culture because they sat on major trade routes and the kings", "correct": "invested in their development.", "wrong": ["saw no real purpose in them.", "used them only as military bases.", "allowed no trade."] },
          { start: "The Parthian wealth from trade allowed them to maintain a large military, support a court and nobility, and survive periods of", "correct": "conflict with Rome.", "wrong": ["peace.", "isolation.", "economic collapse."] }
        ]
      },
      {
        name: "Parthian Governance & Administration",
        emoji: "⚖️",
        quotes: [
          { start: "The Parthian system of governance combined Persian traditions with new structures appropriate to a feudal state because the empire needed to balance central authority with", "correct": "local autonomy.", "wrong": ["purely Greek systems.", "tradition.", "centralization."] },
          { start: "Later Parthian kings increasingly positioned themselves as heirs to Persian imperial traditions because this gave them legitimacy over territories that had previously", "correct": "been ruled by Persian emperors.", "wrong": ["resisted all rule.", "lived without rulers.", "no local support."] },
          { start: "The Parthian use of a capital (first Ctesiphon, then other cities) served to provide a center for administration, display royal power, and serve as a focus for trade and", "correct": "culture.", "wrong": ["chaos.", "decline.", "isolation."] },
          { start: "Parthian administration of conquered territories often involved allowing local rulers to maintain power under Parthian oversight, respecting local traditions, and", "correct": "extracting tribute.", "wrong": ["replacing local rulers.", "imposing uniform governance.", "ending taxation."] },
          { start: "The Parthian approach to governing client kingdoms and vassal states required balancing the autonomy of local rulers with ensuring their loyalty and preventing them from", "correct": "becoming too independent.", "wrong": ["absolute control.", "acting without any limits.", "complete assimilation."] }
        ]
      },
      {
        name: "Parthian Culture & Hellenization",
        emoji: "🏛️",
        quotes: [
          { start: "The Parthian adoption of some Hellenistic elements while maintaining Persian traditions demonstrated that the Parthian elite could adopt useful foreign customs while", "correct": "maintaining cultural identity and authority.", "wrong": ["abandoning all traditions.", "Persian culture was rejected.", "losing political control."] },
          { start: "The Parthian royal court's use of Greek language and culture in some contexts served to facilitate diplomatic communication and demonstrate the kings' sophistication to Greek and", "correct": "Mediterranean powers.", "wrong": ["isolated tribes.", "desert nomads.", "inland farmers."] },
          { start: "The Parthian preservation and promotion of Persian cultural traditions—art, literature, ceremony—showed that the kings understood that cultural legitimacy required connection to", "correct": "Persian imperial past.", "wrong": ["no cultural pride.", "purely Greek culture.", "future."] },
          { start: "The Parthian religious tolerance, allowing the continuation of Zoroastrianism and respect for local religions, served to maintain", "correct": "the loyalty of diverse populations.", "wrong": ["no religion.", "war.", "political instability."] }
        ]
      },
      {
        name: "Parthian Diplomacy & Foreign Relations",
        emoji: "📜",
        quotes: [
          { start: "The Parthian approach to diplomacy with Rome involved using envoys, exchanging embassies, and negotiating treaties because", "correct": "continuous war with Rome was exhausting.", "wrong": ["Parthia feared Rome.", "weakness was demonstrated.", "no real diplomacy occurred."] },
          { start: "Parthian diplomatic marriages with neighboring powers served to cement alliances and", "correct": "provide leverage in negotiations.", "wrong": ["served no strategic value.", "led only to conflict.", "had no real benefit."] },
          { start: "The Parthian maintenance of relationships with India, China, and other distant powers showed that the kings understood that diplomatic relationships could create", "correct": "mutual interests.", "wrong": ["inevitable conflict.", "cultural isolation.", "total independence."] },
          { start: "The Parthian use of diplomacy with client kingdoms required demonstrating that Parthian protection was valuable and that the client would benefit more from loyalty than from", "correct": "resistance or rebellion.", "wrong": ["regional stability.", "economic cooperation.", "trade alliances."] }
        ]
      },
      {
        name: "Parthian Succession & Dynastic Politics",
        emoji: "👑",
        quotes: [
          { start: "Parthian succession disputes were common because the feudal system meant that powerful nobles could support different claimants and a weak king", "correct": "could be removed by the nobles.", "wrong": ["ruled without opposition.", "had absolute control.", "faced no noble influence."] },
          { start: "A Parthian king had to maintain the support of the major nobles or risk", "correct": "deposition or assassination.", "wrong": ["absolute rule.", "no opposition.", "eternal power."] },
          { start: "The Parthian practice of sometimes executing or blinding rival claimants served to eliminate the possibility of rivals using", "correct": "family connections.", "wrong": ["foreign alliances.", "gold.", "trade networks."] },
          { start: "The long reign of a successful Parthian king like Mithridates I was possible because he maintained military victories and demonstrated that his rule", "correct": "benefited the empire.", "wrong": ["was unnecessary.", "required no support.", "depended on chance alone."] }
        ]
      },
      {
        name: "Parthian Decline & Fall",
        emoji: "📜",
        quotes: [
          { start: "The weakening of Parthian power came from multiple sources: the rise of the Sassanid Persians, continuing conflict with Rome and", "correct": "the inherent limitations of the feudal system.", "wrong": ["complete stability.", "unified administration.", "sudden collapse."] },
          { start: "The inability of later Parthian kings to maintain unified action against the Sassanid challenge showed that the feudal system's decentralization, which gave strength in other contexts became a weakness when facing", "correct": "a centralized rival.", "wrong": ["peaceful merchants.", "farmers.", "isolated provinces."] },
          { start: "The final collapse of Parthian power to the Sassanids demonstrated that even successful empires that survive for centuries can decline when facing", "correct": "a more effectively organized rival.", "wrong": ["overwhelming enemies.", "unexpected invasions.", "internal weakness."] },
          { start: "The Parthian legacy included establishing that an empire based on feudal relationships could", "correct": "survive for centuries.", "wrong": ["collapse immediately.", "function without rulers.", "avoid all warfare."] },
          { start: "Ardashir I of the Sassanid dynasty overthrew the last Parthian king Artabanus IV in 224 CE, ending 500 years of Arsacid rule and demonstrating that the feudal system", "correct": "could not withstand a centralized revolutionary movement.", "wrong": ["was perfectly stable.", "collapsed only due to Rome.", "ended peacefully."] }
        ]
      }
    ]
  },
  {
    id: "seleucid",
    name: "Seleucid Empire",
    emoji: "🛕",
    color: 0x8b0000,
    colorHex: "#8b0000",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Seleucus I Nicator (As Recorded by Appian & Diodorus)",
        emoji: "👑",
        quotes: [
          { start: "I was appointed by Alexander to rule Babylon, and through my skill and determination, I expanded this into an empire stretching from the Mediterranean to", "correct": "India.", "wrong": ["the capital region.", "local provinces.", "a small kingdom."] },
          { start: "To maintain control of such vast territories, a king must establish cities, administrative centers, and a system of governance that allows distant regions to", "correct": "function semi-independently.", "wrong": ["be fully controlled.", "rely only on military rule.", "operate without any structure."] },
          { start: "The founding of cities like Antioch and Seleucia-on-the-Tigris served to create centers of Hellenistic culture and establish focal points", "correct":"for trade and military power.", "wrong": ["with no practical purpose.", "only for show.", "solely for defense."] },
          { start: "My dynasty's survival depended on balancing Greek culture with respect for local traditions because the empire governed diverse peoples", "correct": "with different customs, religions, and languages.", "wrong": ["under identical traditions.", "a single unified culture.", "with no adjustments."] },
          { start: "The ability to defeat rivals like Lysimachus and Antigonus Monophthalmus required not only military skill but also diplomacy, intelligence gathering, and", "correct": "willingness to form strategic alliances.", "wrong": ["pure military force.", "no strategy.", "no allies."] },
          { start: "A Seleucid king's authority came from demonstrating ability to maintain order, protect territories, expand influence, and", "correct": "provide stability.", "wrong": ["rely on inheritance alone.", "depend only on rituals.", "exercise power without responsibility."] }
        ]
      },
      {
        name: "Antiochus III the Great (Expansion & Power)",
        emoji: "🐘",
        quotes: [
          { start: "My campaigns to recover the eastern territories lost during the troubled times showed that a Seleucid king must be willing to take military action to", "correct": "maintain the empire's integrity and prestige.", "wrong": ["allow losses without fighting.", "rule without action.", "neglect far-off regions."] },
          { start: "The confrontation with Rome at Magnesia demonstrated that even a powerful Seleucid king could not successfully resist the rising power of Rome when Rome", "correct": "committed its full force.", "wrong": ["was weak and unprepared.", "lacked military skill.", "lacked organization."] },
          { start: "A Seleucid king's responsibilities included managing relationships with powerful neighbors through a combination of diplomacy, strategic marriages, military preparedness, and", "correct": "maintaining trade relationships.", "wrong": ["pure military domination.", "complete isolation.", "no negotiation."] },
          { start: "The extent of my campaigns across Asia demonstrated that a Seleucid king could not actually effectively administer and defend territories stretching from the Mediterranean to", "correct": "India.", "wrong": ["Australia.", "Scandinavia.", "Antarctica."] },
          { start: "My reign showed that the Seleucid Empire's vulnerability came from distance between center and periphery, the ambitions of powerful generals, and", "correct": "the rise of new powers like Rome.", "wrong": ["internal weakness.", "lack of military power.", "no real stability."] }
        ]
      },
      {
        name: "Seleucid Governance & Administration",
        emoji: "⚖️",
        quotes: [
          { start: "The Seleucid system of government required appointing governors and administrators because a single king could not personally oversee", "correct": "such vast and diverse territories.", "wrong": ["all regions alone.", "only the capital city.", "a single village."] },
          { start: "Seleucid kings maintained power by using a combination of Hellenistic administration, religious authority, military strength, and", "correct": "respect for local traditions.", "wrong": ["pure force.", "no respect for locals.", "centralized control alone."] },
          { start: "The Seleucid practice of founding Greek cities served multiple purposes: cultural expression, strategic military positions, and", "correct": "the spread of Hellenistic culture.", "wrong": ["economic decline.", "cultural isolation.", "administrative failure."] },
          { start: "Seleucid kings used the Ptolemaic dynasty of Egypt as both allies and rivals because both dynasties competed for influence in Syria, Palestine, and", "correct": "the eastern Mediterranean.", "wrong": ["Scandinavia.", "America.", "Australia."] },
          { start: "The integration of Mesopotamian and Persian administrative traditions into Seleucid governance showed that the empire adapted existing systems rather than imposing", "correct": "purely Greek administration.", "wrong": ["random governance.", "foreign abandonment.", "no administration."] }
        ]
      },
      {
        name: "Seleucid Military & Strategy",
        emoji: "⚔️",
        quotes: [
          { start: "The Seleucid military recruited from diverse regions, combining Macedonian heavy infantry, Iranian cavalry, and local troops, creating an army with varied", "correct": "skills and fighting styles", "wrong": ["uniform training.", "identical equipment.", "single tactical doctrine."] },
          { start: "The use of war elephants by Seleucid forces, inherited from Alexander's campaigns, served as psychological weapons and platforms for commanders giving advantages in", "correct": "specific terrain and situations.", "wrong": ["tax collection.", "diplomatic ceremonies.", "administrative decisions."] },
          { start: "Seleucid military reforms and innovations were necessary because they faced threats from the rising power of Rome, independent Hellenistic kingdoms, and", "correct": "local resistance movements.", "wrong": ["absence of warfare.", "pure dominance.", "no challenges."] },
          { start: "The loss of eastern territories to rising powers like Parthia and the loss of Syria to Egypt demonstrated that even strong military powers cannot maintain all territories when", "correct": "facing multiple determined opponents.", "wrong": ["they face no real opposition.", "no external threats exist.", "decline is unavoidable."] },
          { start: "Seleucid generals and kings who successfully maintained power understood that military victory must be followed by", "correct": "maintaining local support.", "wrong": ["abandoning governance.", "destroying cities.", "pure military rule."] }
        ]
      },
      {
        name: "Seleucid Hellenization & Cultural Policy",
        emoji: "🏛️",
        quotes: [
          { start: "The Seleucid policy of promoting Hellenistic culture through architecture, language, and education served to unite diverse conquered territories under a shared cultural framework and", "correct": "legitimize Greek rule.", "wrong": ["prevent administration.", "discourage governance.", "eliminate cities."] },
          { start: "The founding of cities with Greek names, temples to Greek gods, and gymnasiums demonstrated that Seleucid kings believed that Hellenistic culture was", "correct": "a tool to integrate diverse populations.", "wrong": ["unimportant.", "only for show.", "without effect."] },
          { start: "Generally the Seleucid approach to religion included tolerance for local cults, though Antiochus IV was a notable exception. This policy respected local populations and", "correct": "promoted a shared cultural identity.", "wrong": ["treated all gods the same.", "was done without purpose.", "suppressed local religious practices."] },
          { start: "The use of Greek as the administrative language of the Seleucid Empire facilitated communication across the empire and created a common language", "correct": "for educated elites and officials.", "wrong": ["with no real benefit.", "purely for pride.", "only to show prestige."] },
          { start: "The Seleucid promotion of philosophy, art, and literature through patronage served to enhance the prestige of Seleucid kings, attract talented people, and legitimize their rule through", "correct": "cultural achievement.", "wrong": ["war.", "destruction.", "anti-intellectualism."] }
        ]
      },
      {
        name: "Seleucid Economic Systems & Trade",
        emoji: "💰",
        quotes: [
          { start: "The Seleucid economy depended on control of trade routes between the Mediterranean, Mesopotamia, and", "correct": "Asia.", "wrong": ["Australia.", "America.", "Antarctica."] },
          { start: "Seleucid kings maintained economic power by controlling mints and establishing a standardized coinage because this allowed them to regulate commerce and", "correct": "collect taxes.", "wrong": ["gain no real advantage.", "serve only ceremonial purposes.", "have no economic impact."] },
          { start: "The Seleucid approach to taxation required establishing a balance between extracting sufficient revenue for the state while not", "correct": "driving regions to rebellion.", "wrong": ["overburdening the population.", "collecting nothing.", "treating everyone exactly the same."] },
          { start: "Seleucid cities benefited from their role as centers of trade because they could collect taxes on commerce and grow wealthy through", "correct": "commercial activity.", "wrong": ["isolation from trade.", "abandonment of markets.", "absence of commerce."] },
          { start: "The Seleucid control of spice routes and luxury goods trade allowed them to accumulate wealth that could be used for", "correct": "military campaigns.", "wrong": ["religious reforms.", "ceremonial rituals.", "artistic competitions."] }
        ]
      },
      {
        name: "Seleucid Philosophers & Intellectual Life",
        emoji: "📚",
        quotes: [
          { start: "Seleucid patronage of philosophers and scholars served the kings' interests by enhancing prestige, attracting talent, and promoting the idea that Seleucid rule was", "correct": "civilized and enlightened.", "wrong": ["economically neutral.", "politically irrelevant.", "accidentally harmful."] },
          { start: "The promotion of Greek philosophy, mathematics, and science in Seleucid cities contributed to the establishment of centers of learning that attracted", "correct": "scholars from across the known world.", "wrong": ["only local residents.", "merely tourists.", "people with no scholarly interest."] },
          { start: "Seleucid scholars built on the legacy of Alexander by preserving and developing knowledge in fields like mathematics, astronomy, medicine, geography, and", "correct": "philosophy.", "wrong": ["coin hoarding.", "palace intrigue.", "border raids."] },
          { start: "The use of Greek learning as a tool of governance demonstrated that Seleucid rulers understood that cultural and intellectual leadership could be as important as", "correct": "military power.", "wrong": ["economic collapse.", "random inheritance.", "geographic isolation."] }
        ]
      },
      {
        name: "Seleucid Relations with Subject Peoples",
        emoji: "🌍",
        quotes: [
          { start: "The Seleucid approach to governing diverse ethnic and religious groups required respecting local traditions, allowing local rulers to", "correct": "maintain power under Seleucid oversight.", "wrong": ["enforce cultural erasure.", "ignore local traditions.", "force total assimilation."] },
          { start: "The Seleucid treatment of Jerusalem and Judea showed the limits of cultural tolerance when efforts to impose Greek culture and religious practices on the Jewish population led to", "correct": "the Maccabean Revolt.", "wrong": ["absolute tolerance.", "no resistance.", "complete loyalty."] },
          { start: "The survival of Seleucid rule depended on the willingness of local elites to accept Seleucid authority in exchange for maintaining their local power and", "correct": "the ability to govern their people.", "wrong": ["complete submission.", "no local autonomy.", "forced cultural change."] },
          { start: "The Seleucid inability to fully assimilate distant territories like Bactria and Parthia demonstrated that vast empires cannot impose uniform culture on all subjects, and", "correct": "distant regions eventually seek independence.", "wrong": ["Seleucid power was unlimited.", "no resistance was possible.", "all territories were equal."] },
          { start: "Antiochus IV's attempt to Hellenize Jerusalem, including desecrating the Temple and banning Jewish practices, directly caused the Maccabean Revolt (167 BCE), showing that forced", "correct": "cultural assimilation provokes violent resistance.", "wrong": ["tolerance prevents all conflict.", "religious policy had no consequences.", "subject peoples accepted Greek culture easily."] }
        ]
      },
      {
        name: "Seleucid Decline & Historical Significance",
        emoji: "📜",
        quotes: [
          { start: "The decline of the Seleucid Empire resulted from a combination of factors: the rise of Rome, the loss of eastern territories, internal civil conflict, and", "correct": "the inability to effectively govern territories.", "wrong": ["military defeat alone.", "complete internal unity.", "foreign cultural influence."] },
          { start: "The Seleucid inability to maintain unity despite founding a vast empire showed that even effective governance systems cannot hold together such diverse territories indefinitely when", "correct": "facing external pressure.", "wrong": ["there is no leadership.", "borders do not matter.", "cities refuse to exist."] },
          { start: "The Seleucid legacy in the regions they ruled included the spread of Hellenistic culture, the founding of cities that continued as important centers, and the establishment of administrative systems that", "correct": "influenced later empires.", "wrong": ["quickly disappeared.", "left no trace.", "failed."] },
          { start: "The study of the Seleucid Empire demonstrates that even powerful Hellenistic kingdoms could not resist the rising power of Rome and the", "correct": "forces of regional independence.", "wrong": ["absence of conflict.", "stability of borders.", "decline of warfare."] }, 
          { start: "The Seleucid attempt to rule diverse territories from the Mediterranean to India was ultimately limited by the technology of the time (slow communication, difficult travel) and the", "correct": "distances involved.", "wrong": ["lack of military power.", "poor leadership.", "internal weakness."] },
          { start: "The Parthian Empire under Mithridates I conquered Media and Mesopotamia from the Seleucids by 141 BCE, demonstrating that the eastern territories were impossible to defend from both eastern and western", "correct": "threats simultaneously.", wrong: ["trade routes effectively.","religious traditions equally.","agricultural regions permanently."] }
        ]
      },
      {
        name: "Seleucid Dynastic Politics & Succession",
        emoji: "👑",
        quotes: [
          { start: "Seleucid succession often led to civil conflict because multiple claimants competed for power and generals and officials chose sides based on", "correct": "their interests.", "wrong": ["divine intervention.", "unanimous agreement.", "peaceful transitions."] },
          { start: "The use of dynastic marriages to create alliances with other Hellenistic kingdoms showed that Seleucid kings understood that political relationships based on family ties could be as important as", "correct": "military alliances.", "wrong": ["economic isolation.", "personal beliefs.", "no strategy."] },
          { start: "The co-rule system used by some Seleucid kings (where a son ruled alongside his father) served to prepare the heir for rule, maintain continuity, and", "correct": "prevent rival claimants from gaining power during transition.", "wrong": ["weaken central authority.", "had no real purpose.", "create conflict."] },
          { start: "The removal of a Seleucid king from power by generals or rivals required demonstrating that he was incompetent, unable to defend the realm, or", "correct": "had lost the support of powerful factions.", "wrong": ["had too many foreign allies.", "was too generous with wealth.", "had expanded the empire too far."] }
        ]
      },
      {
        name: "Seleucid Military Innovations & Adaptation",
        emoji: "⚔️",
        quotes: [
          { start: "The Seleucid military developed tactics to counter Roman legions because Roman military organization and discipline required new strategies to", "correct": "remain competitive.", "wrong": ["defeat Rome easily.", "avoid conflict.", "retreat from battle."] },
          { start: "The use of heavy cavalry and specialized units showed that Seleucid generals understood that effective warfare required diverse unit types that could work together rather than", "correct": "relying on a single type of soldier.", "wrong": ["using only cavalry.", "ignoring specialization.", "focusing on numbers alone."] },
          { start: "The Seleucid maintenance of a navy served to protect trade routes, contest control of maritime regions, and", "correct": "project power beyond land territories.", "wrong": ["had little value.", "was largely symbolic.", "proved unnecessary."] }
        ]
      }
    ]
  },
  {
    id: "celtic",
    name: "Celtic Tribes",
    emoji: "🌿",
    color: 0x2e7d32,
    colorHex: "#2e7d32",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Chieftains & Celtic Leadership",
        emoji: "👑",
        quotes: [
          { start: "A Celtic chieftain's authority came from his ability to gather warriors, provide protection, and", "correct": "distribute wealth among his followers.", "wrong": ["inherit position without challenge.", "rule unopposed.", "have no rivals."] },
          { start: "Celtic tribes remained independent and often in conflict with each other because each chieftain sought to expand territory, gain prestige, and", "correct": "accumulate treasure and followers.", "wrong": ["unity was their goal.", "no ambition existed.", "they rejected warfare."] },
          { start: "A Celtic leader who lost battles or failed to protect his people would likely lose his warriors' loyalty and", "correct": "be replaced by a more capable rival.", "wrong": ["retain power indefinitely.", "rule unquestioned.", "gain more authority."] },
          { start: "Celtic warfare between tribes served important purposes: gaining cattle, slaves, and treasure; acquiring prestige; and establishing dominance and", "correct": "the right to levy tribute.", "wrong": ["purely religious devotion.", "artistic expression.", "diplomatic negotiation."] },
          { start: "The Celtic value system emphasized personal bravery and honor because a chieftain's power depended on the loyalty of warriors attracted by his reputation for courage and", "correct": "generosity.", "wrong": ["isolation.", "secrecy.", "silence."] },
          { start: "Celtic chieftains used the redistribution of plunder and wealth to build and maintain relationships with their warriors and establish", "correct": "their status and authority.", "wrong": ["written constitutions.", "astronomical maps.", "agricultural calendars."] },
          { start: "The Celtic practice of taking the heads of enemies as trophies reflected their belief that victory and dominance were demonstrated through the visible", "correct": "conquest of rivals.", "wrong": ["sharing of crops.", "construction of roads.", "writing of poetry."] },
          { start: "Celtic clients—warriors and followers who swore loyalty to a chief—received protection and a share of plunder in exchange for", "correct": "military service.", "wrong": ["nothing.", "equal status.", "freedom to leave."] }
        ]
      },
      {
        name: "Celtic Druids & Spiritual Leaders",
        emoji: "🕯️",
        quotes: [
          { start: "Celtic druids held significant power in tribal societies because they controlled religious knowledge, interpreted omens, conducted sacrifices, and", "correct": "legitimized a chieftain's rule.", "wrong": ["ruled directly.", "had no political influence.", "were purely spiritual."] },
          { start: "The training of druids required years of study in poetry, law, astronomy, and natural philosophy because they", "correct": "served as judges.", "wrong": ["had purely religious purposes.", "had no practical knowledge.", "had only ritual knowledge."] },
          { start: "Roman writers claimed Celtic religious practices included human sacrifice, though archaeological evidence remains debated. Romans believed this offering would", "correct": "appease the gods.", "wrong": ["serve no purpose.", "be rejected by the community.", "be considered a sin."] },
          { start: "The Celtic belief in an afterlife where warriors continued to feast and fight influenced their society by making warriors", "correct": "less fearful of death.", "wrong": ["focused only on farming.", "dependent on trade laws.", "uninterested in leadership."] },
          { start: "Celtic druids were respected and protected even between warring tribes because they were seen as neutral arbiters,", "correct": "keepers of law and tradition.", "wrong": ["military commanders.", "foreign tax collectors.", "traveling merchants."] },
          { start: "The Celtic understanding of nature included belief in sacred groves and animal spirits because the natural world was understood as inhabited by divine forces that", "correct": "required respect and ritual propitiation.", "wrong": ["were only poetic.", "had no real spiritual significance.", "were purely decorative."] },
          { start: "Celtic priests conducted divination by observing bird flight and examining animal entrails in order to determine the gods' will regarding important decisions", "correct": "about war, peace, and governance.", "wrong": ["only for entertainment.", "only about farming tools.", "only about household chores."] }
        ]
      },
      {
        name: "Celtic Warriors & Warfare",
        emoji: "⚔️",
        quotes: [
          { start: "Celtic warriors developed a reputation across the Mediterranean world because they", "correct": "were willing to challenge larger armies.", "wrong": ["had superior technology.", "were naturally superior.", "rejected organized tactics."] },
          { start: "Celtic fighting style emphasized individual prowess and single combat because their culture valued personal honor and", "correct": "bravery.", "wrong": ["they lacked discipline.", "they were disorganized.", "tactics were unimportant."] },
          { start: "Celtic warriors adorned themselves with torcs (metal necklaces), elaborate shields, and fine weapons as displays of wealth, status, and", "correct": "their position as elite warriors within the tribe.", "wrong": ["trade accounting.", "agricultural labor.", "legal scholarship."] },
          { start: "The Celtic practice of challenging enemies to single combat before general battle served to", "correct": "demonstrate a warrior's courage and skill.", "wrong": ["delay warfare.", "show cowardice.", "serve no purpose."] },
          { start: "Celtic warriors were rewarded for bravery with wealth, cattle, and prestige because the culture believed that martial excellence and courage were the highest", "correct": "virtues.", "wrong": ["currencies.", "inventions.", "landscapes."] },
          { start: "The Celtic use of chariots in warfare gave them advantages in speed and positioning because the elevated platform allowed warriors to survey the battlefield and", "correct": "strike from unexpected angles.", "wrong": ["predict weather changes.", "offered no real advantage.", "harvest crops more efficiently."] },
          { start: "Some Celtic warriors, particularly the Gaesatae of Gaul, fought without armor because they believed that", "correct": "courage could substitute for protection.", "wrong": ["they had no armor available.", "armor was forbidden by law.", "metal was considered sacred."] }
        ]
      },
      {
        name: "Celtic Bards & Oral Tradition",
        emoji: "📜",
        quotes: [
          { start: "Celtic bards held important social positions because they preserved tribal history, composed poetry honoring warriors, and had the power to", "correct": "praise or satirize chieftains.", "wrong": ["command armies.", "issue taxes.", "build fortresses."] },
          { start: "The power of a Celtic bard's satire was so feared that", "correct": "a bard's harsh words could damage a chieftain's reputation.", "wrong": ["bards had no influence.", "satire served no purpose.", "poetry was ignored."] },
          { start: "Celtic oral tradition preserved knowledge about law, genealogy, history, and mythology because bards trained for years to memorize vast amounts of material essential to tribal identity and", "correct": "governance.", "wrong": ["industrial production.", "astronomical prediction.", "agricultural irrigation."] },
          { start: "The stories told by Celtic bards about gods, heroes, and ancestors served to teach values, explain natural phenomena, justify the social hierarchy, and", "correct": "inspire warriors.", "wrong": ["replace farming.", "eliminate trade.", "control weather."] },
          { start: "Celtic poetry often used riddles, metaphor, and complex language because the difficulty of the language demonstrated the bard's skill and", "correct": "made the knowledge seem more valuable and sacred.", "wrong": ["showed lack of clarity.", "had no real purpose.", "done only to confuse."] },
          { start: "The learned classes of Celtic society—druids (priests/philosophers), fili (poets), and brehons (judges)—each held specific roles because.", "wrong": ["no distinction existed.", "all were equal.", "roles were ceremonial."] },
          { start: "A Celtic warrior's greatest desire was to be immortalized in the bards' songs because", "correct": "a warrior's fame depended on being remembered.", "wrong": ["material wealth was paramount.", "no real value existed.", "individual glory mattered less."] }
        ]
      },
      {
        name: "Celtic Trade & Economic Systems",
        emoji: "💰",
        quotes: [
          { start: "Celtic tribes participated in trade across Europe because they valued foreign goods like wine, olive oil, and luxury items that demonstrated", "correct": "status and could be redistributed.", "wrong": ["only economic gain.", "desire for self-sufficiency.", "no social value."] },
          { start: "Celtic metalwork—swords, shields, torcs, and jewelry—was highly valued across the Mediterranean because Celtic craftspeople possessed superior techniques and created items of both practical and", "correct": "artistic excellence.", "wrong": ["geological mapping.", "astronomical prediction.", "agricultural irrigation."] },
          { start: "The Celtic economy was based on cattle wealth because cattle were both a source of food and a mobile", "correct": "tradable asset.", "wrong": ["written law code.", "metal currency system.", "religious symbol."] },
          { start: "Celtic trading relationships with Mediterranean civilizations brought wealth to Celtic chieftains through the exchange of metals, agricultural products, oil, and", "correct": "manufactured goods.", "wrong": ["lunar cycles.", "religious artifacts.", "ocean tides."] },
          { start: "The Celtic value placed on gift-giving and wealth redistribution served to build and maintain relationships between chieftains and their warriors, and", "correct": "establish alliances between tribes.", "wrong": ["eliminate warfare entirely.", "prevent trade networks.", "remove social hierarchy."] }
        ]
      },
      {
        name: "Celtic Society & Social Structure",
        emoji: "🏛️",
        quotes: [
          { start: "Celtic society was divided into distinct classes: warriors, druids, craftspeople, and commoners because this hierarchy allowed for specialization and coordination while preserving", "correct": "tribal identity and values.", "wrong": ["pure domination.", "random division.", "complete equality."] },
          { start: "Celtic kinship systems were complex, with loyalty to family and tribe serving as the foundation of social organization because in a society without central government, kinship networks provided", "correct": "security, obligation, and identity.", "wrong": ["no real structure.", "no support or order.", "no practical value."] },
          { start: "Celtic women could own property, divorce, and participate in legal proceedings because Celtic culture recognized women's economic value and", "correct": "their role in maintaining family.", "wrong": ["men were weak.", "women ruled society.", "had no legal identity."] },
          { start: "Fosterage helped create bonds, educate, and", "correct": "build networks of loyalty.", "wrong": ["served no purpose.", "was only symbolic.", "had no lasting impact."] },
          { start: "Celtic honor codes required that debts be repaid, oaths be honored, and hospitality be offered because in a decentralized society, reputation and trust were", "correct": "essential to survival and success.", "wrong": ["purely ceremonial.", "strictly legal.", "enforced by law."] },
          { start: "Historical records describe Celtic queens like Boudicca of the Iceni leading armies against Rome, demonstrating that some Celtic women held", "correct": "significant political and military authority.", "wrong": ["no real power.", "only ceremonial roles.", "authority only in peacetime."] }
        ]
      },
      {
        name: "Celtic Religion & Cosmology",
        emoji: "🌌",
        quotes: [
          { start: "Celtic religion included many nature-linked gods because they believed divine forces inhabited the natural world and", "correct": "required propitiation.", "wrong": ["were controlled by humans.", "existed only in written texts.", "were just symbolic."] },
          { start: "Celtic sacred sites—springs, groves, hillforts—were chosen because they were believed to be places where the boundary between the human and divine worlds was", "correct": "thin.", "wrong": ["permanently sealed.", "artificially constructed.", "completely absent."] },
          { start: "The Celtic belief in an Otherworld—an idealized realm of eternal youth and plenty—influenced their culture by making them", "correct": "less fearful of death.", "wrong": ["focused only on trade.", "dependent on written law codes.", "uninterested in agriculture."] },
          { start: "Celtic head-hunting and the preservation of enemy heads reflected their belief that the head contained the soul and that keeping an enemy's head", "correct": "gave one power over them.", "wrong": ["was purely for intimidation.", "had no real spiritual belief.", "was pure savagery."] },
          { start: "The Celtic festival calendar—Samhain, Beltane, Imbolc, Lughnasadh—marked important agricultural and spiritual transitions because these celebrations", "correct": "aligned human society with natural cycles.", "wrong": ["were purely for entertainment.", "had no real purpose.", "were random celebrations."] }
        ]
      },
      {
        name: "Celtic Resistance & Identity",
        emoji: "🛡️",
        quotes: [
          { start: "Celtic tribes resisted Roman conquest despite military disadvantages because", "correct": "they valued their independence.", "wrong": ["they had superior military power.", "Rome was weak.", "they were united."] },
          { start: "The Celtic adoption of Roman administrative structures and culture in some areas shows that", "correct": "Celtic peoples were pragmatic.", "wrong": ["they completely abandoned tradition.", "Rome conquered through force alone.", "no Celtic culture survived."] },
          { start: "Celtic language and cultural practices survived Roman occupation in areas like Ireland because", "correct": "those regions were never fully conquered.", "wrong": ["Roman rule was weak.", "Celts were superior.", "no real culture survived."] },
          { start: "The Celtic response to external pressures—sometimes fighting, sometimes trading, sometimes adapting—shows", "correct": "that Celtic societies were diverse.", "wrong": ["that all Celts responded identically.", "purely military resistance.", "no cultural adaptation."] },
          { start: "The sack of Rome by Gauls in 390 BCE showed the Mediterranean world that Celtic warriors were a", "correct": "serious military force capable of defeating major powers.", "wrong": ["minor regional threat.", "purely defensive people.", "culturally inferior society."] }
        ]
      },
      {
        name: "Celtic Craftsmanship & Artistry",
        emoji: "🎨",
        quotes: [
          { start: "The distinctive Celtic artistic style—spirals, interlace, animal motifs—appears across Europe because this style was shared and transmitted through Celtic", "correct": "craftspeople.", "wrong": ["astronomers.", "tax collectors.", "sailors."] },
          { start: "Celtic metalworkers achieved fame across the Mediterranean for their ability to create weapons, jewelry, and", "correct": "vessels of superior quality.", "wrong": ["agricultural maps.", "written legal codes.", "artistic sketches."] },
          { start: "The symbols and patterns in Celtic art—the triquetra, the spiral, animal motifs—likely held spiritual significance because Celtic culture used imagery to represent sacred concepts and", "correct": "protect the wearer.", "wrong": ["measure land boundaries.", "record tax payments.", "had no real meaning."] },
          { start: "Celtic craftspeople were highly valued by chieftains because skilled artisans could create goods that displayed", "correct": "status.", "wrong": ["crop yields.", "ocean routes.", "chaos."] }
        ]
      },
      {
        name: "Celtic Law & Justice Systems",
        emoji: "⚖️",
        quotes: [
          { start: "Celtic law, preserved in Irish law texts, shows that legal systems existed because societies needed mechanisms to resolve disputes and", "correct": "maintain social order.", "wrong": ["prevent trade entirely.", "pure force determined justice.", "control weather patterns."] },
          { start: "Celtic brehon laws (from the word 'brehon' meaning judge) established fines and compensation for injuries because the society valued restitution and restoration of", "correct": "relationships.", "wrong": ["no justice system.", "purely brutal punishment.", "no real law."] },
          { start: "The Celtic use of oath-taking in legal proceedings reflected their belief that one's word and honor were sacred, and breaking an oath brought divine punishment and", "correct": "social disgrace.", "wrong": ["power.", "peace.", "no real consequences."] },
          { start: "Celtic judges held high status because they possessed knowledge of complex law and custom, and their decisions were essential to maintaining", "correct": "peace and order.", "wrong": ["chaos.", "constant warfare.", "ocean navigation."] },
          { start: "Irish Brehon law texts, preserved in manuscripts like the Senchas Már, are among the most detailed records of Celtic society because they document", "correct": "property rights, family law, and social obligations.", "wrong": ["military tactics only.", "religious ceremonies only.", "trade routes only."] }
        ]
      }
    ]
  },
  {
    id: "mississippian",
    name: "Mississippian Culture",
    emoji: "⛺",
    color: 0x795548,
    colorHex: "#795548",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Chiefs & Leaders - Archaeological & Documentary Evidence",
        emoji: "👑",
        quotes: [
          { start: "Mississippian chiefdoms were organized hierarchically with a paramount chief at the top because this system allowed for mobilization of labor and", "correct": "unified response to external threats.", "wrong": ["pure domination through fear.", "no real authority.", "equal distribution of power."] },
          { start: "A Mississippian leader's authority came from control of trade networks and", "correct": "the ability to organize large-scale projects.", "wrong": ["conquest alone.", "supernatural power.", "inherited privilege alone."] },
          { start: "Mississippian chiefdoms maintained power by controlling access to valuable resources such as shell, copper, mica, and", "correct": "manufactured goods.", "wrong": ["isolated villages.", "distant foreign lands.", "rival empires."] },
          { start: "The Great Sun (the paramount chief of Natchez and other Mississippian societies) was expected to coordinate ceremonies and", "correct": "ensure the prosperity of the people.", "wrong": ["rule through fear.", "isolate in the palace.", "have no practical duties."] },
          { start: "Mississippian chiefdoms expanded their influence by establishing trade relationships and", "correct": "demonstrating military strength.", "wrong": ["peaceful expansion only.", "no expansion occurred.", "conquest for its own sake."] },
          { start: "A Mississippian chief who failed to provide for his people or protect them from enemies would likely", "correct": "lose support and be replaced or overthrown.", "wrong": ["retain power indefinitely.", "rule unopposed.", "be honored for strength."] },
          { start: "The role of secondary chiefs under the paramount chief was to administer districts, collect tribute, ensure labor service, and serve as intermediaries between the paramount chief and", "correct": "commoners.", "wrong": ["ocean traders.", "celestial spirits.", "rule independently."] },
          { start: "Mississippian societies valued leaders who demonstrated ability to accumulate and redistribute wealth and", "correct": "goods.", "wrong": ["only military prowess.", "rejection of hierarchy.", "equal treatment of all."] }
        ]
      },
      {
        name: "Mississippian Mound Building & Engineering",
        emoji: "🏗️",
        quotes: [
          { start: "The construction of massive earthen mounds at sites like Cahokia required understanding of construction techniques and", "correct": "geometry.", "wrong": ["oceanography.", "meteorology.", "metallurgy."] },
          { start: "The largest mound at Cahokia—Monks Mound—demonstrates that Mississippian societies possessed the ability to", "correct": "mobilize thousands of workers.", "wrong": ["prevent population growth.", "eliminate social organization.", "avoid agriculture."] },
          { start: "The arrangement of mounds in plazas at Mississippian centers like Cahokia shows that architects understood spatial planning and the integration of", "correct": "sacred and civic spaces.", "wrong": ["random placement.", "mechanical engineering systems.", "underground mining systems."] },
          { start: "Mississippian mound-building served multiple purposes: platforms for elite residences and temples, markers of elite status, and ritual centers for", "correct": "ceremonies.", "wrong": ["defensive purposes.", "international trade hubs.", "naval ports."] },
          { start: "The labor required to build Mississippian mounds came from the combined effort of commoners under the direction of", "correct": "elite leaders.", "wrong": ["slavery alone.", "voluntary work only.", "conquest forced labor."] },
          { start: "The precision of Mississippian mound construction, with specific angles and dimensions, indicates that", "correct": "builders understood mathematics, could measure and plan.", "wrong": ["construction was random.", "no planning existed.", "only ritual knowledge was used."] },
          { start: "The location of Mississippian centers near rivers shows that leaders understood the importance of water access for", "correct": "transportation and trade.", "wrong": ["only ceremonial purposes.", "no practical value.", "defense alone."] },
          { start: "Cahokia Woodhenge—a circle of wooden posts used to track the sun—demonstrates that Mississippian peoples had sophisticated knowledge of", "correct": "solar cycles and seasonal timing.", "wrong": ["ocean navigation.", "metallurgy.", "written mathematics."] }
        ]
      },
      {
        name: "Mississippian Religious & Ceremonial Systems",
        emoji: "🕯️",
        quotes: [
          { start: "Mississippian religious practices centered on a cosmology that included", "correct": "spirits associated with natural phenomena.", "wrong": ["only one god.", "no complex beliefs.", "purely shamanic practices."] },
          { start: "The Southeastern Ceremonial Complex—shared symbolism and rituals across Mississippian societies—suggests that these cultures shared", "correct": "common religious beliefs.", "wrong": ["identical governments.", "no shared beliefs.", "modern political parties."] },
          { start: "Mississippian priests or spiritual leaders likely held significant power because they were believed to communicate with spiritual forces that", "correct": "ensured prosperity.", "wrong": ["enforced written laws.", "had no real authority.", "were powerless."] },
          { start: "The use of specific symbols—the cross-in-circle, the eye motif, the woodpecker—in Mississippian art suggests that these symbols held", "correct": "spiritual meaning.", "wrong": ["only decorative value.", "no cultural significance.", "random artistic choice."] },
          { start: "Mississippian ceremonies likely took place in plazas and on mounds because", "correct": "large public gatherings reinforced social hierarchy.", "wrong": ["only private rituals mattered.", "ceremony served no purpose.", "religion was personal."] },
          { start: "The artifacts found in Mississippian burial mounds—shell, copper, mica, feather headdresses—indicate that the culture believed", "correct": "in an afterlife.", "wrong": ["only in agriculture.", "only in trade routes.", "only in warfare."] },
          { start: "Mississippian religious specialists used knowledge of water cycles to predict seasons and", "correct": "guide ceremonial timing.", "wrong": ["control weather patterns.", "build irrigation systems.", "navigate ocean voyages."] }
        ]
      },
      {
        name: "Mississippian Trade & Economic Networks",
        emoji: "💰",
        quotes: [
          { start: "Mississippian societies controlled trade routes because this allowed them to accumulate wealth and maintain power over", "correct": "surrounding regions.", "wrong": ["isolated villages.", "distant foreign lands.", "rival empires."] },
          { start: "The distribution of Mississippian artifacts across vast distances shows that these cultures participated in", "correct": "extensive trade networks.", "wrong": ["agricultural experiments.", "seasonal hunting.", "isolated local production."] },
          { start: "The control of copper sources and the ability to produce copper artifacts gave Mississippian elites", "correct": "valuable goods for redistribution.", "wrong": ["no advantage.", "no exchange value.", "purely decorative value."] },
          { start: "Mississippian leaders used redistribution of trade goods to build and", "correct": "maintain political relationships.", "wrong": ["avoid agriculture.", "eliminate social roles.", "prevent community growth."] },
          { start: "Shell from the Gulf Coast, found in Mississippian centers far to the north, demonstrates that", "correct": "trade networks connected distant regions.", "wrong": ["conquest brought all goods.", "no real trade occurred.", "local resources only."] }
        ]
      },
      {
        name: "Mississippian Urban Planning & Settlement",
        emoji: "🏘️",
        quotes: [
          { start: "Mississippian centers like Cahokia were organized with mounds surrounding a central plaza because this design", "correct": "created spaces for ceremonies.", "wrong": ["prevented agriculture.", "eliminated trade routes.", "discouraged population growth."] },
          { start: "The size of Cahokia at its peak—with thousands of residents, extensive suburbs, and surrounding farmland—shows that Mississippian societies had", "correct": "the ability to organize large urban populations.", "wrong": ["no real cities.", "primitive settlements.", "no organization."] },
          { start: "The location of elite residences on mounds separated from commoner housing reflects", "correct": "a hierarchical society.", "wrong": ["equal housing.", "no hierarchy.", "random arrangement."] },
          { start: "Mississippian agricultural villages and farms surrounding urban centers provided", "correct": "food surplus.", "wrong": ["only local food.", "no surplus.", "independence."] },
          { start: "The roads and pathways connecting Mississippian sites show that these centers", "correct": "communicated with each other.", "wrong": ["were built only for decoration.", "were used only by animals.", "had no transportation purpose."] }
        ]
      },
      {
        name: "Mississippian Agriculture & Food Systems",
        emoji: "🌾",
        quotes: [
          { start: "Mississippian societies depended on maize as their primary crop, supplemented by beans, squash, hunting and, squash, supplemented by hunting and", "correct": "fishing", "wrong": ["mining.", "imports alone.", "metalworking."] },
          { start: "The agricultural surplus produced by Mississippian farmers allowed for support of", "correct": "non-agricultural workers.", "wrong": ["only hunters.", "isolated households.", "seasonal visitors."] },
          { start: "Mississippian farmers understood the local environment well enough to", "correct": "cultivate crops suited to river valley climates.", "wrong": ["use no knowledge.", "struggle with crops.", "have no skill."] },
          { start: "The reliance on maize agriculture made Mississippian societies vulnerable to", "correct": "drought and crop failure.", "wrong": ["no environmental stress.", "complete stability.", "no consequences to failure."] },
          { start: "Mississippian storage of corn and other foods allowed for survival through", "correct": "seasons of scarcity.", "wrong": ["wasteful accumulation.", "no practical benefit.", "purely ceremonial storage."] }
        ]
      },
      {
        name: "Mississippian Craftsmanship & Artistry",
        emoji: "🎨",
        quotes: [
          { start: "The high quality and distinctive style of Mississippian pottery indicates that specialized craftspeople possessed", "correct": "advanced techniques.", "wrong": ["no skill.", "random production.", "no specialized knowledge."] },
          { start: "The elaborate shell work, copper work, and stone carving found in Mississippian sites shows that artisans", "correct": "held important positions.", "wrong": ["were not part of society.", "worked only with wood.", "avoided creating art."] },
          { start: "The symbols and motifs repeated in Mississippian art—crosses, eyes, feathers—suggest that a shared religious tradition", "correct": "united these cultures.", "wrong": ["had no meaning.", "was purely accidental.", "existed only locally."] },
          { start: "The production of shell gorgets (ornaments) by Mississippian artisans indicates that these items held", "correct": "high value.", "wrong": ["decorative ornaments only.", "no exchange value.", "without cultural meaning."] }
        ]
      },
      {
        name: "Mississippian Social Organization & Hierarchy",
        emoji: "🏛️",
        quotes: [
          { start: "Mississippian societies were organized into distinct social classes: elites, priests, craftspeople, farmers, and warriors because", "correct": "this hierarchy allowed for specialization of complex tasks.", "wrong": ["it prevented any trade.", "it removed all leadership roles.", "it eliminated farming."] },
          { start: "Elite burial mounds containing valuable goods suggest that Mississippian societies believed in", "correct": "an afterlife.", "wrong": ["no beliefs about death.", "pure materialism.", "no social distinction."] },
          { start: "The concentration of wealth and resources among Mississippian elites shows that these individuals controlled", "correct": "production and trade.", "wrong": ["wealth.", "solar eclipses.", "animal migration routes."] },
          { start: "Mississippian warriors, distinct from other members of society, served to", "correct": "defend the chiefdom.", "wrong": ["manage agricultural irrigation.", "conduct astronomical calculations.", "write legal documents."] }
        ]
      },
      {
        name: "Mississippian Warfare & Political Relations",
        emoji: "⚔️",
        quotes: [
          { start: "Mississippian chiefdoms competed with each other through warfare because conquest and tribute collection increased a chief's wealth and", "correct": "power.", "wrong": ["honor.", "economic motive.", "random conflict."] },
          { start: "The evidence of palisades (defensive walls) around some Mississippian centers shows that", "correct": "warfare between chiefdoms was real.", "wrong": ["trade was the only activity.", "cities were uninhabited.", "agriculture was not practiced."] },
          { start: "Mississippian chiefdoms maintained power through a combination of military strength and", "correct": "the ability to redistribute wealth.", "wrong": ["random chance.", "isolation from trade.", "refusal to farm."] },
          { start: "The decline of some Mississippian chiefdoms may have resulted from", "correct": "internal conflict or loss of trade networks.", "wrong": ["no real reason.", "peaceful dissolution.", "divine intervention."] }
        ]
      },
      {
        name: "Mississippian Cosmology & Worldview",
        emoji: "🌌",
        quotes: [
          { start: "Mississippian cosmology included a three-tiered universe: upper world (sky, celestial bodies), middle world (humans), and", "correct": "lower world.", "wrong": ["mythology.", "no real worldview.", "random beliefs."] },
          { start: "The importance of celestial observation in Mississippian culture—with mounds possibly aligned to celestial events—shows that these societies understood", "correct": "astronomy.", "wrong": ["metallurgy.", "linguistics.", "pharmacology."] },
          { start: "Mississippian societies understood natural cycles and seasonal changes because they", "correct": "depended on agriculture.", "wrong": ["had no real knowledge.", "relied only on luck.", "ignored environmental patterns."] },
          { start: "The Mississippian belief that natural phenomena had spiritual causes reflects a worldview where humans, nature, and the spiritual realm were", "correct": "interconnected.", "wrong": ["unrelated.", "artificially separated.", "purely mechanical."] }
        ]
      },
      {
        name: "Mississippian Decline & Historical Legacy",
        emoji: "📜",
        quotes: [
          { start: "The decline of major Mississippian chiefdoms before European contact was likely caused by drought, environmental stress, and", "correct": "internal political conflict.", "wrong": ["European disease.", "lunar cycles.", "volcanic eruptions."] },
          { start: "The abandonment of Cahokia and other major centers shows that even advanced civilizations are vulnerable to", "correct": "environmental change.", "wrong": ["digital communication.", "weakness from the start.", "inevitable decline."] },
          { start: "The Mississippian legacy influenced later Native American societies in the region through", "correct": "memory of former centers of power.", "wrong": ["European written records.", "industrial manufacturing systems.", "ocean navigation routes."] },
          { start: "The study of Mississippian culture demonstrates that hierarchical systems existed in pre-Columbian", "correct": "North America.", "wrong": ["Europe.", "Africa.", "Scandinavia."] },
          { start: "When Hernando de Soto's expedition encountered Mississippian chiefdoms in 1539-1542, they found societies already in decline, suggesting that collapse", "correct": "preceded European contact.", "wrong": ["was caused entirely by Europeans.", "never really happened.", "occurred only after colonization."] }
        ]
      }
    ]
  },
  {
    id: "iroquois",
    name: "Iroquois Confederacy",
    emoji: "🍁",
    color: 0x2e7d32,
    colorHex: "#2e7d32",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Chiefs & Leaders - Documented Historical Records",
        emoji: "👑",
        quotes: [
          { start: "The Great Law of Peace established that decisions must be made by consensus because a united people are stronger than", "correct": "a divided one.", "wrong": ["a fast-moving one.", "a traveling one.", "a wealthy one."] },
          { start: "A leader of the Haudenosaunee is expected to listen to the voices of his people because his role is to", "correct": "serve the interests of the nation.", "wrong": ["accumulate personal wealth.", "dominate through fear.", "rule without accountability."] },
          { start: "The Iroquois Confederacy united five nations—Mohawk, Oneida, Onondaga, Cayuga, and Seneca—by establishing a system where", "correct": "each nation retained autonomy.", "wrong": ["one nation ruled all others.", "warfare was constant.", "no unity existed."] },
          { start: "The Haudenosaunee practice of allowing sachems (peace chiefs) to be removed by the women of their clan if they failed to lead properly demonstrates that accountability to the people was built into", "correct": "the governing system.", "wrong": ["personal wealth.", "military strategy.", "trade agreements."] },
          { start: "The Iroquois understanding of leadership includes the principle that a chief must consider the impact of decisions on", "correct": "seven generations to come.", "wrong": ["immediate profits.", "foreign alliances.", "military victories."] },
          { start: "The council fire of the Haudenosaunee, kept burning at Onondaga, symbolizes that decisions made together represent", "correct": "all five nations.", "wrong": ["only one clan.", "foreign governments.", "individual families."] },
          { start: "Iroquois leaders who made decisions without consulting the people risked", "correct": "losing their position and authority.", "wrong": ["gaining more power.", "being honored for strength.", "strengthening their leadership."] },
          { start: "The Great Law of Peace provided mechanisms for resolving disputes between nations because the Haudenosaunee understood that", "correct": "internal conflict weakens the confederacy.", "wrong": ["conflict is inevitable.", "war strengthens nations.", "peaceful resolution is weakness."] }
        ]
      },
      {
        name: "Haudenosaunee Governance & The Great Law of Peace",
        emoji: "⚖️",
        quotes: [
          { start: "The Great Law of Peace is built on the principle that all people are born with equal rights because", "correct": "the Creator gave these rights to all humans.", "wrong": ["some are naturally superior.", "kings must rule.", "hierarchy is natural."] },
          { start: "The three principles of the Haudenosaunee—peace, justice, and power—work together to create a system where", "correct": "strength serves justice.", "wrong": ["power is used for domination.", "justice serves the powerful.", "peace means submission."] },
          { start: "The Iroquois Confederacy inspired later democratic systems because it demonstrated that representative government with checks on power could create", "correct": "stability and peace.", "wrong": ["constant conflict.", "unlimited authority.", "hereditary dictatorship."] },
          { start: "The Haudenosaunee required unanimous consent for major decisions because they believed that", "correct": "decisions supported by all nations are stronger.", "wrong": ["majority rule is better.", "quick decisions are best.", "consensus is impossible."] },
          { start: "The Great Law of Peace established that each nation would maintain its own territory and govern its own people while", "correct": "respecting the autonomy and decisions of the other nations.", "wrong": ["surrendering all power to a central authority.", "allowing one nation to dominate.", "eliminating local governance."] },
          { start: "The Iroquois practice of taking decisions to the whole people, not just elites, shows that they valued", "correct": "the wisdom of all members of the nation.", "wrong": ["only leadership opinion.", "pure democracy without structure.", "the opinions of warriors alone."] },
          { start: "The role of the Onondaga nation as keepers of the council fire demonstrates that even within a confederacy, one group can hold a neutral position that", "correct": "serves all.", "wrong": ["dominates all others.", "collects tribute from others.", "controls military forces."] },
          { start: "The Tuscarora nation joined the Haudenosaunee as the sixth nation in 1722, showing that the confederacy", "correct": "could expand through peaceful inclusion.", "wrong": ["never changed its structure.", "rejected all new members.", "expanded only through conquest."] }
        ]
      },
      {
        name: "Haudenosaunee Women & the Clan Mothers",
        emoji: "👩",
        quotes: [
          { start: "In Iroquois society, women hold significant power because they control the cultivation of corn and food and", "correct": "make major decisions.", "wrong": ["lead military campaigns.", "manage foreign diplomacy.", "enforce taxation laws."] },
          { start: "The Clan Mothers of the Haudenosaunee have the authority to choose sachems (peace chiefs) and remove them from office because", "correct": "women are seen as the source of life.", "wrong": ["men are weak.", "women are superior in all ways.", "it is ceremonial only."] },
          { start: "Iroquois women's role in agriculture—cultivating the three sisters (corn, beans, squash)—gives them significant influence because", "correct": "control of food production translates to economic power.", "wrong": ["agriculture is unimportant.", "women's work has no value.", "it is only domestic labor."] },
          { start: "The authority of Iroquois women to stop warriors from going to war demonstrates that the society valued peace and recognized women's stake in", "correct": "preventing loss of life.", "wrong": ["expanding territory.", "increasing trade profits.", "enforcing foreign rule."] },
          { start: "Iroquois clan systems trace descent through the mother's line because", "correct": "this system ensures stability.", "wrong": ["men are unimportant.", "fathers have no role.", "it is purely spiritual."] },
          { start: "The respect shown to Iroquois women by men includes listening to their counsel and", "correct": "recognizing their economic contributions.", "wrong": ["submission to female authority.", "elimination of male roles.", "purely ceremonial respect."] }
        ]
      },
      {
        name: "Haudenosaunee Elders & Oral Traditions",
        emoji: "🦉",
        quotes: [
          { start: "In Haudenosaunee culture, elders are respected because they hold", "correct": "connection to ancestral wisdom.", "wrong": ["merely age alone.", "superstitious beliefs.", "no real authority."] },
          { start: "The stories told by Haudenosaunee elders preserve knowledge about", "correct": "guidance for living in balance with nature.", "wrong": ["only entertainment.", "purely fictional tales.", "no practical wisdom."] },
          { start: "The Thanksgiving Address (Ganohonyohon) recited by the Haudenosaunee gives thanks to all elements of creation in order to maintain awareness of", "correct": "interdependence.", "wrong": ["financial systems.", "political authority.", "individual achievement."] },
          { start: "Haudenosaunee oral tradition ensures that children learn the history of the confederacy and their nation because knowing one's history strengthens", "correct": "cultural cohesion.", "wrong": ["individual wealth.", "technological innovation.", "international trade."] },
          { start: "The role of grandparents in Haudenosaunee families includes", "correct": "teaching children stories and practical skills.", "wrong": ["no parenting role.", "only ceremonial position.", "diminished influence."] },
          { start: "Haudenosaunee elders make important decisions about the community because they", "correct": "possess wisdom from lived experience.", "wrong": ["are dominating.", "are resisting change.", "are purely ceremonial."] }
        ]
      },
      {
        name: "Haudenosaunee Warfare & Peace",
        emoji: "⚔️",
        quotes: [
          { start: "The Iroquois Confederacy became powerful because unified nations could resist enemies", "correct": "much larger in number.", "wrong": ["only in myth.", "through written contracts alone.", "without any allies."] },
          { start: "Iroquois women had the power to prevent wars or demand their continuation because", "correct": "the society recognized that war affects families.", "wrong": ["women controlled everything.", "men were weak.", "it was purely symbolic."] },
          { start: "The Iroquois adopted captives to strengthen their power through", "correct": "adoption of capable people.", "wrong": ["slavery.", "no military purpose.", "cruelty."] },
          { start: "Iroquois warriors who killed in defense of the nation were expected to undergo", "correct": "purification rituals.", "wrong": ["public shame.", "exile.", "no ritual at all."] },
          { start: "The Haudenosaunee achieved military dominance in the Northeast not through conquest for territorial expansion, but by", "correct": "building a system that could withstand external pressure.", "wrong": ["pure aggression.", "superior weapons.", "numbers alone."] }
        ]
      },
      {
        name: "Haudenosaunee Agriculture & Environmental Knowledge",
        emoji: "🌾",
        quotes: [
          { start: "The Iroquois practice of cultivating the three sisters—corn, beans, and squash—demonstrates understanding that", "correct": "these plants work together.", "wrong": ["it is only traditional.", "no scientific principle exists.", "it is purely ceremonial."] },
          { start: "Iroquois women's authority over agriculture comes from their role as cultivators and their knowledge of plant cycles, soil management and", "correct": "crop storage.", "wrong": ["mineral extraction.", "naval navigation.", "industrial manufacturing."] },
          { start: "Haudenosaunee communities prepared for winter by", "correct": "storing corn, dried vegetables, and preserved foods.", "wrong": ["hunting only.", "gathering without storage.", "having no foresight."] },
          { start: "The Iroquois understanding of the natural world shows that", "correct": "humans must live in balance with nature.", "wrong": ["nature exists only for human use.", "balance is unnecessary.", "conservation is weakness."] },
          { start: "Haudenosaunee food systems were sustainable because they", "correct": "used crops suited to the climate.", "wrong": ["had no agricultural science.", "wasted resources.", "caused environmental damage."] }
        ]
      },
      {
        name: "Haudenosaunee Trade & Diplomacy",
        emoji: "💰",
        quotes: [
          { start: "The Iroquois Confederacy's control of trade routes in the Northeast gave them economic and political influence because", "correct": "control of trade means wealth.", "wrong": ["they conquered all competitors.", "they rejected external trade.", "only military power mattered."] },
          { start: "Haudenosaunee diplomacy was based on principles of respect and reciprocity because the confederacy understood that lasting alliances are built on", "correct": "mutual benefit.", "wrong": ["force.", "power.", "nations."] },
          { start: "The Iroquois use of wampum—beaded belts—in treaties and exchanges served multiple purposes: recording agreements, honoring relationships, establishing alliances and", "correct": "trade relationships.", "wrong": ["replacing spoken language entirely.", "eliminating the need for diplomacy.", "serving as purely decorative items."] },
          { start: "Iroquois trading networks connected distant regions because", "correct": "the confederacy's stability made travel through Iroquois territory safe.", "wrong": ["they were isolationist.", "trade was ceremonial.", "no real commerce existed."] }
        ]
      },
      {
        name: "Haudenosaunee Spiritual Beliefs & Practice",
        emoji: "🕯️",
        quotes: [
          { start: "The Haudenosaunee belief in the Creator (Ganiodaio/the Good Mind) includes understanding that all humans possess the capacity to choose between good and", "correct": "evil.", "wrong": ["profit.", "territory.", "ownership."] },
          { start: "The Haudenosaunee midwinter festival (Ganyestawadoh) serves to", "correct": "reset the spiritual calendar of the people.", "wrong": ["begin trade negotiations.", "collect taxes.", "mark military victories."] },
          { start: "In Haudenosaunee spirituality, the concept of balance represents the tension between opposing forces that must remain in", "correct": "equilibrium for health and harmony.", "wrong": ["one force triumphing.", "good defeating evil.", "no spiritual complexity."] },
          { start: "Haudenosaunee ceremonies are conducted throughout the year because they maintain the connection between humans and", "correct": "the natural world.", "wrong": ["modern technology.", "served no purpose.", "foreign governments."] },
          { start: "The Haudenosaunee belief that plants, animals, and natural forces have", "correct": "spirits.", "wrong": ["borders.", "currency.", "governments."] },
          { start: "The Code of Handsome Lake (Gaiwi:yo), introduced around 1800, shows that Haudenosaunee spirituality could adapt and respond to colonial pressures while", "correct": "maintaining core values.", "wrong": ["never change.", "completely abandon tradition.", "adopt Christianity entirely."] }
        ]
      },
      {
        name: "Haudenosaunee Social Structure & Family",
        emoji: "🏛️",
        quotes: [
          { start: "In Iroquois society, the extended family household (longhouse) is the basic social and economic unit because multiple families living together share", "correct": "labor and resources.", "wrong": ["commercial production.", "military conquest.", "political authority."] },
          { start: "The Haudenosaunee clan system organizes society through matrilineal descent and mutual obligation because this system creates networks of relatives across the", "correct": "nation.", "wrong": ["continent.", "world.", "foreign colonies."] },
          { start: "Young men in Haudenosaunee society gain status and authority by demonstrating skill in hunting,", "correct": "warfare.", "wrong": ["birth alone.", "wealth accumulation.", "age only."] },
          { start: "Children in Haudenosaunee society are raised to understand that they belong to their mother's clan first, then their nation, then", "correct": "the confederacy.", "wrong": ["a foreign kingdom.", "a military empire.", "a religious sect."] },
          { start: "The role of uncles (mother's brothers) in Haudenosaunee family structure includes discipline, guidance, and", "correct": "teaching traditions.", "wrong": ["managing trade routes.", "collecting taxes.", "enforcing foreign laws."] }
        ]
      },
      {
        name: "Haudenosaunee Resistance & Cultural Survival",
        emoji: "🛡️",
        quotes: [
          { start: "The Haudenosaunee maintained their political systems and cultural identity despite colonization because they protected their lands and", "correct": "transmitted knowledge through families.", "wrong": ["completely rejected outsiders.", "dissolved their clans.", "abandoned all traditions."] },
          { start: "The principle that decisions must benefit seven generations to come allowed Haudenosaunee leaders to", "correct": "resist pressure for short-term gain.", "wrong": ["reject all change.", "live only for today.", "ignore the future."] },
          { start: "Haudenosaunee communities continue to practice traditional governance and ceremonies today because these practices", "correct": "maintain cultural identity.", "wrong": ["are purely nostalgic.", "serve no purpose.", "are outdated."] },
          { start: "The Haudenosaunee Confederacy is documented to have influenced the thinking of American founders like Benjamin Franklin, contributing to democratic ideas in", "correct": "the United States Constitution.", "wrong": ["ancient Greek democracy.", "French revolutionary thought.", "British parliamentary law."] }
        ]
      },
      {
        name: "Haudenosaunee Values & Philosophy",
        emoji: "🧠",
        quotes: [
          { start: "The Haudenosaunee concept of peace is not the absence of conflict but", "correct": "the establishment of justice.", "wrong": ["submission to authority.", "weakness.", "purely spiritual."] },
          { start: "In Haudenosaunee philosophy, power (skenentoan) means the ability to", "correct": "accomplish good things, protect the people.", "wrong": ["dominate others.", "accumulate wealth.", "display military strength."] },
          { start: "The Haudenosaunee principle of consensus decision-making ensures that no major decision is made that leaves significant portions of the nation", "correct": "resentful.", "wrong": ["unaware.", "uninvolved.", "unaffected."] },
          { start: "The welfare of the children guides Haudenosaunee decision-making because the nation believes that the responsibility to future generations must outweigh", "correct": "personal or short-term interests.", "wrong": ["economic gain.", "military expansion.", "political rivalry."] },
          { start: "Haudenosaunee stories preserve wisdom about living in balance with", "correct": "nature and community.", "wrong": ["written law alone.", "foreign traditions.", "individual achievement."] }
        ]
      }
    ]
  },
  {
    id: "pueblo",
    name: "Pueblo Peoples",
    emoji: "🏜️",
    color: 0x8d6e63,
    colorHex: "#8d6e63",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Community Leaders - Documented Oral Traditions",
        emoji: "👑",
        quotes: [
          { start: "A pueblo leader's authority comes from the consent of the community and the respect of the", "correct": "council of elders.", "wrong": ["foreign governors.", "visiting merchants.", "rival villages."] },
          { start: "The role of a pueblo governor is to ensure that the village remains in harmony with its people and", "correct": "the natural world.", "wrong": ["accumulate personal wealth.", "dominate neighboring pueblos.", "control all resources."] },
          { start: "Pueblo communities survived in the harsh Southwest because they practiced", "correct": "respect for limited resources.", "wrong": ["isolation from neighbors.", "conquest of rivals.", "pure military strength."] },
          { start: "A wise pueblo leader understands that the community's survival depends on maintaining the balance between human needs and", "correct": "the land's capacity to provide.", "wrong": ["expanding territory endlessly.", "accumulating surplus.", "building monuments."] },
          { start: "The pueblo system of governance, where decisions are made collectively, ensures that", "correct": "the needs of all members are considered.", "wrong": ["one person rules absolutely.", "conflicts go unresolved.", "the majority is ignored."] },
          { start: "A pueblo leader who ignores the council and the people's wishes will", "correct": "lose respect and authority.", "wrong": ["gain absolute power.", "rule more effectively.", "strengthen the community."] },
          { start: "The kiva—the ceremonial chamber—is central to pueblo governance because it is where leaders and community members gather to make important decisions and maintain", "correct": "spiritual unity.", "wrong": ["tax regulations.", "military alliances.", "trade agreements."] },
          { start: "Pueblo communities value consensus because it", "correct": "strengthens unity.", "wrong": ["slows progress.", "prevents action.", "weakens leadership."] }
        ]
      },
      {
        name: "Pueblo Spiritual Leaders & Kachina Traditions",
        emoji: "🕯️",
        quotes: [
          { start: "The Kachina ceremonies are central to pueblo spiritual life because they", "correct": "connect the people to the spirits.", "wrong": ["only entertain the people.", "serve no practical purpose.", "are purely theatrical."] },
          { start: "Pueblo spiritual leaders understand that kachinas represent", "correct": "ancestral spirits and natural forces.", "wrong": ["only mythical beings.", "false idols.", "harmless entertainment."] },
          { start: "The role of pueblo priests is to maintain the sacred balance by performing rituals that preserve the harmony between human and", "correct": "natural worlds.", "wrong": ["political institutions.", "technological systems.", "economic markets."] },
          { start: "Pueblo spiritual knowledge is preserved through", "correct": "participation in ceremonies.", "wrong": ["written texts alone.", "secret codices.", "purely individual experience."] },
          { start: "The pueblo understanding of the spiritual world includes", "correct": "divine forces that guide and sustain life.", "wrong": ["only one supreme god.", "purely abstract philosophy.", "no real beliefs."] },
          { start: "Pueblo sacred societies, like the Kiva societies, maintain community cohesion by", "correct": "transmitting knowledge, performing ceremonies.", "wrong": ["controlling the people.", "hiding secrets from the community.", "serving only the elite."] },
          { start: "The pueblo relationship with the spiritual world is based on reciprocity—the people give to the spirits through ceremony, and the spirits provide", "correct": "rain, fertility, and guidance.", "wrong": ["only blessings.", "no material benefits.", "pure intangible rewards."] },
          { start: "Pueblo religious practices emphasize that all actions must be undertaken with", "correct": "spiritual awareness.", "wrong": ["economic gain.", "scientific curiosity.", "political ambition."] }
        ]
      },
      {
        name: "Pueblo Agricultural & Environmental Knowledge",
        emoji: "🌾",
        quotes: [
          { start: "Pueblo farmers developed dry farming techniques that allowed them to", "correct": "grow corn, beans, and squash in an arid environment with minimal rainfall.", "wrong": ["reject innovation.", "ignore environmental challenges.", "rely only on gathering."] },
          { start: "The pueblo understanding of weather patterns and plant cycles comes from centuries of observation and accumulated knowledge passed from generation to", "correct": "generation.", "wrong": ["oral instruction.", "seasonal migration.", "technological invention."] },
          { start: "Pueblo agricultural practices respect the land by", "correct": "rotating crops, allowing fields to rest.", "wrong": ["exploiting the soil.", "maximizing short-term gain.", "ignoring environmental impact."] },
          { start: "The three-sisters agricultural system—corn, beans, and squash planted together—demonstrates that pueblo farmers understood", "correct": "how plants work together to improve soil.", "wrong": ["random planting.", "no agricultural science.", "only superstition."] },
          { start: "Pueblo water management systems, including check dams and terraces, show that farmers", "correct": "understood how to capture water.", "wrong": ["had no engineering knowledge.", "relied only on rainfall.", "wasted resources."] },
          { start: "The pueblo relationship with nature is based on the principle that", "correct": "humans are part of the ecosystem and must live in balance with it.", "wrong": ["humans are superior to nature.", "nature exists for human exploitation.", "balance is unnecessary."] },
          { start: "Pueblo communities prepare for drought by", "correct": "storing surplus crops, maintaining diverse food sources.", "wrong": ["relying only on current harvest.", "ignoring seasonal variations.", "hoarding without limit."] }
        ]
      },
      {
        name: "Pueblo Architecture & Settlement Planning",
        emoji: "🏘️",
        quotes: [
          { start: "Pueblo dwellings are built in compact clusters because this design provides defense and facilitates community interaction and", "correct": "mutual support.", "wrong": ["shows poverty.", "indicates lack of skill.", "prevents individual development."] },
          { start: "The pueblo use of adobe and stone reflects understanding of the need for structures that are durable and", "correct": "thermally efficient.", "wrong": ["aesthetically pleasing.", "structurally sound.", "economically viable."] },
          { start: "Pueblo towns built on mesas and plateaus demonstrate that people understood", "correct": "the advantages of elevated locations.", "wrong": ["the importance of river access.", "the need for flat farmland.", "the advantages of coastal settlement."] },
          { start: "The kiva—built partially underground—serves both practical and spiritual purposes: it", "correct": "provides a sacred space for community.", "wrong": ["only serves ceremonial purposes.", "has no practical value.", "is purely a meeting place."] },
          { start: "Pueblo town planning, with central plazas for ceremonies and markets, shows that", "correct": "communities valued gathering spaces.", "wrong": ["no planning existed.", "only religious considerations mattered.", "practical concerns were ignored."] }
        ]
      },
      {
        name: "Pueblo Trade & Exchange Networks",
        emoji: "💰",
        quotes: [
          { start: "Archaeological evidence shows pueblo communities participated in extensive trade networks because they", "correct": "exchanged agricultural products and crafts.", "wrong": ["were isolated.", "rejected outside contact.", "had no goods to trade."] },
          { start: "Pueblo potters developed distinctive styles that allowed their work to be recognized and valued in distant trade networks because", "correct": "consistent technique made pueblo pottery highly desirable.", "wrong": ["it was the only pottery available.", "trade was purely ceremonial.", "quality did not matter."] },
          { start: "Pueblo trade with coastal peoples provided access to", "correct": "shells, sea products, and items unavailable in the inland Southwest.", "wrong": ["only luxury goods.", "unnecessary imports.", "purely ceremonial items."] },
          { start: "The exchange of goods between pueblo communities strengthened relationships because it created peaceful ties between", "correct": "neighboring groups.", "wrong": ["European settlers.", "distant overseas empires.", "Spanish governors."] } 
        ]
      },
      {
        name: "Pueblo Artistry & Craftsmanship",
        emoji: "🎨",
        quotes: [
          { start: "Pueblo pottery is made by hand without a potter's wheel because artisans developed", "correct": "coiling techniques and surface decoration methods.", "wrong": ["they lacked technology.", "the method is inferior.", "it shows primitiveness."] },
          { start: "The geometric designs on pueblo pottery represent sacred symbols, natural patterns, and", "correct": "spiritual meanings.", "wrong": ["only decorative patterns.", "no real meaning.", "random designs."] },
          { start: "Pueblo weavers create textiles using traditional methods because these techniques", "correct": "produce durable, beautiful fabrics.", "wrong": ["were recently invented.", "are required by law.", "reduce the need for cotton."] },
          { start: "The high quality of pueblo crafts indicates that artisans", "correct": "held important status in the community.", "wrong": ["were isolated workers.", "had low social value.", "worked randomly without training."] },
          { start: "Pueblo artistic traditions persist because they are seen as expressions of", "correct": "cultural identity.", "wrong": ["economic policy.", "military strategy.", "scientific research."] }
        ]
      },
      {
        name: "Pueblo Response to External Pressures",
        emoji: "🛡️",
        quotes: [
          { start: "When Spanish colonizers arrived, pueblo communities responded by sometimes accepting Christianity while", "correct": "maintaining traditional practices.", "wrong": ["complete surrender.", "violent rejection.", "complete abandonment of tradition."] },
          { start: "The Pueblo Revolt of 1680 shows that pueblo peoples united across different communities to resist", "correct": "colonial oppression.", "wrong": ["environmental change.", "trade disagreements.", "agricultural innovation."] },
          { start: "Pueblo communities maintained their cultural identity despite centuries of colonization because they protected sacred knowledge and passed traditions to", "correct": "younger generations.", "wrong": ["foreign rulers.", "written records.", "Spanish missionaries."] },
          { start: "The pueblo strategy of cultural survival involved", "correct": "selective adoption of external elements.", "wrong": ["total rejection of change.", "complete cultural erasure.", "no resistance."] },
          { start: "After the Pueblo Revolt of 1680, the Spanish returned in 1692 but were forced to govern differently, demonstrating that",  "correct": "resistance changed the terms of colonial rule.", "wrong": ["revolt had no lasting effect.", "Spanish authority was total.", "pueblo peoples lost all rights."] }
        ]
      },
      {
        name: "Pueblo Values & Social Organization",
        emoji: "🏛️",
        quotes: [
          { start: "Pueblo society emphasizes the community above the individual because survival in a harsh environment depends on", "correct": "cooperation.", "wrong": ["competition.", "hierarchy.", "isolation."] },
          { start: "The pueblo concept of wealth differs from European models because it is measured by", "correct": "spiritual well-being rather than individual accumulation.", "wrong": ["pure material possession.", "military power.", "land area controlled."] },
          { start: "Pueblo women hold important roles in society including managing households and participating in community decisions and", "correct": "ceremonies.", "wrong": ["warfare.", "hunting.", "trade negotiations."] },
          { start: "Pueblo elders are respected because they", "correct": "hold accumulated knowledge.", "wrong": ["control all resources.", "rule by authority alone.", "have supernatural power."] },
          { start: "Pueblo initiation ceremonies serve to", "correct": "transmit sacred knowledge.", "wrong": ["only separate groups.", "exclude outsiders.", "no practical purpose."] },
          { start: "The pueblo understanding of kinship extends beyond blood relations to include", "correct": "spiritual connections that create complex social bonds.", "wrong": ["only nuclear families.", "purely biological relationships.", "no social structure."] }
        ]
      },
      {
        name: "Pueblo Oral History & Cultural Knowledge",
        emoji: "📜",
        quotes: [
          { start: "Pueblo knowledge is transmitted through stories, ceremonies, and oral tradition because this method", "correct": "preserves cultural values.", "wrong": ["entertains children.", "records history.", "trains warriors."] },
          { start: "Pueblo storytelling includes narratives of creation, and lessons about living in harmony with the", "correct": "land.", "wrong": ["spirits.", "gods.", "ancestors."] },
          { start: "A pueblo person who knows the stories and ceremonies of their community maintains", "correct": "connection to their ancestors.", "wrong": ["only entertainment value.", "no real importance.", "nothing of substance."] },
          { start: "Pueblo oral traditions preserve knowledge about plant and animal behavior and the consequences of", "correct": "human actions.", "wrong": ["only mythology.", "weather patterns.", "tribal wars."] },
          { start: "The Hopi and Zuni maintain distinct languages and traditions showing that 'Pueblo' describes related but", "correct": "distinct peoples with their own identities.", "wrong": ["identical cultures.", "one unified nation.", "peoples with no differences."] }
        ]
      },
      {
        name: "Pueblo Relationship with the Land",
        emoji: "🌿",
        quotes: [
          { start: "Pueblo peoples understand the land as", "correct": "a living entity deserving respect and reciprocal relationship.", "wrong": ["a resource for exploitation.", "something to be conquered.", "purely economic value."] },
          { start: "Sacred places in pueblo geography—springs, mesas, caves—are important because they connect the people to their history and", "correct": "the spiritual forces that sustain life.", "wrong": ["have only ceremonial value.", "are purely symbolic.", "serve no practical purpose."] },
          { start: "Pueblo stewardship of the land demonstrates that respect for nature create abundance and", "correct": "stability.", "wrong": ["scarcity.", "conflict.", "decline."] },
          { start: "The pueblo return to traditional lands after forced removal shows that connection to specific places", "correct": "is essential to cultural identity.", "wrong": ["could thrive anywhere.", "is unimportant.", "fades over generations."] }
        ]
      }
    ]
  },
  {
    id: "tiwanaku",
    name: "Tiahuanaco / Tiwanaku",
    emoji: "🗿",
    color: 0x6d4c41,
    colorHex: "#6d4c41",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Builders & Architects - Archaeological Evidence",
        emoji: "🏗️",
        quotes: [
          { start: "The precision of Tiwanaku's stonework demonstrates that the builders possessed advanced mathematical knowledge and", "correct": "engineering skill.", "wrong": ["supernatural power.", "unlimited labor.", "simple techniques."] },
          { start: "The construction of the Gateway of the Sun required careful planning, skilled labor, and", "correct": "an understanding of stone properties.", "wrong": ["only ritual knowledge.", "supernatural assistance.", "brute force alone."] },
          { start: "Tiwanaku's architects aligned buildings with celestial events because they understood astronomy and believed the cosmos ordered", "correct": "human society.", "wrong": ["agricultural yields.", "military victories.", "royal successions."] },
          { start: "The terraced agricultural fields around Tiwanaku show that the engineers understood water management and", "correct": "maximizing crop yields.", "wrong": ["random design.", "ritual purposes.", "no practical knowledge."] },
          { start: "The transport of massive stone blocks to Tiwanaku required understanding of leverage and", "correct": "friction.", "wrong": ["supernatural power.", "enslaved populations.", "simple rolling methods."] },
          { start: "Tiwanaku's urban planning reflects a society that valued the integration of ceremonial and", "correct": "practical spaces.", "wrong": ["only ritual.", "chaos.", "randomness."] },
          { start: "The construction techniques used at Tiwanaku prove that the civilization possessed", "correct": "sophisticated knowledge of materials.", "wrong": ["no real skill.", "only imitation of earlier cultures.", "no innovation."] },
          { start: "The durability of Tiwanaku's structures demonstrates that quality craftsmanship and proper technique create works that", "correct": "outlast centuries.", "wrong": ["impress tourists.", "require repairs.", "symbolize power."] }
        ]
      },
      {
        name: "Tiwanaku Spiritual & Religious System",
        emoji: "🕯️",
        quotes: [
          { start: "The religious iconography of Tiwanaku suggests that the civilization worshipped creator deities, sky gods, and", "correct": "nature spirits tied to the Andes and Lake Titicaca.", "wrong": ["only war gods.", "no spiritual system.", "exclusively local spirits."] },
          { start: "The Staff God depicted on the Gateway of the Sun represents a supreme deity or creator figure central to Tiwanaku", "correct": "religious belief.", "wrong": ["artistic style.", "political power.", "military might."] },
          { start: "Tiwanaku's religious practices included astronomical observations, communal feasting, and", "correct": "ritual offerings tied to agricultural cycles.", "wrong": ["no organized ceremony.", "purely private worship.", "only military celebrations."]},
          { start: "The sacred nature of Lake Titicaca to Tiwanaku peoples shows that water, fertility, and natural phenomena", "correct": "were central to their cosmology.", "wrong": ["held no significance.", "were ignored entirely.", "were purely economic."] },
          { start: "Tiwanaku's religious art suggests that", "correct": "complex mythology and a hierarchical pantheon of deities existed.", "wrong": ["religion was simple.", "no spiritual system developed.", "only shamanism existed."] },
          { start: "The ritual use of Tiwanaku's public spaces indicates that", "correct": "large gatherings for ceremonies reinforced social cohesion.", "wrong": ["only rulers gathered.", "no communal rituals existed.", "private worship dominated."] },
          { start: "Tiwanaku's spiritual leaders likely", "correct": "interpreted astronomical events.", "wrong": ["had no real authority.", "were plure shamans.", "did not influence society."] }
        ]
      },
      {
        name: "Tiwanaku Leadership & Administration",
        emoji: "👑",
        quotes: [
          { start: "Tiwanaku's size and complexity indicate that the civilization was led by an organized elite who coordinated labor and", "correct": "distributed resources.", "wrong": ["waged wars.", "performed rituals.", "built monuments."] },
          { start: "The ability to construct monumental buildings shows that Tiwanaku's leaders could", "correct": "mobilize vast labor forces.", "wrong": ["command through fear alone.", "rely only on volunteer work.", "do nothing impressive."] },
          { start: "Tiwanaku's expansion required control of valuable resources like obsidian, textiles, and", "correct": "copper and tin for bronze production.", "wrong": ["gold only.", "silver only.", "precious stones."]},
          { start: "A Tiwanaku leader's authority was based on their ability to organize society and ensure prosperity through", "correct": "ritual and administration.", "wrong": ["pure divine.", "military conquest alone.", "ritual knowledge only."] },
          { start: "The hierarchical layout of Tiwanaku's monumental centers suggests that", "correct": "elite individuals controlled access to sacred spaces.", "wrong": ["no hierarchy existed.", "all had equal access.", "no social structure."] },
          { start: "Tiwanaku's influence over surrounding regions was maintained through", "correct": "control of trade routes.", "wrong": ["only peaceful trade.", "no military power.", "purely cultural dominance."] }
        ]
      },
      {
        name: "Tiwanaku Agriculture & Water Management",
        emoji: "🌾",
        quotes: [
          { start: "The raised field agricultural system around Lake Titicaca shows that Tiwanaku peoples understood", "correct": "water management and soil improvement.", "wrong": ["only ritual agriculture.", "basic farming only.", "no agricultural innovation."] },
          { start: "Tiwanaku's prosperity depended on managing the resources of both the highlands and the", "correct": "lake.", "wrong": ["coast.", "jungle.", "valleys."] },
          { start: "The labor required to build and maintain Tiwanaku's agricultural infrastructure required communal cooperation and", "correct": "long-term planning.", "wrong": ["enslaved populations.", "short-term planning.", "only individual effort."] },
          { start: "Tiwanaku's agricultural practices were sustainable because they worked with local climate rather than", "correct": "against natural limitations.", "wrong": ["modern techniques.", "imported crops.", "large estates."] },
          { start: "Tiwanaku's survival at high altitude was possible because farmers developed", "correct": "raised field systems (suka kollus) that retained heat and managed water.", "wrong": ["simple irrigation only.", "terracing borrowed from neighbors.", "no agricultural innovation."]}
        ]
      },
      {
        name: "Tiwanaku Trade & Economic System",
        emoji: "💰",
        quotes: [
          { start: "Tiwanaku's control of valuable resources like copper, tin, and obsidian allowed it to establish trade networks across", "correct": "the Andes.", "wrong": ["Europe.", "Africa.", "Scandinavia."] },
          { start: "Archaeological evidence shows Tiwanaku goods reached distant regions because the civilization was integrated into extensive trade networks across", "correct": "South America.", "wrong": ["the Andes.", "Europe.", "Africa."] },
          { start: "Tiwanaku merchants and traders likely exchanged Andean goods for resources from other", "correct": "regions.", "wrong": ["temples.", "elites.", "isolated villages."] },
          { start: "The economic power of Tiwanaku derived from control of resources and participation", "correct": "in long-distance trade.", "wrong": ["in military conquest alone.", "in theft and plunder.", "in no real commerce."] }
        ]
      },
      {
        name: "Tiwanaku Craftspeople & Artistic Traditions",
        emoji: "🎨",
        quotes: [
          { start: "The quality of Tiwanaku textiles, pottery, and metalwork indicates that skilled artisans possessed generations of technical", "correct": "knowledge.", "wrong": ["inspiration.", "equipment.", "materials."] },
          { start: "Tiwanaku's distinctive artistic style, found across the region, shows that a shared cultural tradition unified distant communities under", "correct": "Tiwanaku's religious and political influence.", "wrong": ["military conquest.", "economic trade alone.", "religious conversion."]},
          { start: "The symbolic motifs repeated in Tiwanaku art suggest that a coherent religious and cosmological worldview was shared across the", "correct": "civilization.", "wrong": ["isolated regions.", "unrelated villages.", "random settlements."] },
          { start: "Tiwanaku craftspeople mastered bronze working, which allowed them to", "correct": "create superior tools.", "wrong": ["reduce metal use entirely.", "avoid technological change.", "depend only on stone tools."] }
        ]
      },
      {
        name: "Tiwanaku Decline & Archaeological Understanding",
        emoji: "📜",
        quotes: [
          { start: "Tiwanaku's decline around 1000 CE was likely caused by drought, environmental change, and", "correct": "possibly social upheaval—not external conquest.", "wrong": ["foreign invasion.", "loss of military power.", "cultural collapse."] },
          { start: "The abandonment of Tiwanaku as a major center shows that even advanced civilizations are vulnerable to", "correct": "internal change.", "wrong": ["external stability.", "permanent success.", "unchanging prosperity."] },
          { start: "Tiwanaku's legacy influenced later Andean civilizations because its religious ideas, artistic traditions, and administrative techniques were adopted and", "correct": "adapted.", "wrong": ["abandoned.", "forgotten.", "rejected."] },
          { start: "The study of Tiwanaku teaches that pre-Columbian American civilizations possessed", "correct": "sophisticated knowledge.", "wrong": ["no real sophistication.", "no organization.", "no significant achievements."] },
          { start: "Tiwanaku's monumental architecture endures because the builders understood construction techniques that created", "correct": "durability.", "wrong": ["temporary structures.", "unstable materials.", "fragile designs."] }
        ]
      },
      {
        name: "Tiwanaku & Cosmological Understanding",
        emoji: "🌌",
        quotes: [
          { start: "Tiwanaku's astronomical alignments show that the civilization understood", "correct": "celestial movements.", "wrong": ["pure artistic expression.", "random alignment.", "geographical isolation."] },
          { start: "The Layout of Tiwanaku's ceremonial centers reflects a cosmology where sacred geography connected the human world to the spiritual realm and", "correct": "cosmos.", "wrong": ["war.", "no spiritual meaning existed.", "randomness."] },
          { start: "Tiwanaku's understanding of water cycles and seasonal patterns enabled them to", "correct": "predict flooding.", "wrong": ["eliminate rainfall.", "stop seasonal change.", "control the weather."] },
          { start: "The symbolism of the Gateway of the Sun and other monuments suggests that Tiwanaku peoples possessed a complex worldview integrating nature, time, and", "correct": "divinity.", "wrong": ["daily labor.", "no philosophy.", "political power only."] }
        ]
      },
      {
        name: "Tiwanaku Social Organization & Hierarchy",
        emoji: "🏛️",
        quotes: [
          { start: "The archaeological evidence of Tiwanaku shows that the society was organized into social classes with rulers, priests, farmers, and", "correct": "traders.", "wrong": ["no social division.", "random population.", "only warriors."] },
          { start: "Elite residences and ceremonial centers at Tiwanaku indicate that powerful individuals controlled resources, and", "correct": "access to sacred knowledge.", "wrong": ["no elites existed.", "all were equal.", "leadership was temporary."] },
          { start: "Tiwanaku's ability to coordinate massive labor projects shows that a centralized authority system could mobilize and", "correct": "organize thousands of workers.", "wrong": ["depend only on small villages.", "ignore labor organization.", "avoid large-scale planning."] },
          { start: "The role of religious specialists in Tiwanaku society likely included interpreting omens, guiding rituals, and", "correct": "legitimizing the authority of secular rulers.", "wrong": ["complete political power.", "no real influence.", "only personal spirituality."] },
          { start: "Paleoclimatic evidence shows that a prolonged drought around 1000 CE reduced Lake Titicaca's water levels, which directly undermined Tiwanaku's", "correct": "raised field agricultural system.", "wrong": ["trade networks.", "religious authority.", "military power."] }
        ]
      }
    ]
  },
  {
    id: "mapuche",
    name: "Mapuche",
    emoji: "🌲",
    color: 0x33691e,
    colorHex: "#33691e",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Lonko (Chiefs) - Reconstructed from Oral Tradition & Colonial Records",
        emoji: "👑",
        quotes: [
          { start: "A lonko's authority comes not from conquest alone but from the respect and", "correct": "consent of his people.", "wrong": ["fear of his warriors.", "wealth he possesses.", "wealth of the elite."] },
          { start: "The Mapuche resist conquest because we value our land, freedom, and", "correct": "independence above all.", "wrong": ["submission to authority.", "religious uniformity.", "submission to authority."] },
          { start: "A wise lonko understands that the community survives through cooperation, and", "correct": "collective decision-making.", "wrong": ["hierarchical control.", "individual ambition.", "ritual authority."] },
          { start: "Mapuche warriors fight to defend their families, their lands, and", "correct": "their way of life.", "wrong": ["conquest and expansion.", "wealth.", "plunder."] },
          { start: "The lonko who listens to his council of elders and warriors makes decisions that", "correct": "benefit the entire community.", "wrong": ["shows weakness.", "loses respect.", "invites betrayal."] },
          { start: "Mapuche independence was preserved for centuries because we adapted our tactics, maintained unity, and", "correct": "refused subjugation.", "wrong": ["refused wealth.", "refused trade.", "refused peace."] },
          { start: "A leader's legacy is measured by whether his people", "correct": "remained free and preserved their culture.", "wrong": ["accumulated wealth.", "conquered neighbors.", "built monuments."] },
          { start: "The Mapuche maintained their independence during the Arauco War (1536-1818) against Spanish conquest because they adapted their tactics and adopted", "correct": "Spanish horses and weapons.", "wrong": ["European farming techniques.", "Catholic religious practices.", "Spanish as their primary language."] }
        ] 
      },
      {
        name: "Machis (Shamans) - Spiritual & Healing Traditions",
        emoji: "🕯️",
        quotes: [
          { start: "The machi's role is to maintain balance between the human world and", "correct": "the spiritual world.", "wrong": ["control the people.", "command respect through fear.", "accumulate power."] },
          { start: "Healing comes from understanding that sickness affects", "correct": "body, spirit, and community together.", "wrong": ["only the body.", "only through ritual.", "only the elders."] },
          { start: "The machi uses plants and rituals because", "correct": "nature itself is the greatest teacher and healer.", "wrong": ["we have no other tools.", "the spirits demand it.", "ritual alone works."] },
          { start: "To become a machi, one must have the calling of the spirits and the knowledge passed from", "correct": "elder machis.", "wrong": ["birth alone.", "wealth and status.", "desire and ambition."] },
          { start: "A machi who serves the people honestly will be respected and supported by", "correct": "the community.", "wrong": ["the government.", "foreign rulers.", "individual ambition."] },
          { start: "The spirits teach us that the earth is alive and deserves respect and", "correct": "care.", "wrong": ["chaos.", "wealth.", "war."] },
          { start: "Mapuche healing practices survive because they are based on generations of observation and understanding of plants and", "correct": "healing.", "wrong": ["foreign influence.", "medical ignorance.", "random rituals."] },
          { start: "The machi reminds the people that harmony with nature brings health, prosperity, and", "correct": "peace.", "wrong": ["war.", "chaos.", "violence."] }
        ]
      },
      {
        name: "Mapuche Warriors & Resistance",
        emoji: "⚔️",
        quotes: [
          { start: "A Mapuche warrior fights not for glory but to protect his family, community, and", "correct": "the land of his ancestors.", "wrong": ["gain riches.", "seek individual honor.", "follow the lonko blindly."] },
          { start: "The Mapuche maintained their independence for over 300 years against Spanish conquest because", "correct": "they adapted their tactics.", "wrong": ["they were isolationist.", "they rejected all foreign contact.", "they were militarily superior."] },
          { start: "A warrior's courage is shown not by recklessness but by wise decisions that protect his people and", "correct": "land.", "wrong": ["personal glory.", "blind aggression.", "violence."] },
          { start: "Mapuche warriors understand that defending the land is more important than", "correct": "individual glory.", "wrong": ["personal honor.", "wealth.", "peace."] },
          { start: "The strength of Mapuche resistance lay in unity among diverse groups and", "correct": "adaptation to changing circumstances.", "wrong": ["superior numbers.", "rejection of all trade.", "isolation from neighbors."] },
          { start: "The Treaty of Quilín (1641) was significant because it was one of the few cases where a European colonial power formally recognized", "correct": "the sovereignty of an indigenous people.", "wrong": ["military defeat.", "religious conversion.", "trade agreements only."] }
        ]
      },
      {
        name: "Mapuche Community & Social Values",
        emoji: "🏘️",
        quotes: [
          { start: "Mapuche society values the community above the individual because survival and prosperity depend on cooperation and", "correct": "mutual support.", "wrong": ["constant conflict.", "complete isolation.", "individual competition."] },
          { start: "A Mapuche person's responsibility to their ayllu includes contributing labor, defending the land, and", "correct": "supporting the vulnerable.", "wrong": ["absolute obedience.", "sacrificing all individuality.", "ritual participation."] },
          { start: "Mapuche women hold important roles in society including managing households, agriculture, weaving, and", "correct": " participating in decisions.", "wrong": ["servitude alone.", "no authority.", "ritual participation only."] },
          { start: "Respect for elders in Mapuche culture comes from their knowledge, experience, and", "correct": "role in preserving tradition.", "wrong": ["control over resources.", "military authority.", "political dominance."] },
          { start: "The mapuche concept of land ownership differs from Spanish/European models because land is shared communally and belongs to the people who work it,", "correct": "not individuals.", "wrong": ["not communities.", "not families.", "not governments."] }
        ]
      },
      {
        name: "Mapuche & Nature - Environmental Values",
        emoji: "🌿",
        quotes: [
          { start: "The Mapuche understand that respecting the natural world brings abundance, health, and", "correct": "stability to the people.", "wrong": ["supernatural power.", "eternal life.", "military victory."] },
          { start: "Water, forest, and land are not possessions but living entities deserving respect and", "correct": "care.", "wrong": ["control.", "ownership.", "exploitation."] },
          { start: "A lonko who pollutes the water or destroys the forest commits an act against", "correct": "the present and future generations.", "wrong": ["foreign authorities only.", "traditional ceremony only.", "the natural world alone."] },
          { start: "Mapuche agricultural practices are sustainable because they", "correct": "work with natural cycles rather than against them.", "wrong": ["are purely spiritual.", "reject innovation.", "are less productive."] },
          { start: "The relationship between Mapuche and nature teaches that we are part of the ecosystem,", "correct": "not masters of it.", "wrong": ["and nature is inferior to humans.", "and we can use without consequence.", "and nature is hostile."] }
        ]
      },
      {
        name: "Mapuche Oral History & Cultural Preservation",
        emoji: "📜",
        quotes: [
          { start: "Stories told by elders preserve history, values, and knowledge essential to", "correct": "Mapuche survival.", "wrong": [" entertainment.", "secrets of power.", "ritual formulas."] },
          { start: "The transmission of knowledge from elder to youth ensures that traditions, skills, and wisdom survive across", "correct": "generations.", "wrong": ["men.", "women.", "friends."] },
          { start: "A Mapuche person who forgets the stories of their ancestors loses their connection to their people and their", "correct": "land.", "wrong": ["identity.", "history.", "memory."] },
          { start: "Mapuche language is not merely words but", "correct": "a repository of cultural knowledge and worldview.", "wrong": ["a tool for communication alone.", "a broken form of Spanish.", "a simple spoken dialect."] },
          { start: "The Mapuche concept of 'Buen Vivir' (küme mongen) teaches that well-being comes from harmony between people,", "correct": "community, and nature together.", "wrong": ["individual achievement.", "material wealth.", "spiritual isolation."] 
          }
        ]
      },
      {
        name: "Mapuche Resistance to Colonization",
        emoji: "🛡️",
        quotes: [
          { start: "The Mapuche rejection of Spanish colonization was not based on hatred but on a determination to preserve their independence, land, and", "correct": "way of life.", "wrong": ["desire for isolation.", "refusal of cooperation.", "religious fanaticism."] },
          { start: "Mapuche warriors adapted to Spanish military technology because they understood that survival requires adaptation while maintaining", "correct": "core values.", "wrong": ["tradition.", "total assimilation.", "loss of identity."] },
          { start: "The Mapuche maintained alliances with other groups because unity against colonization was stronger than", "correct": "any single group.", "wrong": ["foreign military power.", "internal disagreements.", "hierarchy."] },
          { start: "Mapuche resistance teaches that a people who value freedom will sacrifice greatly to", "correct": "maintain it.", "wrong": ["surrender it.", "abandon it.", "forget it."] }
        ]
      }
    ]
  },
  {
    id: "mongol",
    name: "Mongol Empire",
    emoji: "🏹",
    color: 0x4e342e,
    colorHex: "#4e342e",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Genghis Khan (Historical Records)",
        emoji: "👑",
        quotes: [
          { start: "I am the punishment of God. If you had not committed great sins, God would not have sent", "correct": "a punishment like me upon you", "wrong": ["a divine protector.", "a peaceful messenger.", "a blessing instead."] },
          { start: "The greatest happiness is to scatter your enemy and drive him before you and take his horses and his goods and hear the", "correct": "lamenting of his women and children.", "wrong": ["joy of peace.", "prayers of gratitude.", "sound of victory."] },
          { start: "A man's greatest work is to break his enemies, to drive them before him, to take their property, and to see those dearest to them wrapped in.", "correct": "tears", "wrong": ["pain.", "peace.", "mercy."] },
          { start: "An army cannot exist without discipline. Discipline cannot exist without", "correct": "unity of command.", "wrong": ["fear.", "constant chaos.", "individual ambition."] },
          { start: "The Mongol warrior must be prepared to endure hardship and adapt to any terrain or", "correct": "climate.", "wrong": [" comfort.", "luxury.", "predictable conditions."] },
          { start: "I will not punish those who surrender willingly, but I will destroy those who", "correct": "resist without cause.", "wrong": ["question my orders.", "show weakness.", "seek peace."] },
          { start: "Loyalty to the Khan is rewarded with", "correct": "wealth, position, and protection.", "wrong": ["mercy alone.", "freedom.", "autonomy."] },
          { start: "The conquered must understand that Mongol rule brings law, order, and", "correct": "the end of internal conflict.", "wrong": ["only hardship.", "only servitude.", "no benefit."] }
        ]
      },
      {
        name: "Mongol Military Strategy & Tactics",
        emoji: "⚔️",
        quotes: [
          { start: "The Mongol archer on horseback is superior to any foot soldier because he can strike from distance while", "correct": "remaining mobile.", "wrong": ["fear nothing.", "obey without question.", "fight endlessly."] },
          { start: "Reconnaissance and intelligence determine victory before the battle begins. A commander who underestimates his enemy will", "correct": "suffer defeat.", "wrong": ["win easily.", "gain honor.", "prove his strength."] },
          { start: "The Mongol strategy of feigned retreat confuses the enemy and draws them into", "correct": "prepared traps and encirclement.", "wrong": ["shameful flight.", "cowardly action.", "dishonorable tactics."] },
          { start: "A Mongol warrior must master the horse, the bow, and", "correct": "the ability to ride for days without rest.", "wrong": ["formal combat.", "ceremonial duties.", "court etiquette."] },
          { start: "To conquer a city, one must first understand its defenses, resources, and the will of", "correct": "its people.", "wrong": ["its beauty.", "its history.", "its wealth alone."] },
          { start: "The Mongol empire expands because we understand that speed and coordination overwhelm", "correct": "static defenses.", "wrong": ["strong leadership.", "organized resistance.", "mobile cavalry."] },
          { start: "A general who maintains supply lines and cares for his horses will move faster and strike harder than his", "correct": "enemy.", "wrong": ["allies.", "reputation.", "own army."] },
          { start: "Mongol warriors are not mercenaries; they fight for the Khan and the honor of the", "correct": "tribe.", "wrong": ["wealth alone.", "foreign kings.", "random chance."] }
        ]
      },
      {
        name: "Mongol Administrative & Governance",
        emoji: "📜",
        quotes: [
          { start: "The Yassa (Mongol Law Code) exists to ensure that all subjects—noble and commoner—answer to the same", "correct": "law.", "wrong": ["religion.", "tradition.", "ruler."] },
          { start: "A Mongol governor must be just in his dealings with the conquered because fair governance prevents rebellion and", "correct": "generates tax revenue.", "wrong": ["the Khan demands it.", "mercy is a weakness.", "cruelty works better."] },
          { start: "Mongol rule allows religious freedom because the Khan cares only that subjects pay taxes and", "correct": "remain loyal.", "wrong": ["convert to one religion.", "follow strict doctrine.", "reject all beliefs."] },
          { start: "Trade and commerce are protected under Mongol rule because prosperous merchants pay more taxes and stability", "correct": "benefits the Khan.", "wrong": ["weakens authority.", "destroys the economy.", "creates independence."] },
          { start: "A Mongol administrator who shows favoritism or corruption will be", "correct": "severely punished, regardless of rank.", "wrong": ["forgiven if he is loyal.", "ignored if he is effective.", "rewarded for ambition."] },
          { start: "The Mongol postal system (Yam) was established to ensure rapid communication across the empire and", "correct": "control of distant territories.", "wrong": ["free movement of all people.", "ease of trade.", "the Khan's mercy."] },
          { start: "Mongol governors are selected based on ability and merit, not", "correct": "birth or clan affiliation.", "wrong": ["royal blood.", "ritual qualification.", "age alone."] },
          { start: "The Khan tolerates local customs and rulers because stability and continuity reduce resistance and", "correct": "maintain order.", "wrong": ["he respects tradition.", "he is merciful.", "it is the right thing to do."] }
        ]
      },
      {
        name: "Batu Khan & Mongol Expansion",
        emoji: "🐴",
        quotes: [
          { start: "The conquest of the Khwarazmian Empire showed that those who resist the Khan will be utterly destroyed as", "correct": "a lesson to others.", "wrong": ["mercy awaits the defeated.", "negotiation is always possible.", "the Khan seeks peace."] },
          { start: "Mongol warriors move faster than any enemy because they travel light, use relay horses, and prioritize speed over", "correct": "comfort.", "wrong": ["discipline.", "coordination.", "strategy."] },
          { start: "The Mongol siege of Baghdad demonstrated that even the greatest cities fall to coordinated military discipline and overwhelming", "correct": "force.", "wrong": ["war.", "power.", "walls."] }
        ]
      },
      {
        name: "Kublai Khan (Yuan Dynasty)",
        emoji: "👑",
        quotes: [
          { start: "To rule China, one must understand that Chinese administrative systems are more effective than", "correct": "tribal governance.", "wrong": ["Chinese culture.", "Mongol traditions.", "warfare."] },
          { start: "I employ Chinese scholars and administrators because they understand governance, law, and how to extract", "correct": "revenue fairly.", "wrong": ["gold.", "silver.", "knowledge."] },
          { start: "The Great Khan tolerates the religions of his subjects because Mongol tradition (the Yassa) forbids religious persecution and", "correct": "unrest.", "wrong": ["power.", "faith.", "religion."] },
          { start: "Maritime trade under Mongol protection benefits", "correct": "both the merchants and the Khan through taxation.", "wrong": ["only merchants.", "the Khan alone.", "no one."] },
          { start: "The Mongol rule of China proves that military conquest is only the beginning;", "correct": "administration determines lasting power.", "wrong": ["conquest is all that matters.", "occupation is permanent.", "the conquered always rebel."] },
          { start: "To maintain power in conquered lands, a wise Khan must preserve local structures while ensuring tribute and", "correct": "loyalty.", "wrong": ["destroy all local authority.", "rule with iron fist alone.", "ignore local customs."] }
        ]
      },
      {
        name: "Mongol Warriors & the Honor Code",
        emoji: "🏹",
        quotes: [
          { start: "A Mongol warrior's word is his bond because the Khan's trust depends on", "correct": "the reliability of his commanders.", "wrong": ["fear of punishment.", "random loyalty.", "strict obedience alone."] },
          { start: "To flee battle without orders is", "correct": "shameful and punishable by death.", "wrong": ["sometimes necessary.", "a tactical retreat.", "prudent."] },
          { start: "A warrior who kills without the Khan's permission will be", "correct": "executed, regardless of his rank or previous service.", "wrong": ["forgiven.", "rewarded for ambition.", "promoted."] },
          { start: "The bond between warrior and Khan is sacred because the empire cannot function without absolute discipline and", "correct": " trust.", "wrong": ["love.", "power.", "it is fair."] },
          { start: "Mongol warriors respect their enemies when they fight with skill, discipline, and courage, even", "correct": "in defeat.", "wrong": ["when they surrender quickly.", "when they flee without fighting.", "when they show no mercy."] }
        ]
      },
      {
        name: "Mongol Trade & The Silk Road",
        emoji: "💰",
        quotes: [
          { start: "The Mongol peace (Pax Mongolica) allows merchants to travel safely because the Khan enforces order and punishes bandits and", "correct": "corrupt officials severely.", "wrong": ["the Khan is merciful.", "there is no danger.", "everyone trusts each other."] },
          { start: "Trade flourishes under Mongol rule because stable governance, safe roads, and", "correct": "consistent law attract merchants from many lands.", "wrong": ["random violence spreads fear.", "no laws are enforced.", "trade is forbidden."] },
          { start: "The Khan protects merchants and trade routes because commerce generates wealth and taxes that strengthen the", "correct": "empire.", "wrong": ["merchants.", "local villages.", "foreign kingdoms."] },
          { start: "A merchant who pays his taxes and remains loyal can expect protection, justice, and", "correct": "the ability to profit.", "wrong": ["unlimited freedom.", "no taxation.", "complete autonomy."] },
          { start: "The Mongol Empire connects East and West through trade because control of trade routes means control of", "correct": "wealth and information.", "wrong": ["cultural border disputes.", "religious unity.", "natural resources only."] }
        ]
      },
      {
        name: "Mongol Succession & Leadership",
        emoji: "👑",
        quotes: [
          { start: "The Khan is chosen based on ability to command, military skill, and the respect of the", "correct": "kurultai (assembly).", "wrong": ["hereditary lineage alone.", "royal blood only.", "divine intervention."] },
          { start: "Fragmentation of the Mongol Empire shows that without a strong central Khan, regional commanders prioritize their own", "correct": "power.", "wrong": ["family.", "happiness.", "tradition."] },
          { start: "A Khan who loses the confidence of his generals will", "correct": "be replaced or deposed.", "wrong": ["remain in power forever.", "be protected by law.", "be forgiven."] },
          { start: "The strength of Mongol leadership lies in the fact that the Khan must prove his worthiness through", "correct": "military success and wise governance.", "wrong": ["failure.", "ritual.", "force."] }
        ]
      },
      {
        name: "Mongol Culture & Values",
        emoji: "🎯",
        quotes: [
          { start: "Mongol culture values courage, loyalty, and skill in horsemanship, archery, and", "correct": "wrestling.", "wrong": ["poetry and philosophy.", "ritual and ceremony.", "mercy and compassion."] },
          { start: "The Mongols respect those who face hardship with endurance and", "correct": "adapt to circumstances.", "wrong": ["seek comfort.", "avoid danger.", "remain unchanged."] },
          { start: "To the Mongols, a life well-lived is one spent in service to the Khan and the tribe, with", "correct": "honor in battle.", "wrong": ["pursuit of wealth.", "peaceful retirement.", "spiritual contemplation."] },
          { start: "Mongol women have more freedom and responsibility than many contemporary societies because they manage households, herds, and are capable of managing the ger and", "correct": "herds independently during campaigns.", "wrong": ["political leadership only.", "religious authority alone.", "economic isolation."] }
        ]
      },
      {
        name: "Mongol Decline & Historical Lessons",
        emoji: "📜",
        quotes: [
          { start: "The fragmentation of the Mongol Empire occurred because distance, cultural differences, and ambitious regional khans eventually overwhelmed", "correct": "central authority.", "wrong": ["external conquest.", "control.", "the empire."] },
          { start: "Mongol rule in various regions lasted only as long as the Khan could enforce his authority and ensure that local administrators remained", "correct": "loyal.", "wrong": ["peaceful.", "quiet while no resistance emerged.", "perfect."] },
          { start: "The Mongol Empire's greatest strength was its ability to adapt tactics, tolerate diversity, and use existing institutions for ", "correct": "governance.", "wrong": ["cultural isolation.", "war.", "centralized destruction."] },
          { start: "The Mongol legacy shows that military conquest alone cannot sustain an empire without stable governance and", "correct": "administration.", "wrong": ["continuous warfare.", "war.", "permanent instability."] },
          { 
            start: "The Black Death spread rapidly across Eurasia partly because Mongol trade routes and armies connected East and West in ways that", "correct": "accelerated the movement of disease.", "wrong": ["prevented all epidemics.", "had no effect on populations.", "only spread culture."] 
          }
        ]
      }
    ]
  },
  {
    id: "mali",
    name: "Mali Empire",
    emoji: "🟢",
    color: 0x558b2f,
    colorHex: "#558b2f",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Mansa Musa I (As Recorded by Arab Chroniclers)",
        emoji: "👑",
        quotes: [
          { start: "I have decided to make a pilgrimage to the Holy City of Mecca, so that the people of my kingdom will", "correct": "know the way.", "wrong": ["follow me blindly.", "forget their traditions.", "fear my absence."] },
          { start: "The pilgrimage to Mecca demonstrated that Mali is a kingdom of", "correct": "wealth, faith, and learning.", "wrong": ["division.", "conquest and fear.", "war and fear."] },
          { start: "Upon my return from Mecca, I established centers of learning because", "correct": "knowledge strengthens the empire.", "wrong": ["knowledge is unnecessary.", "learning weakens authority.", "only gold builds power."] },
          { start: "The Sankore Madrasah of Timbuktu was founded to ensure that Mali's scholars could rival those of any", "correct": "nation.", "wrong": ["mistake.", "knowledge.", "person."] },
          { start: "Gold is valuable, but the prosperity of Mali's people is", "correct": "more valuable still.", "wrong": ["guaranteed by gold alone.", "dependent on conquest.", "only measured in wealth."] },
          { start: "A ruler's generosity is not weakness; it is a sign of", "correct": "strength and confidence.", "wrong": ["foolishness.", "desperation.", "fear of rebellion."] },
          { start: "Mali's power comes not from conquest alone, but from trade, justice, and respect among", "correct": "nations.", "wrong": ["isolated rulers.", "internal conflicts.", "warring factions."] }
        ]
      },
      {
        name: "Ibn Battuta's Observations of Mali (14th Century Traveler)",
        emoji: "✍️",
        quotes: [
          { start: "The people of Mali show great respect for", "correct": "justice and the rule of law.", "wrong": ["force and intimidation.", "power.", "wealth."] },
          { start: "In Mali, women have more freedom and rights than in many Muslim lands because the culture", "correct": "respects women's roles in society.", "wrong": ["ignores social roles.", "limits participation in public life.", "depends only on male authority."] },
          { start: "The markets of Mali are orderly and safe because merchants are protected and laws are", "correct": "enforced.", "wrong": ["ignored.", "optional.", "unwritten."] },
          { start: "Mali's strength lies in the fact that merchants, scholars, and rulers work", "correct": "together.", "wrong": ["without cooperation.", "in isolation.", "in opposition."] },
          { start: "The people of Timbuktu are known for their learning, piety, and respect for", "correct": "knowledge.", "wrong": ["military prowess.", "isolation.", "poverty."] }
        ]
      },
      {
        name: "Griots (Oral Tradition & Historical Records)",
        emoji: "📜",
        quotes: [
          { start: "The griot is the keeper of history and the memory of the", "correct": "people.", "wrong": ["king's secrets.", "positive tales.", "forbidden knowledge."] },
          { start: "Through the griot's words, the deeds of ancestors are preserved and passed to", "correct": " future generations.", "wrong": ["wrong people.", "hidden enemies.", "gods."] },
          { start: "A ruler who ignores the griot's counsel ignores the", "correct": "wisdom of his people.", "wrong": ["strength of his army.", "authority of his laws.", "necessary cruelty."] },
          { start: "The epic of Sundiata teaches that courage, wisdom, and justice build great", "correct": " empires.", "wrong": ["dreams.", "fear.", "loyalty."] },
          { start: "Stories of Mali's founding show that the kingdom was built by united people,", "correct": "not conquest alone.", "wrong": ["and force was all that mattered.", "and one man created it all.", "and no sacrifice was needed."] },
          { start: "The griot reminds rulers that their power is temporary, but their", "correct": "legacy through deeds is eternal.", "wrong": ["wealth is eternal.", "fear lasts forever.", "rituals protect them."] }
        ]
      },
      {
        name: "Sundiata Keita (Founder of Mali - Historical/Legendary)",
        emoji: "⚔️",
        quotes: [
          { start: "I was born weak, but I became strong through determination and the support of", "correct": "my people.", "wrong": ["my family.", "my enemies.", "pure chance."] },
          { start: "A true leader unites his people; he does not rule through", "correct": "fear or force alone.", "wrong": ["magic.", "rituals.", "weakness."] },
          { start: "Mali was not built in a day, but through the patience and", "correct": "hard work of many hands.", "wrong": ["sudden fortune.", "single ruler's decree.", "random chance."] },
          { start: "The battle of Kirina (1235) taught that strategy and unity", "correct": "defeat even larger armies.", "wrong": ["always fail in warfare.", "are irrelevant in battles.", "depend only on luck."] },
          { start: "A kingdom endures when its people believe in", "correct": "its justice and purpose.", "wrong": ["instability.", "constant fear of rulers.", "chaos."] }
        ]
      },
      {
        name: "Mali Merchants & Trade Wisdom",
        emoji: "💰",
        quotes: [
          { start: "The salt trade enriched Mali because merchants understood that fair dealing and reliable supply bring lasting", "correct": "profit.", "wrong": ["war.", "loss.", "conflict."] },
          { start: "Mali's gold drew traders from across the world because honest exchange and stable governance made", "correct": "trade safe.", "wrong": ["trade uncertain.", "trade restricted.", "trade dangerous."] },
          { start: "A merchant of Mali knows that reputation is worth more than", "correct": "a single large profit.", "wrong": ["loyalty.", "gold.", "power."] },
          { start: "The caravans crossing Mali prosper because the empire protects travelers and", "correct": "enforces fair trade.", "wrong": ["bandits never appear.", "routes are easy.", "no one competes."] },
          { 
            start: "Ibn Battuta was surprised to find that women of Mali appeared in public without veils, which he noted was different from", 
            "correct": "customs in other Muslim lands.", 
            "wrong": ["Mali's own traditions.", "Islamic law.", "royal decree."] 
          }
        ]
      },
      {
        name: "Timbuktu Scholars & Islamic Learning",
        emoji: "📚",
        quotes: [
          { start: "The University of Timbuktu was built because Mali's rulers believed that knowledge and learning", "correct": "strengthen a nation.", "wrong": ["weaken society.", "replace governance.", "eliminate tradition."] },
          { start: "Scholars in Mali teach that wisdom comes from study, reflection, and", "correct": "respect for learning.", "wrong": ["conquest.", "ritual alone.", "fear."] },
          { start: "The great mosques of Timbuktu show that Mali is a nation of faith, learning, and", "correct": "cultural pride.", "wrong": ["military expansion.", "foreign domination.", "religious conflict."] },
          { start: "Manuscripts preserved in Mali hold", "correct": "knowledge that serves all people.", "wrong": ["secrets that grant power.", "weapons of war.", "rituals of control."] },
          { start: "Mali's scholars attracted students from across Africa because the kingdom offered genuine learning and", "correct": "opportunity.", "wrong": ["strict control.", "mandatory attendance.", "limited access."] }
        ]
      },
      {
        name: "Mali Administrative & Governance Wisdom",
        emoji: "⚖️",
        quotes: [
          { start: "Mali's stability came from having clear laws and officials who enforced them", "correct": "fairly.", "wrong": ["arbitrarily.", "selectively.", "brutally."] },
          { start: "A Mansa who appointed skilled administrators found that good governance prevents rebellion better than", "correct": "force.", "wrong": ["effective governance.", "stable administration.", "wise leadership."] },
          { start: "The provincial governors of Mali prospered when they served both the Mansa and the welfare of", "correct": "their people.", "wrong": ["hoarded wealth.", "fear.", "their enemies."] },
          { start: "Mali's tax system was effective because it was fair and transparent, ensuring resources for defense and", "correct": "development.", "wrong": ["neglect.", "exploitation.", "corruption."] },
          { start: "Mali's military strength came from well-trained soldiers who", "correct": "believed in their cause.", "wrong": ["enslaved warriors.", "were mercenaries.", "had ritual power."] }
        ]
      },
      {
        name: "Mali & Women's Status (Historical Evidence)",
        emoji: "👩",
        quotes: [
          { start: "In Mali, women could own property and conduct trade because the society valued economic contribution and family", "correct": "stability.", "wrong": ["poverty.", "because Islamic law required it.", "because men did not control resources."] },
          { start: "Mali's queens and princess held real power because the kingdom recognized women's capacity", "correct": "to govern and counsel.", "wrong": ["to transfer all power to their husbands.", "as symbols only", "to advise but not make decisions."] },
          { start: "Mali's stability was strengthened by the fact that women managed households, trade, and", "correct": "helped preserve culture.", "wrong": ["were powerless.", "served no purpose.", "only men contributed."] },
          { start: "Visitors to Mali noted that women were treated with", "correct": "more respect and freedom than in many contemporary societies.", "wrong": ["complete submission.", "no regard.", "only as servants."] }
        ]
      }
    ]
  },
  {
    id: "sumerians",
    name: "Sumerians",
    emoji: "📜",
    color: 0xa0522d,
    colorHex: "#a0522d",
    bg: "#0a0a0a",
    authors: [
      {
        name: "Instructions of Shuruppak",
        emoji: "📜",
        quotes: [
          { start: "My son, let me give you", "correct": "instruction.", "wrong": ["wealth.", "power.", "commands."] },
          { start: "Do not commit robbery; do not cause", "correct": "harm.", "wrong": ["sorrow.", "conflict.", "pain."] },
          { start: "Do not engage in", "correct": "slander.", "wrong": ["trade.", "labor.", "ritual."] },
          { start: "The barber should not charge fees that are too", "correct": "high.", "wrong": ["low.", "uncertain.", "fair."] },
          { start: "Do not make false", "correct": "accusations.", "wrong": ["promises.", "vows.", "claims."] },
          { start: "My son, obey your father and do not", "correct": "transgress his word.", "wrong": ["question him.", "delay his commands.", "ignore his wisdom."] },
          { start: "Do not utter lies; speak the", "correct": "truth.", "wrong": ["law.", "ritual.", "king's will."] },
          { start: "Pursue justice, and you will", "correct": "find favor.", "wrong": ["gain riches.", "win battles.", "rule forever."] },
          { start: "Do not be a slanderer; do not cause", "correct": "discord.", "wrong": ["delays.", "weakness.", "poverty."] },
          { start: "A man who loves his mother will", "correct": "prosper.", "wrong": ["rule.", "gain wealth.", "be feared."] }
        ]
      },
      {
        name: "Sumerian Proverbs & Wisdom",
        emoji: "📜",
        quotes: [
          { start: "A king who does not heed advice is", "correct": "soon overthrown.", "wrong": ["greatly praised.", "forever blessed.", "ultimately victorious."] },
          { start: "The river brings life to the land, and the land brings life to", "correct": "the people.", "wrong": ["the king.", "the gods.", "the empire."] },
          { start: "Work diligently in your youth, so that in old age you may", "correct": "rest with honor.", "wrong": ["rule with power.", "gain great wealth.", "fear nothing."] },
          { start: "The words of a truthful man are worth more than", "correct": "silver.", "wrong": ["gold.", "armies.", "temples."] },
          { start: "A wise man listens more than he", "correct": "speaks.", "wrong": ["acts.", "commands.", "rules."] },
          { start: "The mouth which says yes and the mouth which says no—both come from the", "correct": "gods.", "wrong": ["king.", "mouth.", "heart."] },
          { start: "An angry man acts without", "correct": "thought.", "wrong": ["fear.", "wisdom.", "purpose."] },
          { start: "The flood came, and then came the", "correct": "wind.", "wrong": ["calm.", "peace.", "order."] },
          { start: "Before you eat, know the source of your", "correct": "food.", "wrong": ["wealth.", "strength.", "power."] },
          { start: "A man is known by the company he", "correct": "keeps.", "wrong": ["fears.", "envies.", "avoids."] },
          { start: "The scribe writes and the official reads; both serve the", "correct": "state.", "wrong": ["king.", "temple.", "people."] },
          { start: "What is the life of a man but a", "correct": "shadow?", "wrong": ["dream.", "breath.", "moment."] },
          { start: "A kingdom's wealth flows from the fields, and a wise ruler ensures that", "correct": "farmers are protected and productive.", "wrong": ["temples are wealthier.", "merchants control trade.", "soldiers own land."] },          
          { start: "The merchant who trades fairly will", "correct": "succeed.", "wrong": ["be rich.", "be powerful.", "be feared."] },
          { start: "Honor your parents, for they gave you", "correct": "life.", "wrong": ["wealth.", "power.", "status."] }
        ]
      },
      {
        name: "Enuma Elish & Mythological Wisdom",
        emoji: "🌍",
        quotes: [
          { start: "When the gods created mankind, they also gave us", "correct": "the gift of choice.", "wrong": ["eternal life.", "perfect wisdom.", "freedom from suffering."] },
          { start: "From chaos comes", "correct": "order.", "wrong": ["destruction.", "fear.", "war."] },
          { start: "The victor's throne is built on the bodies of the", "correct": "defeated.", "wrong": ["weak.", "proud.", "foolish."] },
          { start: "Even the mightiest god must respect the", "correct": "order of creation.", "wrong": ["will of mortals.", "power of humans.", "laws of mortals."] },
          { start: "Marduk's victory teaches that wisdom and strategy triumph over", "correct": "brute force.", "wrong": ["fear.", "numbers.", "ritual."] }
        ]
      },
      {
        name: "Sumerian Legal & Administrative Wisdom",
        emoji: "⚖️",
        quotes: [
          { start: "The laws written on stone ensure", "correct": "justice for all.", "wrong": ["fear of the king.", "obedience to rulers.", "wealth for temples."] },
          { start: "A judge who accepts bribes betrays", "correct": "the people.", "wrong": ["the king.", "the gods.", "justice itself."] },
          { start: "The governor who cares for the poor strengthens the", "correct": "state.", "wrong": ["temple.", "palace.", "army."] },
          { start: "Taxation must be fair, or the people will", "correct": "rebel.", "wrong": ["starve.", "obey.", "suffer in silence."] },
          { start: "A scribe who falsifies records serves neither the king nor the", "correct": "gods.", "wrong": ["people.", "state.", "truth."] },
          { start: "The rights of the widow and orphan must be", "correct": "protected.", "wrong": ["ignored.", "forgotten.", "left to fate."] }
        ]
      },
      {
        name: "Sumerian Agricultural & Economic Wisdom",
        emoji: "🌾",
        quotes: [
          { start: "The land that is well-watered produces", "correct": "abundance.", "wrong": ["riches.", "power.", "glory."] },
          { start: "The merchant who deals fairly in the marketplace will", "correct": "prosper.", "wrong": ["be envied.", "be feared.", "gain power."] },
          { start: "Do not neglect the irrigation channels, for water is", "correct": "life.", "wrong": ["wealth.", "power.", "blessing."] },
          { start: "A farmer who knows the seasons harvests", "correct": "plenty.", "wrong": ["gold.", "fame.", "respect."] },
          { start: "Trade connects cities and brings", "correct": "peace.", "wrong": ["wealth alone.", "power alone.", "glory alone."] }
        ]
      }
    ]
  },
]