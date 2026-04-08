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
          { start: 'The absence of romance in my history will, I fear, detract somewhat from its interest, but if it is judged worthy by those inquirers who desire an exact knowledge of the past as an aid to the understanding of the future... I shall be content. In fine I have written my work not as an essay with which to win the applause of the moment but as a possession for all', correct: 'time.', wrong: ['men.', 'gods.', 'Athens.'] },
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
          { start: 'I found Rome built of bricks; I leave her clothed in', correct: 'marble.', wrong: ['gold.', 'stone.', 'glory.'] },
          { start: 'King of Kings am I, Osymandias. If anyone would know how great I am and where I lie, let him surpass one of my', correct: 'works.', wrong: ['battles.', 'victories.', 'temples.'] },
          { start: 'For her sake, the sun', correct: 'rises.', wrong: ['sets.', 'shines.', 'moves.'] },
          { start: 'His majesty was like Seth the great when he takes the adornments of war; as he seized his coat of mail, he was like Baal in his', correct: 'hour.', wrong: ['time.', 'day.', 'fault.'] },
          { start: 'Every country trembled before him, fear was in their hearts; all the rebels came bowing down for fear of the fame of his', correct: 'majesty.', wrong: ['army.', 'name.', 'empire.'] }
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
          { start: 'A person who conquers themselves is', correct: 'greater than one who conquers a city.', wrong: ['weaker than a king.', 'stronger than gods.', 'famous.'] },
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
          { start: 'Emptiness is not nothingness; it is the', correct: 'absence of inherent self.', wrong: ['absence of value.', 'absence of pain.', 'absence of desire.'] },
          { start: 'One who understands emptiness is free from', correct: 'delusion.', wrong: ['pleasure.', 'fear.', 'power.'] },
          { start: 'All conditioned things are', correct: 'impermanent.', wrong: ['eternal.', 'solid.', 'powerful.'] },
          { start: 'Wisdom arises when one realizes the', correct: 'emptiness of phenomena.', wrong: ['power of kings.', 'pleasure of life.', 'wealth of the world.'] },
          { start: 'Freedom comes from letting go of', correct: 'clinging.', wrong: ['power.', 'friends.', 'fame.'] },
          { start: 'Nothing can exist in isolation; everything is', correct: 'connected.', wrong: ['independent.', 'permanent.', 'weak.'] },
          { start: 'Suffering ceases when the mind sees', correct: 'emptiness.', wrong: ['power.', 'pleasure.', 'fear.'] },
          { start: 'Desire is rooted in', correct: 'ignorance.', wrong: ['wealth.', 'strength.', 'pleasure.'] },
          { start: 'The enlightened mind is free from', correct: 'attachment.', wrong: ['pleasure.', 'power.', 'fear.'] },
          { start: 'All phenomena arise from', correct: 'causes and conditions.', wrong: ['chance.', 'desire.', 'fame.'] },
          { start: 'Realizing the emptiness of self leads to', correct: 'liberation.', wrong: ['fear.', 'wealth.', 'pleasure.'] },
          { start: 'The path of wisdom is free from', correct: 'delusion.', wrong: ['pleasure.', 'fear.', 'wealth.'] },
          { start: 'All distinctions exist only in', correct: 'concepts.', wrong: ['reality.', 'nature.', 'power.'] },
          { start: 'The wise do not cling to', correct: 'views.', wrong: ['wealth.', 'pleasure.', 'friends.'] },
          { start: 'Compassion arises when one sees the', correct: 'interconnectedness of all beings.', wrong: ['power of kings.', 'wealth of the world.', 'fear of enemies.'] },
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
          { start: 'The Code of Hammurabi, inscribed on a stone stele around 1754 BCE and discovered in 1901, contains 282 laws that governed Babylonian society, with the famous lex talionis principle (\"an eye for an eye\") documented as',
          "correct": "law 196: \"If a man put out the eye of another man, his eye shall be put out.\"",
            "wrong": ["purely legendary.", "no real code.", "completely fabricated."] },
          { start: 'The law \"If a man destroys the eye of another man, they shall destroy his eye\" (law 196) demonstrates the principle of retaliation but also reveals that the code was stratified because',
          "correct": "different punishments applied based on social class: if the victim was of lower status, monetary compensation was substituted for physical retaliation.",
            "wrong": ["equal punishment for all.", "no class distinctions.", "uniform justice."] },
          { start: 'The law \"If a builder builds a house and it collapses and kills the owner, the builder shall be put to death\" (law 229) shows that the code held professionals accountable for their work, though this law applied only to certain circumstances and reflected the code\'s emphasis on',
          "correct": "professional responsibility and the protection of property and life.",
            "wrong": ["purely punitive.", "no real protection.", "arbitrary punishment."] },
          { start: 'The law \"If a son strikes his father, his hands shall be cut off\" (law 195) reflects the code\'s emphasis on family hierarchy and the protection of parental authority, which was central to Mesopotamian social organization, showing that',
          "correct": "the code served to reinforce existing social hierarchies and patriarchal authority structures.",
            "wrong": ["purely humanitarian.", "equal justice.", "no social function."] },
          { start: 'The law \"If a man steals property, he shall be put to death\" represents a capital crime only for certain types of theft (particularly of temple or state property), not all theft, indicating that',
          "correct": "the code distinguished between different types of property crime and applied different punishments based on what was stolen and who was harmed.",
            "wrong": ["all theft was capital crime.", "no distinctions.", "uniform punishment."] },
          { start: 'The Code of Hammurabi was not a legal code in the modern sense but rather a collection of case laws and precedents compiled to demonstrate the king\'s justice and authority, serving to',
          "correct": "legitimize the king\'s rule and demonstrate his divine appointment through the establishment of order and justice.",
            "wrong": ["purely legal document.", "no political purpose.", "no ideological function."] }
        ]
      },
      {
        name: 'Epic of Gilgamesh (Literary & Mythological Text)',
        emoji: '📖',
        quotes: [
          { start: 'The Epic of Gilgamesh, preserved in cuneiform on clay tablets from Mesopotamia and dating to the late 2nd millennium BCE (though with earlier sources), is one of the oldest known literary works and contains multiple versions and translations, indicating that',
          "correct": "the text requires careful interpretation and comparison of different versions to understand its meaning.",
            "wrong": ["single definitive version.", "purely historical.", "no variations."] },
          { start: 'The famous passage often translated as \"Life which you look for you will never find, for when the gods created man they let death be his share\" (Tablet X, from Siduri\'s speech) advises accepting human mortality and enjoying life, though the exact translation varies depending on which version is consulted, showing that',
          "correct": "translations of Akkadian poetry reflect interpretive choices and can differ significantly.",
            "wrong": ["single correct translation.", "purely literal.", "no interpretation needed."] },
          { start: 'The advice \"Fill your belly with good things; day and night, night and day, dance and be merry, let your clothes be fresh, bathe yourself in water, cherish the little child that holds your hand\" (attributed to Siduri in Tablet X) reflects Mesopotamian acceptance of human limitations and the value of earthly pleasures, but the exact wording varies in different translations, indicating that',
          "correct": "literary quotes require consultation of reliable translations and acknowledgment of translation variations.",
            "wrong": ["single wording.", "exact quotation.", "no variation."] },
          { start: 'The epic\'s central themes—friendship (Gilgamesh and Enkidu), mortality, the search for immortality, and the flood narrative—are well-documented and represent authentic Mesopotamian concerns, though the text should be read as mythology and wisdom literature rather than historical documentation, showing that',
          "correct": "the epic provides insight into Mesopotamian values and worldview, not historical events.",
            "wrong": ["purely historical record.", "literal truth.", "factual events."] },
          { start: 'The flood narrative in the Epic of Gilgamesh shares similarities with the biblical flood account but also significant differences, and scholarly examination shows that both likely draw from earlier Mesopotamian traditions, indicating that',
          "correct": "the flood narrative represents a recurring theme in Mesopotamian literature and belief.",
            "wrong": ["single source.", "biblical priority.", "purely mythological."] }
        ]
      },
      {
        name: 'Sumerian Wisdom Literature (ETCSL Collection)',
        emoji: '🧠',
        quotes: [
          { start: 'Sumerian wisdom literature, preserved in cuneiform and translated by the Electronic Text Corpus of Sumerian Literature (ETCSL) project, includes works like the Instructions of Shuruppak and Sumerian Proverbs, showing that',
          "correct": "authentic Sumerian wisdom texts exist and have been translated by scholars from cuneiform sources.",
            "wrong": ["no real texts.", "purely invented.", "inaccessible."] },
          { start: 'The proverb \"He who possesses much silver may be happy, he who possesses much barley may be happy, but he who has nothing may sleep\" cannot be verified in the ETCSL collection or other scholarly translations of Sumerian wisdom literature, indicating that',
          "correct": "this quote is likely modern invention or paraphrase rather than translation of authentic Sumerian text.",
            "wrong": ["authenticated proverb.", "verified translation.", "documented source."] },
          { start: 'Authentic Sumerian proverbs, documented in cuneiform texts, address practical concerns like agriculture, trade, family relationships, and proper conduct, such as warnings against laziness and praise for wisdom, showing that',
          "correct": "Sumerian wisdom literature reflects practical concerns of an agricultural and commercial society.",
            "wrong": ["purely philosophical.", "no practical content.", "impractical concerns."] },
          { start: 'The Instructions of Shuruppak, an authentic Sumerian wisdom text where a father advises his son, is preserved in multiple cuneiform copies and has been translated by scholars, demonstrating that',
          "correct": "verified Sumerian wisdom texts are available for study in reliable scholarly translations.",
            "wrong": ["no real texts.", "inaccessible sources.", "purely legendary."] }
        ]
      },
      {
        name: 'Akkadian Proverbs & Wisdom (Documented Sources)',
        emoji: '📜',
        quotes: [
          { start: 'Akkadian wisdom literature, preserved in cuneiform and including works like the Counsels of Wisdom and various proverb collections, represents authentic Mesopotamian philosophical thinking, though',
          "correct": "specific proverbs must be verified against cuneiform sources rather than popular attribution.",
            "wrong": ["no real texts.", "purely invented.", "unverified sources."] },
          { start: 'The proverb \"A man who is wise is known by his deeds, not by his words\" appears in various forms in ancient wisdom literature from multiple cultures (not uniquely Akkadian) and represents a common theme of practical wisdom over empty rhetoric, showing that',
          "correct": "such sentiments, while authentic to ancient wisdom, may not be specifically Akkadian and appear in parallel forms across cultures.",
            "wrong": ["uniquely Akkadian.", "single source.", "culture-specific."] },
          { start: 'Authentic Akkadian wisdom texts address topics including proper conduct toward superiors and inferiors, the importance of wisdom and self-control, warnings against foolishness, and practical advice for living, documented in scholarly translations of cuneiform sources, showing that',
          "correct": "verified Akkadian wisdom reflects practical and ethical concerns of Mesopotamian society.",
            "wrong": ["no real texts.", "purely mythological.", "impractical philosophy."] },
          { start: 'The phrase \"Speak little, listen much; understanding comes in silence\" appears in various ancient wisdom traditions but cannot be verified as a specific Akkadian proverb in cuneiform sources, indicating that',
          "correct": "popular wisdom sayings often lack specific attribution and may represent later compilations or modern paraphrases.",
            "wrong": ["verified Akkadian proverb.", "documented in cuneiform.", "authentic translation."] }
        ]
      },
      {
        name: 'Assyrian Royal Inscriptions & Wisdom',
        emoji: '🗡️',
        quotes: [
          { start: 'Assyrian royal inscriptions, preserved in cuneiform and dating from the Assyrian Empire\'s height (particularly 9th-7th centuries BCE), document the deeds, military campaigns, and religious policies of kings, providing authentic historical material, though',
          "correct": "these are primarily propaganda texts designed to glorify the king and demonstrate his power, not objective historical records.",
            "wrong": ["purely historical.", "objective truth.", "no propaganda."] },
          { start: 'Wisdom attributed to Assyrian kings reflects values documented in royal inscriptions including military strength, justice, and devotion to the gods, though specific \"proverbs\" attributed to Assyrian figures often lack verification in primary sources, indicating that',
          "correct": "Assyrian values can be reconstructed from royal inscriptions and administrative texts, but individual quoted sayings require verification.",
            "wrong": ["all quotes verified.", "authentic sayings.", "documented statements."] },
          { start: 'The proverb \"A strong city is built not with walls, but with loyal citizens\" reflects a common theme in ancient political philosophy but cannot be verified as an authentic Assyrian proverb in cuneiform sources, showing that',
          "correct": "popular proverbs often represent modern sentiments rather than authenticated ancient texts.",
            "wrong": ["authentic Assyrian proverb.", "verified in sources.", "documented saying."] },
          { start: 'Assyrian military strategy, documented in royal inscriptions describing campaigns, sieges, and military innovations, demonstrates the sophistication of Assyrian military organization, though this information should be consulted in primary sources rather than through invented \"wisdom sayings,\" indicating that',
          "correct": "authentic Assyrian military philosophy is accessible through historical and archaeological sources.",
            "wrong": ["no real knowledge.", "inaccessible.", "purely legendary."] }
        ]
      },
      {
        name: 'Babylonian Astronomy & Mathematical Texts',
        emoji: '🔢',
        quotes: [
          { start: 'Babylonian achievements in mathematics and astronomy, documented in cuneiform mathematical texts and astronomical diaries, demonstrate sophisticated knowledge of geometry, algebra, and celestial observation, showing that',
          "correct": "Babylonian intellectual achievements were grounded in practical mathematics and empirical observation.",
            "wrong": ["purely mystical.", "no real knowledge.", "superstition only."] },
          { start: 'The famous phrase \"The life of man is like a river; it flows to the sea of death\" represents a common metaphor in ancient wisdom traditions but cannot be verified as an authentic Babylonian saying in cuneiform sources, indicating that',
          "correct": "popular philosophical sayings often lack specific historical sourcing.",
            "wrong": ["authenticated Babylonian saying.", "verified in sources.", "documented quote."] },
          { start: 'Babylonian wisdom literature, when verified in cuneiform sources like the Babylonian Theodicy (a text addressing the problem of suffering and divine justice), provides genuine insight into Babylonian philosophical thinking, showing that',
          "correct": "authentic Babylonian wisdom texts are available for study and provide real philosophical material.",
            "wrong": ["no real philosophy.", "purely mythological.", "inaccessible sources."] }
        ]
      },
      {
        name: 'Mesopotamian Religion & Cosmology',
        emoji: '🌍',
        quotes: [
          { start: 'Mesopotamian religious texts, including the Enuma Elish (creation myth) and other mythological narratives, were preserved in cuneiform and provide insight into Mesopotamian cosmology and religious beliefs, though',
          "correct": "these texts should be understood as mythological and religious material, not as historical documentation of events.",
            "wrong": ["historical record.", "literal truth.", "factual events."] },
          { start: 'The concept of the gods in Mesopotamian religion, documented in religious texts and king lists, depicted them as powerful but not omnipotent, as sometimes acting against human interests, and as requiring human service and sacrifice, showing that',
          "correct": "Mesopotamian theology represented a complex relationship between human and divine that was different from later monotheistic concepts.",
            "wrong": ["purely benevolent gods.", "omnipotent beings.", "human-centered."] },
          { start: 'The role of priests and temples in Mesopotamian society, documented in administrative texts and inscriptions, was central to the functioning of the state, as temples controlled significant resources and the priesthood held considerable power, indicating that',
          "correct": "religious institutions were integral to political and economic organization.",
            "wrong": ["purely spiritual.", "no economic role.", "no political power."] }
        ]
      },
      {
        name: 'Mesopotamian Social Structure & Law',
        emoji: '⚖️',
        quotes: [
          { start: 'Mesopotamian society was hierarchically organized with the king at the top, followed by nobles and priests, merchants and craftspeople, farmers, and enslaved persons, as documented in legal codes and administrative texts, showing that',
          "correct": "Mesopotamian societies were rigidly stratified with the Code of Hammurabi explicitly recognizing different classes (awilu/free persons, mushkenu/commoners, wardu/enslaved persons) and assigning different punishments based on class.",
            "wrong": ["egalitarian society.", "no real hierarchy.", "equal justice for all."] },
          { start: 'The role of women in Mesopotamian society, documented in legal codes and administrative texts, included property ownership in some cases and legal standing, though women\'s legal status was generally subordinate to men\'s, indicating that',
          "correct": "women had more legal rights in Mesopotamian societies than in some contemporaneous cultures, though they remained subordinate.",
            "wrong": ["complete equality.", "no legal rights.", "purely domestic roles."] },
          { start: 'Slavery in Mesopotamian societies, documented in legal codes and administrative texts, was central to the economy, with enslaved persons obtained through debt bondage, war, and trade, showing that',
          "correct": "enslaved labor was integral to Mesopotamian economic organization.",
            "wrong": ["no slavery.", "purely voluntary.", "minimal economic role."] }
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
          { start: 'Miyamoto Musashi (1584-1645) was a legendary swordmaster documented in historical records and sagas, but the quotes attributed to him come primarily from his Book of Five Rings (Gorin no Sho), written late in his life and preserved through copies, indicating that',
          "correct": "his exact words are filtered through scribal transmission and later compilation, and some attributed quotes may not be authentic.",
            "wrong": ["purely legendary figure.", "no real person.", "all quotes verified."] },
          { start: 'The Book of Five Rings, Musashi\'s treatise on strategy and the way of the warrior, was written around 1645 and primarily discusses swordsmanship, strategy, and martial philosophy as applicable to individual combat, showing that',
          "correct": "the text is a technical and philosophical work on dueling strategy, not a general wisdom text.",
            "wrong": ["universal wisdom collection.", "philosophical only.", "no strategic content."] },
          { start: 'Musashi\'s famous duel with Sasaki Kojirou, described in biographical accounts, demonstrates his skill but the details are subject to later embellishment and hagiography, indicating that',
          "correct": "historical accounts of Musashi contain elements of legend and biographical idealization.",
            "wrong": ["purely historical fact.", "completely accurate.", "no embellishment."] },
          { start: 'Many quotes popularly attributed to Musashi, including \"There is nothing outside of yourself\" and \"Do not sleep under a roof,\" cannot be verified in the Book of Five Rings or contemporary sources, suggesting that',
          "correct": "popular Musashi quotes often come from later adaptations, movies, or modern inventions rather than authentic historical sources.",
            "wrong": ["all verified quotes.", "authentic sources.", "documented statements."] },
          { start: 'Musashi\'s philosophy emphasized direct perception and practical application rather than abstract theorizing, which is authentically reflected in the Book of Five Rings\' focus on concrete technique and strategy, showing that',
          "correct": "verified Musashi teachings emphasize empirical observation and practical mastery over philosophical abstraction.",
            "wrong": ["purely philosophical.", "theoretical only.", "no practical application."] }
        ]
      },
      {
        name: 'Matsuo Bashō (Poet & Historical Figure)',
        emoji: '🌸',
        quotes: [
          { start: 'Matsuo Bashō (1644-1694) was a renowned haiku poet whose works are preserved in collections and whose diaries documenting his travels survive, providing authentic records of his thoughts and poetry, though',
          "correct": "the diaries were edited and compiled after his death and reflect later editorial choices.",
            "wrong": ["purely invented figure.", "no real works.", "completely fabricated."] },
          { start: 'The famous haiku \"Old silent pond / A frog jumps into the pond / Splash! Silence again\" (Furuike ya / Kawazu tobikomu / Mizu no oto) is documented in multiple sources and represents authentic Bashō work, but',
          "correct": "the English translations vary and some popular versions may not accurately convey the original Japanese meaning.",
            "wrong": ["no authentic works.", "completely fabricated.", "translation is exact."] },
          { start: 'Bashō\'s philosophy emphasized direct observation of nature and the principle of \"karumi\" (lightness/levity), documented in his diaries and poetry, showing that',
          "correct": "Bashō\'s authentic philosophical positions can be reconstructed from verified written sources.",
            "wrong": ["no real philosophy.", "purely poetic.", "no documented beliefs."] },
          { start: 'Quotes attributed to Bashō such as \"Do not seek to follow in the footsteps of the wise\" appear in later biographical compilations but may represent editorial interpretation rather than direct quotation, indicating that',
          "correct": "popular Bashō quotes require verification against primary sources like his diaries and verified poetry collections.",
            "wrong": ["all authenticated.", "direct quotations.", "verified sources."] },
          { start: 'Bashō\'s actual haiku works, documented in collections like Oku no Hosomichi (The Narrow Road to the Deep North), reflect his genuine poetic vision and can be consulted in reliable translations, demonstrating that',
          "correct": "authentic Bashō material is available though often obscured by later interpretations and apocryphal quotes.",
            "wrong": ["lost to history.", "no primary sources.", "purely legendary."] }
        ]
      },
      {
        name: 'Tokugawa Ieyasu (Shogun & Historical Figure)',
        emoji: '🏯',
        quotes: [
          { start: 'Tokugawa Ieyasu (1543-1616) was the founder of the Tokugawa Shogunate that ruled Japan for over 250 years, and his historical importance is well-documented in contemporary sources and historical records, though',
          "correct": "quotes attributed to him come from later biographical sources and may reflect later editorial choices rather than his direct words.",
            "wrong": ["legendary figure only.", "no real person.", "all quotes verified."] },
          { start: 'Ieyasu\'s political philosophy, documented through the policies and system he established, emphasized stability, hierarchical order, and long-term strategy rather than immediate conquest, showing that',
          "correct": "his actual philosophy can be inferred from his actions and policies rather than from popular quotes.",
            "wrong": ["no real philosophy.", "purely martial.", "no strategic vision."] },
          { start: 'The quote \"Life is like unto a long journey with a heavy burden\" attributed to Ieyasu cannot be verified in contemporary sources and may represent later editorial invention or paraphrase, indicating that',
          "correct": "popular Ieyasu quotes require careful verification against primary historical sources.",
            "wrong": ["directly verified.", "contemporary documentation.", "authenticated quote."] },
          { start: 'Ieyasu\'s actual writings and documented statements, preserved in historical records, provide insight into his thinking on governance and strategy, though these are less commonly quoted than popular aphorisms, showing that',
          "correct": "authentic Ieyasu material is available but often overshadowed by popular misattributions.",
            "wrong": ["no documented statements.", "purely legendary.", "no primary sources."] }
        ]
      },
      {
        name: 'Yamamoto Tsunetomo (Bushidō Philosopher)',
        emoji: '🌑',
        quotes: [
          { start: 'Yamamoto Tsunetomo (1659-1719) was a samurai who served the Saga Domain and whose thoughts on bushidō (the way of the samurai) were recorded by his student Hasegawa Dokuzan and compiled into the Hagakure (In the Shade of Leaves), indicating that',
          "correct": "Tsunetomo\'s words are documented but filtered through his student\'s recording and interpretation.",
            "wrong": ["purely invented figure.", "no real sources.", "completely fabricated."] },
          { start: 'The Hagakure, compiled in the early 18th century, was not widely known until the 20th century and has been subject to reinterpretation, particularly by Japanese militarists in the 1930s-1940s who used it to support militaristic ideology, showing that',
          "correct": "the Hagakure\'s reception and interpretation has been shaped by historical context and can be misappropriated.",
            "wrong": ["always understood correctly.", "no reinterpretation.", "purely philosophical work."] },
          { start: 'The famous opening \"The way of the samurai is found in death\" (Bushido to iu wa, shinu koto to mituke keri) is authentically documented in the Hagakure and represents Tsunetomo\'s actual philosophical position, though it requires contextual understanding, showing that',
          "correct": "verified Hagakure quotes are authentic but may be misunderstood without proper context.",
            "wrong": ["misquoted.", "not authentic.", "fabricated entirely."] },
          { start: 'Tsunetomo\'s philosophy emphasized loyalty to one\'s lord and the acceptance of death as part of the samurai path, documented in the Hagakure, though later interpretation has sometimes distorted his actual meaning, indicating that',
          "correct": "authentic Tsunetomo philosophy is accessible but requires careful reading against the lens of later reinterpretation.",
            "wrong": ["purely violent.", "no real philosophy.", "completely misunderstood."] }
        ]
      },
      {
        name: 'Takeda Shingen (Warlord & Military Strategist)',
        emoji: '🦅',
        quotes: [
          { start: 'Takeda Shingen (1521-1573) was a powerful daimyo (feudal lord) whose military campaigns and strategies are documented in historical records and contemporary accounts, though',
          "correct": "quotes attributed to him come from later historical compilations and may not represent his direct words.",
            "wrong": ["purely legendary.", "no real person.", "all quotes verified."] },
          { start: 'The famous motto \"Swift as the wind, silent as the forest, fierce as fire, immovable as the mountain\" (Hayai koto kaze no gotoku, shizuka naru koto mori no gotoku, arashii koto hi no gotoku, ugokanu koto yama no gotoku) is attributed to Shingen but its historical authenticity is disputed, indicating that',
          "correct": "popular quotes attributed to Shingen should be treated cautiously without verification in primary sources.",
            "wrong": ["directly verified.", "authenticated quote.", "contemporary documentation."] },
          { start: 'Shingen\'s actual military strategy, documented through records of his campaigns and administrative decisions, emphasized organization, supply lines, and careful positioning rather than reckless aggression, showing that',
          "correct": "his actual strategic philosophy can be inferred from his documented actions.",
            "wrong": ["purely aggressive.", "no real strategy.", "documented is uncertain."] },
          { start: 'Shingen\'s conflict with Uesugi Kenshin, the neighboring warlord, is extensively documented and represents one of the major military rivalries of the Sengoku period, though the famous \"Battle of Kawanakajima\" accounts include legendary elements, indicating that',
          "correct": "historical events involving Shingen contain elements of legend and later embellishment alongside documented facts.",
            "wrong": ["purely historical.", "no embellishment.", "completely documented."] }
        ]
      },
      {
        name: 'Zen Buddhism & Philosophy (Complex Historical Development)',
        emoji: '☯️',
        quotes: [
          { start: 'Zen Buddhism, which developed in China as Chan Buddhism and was transmitted to Japan beginning in the 12th century, emphasizes direct experience and meditation (zazen) over textual study, though this philosophy was developed over centuries by many teachers, meaning that',
          "correct": "Zen teachings cannot be attributed to single figures and represent accumulated tradition.",
            "wrong": ["single founder.", "invented suddenly.", "no real development."] },
          { start: 'Famous Zen sayings like \"The obstacle is the path\" and \"Before enlightenment, chop wood, carry water; after enlightenment, chop wood, carry water\" appear in collections of Zen anecdotes (koans) but often lack specific attribution and may represent later compilations, indicating that',
          "correct": "popular Zen quotes are often anonymous or have uncertain authorship within compiled collections.",
            "wrong": ["directly attributed.", "single author.", "verified sources."] },
          { start: 'The saying \"If you meet the Buddha on the road, kill him\" (attributed to Zen master Linji in China, not Japan) represents the Zen principle of rejecting attachment to concepts and authority, though the exact quote\'s authenticity and translation are debated, showing that',
          "correct": "even famous Zen sayings require careful examination of their origin, translation, and intended meaning.",
            "wrong": ["transparent meaning.", "direct quotation.", "no debate."] },
          { start: 'Zen influence on Japanese culture, including martial arts, aesthetics, and philosophy, is well-documented and represents a genuine historical synthesis of Buddhist ideas with Japanese cultural traditions, though individual attributed quotes often lack clear sourcing, indicating that',
          "correct": "Zen\'s historical influence is genuine but specific quotes often derive from compiled collections rather than primary sources.",
            "wrong": ["no real influence.", "purely invented.", "all quotes verified."] }
        ]
      },
      {
        name: 'Samurai Code & Bushidō (Historical Development)',
        emoji: '🗡️',
        quotes: [
          { start: 'The concept of bushidō (the way of the samurai), while having roots in samurai practice, was formally systematized and codified as a philosophical system primarily during the Edo period (1603-1868), when actual warfare had ceased, indicating that',
          "correct": "bushidō as a coherent ideology developed during a period of relative peace when samurai served administrative rather than military functions.",
            "wrong": ["ancient tradition.", "unchanged practice.", "purely martial origin."] },
          { start: 'The samurai code emphasized loyalty to one\'s lord (daimyo), martial skill, honor, and acceptance of death, values documented in historical accounts and codified in works like the Hagakure, though the meaning and interpretation of these values changed over time, showing that',
          "correct": "samurai values were historically real but evolved and were reinterpreted across centuries.",
            "wrong": ["unchanging tradition.", "purely military.", "no evolution."] },
          { start: 'The practice of seppuku (ritual suicide by cutting one\'s abdomen) was part of samurai culture and is documented in historical records, though it was not universal and was eventually prohibited by the Meiji government (1868+), indicating that',
          "correct": "extreme samurai practices were real but limited and eventually discontinued.",
            "wrong": ["universal practice.", "still practiced.", "purely legendary."] },
          { start: 'Popular representations of samurai culture in modern media often romanticize or misrepresent historical bushidō, particularly through invention of quotes and philosophical principles not documented in historical sources, showing that',
          "correct": "modern popular culture has created a version of samurai philosophy that differs significantly from historical reality.",
            "wrong": ["purely accurate.", "historically documented.", "no distortion."] }
        ]
      },
      {
        name: 'Japanese Literature & Poetic Tradition',
        emoji: '📖',
        quotes: [
          { start: 'Japanese poetic traditions including tanka (31-syllable poems) and haiku (17-syllable poems) developed over centuries with documented practitioners and collections, providing authentic material for study, though',
          "correct": "popular representations often simplify or misinterpret these complex literary forms.",
            "wrong": ["no real tradition.", "purely invented.", "no documented works."] },
          { start: 'The most reliable way to encounter authentic Japanese philosophy and aesthetics is through consultation of primary sources in reliable translations, including verified collections of poetry, historical documents, and philosophical texts, rather than relying on popular aphorisms, showing that',
          "correct": "authentic Japanese culture is accessible through careful study of primary sources.",
            "wrong": ["inaccessible.", "lost to history.", "only popular quotes available."] },
          { start: 'Japanese aesthetic principles like wabi-sabi (the beauty of imperfection and impermanence), documented in historical sources and artistic practice, represent genuine cultural values that can be studied directly rather than through invented quotes, indicating that',
          "correct": "real Japanese aesthetics are more interesting and accessible than invented wisdom.",
            "wrong": ["no real aesthetics.", "purely invented.", "inaccessible to study."] }
        ]
      },
      {
        name: 'Historical Context & Social Structure',
        emoji: '🏛️',
        quotes: [
          { start: 'Medieval and early modern Japan (12th-19th centuries) was organized around feudal relationships between daimyo (lords) and samurai (warriors), with a separate merchant and peasant class, documented in historical records and administrative documents, showing that',
          "correct": "Japanese society was hierarchically organized with documented social roles and relationships.",
            "wrong": ["egalitarian society.", "no real hierarchy.", "undocumented system."] },
          { start: 'The role of women in Japanese society varied by class and period, with elite women sometimes holding significant power, while commoner and peasant women had more restricted roles, indicated by historical records and legal codes, though',
          "correct": "women\'s historical experiences are less documented than men\'s and require careful interpretation.",
            "wrong": ["equally documented.", "same across classes.", "purely domestic roles."] },
          { start: 'The introduction of Buddhism and Chinese cultural elements into Japan, beginning in the 6th century and continuing through the medieval period, resulted in cultural synthesis rather than cultural replacement, documented in historical and archaeological evidence, showing that',
          "correct": "Japanese culture developed through engagement with external influences rather than isolation.",
            "wrong": ["purely indigenous.", "no outside influence.", "cultural rejection."] }
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
          { start: 'The Hávamál, a poem preserved in the 13th-century Codex Regius, presents wisdom attributed to Odin but was composed during the Viking Age or possibly earlier, reflecting that',
          "correct": "the text represents Viking Age values and worldview, though its exact date of composition is uncertain and it was written down centuries after composition.",
            "wrong": ["purely mythological.", "no historical value.", "written by Odin."] },
          { start: 'The stanza \"Cattle die, kinsmen die, every man is mortal: but the good name never dies of one who has done well\" reflects the Viking cultural emphasis on achieving lasting fame through deeds, showing that',
          "correct": "honor and reputation were valued as the only form of immortality available to mortals in Norse culture.",
            "wrong": ["purely religious belief.", "afterlife was certain.", "fame was unimportant."] },
          { start: 'The Hávamál\'s advice about hospitality (\"a guest needs water, towel, and welcome\") and the dangers of over-trust (\"never trust one whose father or brother you have slain\") reflects the social realities of Viking Age Scandinavia where',
          "correct": "bonds of kinship created lasting feuds, hospitality created social obligations, and trust had to be carefully managed.",
            "wrong": ["no real feuds.", "purely ceremonial.", "no social consequences."] },
          { start: 'The advice \"wake early if you want another man\'s life or land\" directly acknowledges that',
          "correct": "Viking Age societies were characterized by competition for resources, raiding, and territorial conflict.",
            "wrong": ["peaceful societies.", "no conflict.", "no competition."] },
          { start: 'The Hávamál\'s emphasis on moderate wisdom (\"moderately wise a man should be, not too crafty\") and warnings against excessive cleverness reflect that',
          "correct": "Norse culture valued practical wisdom over theoretical knowledge, and excessive ambition was seen as dangerous.",
            "wrong": ["pure intellectualism.", "excessive ambition was praised.", "no practical concerns."] }
        ]
      },
      {
        name: 'Viking Age Society & Social Structure',
        emoji: '👑',
        quotes: [
          { start: 'Viking Age Scandinavian society (ca. 790-1066 CE) was hierarchically organized into jarl (jarls/nobles), karls (freemen), and thralls (enslaved persons), with the jarls controlling land, military forces, and trade networks, indicating that',
          "correct": "Norse societies were stratified with concentrated power in the hands of a warrior aristocracy.",
            "wrong": ["purely egalitarian.", "no real hierarchy.", "equal status for all."] },
          { start: 'The role of women in Viking Age society included property ownership (in some cases), the management of households and farms, religious leadership as völva (seers), and legal standing in courts, showing that',
          "correct": "women had more legal and economic rights in Viking Age Scandinavia than in many contemporary European societies.",
            "wrong": ["complete subjugation.", "no property rights.", "purely domestic roles."] },
          { start: 'The practice of slavery (thralldom) was central to Viking Age economies, with enslaved persons obtained through raiding, war, trade, and debt bondage, providing labor for agriculture and domestic work, demonstrating that',
          "correct": "Viking Age prosperity was built partly on enslaved labor.",
            "wrong": ["no slavery existed.", "purely voluntary.", "minimal economic role."] },
          { start: 'The complex web of kinship obligations in Viking Age societies, reflected in literary texts and legal codes, created systems where injury to one person created obligations for entire family groups, showing that',
          "correct": "Viking Age societies functioned through networks of mutual obligation and revenge, with formal compensation systems (wergeld) attempting to regulate conflicts.",
            "wrong": ["purely individual justice.", "no kinship system.", "no obligations."] }
        ]
      },
      {
        name: 'Viking Raids & Expansion (Archaeological & Documentary Evidence)',
        emoji: '🛡️',
        quotes: [
          { start: 'The Viking raids on European targets, including monasteries, trading centers, and coastal settlements, are documented in contemporary sources like the Anglo-Saxon Chronicle, Frankish annals, and Irish annals, combined with archaeological evidence of destruction and Viking settlement, showing that',
          "correct": "Viking expansion involved organized military campaigns targeting wealthy, vulnerable sites.",
            "wrong": ["no real raids.", "purely legendary.", "no historical documentation."] },
          { start: 'The Viking attacks on monasteries like Lindisfarne (793 CE) and Iona targeted institutions known to hold wealth in the form of precious metals, reliquaries, and manuscripts, indicating that',
          "correct": "Viking raiding was strategically planned to acquire portable wealth and valuable goods.",
            "wrong": ["purely religious motivation.", "random targets.", "no strategic planning."] },
          { start: 'The Viking settlement of Iceland (beginning ca. 874 CE), documented in medieval sources like Landnámabók and confirmed by archaeological evidence, demonstrates that',
          "correct": "Vikings engaged in deliberate colonization and settlement, not only raiding.",
            "wrong": ["purely temporary raids.", "no settlements.", "no real expansion."] },
          { start: 'The establishment of Viking trading posts and settlements in Russia (Varangian routes through present-day Russia to Constantinople and Baghdad), documented in Byzantine, Islamic, and Russian sources, shows that',
          "correct": "Viking activities included extensive trade networks and long-distance commerce, not only raiding.",
            "wrong": ["purely raiders.", "no trade networks.", "no settlements."] },
          { start: 'The Norman settlement of Normandy (early 10th century), established through agreement with the Frankish king and documented in contemporary sources, demonstrates that',
          "correct": "some Viking expansion was negotiated and integrated into existing political structures rather than purely conquest-based.",
            "wrong": ["purely military conquest.", "no negotiation.", "no integration."] }
        ]
      },
      {
        name: 'Norse Shipbuilding & Maritime Technology',
        emoji: '⛵',
        quotes: [
          { start: 'The Viking ships (longships), excavated at archaeological sites like Gokstad, Oseberg, and Skuldelev, reveal sophisticated construction techniques including oak construction, clinker-built planking, and shallow drafts that allowed both ocean navigation and inland river travel, demonstrating that',
          "correct": "Norse shipbuilding represented advanced maritime technology that enabled their expansion across the Atlantic and into Mediterranean and Black Sea regions.",
            "wrong": ["primitive boats.", "no real technology.", "limited navigation."] },
          { start: 'The Oseberg ship burial (ca. 834 CE), excavated in Norway and containing a wealthy woman\'s grave goods including carved wooden items, tapestries, and household goods, shows that',
          "correct": "Viking Age societies had sophisticated craftsmanship and significant wealth inequality, with elite individuals buried with elaborate grave goods.",
            "wrong": ["egalitarian society.", "no real wealth.", "simple culture."] },
          { start: 'Viking ships\' ability to navigate both open ocean and shallow rivers allowed Vikings to penetrate deep into continental Europe and establish settlements in places that were difficult for other medieval powers to reach, demonstrating that',
          "correct": "maritime technology gave Vikings strategic advantages in raiding, trade, and settlement.",
            "wrong": ["no real advantage.", "limited navigation.", "no strategic benefit."] }
        ]
      },
      {
        name: 'Norse Religion & Cosmology',
        emoji: '🌍',
        quotes: [
          { start: 'Norse religion, preserved in texts like the Poetic Edda and Prose Edda (compiled in 13th century Iceland but reflecting older traditions), presents a cosmology centered on Yggdrasil (world tree), nine realms, and gods like Odin, Thor, and Freyja, though these texts were written down centuries after the Viking Age conversion to Christianity, indicating that',
          "correct": "Norse mythology as we know it is filtered through medieval Christian scribes and may not accurately represent pre-Christian Viking beliefs.",
            "wrong": ["directly preserved from ancient times.", "purely accurate documentation.", "no Christian influence."] },
          { start: 'The concept of Ragnarök (apocalyptic destruction and renewal), prominent in Norse mythology, reflects a cyclical worldview where death and rebirth are inevitable, possibly related to seasonal cycles in Scandinavian climate, showing that',
          "correct": "religious cosmologies often reflect the environmental and cultural experiences of the people who develop them.",
            "wrong": ["purely supernatural belief.", "no real basis.", "arbitrary concept."] },
          { start: 'The religious emphasis on honor in battle and the concept of Valhalla (afterlife for those who die in combat), documented in literary sources, appears to reflect the cultural values of a warrior society where martial prowess was highly valued, indicating that',
          "correct": "religious beliefs served to reinforce and legitimize social values and warrior status.",
            "wrong": ["purely spiritual belief.", "no social function.", "no political purpose."] },
          { start: 'The conversion of Scandinavia to Christianity beginning in the 10th century, documented in contemporary sources and archaeological evidence, shows that',
          "correct": "Viking Age religions changed through a combination of missionary activity, political alliances, and the integration of local Christian powers.",
            "wrong": ["purely religious persuasion.", "no political factors.", "instantaneous conversion."] },
          { start: 'The preservation of Norse mythology in medieval Icelandic texts written long after Christianization means that the myths were transmitted through a Christian lens and may reflect post-Viking religious syncretism, demonstrating that',
          "correct": "recorded Norse mythology may not accurately represent pre-Christian Viking beliefs.",
            "wrong": ["purely preserved beliefs.", "unchanged from ancient times.", "accurate documentation."] }
        ]
      },
      {
        name: 'Viking Age Trade Networks',
        emoji: '💰',
        quotes: [
          { start: 'Archaeological evidence and contemporary sources document extensive Viking trade networks extending from Baghdad to the Atlantic, with Vikings trading furs, amber, and walrus ivory for silk, spices, and precious metals, showing that',
          "correct": "Viking expansion included significant long-distance trade alongside raiding.",
            "wrong": ["purely raids.", "no real trade.", "isolated commerce."] },
          { start: 'The discovery of Arab coins (dirhams) in Scandinavian hoards, with concentrations increasing during the 8th-10th centuries, indicates that',
          "correct": "Vikings had access to Islamic commercial networks and traded directly or through intermediaries with the Islamic world.",
            "wrong": ["no Islamic contact.", "no trade networks.", "isolated from the world."] },
          { start: 'The establishment of trading centers like Haithabu (in present-day Germany), Birka (Sweden), and Novgorod (Russia), documented archaeologically and in historical sources, demonstrates that',
          "correct": "Vikings created sophisticated commercial centers that facilitated long-distance trade.",
            "wrong": ["no settlements.", "purely raiding bases.", "no real commerce."] },
          { start: 'The role of Viking merchants (kaupmen) in establishing trade routes and commercial networks, documented in sources like the account of trader Ahmad ibn Fadlan describing Varangian Vikings, shows that',
          "correct": "Viking societies had specialized merchants who conducted commerce alongside warriors and farmers.",
            "wrong": ["no merchant class.", "purely warriors.", "no economic specialization."] }
        ]
      },
      {
        name: 'Ragnar Lothbrok (Historical Legend vs. Fictional Construction)',
        emoji: '🪓',
        quotes: [
          { start: 'Ragnar Lothbrok (\"Lothbrok the legendary hero\") appears in multiple sources including the Saga of Ragnar Lothbrok and other Norse sagas as a great warrior and king, but modern scholars debate whether he was a historical person, a composite of multiple historical figures, or a purely legendary character, showing that',
          "correct": "the saga accounts cannot be taken as straightforward historical documentation without corroborating evidence.",
            "wrong": ["purely historical.", "no real person.", "completely fictional."] },
          { start: 'The legendary account of Ragnar\'s conquest of England and his death in a snake pit is presented in Norse sagas but has no corroboration in contemporary sources or archaeological evidence, indicating that',
          "correct": "saga narratives may contain folk memory, legendary embellishment, or purely fictional material.",
            "wrong": ["historically accurate.", "confirmed by sources.", "purely factual."] },
          { start: 'If Ragnar was a historical figure, he likely lived in the 9th century, during the period of major Viking expansion and the Great Heathen Army\'s invasion of England documented in the Anglo-Saxon Chronicle, suggesting that',
          "correct": "legendary sagas may contain kernels of historical events transformed through storytelling.",
            "wrong": ["completely fictional.", "no historical basis.", "no real events."] }
        ]
      },
      {
        name: 'Viking Age Warfare & Military Organization',
        emoji: '⚔️',
        quotes: [
          { start: 'Viking warfare, reconstructed from archaeological evidence, written sources, and saga accounts, involved shield-wall formations, hand-to-hand combat with swords and axes, and psychological intimidation through noise and displays of ferocity, demonstrating that',
          "correct": "Viking military tactics were adapted to their equipment and cultural values emphasizing individual valor within group formations.",
            "wrong": ["no real tactics.", "purely individual combat.", "chaotic fighting."] },
          { start: 'The Great Heathen Army\'s invasion of England (865-878 CE), documented in the Anglo-Saxon Chronicle and supported by archaeological evidence of settlements and fortifications, shows that',
          "correct": "Vikings conducted organized military campaigns with strategic objectives including conquest and settlement.",
            "wrong": ["purely raiding.", "no organization.", "no real invasion."] },
          { start: 'The resistance to Vikings by figures like King Alfred the Great, documented in contemporary sources, demonstrates that',
          "correct": "Viking expansion faced organized military opposition and that their success was not inevitable.",
            "wrong": ["unopposed expansion.", "always victorious.", "no resistance."] }
        ]
      },
      {
        name: 'Scandinavian Political Development',
        emoji: '👑',
        quotes: [
          { start: 'The unification of Norway under figures like Harald Fairhair (late 9th century), documented in sagas and suggested by archaeological and historical evidence, shows that',
          "correct": "Viking Age Scandinavia experienced political consolidation as regional kingdoms merged into larger units.",
            "wrong": ["purely fragmented.", "no real unification.", "permanent independence."] },
          { start: 'The relationship between Viking raiding and internal Scandinavian politics, suggested by some historians, indicates that',
          "correct": "the need to control resources and maintain warrior followings may have motivated some Vikings to seek wealth and power through raiding.",
            "wrong": ["purely external aggression.", "no political factors.", "purely religious motivation."] },
          { start: 'The adoption of Christianity by Scandinavian rulers in the 10th-11th centuries, documented in sources and reflected in archaeological evidence of church building, served political purposes including',
          "correct": "integration with Christian European powers and the establishment of legitimacy through Christian coronation and blessing.",
            "wrong": ["purely religious conversion.", "no political benefit.", "spontaneous adoption."] }
        ]
      },
      {
        name: 'Runic Writing & Literacy',
        emoji: '📜',
        quotes: [
          { start: 'Runic inscriptions, found on stones, weapons, and portable objects throughout the Viking Age Scandinavian region, were used for short inscriptions, commemorations, and possibly magical or religious purposes, showing that',
          "correct": "runes served practical and ceremonial functions in Viking Age societies.",
            "wrong": ["purely mystical.", "no real purpose.", "purely magical."] },
          { start: 'The extensive use of the Latin alphabet in Viking Age sources, particularly for legal documents and religious texts, demonstrates that',
          "correct": "as Scandinavian societies became more complex and Christianized, literacy in Latin became important for administrative and religious purposes.",
            "wrong": ["no real literacy.", "runes only.", "no written communication."] },
          { start: 'The limited literacy of most Viking Age people, with most being illiterate and communication conducted orally or through specialized scribes, means that',
          "correct": "the preservation of sagas and stories through oral tradition before written compilation centuries later introduces possibilities for change and alteration.",
            "wrong": ["universal literacy.", "accurate oral transmission.", "no changes over time."] }
        ]
      },
      {
        name: 'Archaeological Evidence & Material Culture',
        emoji: '🏺',
        quotes: [
          { start: 'Archaeological excavations at Viking Age sites like Hedeby, Birka, and Gotland reveal extensive trade networks indicated by artifacts including Byzantine coins, Islamic glass, and rare woods imported from distant regions, showing that',
          "correct": "Viking societies had access to goods and wealth from across Eurasia through trade.",
            "wrong": ["isolated societies.", "no real trade.", "purely local goods."] },
          { start: 'The discovery of Viking weapons including swords, axes, and spears with sophisticated metalwork demonstrates that',
          "correct": "Norse metalworking technology was advanced and produced high-quality weapons.",
            "wrong": ["primitive weapons.", "no real technology.", "crude production."] },
          { start: 'The evidence of extensive house settlements and farm structures from the Viking Age shows that',
          "correct": "most Vikings were farmers and settlers, not raiders, and raiding was seasonal or occasional activity.",
            "wrong": ["purely nomadic.", "all raiders.", "no settlements."] }
        ]
      },
      {
        name: 'Saga Literature & Historical Reliability',
        emoji: '📖',
        quotes: [
          { start: 'The Norse sagas, including the Íslendingasögur (Sagas of Icelanders) and other works, were composed and written down primarily in the 13th-14th centuries, centuries after the events they describe, indicating that',
          "correct": "sagas are literary compositions reflecting later medieval interests and values, not contemporary historical documentation.",
            "wrong": ["contemporary records.", "pure history.", "no later editing."] },
          { start: 'The sagas contain anachronisms, internal contradictions, and elements of folklore and legend mixed with possible historical kernels, showing that',
          "correct": "the sagas must be treated as literary sources requiring careful analysis to extract possible historical information.",
            "wrong": ["purely accurate history.", "no fiction.", "clear historical record."] },
          { start: 'The debate among scholars about the historical reliability of specific saga accounts (for example, whether Leif Erikson really reached North America as described in the sagas or whether the account conflates multiple expeditions) demonstrates that',
          "correct": "saga narratives cannot be used as straightforward historical sources without corroboration.",
            "wrong": ["purely reliable.", "accurate accounts.", "no scholarly debate."] }
        ]
      },
      {
        name: 'Women in Viking Age Society',
        emoji: '👩',
        quotes: [
          { start: 'The evidence for women\'s roles in Viking Age society, including the Oseberg ship burial containing grave goods indicating a woman of high status, and saga accounts describing female leaders and property owners, shows that',
          "correct": "women in Viking societies had more legal authority and economic power than their counterparts in many medieval European societies.",
            "wrong": ["completely subjugated.", "no property rights.", "purely domestic."] },
          { start: 'The role of völva (female seers/shamans) in Viking Age religious practice, documented in sagas and supported by archaeological evidence of female religious practitioners, demonstrates that',
          "correct": "women held important religious and ceremonial roles that gave them authority and influence.",
            "wrong": ["no religious authority.", "purely male priesthood.", "no real power."] },
          { start: 'Women\'s ability to own property, conduct business, and manage farms during the absence of men, documented in saga accounts and legal sources, indicates that',
          "correct": "women had economic agency and could act independently in certain circumstances.",
            "wrong": ["complete dependence.", "no economic authority.", "purely subordinate."] }
        ]
      },
      {
        name: 'The End of the Viking Age & Integration into European Society',
        emoji: '⚔️',
        quotes: [
          { start: 'The end of the Viking Age is conventionally dated to 1066 CE (Battle of Stamford Bridge and Norman Conquest of England), which marks the point when Scandinavian societies had been Christianized and integrated into the broader medieval European political system, showing that',
          "correct": "Viking expansion was limited by the development of stronger medieval states and the adoption of Christianity by Scandinavian rulers.",
            "wrong": ["endless expansion.", "no real integration.", "purely military defeat."] },
          { start: 'The transformation of Vikings into European nobility, particularly evident in the Norman conquest of England and the Varangian influence in Constantinople, demonstrates that',
          "correct": "Vikings adapted to and integrated into existing medieval power structures, becoming part of the European feudal system.",
            "wrong": ["purely external.", "no integration.", "permanent outsiders."] },
          { start: 'The legacy of the Viking Age included the settlement of Iceland, Greenland, and the brief colonization of North America (Vinland), the establishment of trade networks connecting Scandinavia to the Islamic world and Asia, and the cultural and linguistic influence on the regions they conquered, showing that',
          "correct": "Viking expansion had lasting impacts on European, Atlantic, and global history.",
            "wrong": ["no real legacy.", "purely destructive.", "no lasting impact."] }
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
          { start: "Osman I, the founder of the Ottoman Empire in the late 13th century, began as the leader of a small Turkish principality (beylik) in Anatolia that gradually expanded through military conquest and strategic marriages, demonstrating that",
          "correct": "the Ottoman Empire emerged from modest beginnings as one of many Anatolian states competing for regional dominance.",
            "wrong": ["instantly a great power.", "created by conquest alone.", "no strategic alliances."] },
          { start: "The early Ottomans, led by Osman and his successors, systematized military organization and administrative structures that would distinguish them from other Anatolian principalities, allowing them to",
          "correct": "develop institutional frameworks that enabled sustained expansion and centralized control.",
            "wrong": ["remain disorganized.", "lack administration.", "follow tribal traditions."] },
          { start: "The Ottomans' crossing into the Balkans in the 14th century marked a crucial expansion that transformed them from an Anatolian power into a European power, eventually leading to",
          "correct": "the establishment of Ottoman dominance in southeastern Europe for centuries.",
            "wrong": ["rapid collapse.", "limited influence.", "no European presence."] }
        ]
      },
      {
        name: "Mehmed II & the Conquest of Constantinople",
        emoji: "⚔️",
        quotes: [
          { start: "The conquest of Constantinople in 1453 by Mehmed II represented a watershed moment in world history, ending over a thousand years of Byzantine rule and demonstrating that",
          "correct": "the Ottoman Empire possessed superior military technology, organization, and resources compared to the declining Byzantine state.",
            "wrong": ["equal military strength.", "no technological advantage.", "Byzantine victory."] },
          { start: "Mehmed II's use of massive bombards and gunpowder artillery at Constantinople showed that",
          "correct": "early Ottoman military innovations with firearms and siege weaponry were crucial to their conquests.",
            "wrong": ["traditional methods only.", "no artillery used.", "bows and arrows."] },
          { start: "The fall of Constantinople allowed the Ottomans to control the crucial strait connecting Europe and Asia and to establish their capital in Istanbul, which meant that",
          "correct": "they secured a geopolitically strategic position controlling trade routes and military passage.",
            "wrong": ["no strategic value.", "lost economic advantage.", "isolated position."] }
        ]
      },
      {
        name: "The Devshirme System & Janissaries",
        emoji: "🎖️",
        quotes: [
          { start: "The Ottoman devshirme system, which recruited boys from conquered Christian territories for training as elite soldiers (Janissaries) or administrators, was a sophisticated mechanism for",
          "correct": "converting subject populations into loyal imperial servants while eliminating local aristocratic power bases.",
            "wrong": ["purely enslaving populations.", "random conscription.", "no selection criteria."] },
          { start: "The Janissaries, the elite military corps formed through devshirme, became the Ottoman Empire's most formidable fighting force and a key pillar of imperial power, though they also",
          "correct": "eventually became a destabilizing force that could influence or overthrow sultans.",
            "wrong": ["always loyal.", "no political power.", "permanently stable."] },
          { start: "The devshirme system, though based on forced recruitment, created opportunities for social mobility among non-Muslim subjects who could rise to positions of high administrative and military rank, showing that",
          "correct": "Ottoman social structures, though hierarchical and controlled, offered some pathways for advancement.",
            "wrong": ["no mobility.", "purely hereditary.", "no advancement possible."] }
        ]
      },
      {
        name: "Ottoman Administrative Organization",
        emoji: "📜",
        quotes: [
          { start: "The Ottoman administrative system was based on a hierarchical bureaucracy headed by the Sultan, with central government institutions mirroring and controlling provincial administration, demonstrating that",
          "correct": "the Ottomans created one of the most sophisticated centralized states of the early modern world.",
            "wrong": ["purely decentralized.", "weak central authority.", "no bureaucratic structure."] },
          { start: "The Ottoman millet system, which granted religious minorities (Christians, Jews, Armenians) legal autonomy in personal and religious matters while maintaining overall Ottoman control, was a pragmatic approach to governing a religiously diverse empire that",
          "correct": "allowed the Ottomans to rule diverse populations without converting them or directly administering all aspects of their lives.",
            "wrong": ["enforced conversion.", "no religious tolerance.", "persecuted minorities."] },
          { start: "Ottoman governors (pashas) were appointed by the central government and could be removed and reassigned, unlike the hereditary nobility of many European states, which meant that",
          "correct": "the Ottoman Empire could maintain tighter central control and prevent the rise of independent regional power bases.",
            "wrong": ["decentralized authority.", "hereditary positions.", "weak control."] }
        ]
      },
      {
        name: "Military Innovations & The Sipahi",
        emoji: "🏇",
        quotes: [
          { start: "The Ottoman military system, featuring both the elite Janissaries and the sipahi cavalry supported by a land-grant (timar) system, created a standing army and cavalry force capable of sustained imperial expansion, showing that",
          "correct": "Ottoman military organization combined standing professional forces with land-based incentive structures.",
            "wrong": ["purely mercenary.", "no cavalry force.", "tribal warriors only."] },
          { start: "The Ottoman adoption of firearms and gunpowder artillery earlier and more systematically than many European powers gave them a crucial military advantage during the 15th and 16th centuries, allowing them to",
          "correct": "dominate regional conflicts and establish dominance over both European and Asian neighbors.",
            "wrong": ["delayed adoption.", "no advantage.", "inferior technology."] },
          { start: "The transformation of the Ottoman military from mounted archer-based to firearms-based combat reflected strategic adaptation to changing military technologies, which demonstrates that",
          "correct": "the Ottomans were responsive to military innovation and willing to reorganize their forces accordingly.",
            "wrong": ["resistant to change.", "purely traditional.", "no adaptation."] }
        ]
      },
      {
        name: "Suleiman the Magnificent & Imperial Zenith",
        emoji: "👑",
        quotes: [
          { start: "Suleiman I (r. 1520-1566), known as 'the Magnificent' in the West and 'the Lawgiver' in Turkish tradition, expanded Ottoman territorial control to its greatest extent and established legal codes that defined imperial governance, demonstrating that",
          "correct": "Suleiman's reign represented the height of Ottoman military power and organizational achievement.",
            "wrong": ["period of decline.", "weak leadership.", "no legal reforms."] },
          { start: "During Suleiman's reign, the Ottoman Empire controlled vast territories spanning three continents—from Hungary to Yemen and from North Africa to Iraq—making it one of the largest and most powerful states of the 16th century, showing that",
          "correct": "Ottoman imperial expansion created a multi-continental empire rivaling European powers in scope and resources.",
            "wrong": ["limited to Anatolia.", "smaller than Europe.", "weak state."] },
          { start: "Suleiman's legal reforms, including the kanun (Ottoman law code) system that standardized administrative and legal procedures, represented a commitment to rational governance and predictable administration, which meant that",
          "correct": "Ottoman governance combined imperial authority with systematic legal frameworks.",
            "wrong": ["arbitrary rule.", "no legal code.", "purely authoritarian."] }
        ]
      },
      {
        name: "Ottoman Naval Power & Mediterranean Dominance",
        emoji: "⛵",
        quotes: [
          { start: "The Ottoman development of a powerful navy under admirals like Barbarossa transformed them into a Mediterranean naval power capable of controlling sea trade and projecting military power across vast distances, allowing them to",
          "correct": "challenge Christian European naval powers and secure Ottoman commercial interests.",
            "wrong": ["purely land power.", "weak navy.", "no naval expansion."] },
          { start: "The Battle of Lepanto in 1571, while tactically a Christian naval victory, did not significantly alter Ottoman naval dominance because the Ottomans quickly rebuilt their fleet, demonstrating that",
          "correct": "Ottoman naval power was based on sustained resources and shipbuilding capacity rather than single battles.",
            "wrong": ["permanent defeat.", "lost naval power.", "European dominance."] },
          { start: "Ottoman control of Mediterranean trade routes and ports gave them significant economic advantages and allowed them to tax and monitor commercial activity, contributing to",
          "correct": "Ottoman wealth and the revenue that sustained their military and administrative apparatus.",
            "wrong": ["no economic benefit.", "lost trade.", "no revenue source."] }
        ]
      },
      {
        name: "Ottoman Culture & Architecture",
        emoji: "🏛️",
        quotes: [
          { start: "Ottoman architectural achievements, including the Topkapi Palace, the Blue Mosque, and the Sultan Ahmed Mosque, reflected a synthesis of Islamic, Byzantine, and Persian architectural traditions adapted to Ottoman purposes, demonstrating that",
          "correct": "Ottoman culture was a creative blend of influences rather than a simple imitation of predecessors.",
            "wrong": ["purely Islamic.", "no innovation.", "purely Byzantine."] },
          { start: "Ottoman literature, poetry, and calligraphy flourished under imperial patronage, with poets and scholars supported by the sultan's court, showing that",
          "correct": "Ottoman elites invested in cultural and intellectual pursuits alongside military expansion.",
            "wrong": ["purely martial culture.", "no intellectual life.", "no patronage."] },
          { start: "The development of Ottoman Turkish language and literature created a cultural identity distinct from both Arab and Persian traditions, which helped to",
          "correct": "forge a sense of Ottoman identity that transcended ethnic and religious boundaries.",
            "wrong": ["purely Arabic.", "no unique culture.", "Persian dominance."] }
        ]
      },
      {
        name: "Economic Organization & Trade",
        emoji: "💰",
        quotes: [
          { start: "The Ottoman Empire controlled crucial trade routes connecting Europe, Asia, and Africa, including the overland Silk Road routes and Mediterranean sea routes, which gave them",
          "correct": "significant economic power through taxation and control of goods flowing between regions.",
            "wrong": ["no trade benefit.", "isolated economy.", "no commercial power."] },
          { start: "Ottoman state monopolies on certain goods (like salt) and control over trade through merchants' guilds and regulations reflected",
          "correct": "systematic economic organization designed to maximize state revenue and prevent economic competition.",
            "wrong": ["free market economics.", "no state control.", "purely private trade."] },
          { start: "The Ottoman economy, though initially strong, began to face challenges in the 16th and 17th centuries as European colonial expansion diverted trade away from Ottoman-controlled routes, showing that",
          "correct": "external economic changes could undermine even well-organized imperial systems.",
            "wrong": ["permanent prosperity.", "no external threats.", "unchanging advantage."] }
        ]
      },
      {
        name: "Ottoman Decline & Internal Challenges",
        emoji: "📉",
        quotes: [
          { start: "The Ottoman Empire's military power declined relative to European states in the 17th and 18th centuries due to factors including military innovations in Europe, persistent wars on multiple fronts, and internal fiscal problems, demonstrating that",
          "correct": "empires can decline when they fail to adapt to changing military technologies and bear unsustainable military costs.",
            "wrong": ["eternal empire.", "no decline.", "always superior."] },
          { start: "The Janissaries, originally the Ottoman Empire's most formidable military force, became increasingly a conservative force opposed to military reforms, eventually leading to",
          "correct": "military stagnation that disadvantaged the Ottomans relative to reforming European powers.",
            "wrong": ["always progressive.", "constantly reforming.", "no internal conflict."] },
          { start: "Ottoman governance in the later centuries was sometimes destabilized by rapid succession of sultans, court intrigues, and competition between imperial officials, which",
          "correct": "weakened the centralized control that had characterized earlier Ottoman administration.",
            "wrong": ["stable succession.", "no court politics.", "strong authority."] }
        ]
      },
      {
        name: "Relations with Christian Europe",
        emoji: "⛪",
        quotes: [
          { start: "Ottoman-European relations in the early modern period were characterized by military competition, with the Ottomans frequently victorious in the 15th and 16th centuries, though by the 17th and 18th centuries European powers increasingly gained the upper hand, showing that",
          "correct": "the balance of power between Ottoman and European states shifted over centuries.",
            "wrong": ["always Ottoman victory.", "always European superiority.", "no military conflict."] },
          { start: "The Ottoman threat to European security, particularly the sieges of Vienna in 1529 and 1683, galvanized European coalitions against Ottoman expansion and influenced European political alliances, demonstrating that",
          "correct": "Ottoman military power shaped European geopolitical strategies and alliances.",
            "wrong": ["no European concern.", "ignored Ottoman threat.", "no European response."] },
          { start: "Ottoman-European diplomatic and cultural exchanges, including Ottoman embassies in European capitals and European merchants in Ottoman ports, show that",
          "correct": "despite military competition, the Ottoman Empire engaged in regular diplomatic and commercial relations with Christian European states.",
            "wrong": ["purely hostile.", "no diplomacy.", "no commerce."] }
        ]
      },
      {
        name: "Religious Governance & the Sultanate",
        emoji: "🕌",
        quotes: [
          { start: "The Ottoman sultan held both political and religious authority, claiming to be the protector of Islam and the guardian of the holy cities of Mecca and Medina after their conquest in 1517, which meant that",
          "correct": "Ottoman legitimacy rested partly on Islamic religious authority alongside political power.",
            "wrong": ["purely secular.", "no religious authority.", "rejected Islam."] },
          { start: "The Ottoman chief mufti (Shaykh al-Islam) issued legal opinions (fatwas) that interpreted Islamic law for the empire, showing that",
          "correct": "Ottoman religious governance involved institutional structures interpreting and applying Islamic law.",
            "wrong": ["no religious structure.", "arbitrary religious rule.", "no Islamic law."] },
          { start: "Ottoman treatment of non-Muslim subjects through the millet system, while maintaining Islamic state authority and Muslim privilege, was pragmatic rather than egalitarian, meaning that",
          "correct": "Ottoman governance prioritized control and revenue over religious uniformity.",
            "wrong": ["purely equal.", "no religious hierarchy.", "purely secular."] }
        ]
      },
      {
        name: "The Long Decline & Modern Reform",
        emoji: "🔄",
        quotes: [
          { start: "The Ottoman Empire's territorial losses accelerated in the 19th century as European powers expanded in North Africa and the Balkans, and as Ottoman provinces gained independence, demonstrating that",
          "correct": "empires can lose control over peripheries when they lack military and economic resources to maintain them.",
            "wrong": ["eternal territory.", "no loss of control.", "always dominant."] },
          { start: "Ottoman reform movements in the 19th century, including the Tanzimat reforms attempting to modernize administration and military, reflected an effort to adapt Ottoman institutions to survive changing circumstances, showing that",
          "correct": "the Ottoman leadership recognized the need for institutional reform to remain competitive.",
            "wrong": ["refused reform.", "no modernization.", "purely traditional."] },
          { start: "The collapse of the Ottoman Empire at the end of World War I, after centuries of territorial loss and military defeats, marked the end of one of world history's longest-lasting imperial states, demonstrating that",
          "correct": "even empires that adapt and endure for centuries eventually decline when unable to respond to fundamental shifts in global power.",
            "wrong": ["eternal empire.", "no collapse.", "still exists."] }
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
        name: "David (Historical & Biblical Perspectives)",
        emoji: "👑",
        quotes: [
          { start: "The historical David, evidenced by the Tel Dan Stele inscription mentioning 'House of David,' was likely a king of a small kingdom in the Levant whose actual political power and territorial control were much more limited than biblical accounts suggest, demonstrating that",
          "correct": "archaeological evidence and biblical narratives often present different pictures of historical figures.",
            "wrong": ["purely mythical.", "completely accurate.", "no real person."] },
          { start: "The biblical narrative presents David as a great military leader who united Israel and conquered vast territories, but archaeological evidence suggests that",
          "correct": "David's actual kingdom was likely smaller and less powerful than the biblical account portrays.",
            "wrong": ["archaeological evidence confirms biblical account.", "no real kingdom.", "purely legendary."] },
          { start: "The accounts of David's conflicts with the Philistines, his leadership of Israel, and his establishment of Jerusalem as a capital likely contain historical elements mixed with later legendary embellishment, showing that",
          "correct": "biblical texts often reflect actual historical events but have been shaped by later theological and political interests.",
            "wrong": ["purely accurate history.", "entirely fictional.", "no historical basis."] }
        ]
      },
      {
        name: "Solomon (Archaeological vs. Biblical Evidence)",
        emoji: "👑",
        quotes: [
          { start: "The biblical account of Solomon as the builder of a great temple and the ruler of a vast empire contrasts with archaeological evidence that suggests",
          "correct": "there is no archaeological evidence of the temple described in the Bible or of the extent of Solomon's kingdom.",
            "wrong": ["archaeology confirms biblical account.", "no real Solomon.", "purely legendary."] },
          { start: "The search for archaeological evidence of Solomon's temple in Jerusalem has not yielded conclusive findings, which means that",
          "correct": "the biblical account of the temple's magnificence cannot be verified through archaeology.",
            "wrong": ["temple is proven.", "evidence is conclusive.", "no real search occurred."] },
          { start: "The biblical narrative presents Solomon as the wisest of rulers who brought great prosperity, but this account reflects theological idealization rather than necessarily historical fact, demonstrating that",
          "correct": "biblical narratives often present idealized versions of rulers to serve theological purposes.",
            "wrong": ["purely accurate.", "no idealization.", "no theological purpose."] }
        ]
      },
      {
        name: "The United Kingdom (Historical Reality vs. Biblical Narrative)",
        emoji: "⚖️",
        quotes: [
          { start: "The biblical account of a 'United Kingdom' of Israel under Saul, David, and Solomon is presented as a period of political unity and military power, but archaeological evidence suggests that",
          "correct": "there is limited evidence of a unified political entity during this period, and the kingdoms of Israel and Judah were likely separate entities.",
            "wrong": ["archaeology confirms unity.", "no separate kingdoms.", "biblical account is accurate."] },
          { start: "The extent and power of early Israelite states in the Iron Age, reconstructed from archaeological evidence and extrabiblical texts, shows that",
          "correct": "the kingdoms of Israel and Judah were small regional powers in the Levant, not the major empires depicted in the Bible.",
            "wrong": ["great empires are confirmed.", "biblical account is accurate.", "no archaeological evidence."] },
          { start: "The lack of archaeological evidence for many biblical narratives—including the conquest of Canaan, the united monarchy, and the events described in the books of kings—indicates that",
          "correct": "the Bible was written as theology and history combined, reflecting later interpretations rather than contemporary historical documentation.",
            "wrong": ["no archaeology exists.", "purely legendary.", "completely fictional."] }
        ]
      },
      {
        name: "The Divided Kingdom (Israel & Judah)",
        emoji: "👑",
        quotes: [
          { start: "The historical division of the Israelite kingdoms into northern Israel and southern Judah is confirmed by archaeological evidence and extrabiblical texts like the Tel Dan Stele and Assyrian inscriptions, showing that",
          "correct": "the two kingdoms existed as separate political entities with different rulers, armies, and foreign relationships.",
            "wrong": ["purely biblical invention.", "no archaeological evidence.", "no real division."] },
          { start: "The kingdom of Israel in the north, with its capital at Samaria, was likely more politically developed and militarily powerful than Judah in the south for much of their history, demonstrating that",
          "correct": "the biblical narrative's emphasis on Judah and Jerusalem reflects later theological interests rather than the actual balance of power.",
            "wrong": ["Judah was always dominant.", "biblical account is accurate.", "equal in power."] },
          { start: "The conquest of the northern kingdom of Israel by the Assyrian Empire in 722 BCE is documented in both Assyrian inscriptions and the Bible, confirming that",
          "correct": "extrabiblical sources and biblical accounts can corroborate major historical events.",
            "wrong": ["no real conquest.", "purely biblical account.", "no Assyrian records."] }
        ]
      },
      {
        name: "Judean Monarchy & the Kingdom of Judah",
        emoji: "👑",
        quotes: [
          { start: "The kingdom of Judah, with its capital at Jerusalem, survived longer than its northern counterpart but remained a small regional power on the periphery of major empires, as evidenced by",
          "correct": "Assyrian, Babylonian, and Egyptian records that mention Judah as a tributary state or vassal kingdom.",
            "wrong": ["great power.", "independent state.", "biblical accounts only."] },
          { start: "The reign of King Hezekiah, documented in both biblical accounts and Assyrian inscriptions, shows that Judean kings sometimes rebelled against Assyrian overlordship but were ultimately forced to submit, demonstrating that",
          "correct": "Judah's political independence was limited and constrained by the power of great empires.",
            "wrong": ["full independence.", "victorious against Assyria.", "no Assyrian records."] },
          { start: "The later reign of King Josiah, who according to biblical accounts conducted religious reforms and restored Jerusalem's temple, ended with his death at the Battle of Megiddo fighting Egyptian forces, showing that",
          "correct": "even reform-minded kings could not overcome Judah's geopolitical vulnerability.",
            "wrong": ["victorious reign.", "no external threats.", "religious reform alone."] }
        ]
      },
      {
        name: "The Babylonian Exile & Diaspora",
        emoji: "🏛️",
        quotes: [
          { start: "The destruction of Jerusalem by the Babylonian Empire in 586 BCE, the exile of Judean elites, and the later return of some exiles are documented in both biblical accounts and Babylonian records, confirming that",
          "correct": "this was a major historical event with documented consequences for Judean society.",
            "wrong": ["purely biblical invention.", "no historical evidence.", "no real exile."] },
          { start: "The Babylonian exile experience fundamentally changed Judean religion and culture, contributing to the development of Rabbinic Judaism and the creation of the Hebrew Bible as a coherent text, demonstrating that",
          "correct": "exile and diaspora experiences shaped the religious traditions that would become Judaism.",
            "wrong": ["no real change.", "purely continuity.", "no biblical development."] },
          { start: "The return of some Judean exiles under the Persian Empire, described in biblical accounts, reflects the Persian policy of allowing conquered peoples some autonomy and religious freedom, showing that",
          "correct": "the political context of empire policies shaped the experiences of subject populations.",
            "wrong": ["purely biblical narrative.", "no Persian context.", "no real return."] }
        ]
      },
      {
        name: "Religious Development & Monotheism",
        emoji: "🕯️",
        quotes: [
          { start: "The development of Israelite religion from polytheism (worship of multiple gods) to monotheism (exclusive worship of Yahweh) occurred gradually over centuries, as evidenced by",
          "correct": "biblical texts themselves, which contain references to other gods and show increasing emphasis on Yahweh's exclusivity.",
            "wrong": ["always monotheistic.", "sudden change.", "no development."] },
          { start: "The prophetic movement in Israel and Judah, documented in biblical texts, represented a challenge to established religious and political authority, with prophets often criticizing rulers and advocating for social justice, showing that",
          "correct": "prophets served as social critics and moral reformers, not merely as predictors of the future.",
            "wrong": ["purely predictive.", "no political criticism.", "no social role."] },
          { start: "The creation of the Hebrew Bible (Tanakh) as a coherent collection of texts occurred gradually over centuries, with different texts being composed, edited, and compiled at different times, meaning that",
          "correct": "the Bible is not a unified document but rather a collection of texts reflecting different periods, perspectives, and theological concerns.",
            "wrong": ["single author.", "single period.", "unified perspective."] }
        ]
      },
      {
        name: "Archaeological Evidence & Historical Reconstruction",
        emoji: "🏺",
        quotes: [
          { start: "Archaeological excavations in the Levant, including at sites like Megiddo, Jerusalem, Samaria, and Shechem, have revealed evidence of human settlement patterns, fortifications, and artifacts that help reconstruct the history of ancient Israel and Judah, though",
          "correct": "archaeological evidence often presents a different picture from biblical narratives and requires careful interpretation.",
            "wrong": ["confirms all biblical accounts.", "purely confirming.", "no discrepancies."] },
          { start: "The Tel Dan Stele, an inscribed stone from 9th-century BCE Syria that mentions the 'House of David,' provides one of the few extrabiblical references to Israelite or Judean rulers, demonstrating that",
          "correct": "archaeological and inscriptional evidence can confirm some biblical references while showing their different context.",
            "wrong": ["confirms biblical narrative.", "no other sources.", "purely biblical."] },
          { start: "The absence of archaeological evidence for many biblical narratives—including the exodus from Egypt, the conquest of Canaan as described, and the size and power of Solomon's kingdom—indicates that",
          "correct": "biblical texts reflect theological interpretation and later composition rather than contemporary historical documentation.",
            "wrong": ["no archaeology exists.", "purely legendary.", "completely fictional."] }
        ]
      },
      {
        name: "Israelite Warfare & Military Organization",
        emoji: "⚔️",
        quotes: [
          { start: "The biblical accounts of Israelite warfare, including descriptions of armies, weapons, and tactics, reflect the military practices of the Iron Age Levant, though the scale of forces and magnitude of victories described in the Bible are often exaggerated, showing that",
          "correct": "biblical military narratives contain historical elements but have been enhanced for theological or propagandistic purposes.",
            "wrong": ["purely accurate.", "no exaggeration.", "historical scale is correct."] },
          { start: "The conflicts between Israelite kingdoms and their neighbors, including the Philistines, the Aramean states, and the major empires, are documented in both biblical accounts and extrabiblical sources, confirming that",
          "correct": "Israel and Judah were engaged in regional conflicts typical of small Iron Age states.",
            "wrong": ["isolated kingdoms.", "no conflicts.", "purely biblical."] },
          { start: "The military vulnerability of Judah and Israel to conquest by major powers—the Assyrian Empire destroying Israel in 722 BCE and the Babylonian Empire destroying Judah in 586 BCE—demonstrates that",
          "correct": "small regional kingdoms could not resist the military power of large imperial states.",
            "wrong": ["unconquerable.", "equal in power.", "no real threat."] }
        ]
      },
      {
        name: "Social Structure & Daily Life",
        emoji: "🏛️",
        quotes: [
          { start: "The social structure of ancient Israel and Judah, reconstructed from archaeological evidence and biblical texts, included a king and royal court, priests and religious specialists, scribes and administrators, merchants and craftspeople, farmers and herders, and enslaved persons, showing that",
          "correct": "these societies had hierarchical structures with concentrated wealth and power at the top.",
            "wrong": ["purely egalitarian.", "no hierarchy.", "no slavery."] },
          { start: "The role of women in ancient Israelite society, as reflected in biblical laws and narratives, indicates that women had fewer legal rights and less political power than men, though women of elite status could exercise some influence, demonstrating that",
          "correct": "gender relations were patriarchal with limited opportunities for female authority.",
            "wrong": ["equal status.", "political equality.", "no restriction."] },
          { start: "The practice of slavery in ancient Israel and Judah, documented in biblical law codes and reflected in biblical narratives, shows that slavery was an accepted institution, though with some legal protections for enslaved Israelites, indicating that",
          "correct": "slavery was integral to the economy of these societies.",
            "wrong": ["no slavery.", "purely foreign slaves.", "no legal code."] }
        ]
      },
      {
        name: "Religious Reforms & Textual Development",
        emoji: "📖",
        quotes: [
          { start: "The Deuteronomic Reform, attributed to the reign of King Josiah according to biblical accounts, emphasized centralization of worship in Jerusalem and adherence to a specific religious law code, suggesting that",
          "correct": "religious reforms were politically motivated attempts to centralize power and eliminate rival religious centers.",
            "wrong": ["purely religious motivation.", "no political purpose.", "universal acceptance."] },
          { start: "The composition of the Hebrew Bible involved multiple layers of editing and compilation across several centuries, with different books reflecting different periods and theological perspectives, meaning that",
          "correct": "the Bible is best understood as a collection of texts with diverse authors, editors, and theological concerns.",
            "wrong": ["single author.", "single perspective.", "unified composition."] },
          { start: "The discovery of the Dead Sea Scrolls, ancient biblical manuscripts found in the Qumran caves, reveals textual variations and shows that biblical texts were subject to copying errors and intentional textual variations, demonstrating that",
          "correct": "the transmission of biblical texts was subject to the same processes that affect all ancient texts.",
            "wrong": ["perfectly preserved.", "no variations.", "fixed tradition."] }
        ]
      },
      {
        name: "Historical Assessment & Legacy",
        emoji: "📜",
        quotes: [
          { start: "The history of ancient Israel and Judah, as reconstructed from archaeological evidence and extrabiblical texts, reveals small regional kingdoms that were marginalized by major empires, experienced internal conflicts, and developed distinctive religious and cultural traditions that would profoundly influence later Judaism and Christianity, demonstrating that",
          "correct": "historical reconstruction often reveals a different picture from religious narratives, though both have value.",
            "wrong": ["purely biblical account.", "no archaeological evidence.", "no cultural influence."] },
          { start: "The fall of Judah to the Babylonians and the subsequent exile and diaspora experiences shaped the development of Judaism as a portable religion based on textual study and ethical observance rather than temple sacrifice, showing that",
          "correct": "historical trauma and loss led to religious innovation and adaptation.",
            "wrong": ["no real change.", "continuous tradition.", "no adaptation."] },
          { start: "The scholarly study of ancient Israel and Judah using archaeological evidence, linguistic analysis, comparative ancient Near Eastern studies, and textual criticism reveals that biblical accounts are theological interpretations of history rather than objective historical documentation, illustrating that",
          "correct": "understanding ancient texts requires using multiple methodologies and acknowledging their theological purposes.",
            "wrong": ["purely historical.", "no theology.", "objective documentation."] }
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
        name: "Chandragupta Maurya (Founder & Military Conquest)",
        emoji: "👑",
        quotes: [
          { start: "I overthrew the Nanda dynasty and established the Maurya Empire by understanding that military victory alone was insufficient—I needed to consolidate power through establishing",
          "correct": "administrative systems, winning the support of elites, and demonstrating that my rule provided order.",
            "wrong": ["pure military conquest.", "no real strategy.", "purely inherited succession."] },
          { start: "The establishment of a capital at Pataliputra served to demonstrate Maurya power and to provide a center from which the empire could be administered, requiring that the empire develop",
          "correct": "sophisticated administrative systems to manage vast territories and collect taxes efficiently.",
            "wrong": ["purely military bases.", "no real administration.", "ceremonial capital."] },
          { start: "My reliance on Chanakya (also known as Kautilya) as my chief advisor and minister demonstrates that I understood that military power had to be supplemented by",
          "correct": "political intelligence, administrative skill, and the ability to navigate the complex politics of other kingdoms.",
            "wrong": ["purely military skill.", "no need for advisors.", "inherited knowledge."] },
          { start: "The military campaigns that expanded Maurya territory were sustained by the development of an efficient tax collection system that extracted resources from conquered territories, showing that",
          "correct": "military expansion depended on economic organization and the ability to finance large armies.",
            "wrong": ["purely military achievement.", "no economic foundation.", "random success."] },
          { start: "My later abdication and conversion to Jainism, retreat to an ascetic life, and renunciation of worldly power shows that despite establishing an empire through military conquest and political maneuvering, I came to embrace",
          "correct": "spiritual values that rejected the violence and ambition that had characterized my rise to power.",
            "wrong": ["purely religious devotion.", "weakness in old age.", "forced abdication."] }
        ]
      },
      {
        name: "Chanakya / Kautilya (Political Theory & Strategy)",
        emoji: "📜",
        quotes: [
          { start: "The Arthashastra, the political treatise I composed, laid out a system of governance based on the principle that the ruler must obtain wealth and security through whatever means necessary, including the use of spies and deception, demonstrating that",
          "correct": "I advocated for a pragmatic approach to governance where ethics were secondary to the state's survival.",
            "wrong": ["purely moral philosophy.", "no real strategy.", "impractical idealism."] },
          { start: "My recommendation that the ruler maintain an extensive spy network to monitor the behavior of officials, nobles, and the population itself served the purpose of",
          "correct": "preventing rebellion and ensuring that the ruler had information necessary to maintain control.",
            "wrong": ["purely protective.", "no real benefit.", "purely entertainment."] },
          { start: "My doctrine of the Mandala (circle of states)—understanding neighboring kingdoms as potential allies or enemies based on strategic position—reflects the realistic understanding that",
          "correct": "alliances and rivalries were determined by strategic interest rather than moral considerations.",
            "wrong": ["purely idealistic.", "moral alignment.", "permanent alliances."] },
          { start: "My advocacy for the ruler to employ all methods of statecraft—conciliation, gifts, creation of discord, and force—shows that I believed that",
          "correct": "a successful ruler must be willing to use any tool available to maintain power and achieve state objectives.",
            "wrong": ["purely moral approach.", "only honest means.", "ethical limitations."] },
          { start: "The practical political advice I provided to Chandragupta, including how to gain power, consolidate rule, and manage the kingdom, demonstrates that I understood that",
          "correct": "political theory must be grounded in practical considerations of power and survival.",
            "wrong": ["purely idealistic philosophy.", "no real application.", "theoretical only."] },
          { start: "My emphasis on the importance of economic prosperity, achieved through taxation and trade regulation, shows that I recognized that",
          "correct": "military power and political authority depended ultimately on economic resources.",
            "wrong": ["purely military considerations.", "economics was unimportant.", "simple subsistence."] }
        ]
      },
      {
        name: "Ashoka the Great (Transformation & Moral Governance)",
        emoji: "☸️",
        quotes: [
          { start: "My bloody conquest of Kalinga, which brought an estimated 100,000 deaths and caused widespread suffering, led me to renounce aggressive expansion and embrace Buddhism and the concept of Dhamma because",
          "correct": "the scale of destruction and suffering caused me to question the wisdom of military conquest as a path to greatness.",
            "wrong": ["purely religious conversion.", "weakness in old age.", "external pressure."] },
          { start: "The transformation from a ruler who extended Maurya territory through conquest to one who renounced aggressive expansion is documented in my edicts inscribed on rocks and pillars across the empire, which serve as the primary historical evidence for my reign and demonstrate that",
          "correct": "I used official inscriptions to communicate my new ideology and to document the principles of Dhamma.",
            "wrong": ["no real transformation.", "purely propaganda.", "no actual change."] },
          { start: "My adoption and promotion of Buddhism and Dhamma (righteousness/morality) as the foundation of imperial policy served multiple purposes: creating a new ideology of rule, establishing legitimacy independent of military conquest, and",
          "correct": "connecting the Maurya Empire to a broader spiritual tradition that transcended the boundaries of the Maurya state.",
            "wrong": ["purely religious devotion.", "no political benefit.", "no real strategy."] },
          { start: "My establishment of the position of Dhammamahattas (officers of Dhamma) throughout the empire to promote moral conduct and ensure justice shows that I believed that",
          "correct": "imperial authority could be exercised through promoting virtue and moral conduct rather than only through military force and punishment.",
            "wrong": ["purely religious officials.", "no real authority.", "ineffective system."] },
          { start: "My promotion of religious tolerance, including the patronage of multiple religions and the recognition of non-Buddhist traditions, demonstrates that I understood that",
          "correct": "an empire ruling over diverse populations required acknowledging and respecting different religious traditions.",
            "wrong": ["purely Buddhist zealotry.", "no real tolerance.", "forced conversion."] },
          { start: "The edicts I inscribed, which survive to the present day, serve as the primary historical evidence for my reign and show that",
          "correct": "I used official inscriptions to communicate my ideology, define imperial policy, and create a permanent record of my principles.",
            "wrong": ["no real evidence.", "purely propaganda.", "no actual impact."] },
          { start: "My renunciation of aggressive expansion, while reducing military glory and territorial growth, allowed the Maurya Empire to consolidate control over existing territories and to focus on",
          "correct": "internal development, infrastructure, and the establishment of stable governance.",
            "wrong": ["purely religious devotion.", "weakness was shown.", "decline began."] }
        ]
      },
      {
        name: "Maurya Administrative System & Governance",
        emoji: "⚖️",
        quotes: [
          { start: "The Maurya administrative system, established by Chanakya and refined by subsequent emperors, was based on a centralized government with appointed officials responsible for collecting taxes, administering justice, and maintaining order, requiring that",
          "correct": "the empire develop sophisticated bureaucratic structures to manage vast territories.",
            "wrong": ["purely military governance.", "no real administration.", "decentralized system."] },
          { start: "The division of the empire into provinces (mahajanapadas), each governed by appointed officials, allowed the center to maintain control while delegating administrative responsibilities, though this also created the risk that",
          "correct": "powerful provincial governors could accumulate enough power to challenge central authority.",
            "wrong": ["no real risk.", "perfect loyalty was automatic.", "purely successful system."] },
          { start: "The Maurya taxation system extracted resources from the agricultural base of the empire, with the state claiming a share of production and collecting customs duties on trade, which meant that",
          "correct": "the empire's finances depended on the efficiency of tax collection and the productivity of the agricultural population.",
            "wrong": ["light taxation.", "voluntary contributions.", "no real extraction."] },
          { start: "The maintenance of an extensive network of spies, as advocated by Chanakya, served to prevent rebellion and to provide the emperor with intelligence about the loyalty of officials and the mood of the population, though this also meant that",
          "correct": "the empire was built partly on surveillance and the fear that any disloyalty would be discovered.",
            "wrong": ["purely protective.", "no real fear.", "transparent system."] },
          { start: "The development of a standardized system of weights and measures, record-keeping, and administrative procedures shows that the Maurya Empire understood that",
          "correct": "efficient administration required standardization and the development of consistent systems that could be applied across diverse regions.",
            "wrong": ["no real need.", "local variation was preferred.", "inefficient system."] }
        ]
      },
      {
        name: "Maurya Military Organization & Conquest",
        emoji: "⚔️",
        quotes: [
          { start: "The Maurya military, described by classical sources as numbering in the hundreds of thousands of infantry, cavalry, and war elephants, was organized under a central command structure that allowed for coordination across vast distances, requiring that",
          "correct": "the empire develop logistics systems to supply and move large armies.",
            "wrong": ["no real organization.", "purely militia forces.", "ineffective system."] },
          { start: "Chandragupta's military campaigns, which extended Maurya territory from the Deccan to much of northern India, were sustained by the combination of military skill, strategic alliances with local rulers, and the wealth extracted from conquered territories, demonstrating that",
          "correct": "military expansion depended on economic organization and political skill, not only on military force.",
            "wrong": ["purely military conquest.", "no real strategy.", "economic independence."] },
          { start: "Ashoka's conquest of Kalinga, described in his edicts as causing massive destruction and suffering, followed by his renunciation of aggressive expansion, demonstrates that even when military force was successful in conquest, it could create",
          "correct": "moral and practical problems that led rulers to question the wisdom of continued military expansion.",
            "wrong": ["unlimited conquest was possible.", "no real consequences.", "wisdom was not learned."] },
          { start: "The use of war elephants by Maurya forces gave them advantages in certain types of warfare but also created vulnerabilities because elephants could be frightened and turned against their own forces, showing that",
          "correct": "technological advantages had limitations and that their effectiveness depended on how well they were deployed.",
            "wrong": ["always superior.", "invulnerable.", "no real disadvantage."] },
          { start: "The maintenance of Maurya military dominance required continuous military spending and the stationing of garrisons in conquered territories, which created a financial burden that had to be sustained through",
          "correct": "the efficient extraction of resources from the empire through taxation.",
            "wrong": ["purely military skill.", "no real cost.", "simple defense."] }
        ]
      },
      {
        name: "Maurya Economy & Infrastructure",
        emoji: "💰",
        quotes: [
          { start: "The Maurya economy was based primarily on agricultural taxation, supplemented by customs duties on trade and the production of state monopoly goods like salt, requiring that the empire develop",
          "correct": "systems to extract resources from the agricultural population while maintaining sufficient productivity to sustain both the population and the empire.",
            "wrong": ["purely commercial economy.", "balanced economy.", "light taxation."] },
          { start: "The construction of roads, wells, and other infrastructure during the Maurya period served multiple purposes: facilitating trade and administration, demonstrating imperial power, and",
          "correct": "providing tangible benefits to the population that could enhance the legitimacy of Maurya rule.",
            "wrong": ["purely military purposes.", "no real benefit.", "ceremonial only."] },
          { start: "The development of standardized currency and banking practices allowed merchants to conduct commerce across long distances, facilitating trade and providing the state with customs revenue, showing that",
          "correct": "economic development served both private merchants and the state.",
            "wrong": ["purely merchant activity.", "no state benefit.", "no real commerce."] },
          { start: "The Maurya control of the Silk Road trade routes connecting India to Central Asia and China brought wealth to the empire through customs duties and the availability of foreign goods that could be distributed to elites, demonstrating that",
          "correct": "control of trade routes was economically important to the empire.",
            "wrong": ["no real value.", "purely local trade.", "no strategic importance."] }
        ]
      },
      {
        name: "Chanakya's Political Philosophy & The Arthashastra",
        emoji: "📜",
        quotes: [
          { start: "The Arthashastra, the treatise I authored, presented a system of governance based on the principle of artha (material prosperity and power), advocating that the ruler should pursue wealth and security through whatever means were effective, which meant that",
          "correct": "I advocated for a pragmatic approach to governance where the pursuit of power was the primary goal, with ethics being secondary considerations.",
            "wrong": ["purely moral philosophy.", "ethical limitations were primary.", "idealistic approach."] },
          { start: "My extensive discussion of the use of spies, the creation of internal discord among potential enemies, the manipulation of alliances, and the use of deception shows that I believed that",
          "correct": "successful governance required the ruler to be willing to use intelligence, deception, and manipulation as tools of statecraft.",
            "wrong": ["purely honest approach.", "no real deception.", "ethical limitations."] },
          { start: "My analysis of the relationship between the ruler and his ministers emphasizes that the ruler must be careful to prevent his ministers from accumulating too much power, requiring the use of checks and balances, because",
          "correct": "I recognized that powerful ministers could become threats to the ruler's authority.",
            "wrong": ["no real threat.", "perfect loyalty was automatic.", "trust was sufficient."] },
          { start: "My emphasis on the importance of the ruler's personal security, including food tasting to prevent poisoning and careful selection of advisors, reflects my understanding that",
          "correct": "rulers faced constant threats from potential assassins and that personal security required vigilance.",
            "wrong": ["no real threat.", "purely paranoid.", "unnecessary precautions."] },
          { start: "The Arthashastra's discussion of different types of government and the selection of the best form for different circumstances shows that I believed that",
          "correct": "governance should be pragmatic and adapted to local conditions rather than following a single prescribed form.",
            "wrong": ["one form was ideal.", "universal application.", "no variation needed."] }
        ]
      },
      {
        name: "Maurya Decline & Legacy",
        emoji: "📜",
        quotes: [
          { start: "The decline of the Maurya Empire in the 2nd century BCE came from multiple factors: the rise of regional powers challenging central authority, the inability of later emperors to maintain the administrative efficiency of the Ashoka period, the withdrawal of elite support, and",
          "correct": "the loss of control over distant provinces as governors and local rulers asserted independence.",
            "wrong": ["single cause.", "purely external conquest.", "inevitable decline."] },
          { start: "The assassination of Brihadratha, the last Maurya emperor, by his general Pushyamitra Shunga demonstrates that even a large, well-organized empire could be overthrown when central authority weakened and powerful generals saw an opportunity to establish their own rule, showing that",
          "correct": "an empire's stability depended on maintaining the loyalty and support of powerful military and administrative figures.",
            "wrong": ["purely external conquest.", "inevitable decline.", "no real vulnerability."] },
          { start: "The legacy of the Maurya Empire included the establishment of the first large Indian empire, the development of sophisticated administrative systems, the promotion of Buddhism and moral governance, and the integration of diverse regions under a single political authority, demonstrating that",
          "correct": "the Maurya Empire created models of governance and administration that would influence later Indian empires.",
            "wrong": ["no real legacy.", "purely military achievement.", "no cultural importance."] },
          { start: "The edicts of Ashoka, inscribed on rocks and pillars throughout the empire, represent the primary historical evidence for his reign and demonstrate that Ashoka used official inscriptions to communicate his ideology and to create a permanent record of his principles, showing that",
          "correct": "Ashoka understood the importance of using official media to communicate and preserve his message.",
            "wrong": ["no real evidence.", "purely propaganda.", "no actual impact."] },
          { start: "The study of the Maurya Empire, based on sources including the Arthashastra, classical Greek and Roman accounts, archaeological evidence, and the edicts of Ashoka, reveals that the empire was a sophisticated state that combined military power, administrative efficiency, and moral ideology, though it ultimately proved vulnerable to the fragmentation that occurred after Ashoka's death, demonstrating that",
          "correct": "even well-organized empires can decline when internal factors weaken and when the force of a great leader's personality is removed.",
            "wrong": ["purely weak from the start.", "no real organization.", "inevitable decline."] }
        ]
      },
      {
        name: "Bindusara (Transition & Consolidation)",
        emoji: "👑",
        quotes: [
          { start: "My role as Chandragupta's successor required that I consolidate the gains he had made while managing the political complexities of maintaining such a large empire, which required",
          "correct": "continuing the administrative systems established by my father and managing the ambitions of various regional powers and court factions.",
            "wrong": ["purely military expansion.", "no real challenge.", "automatic succession."] },
          { start: "My reign saw the expansion of Maurya trade relationships with distant powers, including the Seleucid Kingdom and Egypt, demonstrating that the Maurya Empire under my rule was recognized as a major regional power and a valuable trading partner, showing that",
          "correct": "diplomatic and trade relationships were important sources of prestige and wealth.",
            "wrong": ["purely military power.", "no real diplomacy.", "isolated from the world."] },
          { start: "The succession struggle following my death, which saw my son Ashoka defeat his rivals to become emperor, demonstrates that even within the royal family, succession was contested and that the strongest contender had to prove his worth through",
          "correct": "his ability to defeat rival claimants and win the support of powerful court factions.",
            "wrong": ["automatic inheritance.", "peaceful succession.", "no real contest."] }
        ]
      },
      {
        name: "Maurya Society & Social Structure",
        emoji: "🏛️",
        quotes: [
          { start: "Maurya society was organized into distinct classes: the royal family and nobility, priests and scholars, merchants and craftspeople, farmers and laborers, and enslaved persons, because this hierarchy allowed for",
          "correct": "specialization and the concentration of wealth and power in elite hands.",
            "wrong": ["purely egalitarian.", "no real structure.", "random organization."] },
          { start: "The role of the Brahmin priesthood in Maurya society included ritual specialists, advisors to the king, and repositories of knowledge, though their power was somewhat reduced under Ashoka's promotion of Buddhism, which",
          "correct": "elevated Buddhist monks and institutions to a position of influence previously held by Brahmins.",
            "wrong": ["eliminated Brahmin power.", "no real change.", "purely ceremonial."] },
          { start: "The status of merchants and craftspeople in Maurya society, while lower than the nobility and priesthood, was important because they generated wealth through trade and production that was taxed by the state, demonstrating that",
          "correct": "economic classes had important roles in supporting the empire.",
            "wrong": ["no real status.", "purely exploited.", "economically unimportant."] },
          { start: "Women in Maurya society, particularly those of elite status, held some influence through their relationships with male relatives, though political power remained male-dominated, indicating that",
          "correct": "women had limited political roles despite having some social and economic influence.",
            "wrong": ["complete equality.", "no real authority.", "purely domestic roles."] }
        ]
      },
      {
        name: "Buddhist Influence & Ashoka's Dhamma",
        emoji: "☸️",
        quotes: [
          { start: "Ashoka's adoption and promotion of Buddhism transformed the Maurya Empire by establishing Dhamma (righteousness/morality) as the foundation of imperial ideology, which served to",
          "correct": "create a new framework for imperial legitimacy that emphasized moral conduct rather than only military conquest.",
            "wrong": ["purely religious conversion.", "no political benefit.", "no real strategy."] },
          { start: "The promotion of religious tolerance under Ashoka, including the patronage of multiple religions and the recognition of non-Buddhist traditions, demonstrates that I understood that an empire ruling over diverse populations required",
          "correct": "acknowledging and respecting different religious traditions while still maintaining Maurya political authority.",
            "wrong": ["forced conversion.", "no real tolerance.", "purely Buddhist zealotry."] },
          { start: "The edicts of Ashoka promoting moral conduct, including the prohibition of animal slaughter during certain periods and the establishment of medical services for humans and animals, show that I believed that",
          "correct": "imperial authority could be exercised through promoting virtue and moral conduct, not only through military force and punishment.",
            "wrong": ["purely religious devotion.", "no real authority.", "purely symbolic."] }
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
        name: "Akbar the Great (Expansion & Administrative Reform)",
        emoji: "👑",
        quotes: [
          { start: "I consolidated the Mughal Empire by recognizing that ruling over diverse populations required that",
          "correct": "religious tolerance and administrative efficiency could coexist, allowing Hindu subjects to maintain their traditions while accepting Mughal authority.",
            "wrong": ["pure religious dominance.", "no real tolerance.", "purely military rule."] },
          { start: "The abolition of the jizya (tax on non-Muslims) that I implemented demonstrated that I understood that",
          "correct": "fair taxation that did not discriminate based on religion could increase revenue and reduce resentment among subject populations.",
            "wrong": ["purely religious tolerance.", "revenue did not increase.", "resentment remained."] },
          { start: "The establishment of the mansabdari system—assigning military ranks and land grants based on merit—showed that I believed that",
          "correct": "military organization required clear hierarchies and incentives for loyalty based on performance rather than purely on birth.",
            "wrong": ["purely hereditary ranks.", "no real merit.", "arbitrary assignment."] },
          { start: "My collection of the 'Navaratnas' (Nine Gems)—including Abul Fazl, Todar Mal, and Birbal—demonstrated that I understood that",
          "correct": "a diverse group of talented administrators, scholars, and advisors could strengthen the empire through their specialized knowledge.",
            "wrong": ["purely ceremonial positions.", "no real function.", "no real achievement."] },
          { start: "The military campaigns that expanded Mughal territory under my rule were possible because I organized the empire to extract resources efficiently through a centralized tax system administered by the diwani (financial minister), showing that",
          "correct": "military expansion depended on economic organization and the ability to finance large armies.",
            "wrong": ["purely military achievement.", "no economic foundation.", "random success."] }
        ]
      },
      {
        name: "Akbar's Religious Policy & Tolerance",
        emoji: "🕌",
        quotes: [
          { start: "My policy of religious tolerance, including the abolition of discriminatory taxes and the patronage of Hindu temples and Christian missions, served to",
          "correct": "reduce religious conflict, increase imperial prestige by showing that the Mughal emperor could transcend sectarian divides, and ensure the loyalty of diverse subject populations.",
            "wrong": ["purely religious conviction.", "no political benefit.", "no real strategy."] },
          { start: "The creation of a Hindu-Muslim administrative partnership, with Hindus and Muslims serving together in the bureaucracy, showed that I believed that",
          "correct": "competence and loyalty were more important than religious identity in selecting administrators.",
            "wrong": ["purely religious tolerance.", "equal representation was automatic.", "no real selection."] },
          { start: "My establishment of the 'Din-i Ilahi' (Divine Faith), which combined elements of various religions and emphasized loyalty to the emperor, demonstrates that I attempted to",
          "correct": "create a unifying ideology that could transcend religious divisions and establish a direct religious connection between the emperor and his subjects.",
            "wrong": ["purely religious innovation.", "no political purpose.", "no real influence."] },
          { start: "The limited success of the Din-i Ilahi, despite imperial patronage, shows that even an emperor's attempt to create a new religion faced resistance and that",
          "correct": "deep religious commitments of the population could not be easily replaced by imperial ideology.",
            "wrong": ["purely failed policy.", "no real attempt.", "no followers."] }
        ]
      },
      {
        name: "Shah Jahan (Architectural Grandeur & Military Campaigns)",
        emoji: "🏛️",
        quotes: [
          { start: "My construction of the Taj Mahal as a mausoleum for Mumtaz Mahal, my beloved wife, represented an extraordinary commitment of resources (estimated to have taken 22 years and 20,000 workers) that served to",
          "correct": "demonstrate Mughal wealth and power, express imperial devotion, and create a monument that would become a symbol of the Mughal Empire.",
            "wrong": ["purely personal devotion.", "no political purpose.", "no real benefit to empire."] },
          { start: "The construction of numerous other architectural projects—including mosques, palaces, and gardens—required the extraction of vast resources from the empire, which ultimately contributed to",
          "correct": "financial strain and reduced the resources available for military defense and administrative needs.",
            "wrong": ["purely beneficial.", "no real cost.", "strengthened the empire."] },
          { start: "My military campaigns, which initially expanded Mughal territory in the Deccan, demonstrated military power but also created the pattern of expensive military campaigns that would weaken the empire by",
          "correct": "draining the treasury and requiring continuous taxation of already heavily taxed populations.",
            "wrong": ["purely successful.", "no real cost.", "strengthened the empire."] },
          { start: "My decision to shift the capital from Agra to Delhi and to construct the new city of Shahjahanabad was justified as a assertion of power and a new beginning, but it also diverted enormous resources that could have been used for",
          "correct": "military defense or infrastructure in regions facing external threats.",
            "wrong": ["no real cost.", "purely beneficial.", "no consequences."] }
        ]
      },
      {
        name: "Aurangzeb (Orthodoxy & Overextension)",
        emoji: "⚖️",
        quotes: [
          { start: "My reversal of Akbar's policies of religious tolerance, including the reimposition of the jizya and destruction of Hindu temples, was justified by my interpretation of Islamic law but also served to",
          "correct": "alienate Hindu subjects, provoke rebellions, and reduce the loyalty that had been built through generations of relative tolerance.",
            "wrong": ["purely religious conviction.", "no political consequence.", "increased loyalty."] },
          { start: "My military campaigns in the Deccan, aimed at conquering the Maratha kingdoms and consolidating Mughal control, lasted decades and required enormous resources that",
          "correct": "ultimately bankrupted the imperial treasury and left the empire vulnerable to invasion and unable to respond effectively to external threats.",
            "wrong": ["successfully consolidated empire.", "no real cost.", "strengthened defense."] },
          { start: "My reign saw the greatest territorial extent of the Mughal Empire, but also the beginning of its decline because the costs of maintaining such vast territory and suppressing continuous rebellions meant that",
          "correct": "the empire was financially overextended and administratively unable to maintain effective control in all regions.",
            "wrong": ["peak of empire strength.", "no real cost.", "successful consolidation."] },
          { start: "My religious orthodoxy, while reflecting my sincere Islamic beliefs, also alienated the Hindu population and other non-Muslim groups, creating grievances that contributed to the gradual weakening of Mughal authority by",
          "correct": "reducing the legitimacy of Mughal rule among large segments of the population and provoking rebellions.",
            "wrong": ["purely spiritual matter.", "no political consequence.", "increased loyalty."] },
          { start: "The Mughal Empire's difficulties in the latter part of my reign—including the Jat and Maratha rebellions—demonstrated that even the greatest emperor could not indefinitely maintain an empire built on extraction and religious discrimination when facing determined resistance, showing that",
          "correct": "the legitimacy of an empire depends partly on the consent and cooperation of its subject populations.",
            "wrong": ["purely military problem.", "no real challenge.", "easily suppressed."] }
        ]
      },
      {
        name: "Mughal Administrative System & Bureaucracy",
        emoji: "⚖️",
        quotes: [
          { start: "The Mughal administrative system, centered on the mansabdari (rank) system where nobles received land grants in exchange for military and administrative service, required that",
          "correct": "the emperor maintain a careful balance between rewarding loyal supporters and ensuring that no individual noble became powerful enough to challenge imperial authority.",
            "wrong": ["purely military organization.", "no real hierarchy.", "perfect loyalty was automatic."] },
          { start: "The role of the diwani (financial administrator), who oversaw the collection of taxes and the administration of revenue, was essential because the empire's military power and architectural projects required enormous resources that had to be extracted efficiently from",
          "correct": "the agricultural heartland and through taxation of merchants and other subjects.",
            "wrong": ["no real importance.", "purely ceremonial.", "no real function."] },
          { start: "The taxation system established under Akbar and maintained by his successors extracted approximately one-third of agricultural production from peasants, which meant that",
          "correct": "the empire was built on the labor of peasant farmers who had little incentive to increase production beyond what was necessary to pay taxes.",
            "wrong": ["light taxation.", "beneficial to peasants.", "encouraged production."] },
          { start: "The administrative reliance on Hindu bureaucrats and military officers, particularly under Akbar, created a system where Hindus and Muslims worked together, but the reversal of this policy under Aurangzeb meant that",
          "correct": "experienced administrators were sometimes replaced on religious grounds, reducing administrative efficiency.",
            "wrong": ["purely beneficial.", "no real consequence.", "improved administration."] },
          { start: "The corruption that developed in the later Mughal period, as provincial governors and nobles extracted more wealth than they were supposed to remit to the center, weakened imperial finances by",
          "correct": "reducing the revenue available to the central government and reducing the incentive for the center to maintain control over distant provinces.",
            "wrong": ["purely minor problem.", "no real consequence.", "easily corrected."] }
        ]
      },
      {
        name: "Mughal Military Organization & Campaigns",
        emoji: "⚔️",
        quotes: [
          { start: "The Mughal military, organized into cavalry units (particularly the elite Mansabdars' forces), infantry, and artillery, was effective against medieval Indian opponents but faced increasing challenges from external forces and from the Marathas because",
          "correct": "the Marathas developed guerrilla and light cavalry tactics that made traditional Mughal heavy cavalry less effective.",
            "wrong": ["purely superior power.", "no real challenge.", "easily defeated opponents."] },
          { start: "The use of artillery and gunpowder by Mughal forces gave them significant advantages in siege warfare and in pitched battles against opponents with less advanced military technology, but Aurangzeb's reliance on continued military expansion meant that",
          "correct": "the empire's military resources were continually committed to conquest rather than defense, creating vulnerability to threats on multiple fronts.",
            "wrong": ["purely military superiority.", "no real limitation.", "infinite expansion was possible."] },
          { start: "The campaigns in the Deccan against the Maratha kingdoms under Aurangzeb, which lasted for decades and consumed enormous resources, demonstrated that even with superior military organization, an empire could not easily subdue determined opponents in difficult terrain, and that",
          "correct": "the costs of military campaigns could exceed the benefits gained from conquest.",
            "wrong": ["easy conquest.", "profitable campaigns.", "no real cost."] },
          { start: "The naval weakness of the Mughal Empire, despite control of coastal regions, meant that the empire could not effectively resist European naval powers—Portuguese, Dutch, and later British—who began to establish commercial presence in Indian Ocean ports, showing that",
          "correct": "the Mughal Empire, organized as a land-based continental power, was vulnerable to sea-based threats.",
            "wrong": ["naval supremacy.", "no real threat.", "easily repelled."] }
        ]
      },
      {
        name: "Mughal Culture & Intellectual Achievement",
        emoji: "📚",
        quotes: [
          { start: "The Mughal patronage of Persian literature, architecture, music, and visual arts created a cosmopolitan culture that synthesized Islamic, Hindu, and Persian traditions, producing works of lasting artistic and intellectual value, such as",
          "correct": "the Taj Mahal, Persian poetry, miniature painting, and the Akbarnama historical chronicle.",
            "wrong": ["purely derivative culture.", "no real achievement.", "no real synthesis."] },
          { start: "The establishment of the court of Akbar as a center of intellectual discussion, where Akbar (though illiterate) engaged with scholars, philosophers, and theologians from different traditions, demonstrates that",
          "correct": "intellectual achievement could be supported by royal patronage even when the patron himself lacked formal education.",
            "wrong": ["no real discussion.", "purely ceremonial.", "no real learning."] },
          { start: "The composition of the Akbarnama by Abul Fazl, a comprehensive history of Akbar's reign, serves both as a historical record and as propaganda that presents Akbar's rule in the most favorable light, illustrating that",
          "correct": "historical texts are products of their time and reflect the perspectives of their authors and patrons.",
            "wrong": ["purely objective history.", "no bias.", "no propaganda."] },
          { start: "The synthesis of Hindi and Persian (creating Hindustani), the development of Mughal miniature painting as a distinctive style, and the composition of devotional poetry by both Hindu and Muslim poets shows that",
          "correct": "cultural creativity flourished when different traditions could interact and influence each other.",
            "wrong": ["purely separate traditions.", "no real interaction.", "no real synthesis."] }
        ]
      },
      {
        name: "Mughal Economy & Trade",
        emoji: "💰",
        quotes: [
          { start: "The Mughal Empire's economy was based primarily on agricultural taxation, which provided the foundation for military and administrative expenses, but this system meant that",
          "correct": "the empire was dependent on agricultural production and vulnerable to harvest failures, droughts, and famines.",
            "wrong": ["purely commercial economy.", "balanced economy.", "no real vulnerability."] },
          { start: "The Mughal control of key trade routes connecting India to Central Asia and the maritime trade routes to the Indian Ocean gave the empire significant revenue through customs duties and taxation of merchants, though the Portuguese and later Dutch competition reduced Mughal control of maritime trade, showing that",
          "correct": "the empire was losing economic dominance in maritime regions to European powers.",
            "wrong": ["maintained maritime dominance.", "no real threat.", "European competition was limited."] },
          { start: "The Mughal Empire at its peak generated enormous wealth that supported military forces, court expenditures, and architectural projects, but this wealth extraction meant that",
          "correct": "the peasant majority of the population lived at subsistence levels with little surplus.",
            "wrong": ["broadly shared prosperity.", "general wealth.", "light taxation."] },
          { start: "The development of Mughal banking and credit systems, including the use of financial instruments that allowed merchants to conduct commerce across distances, shows that",
          "correct": "the Mughal economy was sophisticated enough to support commercial instruments beyond simple barter.",
            "wrong": ["purely barter economy.", "no real commerce.", "no financial sophistication."] },
          { start: "The decline of Mughal revenue in the 18th century, as provincial governors increasingly retained taxes rather than remitting them to the center, demonstrates that",
          "correct": "the system of centralized revenue collection depended on the willingness of provincial officials to comply, which broke down as central authority weakened.",
            "wrong": ["automatic revenue collection.", "no real change.", "purely military problem."] }
        ]
      },
      {
        name: "Mughal Decline & Fall",
        emoji: "📜",
        quotes: [
          { start: "The decline of the Mughal Empire from the 18th century onward came from multiple factors: Aurangzeb's overextension, the rise of the Marathas as a rival power, the weakening of central authority, European colonial expansion, and",
          "correct": "the loss of revenue to provincial governors and the alienation of subject populations who no longer saw Mughal rule as legitimate.",
            "wrong": ["single cause.", "purely military defeat.", "inevitable decline."] },
          { start: "The increasing inability of the Mughal Empire to maintain control as the 18th century progressed shows that even a large, well-organized empire faced challenges when",
          "correct": "central authority weakened, fiscal resources declined, and rivals emerged with new military capabilities or organizational advantages.",
            "wrong": ["purely external conquest.", "military weakness alone.", "no real system."] },
          { start: "The eventual collapse of Mughal political authority in the 18th century and the establishment of British colonial rule demonstrates that",
          "correct": "even sophisticated empires could be replaced by colonial powers that had superior military technology and organizational advantages.",
            "wrong": ["inevitable British rule.", "Mughal weakness was always present.", "no real achievement."] },
          { start: "The legacy of the Mughal Empire included the integration of Hindi and Persian culture, the development of distinctive architectural styles, the creation of sophisticated administrative systems, and contributions to literature and the arts, showing that",
          "correct": "cultural and intellectual achievements could survive the political collapse of the empire that produced them.",
            "wrong": ["no real legacy.", "purely military achievement.", "no cultural importance."] },
          { start: "The study of the Mughal Empire demonstrates that it was a sophisticated state that synthesized different traditions and that its decline came from internal weaknesses and external challenges rather than from primitive origins, challenging narratives that",
          "correct": "presented Indian societies as less developed than European societies.",
            "wrong": ["India was primitive.", "no real civilization.", "inferior to others."] }
        ]
      },
      {
        name: "Abul Fazl (Historian & Imperial Ideologist)",
        emoji: "📖",
        quotes: [
          { start: "The Akbarnama, the comprehensive history of Akbar's reign compiled by Abul Fazl, served as both a historical record and as imperial propaganda that presented Akbar's rule and policies in favorable terms while downplaying or omitting difficulties, demonstrating that",
          "correct": "official histories are shaped by the perspectives and interests of their authors and patrons.",
            "wrong": ["purely objective history.", "no bias.", "no propaganda."] },
          { start: "Abul Fazl's role as imperial advisor and ideologue, helping to develop the concept of a just, tolerant ruler, shows that intellectuals served important political functions in legitimizing imperial rule and shaping imperial ideology, illustrating that",
          "correct": "intellectual and cultural production was intertwined with political power.",
            "wrong": ["purely intellectual work.", "no political function.", "independent of power."] },
          { start: "The Ain-i Akbari (Constitution of Akbar), compiled by Abul Fazl, which described the administrative system, military organization, and taxation practices of the empire, serves as a valuable source for understanding Mughal administration, though it must be read as a prescriptive text that may not reflect actual practice, showing that",
          "correct": "official descriptions may idealize or distort actual practices.",
            "wrong": ["purely factual account.", "accurate description of reality.", "no distortion."] }
        ]
      },
      {
        name: "Mughal Women & Gender Relations",
        emoji: "👩",
        quotes: [
          { start: "Women in the Mughal royal family, particularly the mothers and wives of emperors, held significant power and influence over succession and palace politics, demonstrating that",
          "correct": "even in a patriarchal empire, women with royal status could exercise real power.",
            "wrong": ["complete subjugation.", "no authority.", "purely domestic roles."] },
          { start: "The practice of purdah (seclusion of elite women), which increased during the Mughal period, reflected both Islamic practices and the desire to control the sexuality and marriages of elite women for political purposes, showing that",
          "correct": "seclusion served multiple functions beyond religious observance.",
            "wrong": ["purely religious practice.", "no political purpose.", "universal practice."] },
          { start: "Women of non-elite status in the Mughal Empire had more freedom of movement and economic activity than elite women, as they participated in agriculture, commerce, and crafts, indicating that",
          "correct": "gender relations varied significantly based on class and status.",
            "wrong": ["uniform status for all women.", "no economic activity.", "no freedom."] }
        ]
      },
      {
        name: "Mughal Legacy & Historical Significance",
        emoji: "📜",
        quotes: [
          { start: "The Mughal synthesis of Persian administrative practices, Islamic religious authority, and Indian cultural traditions created a distinctive civilization that influenced later Indian culture, showing that",
          "correct": "the empire's cultural synthesis transcended its political authority.",
            "wrong": ["no real synthesis.", "purely Persian imposition.", "no Indian influence."] },
          { start: "The Mughal Empire's eventual replacement by British colonial rule demonstrates that European colonial powers possessed military, technological, and organizational advantages that could overcome traditional empires, illustrating that",
          "correct": "the period of European colonial expansion represented a fundamental shift in global power dynamics.",
            "wrong": ["inevitable European superiority.", "Mughal weakness alone.", "purely military."] },
          { start: "The study of the Mughal Empire provides insights into how large, multi-ethnic, multi-religious empires could be organized and maintained through a combination of military power, administrative efficiency, and cultural synthesis, while also showing the limits of such empires when facing internal challenges and external threats, demonstrating that",
          "correct": "empires are complex systems vulnerable to multiple forms of disruption.",
            "wrong": ["purely military machines.", "simple to understand.", "purely inevitable."] }
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
          { start: "A tribe's strength depended on the loyalty of its members, which required that the chief demonstrate",
          "correct": "fairness in dispute resolution, protection from enemies, and the distribution of wealth from successful raids and trade.",
            "wrong": ["pure military force.", "arbitrary rule.", "no real accountability."] },
          { start: "The tribal system of honor and shame, where a chief's reputation was essential to his authority, meant that",
          "correct": "a chief's actions reflected on the entire tribe and could enhance or damage the tribe's standing.",
            "wrong": ["purely individual concern.", "no real consequence.", "irrelevant to tribe."] },
          { start: "The practice of raiding neighboring tribes for cattle, camels, and goods served economic purposes but also required understanding that",
          "correct": "excessive raiding could provoke unified response from victims and create long-term enemies.",
            "wrong": ["unlimited raiding was possible.", "no real consequence.", "purely profitable."] },
          { start: "The role of the chief as judge and arbiter in disputes served to prevent internal conflict that would weaken the tribe, showing that",
          "correct": "the chief's legitimacy depended partly on the perception that he could settle disputes fairly.",
            "wrong": ["arbitrary judgment.", "no real role.", "purely ceremonial."] },
          { start: "The transmission of tribal leadership through kinship networks, though contested, meant that a chief had to maintain the support of his extended family and powerful allies or face",
          "correct": "challenges to his authority from rival claimants.",
            "wrong": ["absolute heredity.", "no real challenge.", "permanent power."] }
        ]
      },
      {
        name: "Pre-Islamic Arabian Poets & Literary Figures",
        emoji: "🖋️",
        quotes: [
          { start: "The role of poets in pre-Islamic Arabian society was powerful because they could",
          "correct": "compose verses that praised or criticized tribal leaders, which were memorized and transmitted, affecting the leader's reputation.",
            "wrong": ["purely entertaining.", "no real influence.", "no political function."] },
          { start: "The Jahiliyyah (pre-Islamic period) poetry preserved in collections like the Mu'allaqat (Hanging Poems) served to record tribal values, historical events, and moral teachings, demonstrating that",
          "correct": "oral literature was a mechanism for preserving and transmitting cultural memory.",
            "wrong": ["purely artistic expression.", "no real information.", "no historical value."] },
          { start: "Poets were respected and sometimes feared in Arabian society because their words could enhance or damage a tribal leader's reputation, meaning that",
          "correct": "poets held real social power through their ability to shape narrative and public opinion.",
            "wrong": ["purely entertaining.", "no real influence.", "ceremonial roles."] },
          { start: "The composition of poetry about valor, honor, love, and loss allowed Arabian poets to explore themes that reflected the values and experiences of pre-Islamic Arabian society, serving to",
          "correct": "encode cultural values and teach through narrative and metaphor.",
            "wrong": ["purely aesthetic expression.", "no real purpose.", "only entertainment."] }
        ]
      },
      {
        name: "Arabian Merchants & Trade Networks",
        emoji: "💰",
        quotes: [
          { start: "Arabian merchants, particularly those from Mecca and other trading centers, conducted commerce across vast distances connecting Arabia with the Mediterranean, Africa, Persia, and India, accumulating wealth and influence through",
          "correct": "control of valuable trade routes and goods, careful management of supply and demand, and the development of trade networks.",
            "wrong": ["purely local trade.", "random success.", "no real organization."] },
          { start: "The development of Meccan merchant families' wealth and prestige came from their control of the trans-Arabian trade routes and their protection of merchants, demonstrating that",
          "correct": "providing security for commerce was essential to building wealth and power.",
            "wrong": ["purely merchant skill.", "no organizational role.", "random success."] },
          { start: "The practice of extending credit and establishing partnerships in long-distance trade required that merchants develop systems of trust and reputation because",
          "correct": "commerce across distances required reliability and the reputation for honoring agreements.",
            "wrong": ["purely transactional.", "no real trust needed.", "forced payment only."] },
          { start: "The wealth accumulated by Arabian merchants allowed them to fund building projects, support poets and scholars, and participate in political decisions, showing that",
          "correct": "economic power translated into social and political influence.",
            "wrong": ["merchants had no power.", "purely economic.", "no political role."] },
          { start: "The Arabian merchant class, particularly in Mecca, competed with each other and with tribal elites, creating social tension that eventually would contribute to",
          "correct": "the rise of Islam, which reorganized society and offered new frameworks for power and legitimacy.",
            "wrong": ["purely peaceful coexistence.", "no real competition.", "no significant tension."] }
        ]
      },
      {
        name: "Arabian Warriors & Raiding Culture",
        emoji: "⚔️",
        quotes: [
          { start: "The raiding culture of pre-Islamic Arabia, where tribes conducted raids on each other for cattle and goods, served economic purposes but also reinforced",
          "correct": "tribal identity, tested warrior skills, and provided opportunities for young men to gain prestige.",
            "wrong": ["purely economic.", "no cultural function.", "random violence."] },
          { start: "The warrior values of pre-Islamic Arabia—courage, loyalty, honor, generosity—were expressed through poetry, through stories of famous warriors, and through the conduct of raids and feuds, serving to",
          "correct": "transmit values and provide models of behavior that defined what it meant to be a good tribal member.",
            "wrong": ["purely entertainment.", "no real function.", "no cultural importance."] },
          { start: "The long-standing feuds between tribes, sometimes lasting for generations, were sometimes resolved through the payment of blood money (diyya) rather than endless cycles of revenge, showing that",
          "correct": "mechanisms existed for conflict resolution even in a society centered on honor and raiding.",
            "wrong": ["endless cycles of revenge only.", "no real resolution.", "purely military conquest."] },
          { start: "The prestige earned by successful warriors, through their feats in battle and their generosity to their followers, created leaders who could command loyalty and organize large groups, demonstrating that",
          "correct": "individual achievement could create leadership authority in a decentralized tribal society.",
            "wrong": ["purely hereditary leadership.", "no real authority.", "purely military power."] }
        ]
      },
      {
        name: "Arabian Religious Life & Pre-Islamic Beliefs",
        emoji: "🕌",
        quotes: [
          { start: "Pre-Islamic Arabian religion included belief in various deities, spirits (jinn), and the veneration of sacred sites including the Kaaba in Mecca, which served to",
          "correct": "provide a framework for understanding the sacred, create pilgrimage practices that brought commerce and interaction, and reinforce tribal and regional identities.",
            "wrong": ["purely superstition.", "no real beliefs.", "random practices."] },
          { start: "The Kaaba and the practice of pilgrimage to Mecca served both religious and commercial purposes, bringing together tribes for trade, marriage arrangements, and the resolution of disputes, showing that",
          "correct": "religious sites and practices could serve multiple social and economic functions.",
            "wrong": ["purely religious.", "no commercial benefit.", "no real purpose."] },
          { start: "The belief in jinn (supernatural beings) and in various forms of divination reflected pre-Islamic Arabian attempts to understand and interact with forces beyond human control, demonstrating that",
          "correct": "religions and belief systems serve to help people understand their world and their place in it.",
            "wrong": ["purely superstition.", "no real beliefs.", "purely irrational."] },
          { start: "The veneration of certain deities and the practice of making vows and sacrifices served to reinforce social bonds and provide a framework for moral behavior, with violations of sacred oaths carrying serious consequences, showing that",
          "correct": "religion could serve to enforce social norms and create accountability.",
            "wrong": ["purely spiritual.", "no social function.", "no real enforcement."] }
        ]
      },
      {
        name: "Early Islamic Caliphs & Leadership",
        emoji: "🕌",
        quotes: [
          { start: "The early caliphs (particularly the Rightly Guided Caliphs), who claimed to be the successors of Muhammad and leaders of the Islamic community, derived their authority from",
          "correct": "their claim to represent Islamic teachings, their military and administrative capabilities, and the acceptance of the Muslim community.",
            "wrong": ["purely religious authority.", "hereditary right.", "conquest alone."] },
          { start: "The early caliphate required establishing administrative systems that could collect taxes, maintain armies, and administer justice according to Islamic law (Sharia), demonstrating that",
          "correct": "the expansion of Islam required the development of sophisticated governance structures.",
            "wrong": ["purely military conquest.", "no real administration.", "religious leadership alone."] },
          { start: "The relationship between the early caliphs and the merchant class, including merchants who had previously been opposed to Islam like 'Umar before his conversion, showed that Islam could integrate diverse elements of Arabian society by",
          "correct": "offering new frameworks for legitimacy, justice, and social organization.",
            "wrong": ["purely military conquest.", "no real integration.", "forced acceptance."] },
          { start: "The rapid expansion of Islam from Arabia to the Mediterranean, Persia, and beyond in the century after Muhammad's death demonstrated that Islam provided",
          "correct": "a framework for unity that transcended tribal affiliations and that resonated with diverse peoples seeking order and meaning.",
            "wrong": ["purely military expansion.", "no real appeal.", "purely forced conversion."] }
        ]
      },
      {
        name: "Arabian Trade Routes & Commerce",
        emoji: "💰",
        quotes: [
          { start: "The major trade routes of pre-Islamic Arabia, including the incense trade routes bringing frankincense and myrrh from southern Arabia to the Mediterranean, created wealth and power for the tribes and merchants who controlled them because",
          "correct": "control of valuable goods and the ability to tax trade meant control of wealth and resources.",
            "wrong": ["purely commercial.", "no political benefit.", "no real power."] },
          { start: "The development of the caravan trade, with large organized groups of merchants traveling together for safety and efficiency, required trust, organization, and the development of rules and customs for conducting business, demonstrating that",
          "correct": "long-distance trade required institutional structures and agreements.",
            "wrong": ["purely individual merchants.", "no real organization.", "random trading."] },
          { start: "The wealth accumulated by Arabian merchants allowed them to rival tribal leaders in influence and to shape political decisions, creating tensions that were eventually resolved when Islam offered",
          "correct": "a new framework that integrated merchant interests with religious authority.",
            "wrong": ["merchants remained powerless.", "no real integration.", "permanent conflict."] },
          { start: "The location of Mecca on a major trade route and its status as a pilgrimage destination made it ideal for the development of a merchant-dominated society, where",
          "correct": "merchants could accumulate wealth and leverage their control of commerce and pilgrimage into political influence.",
            "wrong": ["purely religious site.", "no commerce.", "no real wealth."] }
        ]
      },
      {
        name: "Arabian Poetry & Cultural Values",
        emoji: "🖋️",
        quotes: [
          { start: "The themes in pre-Islamic Arabian poetry—love, loss, the transience of life, tribal honor, warrior prowess—reflected the values and experiences of Arabian society, serving to",
          "correct": "transmit cultural values, provide entertainment, and create a shared sense of identity and meaning.",
            "wrong": ["purely artistic expression.", "no real information.", "no cultural function."] },
          { start: "The role of poetry competitions and poetry contests at fairs (particularly at 'Ukaz) served to showcase the talents of poets and provide entertainment, but also to",
          "correct": "enhance the prestige of the tribes that produced the best poets and to transmit cultural values.",
            "wrong": ["purely entertainment.", "no real function.", "no cultural importance."] },
          { start: "The memorization and transmission of poetry as an oral tradition ensured that cultural values and historical events would be remembered even in the absence of written records, demonstrating that",
          "correct": "oral tradition was a reliable mechanism for preserving and transmitting knowledge.",
            "wrong": ["purely entertainment.", "unreliable.", "no real value."] },
          { start: "The introduction of Islam and the emphasis on the Quran as a literary text that could supersede pre-Islamic poetry indicated that",
          "correct": "Islam recognized the power of language and poetry to shape values and beliefs.",
            "wrong": ["poetry was unimportant.", "no real competition.", "Quran had no literary quality."] }
        ]
      },
      {
        name: "Arabian Social Structure & Tribal Organization",
        emoji: "🏛️",
        quotes: [
          { start: "Pre-Islamic Arabian society was organized around kinship networks and tribes, where individuals' identities and responsibilities were determined by their membership in a particular family and tribe, providing that",
          "correct": "each person had clearly defined relationships and obligations within their social group.",
            "wrong": ["no real organization.", "purely egalitarian.", "random relationships."] },
          { start: "The system of honor and shame, where an individual's actions reflected on their entire family and tribe, meant that",
          "correct": "individuals had strong incentives to behave in ways that enhanced rather than damaged their group's reputation.",
            "wrong": ["no real consequences.", "purely individual concern.", "irrelevant to group."] },
          { start: "The practice of protecting clients (mawali), who were individuals without tribe but who placed themselves under the protection of a powerful family, showed that",
          "correct": "even in a kinship-based society, mechanisms existed for incorporating individuals without genealogical connections.",
            "wrong": ["purely rigid system.", "no possibility of incorporation.", "exclusive kinship."] },
          { start: "Women in pre-Islamic Arabian society had diverse roles: some had significant economic power through control of property and trade, some were poets, while others had more restricted roles, indicating that",
          "correct": "women's status and roles varied based on class, tribe, and individual circumstances.",
            "wrong": ["complete subjugation.", "no authority.", "uniform status."] }
        ]
      },
      {
        name: "Arabian Economic Foundations",
        emoji: "💰",
        quotes: [
          { start: "Pre-Islamic Arabian economy was based on pastoralism (herding camels, sheep, goats), agriculture in limited fertile areas, trade, and raiding, with different regions specializing in different activities, showing that",
          "correct": "economic organization had to adapt to environmental constraints and opportunities.",
            "wrong": ["purely pastoral.", "no real diversity.", "no adaptation."] },
          { start: "The development of market centers like Mecca, Medina, and Taif served as gathering places for trade fairs where merchants could exchange goods and where poets could compose and perform, demonstrating that",
          "correct": "economic centers also served social and cultural functions.",
            "wrong": ["purely commercial.", "no cultural benefit.", "no real purpose."] },
          { start: "The emergence of a merchant class with wealth and influence comparable to tribal elites created social tensions and power struggles that reflected",
          "correct": "the competition between old tribal power structures and new mercantile power structures.",
            "wrong": ["harmonious coexistence.", "no real tension.", "purely economic."] },
          { start: "The integration of diverse economic activities—pastoralism, agriculture, trade, raiding—into a coherent system that sustained Arabian populations showed that",
          "correct": "pre-Islamic Arabian society, despite its apparent decentralization, had developed sophisticated economic strategies.",
            "wrong": ["purely primitive.", "no real organization.", "simple pastoralism only."] }
        ]
      },
      {
        name: "Arabian Transformation & Islamic Influence",
        emoji: "🕌",
        quotes: [
          { start: "The rapid adoption of Islam by diverse Arabian groups—wealthy merchants, poor nomads, tribal warriors—shows that Islam offered something valuable to different segments of society, including",
          "correct": "a new framework for unity that transcended tribal divisions, new sources of legitimacy, and new paths to prestige and power.",
            "wrong": ["purely forced conversion.", "no real appeal.", "external imposition."] },
          { start: "The transformation of Arabian society from a decentralized system of competing tribes to a unified Islamic state shows that Islam provided",
          "correct": "organizational structures, shared beliefs, and frameworks for authority that could unite diverse peoples.",
            "wrong": ["purely military conquest.", "no real change.", "purely external."] },
          { start: "The preservation of Arabian cultural elements—poetry, tribal traditions, certain legal practices—within Islamic civilization shows that",
          "correct": "Islam was not a complete rejection of Arabian culture but rather a transformation that incorporated and adapted existing traditions.",
            "wrong": ["complete cultural destruction.", "no Arab influence.", "purely external imposition."] },
          { start: "The role of the Quran in Islamic Arabia, as a literary text that could be memorized and recited, shows that Islam built upon existing Arabian traditions of",
          "correct": "memorization and oral transmission while introducing a text that unified believers.",
            "wrong": ["no connection to tradition.", "purely external.", "rejection of poetry."] }
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
        name: "Sundiata Keita (Founder & Historical Legend)",
        emoji: "👑",
        quotes: [
          { start: "I overcame my physical disability and childhood hardship to unite the Mandinka peoples against the Sosso kingdom because",
          "correct": "determination, the support of my people, and military strategy could overcome seemingly insurmountable obstacles.",
            "wrong": ["pure magic.", "supernatural power.", "inevitable destiny."] },
          { start: "The victory at the Battle of Kirina in 1235 established Mali as a major power by demonstrating that",
          "correct": "a united force of diverse Mandinka groups could defeat a militarily entrenched rival.",
            "wrong": ["pure military superiority.", "no real strategy.", "inevitable victory."] },
          { start: "The founding of the Mali Empire required establishing control over gold trade routes because",
          "correct": "gold wealth was essential to funding military forces, supporting administration, and maintaining influence.",
            "wrong": ["purely symbolic.", "no economic value.", "military conquest alone."] },
          { start: "My establishment of the empire through both military conquest and the winning of alliances showed that successful state-building required",
          "correct": "the combination of military power, political skill, and the ability to convince diverse groups that Mali offered benefits.",
            "wrong": ["pure force alone.", "no diplomacy.", "random success."] },
          { start: "The legendary nature of my story, preserved in oral tradition and later accounts, demonstrates that",
          "correct": "the boundary between historical fact and legendary narrative can blur, with both serving to preserve cultural memory.",
            "wrong": ["no historical basis.", "purely fictional.", "irrelevant."] }
        ]
      },
      {
        name: "Mansa Musa I (Golden Age & International Influence)",
        emoji: "👑",
        quotes: [
          { start: "My pilgrimage to Mecca in 1324 served multiple purposes: demonstrating Mali's prosperity and piety, establishing relationships with distant Islamic powers, and",
          "correct": "showing the Islamic world that Mali was a major power worthy of respect and trade.",
            "wrong": ["purely religious devotion.", "no political benefit.", "no real strategy."] },
          { start: "The distribution of gold during my pilgrimage, which caused inflation in Egypt and the Levant, demonstrated both Mali's immense wealth and created a lasting impression of Mali's power and prosperity, though it also",
          "correct": "showed the volatility of wealth-based power and the difficulty of managing economic impact.",
            "wrong": ["purely wasteful.", "no real benefit.", "purely arrogant."] },
          { start: "The establishment and patronage of the University of Timbuktu and other centers of Islamic learning served to demonstrate that Mali was",
          "correct": "a sophisticated civilization capable of supporting scholarship and intellectual pursuits.",
            "wrong": ["purely religious devotion.", "no political benefit.", "wasteful expenditure."] },
          { start: "My reign brought Mali to its greatest territorial extent and highest prestige because I understood that controlling trade routes, maintaining military power, and supporting cultural achievement created",
          "correct": "multiple sources of power and prestige that reinforced each other.",
            "wrong": ["single source of power was sufficient.", "military alone mattered.", "cultural achievement was unimportant."] },
          { start: "The documentation of my pilgrimage by Arab historians and others created a permanent record of Mali's power and prestige, showing that",
          "correct": "international recognition and documented achievement could enhance a ruler's legacy.",
            "wrong": ["purely ceremonial.", "no real value.", "no lasting impact."] }
        ]
      },
      {
        name: "Mali Trade & Economic Power",
        emoji: "💰",
        quotes: [
          { start: "Mali's wealth came primarily from control of West African gold sources and the taxation of trade passing through Mali's territory, allowing rulers to",
          "correct": "accumulate wealth that could be used for military campaigns, building projects, and patronage.",
            "wrong": ["purely agricultural wealth.", "no economic organization.", "trade was unimportant."] },
          { start: "The establishment of Mali as a node in Saharan trade networks, connecting West African gold to North African and Mediterranean markets, gave Mali strategic and economic importance because",
          "correct": "control of trade routes meant control of valuable goods and the ability to extract customs duties.",
            "wrong": ["purely commercial.", "no strategic value.", "no political importance."] },
          { start: "Mali merchants and traders, operating under the protection and with the patronage of the Mali rulers, accumulated wealth and established networks that extended Mali's economic influence, demonstrating that",
          "correct": "encouraging commerce and protecting merchants benefited both the merchants and the state through taxation.",
            "wrong": ["merchants were exploited.", "no real benefit to state.", "purely commercial."] },
          { start: "The establishment of Mali's mints and the production of Mali currency helped facilitate long-distance trade and demonstrated that Mali was recognized as a major economic power because",
          "correct": "Mali currency could be trusted and used in distant markets.",
            "wrong": ["purely symbolic.", "no real value.", "no practical purpose."] },
          { start: "The wealth from trade allowed Mali to finance the military campaigns that expanded the empire and the building projects that made cities like Timbuktu great centers, showing that",
          "correct": "economic power and military power were interconnected.",
            "wrong": ["separate systems.", "military was independent.", "trade was unimportant."] }
        ]
      },
      {
        name: "Mali Rulers & Administration",
        emoji: "⚖️",
        quotes: [
          { start: "The Mali system of governance, centered on the Mansa as supreme authority but with input from nobles and councils, required that rulers maintain the loyalty of powerful chiefs and the support of merchant classes by",
          "correct": "ensuring that different groups benefited from Mali rule and that the Mansa's authority was recognized as legitimate.",
            "wrong": ["pure autocracy.", "no real consultation.", "arbitrary rule."] },
          { start: "Mali's expansion of territory and influence required establishing administrative systems in conquered regions to ensure that tribute was collected and Malian authority was maintained, showing that",
          "correct": "military conquest had to be followed by governance and administration.",
            "wrong": ["purely military occupation.", "no real administration.", "no governance needed."] },
          { start: "The Mali approach to incorporating diverse ethnic groups and previously independent chiefdoms into the empire required that rulers understand that",
          "correct": "some degree of local autonomy and the recognition of local leaders' authority could maintain stability while ensuring Mali supremacy.",
            "wrong": ["complete cultural erasure.", "no local authority.", "pure domination."] },
          { start: "The stability of Mali rule for centuries came from establishing systems where rulers could maintain control without constant military presence in all territories, relying instead on",
          "correct": "appointed administrators, the threat of military force, and the benefits that Mali rule provided.",
            "wrong": ["purely military occupation.", "no real system.", "arbitrary rule."] },
          { start: "The decline of Mali's power in the 15th century came from multiple factors including the rise of the Songhai Empire, the shift of trade routes, and internal fragmentation, showing that",
          "correct": "even successful empires are vulnerable to changed circumstances and the rise of rivals.",
            "wrong": ["purely military defeat.", "inevitable decline.", "no real threat."] }
        ]
      },
      {
        name: "Mali Islam & Religious Authority",
        emoji: "🕯️",
        quotes: [
          { start: "The adoption of Islam by Mali rulers, particularly Mansa Musa, served multiple purposes: integrating Mali into the Islamic world, providing religious legitimacy, and",
          "correct": "creating a shared faith identity with North African and Mediterranean Islamic powers.",
            "wrong": ["purely religious devotion.", "no political benefit.", "no real strategy."] },
          { start: "The patronage of Islamic scholars and the establishment of Islamic centers of learning demonstrated that Mali rulers understood that",
          "correct": "supporting religion and learning enhanced the prestige of the ruler and created bonds with Islamic scholars.",
            "wrong": ["purely religious commitment.", "no political benefit.", "wasteful expenditure."] },
          { start: "The role of Islamic judges and scholars (qadis and ulema) in Mali governance served to provide legal authority based on Islamic law (Sharia) and created a framework for justice that was recognized across the Islamic world, showing that",
          "correct": "religious and legal authority were intertwined.",
            "wrong": ["purely religious roles.", "no administrative function.", "no real power."] },
          { start: "Mali's tolerance of traditional African religious practices alongside Islam showed that rulers understood that",
          "correct": "religious accommodation could maintain the support of diverse populations while establishing Islamic authority.",
            "wrong": ["pure Islamic dominance.", "no traditional practices.", "forced conversion."] }
        ]
      },
      {
        name: "Timbuktu & Centers of Learning",
        emoji: "📚",
        quotes: [
          { start: "The development of Timbuktu as a major center of Islamic scholarship under Mali rule, particularly under Mansa Musa, served to attract scholars from across the Islamic world because",
          "correct": "Mali rulers provided patronage, resources, and the establishment of madrasas (schools) and libraries.",
            "wrong": ["purely educational mission.", "no political benefit.", "no real achievement."] },
          { start: "The University of Timbuktu, though not a formal university in the European sense, functioned as an advanced center of Islamic learning where scholars studied law, theology, mathematics, and medicine, demonstrating that",
          "correct": "Mali was capable of supporting sophisticated intellectual activity.",
            "wrong": ["no real learning.", "purely ceremonial.", "no real achievement."] },
          { start: "The preservation of manuscripts and the composition of scholarly works in Timbuktu created a legacy of knowledge that would be destroyed in later conflicts but represented Mali's intellectual achievement, showing that",
          "correct": "cultural and intellectual achievements could create lasting contributions to human knowledge.",
            "wrong": ["no real learning.", "purely religious texts.", "no real value."] },
          { start: "The role of Timbuktu as a major trade center combined with its function as a center of learning made it an ideal place for the exchange of ideas, goods, and technologies, demonstrating that",
          "correct": "commerce and intellectual achievement could flourish together.",
            "wrong": ["trade inhibited learning.", "separate systems.", "no real benefit to commerce."] }
        ]
      },
      {
        name: "Griots & Oral Tradition",
        emoji: "🪕",
        quotes: [
          { start: "The role of griots (professional storytellers and historians) in Mali society was essential to preserving history and cultural memory because they",
          "correct": "memorized vast amounts of information including genealogies, historical events, and moral teachings, transmitting them across generations.",
            "wrong": ["purely entertainment.", "no real function.", "no actual knowledge."] },
          { start: "The authority granted to griots in Mali society, where they served as advisors to rulers and interpreters of tradition, showed that rulers understood that",
          "correct": "controlling narrative and maintaining historical memory was important to legitimizing rule.",
            "wrong": ["purely ceremonial roles.", "no real authority.", "no political function."] },
          { start: "The epic of Sundiata, preserved and transmitted by griots, served both as entertainment and as a teaching tool about leadership, courage, and the founding of the Mali Empire, demonstrating that",
          "correct": "oral tradition could encode complex historical, moral, and political information.",
            "wrong": ["purely fictional.", "no real information.", "no historical value."] },
          { start: "The continued importance of griots in Mali and other West African societies even into modern times shows that oral tradition remained a powerful mechanism for preserving knowledge and identity, illustrating that",
          "correct": "written and oral traditions could coexist and that oral tradition could be as reliable as written records.",
            "wrong": ["oral tradition is unreliable.", "written records are always superior.", "oral tradition was abandoned."] }
        ]
      },
      {
        name: "Mali Military & Defense",
        emoji: "⚔️",
        quotes: [
          { start: "The Mali military, organized into forces of archers and cavalry, proved effective in controlling large territories and defeating rivals because commanders understood that",
          "correct": "diverse unit types and coordination could overcome single unit types.",
            "wrong": ["purely cavalry forces.", "no real strategy.", "numbers alone mattered."] },
          { start: "Mali's ability to maintain control over vast territories with relatively dispersed populations required military strength but also the threat of military force and the credibility of that threat, showing that",
          "correct": "the perception of military power could be as important as actual military force.",
            "wrong": ["purely military occupation.", "continuous warfare.", "no real strategy."] },
          { start: "Mali's military victories, including the expansion of territory under various rulers, were sustained by the ability to maintain supply lines, recruit soldiers, and organize campaigns over long distances, demonstrating that",
          "correct": "logistics and administration were as important as military tactics.",
            "wrong": ["purely military skill.", "no real organization.", "luck alone."] },
          { start: "Mali's vulnerability to the rise of the Songhai Empire in the 15th century showed that military power, while important, depended on maintaining political unity and economic strength, which Mali eventually lost, illustrating that",
          "correct": "empires are vulnerable when internal factors weaken.",
            "wrong": ["purely external conquest.", "inevitable decline.", "military weakness alone."] }
        ]
      },
      {
        name: "Mali Society & Social Structure",
        emoji: "🏛️",
        quotes: [
          { start: "Mali society was organized into distinct classes: the royal family and nobility, merchants and traders, craftspeople, farmers, and enslaved persons, because this hierarchy allowed for",
          "correct": "specialization, the concentration of resources, and the accumulation of wealth and power.",
            "wrong": ["purely egalitarian.", "no real structure.", "random organization."] },
          { start: "The status of merchants in Mali was elevated because they contributed to the empire's wealth through trade and were essential to the control of valuable goods, showing that",
          "correct": "economic power translated into social status.",
            "wrong": ["merchants had no status.", "purely occupational class.", "no real influence."] },
          { start: "Women in Mali society, particularly those of elite status, held important roles in managing households, conducting trade, and participating in community life, though political power remained male-dominated, indicating that",
          "correct": "women had important social and economic roles despite male political dominance.",
            "wrong": ["complete subjugation.", "no authority.", "purely domestic roles."] },
          { start: "The existence of enslaved populations in Mali, obtained through trade and warfare, demonstrates that Mali society, despite its cultural and intellectual achievements, relied on",
          "correct": "enslaved labor to support the economy.",
            "wrong": ["no slavery existed.", "purely voluntary labor.", "no real reliance."] }
        ]
      },
      {
        name: "Mali Decline & Historical Legacy",
        emoji: "📜",
        quotes: [
          { start: "The decline of Mali from its peak in the 14th century came from multiple factors: the rise of the Songhai Empire, shifting trade routes, the loss of control over gold sources, and internal fragmentation, showing that",
          "correct": "even successful empires are vulnerable to changed circumstances and the emergence of rivals.",
            "wrong": ["single cause.", "inevitable decline.", "purely military defeat."] },
          { start: "The gradual loss of territory and influence by Mali in the 15th century demonstrated that empires built on the control of trade routes are vulnerable when those routes shift or when new competitors emerge, illustrating that",
          "correct": "economic foundations of empires can be undermined by changes beyond the empire's control.",
            "wrong": ["military weakness alone.", "no real threat.", "inevitable collapse."] },
          { start: "The legacy of Mali included the establishment of great centers of Islamic learning, the demonstration that West African states could become major regional powers, and the preservation of sophisticated administrative systems, showing that",
          "correct": "cultural and intellectual achievements could survive the political decline of the empire that produced them.",
            "wrong": ["no real legacy.", "purely military achievement.", "no lasting influence."] },
          { start: "The memory of Mali and especially of Mansa Musa persisted in Islamic and European historical records, with the Mali Empire remembered as a major power, demonstrating that",
          "correct": "international recognition and documentation could create a lasting historical legacy.",
            "wrong": ["completely forgotten.", "purely local impact.", "no real significance."] },
          { start: "The study of Mali demonstrates that African civilizations achieved levels of political organization, economic development, intellectual achievement, and cultural sophistication comparable to contemporary societies elsewhere in the world, challenging narratives that",
          "correct": "presented Africa as less developed or less sophisticated.",
            "wrong": ["Africa was primitive.", "no real civilization.", "inferior to others."] }
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
        name: "Montezuma I (Expansion & Consolidation)",
        emoji: "👑",
        quotes: [
          { start: "I expanded the Aztec Empire through military conquest and the establishment of tributary relationships because the empire's survival depended on",
          "correct": "the constant acquisition of tribute and captives for sacrifice, which sustained the cosmic order and supported the state.",
            "wrong": ["purely territorial expansion.", "no economic purpose.", "arbitrary conquest."] },
          { start: "The construction of the great aqueducts bringing water to Tenochtitlan demonstrated that I understood that",
          "correct": "infrastructure development was essential to supporting the growing population of the capital.",
            "wrong": ["purely ceremonial.", "no practical purpose.", "wasteful expenditure."] },
          { start: "The organization of the empire into tributary provinces required appointing administrators and military governors who could",
          "correct": "collect tribute, maintain order, prevent rebellion, and serve the emperor's will.",
            "wrong": ["no real administration.", "purely military occupation.", "no governance needed."] },
          { start: "The elevation of Huitzilopochtli (the Aztec patron god) and the expansion of human sacrifice served to",
          "correct": "reinforce Aztec religious ideology, justify imperial expansion as serving divine will, and legitimate the dominance of the Mexica people.",
            "wrong": ["purely religious fervor.", "no political purpose.", "no ideology."] },
          { start: "The wealth accumulated through tribute allowed me to sponsor building projects, support the nobility, maintain the military, and establish Tenochtitlan as the greatest city in Mesoamerica, demonstrating that",
          "correct": "economic extraction from conquered peoples was essential to Aztec power and prestige.",
            "wrong": ["voluntary tribute.", "no real wealth.", "local resources alone."] }
        ]
      },
      {
        name: "Montezuma II (Empire at Peak & Collapse)",
        emoji: "👑",
        quotes: [
          { start: "I inherited an empire at its greatest extent, but I also inherited the vulnerability that came from ruling through fear and tributary relationships that relied on continuous military success and the perception of invincibility because",
          "correct": "subject peoples and tributaries were held in place by Aztec military power and the belief that resistance was futile.",
            "wrong": ["willing subjects.", "genuine loyalty.", "stable system."] },
          { start: "The arrival of Spanish conquistadors posed a challenge that demonstrated the limitations of an empire built on traditional warfare and assumptions about invulnerability, showing that",
          "correct": "new military technology (steel, horses, firearms) and diseases could undermine even a sophisticated military power.",
            "wrong": ["Aztec military was weak.", "Spanish were naturally superior.", "no real innovation."] },
          { start: "My initial attempts to diplomacy with Cortés rather than immediate military confrontation reflected the complexity of deciding how to respond to an unprecedented threat, though ultimately this approach allowed the Spanish to",
          "correct": "establish a foothold, gather intelligence, and form alliances with subject peoples who resented Aztec rule.",
            "wrong": ["purely weak leadership.", "foolish decision.", "no strategic consideration."] },
          { start: "The rapid collapse of the Aztec Empire after Montezuma's death showed that beneath the military power and imperial prestige, the system depended on continuous successful warfare and the fear that made subject peoples accept Aztec rule, which Spanish conquest undermined by",
          "correct": "demonstrating that the Aztecs could be defeated and by offering subject peoples an alternative to Aztec domination.",
            "wrong": ["purely military defeat.", "no real system.", "inevitable collapse."] }
        ]
      },
      {
        name: "Aztec Military Organization & Warfare",
        emoji: "⚔️",
        quotes: [
          { start: "The Aztec military was organized into units with different ranks, including the Jaguar Warriors and Eagle Warriors (elite units), and organized conquest required that commanders",
          "correct": "coordinate large forces, maintain supply lines across distances, and plan multi-year campaigns to expand the empire.",
            "wrong": ["no real organization.", "purely mercenary forces.", "no coordination."] },
          { start: "Aztec warfare emphasized the capture of enemies for sacrifice because the Aztec believed that",
          "correct": "human blood sustained the sun god Huitzilopochtli and the continuation of the cosmos depended on regular sacrificial offerings.",
            "wrong": ["purely bloodthirsty.", "no real belief.", "pure sadism."] },
          { start: "The use of obsidian-edged weapons (macuahuitl) by Aztec warriors proved effective in battle, though against Spanish steel and firearms, the weapons were",
          "correct": "insufficient to overcome technological advantages.",
            "wrong": ["always superior.", "effective against Spanish.", "no real limitation."] },
          { start: "The Aztec military strategy of 'flower wars'—ritualized warfare with neighboring city-states to capture prisoners—served religious and political purposes: obtaining sacrificial victims and demonstrating military power, though this system also",
          "correct": "prevented the formation of unified opposition to Aztec rule and maintained Aztec military readiness.",
            "wrong": ["purely ceremonial.", "no strategic purpose.", "no real benefit."] },
          { start: "The military organization of the Aztec Empire required a standing army and the capacity to mobilize large forces quickly, which depended on a sophisticated administrative system, showing that",
          "correct": "military power required logistical support, tax collection, and the coordination of resources across the empire.",
            "wrong": ["purely military organization.", "no real complexity.", "armies fed themselves."] }
        ]
      },
      {
        name: "Tenochtitlan & Urban Achievement",
        emoji: "🏛️",
        quotes: [
          { start: "The construction of Tenochtitlan on an island in Lake Texcoco, complete with aqueducts, causeways, canals, and the Great Temple, demonstrated that Aztec engineers and laborers possessed",
          "correct": "sophisticated knowledge of hydraulics, urban planning, and the ability to execute massive building projects.",
            "wrong": ["primitive engineering.", "no real planning.", "no real achievement."] },
          { start: "The population of Tenochtitlan, estimated at 200,000 to 400,000 people, made it one of the largest cities in the world at the time, requiring the empire to",
          "correct": "manage food supplies through the tributary system, organize waste management, and maintain order in a densely populated urban center.",
            "wrong": ["no real management.", "purely agricultural production.", "no real system."] },
          { start: "The great marketplace (tianguis) at Tlatelolco and other trade centers served to facilitate commerce, allow the state to collect taxes, and provided information about prices and goods, demonstrating that",
          "correct": "Aztec rulers understood that markets were both economic and political institutions.",
            "wrong": ["purely economic.", "no political function.", "no real purpose."] },
          { start: "The Great Temple (Templo Mayor) at the center of Tenochtitlan served both religious and political purposes: as a place of sacrifice and ritual but also as a visible symbol of Aztec power and the cosmic order they maintained through their rule, showing that",
          "correct": "religious and political functions were intertwined in Aztec society.",
            "wrong": ["purely religious.", "no political function.", "no real purpose."] },
          { start: "The aqueducts bringing fresh water to Tenochtitlan from mainland sources were essential to supporting the city's large population and represented a significant engineering and logistical achievement, proving that",
          "correct": "the Aztecs understood the importance of infrastructure for supporting urban populations.",
            "wrong": ["no real need.", "purely ceremonial.", "simple water collection."] }
        ]
      },
      {
        name: "Aztec Religion & Cosmology",
        emoji: "🕯️",
        quotes: [
          { start: "The Aztec cosmology, centered on the concept of cyclical creation and destruction, understood that the current 'Fifth Sun' (the fifth creation) was sustained by divine energy that required regular renewal through human sacrifice, demonstrating that",
          "correct": "the religious system justified and required the continuous acquisition of captives for sacrifice.",
            "wrong": ["purely mythological.", "no real beliefs.", "no political use."] },
          { start: "The deity Huitzilopochtli, understood as the god of war and the sun, was directly associated with the Mexica people, their migrations, and their divine destiny to rule, serving the purpose of",
          "correct": "providing religious and ideological justification for Aztec conquest and expansion.",
            "wrong": ["purely religious.", "no political function.", "no real significance."] },
          { start: "The practice of human sacrifice, which included the sacrifice of captured enemies, some slaves, and occasionally willing participants, was understood by the Aztecs as",
          "correct": "essential to sustaining the cosmos and ensuring the sun's daily journey across the sky.",
            "wrong": ["purely cruel.", "no real belief.", "sadistic impulses only."] },
          { start: "The role of the priesthood in Aztec society was powerful because priests maintained religious knowledge, performed essential rituals, and served as advisors to rulers, demonstrating that",
          "correct": "religious and political authority were closely connected.",
            "wrong": ["purely religious roles.", "no political influence.", "no real power."] },
          { start: "The tolerance shown by some Aztec rulers toward the gods of conquered peoples, as long as Huitzilopochtli and the Aztec pantheon were acknowledged as superior, served to",
          "correct": "maintain stability among diverse populations while asserting Aztec religious and political dominance.",
            "wrong": ["pure religious tolerance.", "no political strategy.", "arbitrary choice."] }
        ]
      },
      {
        name: "Aztec Trade & Commerce",
        emoji: "💰",
        quotes: [
          { start: "The Aztec tributary system required the collection of vast quantities of goods—cacao, jade, feathers, obsidian, cloth, and food—from conquered territories, which were then redistributed to support the empire and demonstrate the emperor's wealth, showing that",
          "correct": "economic extraction was central to both Aztec political power and ideological legitimacy.",
            "wrong": ["purely military power.", "no economic foundation.", "voluntary tribute."] },
          { start: "Aztec merchants (pochteca) conducted long-distance trade and also served as spies and scouts for the empire, demonstrating that the Aztecs understood that",
          "correct": "commerce and intelligence gathering could serve both economic and military purposes.",
            "wrong": ["purely commercial.", "no strategic value.", "separate systems."] },
          { start: "The use of cacao beans as a medium of exchange shows that the Aztecs had a sophisticated understanding of currency and that cacao held economic value that transcended its consumption as a luxury drink, proving",
          "correct": "that commerce required reliable stores of value and systems for exchange.",
            "wrong": ["purely ceremonial.", "no real value.", "no economic system."] },
          { start: "The great marketplaces and trade networks connected the Aztec Empire to distant regions, providing access to goods from the coasts, highlands, and the Yucatan, demonstrating that",
          "correct": "the Aztec economy was integrated into regional trade networks even as tribute extraction and force maintained Aztec dominance.",
            "wrong": ["purely isolated.", "no external trade.", "local commerce only."] },
          { start: "The wealth accumulated through the tributary system and trade allowed the Aztec state to support a large non-productive population including priests, nobles, and administrators, proving that",
          "correct": "economic extraction from subjects was essential to maintaining the complex society.",
            "wrong": ["purely agricultural wealth.", "no real extraction.", "voluntary contributions."] }
        ]
      },
      {
        name: "Aztec Administration & Governance",
        emoji: "⚖️",
        quotes: [
          { start: "The Aztec Empire maintained power through a combination of military force, the threat of force, tribute extraction, and the imposition of Aztec administrators and garrisons in conquered territories, demonstrating that",
          "correct": "the empire was held together by coercion and the demonstration of Aztec power rather than by willing consent.",
            "wrong": ["willing subjects.", "genuine loyalty.", "voluntary association."] },
          { start: "The appointment of governors and the establishment of administrative systems in conquered territories served to ensure that",
          "correct": "tribute was collected, Aztec authority was maintained, and rebellion was prevented or quickly suppressed.",
            "wrong": ["no real administration.", "purely military occupation.", "no governance."] },
          { start: "The Aztec legal system, which maintained different laws and courts for different classes (nobility, commoners, slaves), reflected that",
          "correct": "the society was hierarchical and that the law reinforced social stratification and Aztec dominance.",
            "wrong": ["equal justice for all.", "no real system.", "arbitrary punishment."] },
          { start: "The organization of Aztec society into calpulli (neighborhood/clan groups) served administrative, military, and social purposes, providing that",
          "correct": "the emperor could organize the population for labor, military service, and tax collection through these intermediate units.",
            "wrong": ["purely social organizations.", "no administrative function.", "no real purpose."] },
          { start: "The imperial court at Tenochtitlan served not only as the seat of government but also as a center of wealth accumulation, cultural production, and religious authority, demonstrating that",
          "correct": "concentrated power allowed the emperor to shape society and present himself as the center of the cosmos.",
            "wrong": ["purely ceremonial.", "no real power.", "no practical function."] }
        ]
      },
      {
        name: "Aztec Culture & Intellectual Life",
        emoji: "📚",
        quotes: [
          { start: "The Aztec development of a writing system using pictograms and logograms allowed for the recording of historical events, religious knowledge, astronomical observations, and administrative information, demonstrating that",
          "correct": "writing served practical governmental and cultural purposes.",
            "wrong": ["purely decorative.", "no real function.", "no practical value."] },
          { start: "Aztec scholars and priests possessed sophisticated knowledge of mathematics, astronomy, and the calendar, creating calendar systems of remarkable accuracy and maintaining long-term historical records, showing that",
          "correct": "the Aztecs valued and systematically pursued knowledge.",
            "wrong": ["no real learning.", "purely religious.", "no real science."] },
          { start: "The Aztec appreciation for poetry, rhetoric, and oratory, with educated nobles trained in elegant speech and the composition of poems, reflected that",
          "correct": "intellectual and cultural achievement was valued alongside military prowess.",
            "wrong": ["purely military culture.", "no intellectual value.", "no real learning."] },
          { start: "The preservation of knowledge through oral tradition, with educated priests and nobles memorizing vast amounts of information including histories, rituals, and genealogies, served to transmit knowledge across generations, demonstrating that",
          "correct": "written and oral traditions could work together to preserve and transmit knowledge.",
            "wrong": ["no real preservation.", "purely unreliable.", "no real knowledge."] },
          { start: "The Aztec engagement with the arts—sculpture, painting, featherwork, and architecture—created a distinctive aesthetic that reflected their cosmology and values, showing that",
          "correct": "cultural and artistic achievement was integrated into religious and political life.",
            "wrong": ["purely decorative.", "no real meaning.", "no political function."] }
        ]
      },
      {
        name: "Aztec Social Structure & Hierarchy",
        emoji: "🏛️",
        quotes: [
          { start: "Aztec society was organized into distinct classes: the royal family and nobility (pipiltin), commoners (macehualtin), and slaves (tlacotin), with the emperor at the apex, because this hierarchy allowed for",
          "correct": "the concentration of wealth, power, and privilege in elite hands while maintaining order among the larger population.",
            "wrong": ["purely egalitarian.", "no real structure.", "random organization."] },
          { start: "The role of women in Aztec society included participation in commerce, religious practice, and household management, with elite women holding significant status and influence, though overall political power remained male-dominated, showing that",
          "correct": "women had important roles despite male political dominance.",
            "wrong": ["complete subjugation.", "no authority.", "purely domestic roles."] },
          { start: "The system of slavery in Aztec society differed from European slavery in that enslaved persons could achieve freedom in certain circumstances, including the purchase of their freedom or service for a specific time, indicating that",
          "correct": "the Aztec system, while still exploitative, had different mechanisms than later European slavery.",
            "wrong": ["purely chattel slavery.", "no possibility of freedom.", "identical to later slavery."] },
          { start: "The nobility maintained their status through control of land, access to tribute, and the performance of important administrative and religious roles, creating that",
          "correct": "elite status was reinforced through multiple mechanisms beyond birth alone.",
            "wrong": ["purely inherited.", "no real function.", "no real benefit."] },
          { start: "The existence of a merchant class (pochteca) that held higher status than ordinary commoners but remained beneath the nobility reflected that",
          "correct": "the Aztec society recognized the importance of commerce and trade while maintaining overall class hierarchy.",
            "wrong": ["equal status with nobility.", "purely commoner class.", "no real distinction."] }
        ]
      },
      {
        name: "Aztec Decline & Spanish Conquest",
        emoji: "📜",
        quotes: [
          { start: "The Spanish conquest of the Aztec Empire, achieved in 1521 after the siege of Tenochtitlan, resulted from multiple factors: Spanish military advantages (horses, steel, firearms, organization), disease, but also the fact that",
          "correct": "subject peoples and tributaries of the Aztec were willing to ally with the Spanish against Aztec rule.",
            "wrong": ["purely Spanish military superiority.", "disease alone.", "no internal opposition."] },
          { start: "The rapid collapse of Aztec political authority after military defeat demonstrated that the empire had been held together by the fear of Aztec military power and the belief in its invincibility, which the Spanish conquest shattered by",
          "correct": "demonstrating that the Aztecs could be defeated and by offering subject peoples an alternative to Aztec domination.",
            "wrong": ["purely military defeat.", "no real system.", "purely external conquest."] },
          { start: "The death of Montezuma II and the subsequent leadership struggles within the Aztec military and political establishment weakened the empire's capacity to mount a unified response to the Spanish, showing that",
          "correct": "political disruption at the center of power could undermine even a militarily strong state.",
            "wrong": ["purely military weakness.", "no real leadership.", "inevitable defeat."] },
          { start: "The final siege of Tenochtitlan, conducted by Spanish forces and indigenous allies over a period of months, resulted in the destruction of the city and the elimination of Aztec political power, demonstrating that",
          "correct": "even sophisticated, densely populated urban centers could be besieged and conquered with sufficient force and persistence.",
            "wrong": ["impregnable city.", "no real siege.", "inevitable Aztec victory."] },
          { start: "The legacy of the Aztec Empire included sophisticated urban planning, mathematical and astronomical knowledge, artistic achievement, and an administrative system that the Spanish would adapt for colonial rule, showing that",
          "correct": "cultural and intellectual achievements could survive political conquest.",
            "wrong": ["no real legacy.", "purely destroyed.", "no real achievement."] }
        ]
      },
      {
        name: "Aztec Writing & Record-Keeping",
        emoji: "📜",
        quotes: [
          { start: "The Aztec development of a writing system using pictographic and logographic elements allowed for the creation of codices (bark-paper books) that recorded historical events, religious knowledge, and administrative information, demonstrating that",
          "correct": "writing was essential to maintaining records and transmitting knowledge in a complex empire.",
            "wrong": ["purely decorative.", "no real function.", "no practical value."] },
          { start: "The codices that survived Spanish conquest—including the Florentine Codex, created after the conquest—provide invaluable information about Aztec society, though they must be interpreted carefully because they were created by or under Spanish influence, showing that",
          "correct": "the sources for understanding Aztec civilization are fragmentary and influenced by colonial perspectives.",
            "wrong": ["purely Aztec perspective.", "completely objective.", "no Spanish influence."] },
          { start: "The Spanish destruction of Aztec codices, viewed as heretical or irrelevant, resulted in the loss of vast amounts of knowledge about Aztec history, religion, and culture, demonstrating that",
          "correct": "colonial conquest led to the destruction of indigenous knowledge systems and cultural records.",
            "wrong": ["no real loss.", "alternative sources survived.", "purely replaceable."] }
        ]
      },
      {
        name: "Aztec Warfare & Conquest Methods",
        emoji: "⚔️",
        quotes: [
          { start: "The Aztec system of warfare, which emphasized the capture of enemies for sacrifice rather than the complete annihilation of enemy forces, served religious purposes but also created rivals who harbored resentment and could ally with invaders, showing that",
          "correct": "the religious requirement for captives shaped military strategy in ways that affected long-term political stability.",
            "wrong": ["purely religious.", "no strategic impact.", "no real consequence."] },
          { start: "The Aztec establishment of tributary relationships with conquered territories, rather than complete assimilation, allowed conquered peoples to maintain local authority while paying tribute, which provided stability but also meant that",
          "correct": "conquered peoples retained their own power structures and could switch allegiance if they perceived Aztec power weakening.",
            "wrong": ["complete assimilation.", "permanent loyalty.", "no alternative." ] },
          { start: "The Aztec use of 'flower wars' with neighboring city-states served to maintain military readiness and obtain captives for sacrifice, but the ritualized nature of this warfare meant that",
          "correct": "the combatants sometimes had prior arrangements and the wars did not represent total warfare aimed at complete conquest.",
            "wrong": ["purely destructive.", "no real purpose.", "total warfare."] }
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
        name: "Hannibal Barca (Military Genius & Historical Records)",
        emoji: "🐘",
        quotes: [
          { start: "I defeated the Roman legions at Cannae by understanding that",
          "correct": "the center could be weakened while stronger forces enveloped the enemy from the sides.",
            "wrong": ["frontal assault alone.", "no real strategy.", "pure numbers."] },
          { start: "The crossing of the Alps with elephants and a large army demonstrated that",
          "correct": "careful planning, knowledge of terrain, and determination could overcome seemingly impossible obstacles.",
            "wrong": ["pure military force.", "reckless adventure.", "no real achievement."] },
          { start: "My campaigns in Italy, despite initial victories, ultimately failed because Rome could",
          "correct": "replace its losses, maintain control of its homeland, and eventually bring overwhelming force against Carthage.",
            "wrong": ["Rome was weak.", "infinite victories were possible.", "no strategic limitation."] },
          { start: "The use of Carthaginian and allied forces—Libyans, Numidians, Spanish mercenaries—showed that I understood that",
          "correct": "diverse unit types, each with different strengths, could be coordinated into a powerful force.",
            "wrong": ["homogeneous armies were best.", "no real coordination.", "pure numbers mattered."] },
          { start: "My inability to completely destroy Rome despite years of campaigning demonstrated that",
          "correct": "military genius, while powerful, could not overcome Rome's larger population, resources, and the strategic advantage of fighting on home territory.",
            "wrong": ["I was weak militarily.", "Rome was naturally superior.", "no real achievement."] },
          { start: "The political conflicts between myself and the Carthaginian government showed that even a great military leader could be undermined by",
          "correct": "political rivalries at home and insufficient support from the civilian government.",
            "wrong": ["government was always supportive.", "no real conflict.", "purely military matters."] }
        ]
      },
      {
        name: "Carthaginian Generals & Military Strategy",
        emoji: "⚔️",
        quotes: [
          { start: "The Carthaginian military, built on mercenaries and allied forces rather than a citizen army, required that commanders",
          "correct": "understand how to motivate diverse troops, manage pay and logistics, and maintain discipline among forces with different backgrounds.",
            "wrong": ["no real challenge.", "mercenaries were unreliable.", "no coordination possible."] },
          { start: "The use of war elephants by Carthaginian commanders served purposes including psychological intimidation, breaking enemy formations, and",
          "correct": "providing a platform for archers and a visible symbol of Carthaginian military power.",
            "wrong": ["purely ceremonial.", "ineffective in battle.", "only for show."] },
          { start: "Carthaginian naval dominance in the Mediterranean, established through superior seamanship and fleet organization, allowed the empire to",
          "correct": "control trade routes, transport armies, and prevent enemies from conducting operations at sea.",
            "wrong": ["no real advantage.", "land power was sufficient.", "purely commerce."] },
          { start: "The Carthaginian strategy of bringing conflict to Rome's territory rather than defending Carthage showed that commanders understood that",
          "correct": "fighting on enemy territory could disrupt their resources, force them to defend their homeland, and demonstrate Carthaginian power.",
            "wrong": ["defensive strategy was better.", "no real advantage.", "reckless approach."] },
          { start: "The defeats suffered by Carthaginian forces against Rome demonstrated that despite military skill and innovation,",
          "correct": "Rome's larger population, greater resources, and the ability to replace losses eventually overcame Carthaginian forces.",
            "wrong": ["Carthage was militarily inferior.", "no real achievement.", "inevitable defeat."] }
        ]
      },
      {
        name: "Carthaginian Trade & Economic Power",
        emoji: "💰",
        quotes: [
          { start: "Carthaginian wealth came from control of Mediterranean trade routes connecting North Africa, the Levant, Egypt, and the western Mediterranean, allowing the city to",
          "correct": "tax merchants, control access to valuable goods, and accumulate wealth from commerce.",
            "wrong": ["purely military conquest.", "no economic foundation.", "agriculture alone."] },
          { start: "The Carthaginian establishment of trading colonies and settlements across the Mediterranean served to",
          "correct": "extend Carthaginian commercial reach, establish supply depots for naval operations, and secure valuable resources.",
            "wrong": ["purely military bases.", "no commercial purpose.", "random expansion."] },
          { start: "The wealth accumulated through trade allowed Carthage to finance large military forces, build a powerful navy, and maintain influence, demonstrating that",
          "correct": "economic power and military power were closely connected.",
            "wrong": ["trade was unimportant.", "military power was independent.", "no real relationship."] },
          { start: "Carthaginian merchants and traders conducted business across the Mediterranean, building networks that connected diverse regions and cultures, showing that",
          "correct": "commerce created relationships and dependencies that transcended purely military considerations.",
            "wrong": ["trade was purely local.", "no external networks.", "isolated commerce."] },
          { start: "The Carthaginian control of tin routes from the Atlantic and amber routes from the Baltic gave the city access to valuable goods that could be traded for profit, demonstrating",
          "correct": "that control of long-distance trade networks was essential to Carthaginian prosperity.",
            "wrong": ["local trade alone.", "no external value.", "no real benefit."] }
        ]
      },
      {
        name: "Carthaginian Government & Administration",
        emoji: "⚖️",
        quotes: [
          { start: "Carthaginian government, dominated by wealthy merchant families and the Carthaginian senate, required that power be shared among the aristocracy, which sometimes led to",
          "correct": "conflicts between different factions and inconsistent support for military campaigns.",
            "wrong": ["purely centralized rule.", "no real conflict.", "absolute monarchy."] },
          { start: "The reliance on mercenary forces rather than a citizen army gave Carthage military flexibility but also created vulnerabilities because",
          "correct": "mercenaries required constant payment and could be unreliable if pay was delayed or promises were broken.",
            "wrong": ["mercenaries were completely loyal.", "no real challenge.", "always effective."] },
          { start: "The political struggles between military generals (like Hannibal's family) and the Carthaginian senate demonstrated that",
          "correct": "even successful military leaders could face opposition at home from politicians who feared their power or pursued different strategies.",
            "wrong": ["government always supported generals.", "no political conflict.", "military rule was absolute."] },
          { start: "The Carthaginian system of government, which distributed power among wealthy families, meant that decisions sometimes",
          "correct": "reflected factional interests rather than unified national strategy, which weakened the state's ability to respond to threats.",
            "wrong": ["unanimous decisions always.", "no conflict existed.", "purely military decisions."] },
          { start: "The management of Carthaginian territories in North Africa, Spain, and the Mediterranean required establishing systems to collect tribute and maintain control, but the decentralized political structure sometimes",
          "correct": "made it difficult to implement consistent policies across all territories.",
            "wrong": ["purely centralized administration.", "no real difficulty.", "uniform policies always."] }
        ]
      },
      {
        name: "Carthaginian Religion & Culture",
        emoji: "🕯️",
        quotes: [
          { start: "Carthaginian religious practices, including sacrifice and the veneration of gods like Baal Hammon and Tanit, served to reinforce community cohesion and provided divine legitimacy for",
          "correct": "rulers' decisions and military campaigns.",
            "wrong": ["purely spiritual.", "no political function.", "no real beliefs."] },
          { start: "The role of religious festivals and public ceremonies in Carthaginian life served to gather the people, reinforce social bonds, and demonstrate the wealth and power of the city, showing that",
          "correct": "religion had both spiritual and social/political functions.",
            "wrong": ["purely ceremonial.", "no real importance.", "purely entertainment."] },
          { start: "Carthaginian art, characterized by Phoenician and Hellenistic influences, reflected that the city was exposed to diverse cultural traditions and could synthesize foreign elements while maintaining its identity, demonstrating",
          "correct": "that cultural sophistication did not require cultural isolation.",
            "wrong": ["purely derivative.", "no originality.", "purely Phoenician."] },
          { start: "The Carthaginian adoption of Greek cultural elements—literature, philosophy, art—alongside Phoenician traditions shows that",
          "correct": "contact with other civilizations allowed for cultural exchange and enrichment.",
            "wrong": ["purely isolated.", "no real exchange.", "cultural purity was maintained."] }
        ]
      },
      {
        name: "Carthaginian Naval Dominance & Maritime Power",
        emoji: "⛵",
        quotes: [
          { start: "Carthaginian naval superiority in the Mediterranean, built on centuries of maritime tradition and advanced shipbuilding, gave the city the ability to",
          "correct": "control sea lanes, transport commerce safely, and project power across the Mediterranean.",
            "wrong": ["no real advantage.", "land forces were sufficient.", "purely ceremonial."] },
          { start: "The construction of harbors, shipyards, and naval bases at Carthage and other cities served to support the large navy that was essential to Carthaginian power, demonstrating that",
          "correct": "naval dominance required infrastructure investment and the continuous building and maintenance of ships.",
            "wrong": ["no real infrastructure needed.", "purely military.", "no commercial benefit."] },
          { start: "The use of naval forces to transport armies, protect merchants, and conduct amphibious operations showed that Carthaginian commanders understood that",
          "correct": "controlling the sea allowed for military flexibility and strategic advantages over land-based competitors.",
            "wrong": ["purely transport.", "no military advantage.", "land power was more important."] },
          { start: "The Carthaginian loss of naval dominance to Rome in the Punic Wars demonstrated that even superior seamanship could be overcome when an enemy developed comparable naval capabilities and had greater resources, showing that",
          "correct": "technological superiority and experience could be countered by determination, resources, and organizational capacity.",
            "wrong": ["Carthage was weak militarily.", "Rome was naturally superior.", "inevitable defeat."] },
          { start: "The exploration and trade voyages conducted by Carthaginian sailors and explorers, including Hanno's famous voyage to West Africa, demonstrated that Carthage was a society of",
          "correct": "seafarers who valued knowledge, resources, and commercial opportunity beyond the Mediterranean.",
            "wrong": ["purely local sailors.", "no exploration.", "isolated from the broader world."] }
        ]
      },
      {
        name: "Carthage vs. Rome: Strategic Conflict",
        emoji: "⚔️",
        quotes: [
          { start: "The Punic Wars between Carthage and Rome showed that the two powers competed for dominance in the Mediterranean, with fundamental differences in strategy: Carthage relied on naval power and economic strength while Rome relied on",
          "correct": "military conquest, a citizen army, and the integration of conquered territories.",
            "wrong": ["identical strategies.", "no real difference.", "purely military."] },
          { start: "The ultimate Roman victory over Carthage demonstrated that while Carthage had advantages in naval power and wealth, Rome's advantages included",
          "correct": "a larger population that could replace military losses, a land-based military tradition, and the ability to unite Italian allies.",
            "wrong": ["military superiority alone.", "no strategic advantage.", "inevitable Carthaginian victory."] },
          { start: "The destruction of Carthage after the Third Punic War showed the brutal logic of ancient warfare, where complete defeat could mean the physical destruction of a city, though this also demonstrated that",
          "correct": "Rome viewed Carthage as a fundamental threat that could not be allowed to recover.",
            "wrong": ["senseless destruction.", "Rome was naturally cruel.", "no real threat."] },
          { start: "The strategic brilliance of Hannibal's campaigns contrasted with the political-strategic vision of Rome's leadership, which understood that winning required not only defeating Carthaginian armies but also ensuring that",
          "correct": "Rome could deny Carthage the resources and alliances necessary to continue the conflict.",
            "wrong": ["military victory alone.", "no real strategy.", "politics did not matter."] }
        ]
      },
      {
        name: "Carthaginian Society & Social Structure",
        emoji: "🏛️",
        quotes: [
          { start: "Carthaginian society was dominated by wealthy merchant families who held political and military power, creating a system where economic elite also held political authority, which sometimes led to",
          "correct": "policies that favored merchant interests and sometimes conflicted with military or popular interests.",
            "wrong": ["purely democratic.", "equal power for all.", "no real hierarchy."] },
          { start: "The reliance on mercenary forces in Carthage meant that power was distributed to generals and commanders who could pay and lead these troops, creating relationships where military leaders held significant influence, as demonstrated by",
          "correct": "Hannibal's family's power in Spain and their ability to challenge the Carthaginian senate.",
            "wrong": ["no military influence.", "purely civilian government.", "no real power."] },
          { start: "Women in Carthaginian society, particularly those of elite status, held more freedom and economic rights than in some contemporary societies, able to own property and participate in religious life, showing that",
          "correct": "Phoenician tradition allowed for female economic participation.",
            "wrong": ["complete subjugation.", "no rights.", "purely dependent."] },
          { start: "The enslaved populations in Carthage, obtained through trade and conquest, provided labor for agriculture, manufacturing, and the military, demonstrating that",
          "correct": "Carthaginian prosperity was built partly on enslaved labor.",
            "wrong": ["no slavery existed.", "purely voluntary labor.", "no real slaves."] }
        ]
      },
      {
        name: "Carthaginian Decline & Fall",
        emoji: "📜",
        quotes: [
          { start: "The decline of Carthage came from multiple factors: military defeats by Rome, the loss of naval dominance, the destruction of Carthaginian commerce during the wars, and",
          "correct": "the political divisions within Carthage that prevented unified response to existential threats.",
            "wrong": ["single cause.", "purely military defeat.", "inevitable collapse."] },
          { start: "The final destruction of Carthage in 146 BCE after the Third Punic War demonstrated that Rome was willing to completely destroy a rival to eliminate any possibility of future threat, and also showed that",
          "correct": "Carthage, despite its wealth and history, could not overcome Rome's greater resources and determination.",
            "wrong": ["Carthage was weak.", "Rome was naturally superior.", "no real competition."] },
          { start: "The rapid redevelopment of Carthage as a Roman city centuries later shows that the site itself remained valuable, though the Carthaginian civilization and power had been completely destroyed, demonstrating that",
          "correct": "geographical advantage and economic potential could outlast political entities.",
            "wrong": ["purely abandoned.", "no real value.", "irredeemable."] },
          { start: "The legacy of Carthage included its development of maritime power, extensive trade networks, military innovation (like the use of war elephants), and cultural influence, but ultimately the city is remembered as the great rival of Rome that failed to achieve permanent dominance, showing that",
          "correct": "even sophisticated, wealthy civilizations can face defeat and extinction when facing determined, resource-rich rivals.",
            "wrong": ["no real legacy.", "purely military achievement.", "no cultural influence."] },
          { start: "The study of Carthage demonstrates that the ancient Mediterranean world was not predetermined to be Roman, but rather Rome had to fight for dominance against a worthy competitor, and the outcome could have been different if",
          "correct": "Carthage had been able to maintain greater unity, political support for military campaigns, or if Hannibal had received the resources he needed.",
            "wrong": ["Rome was inevitable.", "Carthage was weak.", "no real competition."] }
        ]
      },
      {
        name: "Carthaginian Commerce & Merchants",
        emoji: "💰",
        quotes: [
          { start: "Carthaginian merchants conducted trade across vast distances, from the Atlantic to the Indian Ocean, through their own networks and through intermediaries, establishing that Carthage was",
          "correct": "a major node in global trade networks connecting diverse regions and peoples.",
            "wrong": ["purely local trade.", "no external networks.", "isolated commerce."] },
          { start: "The wealth accumulated by Carthaginian merchants allowed them to influence political decisions and fund military campaigns, demonstrating that",
          "correct": "economic power translated directly to political influence.",
            "wrong": ["merchants had no power.", "purely economic.", "no political role."] },
          { start: "The Carthaginian establishment of trading posts and colonies served multiple purposes: securing supplies, controlling trade routes, establishing forward bases for naval operations, and",
          "correct": "extending Carthaginian cultural and economic influence.",
            "wrong": ["purely military bases.", "no commercial purpose.", "random expansion."] },
          { start: "The reliance on merchants for revenue through customs duties and trade taxes meant that Carthaginian rulers understood that",
          "correct": "facilitating commerce and protecting merchants was essential to state revenue.",
            "wrong": ["merchants were exploited.", "no real value.", "no strategic importance."] }
        ]
      },
      {
        name: "Carthaginian Influence & Cultural Legacy",
        emoji: "🌍",
        quotes: [
          { start: "The Carthaginian influence on the Mediterranean, through trade, colonization, and cultural exchange, shaped the region even after Carthage's destruction, showing that",
          "correct": "cultural and economic influence could outlast political power.",
            "wrong": ["no real influence.", "purely military.", "completely destroyed."] },
          { start: "The Carthaginian adoption and adaptation of Phoenician traditions, combined with Greek and local influences, created a distinctive culture that reflected the city's position as a commercial and military power, demonstrating",
          "correct": "that cultural sophistication resulted from contact and exchange rather than isolation.",
            "wrong": ["purely derivative.", "no originality.", "cultural stagnation."] },
          { start: "The Carthaginian military innovations—tactics, weapons, organization—influenced later military thinking, showing that even defeated powers could contribute to human knowledge and practice, demonstrating that",
          "correct": "intellectual and technological achievements survived military and political collapse.",
            "wrong": ["no real innovation.", "purely lost.", "no influence."] },
          { start: "The memory of Carthage and especially of Hannibal persisted in later historical and cultural traditions, with the Carthaginian general remembered as one of history's greatest military strategists, showing that",
          "correct": "individual achievement and greatness could transcend the destruction of the state that produced them.",
            "wrong": ["completely forgotten.", "no real legacy.", "purely military."] }
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
          { start: "I overthrew the Parthian Arsacid dynasty by recognizing that their feudal system of powerful nobles had weakened central authority and that",
          "correct": "a more centralized, efficient administrative system could overcome decentralized rival powers.",
            "wrong": ["pure military conquest.", "inevitable succession.", "no real strategy."] },
          { start: "The establishment of the Sassanid dynasty required demonstrating that the new system could provide better governance than the old, including",
          "correct": "a more efficient taxation system, a professional bureaucracy, and the ability to defend the realm.",
            "wrong": ["purely military rule.", "no real improvement.", "arbitrary change."] },
          { start: "My adoption of Zoroastrianism as the state religion served to unite the diverse peoples under my rule because it provided",
          "correct": "a shared spiritual framework, gave legitimacy to my rule through religious authority, and created a sense of common identity.",
            "wrong": ["purely religious preference.", "no political benefit.", "no real unity."] },
          { start: "The organization of the empire into provinces with appointed governors and a professional bureaucracy showed that I understood that",
          "correct": "an empire of such size and diversity required a centralized administrative system more efficient than feudal relationships.",
            "wrong": ["purely military organization.", "no real innovation.", "simple copy of predecessors."] },
          { start: "The establishment of a professional army, distinct from the feudal levies of the Parthian system, was necessary because the king needed forces that",
          "correct": "could be mobilized quickly, coordinated centrally, and were loyal to the king rather than to individual nobles.",
            "wrong": ["feudal armies were sufficient.", "no real difference.", "purely ceremonial."] }
        ]
      },
      {
        name: "Shapur I (Military Triumph & Territorial Expansion)",
        emoji: "⚔️",
        quotes: [
          { start: "My defeat of the Roman Emperor Valerian demonstrated that Sassanid military power could stand against Rome and that",
          "correct": "Sassanid forces, despite Rome's reputation, were capable of defeating Roman armies through superior tactics and coordination.",
            "wrong": ["Rome was naturally superior.", "lucky victory.", "no real significance."] },
          { start: "The capture of the Roman Emperor and the procession celebrating the victory served to demonstrate that",
          "correct": "Sassanid power was real, that the king was a great warrior, and that Rome, despite its power, could be defeated.",
            "wrong": ["purely ceremonial.", "no real victory.", "propaganda only."] },
          { start: "My campaigns extended Sassanid territory and brought wealth through conquest, but I also understood that maintaining these territories required",
          "correct": "establishing administrative control, collecting taxes, and preventing rivals from using the conquered lands as bases against Sassanid power.",
            "wrong": ["purely military conquest.", "no follow-up needed.", "permanent occupation alone."] },
          { start: "The relationship between Sassanid and Roman power showed that the two great empires of the age could recognize each other's strength and establish",
          "correct": "a pattern of conflict and negotiation where neither could completely conquer the other.",
            "wrong": ["perpetual war was inevitable.", "one must dominate completely.", "no real balance."] },
          { start: "My military campaigns against the eastern rivals and the expansion toward India demonstrated that",
          "correct": "a Sassanid king could project power across vast distances and establish dominance over a region stretching from the Mediterranean to India.",
            "wrong": ["purely western focus.", "no real eastern power.", "limited range."] }
        ]
      },
      {
        name: "Khosrow I Anushirvan (The Just - Golden Age)",
        emoji: "👑",
        quotes: [
          { start: "I am remembered as 'Anushirvan' (of immortal soul) because my reign was characterized by establishing a system of justice that",
          "correct": "benefited the people, created stable governance, and made Sassanid rule appear fair and orderly.",
            "wrong": ["purely military success.", "arbitrary rule.", "no real reforms."] },
          { start: "My administrative reforms, including the establishment of a professional tax system and a centralized bureaucracy, served to",
          "correct": "ensure consistent revenue collection, reduce corruption, and make the empire more efficient and stable.",
            "wrong": ["purely oppressive taxation.", "no real benefit.", "harmed the people."] },
          { start: "The establishment of the Peace of 50 Years with the Byzantine Empire through negotiation and treaty showed that even powerful rulers could recognize that",
          "correct": "endless warfare was costly and that sometimes diplomacy and mutual recognition of strength served both empires better than conflict.",
            "wrong": ["weakness was shown.", "surrender to Rome.", "no real benefit."] },
          { start: "My patronage of scholars, physicians, and the preservation of knowledge through the establishment of Jundishapur Academy demonstrated that I believed",
          "correct": "an empire's greatness lay not only in military power but in cultural achievement, learning, and the advancement of knowledge.",
            "wrong": ["purely military concerns.", "learning was irrelevant.", "no real investment."] },
          { start: "My military campaigns against the White Huns, who threatened from Central Asia, showed that even during a period of relative peace with Rome, the Sassanid king needed to",
          "correct": "remain vigilant against external threats and be prepared to conduct military campaigns to protect the empire.",
            "wrong": ["continuous warfare.", "no real threats.", "military campaigns were unnecessary."] },
          { start: "The reputation for justice and good governance that characterized my reign created stability and loyalty because the people understood that",
          "correct": "a king who governed fairly and maintained order provided benefits that outweighed the taxes they paid.",
            "wrong": ["purely propaganda.", "no real benefit to people.", "purely military."] },
          { start: "My continuation and improvement of the Sassanid road and communication systems served to facilitate trade, ensure rapid communication across the empire, and",
          "correct": "allow the king to maintain control over distant provinces and respond quickly to threats.",
            "wrong": ["purely for merchants.", "no real strategic value.", "ceremonial purposes."] }
        ]
      },
      {
        name: "Sassanid Zoroastrian State & Ideology",
        emoji: "🕯️",
        quotes: [
          { start: "The establishment of Zoroastrianism as the state religion served to create a shared ideology across the diverse peoples of the empire because it provided",
          "correct": "a philosophical framework (good vs. evil, order vs. chaos) that justified Sassanid rule and created common values.",
            "wrong": ["purely religious imposition.", "no political purpose.", "no real unification."] },
          { start: "The role of the Zoroastrian priesthood (Magi) in Sassanid governance meant that religious and political authority were intertwined, allowing the king to",
          "correct": "draw on religious legitimacy for his authority while the priesthood benefited from royal patronage and influence.",
            "wrong": ["purely religious control.", "no political value.", "priesthood ruled."] },
          { start: "The concept of Ahura Mazda (Wise Lord) as the supreme god, who favored justice and order, provided a religious justification for Sassanid rule that",
          "correct": "framed the king as an instrument of divine will and presented Sassanid authority as reflecting cosmic order.",
            "wrong": ["purely mythological.", "no real belief.", "no political use."] },
          { start: "The Sassanid religious intolerance toward religions other than Zoroastrianism—persecuting Christians, Jews, and other minorities—served the purposes of enforcing ideological unity and",
          "correct": "sometimes maintaining political control by preventing rival religions from creating alternative sources of loyalty.",
            "wrong": ["purely religious fanaticism.", "no political benefit.", "no real purpose."] },
          { start: "The fire temples that were centers of religious practice also served as administrative and social centers where rulers could present themselves as guardians of the faith and",
          "correct": "where communities gathered for religious and civic purposes.",
            "wrong": ["purely religious structures.", "no administrative function.", "no real purpose."] }
        ]
      },
      {
        name: "Sassanid Military Organization & Strategy",
        emoji: "⚔️",
        quotes: [
          { start: "The Sassanid military, organized into cavalry units (the famous Cataphracts—heavily armored mounted warriors), infantry, and support forces, achieved dominance because",
          "correct": "this organization allowed for flexibility, the ability to conduct cavalry charges against weakened enemies, and the support of heavy cavalry with infantry.",
            "wrong": ["cavalry alone was sufficient.", "no real strategy.", "pure numbers."] },
          { start: "The development of Cataphract cavalry—heavily armored mounted warriors—gave Sassanid forces a significant advantage against enemies because they could",
          "correct": "break through enemy formations, resist damage from arrows and light weapons, and project force at high speed.",
            "wrong": ["light cavalry was superior.", "no real advantage.", "purely intimidating."] },
          { start: "Sassanid military campaigns against Rome required that commanders understand that Roman legions, despite their reputation, could be defeated through tactics that exploited their weaknesses, such as",
          "correct": "using superior cavalry mobility, attacking vulnerable flanks, and wearing down forces through harassment.",
            "wrong": ["frontal assaults only.", "no real tactics.", "Rome was invincible."] },
          { start: "The maintenance of permanent garrisons along the frontier with Rome served to",
          "correct": "defend against attack, monitor Roman movements, and establish a forward defense that could slow an invasion.",
            "wrong": ["purely aggressive positions.", "defensive weakness.", "no real purpose."] },
          { start: "The logistics required to supply large Sassanid armies across vast distances required that the empire establish",
          "correct": "supply lines, depots, the ability to requisition resources from provinces, and efficient administrative systems.",
            "wrong": ["no real complexity.", "armies fed themselves.", "purely military organization."] },
          { start: "The Sassanid use of naval forces on the Persian Gulf and in coastal regions served to",
          "correct": "protect trade routes, defend against amphibious assault, and project power across water.",
            "wrong": ["no real naval power.", "land forces alone.", "no real purpose."] }
        ]
      },
      {
        name: "Sassanid Administration & Governance",
        emoji: "⚖️",
        quotes: [
          { start: "The Sassanid system of governance required the establishment of a professional bureaucracy with appointed officials because the king could not personally oversee all",
          "correct": "provinces, collect taxes, administer justice, and coordinate military affairs across the empire.",
            "wrong": ["purely centralized rule.", "no real delegation.", "no efficiency."] },
          { start: "The Sassanid approach to taxation required establishing consistent rates and systems that could extract revenue without driving subject peoples to rebellion, showing that",
          "correct": "rulers understood the balance between extracting sufficient resources and maintaining stability and productivity.",
            "wrong": ["maximum extraction only.", "arbitrary taxation.", "no real system."] },
          { start: "The appointment of local administrators and the establishment of provincial capitals allowed rulers to maintain control over distant territories while allowing some local autonomy, demonstrating",
          "correct": "that centralization could coexist with recognition of local conditions and the need for responsive administration.",
            "wrong": ["pure oppression.", "no local autonomy.", "purely military occupation."] },
          { start: "The legal codes and systems of justice established in the Sassanid Empire served to create the perception that",
          "correct": "Sassanid rule was orderly, predictable, and fair, which helped maintain loyalty and legitimacy.",
            "wrong": ["arbitrary punishment.", "purely oppressive.", "no real system."] },
          { start: "The integration of conquered territories into the Sassanid system required respecting local traditions where possible while establishing Sassanid administrative control, showing that",
          "correct": "effective governance meant balancing imposition of central authority with respect for local practices.",
            "wrong": ["complete cultural erasure.", "no respect for locals.", "purely military occupation."] }
        ]
      },
      {
        name: "Sassanid Trade & Economic Power",
        emoji: "💰",
        quotes: [
          { start: "Sassanid prosperity came from the control of trade routes connecting the Mediterranean, Central Asia, India, and the Far East, which allowed rulers to",
          "correct": "tax merchants, control access to valuable goods, and establish relationships with distant powers.",
            "wrong": ["purely military conquest.", "no economic foundation.", "agriculture alone."] },
          { start: "The cities of Ctesiphon, Seleucia, and other Sassanid centers flourished as trade hubs because rulers invested in infrastructure, security, and administration that made trade safe and profitable, demonstrating",
          "correct": "that merchants would concentrate in cities where they could conduct business securely.",
            "wrong": ["no real commerce.", "purely military bases.", "no real wealth."] },
          { start: "The Sassanid minting of high-quality drachmas (coins) served to facilitate long-distance trade and demonstrated that",
          "correct": "Sassanid currency was trusted across regions and that the empire was recognized as a major economic power.",
            "wrong": ["no real value.", "purely decorative.", "no practical purpose."] },
          { start: "The wealth from trade allowed Sassanid rulers to finance military campaigns, conduct building projects, support the court and administration, and distribute gifts, showing that",
          "correct": "economic power and military power were interconnected—trade wealth could fund military dominance.",
            "wrong": ["purely military concerns.", "no real benefit from trade.", "independent systems."] },
          { start: "The establishment of roads, caravanserais (roadside inns), and security measures to protect merchants served the dual purpose of facilitating trade (and collecting taxes) while also",
          "correct": "maintaining control over territories and preventing bandits and rivals from using trade routes.",
            "wrong": ["purely commercial.", "no strategic value.", "no military purpose."] }
        ]
      },
      {
        name: "Sassanid Culture & Intellectual Achievement",
        emoji: "📚",
        quotes: [
          { start: "The Sassanid patronage of scholarship, medicine, and astronomy through institutions like Jundishapur Academy served to demonstrate that",
          "correct": "the empire valued knowledge and that Sassanid civilization was sophisticated and could rival Byzantine and other cultures intellectually.",
            "wrong": ["purely altruistic.", "no political benefit.", "unnecessary expense."] },
          { start: "The preservation of Zoroastrian religious texts and the composition of literary works under Sassanid rule created a cultural legacy that would influence Islamic civilization and beyond, showing",
          "correct": "that intellectual and cultural achievements could survive political and military changes.",
            "wrong": ["no real legacy.", "purely destroyed.", "no influence."] },
          { start: "Sassanid art and architecture, which synthesized Persian, Greek, and other influences, reflected that the empire could absorb foreign influences while maintaining its own identity, demonstrating",
          "correct": "that cultural sophistication did not require cultural isolation.",
            "wrong": ["purely derivative.", "no originality.", "purely Persian."] },
          { start: "The development of a distinctive Sassanid literary tradition, including the Pahlavi language texts and historical records, served to",
          "correct": "preserve knowledge, record historical events, and create a sense of cultural continuity and identity.",
            "wrong": ["no real literature.", "purely religious texts.", "no real achievement."] },
          { start: "Sassanid scholars' engagement with Greek learning, Indian mathematics, and Chinese knowledge through trade and contact demonstrated that",
          "correct": "the empire was open to external influences and could learn from other civilizations while maintaining its own traditions.",
            "wrong": ["purely isolationist.", "no external learning.", "purely Persian traditions."] }
        ]
      },
      {
        name: "Sassanid Relations with Rome/Byzantium",
        emoji: "🌍",
        quotes: [
          { start: "The centuries-long conflict between Sassanid and Roman/Byzantine empires remained largely inconclusive because",
          "correct": "both empires had comparable military resources, were separated by geographical barriers, and neither could muster sufficient force to completely conquer the other.",
            "wrong": ["Sassanid superiority.", "Rome was always dominant.", "one would eventually win."] },
          { start: "The establishment of border regions, buffer states, and treaty obligations showed that both empires understood that",
          "correct": "maintaining peace, even if temporary, was sometimes more advantageous than continuous warfare.",
            "wrong": ["permanent peace.", "no real conflict.", "continuous warfare was inevitable."] },
          { start: "The exchange of embassies, the negotiation of treaties, and the conduct of diplomacy alongside military conflict demonstrated that even great rivals could recognize each other's strength and",
          "correct": "maintain relationships that included both military competition and diplomatic negotiation.",
            "wrong": ["purely military conflict.", "no diplomacy.", "no real relationship."] },
          { start: "The conflicts over Armenia and other buffer regions showed that both empires valued strategic territory and that the struggle for dominance in these regions was",
          "correct": "a prolonged competition where neither side could maintain permanent control.",
            "wrong": ["purely military conquest.", "one side dominated completely.", "strategic irrelevance."] },
          { start: "The ultimately successful invasion of Sassanid territories by Arab Muslim forces after centuries of standing against Rome demonstrated that",
          "correct": "even militarily dominant empires face challenges when new, determined rivals emerge with different military capabilities or organizational advantages.",
            "wrong": ["Sassanid weakness was always present.", "Rome should have conquered.", "inevitable collapse."] }
        ]
      },
      {
        name: "Sassanid Women & Royal Family",
        emoji: "👩",
        quotes: [
          { start: "Women in Sassanid royal families held important roles including serving as regents, advising rulers, managing royal estates, and sometimes participating in governance because",
          "correct": "elite women could exercise real power and influence despite overall male political dominance.",
            "wrong": ["women had no authority.", "purely ceremonial roles.", "no real influence."] },
          { start: "The succession of rulers through the royal family and the sometimes contested nature of Sassanid succession meant that",
          "correct": "different factions within the royal family could support different candidates, making succession political rather than automatically hereditary.",
            "wrong": ["purely hereditary succession.", "no contest.", "automatic inheritance."] },
          { start: "The role of the royal family in maintaining the stability of the empire was important because they provided",
          "correct": "networks of relationship and obligation, control over provinces and resources, and potential sources of legitimacy for rulers.",
            "wrong": ["no real importance.", "purely ceremonial.", "no real power."] }
        ]
      },
      {
        name: "Sassanid Decline & Fall",
        emoji: "📜",
        quotes: [
          { start: "The decline of Sassanid power came from multiple factors: the exhaustion of the empire from centuries of conflict with Rome/Byzantium, internal civil conflict, the rise of powerful generals who challenged central authority, and",
          "correct": "the emergence of the Islamic Arab caliphate, which possessed military resources, organizational capability, and religious motivation that proved overwhelming.",
            "wrong": ["single cause.", "purely external invasion.", "weak empire from the start."] },
          { start: "The final destruction of the Sassanid Empire by Arab forces at the Battle of Qadisiyyah in 637 CE demonstrated that",
          "correct": "even an empire with centuries of military dominance and sophisticated administration could collapse when facing a new, determined rival with comparable military capabilities.",
            "wrong": ["Sassanid weakness.", "Rome conquered them.", "inevitable decline."] },
          { start: "The rapid spread of Islam throughout former Sassanid territories after the military conquest suggests that",
          "correct": "despite Sassanid cultural and religious sophistication, many subject peoples were willing to accept the new Islamic rule.",
            "wrong": ["purely military occupation.", "unwilling conversion.", "no real change."] },
          { start: "The legacy of Sassanid civilization included contributions to governance, administration, art, literature, and religious philosophy that would influence Islamic civilization and beyond, demonstrating that",
          "correct": "cultural and intellectual achievements could survive political collapse and continue to influence future ages.",
            "wrong": ["no real legacy.", "purely destroyed.", "no influence on Islam."] },
          { start: "The study of the Sassanid Empire demonstrates that it was not merely a continuation of Persian tradition but rather a sophisticated, centralized empire that maintained dominance for nearly 500 years through",
          "correct": "a combination of military power, effective administration, cultural achievement, and the ability to adapt to changing circumstances.",
            "wrong": ["no real innovation.", "purely derivative of predecessors.", "no real achievement."] }
        ]
      },
      {
        name: "Sassanid Social Structure & Hierarchy",
        emoji: "🏛️",
        quotes: [
          { start: "Sassanid society was organized into distinct classes: the royal family and nobility, priests (Magi), warriors, scribes and administrators, merchants and craftspeople, and farmers/commoners because",
          "correct": "this hierarchy allowed for specialization, coordination of large projects, and the accumulation and redistribution of resources.",
            "wrong": ["purely egalitarian.", "no real structure.", "random organization."] },
          { start: "The status of the priestly class in Sassanid society meant that religious authority and political authority were closely connected, with priests serving to",
          "correct": "advise rulers, administer religious institutions, maintain religious orthodoxy, and provide moral authority.",
            "wrong": ["purely religious roles.", "no political influence.", "no real authority."] },
          { start: "The recognition of merit in the selection of administrators and the advancement of capable individuals regardless of birth showed that Sassanid rulers understood that",
          "correct": "effective administration required talented personnel and that the empire benefited from appointing capable individuals to important positions.",
            "wrong": ["purely hereditary positions.", "no real advancement.", "birth alone determined status."] },
          { start: "The wealth and status of merchants and craftspeople in Sassanid society depended on the king's patronage and the provision of security and trade opportunities, showing that",
          "correct": "economic classes benefited from royal support and contributed to the empire's prosperity.",
            "wrong": ["purely exploited.", "no real status.", "no real contribution."] }
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
          { start: "I, Pachacuti, have transformed Cusco from a small valley into the center of a great empire because",
          "correct": "the Sun God Inti commanded me to expand and organize the realm; I rebuilt Cusco with fine stonework, established laws, and created the system of mit'a labor for public works.",
            "wrong": ["conquest was done only for personal glory.", "the old ways of the ancestors were sufficient.", "I ignored the will of the gods."] },
          { start: "A good ruler must care for the people as a father cares for his children because",
          "correct": "the Sapa Inca is the son of the Sun; he must ensure no one goes hungry, provide for widows and orphans, and maintain justice and order throughout Tawantinsuyu.",
            "wrong": ["the ruler's only duty was conquest.", "the people existed only to serve the king.", "justice came only from force."] },
          { start: "I saw a vision from the Sun God Inti who told me because",
          "correct": "I would become the greatest ruler and turn the world upside down (pachacuti); with his help I defeated the Chancas and began the true expansion of the empire.",
            "wrong": ["my victories came only from human effort.", "the gods never spoke to me.", "the Chanca war was not divinely inspired."] },
          { start: "The Sapa Inca must act as a father to all his subjects because",
          "correct": "he should feed the hungry, clothe the naked, and care for the sick and elderly; only then will the people love and obey him as a true son of Inti.",
            "wrong": ["the ruler owed nothing to the common people.", "fear and punishment were the best tools of governance.", "paternal care weakened royal authority."] },
          { start: "I rebuilt Cusco as the navel of the world because",
          "correct": "a capital must reflect the glory of Inti and the order of the empire; with fine stonework and planned districts, it became the sacred and administrative center of Tawantinsuyu.",
            "wrong": ["Cusco remained a simple village under my rule.", "urban planning served no important purpose.", "I cared only about military expansion."] },
          { start: "A noble and courageous man is known by his patience in adversity because",
          "correct": "impatience reveals a vulgar and low mind; a true leader remains calm and wise even in difficult times, just as I did when facing the Chanca invasion.",
            "wrong": ["rash action always brought better results.", "patience was a sign of weakness.", "adversity required only brute force."] },
          { start: "Governors and officials must observe two things with great care because",
          "correct": "first, they and their subjects must perfectly obey the emperor’s laws; second, they must watch over the resources and welfare of their province so that no one suffers want.",
            "wrong": ["officials could rule however they pleased.", "the welfare of common people was unimportant.", "laws existed only to serve the elite."] }
        ]
      },
      {
        name: "Túpac Inca Yupanqui (Great Conqueror)",
        emoji: "⚔️",
        quotes: [
          { start: "I extended the empire to the ends of the known world because",
          "correct": "the Sun commanded it; I conquered lands from Chile to Ecuador, built roads and fortresses, and brought new provinces into the empire through both war and wise administration.",
            "wrong": ["expansion happened without divine guidance.", "military force was unnecessary.", "conquered peoples were treated as slaves."] },
          { start: "When I reached the ocean, I built balsa rafts and sailed westward because",
          "correct": "I sought new lands and knowledge; the Inca must always push the boundaries of the empire while honoring Inti and maintaining order.",
            "wrong": ["I feared the sea and never explored beyond land.", "expansion stopped at the mountains.", "voyages had no strategic purpose."] },
          { start: "My father Pachacuti gave me the command to conquer because",
          "correct": "the Sun God Inti willed that the empire should grow; I marched north and south, subduing kingdoms and bringing them under the protection of the Inca.",
            "wrong": ["I conquered only for personal fame.", "my father opposed further expansion.", "the gods did not support my campaigns."] },
          { start: "After conquering the Chimu kingdom, I brought their skilled artisans to Cusco because",
          "correct": "they were masters of goldwork, textiles, and irrigation; a wise ruler incorporates the knowledge of conquered peoples to strengthen the entire empire.",
            "wrong": ["I destroyed all Chimu culture.", "skilled workers were not useful to the Inca.", "conquered peoples contributed nothing of value."] },
          { start: "I ordered the construction of great fortresses and storehouses throughout the land because",
          "correct": "the empire must be able to feed its people even in times of drought or war; through the mit'a system and royal warehouses, no one in Tawantinsuyu went hungry.",
            "wrong": ["storehouses were only for the army.", "the empire did not need organized logistics.", "I cared little for the welfare of common people."] },
          { start: "When I returned from my campaigns, I inspected the roads and bridges because",
          "correct": "a well-maintained Qhapaq Ñan allows the Sapa Inca to govern a vast territory; the roads are the veins through which the life of the empire flows.",
            "wrong": ["roads and bridges were unimportant.", "I left infrastructure to local rulers.", "the empire was governed without good communication."] },
          { start: "A true Inca ruler must be both a lion in war and a father in peace because",
          "correct": "he conquers with strength but rules with justice and generosity; only then will the people obey willingly and the gods continue to bless the empire.",
            "wrong": ["rulers needed only military power.", "kindness weakened authority.", "conquest and governance were separate matters."] }
        ]
      },
      {
        name: "Huayna Cápac (Last Great Sapa Inca)",
        emoji: "👑",
        quotes: [
          { start: "I ruled the empire at its greatest extent because",
          "correct": "I continued the work of my father and grandfather; I maintained the roads, storehouses, and administrative system that fed the people and supported the army.",
            "wrong": ["the empire was already declining under me.", "I neglected administration for pleasure.", "conquest was my only concern."] }
        ]
      },
      {
        name: "Priests & Spiritual Leaders (Willaq Umu & Inti Worship)",
        emoji: "🕯️",
        quotes: [
          { start: "Inti, our father the Sun, gives light and life to the world because",
          "correct": "he is the ancestor of the Sapa Inca; we perform daily rituals at Coricancha and Inti Raymi so that he continues to bless the crops, the people, and the empire.",
            "wrong": ["the Sun had no direct connection to the ruler.", "rituals were unimportant to daily life.", "only human effort mattered for prosperity."] },
          { start: "We honor Pachamama, the Earth Mother, with offerings because",
          "correct": "she nourishes the terraces and fields; harmony with her, Inti, and the mountains (apus) ensures good harvests and protects the land from disaster.",
            "wrong": ["the earth was not considered sacred.", "offerings had no practical effect.", "only the Sun God was worshipped."] }
        ]
      },
      {
        name: "Engineers & Road Builders",
        emoji: "🏗️",
        quotes: [
          { start: "The Qhapaq Ñan, the Great Royal Road, stretches more than 40,000 kilometers because",
          "correct": "we built it with stone paving, suspension bridges of ichu grass, and waystations (tambos) so that the empire could be governed, armies moved quickly, and goods distributed efficiently.",
            "wrong": ["roads were simple dirt paths.", "bridges were unnecessary in the Andes.", "the empire did not need an extensive communication system."] },
          { start: "We carved terraces into the steep mountainsides because",
          "correct": "they prevent erosion, create fertile farmland, and demonstrate our mastery of the land; with irrigation canals and storehouses, we ensured food security even in harsh conditions.",
            "wrong": ["terraces served only decorative purposes.", "agriculture relied only on natural valleys.", "Inca engineering was primitive."] }
        ]
      },
      {
        name: "Administrators & Lawgivers",
        emoji: "⚖️",
        quotes: [
          { start: "The Inca laws were few but strictly enforced because",
          "correct": "they promoted justice, hard work, and respect for authority; no one went hungry in the empire because of the mit'a system and royal storehouses.",
            "wrong": ["laws were harsh and arbitrary.", "the empire had no organized legal system.", "people were free to act as they wished."] }
        ]
      },
      {
        name: "Legacy of the Sapa Inca",
        emoji: "📜",
        quotes: [
          { start: "The Sapa Inca was the son of the Sun and father of the people because",
          "correct": "he owned all land and resources in trust for the empire; through wise rule, redistribution of goods, and public works, he maintained harmony and prosperity across Tawantinsuyu.",
            "wrong": ["the ruler owned everything for personal use.", "the empire relied only on military force.", "there was no system of social welfare."] }
        ]
      },
      {
        name: "Quipucamayoc (Record Keepers)",
        emoji: "📜",
        quotes: [
          { start: "We, the quipucamayoc, recorded everything with knotted strings because",
          "correct": "quipus allowed us to keep exact accounts of tribute, population, livestock, harvests, and history; without them the vast empire could not be governed efficiently.",
            "wrong": ["writing was unnecessary in our society.", "records were kept only by memory.", "quipus had no practical administrative use."] }
        ]
      },
      {
        name: "Military Leaders",
        emoji: "⚔️",
        quotes: [
          { start: "The Inca army was highly organized because",
          "correct": "soldiers were trained from youth, supplied from state storehouses, and moved rapidly along the Qhapaq Ñan; discipline and logistics made us one of the most effective forces in the Andes.",
            "wrong": ["the army relied on untrained warriors.", "logistics and supply were unimportant.", "military success came only from numbers."] }
        ]
      },
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
          { start: "Hear of what I did, more than the ancestors! I am a king, divine emanation, living image of Atum because",
          "correct": "Amun of Napata made me ruler; I came northward at his command to restore order and purify the temples, acting with justice and piety.",
            "wrong": ["I conquered Egypt only for personal glory.", "the gods had no role in my campaign.", "I showed no mercy to defeated rulers."] },
          { start: "When the northern princes neglected the temples and lived unclean lives, I marched north because",
          "correct": "Amun commanded me to restore ma'at (order and justice); I fought with divine support and treated the defeated with compassion when they submitted.",
            "wrong": ["military force alone brought victory.", "I destroyed every enemy without mercy.", "religion played no part in my rule."] },
          { start: "Command which My Majesty has spoken: Hear what I did, more than the ancestors because",
          "correct": "I am the king, the representation of god, the living image of Atum, who issued from the womb marked as ruler; my father knew and my mother perceived even in the egg that I would be ruler.",
            "wrong": ["my rule came only from military conquest.", "divine birth and selection played no role.", "I claimed kingship without any justification."] },
          { start: "As I live, as Re loves me, as my father Amun favours me, I shall go northward myself because",
          "correct": "I will overturn what Tefnakht has done and make him retreat from fighting forever; Amun has commanded me to act and to show forth his might.",
            "wrong": ["I stayed in Napata and sent only generals.", "the campaign had no divine backing.", "I acted purely out of personal anger."] },
          { start: "When my troops entered Thebes, I commanded them because",
          "correct": "purify yourselves in the river, clothe yourselves in fine linen, lay down your bows; fight in the shadow of Amun’s strong arm, for he makes the weak strong and turns multitudes to flight before the few.",
            "wrong": ["my soldiers could act however they wished.", "ritual purity before battle was unimportant.", "Amun had no influence on military success."] },
          { start: "When I saw that the horses in the stables of the defeated rulers were starved, I became more angry than at any other crime because",
          "correct": "the neglect of horses pained my heart greatly; I love horses, and their mistreatment showed the rulers’ lack of proper order and respect.",
            "wrong": ["I cared nothing for animals or stables.", "this incident had no emotional impact on me.", "I punished the princes solely for military resistance."] },
          { start: "I swear: as Re loves me, as my father Amun favours me, this shall befall the city because",
          "correct": "I shall seize it like a cloudburst; Amun has commanded me, and he has done this expressly to show his wrath and to cause that his grandeur be seen.",
            "wrong": ["I attacked without any divine command.", "the gods were indifferent to the campaign.", "my victories came only from superior numbers."] }
        ]
      },
      {
        name: "Taharqa (Taharka) – Builder & Defender",
        emoji: "🏛️",
        quotes: [
          { start: "O Great God, swift one, who comes to him who calls, watch over my sister because",
          "correct": "do for her as I have done for you; elevate her children and make them prosper, even as you did for me — for I rebuilt your temples and honored you in Kawa and Jebel Barkal.",
            "wrong": ["prayer had no effect on the gods.", "temple building was purely for show.", "I ignored the traditional gods of Kush."] },
          { start: "I, Taharqa, beloved of Amun-Re, restored and enlarged the temples because",
          "correct": "Amun of Napata is my father; through his favor I ruled Egypt and Kush, brought prosperity, and defended the land against invaders.",
            "wrong": ["military campaigns were more important than temple work.", "the gods did not grant me legitimacy.", "I focused only on conquest."] },
          { start: "I was only a youth, but the god Amun placed me on the throne because",
          "correct": "he knew the heart within me; even when I was a young prince, Amun chose me and raised me up to be king of Upper and Lower Egypt.",
            "wrong": ["I seized power through military force alone.", "Amun had no role in my selection as king.", "my youth disqualified me from rule."] },
          { start: "Hail to You, Amun-Re, Lord of Maat, whose shrine is hidden because",
          "correct": "you are the one who made me ruler; I rebuilt your temples at Kawa and filled them with musicians to rattle the sistrum before your beautiful face so that you may grant me life and prosperity.",
            "wrong": ["I neglected the temples and focused only on war.", "musicians and rituals had no importance.", "Amun-Re ignored my offerings."] },
          { start: "When I saw the temple of Amun at Kawa in ruins, my heart was sad until I became king because",
          "correct": "I restored it in fine sandstone, enlarged it, and endowed it with servants, fields, and musicians so that the god would be pleased and continue to favor Kush and Egypt.",
            "wrong": ["I left the old temples untouched.", "temple restoration was unimportant to my reign.", "I only built new structures for personal glory."] },
          { start: "O Amun, my father, I have given you gold and many precious things because",
          "correct": "you gave me the kingship and protected me; in return I filled your house with wealth, servants, and offerings so that you may continue to give me victory and long life.",
            "wrong": ["I gave nothing to the temples.", "gold and offerings had no religious meaning.", "the gods did not expect reciprocity."] },
          { start: "I sailed northward to Thebes with the young men sent by my brother because",
          "correct": "Amun of Napata guided my steps; through his power I was crowned in Memphis and ruled both Kush and Egypt as a beloved son of the god.",
            "wrong": ["I had no connection to my royal predecessors.", "my coronation had no divine involvement.", "I ignored the traditional capital of Thebes."] }
        ]
      },
      {
        name: "Aspelta (Chosen by Amun)",
        emoji: "📜",
        quotes: [
          { start: "The army and the priests assembled in Napata and asked Amun of Napata to choose the king because",
          "correct": "the god himself selected me as ruler; I was brought forward and Amun confirmed me, showing that kingship in Kush comes from divine will, not only birth.",
            "wrong": ["the king was chosen purely by military leaders.", "Amun had no role in royal succession.", "I seized power by force alone."] },
          { start: "When the priests inquired of the god, Amun declared because",
          "correct": "this is the king who will sit upon the throne; he shall be given life, health, and all good things, for he will honor the gods and maintain justice.",
            "wrong": ["the selection was decided only by humans.", "oracles played no part in Kushite kingship.", "the god never spoke directly to the people."] },
          { start: "The Host of His Majesty gathered after the Falcon flew to heaven and said because",
          "correct": "we do not know whom we should raise to the throne; the decision belongs to Amun of Napata, our good father, who has been the god of the kings of Kush since the beginning.",
            "wrong": ["the army immediately chose the next king by themselves.", "the death of the previous king caused no uncertainty.", "human leaders alone decided the succession."] },
          { start: "They prostrated themselves before Amun of Napata and said because",
          "correct": "O great god, lord of the Thrones of the Two Lands who dwells in the Pure Mountain, choose for us the king who will revive us, build your temples, and make the land of Kush strong again.",
            "wrong": ["they did not pray or seek divine guidance.", "the god was not asked to revive the kingdom.", "temple building was not part of the request."] },
          { start: "The god Amun of Napata then chose me from among the royal brethren because",
          "correct": "he knows the hearts of men; he brought me forward and declared: 'This is the king who shall sit upon the throne of Horus, beloved of Amun, given life, stability, and dominion forever.'",
            "wrong": ["I was chosen only because of my royal blood.", "Amun remained silent and did not select anyone.", "the selection ignored the god’s will."] },
          { start: "After the god confirmed me, I entered the sanctuary alone because",
          "correct": "I received the crowns and the staff of my predecessor from the hand of Amun; then I came forth to the army and the people who acclaimed me as the true king chosen by the god.",
            "wrong": ["the coronation happened without entering the temple.", "I took the regalia by my own power.", "the people had no role in the acclamation."] }
        ]
      },
      {
        name: "Priests & Temple Officials",
        emoji: "🕯️",
        quotes: [
          { start: "The priests of Amun at Jebel Barkal and Napata served because",
          "correct": "Amun is the king of the gods and father of the ruler; we maintained the rituals, oracles, and temples that gave divine legitimacy to the kings of Kush.",
            "wrong": ["religion was separate from royal power.", "the priesthood had little influence.", "temples were only for show."] },
          { start: "We performed oracles and festivals so that",
          "correct": "the god could speak directly, choose kings, and grant victory and prosperity to the land when the people and ruler lived in ma'at (truth and justice).",
            "wrong": ["oracles were never used for important decisions.", "the gods ignored the affairs of Kush.", "rituals had no practical effect."] }
        ]
      },
      {
        name: "Kings of Meroë (Natakamani & Amanitore)",
        emoji: "🏛️",
        quotes: [
          { start: "We, Natakamani and Amanitore, built and restored temples at Naqa and Amara because",
          "correct": "we honored Amun, Apedemak the lion-god, and the other deities; through their favor we maintained prosperity, trade, and the strength of the kingdom in the Meroitic period.",
            "wrong": ["we focused only on warfare.", "temple building stopped after the Napatan period.", "the gods no longer mattered in Meroë."] }
        ]
      },
      {
        name: "Military & Royal Power",
        emoji: "⚔️",
        quotes: [
          { start: "The kings of Kush sent armies against rebels because",
          "correct": "Amun granted victory when the cause was just; we used cavalry, infantry, and boats effectively while showing mercy to those who submitted, maintaining order across vast territories.",
            "wrong": ["military force was used without divine approval.", "Kush had no organized army.", "conquest always involved total destruction."] }
        ]
      },
      {
        name: "Trade & Prosperity",
        emoji: "💰",
        quotes: [
          { start: "The Kingdom of Kush grew rich through trade in gold, ivory, ebony, and incense because",
          "correct": "we controlled the Nile routes and desert caravans; fair dealings and strong royal protection allowed merchants to thrive and bring wealth to the temples and people.",
            "wrong": ["trade was unimportant to Kushite kings.", "wealth came only from conquest.", "honest commerce had no value."] }
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
          { start: "I, Hiram, king of Tyre, sent cedar logs, carpenters, and masons to David because",
          "correct": "we were longtime friends; I continued this alliance with his son Solomon, supplying timber and skilled craftsmen for the Temple in exchange for food and olive oil.",
            "wrong": ["I sought military conquest over Israel.", "trade with Israel had no value.", "I refused to help with the Temple project."] },
          { start: "When Solomon asked for help building the Temple, I replied that",
          "correct": "the Lord God of Israel has made Solomon king over a wise and understanding people; I will send skilled men and cedar from Lebanon as much as you need.",
            "wrong": ["I demanded gold and tribute instead of fair trade.", "the gods of Tyre opposed helping Israel.", "I had no skilled craftsmen to offer."] },
          { start: "Hiram king of Tyre sent this message to Solomon because",
          "correct": "Hiram had always been a friend of David; when I heard that Solomon had been anointed king, I sent my servants to congratulate him and confirm our alliance.",
            "wrong": ["I ignored Solomon's accession.", "friendship with David ended with his death.", "I only contacted Solomon for profit."] },
          { start: "I, Hiram, have considered the things which thou sentest to me for and I will do all thy desire concerning timber of cedar and fir because",
          "correct": "my servants shall bring it down from Lebanon to the sea, make it into rafts, and deliver it to the place you indicate; you shall meet my needs by providing food for my household.",
            "wrong": ["I refused to supply any timber.", "the agreement required no payment in return.", "I demanded military help instead of food."] },
          { start: "Blessed be the Lord this day, who has given to David a wise son to be over this great people because",
          "correct": "the Lord God of Israel loves His people and has made Solomon king; therefore I will gladly supply cedar, cypress, and skilled craftsmen for the Temple and palace.",
            "wrong": ["I praised only the gods of Tyre.", "Solomon's wisdom had no bearing on our trade.", "I showed no respect for the God of Israel."] },
          { start: "I sent Huram-Abi, a skilled master craftsman, because",
          "correct": "he is trained in working gold, silver, bronze, iron, stone, wood, and fabrics; he will work with your craftsmen to complete all that you desire for the Temple.",
            "wrong": ["I sent no artisans at all.", "Huram-Abi was only a simple laborer.", "skilled workers were not needed for the project."] },
          { start: "After twenty years, when Solomon gave me twenty cities in Galilee, I came to see them and said",
          "correct": "'What cities are these which thou hast given me, my brother?' — yet I still sent Solomon 120 talents of gold and maintained our friendship and joint trading voyages to Ophir.",
            "wrong": ["I immediately broke the alliance over the cities.", "the cities pleased me greatly and ended our trade.", "I refused to send any more gold."] }
        ]
      },
      {
        name: "Eshmunazar II of Sidon (Temple Builder)",
        emoji: "🏛️",
        quotes: [
          { start: "I, Eshmunazar, king of the Sidonians, and my mother Amoashtart built temples for the gods because",
          "correct": "we constructed the house of Baal of Sidon, the house of Astarte, the sanctuary of Eshmun, and other shrines so that the gods would bless our city and grant us long life and prosperity.",
            "wrong": ["we ignored the gods and focused only on trade.", "temple building had no religious or political purpose.", "the gods of Sidon required no offerings or shrines."] },
          { start: "Whoever you are, king or common man, do not open this sarcophagus because",
          "correct": "may the gods curse anyone who disturbs my resting place; I built these temples and extended Sidon's territory, and my deeds should be respected after death.",
            "wrong": ["tombs needed no protection or curses.", "royal burials held no treasures or importance.", "disturbing graves carried no divine consequences."] },
          { start: "I, Eshmunazar, king of the Sidonians, son of Tabnit, was carried away before my time because",
          "correct": "I was an orphan, the son of a widow, cut off in the fourteenth year of my reign; I lie in this coffin and tomb which I myself built.",
            "wrong": ["I lived a long and prosperous life.", "my death had no connection to divine will.", "I left no record of my early death."] },
          { start: "We built temples and shrines for the gods of Sidon because",
          "correct": "we raised up the house of Baal of Sidon, the house of Astarte in Sidon (the land by the sea), and the holy sanctuary of Eshmun at the spring Ydll on the mountain, so the gods would dwell among us.",
            "wrong": ["we only built defensive walls and harbors.", "temple construction was done without my mother’s involvement.", "the gods had no interest in new sanctuaries."] },
          { start: "The Lord of Kings (the Persian king) granted me Dor and Joppa and the rich lands of the Sharon because",
          "correct": "I performed mighty deeds for him; these territories were added to the borders of Sidon forever so that the gods would be honored and my name remembered.",
            "wrong": ["Sidon remained small and had no territorial expansion.", "the Persian king gave me nothing.", "these lands were taken by force rather than granted."] },
          { start: "Whoever opens this resting-place or carries me away from this coffin, may",
          "correct": "the sacred gods deliver them to destruction; may they have no resting-place among the shades (Rephaim), no burial in a grave, and no son or offspring to succeed them.",
            "wrong": ["disturbing the tomb brought only minor punishment.", "curses were only symbolic with no real power.", "the inscription contained no warning against grave robbers."] }
        ]
      },
      {
        name: "Maritime Leaders & Navigators",
        emoji: "🚢",
        quotes: [
          { start: "Our ships sailed beyond the Pillars of Hercules to distant lands because",
          "correct": "skilled navigation, knowledge of currents and stars, and sturdy vessels allowed us to reach Britain for tin, Africa for resources, and establish colonies across the Mediterranean.",
            "wrong": ["we feared sailing far from home.", "trade routes required no planning or experience.", "our ships were weak and unsuitable for long voyages."] },
          { start: "The Phoenician sailors were renowned because",
          "correct": "we were the first to 'plough the sea' regularly, using advanced shipbuilding and celestial navigation to dominate Mediterranean trade for centuries.",
            "wrong": ["other nations were better seafarers.", "we relied only on coastal hugging.", "navigation had no connection to our prosperity."] }
        ]
      },
      {
        name: "Merchants & Traders",
        emoji: "💰",
        quotes: [
          { start: "Our wealth came from trading purple dye, cedar, glass, and metals because",
          "correct": "we established fair networks across the Mediterranean, exchanging goods honestly while building trust that turned distant ports into reliable partners.",
            "wrong": ["trade relied on force and conquest.", "honesty had no value in commerce.", "wealth came only from local resources."] },
          { start: "A merchant's reputation is his greatest asset because",
          "correct": "trust built over generations allowed us to trade safely in foreign lands; reliable dealings brought more profit than short-term deception.",
            "wrong": ["deceit was the best trading strategy.", "reputation mattered less than armed protection.", "merchants operated without any code of conduct."] }
        ]
      },
      {
        name: "Scribes & Alphabet Innovators",
        emoji: "📜",
        quotes: [
          { start: "We developed a simple alphabetic script of 22 letters because",
          "correct": "it made writing accessible for trade records, contracts, and administration; this system spread widely and influenced Greek, Latin, and many modern alphabets.",
            "wrong": ["the alphabet was invented by others and we only copied it.", "complex syllabic scripts were better for commerce.", "writing served no practical purpose beyond royal monuments."] },
          { start: "Knowledge preserved in writing endures longer than",
          "correct": "stone monuments or gold; our alphabet allowed merchants, scribes, and future generations to record agreements, stories, and learning efficiently.",
            "wrong": ["oral tradition was always superior.", "the alphabet had no impact beyond Phoenicia.", "scribes held little importance in our society."] }
        ]
      },
      {
        name: "Kings & City Builders",
        emoji: "🏰",
        quotes: [
          { start: "The kings of Tyre and Sidon strengthened our cities because",
          "correct": "we built harbors, temples, and defensive walls while fostering trade and alliances that turned small coastal towns into powerful independent centers.",
            "wrong": ["military conquest defined our power.", "cities thrived without strong leadership or infrastructure.", "alliances with foreign kings weakened us."] }
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
          { start: "I, Hattusili, Great King, have conquered many lands with my army because",
          "correct": "a king must be both a warrior and a wise ruler; I appointed my grandson Mursili as successor and warned the nobles against internal strife so the kingdom would endure.",
            "wrong": ["only military conquest mattered.", "family succession had no importance.", "the gods played no role in kingship."] },
          { start: "When appointing my successor I declared that",
          "correct": "the king must speak with one tongue and the land must be united; internal division and betrayal by princes would bring ruin to Hatti.",
            "wrong": ["princes could freely compete for power.", "military strength alone guaranteed stability.", "the king had absolute power with no need for warnings."] },
          { start: "I, the Great King, Tabarna Hattusili, spoke to you saying 'Let the young Labarna sit securely upon the throne' but he showed himself",
          "correct": "a youth not fit to be seen — without compassion, cold, pitiless, heedless of the word of the king — so I rejected him and declared he is no longer my son.",
            "wrong": ["a king could never change his chosen heir.", "personal character had no bearing on fitness to rule.", "family betrayal never occurred in the royal house."] },
          { start: "Now Mursili is my son; him you must acknowledge and enthrone because",
          "correct": "he is still a child, but you nobles must guide and protect him; read my words to him every month so he learns how to rule wisely and keep the land united.",
            "wrong": ["the assembly had no role in supporting the young king.", "a child successor needed no special guidance.", "my instructions were only for immediate obedience."] },
          { start: "Let no one in the future raise the son of his sister to kingship because",
          "correct": "such appointments have led to rebellion and division; the king must speak with one tongue, the nobles must obey, and the land of Hatti must remain united under one ruler.",
            "wrong": ["matrilineal claims were always valid.", "internal family strife strengthened the kingdom.", "the king had no right to warn against future betrayals."] },
          { start: "I have conquered many lands but now, being ill, I warn you that",
          "correct": "if you do not keep my words and support my chosen successor, the kingdom will fall into chaos; only unity, loyalty, and obedience to the king's will can preserve Hatti.",
            "wrong": ["military conquests guaranteed the kingdom's future.", "the nobles could freely choose their own ruler.", "my illness had no bearing on state matters."] }
        ]
      },
      {
        name: "Suppiluliuma I (Empire Builder)",
        emoji: "⚔️",
        quotes: [
          { start: "I, Suppiluliuma, Great King, Hero, Beloved of the Storm God, crossed the Euphrates and conquered because",
          "correct": "the gods granted me victory; I restored the weakened kingdom, expanded into Syria, and made vassal kings swear binding oaths of loyalty.",
            "wrong": ["military force alone sufficed without divine favor.", "diplomacy was unnecessary.", "vassals owed no formal obligations."] },
          { start: "In my treaty with Shattiwaza of Mitanni I declared that",
          "correct": "the daughter of the King of Hatti shall be queen in Mitanni; treaties sealed with oaths before the gods create lasting alliances stronger than raw conquest.",
            "wrong": ["conquered lands needed no formal treaties.", "the gods had no role in international agreements.", "vassal kings could be treated arbitrarily."] },
          { start: "When I, My Majesty Suppiluliuma, reached the land of Alše and the district of Kutmar, I overpowered the enemy because",
          "correct": "the Storm God went before me; I plundered the lands west of the Euphrates and annexed Mount Lebanon, restoring Hittite power in Syria through military strength and divine support.",
            "wrong": ["the campaign was purely defensive with no expansion.", "the gods played no part in the victories.", "I avoided crossing the Euphrates."] },
          { start: "When Tushratta, king of Mitanni, acted presumptuously toward me a second time, I responded because",
          "correct": "a Great King cannot tolerate insolence; I defeated his forces, installed Shattiwaza as my vassal, and secured Mitanni through marriage and a binding treaty.",
            "wrong": ["I immediately destroyed Mitanni completely.", "diplomatic marriage had no strategic value.", "I ignored Mitanni's provocations."] },
          { start: "In my letter to the king of Egypt I wrote that",
          "correct": "your father and I were brothers and desired friendship; whatever he asked I granted, and whatever I asked he granted — let us now continue in peace and mutual help.",
            "wrong": ["I demanded only military alliance with Egypt.", "previous friendly relations meant nothing.", "I refused all diplomatic contact with Egypt."] },
          { start: "When the Egyptian queen wrote asking for one of my sons to become her husband and king of Egypt, I first sent a chamberlain to investigate because",
          "correct": "a Great King must act with caution in such extraordinary matters; after confirmation, I agreed, seeking to extend Hittite influence through dynastic marriage.",
            "wrong": ["I immediately sent a son without verification.", "the offer had no political value.", "I rejected the proposal outright."] },
          { start: "I, Suppiluliuma, Great King, Hero, made Shattiwaza king in Mitanni and gave him my daughter in marriage because",
          "correct": "a wise ruler turns former enemies into loyal vassals through marriage alliances and solemn treaties sworn before many gods, ensuring long-term stability.",
            "wrong": ["I relied solely on military occupation.", "vassal kings needed no marriage ties.", "the gods were not invoked as witnesses in treaties."] }
        ]
      },
      {
        name: "Mursili II (Annalist & Plague-Stricken King)",
        emoji: "📜",
        quotes: [
          { start: "When I, Mursili, ascended the throne, the enemy lands said 'His father was a mighty king but now a child sits on the throne' because",
          "correct": "I first restored the neglected festivals of the Sun-goddess of Arinna and prayed for her support; with divine aid I conquered the surrounding enemies within ten years.",
            "wrong": ["military campaigns required no religious preparation.", "the gods ignored the king's prayers.", "a young king could rely only on armies."] },
          { start: "For twenty years the plague has raged in Hatti; I have prayed to the Storm-god and the Assembly of Gods because",
          "correct": "the plague was divine punishment for sins such as the murder of Tudhaliya the Younger and breaking oaths; only confession, restitution, and proper worship can remove it.",
            "wrong": ["the plague had purely natural causes.", "prayers and oracles had no effect.", "the king bore no responsibility for national disasters."] },
          { start: "In my annals I recorded that the gods went before me in battle because",
          "correct": "true victory comes from divine support combined with careful planning and loyal troops; I detailed every campaign so future kings would learn from my deeds.",
            "wrong": ["victory depended only on numbers and courage.", "record-keeping served no practical purpose.", "the gods played no role in warfare."] },
          { start: "O Sun-goddess of Arinna, my lady, the surrounding enemy lands keep calling me a child and belittling me because",
          "correct": "they seek to take your territories from me; come stand by my side, smite those enemy lands before me, and show that the gods support even a young king who honors you.",
            "wrong": ["the enemies respected my youth.", "I relied solely on my own strength without divine help.", "the Sun-goddess had no interest in territorial defense."] },
          { start: "O Storm-god of Hatti, my lord, and all the gods, my lords, what is this that you have done because",
          "correct": "you have allowed the plague to rage in Hatti for twenty years; under my father, my brother, and now under me, people keep dying — will the plague never be eliminated from the land?",
            "wrong": ["the plague lasted only a short time.", "I blamed the gods without taking any responsibility.", "the gods were not concerned with the suffering in Hatti."] },
          { start: "I, Mursili, your servant, confess the sins of my father Suppiluliuma because",
          "correct": "he broke the oath with Egypt by attacking the land of Amka while Egyptian prisoners brought the plague; I have made restitution and now beg you, gods, to be pacified and remove this evil from Hatti.",
            "wrong": ["my father committed no sins that affected the kingdom.", "confession had no power to influence the gods.", "the plague was unrelated to any broken oaths."] },
          { start: "In the land of Hatti I have searched for the cause of the plague through oracles because",
          "correct": "the gods demand that we discover and correct past offenses; only when the sin is identified, confessed, and atoned for can the land be freed from divine wrath.",
            "wrong": ["oracles were useless for understanding disasters.", "the king had no duty to investigate national calamities.", "atonement played no role in Hittite religion."] }
        ]
      },
      {
        name: "Hattusili III (Usurper & Diplomat)",
        emoji: "🕯️",
        quotes: [
          { start: "I, Hattusili, was a sickly child but the goddess Ishtar took me by the hand and made me Great King because",
          "correct": "divine favor and legitimate grievances against my nephew Urhi-Teshub justified my actions; I defended my rule in the Apology and sought peace with Egypt.",
            "wrong": ["usurpation required no justification.", "personal piety had no political value.", "military power alone secured the throne."] },
          { start: "In the Eternal Treaty with Ramesses II of Egypt we both swore that",
          "correct": "we would remain at peace forever, assist each other against enemies, and respect the borders; diplomacy and mutual oaths before the gods prevent endless war.",
            "wrong": ["treaties were merely temporary truces.", "the gods were not invoked in international agreements.", "conquest was always preferable to negotiation."] },
          { start: "I, Hattusili, the youngest son of Mursili, was a frail child but the goddess Šaušga of Šamuha requested me from my father because",
          "correct": "she took me under her protection from childhood; thanks to her favor my health improved, I gained recognition, and she guided me to kingship.",
            "wrong": ["my illness had no religious significance.", "the goddess played no role in my rise.", "I became king solely through military conquest."] },
          { start: "When my brother Muwatalli died and his son Urhi-Teshub became king, I served him loyally but he stripped me of my offices because",
          "correct": "he treated me unjustly; the goddess Šaušga appeared to me in dreams and supported my cause, so I rose against him only when he left me no choice.",
            "wrong": ["I rebelled immediately out of ambition.", "the goddess never intervened in royal disputes.", "Urhi-Teshub ruled without any conflict."] },
          { start: "I did not take Puduhepa in marriage out of passion but because",
          "correct": "the goddess commanded it in a dream; she assigned Puduhepa to me, and together we served the goddess and strengthened the kingdom.",
            "wrong": ["my marriage was purely political with no divine element.", "Puduhepa had no religious or political importance.", "I ignored the goddess’s will in personal matters."] },
          { start: "In the treaty with Ramesses, Great King of Egypt, my brother, we established that",
          "correct": "from this day forward there shall be good peace and good brotherhood between us forever; if an enemy comes against one of us, the other shall send troops and chariots to help.",
            "wrong": ["the treaty only ended immediate hostilities.", "mutual defense was not part of the agreement.", "the gods were not called as witnesses."] },
          { start: "We swore before the thousand gods of Hatti and the thousand gods of Egypt because",
          "correct": "oaths sworn in the presence of the gods, the mountains, rivers, sky, earth, and sea make the treaty binding for eternity; whoever breaks it shall be destroyed by the gods.",
            "wrong": ["the treaty relied only on military enforcement.", "invoking gods was merely ceremonial.", "breaking the treaty carried no divine consequences."] }
        ]
      },
      {
        name: "Hittite Laws & Justice",
        emoji: "⚖️",
        quotes: [
          { start: "The laws of Hatti state that if anyone kills a man or woman in a quarrel, he shall",
          "correct": "bring the body for burial and give four persons (heads) in compensation; justice requires restitution rather than simple vengeance.",
            "wrong": ["the killer must always be executed.", "no compensation was required for homicide.", "social status made no difference in penalties."] },
          { start: "If anyone blinds a free person or knocks out his tooth, he shall pay",
          "correct": "twenty shekels of silver (reduced from earlier amounts); the laws show a preference for compensation and mercy over harsh physical punishment.",
            "wrong": ["physical mutilation was the standard penalty.", "slaves and free people received identical treatment.", "the king had no role in modifying laws."] }
        ]
      },
      {
        name: "Generals & Military Organization",
        emoji: "⚔️",
        quotes: [
          { start: "In the campaigns of Suppiluliuma and Mursili, the Hittite army succeeded because",
          "correct": "it combined disciplined infantry, chariot forces, careful logistics, and coordination with vassal troops under royal command.",
            "wrong": ["individual warrior bravery was sufficient.", "no strategic planning was needed.", "allies could not be trusted in battle."] },
          { start: "When marching against rebellious vassals or northern enemies like the Kaska, commanders understood that",
          "correct": "swift decisive action combined with offers of mercy to those who submitted maintained long-term control over a vast and diverse empire.",
            "wrong": ["total destruction was always required.", "military force alone created loyalty.", "the empire had no need for vassal systems."] }
        ]
      },
      {
        name: "Priests, Diplomats & Religion",
        emoji: "🕯️",
        quotes: [
          { start: "Hittite kings performed oracles, prayers, and festivals because",
          "correct": "the gods demanded proper worship and moral order; neglecting rituals or breaking oaths brought divine punishment such as plague or military defeat.",
            "wrong": ["religion was separate from politics and war.", "the gods never intervened in human affairs.", "only military success mattered to the gods."] },
          { start: "In treaties and prayers we invoked many gods as witnesses because",
          "correct": "oaths sworn before the Storm-god, Sun-goddess of Arinna, and others created binding international and internal obligations; breaking them invited divine wrath.",
            "wrong": ["treaties relied only on military enforcement.", "the gods had no interest in human agreements.", "Hittite religion tolerated no foreign deities."] }
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
          { start: "I, Charles, most serene Augustus, crowned by God, great and pacific emperor, issued capitularies and reformed education because",
          "correct": "right action is better than knowledge; but in order to do what is right, we must first know what is right. Christian law, moral reform, and learning strengthen both church and empire.",
            "wrong": ["military conquest alone maintained order.", "personal power needed no moral or educational reform.", "the church should remain separate from imperial rule."] },
          { start: "After my coronation in Rome on Christmas Day 800, I understood the empire's purpose as",
          "correct": "defending Christianity, protecting the weak, and uniting diverse peoples under just Christian rule as a successor to Rome and the Franks.",
            "wrong": ["rejecting any link to ancient Rome.", "focusing only on Germanic warrior traditions.", "ignoring the role of the papacy."] },
          { start: "I chose the most prudent and wisest men—archbishops, bishops, abbots, and pious laymen—and sent them throughout the realm as missi because",
          "correct": "they must inquire diligently into every injustice, render justice to the churches of God, the poor, widows, orphans, and all people, and report back so that the empire lives according to law and right.",
            "wrong": ["only military officers were needed to enforce rule.", "local counts could handle all justice without oversight.", "the empire required no central moral guidance."] },
          { start: "I admonished the nobles and sons of leading men who neglected learning and gave themselves to luxury and idleness because",
          "correct": "unless you make up for your idleness by eager effort in study, you will never receive benefit from me nor advance in my service. Birth and wealth alone are not enough.",
            "wrong": ["nobles needed only military training.", "idleness strengthened loyalty to the king.", "education was unnecessary for those of high birth."] },
          { start: "I ordered schools to be attached to every monastery and cathedral because",
          "correct": "no difference should be made between the sons of serfs and freemen; all must study grammar, music, arithmetic, and the liberal arts so that the kingdom may shine with learning and serve God better.",
            "wrong": ["education should be reserved only for the clergy.", "secular learning had no place in Christian rule.", "monasteries should focus solely on prayer."] },
          { start: "In the Admonitio Generalis and other capitularies I commanded that priests must preach faithfully and that all believers should know",
          "correct": "the Lord’s Prayer, the Creed, and the essentials of the faith, so that true Christian living and correct worship spread throughout the land.",
            "wrong": ["faith required no teaching or understanding.", "only the elite needed religious instruction.", "conversion could be achieved by force alone."] }
        ]
      },
      {
        name: "Otto I (The Great – Reviver of the Empire)",
        emoji: "🛡️",
        quotes: [
          { start: "After victories like Lechfeld, I prayed before the Holy Lance and revived the imperial title in 962 because",
          "correct": "divine favor, proven in battle and shown through piety, allowed me to unite German kingship with Roman imperial dignity and control both lords and church.",
            "wrong": ["military success required no religious legitimacy.", "the empire needed no connection to Charlemagne.", "bishops should hold power entirely independent of the emperor."] },
          { start: "My appointment of loyal bishops and intervention in Italy showed that the emperor must",
          "correct": "act as protector of the church while asserting authority to maintain unity across the realm.",
            "wrong": ["leave all church matters solely to the pope.", "avoid involvement in Italian affairs.", "rule merely as first among equal princes."] },
          { start: "When the Magyars invaded in 955, I dismounted and knelt with my army before the Holy Lance because",
          "correct": "victory comes from God’s favor and the protection of holy relics; true kingship is proven by piety in battle and defense of Christendom against pagans.",
            "wrong": ["prayer had no effect on military outcomes.", "the Holy Lance was merely a symbol without power.", "only brute force decided battles."] },
          { start: "After the great victory on the Lechfeld, my troops acclaimed me because",
          "correct": "God had granted us triumph over the enemies of Christendom; this success confirmed my right to rule and revived the imperial dignity of Charlemagne.",
            "wrong": ["the battle had no religious significance.", "acclamation by soldiers meant nothing for legitimacy.", "the victory was purely due to numbers or luck."] },
          { start: "I appointed loyal men from my own chapel and family as bishops because",
          "correct": "bishops must serve both God and the realm; by investing them with spiritual and temporal authority, I created reliable administrators who strengthened royal power against rebellious dukes.",
            "wrong": ["bishops should be chosen only by the clergy or pope.", "the church had no role in secular administration.", "appointing family members weakened the empire."] },
          { start: "When I received the imperial crown in Rome in 962, I understood that the emperor’s duty was to",
          "correct": "protect the church, restore order in Italy, and act as the defender of all Christendom, continuing the work begun by Charlemagne.",
            "wrong": ["the imperial title was empty and ceremonial.", "Italy should be left to its own rulers.", "the pope held superior authority over the emperor."] }
        ]
      },
      {
        name: "Otto III (Renovatio Imperii Romanorum)",
        emoji: "📜",
        quotes: [
          { start: "I pursued the Renovatio Imperii Romanorum because",
          "correct": "the empire should revive the glory and universal Christian order of ancient Rome, blending German, Roman, and Byzantine elements under divine mandate.",
            "wrong": ["pure Germanic kingship was sufficient.", "Rome held no special symbolic importance.", "the empire should reject classical traditions."] },
          { start: "My policies in Rome and choice of advisors demonstrated that a young emperor could",
          "correct": "seek a universal Christian empire guided by piety, learning, and direct imperial authority over both secular and ecclesiastical spheres.",
            "wrong": ["focus only on German territories.", "ignore the symbolic power of Rome.", "reject any renewal of imperial ideals."] },
          { start: "I adopted the seal and bull with the inscription Renovatio Imperii Romanorum because",
          "correct": "the empire of the Romans must be renewed in its ancient dignity and Christian splendor, with Rome as its true capital and center of a universal Christian order.",
            "wrong": ["the old imperial title needed no renewal.", "Rome was only a symbolic city without real power.", "German traditions alone defined the empire."] },
          { start: "I chose learned men such as Gerbert of Aurillac as my teacher and later made him Pope Sylvester II because",
          "correct": "wisdom, classical knowledge, and piety must guide the emperor; a renewed Rome required scholars who understood both ancient learning and Christian reform.",
            "wrong": ["advisors should come only from Saxon nobility.", "learning had no place in imperial rule.", "the pope must be chosen without imperial influence."] },
          { start: "I built a palace on the Aventine Hill in Rome and resided there because",
          "correct": "the emperor belongs at the ancient heart of the empire; Rome must once again be the living capital where secular and spiritual power unite in harmony.",
            "wrong": ["the emperor should rule only from German lands.", "residing in Rome weakened German authority.", "a palace in Rome served no political purpose."] },
          { start: "In my charters and court I emphasized that I rule as",
          "correct": "Imperator Augustus by divine grace, continuing the work of the ancient Roman emperors and Charlemagne while creating a theocratic Christian empire guided by God.",
            "wrong": ["the imperial title was purely ceremonial.", "Byzantine and Roman models had no relevance.", "the empire remained a purely German kingdom."] }
        ]
      },
      {
        name: "Henry IV & the Investiture Controversy",
        emoji: "⚔️",
        quotes: [
          { start: "As anointed king I asserted my authority against Pope Gregory VII because",
          "correct": "kingship is a sacred office granted directly by God, and the emperor traditionally held rights over bishop appointments to preserve order in church and state.",
            "wrong": ["the pope alone could appoint or depose bishops.", "secular rulers had no role in spiritual affairs.", "excommunication automatically ended royal legitimacy."] },
          { start: "My journey to Canossa in 1077 revealed that even an emperor must sometimes",
          "correct": "humble himself before the church to restore peace and legitimacy, while defending the proper balance between royal and priestly power.",
            "wrong": ["royal power was completely absolute with no need for compromise.", "penance had purely religious but no political meaning.", "the controversy concerned only religion with no power struggle."] },
          { start: "Henry, king not through usurpation but through the holy ordination of God, to Hildebrand, at present not pope but false monk, I wrote because",
          "correct": "the pope had overstepped by trying to depose anointed kings and interfere in imperial rights; only God grants and removes royal power, not the pope.",
            "wrong": ["the pope held supreme authority over all kings.", "bishops and priests owed no loyalty to the emperor.", "I had no right to challenge papal decisions."] },
          { start: "I declared together with our bishops that Gregory must",
          "correct": "descend from the apostolic chair which he had usurped, because he had trodden under foot the anointed rulers of the church and brought confusion instead of order.",
            "wrong": ["the pope could never be challenged by any king.", "lay rulers had no voice in church matters.", "my letter had no basis in tradition or law."] },
          { start: "I, Henry, king by the grace of God, with all my bishops say to you:",
          "correct": "descend, descend, to be damned throughout the ages — because the pope had disturbed the proper order between regnum (royal power) and sacerdotium (priestly power).",
            "wrong": ["this was merely personal anger with no deeper meaning.", "the conflict was only about appointing bishops.", "the emperor had no divine ordination."] },
          { start: "At Canossa in 1077, standing barefoot in the snow for three days, I performed penance because",
          "correct": "I sought absolution from excommunication to regain legitimacy and prevent my enemies in Germany from using the pope against me, while still defending the traditional rights of the crown.",
            "wrong": ["I fully surrendered royal authority to the pope.", "penance was unnecessary and showed weakness.", "the excommunication had no real political effect."] },
          { start: "In my oath at Canossa I promised that",
          "correct": "I would satisfy the grievances of the German princes and bishops according to the pope’s judgment or counsel, and guarantee safe passage and protection to Gregory if he came to Germany.",
            "wrong": ["I renounced all claims over church appointments forever.", "the oath had no binding force.", "I made no concessions at all."] }
        ]
      },
      {
        name: "Frederick I Barbarossa (Hohenstaufen Restorer)",
        emoji: "🛡️",
        quotes: [
          { start: "The kingdom and empire are ours by the election of the princes and by God alone, therefore",
          "correct": "imperial authority derives directly from God and the princes, not as a fief from the pope, enabling recovery of regalian rights and restoration of peace and Roman law.",
            "wrong": ["the pope held superior temporal authority over the emperor.", "election by princes had no divine foundation.", "Italian cities owed no duties to the emperor."] },
          { start: "I sought to recover rights and enforce peace because",
          "correct": "strong central authority, supported by feudal bonds and Roman law, was essential to limit powerful princes and rebellious communes.",
            "wrong": ["decentralized princely power strengthened the empire.", "Roman law was irrelevant in German lands.", "feudal oaths could be freely ignored."] },
          { start: "An emperor is subject to no one but",
          "correct": "God and justice; therefore I will restore the ancient rights and dignities of the empire, using Roman law as the foundation for just rule across all territories.",
            "wrong": ["the pope and the church alone.", "the princes and their private interests.", "military force without regard for law."] },
          { start: "At the Diet of Roncaglia in 1158, with the advice of learned doctors of Roman law, I decreed that",
          "correct": "all regalian rights — tolls, mints, markets, judicial authority, and other imperial prerogatives — belong to the emperor alone and have been unjustly usurped by cities and lords.",
            "wrong": ["the communes could freely keep all local rights.", "Roman law had no application in the empire.", "regalian rights were unimportant for imperial power."] },
          { start: "I issued the Land Peace because",
          "correct": "by the divine mercy that raised me to the throne, I must preserve divine and human laws, protect churches and the weak, and punish violence so that peace may reign throughout the realm.",
            "wrong": ["private feuds and wars strengthened noble power.", "enforcing peace was unnecessary for the empire.", "only military campaigns mattered."] },
          { start: "When dealing with rebellious cities like Milan and the Lombard communes, I understood that the emperor must",
          "correct": "assert the majesty of the empire and restore order through law and, when necessary, force, so that the ancient dignity of Rome and the unity of the realm could be revived.",
            "wrong": ["cities should enjoy complete independence.", "compromise with communes weakened the emperor.", "Roman imperial traditions had no relevance anymore."] },
          { start: "In my conflicts with the papacy I maintained that",
          "correct": "the empire receives its authority from God through the election of the princes, not as a benefice or fief from the pope; both regnum and sacerdotium must honor their proper spheres.",
            "wrong": ["the pope held ultimate authority over the emperor.", "the church and state should have no separation of powers.", "imperial rights in Italy were irrelevant."] }
        ]
      },
      {
        name: "Frederick II (Stupor Mundi – Lawgiver)",
        emoji: "📖",
        quotes: [
          { start: "In the Constitutions of Melfi (1231) I established that the emperor is",
          "correct": "the living law upon earth, deriving authority directly from God, with the imperial office as the sole source of temporal justice and centralized administration.",
            "wrong": ["feudal nobles should retain full independent power.", "Roman law had no place in imperial rule.", "the king/emperor held no superior legislative authority."] },
          { start: "My rule in Sicily and the empire showed that effective governance required",
          "correct": "a hierarchical administrative system, trained lay officials, and strong royal control to replace clerical officialdom and curb noble autonomy.",
            "wrong": ["traditional feudal fragmentation was preferable.", "the emperor should avoid centralizing power.", "knowledge and law held no strategic value."] },
          { start: "We, whom divine providence elevated beyond human hope to the pinnacle of the Roman Empire, have promulgated these laws because",
          "correct": "the emperor, as God’s vicar on earth, must provide for the common welfare, restrain the powerful, protect the weak, and ensure justice flows from the throne alone.",
            "wrong": ["the emperor ruled only for personal glory.", "feudal lords could administer justice independently.", "divine providence had no bearing on lawmaking."] },
          { start: "In the Kingdom of Sicily I decreed that no one may bear arms without royal license and that all justice must be rendered by",
          "correct": "royal magistrates alone, so that peace and order replace the chaos of private warfare and baronial courts.",
            "wrong": ["nobles could freely maintain private armies.", "trial by ordeal remained a valid method of justice.", "local customs should override royal law."] },
          { start: "I prohibited the sale of fiefs and ended subinfeudation because",
          "correct": "all fiefs ultimately belong to the crown; feudal fragmentation weakens the state, while centralized control ensures loyalty and effective administration.",
            "wrong": ["feudal sales strengthened the economy.", "vassals owed no direct taxes or service to the king.", "noble autonomy improved governance."] },
          { start: "Through these constitutions I replaced clerical officials with trained laymen because",
          "correct": "secular administration by professional officials loyal to the crown creates a more efficient and reliable system of government than reliance on churchmen with divided loyalties.",
            "wrong": ["the church should continue to dominate royal bureaucracy.", "lay officials lacked the necessary education.", "centralized administration weakened the monarchy."] },
          { start: "As emperor and king I understood that true authority demands",
          "correct": "the supremacy of written law, the abolition of trial by ordeal, equality before royal courts for all subjects, and the emperor’s role as the living source of justice.",
            "wrong": ["superstitious practices like ordeals strengthened faith.", "the emperor should defer to baronial privileges.", "law existed only to serve the nobility."] }
        ]
      },
      {
        name: "Charles IV (Golden Bull & Constitutional Order)",
        emoji: "⚖️",
        quotes: [
          { start: "In the Golden Bull of 1356 I decreed that the lands of the prince-electors must remain",
          "correct": "undivided and pass by primogeniture, so that the pillars of the empire would not collapse and elections could proceed without dangerous divisions.",
            "wrong": ["electors could freely divide their territories.", "the election process required no formal regulation.", "military strength alone guaranteed imperial unity."] },
          { start: "I ordained that electors and their heirs be instructed in languages and liberal arts because",
          "correct": "the emperor must govern diverse nations with different customs and tongues; the electors, as columns of the empire, needed wisdom to understand and be understood.",
            "wrong": ["cultural and linguistic differences were irrelevant to rule.", "the empire was culturally uniform.", "electors required no special education or preparation."] },
          { start: "Every realm that is divided internally will go to ruin because",
          "correct": "its princes become comrades of thieves; the Lord pours out the spirit of deceit so that they grope in darkness and bring about evil deeds which occur in disunity.",
            "wrong": ["division strengthened the princes.", "internal conflict had no effect on the empire.", "unity was unimportant for imperial stability."] },
          { start: "I have promulgated these laws for the purpose of",
          "correct": "cherishing unity among the electors, bringing about a unanimous election, and closing all approach to detestable discord and the various dangers that arise from it.",
            "wrong": ["increasing the power of the pope in elections.", "allowing contested elections to continue.", "granting complete independence to every prince."] },
          { start: "The seven electors are the columns and sides of the holy empire because",
          "correct": "through them, as through seven candlesticks, the empire ought to be illumined with the unity of a septiform spirit; when they are shaken, the whole edifice risks ruin.",
            "wrong": ["the electors held no special constitutional role.", "only military might supported the empire.", "the number of electors should remain flexible."] },
          { start: "I decreed that each elector must provide escort and safe-conduct to the others because",
          "correct": "free and secure travel to the election site prevents interference and ensures that the election of the king of the Romans proceeds according to ancient custom without fear or hindrance.",
            "wrong": ["electors could travel without protection.", "safe-conduct was unnecessary for imperial elections.", "hostile electors could block the process."] },
          { start: "Inasmuch as the majesty of the holy Roman empire has to wield the government of diverse nations distinct in customs, manner of life, and language, it is fitting that",
          "correct": "the prince electors, the columns of the empire, should be instructed in the Italian and Slavic tongues (in addition to German) from the age of seven so that they may understand and be understood by as many as possible.",
            "wrong": ["only Latin was needed for governance.", "language differences weakened rather than strengthened rule.", "the electors' heirs required no special preparation."] }
        ]
      },
      {
        name: "Maximilian I (Imperial Reformer)",
        emoji: "🏛️",
        quotes: [
          { start: "At the Diet of Worms in 1495 I proclaimed the Perpetual Public Peace because",
          "correct": "private feuds and wars must end; law and order, enforced through imperial institutions, are necessary to preserve the empire and defend Christendom.",
            "wrong": ["feuding strengthened noble independence.", "military force alone maintained internal peace.", "no common legal framework was needed."] },
          { start: "I introduced the Common Penny tax and supported the Imperial Chamber Court because",
          "correct": "the empire required new institutions and revenue to resist external enemies like the Turks and to administer justice across the territories.",
            "wrong": ["traditional feudal obligations sufficed for funding.", "central institutions weakened princely rights.", "reform distracted from warfare."] },
          { start: "We, Maximilian, Roman King by the grace of God, Conserver of the Empire for all ages, have seen that constant attacks are being made against Christendom because",
          "correct": "unbelievers now press right up to the boundaries of the Holy Empire; therefore a stable, binding condition of law and order must be established throughout the empire so that we may defend Christendom effectively.",
            "wrong": ["the Turkish threat was exaggerated.", "internal peace had no connection to external defense.", "only the emperor’s personal armies mattered."] },
          { start: "Following the unanimous counsel of the electors, princes, and Estates, We establish, ordain, and make this common peace because",
          "correct": "from this moment on, no person of whatever rank shall make war on others, rob, declare feud, invade, besiege, or assist such deeds; instead, every quarrel must be brought before the courts and tribunals.",
            "wrong": ["private feuds could continue under certain conditions.", "the right of self-defense by force remained unchanged.", "only nobles were bound by the peace."] },
          { start: "Whoever has a quarrel with another shall take his case to the courts because",
          "correct": "the regime of law and order must replace the old right of feud; only through impartial justice can the empire be preserved and its honor, population, and dignity maintained.",
            "wrong": ["courts were too slow and ineffective.", "feuding was a traditional noble right.", "the peace applied only during wartime."] },
          { start: "We have also established the Common Penny, a direct tax on every subject, because",
          "correct": "the empire needs reliable revenue to fund the new imperial institutions, the defense against the Turks, and the maintenance of public peace and justice.",
            "wrong": ["traditional contributions from the Estates were sufficient.", "a universal tax would weaken princely authority.", "no new revenue was necessary for reform."] },
          { start: "By creating the Imperial Chamber Court alongside the Perpetual Public Peace, I ensured that",
          "correct": "justice would be administered according to law, independent of private power, so that the strong could no longer oppress the weak and the empire could function as one body under orderly rule.",
            "wrong": ["the old feudal courts remained adequate.", "the emperor should control all justice personally.", "new courts would only create more conflict."] }
        ]
      },
      {
        name: "Knights & Chivalry",
        emoji: "⚔️",
        quotes: [
          { start: "A knight must defend the church, protect the weak, and uphold justice because",
          "correct": "chivalry combined martial skill with Christian duty: fidelity to oaths, mercy to the vulnerable, generosity, and service to God, lord, and lady.",
            "wrong": ["knights owed loyalty only to personal gain or lord.", "honor derived solely from battlefield glory.", "the church had no place in a warrior’s code."] },
          { start: "A knight’s oath binds him to respect weaknesses and constitute himself their defender because",
          "correct": "true courage requires performing feudal duties faithfully, never lying, showing mercy where appropriate, and fighting infidels without compromise when required.",
            "wrong": ["brute force alone defined knighthood.", "oaths could be broken for advantage.", "chivalry was purely secular without religious roots."] }
        ]
      },
      {
        name: "Scholars & Chroniclers (e.g. Otto of Freising)",
        emoji: "📖",
        quotes: [
          { start: "We chroniclers recorded the deeds of emperors and the history of the two cities because",
          "correct": "the empire and church together form part of God’s divine order on earth, restraining chaos; knowledge and philosophy guide rulers toward just governance.",
            "wrong": ["secular history had no relation to Christian faith.", "the empire faced immediate inevitable collapse.", "scholarship weakened practical imperial authority."] },
          { start: "Wisdom serves the empire because",
          "correct": "a ruler who balances force with justice, education, and awareness of both earthly and heavenly realms better maintains peace and legitimacy.",
            "wrong": ["armies and raw power alone preserved order.", "learning distracted rulers from governance.", "historical and philosophical reflection was unnecessary."] }
        ]
      },
      {
        name: "Administration, Faith & Unity",
        emoji: "🕯️",
        quotes: [
          { start: "The Holy Roman Empire endured because its rulers understood that legitimate power required",
          "correct": "a balance of princely election, often papal coronation, feudal loyalties, Christian legitimacy, and adaptation to diverse laws and territories.",
            "wrong": ["absolute hereditary rule like in France.", "complete rejection of papal involvement.", "pure military dominance without supporting institutions."] },
          { start: "Despite periods of fragmentation, the empire preserved",
          "correct": "Roman legal traditions, chivalric ideals, scholarly continuity, and the ideal of a universal Christian order that shaped later European institutions.",
            "wrong": ["it was never a real empire.", "its 1806 dissolution erased all lasting influence.", "Christian faith played no structural role in its longevity."] }
        ]
      },
      {
        name: "Decline & Legacy",
        emoji: "📜",
        quotes: [
          { start: "The empire’s gradual decentralization showed that",
          "correct": "while strong personal leadership and institutions could unify it temporarily, competing princely interests, external pressures, and evolving European states ultimately limited central authority.",
            "wrong": ["it was weak from its founding under Charlemagne.", "military defeats alone caused its end.", "no meaningful institutions or ideals survived."] },
          { start: "Even as the empire dissolved in 1806, its legacy demonstrated that",
          "correct": "the ideal of a Christian universal empire, Roman law, and constitutional experiments like the Golden Bull influenced modern concepts of federalism, law, and European order.",
            "wrong": ["it left no intellectual or legal heritage.", "the empire was purely destructive or irrelevant.", "faith and scholarship had no enduring impact."] }
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
          { start: "I, Hammurabi, the exalted prince who feared the gods, established these laws so that",
          "correct": "the strong should not harm the weak, justice would appear in the land, and the well-being of mankind would be furthered.",
            "wrong": ["only the elite would benefit.", "punishment would be arbitrary.", "the gods would be ignored."] },
          { start: "When Marduk sent me to rule over men and give the protection of right to the land, I did right and righteousness because",
          "correct": "a king must bring about the rule of righteousness, destroy the wicked, and protect widows and orphans.",
            "wrong": ["military conquest alone sufficed.", "personal power was the goal.", "laws should remain secret."] },
          { start: "I set up my stele with these precious words before my image as king of righteousness so that",
          "correct": "the oppressed who have a case at law could come, read the inscription, understand what is just, and calm their heart.",
            "wrong": ["only priests could interpret the law.", "it served purely as decoration.", "punishments would frighten everyone."] },
          { start: "The laws I inscribed demonstrate that justice must be",
          "correct": "clear, public, and proportional, applying across social classes while maintaining order in the realm.",
            "wrong": ["hidden from the people.", "based solely on fear.", "rigid and unchanging in every detail."] }
        ]
      },
      {
        name: "Nebuchadnezzar II (Builder & Restorer)",
        emoji: "🏛️",
        quotes: [
          { start: "I, Nebuchadnezzar, laid the foundations of the Ishtar Gate and its walls with blue stone and adorned them with bulls and dragons because",
          "correct": "I magnificently adorned them with luxurious splendor for all mankind to behold in awe and to glorify Marduk.",
            "wrong": ["purely for military defense.", "to show personal wealth alone.", "without religious purpose."] },
          { start: "I built the strong outer wall of Babylon with bitumen and baked bricks, laying its foundation on the breast of the netherworld and raising its top as high as a mountain, so that",
          "correct": "the fortifications of Esagila and Babylon would be strengthened and the name of my reign established forever.",
            "wrong": ["the city needed no defenses.", "it was only symbolic.", "trade would suffer."] },
          { start: "My extensive building projects—temples, ziggurats like Etemenanki, and canals—served to",
          "correct": "restore ancient sanctuaries as they were of yore, provide for the gods, and demonstrate the prosperity and divine favor of Babylon.",
            "wrong": ["waste resources on vanity.", "ignore the gods.", "focus solely on conquest."] },
          { start: "I had the widespread people undertake labor for Etemenanki and other works because",
          "correct": "Marduk granted me dominion over them, and such projects honored the gods while showcasing Babylonian organizational power and resources.",
            "wrong": ["forced labor had no greater purpose.", "the ziggurat was unimportant.", "it weakened the empire."] }
        ]
      },
      {
        name: "Priests & Astronomers",
        emoji: "🕯️",
        quotes: [
          { start: "The stars and celestial phenomena recorded in the Enuma Anu Enlil series reveal omens because",
          "correct": "the gods Anu, Enlil, and Ea designed the heavens, and careful observation allows the wise to interpret divine will for kings and the land.",
            "wrong": ["fate is unchangeable and random.", "only military signs matter.", "prayer alone suffices without study."] },
          { start: "Prayer to Marduk, Shamash, or the gods of the night, combined with astronomical observation, maintains",
          "correct": "balance between human action and divine order, guiding decisions on war, agriculture, and kingship.",
            "wrong": ["fear of the gods alone.", "pure scientific curiosity without ritual.", "glory for the king without piety."] },
          { start: "Babylonian scribes and priests compiled thousands of celestial omens and mathematical tables because",
          "correct": "accurate prediction of lunar phases, eclipses, and planetary movements served both practical administration and religious divination.",
            "wrong": ["it was mere superstition.", "no mathematical rigor existed.", "it had no political value."] }
        ]
      },
      {
        name: "Merchants & Economic Life",
        emoji: "💰",
        quotes: [
          { start: "Babylonian merchants (tamkarum) conducted long-distance trade in textiles, grain, and luxury goods because",
          "correct": "control of routes, fair regulations in the law code, and tribute from subject regions created a prosperous economy supporting the empire.",
            "wrong": ["trade was insignificant.", "force replaced commerce.", "the economy relied only on agriculture."] },
          { start: "The Code of Hammurabi regulated contracts, loans, and commerce so that",
          "correct": "transactions would be orderly, disputes minimized, and the strong prevented from oppressing traders or debtors.",
            "wrong": ["merchants operated without rules.", "trade discouraged stability.", "only royal wealth mattered."] },
          { start: "Tribute and taxes from conquered territories, combined with internal production and trade tolls, allowed Babylon to",
          "correct": "fund massive building projects, maintain temples, and sustain a complex urban society with specialized labor.",
            "wrong": ["create constant resentment without benefit.", "ignore economic planning.", "rely solely on plunder."] }
        ]
      },
      {
        name: "Babylonian Religion & Ideology",
        emoji: "🕯️",
        quotes: [
          { start: "The king was seen as the representative of Marduk, who commissioned him to rule, because",
          "correct": "royal authority derived from divine mandate, making conquest, justice, and building acts of piety that upheld cosmic order.",
            "wrong": ["religion had no political role.", "the king ruled by force alone.", "gods were irrelevant to governance."] },
          { start: "Tolerance of local cults while elevating Marduk and restoring temples demonstrated that",
          "correct": "Babylonian rule integrated diverse peoples by honoring their gods (as long as supremacy was acknowledged), ensuring stability.",
            "wrong": ["forced conversion was the norm.", "religious suppression built loyalty.", "piety served no strategic purpose."] },
          { start: "Inscriptions and prayers, such as those invoking Shamash as the just judge or Marduk as creator, served to",
          "correct": "legitimize the king's actions, record achievements for posterity, and seek divine favor for the prosperity of the land.",
            "wrong": ["purely ceremonial without impact.", "only for historical record.", "no connection to daily rule."] }
        ]
      },
      {
        name: "Babylonian Legacy & Administration",
        emoji: "📜",
        quotes: [
          { start: "The preservation of knowledge through libraries, scribal training, and cuneiform records showed that Babylonian rulers understood",
          "correct": "administration of a vast empire required written laws, economic accounts, astronomical data, and literary texts for continuity.",
            "wrong": ["knowledge was unimportant.", "oral tradition alone sufficed.", "scribes had no status."] },
          { start: "Babylon's greatness under kings like Hammurabi and Nebuchadnezzar lay in combining",
          "correct": "law, monumental architecture, trade networks, and celestial science to create a sophisticated civilization that influenced later empires.",
            "wrong": ["military power alone.", "pure religious ritual.", "no lasting cultural impact."] },
          { start: "Even after political shifts, the Babylonian tradition of scholarship endured because",
          "correct": "texts on law, astronomy, and literature were copied and studied, transmitting knowledge to Persians, Greeks, and beyond.",
            "wrong": ["the empire left no intellectual legacy.", "all knowledge was lost.", "it had purely local value."] }
        ]
      },
      {
        name: "Nabopolassar & Nabonidus (Founders & Later Kings)",
        emoji: "🏛️",
        quotes: [
          { start: "As Nabopolassar, I pleased the hearts of Nabû and Marduk when I",
          "correct": "restored the walls of Babylon and strengthened the sanctuaries, laying foundations for the empire's renewed greatness.",
            "wrong": ["ignored the gods in favor of conquest.", "focused only on personal power.", "neglected the city's defenses."] },
          { start: "Nabonidus declared that Sin showed him a dream commanding him to rebuild Ehulhul because",
          "correct": "kings must obey divine signs and restore ancient temples, even distant ones, to secure the favor of the gods for the land.",
            "wrong": ["dreams and omens had no political meaning.", "temple restoration was wasteful.", "the gods never communicated with rulers."] }
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
          { start: "I expanded the Assyrian Empire through relentless military campaigns by understanding that",
          "correct": "successive conquests could not only add territory but also establish Assyria as a feared power that would be difficult to challenge.",
            "wrong": ["single massive conquest.", "no real strategy.", "pure military force alone."] },
          { start: "The establishment of Assyrian military superiority required creating a professional standing army because",
          "correct": "an empire of such size needed forces that could be mobilized quickly and coordinated effectively across vast distances.",
            "wrong": ["militia forces were sufficient.", "no real organization.", "conscription alone."] },
          { start: "My construction of a new capital at Kalhu (Nimrud) and the palaces within it served to demonstrate that",
          "correct": "Assyrian power was permanent, that resources were being accumulated, and that the king controlled wealth and labor.",
            "wrong": ["purely ceremonial.", "no practical purpose.", "only for the king's pleasure."] },
          { start: "The detailed recording of my military campaigns on palace reliefs and in texts served to",
          "correct": "proclaim achievements to subjects and enemies, establish the king's historical record, and demonstrate that Assyrian power was irresistible.",
            "wrong": ["purely artistic.", "no real communication.", "no strategic purpose."] },
          { start: "The use of terror—the deportation of conquered populations, the execution of rebels, the flaying of enemies—served the strategic purpose of",
          "correct": "discouraging rebellion, demonstrating Assyrian power, and making the cost of resistance so high that compliance seemed rational.",
            "wrong": ["purely sadistic.", "no real strategy.", "counterproductive cruelty."] },
          { start: "The organization of the empire into provinces with appointed governors meant that the king could",
          "correct": "maintain direct control from the capital rather than relying on vassal kings who might pursue their own interests.",
            "wrong": ["purely centralized oppression.", "no real benefit.", "invited rebellion."] }
        ]
      },
      {
        name: "Sargon II (Administration & Conquest)",
        emoji: "⚔️",
        quotes: [
          { start: "My conquest of the northern kingdom of Israel and the deportation of its population demonstrated that",
          "correct": "no kingdom could resist Assyrian military power and that defiance would result in destruction and exile.",
            "wrong": ["pure brutality without purpose.", "no strategic value.", "counterproductive."] },
          { start: "The construction of a new capital at Dur-Sharrukin and the establishment of new administrative centers served to",
          "correct": "consolidate power, demonstrate resources, and establish control over newly conquered territories.",
            "wrong": ["purely ceremonial.", "wasteful expenditure.", "no real benefit."] },
          { start: "My military campaigns against the Urartu kingdom and other rivals required understanding that",
          "correct": "maintaining Assyrian dominance meant constant military action to prevent rivals from building sufficient power to challenge Assyria.",
            "wrong": ["unnecessary warfare.", "no real threat.", "purely aggressive."] },
          { start: "The recruitment of soldiers from conquered territories into the Assyrian army served to",
          "correct": "augment military forces, create incentives for loyalty by allowing advancement, and disperse potentially rebellious populations.",
            "wrong": ["purely exploitative.", "unreliable forces.", "no real benefit."] },
          { start: "The maintenance of Assyrian power required that my successors understand that an empire built on fear and military dominance needs",
          "correct": "continuous military success and the demonstration of strength, or rivals will begin to challenge Assyrian authority.",
            "wrong": ["purely military rule.", "no real complexity.", "simple oppression."] }
        ]
      },
      {
        name: "Sennacherib (Assimilation & Infrastructure)",
        emoji: "🏛️",
        quotes: [
          { start: "I understood that Assyrian power required not only military dominance but also the development of infrastructure because",
          "correct": "roads, water systems, and administrative centers allowed the empire to function and resources to be mobilized.",
            "wrong": ["purely military concerns.", "infrastructure was unimportant.", "no real benefit."] },
          { start: "The expansion of Nineveh into one of the ancient world's greatest cities served to demonstrate that",
          "correct": "Assyrian resources were immense, that the king controlled wealth and labor, and that Assyrian civilization was sophisticated.",
            "wrong": ["purely ceremonial.", "wasteful expenditure.", "only for the king."] },
          { start: "My famous library at Nineveh, which preserved cuneiform texts on a vast range of subjects, was established because rulers understood that",
          "correct": "controlling knowledge and preserving texts served both practical (administrative, technical) and propagandistic (showing Assyrian sophistication) purposes.",
            "wrong": ["purely scholarly interest.", "no political value.", "wasteful collection."] },
          { start: "The military failure against Jerusalem, despite the city's vulnerability, showed that even a powerful king could not always achieve success and that",
          "correct": "factors including leadership, morale, unexpected events, and resistance could sometimes prevent conquest.",
            "wrong": ["Assyrian weakness was revealed.", "no real significance.", "purely accidental."] },
          { start: "My reign demonstrated that successful Assyrian rulers understood that military conquest had to be followed by",
          "correct": "administration, infrastructure development, the establishment of order, and sometimes the incorporation of local populations into the empire.",
            "wrong": ["purely military rule.", "no follow-up needed.", "pure domination."] }
        ]
      },
      {
        name: "Ashurbanipal (Culture & Administration)",
        emoji: "📚",
        quotes: [
          { start: "I am remembered not only as a military conqueror but also as a patron of learning and culture because I understood that",
          "correct": "an empire's greatness lay not only in military dominance but in the sophistication of its culture and administration.",
            "wrong": ["purely military achievement.", "culture was irrelevant.", "only conquest mattered."] },
          { start: "The expansion of Sennacherib's library into one of the most comprehensive collections of cuneiform texts was possible because I",
          "correct": "commissioned the copying of texts, gathered texts from across the empire, and established a systematic archive of human knowledge.",
            "wrong": ["purely individual achievement.", "no organization.", "random collection."] },
          { start: "My military campaigns extended Assyrian territory to its greatest extent, demonstrating that",
          "correct": "an Assyrian king who could mobilize resources and organize military campaigns could achieve conquest across vast distances.",
            "wrong": ["absolute military invincibility.", "no limits to power.", "conquest was easy."] },
          { start: "The conquest of Egypt, the most distant of my campaigns, required understanding that",
          "correct": "the logistics of supplying armies across such distances, maintaining communication, and securing conquered territory were as important as military victory.",
            "wrong": ["pure military force.", "no real strategy.", "easy victory."] },
          { start: "The decline of Assyrian power after my death shows that an empire dependent on continuous military expansion and strong personal leadership faced challenges when",
          "correct": "a weaker successor took the throne, rivals sensed opportunity, and the empire began to fragment.",
            "wrong": ["purely inevitable decline.", "no real weakness.", "sudden collapse."] },
          { start: "My patronage of scholarship, the arts, and the preservation of knowledge created a legacy that transcended military conquest, as these texts would influence future civilizations including",
          "correct": "the Persian, Greek, Islamic, and modern worlds.",
            "wrong": ["no real legacy.", "purely local impact.", "knowledge was lost."] }
        ]
      },
      {
        name: "Assyrian Military Organization & Strategy",
        emoji: "⚔️",
        quotes: [
          { start: "The Assyrian military achieved dominance through a combination of cavalry, chariotry, and infantry because",
          "correct": "different unit types could work together—cavalry for rapid movement and pursuit, chariots for impact, infantry for holding territory.",
            "wrong": ["single unit type was sufficient.", "no real coordination.", "numerical superiority alone."] },
          { start: "The use of siege warfare technology—battering rams, siege towers, sappers—by Assyrian forces allowed them to",
          "correct": "breach city fortifications that would otherwise have provided protection against field armies.",
            "wrong": ["no real innovation.", "purely brute force.", "ineffective."] },
          { start: "The organization of the Assyrian army into professional units with appointed commanders meant that",
          "correct": "the king could field large armies that could be coordinated, could follow complex strategies, and could operate across vast distances.",
            "wrong": ["militia forces.", "lack of coordination.", "no real organization."] },
          { start: "The rapid communication systems used by Assyrian commanders, including mounted messengers and signal systems, allowed for",
          "correct": "coordination of military campaigns across distances and the ability to adjust strategy based on new information.",
            "wrong": ["no real communication.", "purely on-site command.", "isolation of units."] },
          { start: "The Assyrian practice of maintaining garrison forces in conquered cities served to",
          "correct": "prevent rebellion, maintain control, demonstrate Assyrian presence, and provide a base for further campaigns.",
            "wrong": ["purely oppressive.", "invited rebellion.", "wasteful."] },
          { start: "The logistics required to supply large Assyrian armies across vast distances required that the empire establish",
          "correct": "supply depots, roads, administrative systems to requisition food and materials, and the coordination of resources across provinces.",
            "wrong": ["purely military organization.", "no real complexity.", "armies fed themselves."] }
        ]
      },
      {
        name: "Assyrian Administration & Governance",
        emoji: "⚖️",
        quotes: [
          { start: "The Assyrian system of governance required establishing appointed governors in conquered territories because the king could not personally oversee such vast empire and because",
          "correct": "appointed officials loyal to the king would implement royal policy rather than pursuing their own interests.",
            "wrong": ["decentralization was impossible.", "vassal kings were acceptable.", "no real organization."] },
          { start: "The deportation policy implemented by Assyrian kings served strategic purposes including preventing rebellion by breaking up ethnic and cultural communities, dispersing potentially rebellious populations, and",
          "correct": "redistributing populations to areas where they could provide labor and ensure that no region remained a power base for resistance.",
            "wrong": ["purely sadistic.", "no real strategy.", "counterproductive."] },
          { start: "The collection of tribute from vassal states and conquered kingdoms provided the Assyrian treasury with resources that could be used for",
          "correct": "military campaigns, building projects, administrative expenses, and gifts to secure loyalty.",
            "wrong": ["purely accumulation.", "no real use.", "wasteful."] },
          { start: "The Assyrian approach to subject peoples required that rulers understand that",
          "correct": "brutal repression of rebellion deterred future resistance, but reasonable treatment of compliant subjects ensured stability and allowed resources to be extracted without constant military presence.",
            "wrong": ["pure terror was sufficient.", "no real strategy.", "people always rebel."] },
          { start: "The maintaining of order in the empire required establishing a system of justice and law that",
          "correct": "applied consistently across the empire, punished violations, and created the perception that Assyrian rule was orderly and predictable.",
            "wrong": ["arbitrary rule.", "no real system.", "only fear mattered."] }
        ]
      },
      {
        name: "Assyrian Diplomacy & Foreign Relations",
        emoji: "🌍",
        quotes: [
          { start: "The Assyrian approach to other kingdoms included a spectrum from complete conquest to tributary relationships to diplomatic equals, depending on",
          "correct": "the relative power of the other kingdom, Assyria's military capabilities at the moment, and the strategic value of the relationship.",
            "wrong": ["only conquest.", "no flexibility.", "all or nothing."] },
          { start: "The exchange of embassies and diplomatic correspondence by Assyrian kings served to",
          "correct": "communicate demands, negotiate tributary relationships, gather intelligence, and maintain relationships with distant powers.",
            "wrong": ["purely ceremonial.", "no real value.", "military communication only."] },
          { start: "The Assyrian alliance with Egypt against the Medes showed that even powerful rivals could recognize mutual interests and cooperate when facing a common threat, demonstrating that",
          "correct": "pragmatism and strategic calculation could override the typical pattern of Assyrian dominance and conquest.",
            "wrong": ["purely unexpected.", "Assyrian policy never changed.", "no real relationships."] },
          { start: "The Assyrian relationship with Babylonia alternated between conquest and coexistence because the region was valuable and powerful, requiring that Assyrian kings understand",
          "correct": "that maintaining indefinite control over Babylonia required either continuous military presence or accommodation of Babylonian interests.",
            "wrong": ["purely military control.", "no diplomatic need.", "simple conquest."] }
        ]
      },
      {
        name: "Assyrian Religion & Ideology",
        emoji: "🕯️",
        quotes: [
          { start: "The Assyrian religious system, centered on the god Ashur, reinforced royal authority because the king was understood as",
          "correct": "the representative of Ashur and the executor of divine will, making the king's conquest and rule appear divinely sanctioned.",
            "wrong": ["purely ceremonial.", "no political value.", "no real beliefs."] },
          { start: "The inscription of the king's deeds on palace reliefs and in texts served religious purposes including demonstrating that",
          "correct": "the gods favored the king and that conquest and building were evidence of divine support.",
            "wrong": ["purely military propaganda.", "no religious function.", "only for historical record."] },
          { start: "The religious justification for Assyrian conquest and the imposition of Assyrian rule on other peoples created an ideology where",
          "correct": "submission to Assyria was understood as submission to divine order and Assyrian dominance as reflecting cosmic hierarchy.",
            "wrong": ["purely military domination.", "no religious justification.", "no ideology."] },
          { start: "The tolerance of local religions and gods by Assyrian rulers, as long as Assyrian supremacy was acknowledged, served to",
          "correct": "integrate conquered peoples into the empire while maintaining religious legitimacy among diverse populations.",
            "wrong": ["forced conversion.", "religious suppression.", "religious tolerance only."] }
        ]
      },
      {
        name: "Assyrian Art & Culture",
        emoji: "🎨",
        quotes: [
          { start: "The distinctive Assyrian artistic style—depicting scenes of hunting, warfare, ritual, and royal power—served purposes including communicating royal authority, demonstrating resources, and",
          "correct": "telling stories of conquest and achievement that proclaimed Assyrian dominance and the king's hunting prowess.",
            "wrong": ["purely aesthetic.", "no real communication.", "purely decorative."] },
          { start: "The construction of palaces decorated with relief sculptures showing the king's achievements served to reinforce that",
          "correct": "the king was the center of power, that he controlled resources and labor, and that Assyrian civilization was sophisticated.",
            "wrong": ["purely artistic expression.", "no real purpose.", "unnecessary decoration."] },
          { start: "The Assyrian adoption of Babylonian cultural elements—language, literature, religion—while maintaining military dominance showed that",
          "correct": "Assyria, though militaristically dominant, recognized the cultural sophistication of Babylon and could absorb influences while maintaining political supremacy.",
            "wrong": ["Assyrian culture was inferior.", "no real adoption.", "purely imposition of culture."] },
          { start: "The training and status of scribes in Assyrian civilization served both practical and cultural purposes: maintaining administrative records, composing royal inscriptions, and",
          "correct": "preserving knowledge through texts, making scribes essential to both governance and the transmission of civilization.",
            "wrong": ["purely administrative.", "no cultural value.", "no real importance."] }
        ]
      },
      {
        name: "Assyrian Decline & Fall",
        emoji: "📜",
        quotes: [
          { start: "The fall of the Assyrian Empire came from a combination of factors: the weakness of late Assyrian kings, the rise of the Medes and Babylonians as rivals, and",
          "correct": "the fragmentation of Assyrian military and political unity that had been maintained only through continuous strong leadership.",
            "wrong": ["single military defeat.", "inevitable collapse.", "purely external conquest."] },
          { start: "The rapid destruction of Nineveh and the complete destruction of Assyrian power by 609 BCE demonstrated that",
          "correct": "an empire built primarily on military dominance and fear, without deep roots in the population or stable institutions, could collapse quickly when military power failed.",
            "wrong": ["weak empire from the start.", "no real power.", "inevitable decline."] },
          { start: "The final years of the Assyrian Empire, with Assyrian forces fighting defensive campaigns and losing territory, showed that",
          "correct": "even the greatest military powers cannot maintain dominance indefinitely when facing determined rivals with comparable resources.",
            "wrong": ["Assyrian weakness was always present.", "no real threat emerged.", "purely internal."] },
          { start: "The legacy of Assyria included the demonstration that a militarily sophisticated empire with advanced administration and infrastructure could dominate vast territories, but also that",
          "correct": "empires built primarily on fear and military force, without deeper cultural or social bonds with subject peoples, were vulnerable to collapse.",
            "wrong": ["no real legacy.", "purely destructive power.", "no civilization."] },
          { start: "The Assyrian Library at Nineveh, preserved through the empire's destruction, created a legacy of knowledge that would influence the Persian, Greek, and future civilizations, showing that",
          "correct": "cultural and intellectual achievements could transcend military and political collapse.",
            "wrong": ["purely lost.", "no real value.", "destroyed with the empire."] }
        ]
      },
      {
        name: "Assyrian Scribes & Intellectual Life",
        emoji: "📜",
        quotes: [
          { start: "Assyrian scribes held high status in society and served crucial functions including maintaining administrative records, composing royal inscriptions, and",
          "correct": "preserving literary and scholarly texts from Assyria and Babylonia, making them essential to both governance and culture.",
            "wrong": ["purely administrative.", "no real authority.", "no cultural importance."] },
          { start: "The Assyrian practice of copying and preserving Babylonian literary works, particularly the Epic of Gilgamesh, shows that Assyrian rulers understood that",
          "correct": "controlling and preserving prestigious texts and knowledge enhanced the prestige of the kingdom and created cultural legitimacy.",
            "wrong": ["purely literary interest.", "no political value.", "unnecessary expense."] },
          { start: "The composition of royal inscriptions, which recorded the king's deeds, campaigns, and achievements, served purposes including historical record, religious justification, and",
          "correct": "propaganda that proclaimed Assyrian power and success to both subjects and enemies.",
            "wrong": ["purely historical record.", "no political purpose.", "no real audience."] },
          { start: "The development of cuneiform administrative systems that could record complex information about taxes, tribute, military organization, and personnel showed that",
          "correct": "Assyria had a sophisticated bureaucracy capable of managing vast empire through written records.",
            "wrong": ["no real administration.", "purely ceremonial.", "no real organization."] }
        ]
      },
      {
        name: "Assyrian Economic Systems & Trade",
        emoji: "💰",
        quotes: [
          { start: "The Assyrian economy was based on conquest and the extraction of tribute because the empire maintained military forces and built infrastructure through",
          "correct": "the wealth taken from conquered territories, taxes levied on subject peoples, and the control of valuable resources.",
            "wrong": ["purely agricultural wealth.", "internal production alone.", "no real economy."] },
          { start: "The control of trade routes and valuable resources by Assyrian territories meant that",
          "correct": "merchants conducting trade had to pay tolls and taxes to Assyrian authorities, providing revenue for the empire.",
            "wrong": ["trade was discouraged.", "no real revenue.", "purely military concerns."] },
          { start: "The exploitation of subject peoples through taxation and forced labor served to enrich the Assyrian heartland and provide resources for military campaigns, but also created",
          "correct": "resentment and the constant threat of rebellion that required military garrisons and the periodic use of brutal force.",
            "wrong": ["no real resistance.", "people accepted happily.", "no real resentment."] },
          { start: "The Assyrian accumulation of tribute and goods from across the empire created wealth that allowed rulers to demonstrate power through building projects, but this system was vulnerable to",
          "correct": "collapse if military power failed and conquered peoples could revolt.",
            "wrong": ["purely stable.", "no real vulnerability.", "permanent system."] }
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
          { start: "A Maya king's authority came from his role as intermediary between the human and divine worlds because the people believed that",
          "correct": "the king could communicate with the gods and ensure the continuation of cosmic cycles necessary for survival.",
            "wrong": ["purely political power.", "military force alone.", "no religious role."] },
          { start: "The construction of temple-pyramids and palaces served to demonstrate that a king possessed", "correct": "the ability to command vast labor forces, accumulate resources, and establish a lasting monument to his divine authority.",
            "wrong": ["purely ceremonial.", "no real purpose.", "only for priests."] },
          { start: "Maya kings conducted rituals including bloodletting (auto-sacrifice) because they believed that",
          "correct": "the shedding of royal blood sustained the cosmos and ensured the continued motion of celestial bodies.",
            "wrong": ["purely superstitious.", "no real belief.", "purely ceremonial."] },
          { start: "The warfare conducted between Maya city-states served multiple purposes: capturing enemies for sacrifice, acquiring tribute, and",
          "correct": "establishing dominance and the prestige of the king and his city.",
            "wrong": ["purely conquest for territory.", "no other purposes.", "random aggression."] },
          { start: "A successful Maya king demonstrated his power through commissioning inscriptions on stelae and altars recording his victories, ancestry, and divine connections because",
          "correct": "these texts proclaimed his achievements, legitimized his rule, and ensured his memory would endure.",
            "wrong": ["purely for display.", "no real purpose.", "no actual communication."] },
          { start: "The organization of Maya kingdoms into city-states meant that a king's power extended primarily over",
          "correct": "his immediate urban center and surrounding territory, with influence but not direct control over other city-states.",
            "wrong": ["vast empires.", "centralized control.", "no real limitation."] },
          { start: "The decline and abandonment of major Maya cities in the Classic period showed that even sophisticated rulers could not prevent",
          "correct": "the collapse of their kingdoms when facing environmental stress, warfare, or the breakdown of trade networks.",
            "wrong": ["purely military defeat.", "inevitable fate.", "weakness from the start."] }
        ]
      },
      {
        name: "Maya Astronomy & Calendar Systems",
        emoji: "🌌",
        quotes: [
          { start: "The Maya development of the Long Count calendar—a system counting days from a base date in 3114 BCE—demonstrated that",
          "correct": "Maya astronomers possessed sophisticated mathematical and chronological knowledge.",
            "wrong": ["purely mythological.", "no real accuracy.", "no practical value."] },
          { start: "The accuracy of Maya astronomical predictions, including solar and lunar eclipses, came from",
          "correct": "centuries of careful observation, record-keeping, and the development of mathematical models of celestial motion.",
            "wrong": ["purely spiritual knowledge.", "luck and chance.", "no real science."] },
          { start: "The 260-day tzolkin (sacred calendar) and the 365-day haab' (solar calendar) worked together in a 52-year cycle because Maya priests understood that",
          "correct": "this combined system tracked both ritual time and seasonal time, essential for agriculture and religious ceremonies.",
            "wrong": ["purely arbitrary.", "no real function.", "no practical value."] },
          { start: "The importance of astronomical knowledge to Maya rulers came from the belief that",
          "correct": "understanding and predicting celestial events demonstrated the king's connection to divine forces and his ability to maintain cosmic order.",
            "wrong": ["purely ceremonial.", "no real power.", "no actual benefit."] },
          { start: "The Maya creation myth, encoded in the Popol Vuh and reflected in astronomical knowledge, linked the movements of Venus to events in the divine realm because",
          "correct": "Maya cosmology understood the sky as the domain where divine forces operated and where the gods could communicate with humans.",
            "wrong": ["purely mythological.", "no real beliefs.", "no connection to astronomy."] }
        ]
      },
      {
        name: "Maya Writing & Intellectual Achievement",
        emoji: "📜",
        quotes: [
          { start: "The Maya development of a complete writing system—including logograms and phonetic signs—was a major intellectual achievement because it allowed for",
          "correct": "the recording of history, religious knowledge, administrative information, and literary works.",
            "wrong": ["purely decorative.", "no real function.", "no practical value."] },
          { start: "Maya scribes, who held high status in society and were often members of the royal family, served the crucial function of",
          "correct": "recording royal achievements, maintaining historical records, interpreting religious texts, and serving as advisors to kings.",
            "wrong": ["purely ceremonial positions.", "no real authority.", "no influence."] },
          { start: "The contents of Maya texts, recorded on stelae, altars, codices, and buildings, included information about rulers, dates, rituals, and",
          "correct": "astronomical observations, genealogies, and accounts of warfare and divine events.",
            "wrong": ["only religious content.", "no historical information.", "purely mythology."] },
          { start: "The preservation of Maya texts in codices (bound bark-paper books) allowed for the transmission of knowledge because these documents could",
          "correct": "record detailed information about astronomy, medicine, ritual, mathematics, and other fields of knowledge.",
            "wrong": ["no practical value.", "purely religious texts.", "no real information."] },
          { start: "The Maya mathematical system, using a base-20 (vigesimal) system and including the concept of zero, was used for",
          "correct": "astronomical calculations, calendar computations, and administrative record-keeping.",
            "wrong": ["purely theoretical.", "no practical application.", "inferior to other systems."] },
          { start: "The decipherment of Maya hieroglyphic writing in the 20th century revealed that Maya texts contained",
          "correct": "historical information, dynastic records, and accounts of real events, not merely mythological or religious content.",
            "wrong": ["purely religious texts.", "no historical value.", "only mythology."] }
        ]
      },
      {
        name: "Maya Architecture & Urban Planning",
        emoji: "🏛️",
        quotes: [
          { start: "The construction of monumental buildings at Maya cities—pyramids, palaces, temples—served to demonstrate that rulers possessed",
          "correct": "control over vast labor forces, access to resources, and the ability to organize and execute complex projects.",
            "wrong": ["purely religious purposes.", "no other function.", "ceremonial only."] },
          { start: "The arrangement of buildings around plazas at Maya cities served multiple purposes: religious ceremonies, public gatherings, markets, and",
          "correct": "the display of royal power and the integration of religious, civic, and administrative functions.",
            "wrong": ["purely military layout.", "no real planning.", "random arrangement."] },
          { start: "The sophisticated water management systems at Maya cities—reservoirs, canals, and drainage—show that builders understood",
          "correct": "the importance of controlling water in a tropical environment where rainfall was seasonal and unpredictable.",
            "wrong": ["no real engineering.", "purely ceremonial.", "no practical value."] },
          { start: "The use of corbelled (false) arches in Maya architecture, rather than true arches with keystones, reflects that",
          "correct": "Maya architects developed an engineering solution appropriate to their materials and technology.",
            "wrong": ["architectural limitation.", "inferior design.", "lack of knowledge."] },
          { start: "The decorative arts—sculpture, painting, stucco work—that adorned Maya buildings served to",
          "correct": "communicate religious and historical narratives, glorify rulers, and demonstrate the sophistication of Maya culture.",
            "wrong": ["purely aesthetic.", "no real communication.", "no practical value."] },
          { start: "The location of major Maya cities in the rainforest, often at considerable distances from each other, required that rulers establish",
          "correct": "trade networks, maintain roads and causeways, and establish relationships with other cities to ensure survival.",
            "wrong": ["isolation was common.", "no real contact.", "independent cities only."] }
        ]
      },
      {
        name: "Maya Agriculture & Environmental Knowledge",
        emoji: "🌾",
        quotes: [
          { start: "The Maya development of agriculture, including the domestication of maize, beans, and squash, required understanding that",
          "correct": "these three crops together provided balanced nutrition and that they could be grown together in the same field.",
            "wrong": ["purely random domestication.", "no real knowledge.", "simple farming only."] },
          { start: "The construction of terraces, raised fields, and reservoirs in the Maya landscape shows that farmers understood",
          "correct": "how to adapt agriculture to tropical soil conditions, manage water, and maximize yields in a challenging environment.",
            "wrong": ["no real innovation.", "primitive farming.", "no technological advancement."] },
          { start: "The population of major Maya cities required agricultural surplus because the urban population needed to be fed by",
          "correct": "the farmers of surrounding territories who produced more than they consumed.",
            "wrong": ["hunting and gathering alone.", "imported food.", "no real agriculture."] },
          { start: "The vulnerability of Maya civilization to drought shows that despite sophisticated agricultural knowledge, the civilization remained dependent on",
          "correct": "rainfall and was vulnerable to environmental stress when water supplies were disrupted.",
            "wrong": ["purely weak agriculture.", "no real knowledge.", "inevitable collapse."] },
          { start: "The Maya understanding of ecological relationships—the role of forests, wildlife, and water in maintaining fertility—is evident in their sustainable use of the landscape for",
          "correct": "millennia before environmental stress and social fragmentation contributed to the decline of Classic period cities.",
            "wrong": ["no real understanding.", "purely destructive farming.", "no sustainable practices."] }
        ]
      },
      {
        name: "Maya Religion & Cosmology",
        emoji: "🕯️",
        quotes: [
          { start: "The Maya cosmology, with its understanding of multiple creations and destructions of the world, provided a framework for understanding that",
          "correct": "the cosmos operated in cycles and that human ritual action could help sustain the current world.",
            "wrong": ["purely mythological.", "no real beliefs.", "random superstition."] },
          { start: "The concept of k'inich ('sun-faced'), applied to both the sun god and to rulers, served to link divine and royal power because it",
          "correct": "established the king as a solar figure who embodied divine authority.",
            "wrong": ["purely poetic.", "no real meaning.", "random terminology."] },
          { start: "The Maya religious emphasis on blood and water as life forces led to ritual practices including",
          "correct": "bloodletting ceremonies, the sacrifice of captives, and the ritual use of water in ceremonies.",
            "wrong": ["purely violent.", "no real belief.", "only for intimidation."] },
          { start: "The role of royal lineages in Maya cosmology meant that rulers were understood as embodying",
          "correct": "continuity with divine ancestors and as essential to maintaining the order of the cosmos.",
            "wrong": ["purely political legitimacy.", "no real beliefs.", "no religious significance."] },
          { start: "The Maya ball game (pitz), depicted in art and described in texts, held religious significance because it likely represented",
          "correct": "a symbolic enactment of cosmic forces and the struggle between creation and destruction.",
            "wrong": ["purely entertainment.", "no real meaning.", "only a sport."] },
          { start: "The relationship between Maya rulers and the divine realm was understood as reciprocal—the ruler maintained the cosmos through ritual, and the gods ensured that",
          "correct": "the crops grew, the rains came, and the kingdom prospered.",
            "wrong": ["purely one-directional.", "no real relationship.", "arbitrary will of gods."] }
        ]
      },
      {
        name: "Maya Warfare & Captive Taking",
        emoji: "⚔️",
        quotes: [
          { start: "Maya warfare, depicted in art and described in inscriptions, served purposes beyond territorial conquest: capturing enemies to be sacrificed, taking tribute, and",
          "correct": "establishing the military dominance of the victor and the prestige of the king.",
            "wrong": ["purely conquest for land.", "no other purposes.", "random violence."] },
          { start: "The practice of taking captives and holding them for sacrifice shows that Maya rulers understood warfare as having religious significance because",
          "correct": "the sacrifice of captives was believed to sustain the cosmos and ensure its continuation.",
            "wrong": ["purely cruel.", "no real purpose.", "only for terror."] },
          { start: "The concentration of captive-taking warfare in the Late Classic period, as reflected in inscriptions, suggests that",
          "correct": "the increasing need for captives for sacrifice may have reflected environmental or social stress and the rulers' need to appease the gods.",
            "wrong": ["purely random increase.", "no real reason.", "senseless violence."] },
          { start: "The alliance systems and vassal relationships described in Maya inscriptions show that warfare was sometimes about establishing dominance without conquest, requiring that",
          "correct": "defeated rulers accept subordinate status while retaining their thrones and territories.",
            "wrong": ["complete conquest and replacement.", "no real diplomacy.", "absolute destruction."] }
        ]
      },
      {
        name: "Maya Trade & Economic Systems",
        emoji: "💰",
        quotes: [
          { start: "The evidence of trade goods at Maya sites—obsidian from highlands, jade from specific sources, shells from coasts—demonstrates that",
          "correct": "Maya cities participated in extensive trade networks exchanging valued materials across the region.",
            "wrong": ["purely local trade.", "no external contact.", "isolated cities."] },
          { start: "The control of trade routes and valuable resources by powerful Maya cities gave rulers significant economic and political power because they could",
          "correct": "accumulate wealth, distribute goods to maintain loyalty, and establish relationships with distant cities.",
            "wrong": ["no real benefit.", "no political advantage.", "purely commercial."] },
          { start: "The development of merchant classes and trading guilds in Maya society suggests that successful merchants",
          "correct": "held important social positions and that commercial activity was organized and valued by the society.",
            "wrong": ["no real merchants.", "purely individual traders.", "no real commerce."] },
          { start: "The use of cacao as a medium of exchange in Maya society shows that this valuable product served both practical and economic purposes:",
          "correct": "it was consumed by elites, traded across long distances, and used in rituals.",
            "wrong": ["purely ceremonial.", "no real exchange value.", "no practical use."] }
        ]
      },
      {
        name: "Maya Society & Social Hierarchy",
        emoji: "🏛️",
        quotes: [
          { start: "Maya society was organized into distinct classes: the royal family and nobility, priests and scribes, merchants and craftspeople, farmers, and enslaved persons because",
          "correct": "this hierarchy allowed for specialization, coordination of large projects, and the accumulation and redistribution of wealth and resources.",
            "wrong": ["purely egalitarian.", "no real structure.", "random organization."] },
          { start: "The role of women in Maya society included serving as regents, advising rulers, managing households, and potentially conducting religious ceremonies because",
          "correct": "women of elite status held real power and responsibility despite overall male political dominance.",
            "wrong": ["women had no authority.", "purely domestic roles.", "no influence."] },
          { start: "The status of captured enemies as slaves showed that Maya society had a system where defeated individuals could be incorporated into society at the lowest level through",
          "correct": "enslavement, though some enslaved persons could eventually gain freedom.",
            "wrong": ["purely sacrificial.", "no other purpose.", "no integration."] },
          { start: "The concentration of authority and resources in the royal family meant that a ruler's children and relatives occupied positions of power, creating networks of",
          "correct": "kinship and obligation that could be mobilized for military, administrative, or religious purposes.",
            "wrong": ["purely ceremonial positions.", "no real power.", "equal opportunity."] }
        ]
      },
      {
        name: "Maya Art & Aesthetics",
        emoji: "🎨",
        quotes: [
          { start: "The distinctive Maya artistic style—featuring naturalistic human figures, complex compositions, and detailed iconographic elements—developed because",
          "correct": "artists worked within royal courts where they had access to resources and patrons who valued artistic excellence.",
            "wrong": ["purely spontaneous development.", "no real tradition.", "no patronage."] },
          { start: "The subjects of Maya art—including rulers, gods, battles, and mythological scenes—served to communicate",
          "correct": "religious narratives, historical events, and the divine authority of rulers.",
            "wrong": ["purely decorative.", "no real communication.", "purely aesthetic."] },
          { start: "The precision and sophistication of Maya sculpture, painting, and ceramic production indicate that",
          "correct": "Maya artists possessed technical mastery developed through training and the accumulation of knowledge across generations.",
            "wrong": ["primitive techniques.", "no real skill.", "purely spontaneous creation."] },
          { start: "The placement of artworks in temples, palaces, and tombs served to communicate the wealth, power, and divine connections of rulers and provided",
          "correct": "lasting records of royal achievements and family histories.",
            "wrong": ["purely decorative.", "no real communication.", "purely for the afterlife."] }
        ]
      },
      {
        name: "Maya Decline & Historical Significance",
        emoji: "📜",
        quotes: [
          { start: "The decline and abandonment of major Classic period Maya cities came from multiple factors: environmental stress (drought), warfare between cities, the breakdown of trade networks, and",
          "correct": "the fragmentation of political authority, which weakened the ability of rulers to organize society and maintain the religious and administrative systems.",
            "wrong": ["purely external conquest.", "single cause.", "inevitable collapse."] },
          { start: "The collapse of the Classic period Maya civilization by around 900 CE demonstrates that even sophisticated societies with advanced mathematics, astronomy, and writing systems are",
          "correct": "vulnerable to environmental stress and social fragmentation when these factors combine.",
            "wrong": ["purely weak civilization.", "no real achievement.", "inevitable failure."] },
          { start: "The survival of Maya civilization in the Yucatan Peninsula and the continuation of Maya culture despite the Classic period collapse shows that",
          "correct": "Maya culture, knowledge, and social structures adapted and persisted in new forms in the Post-Classic period.",
            "wrong": ["complete cultural destruction.", "no continuity.", "inevitable end."] },
          { start: "The legacy of the Maya civilization includes contributions to mathematics (zero, base-20 system), astronomy (accurate eclipse predictions), writing (complete writing system), and",
          "correct": "literature, art, architecture, and a cosmological worldview that influenced Central American civilizations.",
            "wrong": ["no real legacy.", "no actual contributions.", "purely regional impact."] },
          { start: "The study of Maya civilization demonstrates that the Americas developed sophisticated civilizations with complex cities, trade networks, mathematical and astronomical knowledge, and written systems",
          "correct": "independent of Old World influence, representing a parallel development of human civilization.",
            "wrong": ["Americas were primitive.", "no real civilization.", "inferior to Old World."] }
        ]
      },
      {
        name: "Maya Medicine & Healing Knowledge",
        emoji: "💊",
        quotes: [
          { start: "The Maya development of medical knowledge, preserved in texts and inferred from archaeological evidence, included understanding of",
          "correct": "herbal remedies, surgical procedures, and the use of bloodletting for both healing and ritual purposes.",
            "wrong": ["purely magical healing.", "no real knowledge.", "purely ceremonial."] },
          { start: "Maya medical practitioners, including those trained in the use of plants and surgical techniques, served both practical and spiritual purposes because illness was understood as having",
          "correct": "both physical and spiritual causes requiring treatment addressing both dimensions.",
            "wrong": ["purely supernatural causes.", "no real medicine.", "only spiritual healing."] },
          { start: "The discovery of trepanation (skull surgery) evidence among Maya skeletal remains indicates that",
          "correct": "Maya healers possessed surgical skill and the ability to perform dangerous operations with some degree of success.",
            "wrong": ["purely experimental.", "high mortality rates only.", "no real skill."] }
        ]
      },
      {
        name: "Maya Mathematical & Scientific Achievement",
        emoji: "🧮",
        quotes: [
          { start: "The Maya development of the concept of zero, independent of Old World mathematics, was a breakthrough that allowed for",
          "correct": "more efficient mathematical notation and the ability to perform complex calculations essential for astronomical work.",
            "wrong": ["purely theoretical.", "no practical value.", "not a real innovation."] },
          { start: "The accuracy of Maya astronomical predictions, including the determination that the tropical year was approximately 365.2420 days (remarkably close to the modern value), came from",
          "correct": "careful observation, systematic record-keeping, and the development of mathematical models of celestial motion.",
            "wrong": ["purely lucky guesses.", "no real accuracy.", "no scientific method."] },
          { start: "The development of the Long Count calendar, which tracked days from a mythological base date, served practical purposes including",
          "correct": "the creation of a system for recording historical events and predicting astronomical phenomena.",
            "wrong": ["purely mythological.", "no practical use.", "no scientific value."] }
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
          { start: "I conquered the kingdom of Kush and established Axumite dominance in the region by combining", "correct": "military campaigns with the establishment of administrative control and the winning of local populations' acceptance.", "wrong": ["pure conquest alone.", "no follow-up governance.", "military force only."] },
          { start: "My conversion to Christianity and the establishment of Christianity as the official religion of Axum served to", "correct": "align the kingdom with the broader Christian world, particularly the Byzantine Empire, and create a religious identity distinct from pagan rivals.", "wrong": ["purely personal piety.", "no political benefit.", "no real strategy."] },
          { start: "The use of Christian symbols on Axumite coins and the establishment of Christian monuments demonstrated that rulers understood that", "correct": "religious authority and the adoption of a major world religion enhanced the prestige and legitimacy of Axumite rule.", "wrong": ["purely religious.", "no political value.", "no real strategy."] },
          { start: "My military campaigns against the Blemmyes and other rivals showed that Axumite power depended on", "correct": "maintaining military strength while establishing diplomatic relationships with neighboring powers.", "wrong": ["pure military conquest.", "no diplomacy.", "force alone."] },
          { start: "The consolidation of Axumite power under my reign required understanding that the kingdom's prosperity depended on", "correct": "trade routes, the Red Sea ports, and the ability to control access to the interior of Africa.", "wrong": ["purely military dominance.", "no economic foundation.", "conquest alone."] },
          { start: "The establishment of Axum as a major Christian power alongside Rome and Byzantium demonstrated that", "correct": "a kingdom's diplomatic and religious status could equal that of the Mediterranean powers despite being in Africa.", "wrong": ["Africa was marginal.", "no real power existed.", "purely regional influence."] }
        ]
      },
      {
        name: "Axumite Kings & Political Authority",
        emoji: "👑",
        quotes: [
          { start: "The Axumite king's authority came from demonstrating that he could", "correct": "protect the kingdom from external threats, maintain internal order, control trade, and ensure prosperity.", "wrong": ["pure inheritance.", "ritual authority alone.", "no accountability."] },
          { start: "Axumite rulers maintained power by establishing relationships with the Byzantine Empire because this provided", "correct": "diplomatic recognition, access to Mediterranean trade networks, and military alliances.", "wrong": ["no real benefit.", "purely ceremonial.", "no strategic advantage."] },
          { start: "The use of Greek language on Axumite coinage and in official inscriptions served to demonstrate that", "correct": "Axum was integrated into the Hellenistic world and that Axumite rulers were sophisticated and cosmopolitan.", "wrong": ["purely linguistic choice.", "no real value.", "random decision."] },
          { start: "An Axumite king's legitimacy depended on being recognized as both a political ruler and a guardian of the Christian faith because", "correct": "the integration of religious and political authority made the king the defender of both the kingdom and Christendom.", "wrong": ["religious role was purely ceremonial.", "no real connection.", "separate authorities."] },
          { start: "The expansion of Axumite territory under successful kings required maintaining the loyalty of subordinate rulers and military commanders by", "correct": "distributing wealth, granting authority, and ensuring that they benefited from the kingdom's prosperity.", "wrong": ["pure force alone.", "inherited loyalty.", "no rewards."] }
        ]
      },
      {
        name: "Axumite Trade & Economic Power",
        emoji: "💰",
        quotes: [
          { start: "Axumite wealth and power came primarily from control of trade routes connecting the Red Sea, the Mediterranean, and Indian Ocean networks because this allowed the kingdom to", "correct": "tax merchants, control access to valuable goods, and establish relationships with distant powers.", "wrong": ["purely military conquest.", "no economic foundation.", "agricultural wealth alone."] },
          { start: "The development of Axumite ports like Adulis as major trade centers provided the kingdom with", "correct": "access to goods from India, Persia, the Mediterranean, and the interior of Africa, making Axum a crucial node in international commerce.", "wrong": ["purely military bases.", "no real commerce.", "local trade only."] },
          { start: "Axumite control of gold trade, ivory, and other luxury goods from Africa's interior gave the kingdom significant power because these goods were", "correct": "highly valued in Mediterranean and Asian markets and brought wealth that could be used for military campaigns and building projects.", "wrong": ["no real value.", "purely local trade.", "no external demand."] },
          { start: "The minting of high-quality Axumite coins in gold, silver, and copper served to", "correct": "facilitate trade, demonstrate royal authority, and establish Axum's prestige as a major economic power.", "wrong": ["no real purpose.", "purely decorative.", "no practical value."] },
          { start: "Axumite merchants and traders operating under the protection of the crown could accumulate wealth and establish trade networks because the king provided", "correct": "safe passage, protection from bandits, enforcement of contracts, and access to major trade routes.", "wrong": ["no real protection.", "purely exploited.", "arbitrary government."] },
          { start: "The wealth from trade allowed Axumite rulers to", "correct": "finance military campaigns, support building projects, maintain a court and administration, and distribute gifts to allies.", "wrong": ["purely accumulate gold.", "no real benefit.", "no strategic advantage."] }
        ]
      },
      {
        name: "Axumite Christianity & Religious Authority",
        emoji: "✝️",
        quotes: [
          { start: "The conversion of Axum to Christianity under Ezana transformed the kingdom's identity because it positioned Axum as part of the Christian world and aligned it with",
          "correct": "the Byzantine Empire, which was a major power in the Mediterranean and Middle East.",
            "wrong": ["purely spiritual change.", "no political benefit.", "no real consequence."] },
          { start: "The establishment of a Christian church hierarchy in Axum, with bishops and clergy, served to", "correct": "institutionalize Christianity, maintain orthodoxy, and create a clerical establishment that could advise rulers.", "wrong": ["purely religious.", "no political function.", "no real value."] },
          { start: "The use of Christian symbols—the cross on coins, on monuments, and in official insignia—demonstrated that rulers believed that", "correct": "religious identity was central to state legitimacy and that Christianity was an essential component of Axumite governance.", "wrong": ["purely decorative.", "no real importance.", "ceremonial only."] },
          { start: "The relationship between Axumite rulers and the religious establishment required that kings", "correct": "be seen as pious Christians whose decisions aligned with Christian principles while maintaining political authority.", "wrong": ["pure religious control.", "no real power.", "subordination to clergy."] },
          { start: "The spread of Christianity in Axum and the regions it controlled created a shared faith identity because", "correct": "Christianity provided a framework for understanding the world, justifying authority, and creating bonds with Christian populations.", "wrong": ["purely imposed.", "no real belief.", "only for show."] },
          { start: "The maintenance of Christian orthodoxy in Axum and resistance to different Christian traditions (like Nestorianism) showed that rulers understood that", "correct": "controlling religious doctrine was essential to maintaining religious and political unity.", "wrong": ["persecution without purpose.", "purely sectarian.", "no real importance."] }
        ]
      },
      {
        name: "Axumite Military & Defense",
        emoji: "⚔️",
        quotes: [
          { start: "The Axumite military successfully defended the kingdom against invasions from the Persians, the Arabs, and other rivals because Axumite forces possessed", "correct": "well-trained soldiers, effective military organization, and access to advanced weaponry through Mediterranean trade.", "wrong": ["purely superior numbers.", "unbeatable forces.", "no real threats."] },
          { start: "The use of the Red Sea fleet by Axumite rulers served to protect trade routes, transport troops, and project power across the sea because", "correct": "control of the sea allowed Axum to project power into the Mediterranean and Arabian Sea regions.", "wrong": ["purely ceremonial.", "no real naval power.", "land forces alone mattered."] },
          { start: "Axumite military campaigns against rivals in Arabia, Persia, and Africa demonstrated that", "correct": "Axum was a regional power that could project military force across the Red Sea and into Africa's interior.", "wrong": ["purely defensive.", "no real aggression.", "limited military capacity."] },
          { start: "The maintenance of Axumite military strength required", "correct": "continuous recruitment and training of soldiers, procurement of weapons, and the ability to finance military expeditions.", "wrong": ["no real effort.", "naturally strong forces.", "no real maintenance."] },
          { start: "Axumite military defeats, particularly against rising Islamic powers and Persian empires, showed that", "correct": "even powerful kingdoms face challenges from determined rivals with comparable military resources.", "wrong": ["purely weak military.", "internal collapse.", "inevitable decline."] }
        ]
      },
      {
        name: "Axumite Architecture & Monuments",
        emoji: "🏛️",
        quotes: [
          { start: "The construction of monumental stelae (tall stone markers) at Axum served to demonstrate that rulers possessed", "correct": "the ability to command resources, the access to skilled stoneworkers, and the desire to create lasting monuments to their power.", "wrong": ["purely decorative.", "no real purpose.", "ceremonial only."] },
          { start: "The development of Axumite architectural style, incorporating both Greek/Hellenistic and local African elements, reflected that", "correct": "Axumite architects and builders synthesized foreign influences with local traditions to create a distinctive style.", "wrong": ["purely copied from elsewhere.", "no originality.", "purely local."] },
          { start: "The construction of churches and religious buildings during the Christian period served to demonstrate that", "correct": "the king was a pious ruler supporting religion and that the kingdom was integrated into the Christian world.", "wrong": ["purely religious fervor.", "no political purpose.", "only spiritual."] },
          { start: "The labor and resources required to construct Axumite monuments came from", "correct": "the accumulated wealth of the kingdom, the ability to command labor, and the organization of building projects across years or decades.", "wrong": ["purely voluntary.", "no real resources.", "spontaneous construction."] },
          { start: "The preservation of Axumite monuments shows that builders understood that", "correct": "stone structures, when properly constructed, could endure for centuries and serve as lasting symbols of a ruler's achievements.", "wrong": ["no real durability.", "purely temporary.", "monuments decay quickly."] }
        ]
      },
      {
        name: "Axumite Administration & Governance",
        emoji: "⚖️",
        quotes: [
          { start: "The Axumite system of governance required establishing officials in major cities and regions because the king could not personally oversee all", "correct": "trade activities, tax collection, justice administration, and military affairs across the kingdom.",
            "wrong": ["centralized control was possible.", "no real administration.", "purely ceremonial officials."] },
          { start: "Axumite administrators in port cities like Adulis were responsible for overseeing trade, collecting taxes, and maintaining order because these cities were",
          "correct": "critical to the kingdom's prosperity and security.",
            "wrong": ["purely military bases.", "no real administration.", "independent cities."] },
          { start: "The Axumite approach to administering diverse populations required rulers to understand that",
          "correct": "respect for local traditions, allowing some local autonomy, and ensuring benefits of Axumite rule would win the loyalty of subject peoples.",
            "wrong": ["pure cultural erasure.", "forced assimilation.", "no compromise."] },
          { start: "Axumite legal systems likely incorporated both local customary law and Christian principles because rulers understood that",
          "correct": "justice systems that combined familiar traditions with new Christian values would be more acceptable and effective.",
            "wrong": ["pure Christian law alone.", "no local traditions.", "no real integration."] },
          { start: "The stability of Axumite rule for centuries came from establishing systems where rulers could",
          "correct": "maintain control through appointed officials, enforce justice, collect taxes, and ensure that prosperity benefited the kingdom.",
            "wrong": ["purely military force.", "no real system.", "luck alone."] }
        ]
      },
      {
        name: "Axumite Relations with Foreign Powers",
        emoji: "🌍",
        quotes: [
          { start: "The Axumite relationship with the Byzantine Empire was mutually beneficial because",
          "correct": "trade, military alliances, and shared Christian faith created economic and political ties between the two powers.",
            "wrong": ["purely subordinate to Byzantium.", "no real independence.", "purely economic."] },
          { start: "Axumite diplomatic relationships with Persia, Arabia, and other powers showed that rulers understood that",
          "correct": "maintaining multiple relationships, playing rivals against each other, and using diplomacy alongside military power were essential to Axumite survival.",
            "wrong": ["pure alliance with one power.", "no diplomacy.", "only military competition."] },
          { start: "The Axumite intervention in Arabia to support Christian populations and prevent Persian dominance demonstrated that",
          "correct": "Axumite rulers saw themselves as guardians of Christianity and were willing to project power beyond the African continent.",
            "wrong": ["purely defensive.", "no external ambitions.", "limited power."] },
          { start: "The decline of Axumite power in the Red Sea region, particularly after the rise of Islamic powers, showed that",
          "correct": "even powerful kingdoms face challenges when new, determined rivals emerge with superior resources or organization.",
            "wrong": ["purely military defeat.", "inevitable decline.", "sudden collapse."] }
        ]
      },
      {
        name: "Axumite Culture & Intellectual Life",
        emoji: "📚",
        quotes: [
          { start: "The use of the Ge'ez language in Axumite inscriptions, church services, and literature served to",
          "correct": "establish a shared cultural and religious identity across the kingdom and preserve Axumite traditions.",
            "wrong": ["purely linguistic choice.", "no real value.", "no cultural importance."] },
          { start: "The development of Axumite written culture, particularly after the conversion to Christianity, created a tradition of",
          "correct": "religious texts, theological works, and literature that would survive and influence Ethiopian culture for centuries.",
            "wrong": ["purely ceremonial writing.", "no real literature.", "no lasting impact."] },
          { start: "Axumite scholars and priests engaged with Christian theology and biblical interpretation because",
          "correct": "the integration of Christian learning into Axumite intellectual life enhanced the kingdom's prestige and deepened religious practice.",
            "wrong": ["purely European influence.", "no real innovation.", "pure copying."] },
          { start: "The establishment of scriptoriums and centers of learning in Axumite monasteries served to",
          "correct": "preserve Christian texts, transmit theological knowledge, and create a literate clerical establishment.",
            "wrong": ["purely ceremonial.", "no real function.", "no learning occurred."] },
          { start: "Axumite intellectual life benefited from the kingdom's position on trade routes because scholars had access to",
          "correct": "new ideas, texts, and knowledge from the Mediterranean, Persia, India, and the broader Christian world.",
            "wrong": ["purely isolated.", "no external influence.", "local knowledge only."] }
        ]
      },
      {
        name: "Axumite Decline & Historical Significance",
        emoji: "📜",
        quotes: [
          { start: "The decline of Axumite power came from multiple factors: the rise of Islamic powers controlling the Red Sea, the loss of trade routes, Persian expansion, and",
          "correct": "internal fragmentation and the inability of later rulers to maintain the unity and military strength of earlier periods.",
            "wrong": ["purely external conquest.", "single cause.", "inevitable decline."] },
          { start: "The rise of Islam and the establishment of Islamic control over the Red Sea and Arabian coast fundamentally altered Axumite power because",
          "correct": "Axumite prosperity depended on controlling these trade routes, and loss of control meant loss of the economic foundation of power.",
            "wrong": ["Axumite power was undiminished.", "purely military defeat.", "no real consequence."] },
          { start: "The retreat of Axumite influence from Arabia, the loss of ports, and the contraction of the kingdom showed that",
          "correct": "even a sophisticated, militarily powerful kingdom with strong religious foundations could face decline when facing determined rivals.",
            "wrong": ["purely internal weakness.", "inevitable failure.", "no real achievements."] },
          { start: "The legacy of Axum included establishing that",
          "correct": "an African kingdom could become a major world power, adopt Christianity, participate in international diplomacy, and maintain sophisticated governance.",
            "wrong": ["no real legacy.", "Africa remained marginal.", "no real civilization."] },
          { start: "The study of Axum demonstrates that in the ancient world,",
          "correct": "African civilizations achieved levels of political organization, military sophistication, economic development, and cultural achievement comparable to contemporary powers elsewhere.",
            "wrong": ["Africa was primitive.", "no real civilization.", "all achievement was external."] }
        ]
      },
      {
        name: "Axumite Society & Social Structure",
        emoji: "🏛️",
        quotes: [
          { start: "Axumite society was organized hierarchically with the king at the top, followed by nobles, clergy, merchants, craftspeople, and farmers because",
          "correct": "this structure allowed for specialization, coordination of large projects, and the accumulation and redistribution of wealth.",
            "wrong": ["purely egalitarian.", "no real hierarchy.", "random organization."] },
          { start: "The role of the church and clergy in Axumite society increased after Christianization because priests and bishops became",
          "correct": "advisors to rulers, administrators of justice, educators, and keepers of written culture.",
            "wrong": ["purely spiritual roles.", "no real authority.", "no influence on governance."] },
          { start: "Women in Axumite society, particularly those of royal or noble status, held important roles in",
          "correct": "managing estates, maintaining family relationships, potentially influencing succession, and participating in court life.",
            "wrong": ["no real authority.", "purely domestic roles.", "no influence."] },
          { start: "The relationship between Axumite rulers and merchants was mutually beneficial because merchants depended on royal protection while rulers depended on",
          "correct": "the taxes, goods, and connections to distant markets that merchants provided.",
            "wrong": ["purely exploitative.", "no real relationship.", "merchants were independent."] }
        ]
      },
      {
        name: "Axumite Coinage & Economic Systems",
        emoji: "💰",
        quotes: [
          { start: "The production of Axumite coins in gold, silver, and copper served to",
          "correct": "facilitate long-distance trade, demonstrate royal authority, establish the kingdom's prestige as a major economic power, and control the money supply.",
            "wrong": ["purely decorative.", "no real value.", "no practical purpose."] },
          { start: "The design of Axumite coins, featuring the king's portrait and Christian symbols, served to reinforce that",
          "correct": "the king was the ultimate authority and a guardian of the Christian faith.",
            "wrong": ["purely aesthetic.", "no real message.", "no communication purpose."] },
          { start: "The wide circulation of Axumite coins across trade networks demonstrated that",
          "correct": "the kingdom was trusted by merchants and that Axumite currency was recognized as valuable across vast distances.",
            "wrong": ["purely local currency.", "no external use.", "no real value."] },
          { start: "The ability to mint coins gave Axumite rulers power because they could",
          "correct": "control the money supply, collect seigniorage (profit from minting), and influence trade through monetary policy.",
            "wrong": ["no real power.", "purely ceremonial.", "no practical advantage."] }
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
          { start: "The rise of Great Zimbabwe depended on establishing control over the gold trade because", "correct": "gold was highly valued by Arab traders and foreign merchants, making it the foundation of wealth and power.", "wrong": ["purely symbolic.", "no economic value.", "military conquest only."] },
          { start: "A Great Zimbabwe ruler's authority came from being able to demonstrate that he could", "correct": "control trade, ensure the prosperity of merchants, maintain order, and redistribute wealth to his people.", "wrong": ["pure military power.", "inherited authority alone.", "ritual alone."] },
          { start: "The construction of the Great Enclosure and other stone structures served to demonstrate that a ruler possessed", "correct": "the ability to command vast labor forces, accumulate resources, and establish a capital worthy of respect.", "wrong": ["purely ceremonial.", "no real purpose.", "only for defense."] },
          { start: "The expansion of Great Zimbabwe's influence across the region required that rulers understand", "correct": "the importance of maintaining relationships with vassal states, control of trade routes, and the demonstration of military and economic power.", "wrong": ["pure military conquest.", "no real strategy.", "random expansion."] },
          { start: "A Great Zimbabwe ruler's responsibility included ensuring that", "correct": "merchants could safely conduct trade, craftspeople could produce goods, and the population had access to the goods that trade brought.", "wrong": ["purely extracting wealth.", "no real responsibility.", "only military concerns."] },
          { start: "The decline of a Great Zimbabwe ruler's power would come from the failure to", "correct": "maintain control of trade, prevent rival power centers from emerging, or losing the support of regional chiefs.", "wrong": ["military defeat alone.", "no real challenge.", "absolute power."] }
        ]
      },
      {
        name: "Great Zimbabwe Architecture & Stone Structures",
        emoji: "🏗️",
        quotes: [
          { start: "The construction of Great Zimbabwe's distinctive stone structures without mortar demonstrated that builders possessed", "correct": "advanced knowledge of stone fitting, structural geometry, and the ability to organize large labor forces.", "wrong": ["primitive techniques.", "random construction.", "no real engineering."] },
          { start: "The Great Enclosure, the largest stone structure at Great Zimbabwe, likely served as a royal residence and ceremonial center because it", "correct": "provided shelter, demonstrated royal power through its sheer size and sophistication, and served as a focus for ritual and governance.", "wrong": ["purely defensive.", "only religious purposes.", "no practical function."] },
          { start: "The arrangement of stone structures at Great Zimbabwe in a pattern of sacred and secular spaces suggests that builders understood", "correct": "the integration of religious, ceremonial, and administrative functions within a single complex.", "wrong": ["random placement.", "no planning.", "only religious purposes."] },
          { start: "The labor required to build Great Zimbabwe's structures came from a combination of", "correct": "voluntary labor organized by the ruler, tribute labor owed by subject peoples, and possibly enslaved workers.", "wrong": ["purely voluntary work.", "no real labor system.", "random construction."] },
          { start: "The maintenance of Great Zimbabwe's stone structures required systems to ensure that", "correct": "repairs were made, new sections could be built, and the structures were preserved as symbols of continuity of rule.", "wrong": ["structures were abandoned.", "no maintenance occurred.", "purely ceremonial."] },
          { start: "The sophistication of Great Zimbabwe's architecture indicates that architects and builders possessed", "correct": "generations of accumulated knowledge about stone working, geometry, and structural design.", "wrong": ["no real skill.", "purely random building.", "no knowledge transmission."] },
          { start: "The location of Great Zimbabwe on a plateau near water sources and in a region rich in gold and other resources demonstrates that rulers understood", "correct": "the importance of strategic location for controlling trade, accessing resources, and establishing a defensible capital.", "wrong": ["random site selection.", "no real strategy.", "location was unimportant."] }
        ]
      },
      {
        name: "Great Zimbabwe Trade & Economic Power",
        emoji: "💰",
        quotes: [
          { start: "The control of gold production and trade by Great Zimbabwe rulers allowed them to accumulate wealth that could be used for", "correct": "construction projects, support of craftspeople, maintenance of armies, and redistribution to followers.", "wrong": ["purely personal use.", "no real benefit.", "no strategic value."] },
          { start: "Great Zimbabwe's role as an intermediary in the gold trade between interior sources and Arab coastal traders gave the rulers significant power because", "correct": "they could tax the trade, control the flow of gold, and accumulate the foreign goods that trade brought.", "wrong": ["no real advantage.", "trade was unimportant.", "merchants acted independently."] },
          { start: "The evidence of trade goods from Persia, Arabia, and the Indian Ocean region found at Great Zimbabwe shows that", "correct": "the city was connected to long-distance trade networks and that rulers had access to luxury goods from across the Indian Ocean.", "wrong": ["purely local trade.", "no external contact.", "imported goods were rare."] },
          { start: "Great Zimbabwe merchants and traders who conducted business under the protection and patronage of the ruler could", "correct": "accumulate wealth, establish trading networks, and contribute to the economic power of the city.", "wrong": ["had no authority.", "were purely exploited.", "trade was discouraged."] },
          { start: "The taxation of trade passing through Great Zimbabwe served to", "correct": "enrich the ruler, finance building projects, reward loyal followers, and maintain the military and administrative apparatus.", "wrong": ["have no real benefit.", "purely destructive.", "no strategic value."] },
          { start: "The wealth from trade allowed Great Zimbabwe to import resources like tin, copper, and exotic goods that would have been", "correct": "unavailable locally but valuable for demonstrating the ruler's power and prestige.", "wrong": ["purely decorative.", "no real value.", "no strategic importance."] }
        ]
      },
      {
        name: "Great Zimbabwe Craftsmanship & Artistry",
        emoji: "🎨",
        quotes: [
          { start: "The discovery of soapstone bird sculptures at Great Zimbabwe suggests that craftspeople in the city possessed", "correct": "specialized skills in stone carving and that these objects held religious, ceremonial, or symbolic importance.", "wrong": ["purely decorative.", "no real meaning.", "no skill required."] },
          { start: "The production of high-quality pottery at Great Zimbabwe indicates that craftspeople had", "correct": "developed techniques for firing, shaping, and decorating vessels that were both functional and aesthetically accomplished.", "wrong": ["primitive pottery.", "no real skill.", "purely functional."] },
          { start: "Craftspeople working under the patronage of Great Zimbabwe rulers could focus on their craft because the rulers provided", "correct": "resources, protection, and markets for their goods, allowing specialization in their craft.", "wrong": ["no support.", "purely exploitative.", "no real patronage."] },
          { start: "The quality and consistency of artifacts from Great Zimbabwe demonstrates that", "correct": "knowledge of craft techniques was preserved and transmitted from generation to generation of skilled workers.", "wrong": ["purely random production.", "no real standards.", "no tradition."] },
          { start: "Great Zimbabwe craftspeople produced goods that could be traded or given as gifts to allies because these items represented", "correct": "the prestige and sophistication of Great Zimbabwe and served to reinforce relationships with other rulers and merchants.", "wrong": ["purely for local use.", "no external value.", "no strategic importance."] }
        ]
      },
      {
        name: "Great Zimbabwe Society & Social Organization",
        emoji: "🏛️",
        quotes: [
          { start: "Great Zimbabwe society was organized hierarchically with the ruler at the top, followed by nobles, merchants, craftspeople, and commoners because", "correct": "this structure allowed for specialization, coordination of large projects, and the accumulation and redistribution of wealth.", "wrong": ["purely egalitarian.", "no real hierarchy.", "random organization."] },
          { start: "The residences of elites in the Great Enclosure and other elevated areas suggest that the city had", "correct": "distinct residential zones reflecting social status and access to resources.", "wrong": ["equal housing for all.", "no social distinction.", "random settlement."] },
          { start: "The power of Great Zimbabwe's ruler depended on maintaining the loyalty of subordinate chiefs and nobles by", "correct": "distributing wealth, granting authority over subject peoples, and ensuring that they benefited from the ruler's power.", "wrong": ["pure military force.", "inherited loyalty.", "no need for rewards."] },
          { start: "Women in Great Zimbabwe society, particularly those of royal or noble status, held important roles in", "correct": "maintaining family relationships, managing properties, and participating in ceremonial and social functions.", "wrong": ["no real authority.", "purely domestic.", "no influence."] },
          { start: "The relationship between Great Zimbabwe and surrounding settlements shows that the city functioned as", "correct": "a regional center that controlled trade, provided religious and ceremonial functions, and coordinated economic activity across a wide area.", "wrong": ["purely military fortress.", "no real relationship.", "independent communities."] }
        ]
      },
      {
        name: "Great Zimbabwe Religion & Cosmology",
        emoji: "🕯️",
        quotes: [
          { start: "The religious significance of Great Zimbabwe is suggested by architectural features and artifacts that indicate", "correct": "the city was a sacred center where religious ceremonies, rituals, and cosmic beliefs were enacted and maintained.", "wrong": ["purely secular.", "no religious function.", "purely military fortress."] },
          { start: "The incorporation of astronomical alignments in some structures suggests that Great Zimbabwe's builders understood", "correct": "the cosmological importance of celestial events and incorporated them into religious and ceremonial practices.", "wrong": ["random alignment.", "no real knowledge.", "purely ceremonial."] },
          { start: "The veneration of ancestors in Great Zimbabwe culture likely meant that", "correct": "the living sought guidance from and honored the spirits of deceased rulers and ancestors through ritual and ceremony.", "wrong": ["no ancestor veneration.", "purely spiritual.", "no real beliefs."] },
          { start: "The religious authority of Great Zimbabwe's rulers was based on their claim to", "correct": "mediate between the human and spiritual worlds, ensure prosperity through proper ritual, and maintain cosmic order.", "wrong": ["pure military power.", "no religious role.", "arbitrary authority."] }
        ]
      },
      {
        name: "Great Zimbabwe Decline & Historical Significance",
        emoji: "📜",
        quotes: [
          { start: "The decline of Great Zimbabwe likely resulted from a combination of factors: environmental stress (possibly drought), the depletion of easily accessible gold resources, and", "correct": "the migration of trade routes and the emergence of rival centers of power along the coast.", "wrong": ["purely military conquest.", "single cause.", "inevitable decline."] },
          { start: "The abandonment of Great Zimbabwe as a major center by the 15th century does not diminish its achievement; rather it demonstrates that", "correct": "even sophisticated urban centers are vulnerable to environmental change, economic shifts, and the emergence of rival powers.", "wrong": ["weakness from the start.", "no real achievement.", "inevitable failure."] },
          { start: "The legacy of Great Zimbabwe included establishing that", "correct": "sophisticated urban settlements, stone architecture, and centralized trade control could develop in southern Africa independent of external influence.", "wrong": ["no real achievement.", "African cultures were primitive.", "external influence was necessary."] },
          { start: "The rediscovery and study of Great Zimbabwe in the modern era corrected the misconception that", "correct": "Africans lacked the capacity for sophisticated architecture, urban planning, and trade organization.", "wrong": ["confirmed primitive origins.", "showed external influence.", "demonstrated African weakness."] },
          { start: "Great Zimbabwe's stone structures and the sophistication of its trade networks demonstrate that", "correct": "in the medieval period, African societies achieved levels of political organization, economic development, and architectural achievement comparable to contemporary civilizations elsewhere.", "wrong": ["Africa was undeveloped.", "no real civilization.", "all achievement came from outside."] }
        ]
      },
      {
        name: "Great Zimbabwe & Regional Trade Networks",
        emoji: "🌍",
        quotes: [
          { start: "Great Zimbabwe's connections to coastal Swahili cities allowed rulers to establish trade relationships with merchants from", "correct": "the Arab world, Persia, India, and eventually Portugal, giving access to exotic goods and foreign knowledge.", "wrong": ["purely local trade.", "no external contact.", "isolated from the world."] },
          { start: "The evidence of Indian Ocean trade goods at Great Zimbabwe shows that the city was part of", "correct": "a regional system where gold flowed out, and manufactured goods, luxury items, and foreign products flowed in.", "wrong": ["one-directional trade.", "purely extractive.", "no real exchange."] },
          { start: "Great Zimbabwe's role in the region included serving as a center where diverse peoples—the Shona, Arabs, Indian merchants—could conduct business and exchange goods because", "correct": "the ruler's authority and maintenance of order made the city a safe and reliable place for trade.", "wrong": ["no real role.", "purely local market.", "no external function."] },
          { start: "The relationship between Great Zimbabwe and the Indian Ocean trade network was mutually beneficial because", "correct": "foreign merchants gained access to gold and other goods while Great Zimbabwe gained access to foreign products and the prestige of international trade.", "wrong": ["purely exploitative of Great Zimbabwe.", "no real benefit.", "one-sided trade."] }
        ]
      },
      {
        name: "Great Zimbabwe Governance & Administration",
        emoji: "⚖️",
        quotes: [
          { start: "The governance of Great Zimbabwe required establishing systems to ensure that", "correct": "tribute was collected from subject populations, trade was regulated, craftspeople were provided with resources, and wealth could be redistributed.", "wrong": ["purely military control.", "no real system.", "arbitrary rule."] },
          { start: "Great Zimbabwe rulers maintained power by demonstrating that they could provide", "correct": "protection from external threats, access to trade goods, opportunities for merchants and craftspeople, and the stability necessary for prosperity.", "wrong": ["pure force alone.", "no real benefits.", "arbitrary authority."] },
          { start: "The administrative apparatus of Great Zimbabwe, including officials responsible for trade, craft production, and the collection of tribute, was necessary because", "correct": "the ruler could not personally oversee all activities, and a complex economy required coordinated management.", "wrong": ["no real administration.", "purely ceremonial officials.", "no coordination."] },
          { start: "The evidence of an organized administrative system at Great Zimbabwe shows that rulers understood that", "correct": "successful empires require not just military power but also efficient bureaucracies that can manage complex economic and social activities.", "wrong": ["no administration existed.", "purely military rule.", "no real organization."] }
        ]
      },
      {
        name: "Great Zimbabwe Labor & Construction",
        emoji: "⚙️",
        quotes: [
          { start: "The construction of Great Zimbabwe's massive stone structures required the organization of labor forces numbering in the thousands because", "correct": "the sheer volume of stone had to be quarried, transported, and fitted together according to a plan.", "wrong": ["purely magical.", "no real labor.", "small numbers could do it."] },
          { start: "The labor that built Great Zimbabwe came from sources including voluntary participation, tribute labor owed to the ruler, and possibly enslaved individuals, demonstrating that", "correct": "the ruler had multiple mechanisms for mobilizing and directing labor.", "wrong": ["purely voluntary.", "no compulsion.", "equal compensation for all."] },
          { start: "The coordination of such massive construction projects required the existence of", "correct": "architects or master builders who could design structures, plan construction sequences, and oversee quality control.", "wrong": ["no real planning.", "purely random construction.", "no supervision."] },
          { start: "The long duration of Great Zimbabwe's construction—spanning centuries—shows that the project required", "correct": "continuity of vision across multiple rulers' reigns and sustained commitment to the original plan.", "wrong": ["sudden construction.", "individual rulers' whims.", "no real continuity."] }
        ]
      },
      {
        name: "Great Zimbabwe & Environmental Knowledge",
        emoji: "🌿",
        quotes: [
          { start: "The location of Great Zimbabwe and the systems for water management suggest that builders and rulers understood", "correct": "the importance of water access, the effects of climate and rainfall, and the need to manage water resources.", "wrong": ["no real knowledge.", "random location.", "no planning."] },
          { start: "The development of agricultural systems that could support the large population of Great Zimbabwe required knowledge of", "correct": "local soil conditions, crop varieties suited to the region, and potentially irrigation or water conservation techniques.", "wrong": ["purely pastoral.", "no agriculture.", "imported food."] },
          { start: "The evidence of settlement patterns and resource management at Great Zimbabwe shows that the population understood how to", "correct": "extract resources sustainably without completely depleting them in the short term.", "wrong": ["purely exploitative.", "complete depletion.", "no planning."] }
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
          { start: "I established the Gupta Empire by uniting the northern Indian kingdoms through a combination of", "correct": "military conquest, strategic marriages, and the winning of allies rather than relying on force alone.", "wrong": ["pure conquest.", "no alliances needed.", "random success."] },
          { start: "The strategic marriage with the Licchhavi dynasty provided legitimacy because it", "correct": "connected the Gupta family to an established royal line and won the support of a powerful neighboring kingdom.", "wrong": ["purely ceremonial.", "no political benefit.", "no real value."] },
          { start: "The establishment of Gupta rule required demonstrating that a new dynasty could provide", "correct": "order, justice, and prosperity better than previous rulers.", "wrong": ["pure force alone.", "no real difference.", "no legitimacy."] },
          { start: "The Gupta approach to conquered territories emphasized that rulers must", "correct": "establish stable governance, respect local traditions where possible, and ensure that people benefited from Gupta rule.", "wrong": ["oppressive control.", "cultural erasure.", "pure exploitation."] }
        ]
      },
      {
        name: "Samudragupta (Expansion & Military Conquest)",
        emoji: "⚔️",
        quotes: [
          { start: "My extensive military campaigns across India demonstrated that a Gupta emperor could", "correct": "defeat rival kingdoms, consolidate power over much of the subcontinent, and establish imperial authority.", "wrong": ["no real victories.", "weak military.", "no real conquest."] },
          { start: "The Allahabad Pillar inscription recording my conquests served to", "correct": "publicly proclaim my military achievements and establish my legitimacy as a powerful ruler.", "wrong": ["no real purpose.", "purely ceremonial.", "no authority."] },
          { start: "My style of conquest often involved accepting the submission of rival kings rather than destroying them because", "correct": "allowing defeated rulers to retain local authority while accepting Gupta supremacy was more efficient than complete conquest.", "wrong": ["weakness was shown.", "no real control.", "pure mercy."] },
          { start: "The military organization required for my campaigns showed that the Gupta Empire possessed", "correct": "the administrative capacity to raise armies, provision them, and coordinate military campaigns across vast distances.", "wrong": ["no real organization.", "weak military.", "no coordination."] },
          { start: "My use of war elephants, cavalry, and infantry demonstrated that Gupta military strategy involved", "correct": "combining different unit types to create flexible forces capable of adapting to different terrains and opponents.", "wrong": ["single unit type.", "no strategy.", "pure numbers."] },
          { start: "The expansion of Gupta territory under my reign established the foundation for what would become", "correct": "one of India's greatest empires, stretching across much of the subcontinent.", "wrong": ["purely military success with no lasting effect.", "no real empire building.", "temporary conquests."] }
        ]
      },
      {
        name: "Chandragupta II Vikramaditya (Golden Age & Culture)",
        emoji: "🌟",
        quotes: [
          { start: "I am remembered not only for military victory but also for establishing a golden age of culture because I believed that", "correct": "an empire's true greatness lay in its art, literature, science, and philosophy, not only military power.", "wrong": ["only conquest mattered.", "culture was irrelevant.", "art served no purpose."] },
          { start: "My patronage of scholars, poets, and artists served multiple purposes: enhancing the prestige of the Gupta court, attracting talented people, and", "correct": "ensuring that knowledge and culture flourished and were transmitted to future generations.", "wrong": ["purely decorative.", "no real benefit.", "wasteful expenditure."] },
          { start: "The assembly of the 'Nine Gems' (Navratnas)—brilliant scholars and artists at my court—demonstrated that I understood that", "correct": "intellectual and cultural achievement was as important as military power in establishing a great empire.", "wrong": ["only a display of wealth.", "no real significance.", "purely ceremonial."] },
          { start: "My military victories, particularly the conquest of the western regions, were made possible by understanding that", "correct": "economic prosperity and stable governance allowed the empire to finance large military campaigns.", "wrong": ["pure military power alone.", "no real strategy.", "wealth was unimportant."] },
          { start: "The defeat of the Shaka Western Kshatrapas brought the western trade ports under Gupta control, which allowed the empire to", "correct": "control maritime trade, increase tax revenue, and establish relationships with distant kingdoms like Rome and China.", "wrong": ["no real benefit.", "trade was unimportant.", "no external relationships."] },
          { start: "My promotion of both Hinduism and Buddhism demonstrated that a wise Gupta ruler understood that", "correct": "religious tolerance and the patronage of multiple traditions created stability and won the support of diverse populations.", "wrong": ["pure religious dominance.", "one religion only.", "religion was unimportant."] }
        ]
      },
      {
        name: "Gupta Scholars & Intellectual Achievement",
        emoji: "📚",
        quotes: [
          { start: "The Gupta court attracted the greatest scholars of the age because the emperor provided", "correct": "patronage, resources, and the intellectual freedom to pursue knowledge in mathematics, astronomy, medicine, and literature.", "wrong": ["no real support.", "purely ceremonial.", "scholars were oppressed."] },
          { start: "Aryabhata's contributions to mathematics and astronomy, made under Gupta patronage, demonstrated that", "correct": "when scholars receive support and resources, they can make discoveries that advance human knowledge significantly.", "wrong": ["individual genius alone.", "patronage was unimportant.", "knowledge came from nowhere."] },
          { start: "The invention of the decimal system and the concept of zero by Indian mathematicians during the Gupta era represented", "correct": "a breakthrough in mathematical understanding that would eventually revolutionize mathematics worldwide.", "wrong": ["purely theoretical.", "no real value.", "other cultures knew this."] },
          { start: "Kalidasa's literary masterpieces, supported by Gupta imperial patronage, showed that cultural achievement requires", "correct": "a ruler's recognition that art and literature enhance the empire's prestige and provide lasting legacy.", "wrong": ["purely individual achievement.", "no real role for patronage.", "art was unimportant."] },
          { start: "The Gupta approach to supporting scholars included establishing centers of learning where knowledge could be preserved and transmitted because", "correct": "the empire understood that institutionalizing knowledge ensured its survival across generations.", "wrong": ["purely individualistic.", "institutions were unnecessary.", "knowledge needed no preservation."] },
          { start: "Gupta support for the study of Sanskrit and the composition of literature in Sanskrit served to", "correct": "establish Sanskrit as the language of the educated elite across the empire and beyond.", "wrong": ["purely linguistic.", "no practical benefit.", "no real purpose."] }
        ]
      },
      {
        name: "Gupta Science & Technology",
        emoji: "🔬",
        quotes: [
          { start: "The achievements in medicine during the Gupta period, including the surgical techniques documented in medical texts, came from", "correct": "systematic study, experimentation, and the accumulation of knowledge over generations preserved through written texts.", "wrong": ["purely spiritual knowledge.", "empirical study did not occur.", "no real medicine."] },
          { start: "Gupta astronomers made accurate observations and calculations about celestial bodies because they understood that", "correct": "astronomy had practical applications for agriculture, navigation, and the creation of accurate calendars.", "wrong": ["purely theoretical interest.", "no real value.", "no applications."] },
          { start: "The technological innovations in metallurgy and engineering under the Gupta period, visible in the Iron Pillar of Delhi and other artifacts, demonstrate that", "correct": "the empire possessed sophisticated knowledge of material properties and manufacturing techniques.", "wrong": ["no real innovation.", "purely accidental.", "no technology."] },
          { start: "Gupta support for technological advancement served both practical and symbolic purposes: improving productivity, demonstrating imperial power, and", "correct": "establishing the Gupta Empire as the center of knowledge and civilization in the known world.", "wrong": ["purely practical.", "no symbolic value.", "no real benefit."] }
        ]
      },
      {
        name: "Gupta Governance & Administration",
        emoji: "⚖️",
        quotes: [
          { start: "The Gupta system of governance required establishing a centralized administration with appointed officials in provinces because", "correct": "the emperor could not personally oversee all territories, and efficient administration required trained bureaucrats.", "wrong": ["pure feudalism.", "no real organization.", "decentralization only."] },
          { start: "Gupta emperors maintained power by balancing the authority of local rulers and the central authority because", "correct": "allowing local elites some autonomy while maintaining ultimate imperial authority created stability without requiring constant military presence.", "wrong": ["absolute centralization.", "no local authority.", "pure military rule."] },
          { start: "The Gupta legal system, based on written codes and administered by judges, served to", "correct": "provide consistent justice, prevent arbitrary rule, and create the perception that the Gupta system was fair and orderly.", "wrong": ["arbitrary punishment.", "no real law.", "purely ceremonial."] },
          { start: "Gupta taxation required striking a balance between extracting sufficient revenue and not driving the people to rebellion because", "correct": "overtaxation would cause economic collapse and rebellion, while under-taxation would weaken imperial power.", "wrong": ["maximum extraction.", "no limit on taxation.", "no real concern."] },
          { start: "The Gupta approach to administration of conquered territories involved respecting local customs and allowing some local autonomy because", "correct": "this strategy won the cooperation of local elites and made Gupta rule acceptable to diverse populations.", "wrong": ["cultural erasure.", "pure domination.", "no respect for locals."] },
          { start: "The stability of Gupta rule for nearly two centuries came from establishing a system where", "correct": "successive emperors understood that maintaining justice, supporting knowledge, and protecting merchants created conditions for prosperity.", "wrong": ["pure military might.", "no real system.", "luck alone."] }
        ]
      },
      {
        name: "Gupta Trade & Economic Power",
        emoji: "💰",
        quotes: [
          { start: "The Gupta control of trade routes—both overland through Central Asia and maritime through the Indian Ocean—gave them wealth through", "correct": "taxation of merchants, control of valuable goods, and the ability to establish relationships with distant powers.", "wrong": ["no real advantage.", "trade was unimportant.", "no revenue from trade."] },
          { start: "The prosperity of merchants during the Gupta period came from the empire's provision of", "correct": "safe roads, protection from bandits, fair taxation, and the enforcement of contracts.", "wrong": ["pure exploitation.", "no protection.", "arbitrary taxation."] },
          { start: "The Gupta support for merchant guilds and trade associations served to", "correct": "standardize practices, enforce honest dealing, and ensure that merchants had organized forums to settle disputes.", "wrong": ["control merchants completely.", "no real benefit.", "purely ceremonial."] },
          { start: "The economic prosperity of the Gupta Empire allowed the government to", "correct": "finance military campaigns, support scholars and artists, invest in public works, and maintain a large administration.", "wrong": ["purely accumulated wealth.", "no real benefit.", "no practical use."] },
          { start: "The Gupta mints produced high-quality coins inscribed with the emperor's names and titles because this served to", "correct": "facilitate commerce, demonstrate imperial power, and establish the emperor's face as a symbol of imperial authority.", "wrong": ["purely decorative.", "no real function.", "no practical benefit."] },
          { start: "The volume of trade during the Gupta period, with goods flowing from China, Central Asia, Persia, Rome, and Southeast Asia, demonstrated that", "correct": "the Gupta Empire was a major node in international trade networks stretching across Eurasia.", "wrong": ["trade was limited.", "no external contact.", "purely local commerce."] }
        ]
      },
      {
        name: "Gupta Art & Architecture",
        emoji: "🏛️",
        quotes: [
          { start: "The distinctive Gupta style of sculpture, painting, and architecture represented a synthesis because it", "correct": "combined Indian traditions with influences from Hellenistic art encountered through trade and contact.", "wrong": ["purely borrowed from others.", "no original innovation.", "purely local traditions."] },
          { start: "Gupta patronage of Buddhist cave temples and sculptures served both religious and political purposes: demonstrating piety, supporting religion, and", "correct": "establishing the Gupta court as a center of culture and spirituality recognized across Asia.", "wrong": ["purely religious.", "no political benefit.", "no real purpose."] },
          { start: "The construction of temples and public buildings during the Gupta period reflected the empire's belief that", "correct": "permanent structures demonstrated imperial power and provided lasting monuments to the ruler's piety and generosity.", "wrong": ["purely practical.", "no symbolic value.", "no real purpose."] },
          { start: "The development of the Gupta artistic style influenced art across Asia because", "correct": "the empire's prestige and the trade networks it controlled allowed its cultural achievements to be widely known and emulated.", "wrong": ["no real influence.", "purely local art.", "no external impact."] },
          { start: "Gupta artists and architects working under imperial patronage created works that demonstrated", "correct": "technical mastery, aesthetic sophistication, and the integration of religious and secular themes.", "wrong": ["primitive techniques.", "no real skill.", "no sophistication."] }
        ]
      },
      {
        name: "Gupta Religion & Philosophy",
        emoji: "🕯️",
        quotes: [
          { start: "The Gupta approach to religion included patronage of both Hindu temples and Buddhist monasteries because the emperors understood that", "correct": "religious tolerance and support for multiple traditions created stability and won the devotion of diverse populations.", "wrong": ["pure Hinduism only.", "no Buddhism.", "religious persecution."] },
          { start: "The revival of Sanskrit literature and philosophy during the Gupta period served to", "correct": "establish Hindu classical traditions while incorporating Buddhist and other philosophical influences.", "wrong": ["purely Hindu fundamentalism.", "no real synthesis.", "no philosophy."] },
          { start: "Gupta support for the composition of the Mahabharata and Ramayana in their final forms served to", "correct": "preserve these epic traditions, establish them as canonical texts, and promote Hindu religious and cultural values.", "wrong": ["purely entertainment.", "no real purpose.", "no cultural value."] },
          { start: "The Gupta engagement with Buddhist scholarship and philosophy, particularly at Nalanda University, demonstrated that", "correct": "the empire supported learning across religious traditions and understood that intellectual achievement transcended sectarian boundaries.", "wrong": ["purely Hindu bias.", "Buddhists were oppressed.", "no real support."] },
          { start: "The Gupta period saw the development of Hindu philosophy because thinkers could", "correct": "work freely, access resources, and engage with other scholars in an environment that valued intellectual achievement.", "wrong": ["no real philosophy.", "purely traditional.", "no innovation."] }
        ]
      },
      {
        name: "Gupta Decline & Historical Significance",
        emoji: "📜",
        quotes: [
          { start: "The decline of the Gupta Empire came from multiple factors: Hun invasions, the fragmentation of central authority, economic decline, and", "correct": "the inability of later emperors to maintain the system of governance and cultural support established by earlier rulers.", "wrong": ["purely external conquest.", "single cause.", "sudden collapse."] },
          { start: "The Gupta inability to completely repel the Huna (Hun) invasions from Central Asia showed that", "correct": "even powerful empires face challenges from determined external enemies with superior military capabilities.", "wrong": ["Gupta weakness.", "inevitable defeat.", "no real resistance."] },
          { start: "The fragmentation of the Gupta Empire into regional kingdoms after the central authority weakened demonstrated that", "correct": "without a strong central authority and the prosperity that supported it, the system of governance could not be maintained.", "wrong": ["the system was weak from the start.", "no real unity existed.", "inevitable decline."] },
          { start: "The legacy of the Gupta Empire included establishing that", "correct": "a civilization that values knowledge, supports cultural achievement, and provides stable governance can create a golden age that influences future ages.", "wrong": ["no lasting legacy.", "pure military achievement.", "cultural achievement is temporary."] },
          { start: "The study of the Gupta period demonstrates that in the ancient world,", "correct": "mathematical breakthroughs (zero, decimal system), medical advances, literary masterpieces, and scientific discoveries could emerge from patronage and institutional support.", "wrong": ["knowledge developed randomly.", "no real achievement.", "primitiveness was the norm."] }
        ]
      },
      {
        name: "Gupta Women & Social Structure",
        emoji: "👩",
        quotes: [
          { start: "Women in Gupta society had more restricted roles than in some earlier Indian periods, reflecting that", "correct": "social norms shift over time and that even in a culturally sophisticated period, gender hierarchies could be restrictive.", "wrong": ["women had complete freedom.", "no restrictions existed.", "all women were equal."] },
          { start: "The roles of queens and female members of the royal family in Gupta politics showed that", "correct": "even with overall restrictions on women, those with royal birth could exercise significant influence.", "wrong": ["no women held any power.", "purely ceremonial roles.", "no real influence."] },
          { start: "Gupta society was organized hierarchically with brahmins (priests), kshatriyas (warriors), vaishyas (merchants), and shudras (servants) because", "correct": "this varna system provided a social hierarchy that organized society and determined roles and responsibilities.", "wrong": ["purely based on wealth.", "no real structure.", "random assignment."] },
          { start: "The relative stability of Gupta society despite its hierarchical nature came from the fact that", "correct": "each level had defined roles and responsibilities, and the system allowed for movement and success within one's station.", "wrong": ["pure oppression.", "no advancement possible.", "constant rebellion."] }
        ]
      },
      {
        name: "Gupta Mathematics & Philosophy",
        emoji: "🧮",
        quotes: [
          { start: "The Gupta mathematical achievement of developing zero and the decimal system was revolutionary because it", "correct": "allowed for more efficient calculations, more sophisticated mathematical concepts, and would eventually transform mathematics worldwide.", "wrong": ["purely theoretical.", "no real importance.", "other cultures knew this."] },
          { start: "Gupta philosophers developed sophisticated systems of thought because they", "correct": "worked in an environment that valued intellectual achievement and had access to the patronage and resources necessary for deep study.", "wrong": ["no real philosophy.", "purely traditional.", "no original thought."] },
          { start: "The Gupta synthesis of Greek, Indian, and other philosophical traditions created a distinctive approach that", "correct": "drew from multiple sources while maintaining Indian intellectual traditions.", "wrong": ["purely copied others.", "no originality.", "no real synthesis."] }
        ]
      },
      {
        name: "Gupta Diplomacy & Foreign Relations",
        emoji: "🌍",
        quotes: [
          { start: "The Gupta establishment of relationships with distant powers like Rome, China, and Southeast Asian kingdoms showed that", "correct": "an empire's prestige and prosperity made it attractive as a diplomatic partner and trade partner.", "wrong": ["no real relationships.", "purely military contact.", "no diplomacy."] },
          { start: "The Gupta exchange of embassies with other states served to establish that", "correct": "the Gupta Empire was recognized as a major power worthy of formal diplomatic recognition.", "wrong": ["purely ceremonial.", "no real benefit.", "no significance."] },
          { start: "The influence of Gupta culture beyond India's borders, through the adoption of Gupta artistic styles and the spread of Buddhism, demonstrated that", "correct": "cultural achievements and the prestige of a great civilization could extend influence far beyond military conquest.", "wrong": ["no real influence.", "purely local impact.", "military power alone mattered."] }
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
        name: "Sunni Ali Ber (Founder & Military Conqueror)",
        emoji: "👑",
        quotes: [
          { start: "I conquered the Mali Empire's former territories by understanding that military strength must be combined with", "correct": "administrative skill and the ability to win the loyalty of conquered peoples.", "wrong": ["pure conquest.", "no follow-up needed.", "military force alone."] },
          { start: "The capture of Timbuktu and Gao demonstrated that a ruler must", "correct": "establish control over major cities, secure trade routes, and neutralize rival powers.", "wrong": ["only take territory.", "have no governance plan.", "purely military conquest."] },
          { start: "My expansion of Songhai required understanding that the Niger River valley could support a powerful state through", "correct": "control of trade routes, agriculture, and the cities that served as commercial and religious centers.", "wrong": ["pure military conquest.", "no economic foundation.", "random expansion."] },
          { start: "The use of military force to consolidate Songhai power also required", "correct": "establishing a navy to control the Niger River and prevent rivals from using waterways.", "wrong": ["land power alone.", "river control was unimportant.", "naval warfare was impossible."] },
          { start: "My relationship with Islamic leaders and scholars showed that even a warrior king must understand that", "correct": "cultural and religious legitimacy were important to ruling diverse peoples.", "wrong": ["religion had no importance.", "force alone was sufficient.", "scholars were irrelevant."] },
          { start: "The consolidation of Songhai power under my rule required eliminating rival power centers while ensuring that", "correct": "administrators and merchants recognized Songhai authority and benefited from it.", "wrong": ["all rivals were destroyed.", "no accommodation existed.", "pure domination."] }
        ]
      },
      {
        name: "Muhammad Askia the Great (Organization & Administration)",
        emoji: "👑",
        quotes: [
          { start: "I reorganized the Songhai Empire after taking power by establishing", "correct": "a centralized administrative system with appointed governors, reducing the power of military nobles who could threaten the throne.", "wrong": ["pure military rule.", "feudal decentralization.", "no real organization."] },
          { start: "My pilgrimage to Mecca served multiple purposes: demonstrating Islamic piety, establishing relationships with Muslim rulers, and", "correct": "enhancing my legitimacy as a Muslim ruler within the Islamic world.", "wrong": ["purely religious reasons.", "no political benefit.", "no real purpose."] },
          { start: "The expansion of Songhai to its greatest extent under my rule required establishing control over trade routes and cities while", "correct": "maintaining the balance between military power and civilian administration.", "wrong": ["pure conquest continued.", "no governance needed.", "only military leaders mattered."] },
          { start: "My approach to justice and administration emphasized that a ruler must", "correct": "be accessible to his people, enforce fair laws, and ensure that both nobles and commoners had recourse to justice.", "wrong": ["arbitrary rule was acceptable.", "only nobles mattered.", "justice was unimportant."] },
          { start: "The establishment of a civil service of educated administrators showed that I understood that", "correct": "complex empires required specialized knowledge in law, finance, and administration beyond military command.", "wrong": ["only warriors mattered.", "no administration was needed.", "education was irrelevant."] },
          { start: "My reign demonstrated that a strong Songhai Empire required balance between", "correct": "military power to defend against external threats, trade to generate wealth, and justice to maintain internal stability.", "wrong": ["only military strength.", "purely economic.", "only justice."] },
          { start: "The later military challenges to my authority showed that even a successful ruler must", "correct": "maintain the loyalty of military commanders and ensure that they see the benefits of supporting the central authority.", "wrong": ["absolute obedience was guaranteed.", "challenges never emerged.", "loyalty was automatic."] }
        ]
      },
      {
        name: "Songhai Trade & Economic Power",
        emoji: "💰",
        quotes: [
          { start: "The Songhai Empire's wealth came from controlling the gold trade because merchants crossing the Sahara had to", "correct": "pass through Songhai territory, pay taxes and customs duties, and purchase goods in Songhai markets.", "wrong": ["Songhai produced all gold.", "trade was unimportant.", "no real revenue came from trade."] },
          { start: "The cities of Timbuktu, Gao, and Djenné flourished under Songhai rule because they served as", "correct": "centers of trade where North African, Mediterranean, and sub-Saharan merchants exchanged goods and ideas.", "wrong": ["purely religious centers.", "no commerce occurred.", "military purposes only."] },
          { start: "The Songhai control of the Niger River allowed them to", "correct": "move goods efficiently, maintain military presence throughout the empire, and conduct commerce with peoples along the river.", "wrong": ["have no real advantage.", "river transport was impossible.", "purely military benefit."] },
          { start: "Songhai merchants and traders became wealthy because they could", "correct": "participate in trade networks stretching from the Mediterranean to the Indian Ocean, buying and selling luxury goods.", "wrong": ["they had no real trade.", "only local commerce existed.", "international trade was impossible."] },
          { start: "The Songhai approach to merchants and traders emphasized", "correct": "fairness in taxation, protection from bandits, and the establishment of law and order that enabled commerce to flourish.", "wrong": ["confiscation of wealth.", "arbitrary taxation.", "banditry was common."] },
          { start: "The economic foundation of Songhai power allowed the empire to", "correct": "maintain a large military, support scholars and administrators, and invest in public works and religious institutions.", "wrong": ["purely agricultural economy.", "no real wealth.", "dependent on conquest."] }
        ]
      },
      {
        name: "Timbuktu & Centers of Learning",
        emoji: "📚",
        quotes: [
          { start: "Timbuktu became a major center of Islamic learning under Songhai rule because the emperors understood that", "correct": "supporting scholars, establishing madrasas (schools), and preserving knowledge enhanced the prestige and legitimacy of Songhai rule.", "wrong": ["learning had no value.", "rulers ignored education.", "no real development occurred."] },
          { start: "The University of Timbuktu and other institutions of learning attracted scholars from across the Islamic world because", "correct": "Songhai emperors provided financial support, protection for scholars, and the establishment of libraries and schools.", "wrong": ["scholars were unwelcome.", "education was discouraged.", "no support existed."] },
          { start: "Songhai rulers invested in preserving manuscripts and establishing libraries because they understood that", "correct": "controlling knowledge and promoting learning enhanced their authority and demonstrated the sophistication of their rule.", "wrong": ["purely altruistic.", "no political benefit.", "no real value."] },
          { start: "The scholars and judges of Timbuktu helped Songhai emperors by", "correct": "providing legal knowledge based on Islamic law, interpreting religious texts, and lending religious legitimacy to ruler decisions.", "wrong": ["having no real influence.", "serving purely ceremonial roles.", "no practical authority."] },
          { start: "The preservation of African Islamic scholarship in Timbuktu created a legacy because", "correct": "the accumulated knowledge and manuscripts ensured that African Islamic intellectual traditions would survive for future generations.", "wrong": ["no real scholarship.", "purely copied from elsewhere.", "no original contributions."] },
          { start: "The decline of Songhai learning after the empire's fall showed that without state support, institutions of learning", "correct": "struggle to survive and many manuscripts and texts were lost or dispersed.", "wrong": ["scholarship is eternal.", "no loss occurred.", "learning was unimportant."] }
        ]
      },
      {
        name: "Songhai Islamic Governance & Law",
        emoji: "⚖️",
        quotes: [
          { start: "The Songhai emperors' adoption of Islam as the foundation of governance meant that", "correct": "Islamic law (Sharia), Islamic courts, and Islamic judges became central to the justice system.", "wrong": ["traditional law was rejected entirely.", "no real change occurred.", "Islam had no effect."] },
          { start: "The balance Songhai maintained between Islamic law and traditional African law showed that rulers understood that", "correct": "incorporating local traditions while respecting Islam allowed diverse peoples to accept Songhai authority.", "wrong": ["pure Islamic law alone.", "no compromise was possible.", "traditional law was eliminated."] },
          { start: "Songhai judges and Islamic scholars were given authority to interpret law and settle disputes because", "correct": "their knowledge and religious authority made them trusted arbiters whose decisions would be accepted by the people.", "wrong": ["the ruler had no trust in them.", "they had no real power.", "purely ceremonial positions."] },
          { start: "The establishment of Islamic courts in major Songhai cities served to", "correct": "provide a system of justice that was perceived as fair and based on religious law rather than arbitrary ruler decree.", "wrong": ["have no real purpose.", "no actual justice occurred.", "purely for show."] },
          { start: "The Songhai approach to religious law required that rulers be knowledgeable about Islam because", "correct": "kings had to be seen as pious Muslims whose decisions aligned with Islamic principles to maintain legitimacy.", "wrong": ["religion had no importance.", "rulers ignored Islam.", "no real requirement."] }
        ]
      },
      {
        name: "Songhai Military & Defense",
        emoji: "⚔️",
        quotes: [
          { start: "The Songhai military consisted of professional soldiers, cavalry, and navy because defending such a large empire required", "correct": "specialized military units able to respond to threats from various directions and to control the Niger River.", "wrong": ["militia alone was sufficient.", "no real military existed.", "cavalry was unimportant."] },
          { start: "The Songhai control of the Niger River required maintaining a navy because", "correct": "command of the waterway prevented rivals from using it for trade or military movement, and allowed Songhai forces to patrol the empire.", "wrong": ["river power was unimportant.", "no naval warfare occurred.", "land forces alone mattered."] },
          { start: "Songhai military commanders gained status and wealth through success in war because", "correct": "victorious generals were rewarded with land, slaves, and treasure, creating incentives for military service.", "wrong": ["purely altruistic service.", "no rewards existed.", "failure was equally rewarded."] },
          { start: "The weakness of Songhai military power against the Moroccan invasion of 1591 showed that", "correct": "a military effective against African rivals could not match a well-organized external invader with superior weapons and tactics.", "wrong": ["Songhai was always weak.", "no real threat emerged.", "internal weakness alone mattered."] },
          { start: "The Songhai military organization included appointed generals and commanders loyal to the emperor because", "correct": "the emperor needed military officers he could trust rather than relying on hereditary nobles who might pursue their own interests.", "wrong": ["hereditary commanders were preferred.", "loyalty was not necessary.", "no organization existed."] }
        ]
      },
      {
        name: "Songhai Administration & Governance",
        emoji: "👑",
        quotes: [
          { start: "The Songhai system of government under Muhammad Askia included appointed administrators in major cities because", "correct": "this allowed the emperor to maintain control from the capital while delegating authority to trusted officials.", "wrong": ["local rulers had no authority.", "decentralization was impossible.", "no administration existed."] },
          { start: "Songhai governors were expected to collect taxes, maintain order, and ensure that local merchants prospered because", "correct": "prosperous regions produced more tax revenue and were less likely to rebel.", "wrong": ["purely oppressive taxation.", "no local development.", "only force mattered."] },
          { start: "The Songhai approach to administering diverse ethnic and religious groups required", "correct": "respecting local traditions, allowing some local autonomy, and ensuring that benefits of Songhai rule were evident to the population.", "wrong": ["pure cultural erasure.", "no respect for locals.", "complete assimilation forced."] },
          { start: "Songhai corruption of administrators was controlled through a system of checks because rulers understood that", "correct": "officials who embezzled tax revenue or abused their authority weakened imperial power and provoked rebellion.", "wrong": ["corruption was acceptable.", "no controls existed.", "officials acted with impunity."] },
          { start: "The capital at Gao served as the center of Songhai administration, housing the emperor, his court, and government officials because", "correct": "a centralized capital allowed the emperor to oversee administration and demonstrate imperial power.", "wrong": ["purely ceremonial location.", "no administrative function.", "no real purpose."] }
        ]
      },
      {
        name: "Songhai Diplomacy & Foreign Relations",
        emoji: "🌍",
        quotes: [
          { start: "The Songhai relationship with North African kingdoms across the Sahara was based on", "correct": "trade, shared Islamic faith, and recognition that both regions benefited from maintaining stable commercial relationships.", "wrong": ["pure hostility.", "no real contact.", "only conquest."] },
          { start: "Muhammad Askia's pilgrimage to Mecca and his establishment of relationships with other Muslim rulers served to", "correct": "position Songhai within the Islamic world and gain access to resources, knowledge, and religious legitimacy.", "wrong": ["purely religious journey.", "no political benefit.", "no real diplomacy."] },
          { start: "The Songhai approach to neighboring African kingdoms that resisted Songhai expansion required", "correct": "military campaigns when necessary but also the flexibility to establish tributary relationships without requiring complete conquest.", "wrong": ["only total conquest.", "no flexibility existed.", "pure military force."] },
          { start: "The relationship between Songhai and the Moroccan kingdom across the Sahara eventually became hostile because", "correct": "Morocco sought control of Songhai's wealth and trade routes, leading to the 1591 invasion.", "wrong": ["no real conflict.", "purely commercial.", "no strategic interest."] }
        ]
      },
      {
        name: "Songhai Culture & Religious Authority",
        emoji: "🕯️",
        quotes: [
          { start: "The Songhai adoption of Islam created a framework for governance because it provided", "correct": "a shared set of principles with other Islamic states and gave emperors religious legitimacy with their population.", "wrong": ["purely religious devotion.", "no political benefit.", "only spiritual reasons."] },
          { start: "The balance Songhai emperors maintained between Islamic law and traditional African practices showed that", "correct": "accepting local traditions while adopting Islam allowed diverse populations to accept Songhai authority.", "wrong": ["complete Islamization.", "no compromise existed.", "tradition was irrelevant."] },
          { start: "The respect shown to Islamic scholars and judges in Songhai demonstrated that emperors understood that", "correct": "religious and intellectual authority could be as important as military power in governing a diverse population.", "wrong": ["scholars had no authority.", "religion was unimportant.", "only force mattered."] },
          { start: "Songhai artistic and literary traditions flourished under imperial patronage because the emperors believed that", "correct": "supporting cultural expression enhanced the prestige of the empire and demonstrated its sophistication.", "wrong": ["art had no value.", "purely decorative.", "no real importance."] },
          { start: "The preservation of African Islamic culture in Songhai cities created a legacy because", "correct": "African Islamic intellectual and artistic traditions were maintained and transmitted to future generations.", "wrong": ["no real culture.", "purely copied.", "no original contributions."] }
        ]
      },
      {
        name: "Songhai Decline & Fall",
        emoji: "📜",
        quotes: [
          { start: "The invasion of Songhai by Morocco in 1591 succeeded because Moroccan forces possessed", "correct": "superior firepower (arquebuses and cannons) and a different military organization that Songhai cavalry could not effectively counter.", "wrong": ["Songhai was weak.", "internal collapse occurred.", "pure military superiority."] },
          { start: "The fall of Songhai showed that even well-organized African empires could not resist", "correct": "external military invasion with superior weapons and tactics, particularly when the invader was motivated by control of trade and resources.", "wrong": ["Africa was naturally inferior.", "no real power existed.", "inevitable decline."] },
          { start: "The decline of Songhai after the Moroccan invasion resulted from", "correct": "the disruption of trade routes, the fragmentation of the empire into smaller states, and the loss of control over major cities.", "wrong": ["pure military defeat.", "immediate collapse.", "no real reason."] },
          { start: "The legacy of Songhai included", "correct": "the establishment of centers of Islamic learning that preserved African Islamic scholarship, the demonstration of a sophisticated African empire, and trade systems that connected the continent to the broader world.", "wrong": ["no real legacy.", "pure destruction.", "no cultural contribution."] },
          { start: "The study of Songhai demonstrates that", "correct": "sophisticated, organized African states with justice systems, centers of learning, and complex administrations existed well before European colonization.", "wrong": ["Africa had no real civilization.", "no organization existed.", "no learning occurred."] }
        ]
      },
      {
        name: "Songhai Merchants & Craftspeople",
        emoji: "🛠️",
        quotes: [
          { start: "Songhai merchants who traveled across West Africa and to North Africa built wealth through", "correct": "understanding market prices, maintaining trading relationships, and managing the risks of long-distance trade.", "wrong": ["pure luck.", "no skill required.", "theft and plunder."] },
          { start: "The craftspeople of Songhai cities—metalworkers, weavers, potters—gained status in society because", "correct": "their skills were valued and their products were traded across West Africa and beyond.", "wrong": ["they had no status.", "crafts were unimportant.", "only military people were valued."] },
          { start: "Songhai support for merchants and traders through protection and fair taxation served to", "correct": "make Songhai cities attractive to traders and ensure that commerce flourished, generating tax revenue for the empire.", "wrong": ["purely exploitative.", "merchants were mistreated.", "no real benefit."] },
          { start: "The role of markets in Songhai cities was central to empire because they", "correct": "served as centers of economic exchange, places for tax collection, and venues where the emperor could display wealth and power.", "wrong": ["purely ceremonial.", "no real function.", "only for commoners."] }
        ]
      },
      {
        name: "Songhai Social Structure & Values",
        emoji: "🏛️",
        quotes: [
          { start: "Songhai society was organized into distinct classes: the royal family, nobles, merchants, scholars, soldiers, and commoners because", "correct": "this hierarchy allowed for specialization and coordination of complex tasks necessary for empire.", "wrong": ["all were equal.", "no real structure.", "random organization."] },
          { start: "The role of scholars and judges in Songhai society was elevated because they possessed knowledge that", "correct": "was essential to understanding Islamic law, recording important information, and advising rulers.", "wrong": ["they had no authority.", "knowledge was unvalued.", "purely ceremonial positions."] },
          { start: "Women in Songhai society could own property, conduct trade, and exercise authority within families because", "correct": "the society recognized women's economic contributions and their role in maintaining families and communities.", "wrong": ["women were powerless.", "no authority existed.", "purely dependent."] },
          { start: "Songhai values emphasized justice, honor, and knowledge because", "correct": "a ruler who was just and knowledgeable would be respected and his empire would be stable and prosperous.", "wrong": ["only military prowess mattered.", "justice was irrelevant.", "knowledge had no value."] }
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
        name: "Arsaces I & Early Parthian Kings (Founders)",
        emoji: "👑",
        quotes: [
          { start: "We Parthians broke free from Seleucid rule by understanding that", "correct": "guerrilla warfare, mobility, and control of the steppes could overcome more heavily equipped armies.", "wrong": ["direct conquest was necessary.", "no strategy was needed.", "we were militarily superior."] },
          { start: "The early Parthian kings consolidated power by establishing", "correct": "a feudal system where powerful nobles maintained semi-autonomous territories in exchange for military support and loyalty to the king.", "wrong": ["centralized control.", "equal governance.", "no hierarchy."] },
          { start: "Our success in establishing an independent kingdom from Seleucid collapse showed that", "correct": "timing, military effectiveness, and the ability to exploit a weakening empire were essential to independence.", "wrong": ["conquest was easy.", "no resistance was expected.", "pure luck."] },
          { start: "A Parthian king's authority derived from the support of powerful nobles called the 'King's Friends' because", "correct": "without their loyalty and military support, a king could be removed and replaced.", "wrong": ["the king ruled absolutely.", "nobles had no real power.", "heredity alone determined succession."] },
          { start: "The Parthian preference for light cavalry and horse archers proved more effective against Seleucid forces because they", "correct": "allowed quick strikes, rapid retreat, and the ability to harass armies across open terrain.", "wrong": ["heavy infantry was obsolete.", "cavalry was unimportant.", "tactics did not matter."] }
        ]
      },
      {
        name: "Mithridates I the Great (Expansion & Power)",
        emoji: "🐴",
        quotes: [
          { start: "My conquest of Mesopotamia from the Seleucids required not only military campaigns but also", "correct": "establishing administration, winning over local populations, and securing the region against counterattack.", "wrong": ["pure conquest.", "no follow-up needed.", "no governance."] },
          { start: "I recognized that the Parthian Empire's greatest strength was the ability to field mounted archers who could", "correct": "strike from distance while remaining mobile, making them superior in open terrain.", "wrong": ["dominate in sieges.", "fight in tight formations.", "overcome disciplined legionaries easily."] },
          { start: "The expansion of Parthian territory under my reign to stretch from the Euphrates to the borders of India demonstrated that", "correct": "a king who could successfully campaign and maintain the loyalty of nobles could build a vast empire.", "wrong": ["conquest was unlimited.", "no limits existed.", "Rome posed no threat."] },
          { start: "My relations with the Seleucid and Greek rulers showed that a Parthian king must understand", "correct": "diplomacy, recognizing when to negotiate, when to fight, and when to use marriages and alliances.", "wrong": ["only military force mattered.", "diplomacy was weakness.", "no negotiation was necessary."] },
          { start: "The maintenance of Parthian independence required understanding that", "correct": "the Parthian Empire occupied a position between Roman and Indian powers and had to navigate these relationships carefully.", "wrong": ["Parthia was invulnerable.", "no external threats existed.", "Rome could easily conquer us."] }
        ]
      },
      {
        name: "Parthian Warfare & Military Strategy",
        emoji: "🏹",
        quotes: [
          { start: "The Parthian 'Parthian shot'—shooting arrows while retreating on horseback—proved devastatingly effective against Roman legions because it", "correct": "allowed Parthian cavalry to inflict casualties while avoiding close combat where legionary discipline was superior.", "wrong": ["legionaries could not respond.", "it was the only tactic.", "it always guaranteed victory."] },
          { start: "Parthian military organization centered on powerful nobles with their own cavalry forces because", "correct": "the feudal system required that each major noble contribute military forces under the king's command.", "wrong": ["the king had no real army.", "centralization was impossible.", "no unified military existed."] },
          { start: "The Parthian use of combined arms—light cavalry, heavy cavalry, and infantry—showed that", "correct": "effective military strategy required diverse unit types that could work together against different enemies.", "wrong": ["cavalry alone was sufficient.", "infantry was unimportant.", "no coordination was needed."] },
          { start: "The Parthian victories against Rome at Carrhae and elsewhere demonstrated that light cavalry could defeat heavy infantry when", "correct": "the cavalry had superior mobility, could choose the terrain, and could exhaust the enemy through harassment.", "wrong": ["cavalry was always superior.", "Romans had no tactics.", "heavy infantry was obsolete."] },
          { start: "Parthian generals who successfully maintained power understood that preserving their cavalry forces was more important than", "correct": "capturing territory, because without cavalry, Parthian power would collapse.", "wrong": ["holding cities.", "dominating regions.", "controlling wealth."] },
          { start: "The Parthian approach to fortress warfare often involved", "correct": "using siege equipment, cutting supply lines, and exhausting defenders rather than accepting casualties in direct assault.", "wrong": ["only cavalry tactics.", "ignoring fortifications.", "suffering heavy losses."] }
        ]
      },
      {
        name: "Parthian Nobles & Feudal System",
        emoji: "👑",
        quotes: [
          { start: "The Parthian system of government relied on powerful nobles who", "correct": "maintained their own territories, collected taxes, and provided military forces to the king in exchange for recognition of their autonomy.", "wrong": ["served at the king's pleasure.", "had no real power.", "were completely subordinate."] },
          { start: "A Parthian king who tried to centralize power or reduce noble autonomy would", "correct": "face rebellion or deposition, as the nobles would unite against any threat to their independence.", "wrong": ["succeed easily.", "gain more power.", "be accepted by the nobles."] },
          { start: "The 'King's Friends'—the highest tier of Parthian nobility—held power because they", "correct": "controlled vast territories, commanded military forces, and could make or break a king's reign.", "wrong": ["the king appointed them absolutely.", "they had purely ceremonial roles.", "they were powerless."] },
          { start: "Parthian succession disputes often involved competing claimants supported by different noble factions because", "correct": "the nobles had the power to choose between candidates and would back those favorable to their interests.", "wrong": ["heredity was absolute.", "the nobles had no voice.", "succession was automatic."] },
          { start: "The strength of the Parthian feudal system was that it allowed", "correct": "a decentralized structure that could survive the loss of a weak king and adapt to regional differences.", "wrong": ["complete centralization.", "absolute monarchy.", "uniform governance."] },
          { start: "The weakness of the Parthian feudal system was that it", "correct": "made unified action difficult, allowed powerful nobles to pursue their own interests, and created vulnerability to division.", "wrong": ["prevented military success.", "made the empire weak.", "allowed easy conquest."] }
        ]
      },
      {
        name: "Parthian Relations with Rome",
        emoji: "⚔️",
        quotes: [
          { start: "The Parthian Empire's greatest challenge was the rise of Rome because Rome could field", "correct": "massive armies with superior organization and discipline, requiring Parthian strategy to focus on avoiding direct confrontation.", "wrong": ["Parthia was superior militarily.", "Rome was easily defeated.", "no real threat existed."] },
          { start: "The Parthian strategy against Rome involved", "correct": "defensive campaigns, using terrain advantages, harassing Roman armies, and avoiding large-scale pitched battles when possible.", "wrong": ["direct conquest of Roman territory.", "constant aggression.", "seeking decisive battles."] },
          { start: "The Battle of Carrhae in 53 BCE, where Parthian forces under Orodes II defeated the Roman general Crassus, demonstrated that", "correct": "skilled use of cavalry and terrain could overcome even experienced Roman legions.", "wrong": ["Parthia was militarily superior overall.", "Rome could never win.", "legionaries were ineffective."] },
          { start: "The long-term conflict between Parthia and Rome remained inconclusive because", "correct": "Parthian light cavalry was superior in open terrain but Romans were superior in siege warfare, creating a strategic stalemate.", "wrong": ["Parthia was undefeated.", "Rome was undefeated.", "neither side had advantages."] },
          { start: "Parthian kings maintained peace with Rome when necessary because they", "correct": "recognized that continuous war with Rome would drain resources and that periods of peace allowed consolidation of power.", "wrong": ["Rome was too powerful.", "Parthia feared Rome.", "no choice existed."] },
          { start: "The Parthian use of Armenia as a buffer state and zone of competition with Rome showed that", "correct": "control of territories between the two empires was essential to maintaining balance and preventing direct Roman invasion.", "wrong": ["Parthia was weak.", "Rome dominated Armenia entirely.", "the region was unimportant."] }
        ]
      },
      {
        name: "Parthian Trade & Economic Power",
        emoji: "💰",
        quotes: [
          { start: "The Parthian control of the Silk Road trade routes gave them enormous power because they could", "correct": "tax merchants, control the flow of goods between China, India, and the Mediterranean, and accumulate wealth.", "wrong": ["they isolated trade.", "no wealth resulted.", "merchants avoided Parthia."] },
          { start: "Parthian kings used control of trade routes to establish relationships with distant powers like China because", "correct": "trade created mutual interests and opportunities for diplomacy without direct military confrontation.", "wrong": ["purely economic reasons.", "no political benefit.", "trade had no importance."] },
          { start: "The Parthian approach to merchants and trade emphasized", "correct": "maintaining the flow of commerce, ensuring merchant safety on Parthian territory, and extracting profits through taxation.", "wrong": ["no regulations.", "merchants were exploited ruthlessly.", "trade was discouraged."] },
          { start: "Parthian cities like Ctesiphon became wealthy centers of trade and culture because they", "correct": "sat on major trade routes and the kings invested in their development as administrative and commercial centers.", "wrong": ["no real purpose existed.", "purely military bases.", "no commerce occurred."] },
          { start: "The Parthian wealth from trade allowed them to", "correct": "maintain a large military, support a court and nobility, and survive periods of conflict with Rome.", "wrong": ["purely accumulate gold.", "no strategic benefit.", "no military advantage."] }
        ]
      },
      {
        name: "Parthian Governance & Administration",
        emoji: "⚖️",
        quotes: [
          { start: "The Parthian system of governance combined Persian traditions with new structures appropriate to a feudal state because", "correct": "the empire ruled diverse peoples and needed to balance central authority with local autonomy.", "wrong": ["purely Greek systems.", "no tradition survived.", "centralization was absolute."] },
          { start: "Parthian kings maintained legitimacy by positioning themselves as heirs to Persian imperial traditions because this", "correct": "gave them authority over Persian territories and populations that had previously been ruled by Persian emperors.", "wrong": ["no real benefit.", "purely ceremonial.", "no local support resulted."] },
          { start: "The Parthian use of a capital (first Ctesiphon, then other cities) served to", "correct": "provide a center for administration, display royal power, and serve as a focus for trade and culture.", "wrong": ["have no real purpose.", "purely for prestige.", "only military function."] },
          { start: "Parthian administration of conquered territories often involved", "correct": "allowing local rulers to maintain power under Parthian oversight, respecting local traditions, and extracting tribute.", "wrong": ["replacing all local rulers.", "imposing uniform governance.", "cultural erasure."] },
          { start: "The Parthian approach to governing client kingdoms and vassal states required", "correct": "balancing the autonomy of local rulers with ensuring their loyalty and preventing them from becoming too independent.", "wrong": ["absolute control.", "no freedom allowed.", "complete assimilation."] }
        ]
      },
      {
        name: "Parthian Culture & Hellenization",
        emoji: "🏛️",
        quotes: [
          { start: "The Parthian adoption of some Hellenistic elements while maintaining Persian traditions demonstrated that", "correct": "the Parthian elite could adopt useful foreign customs while maintaining cultural identity and authority.", "wrong": ["pure Hellenization occurred.", "all Persian culture was rejected.", "no change happened."] },
          { start: "The Parthian royal court's use of Greek language and culture in some contexts served to", "correct": "facilitate diplomatic communication and demonstrate the kings' sophistication to Greek and Mediterranean powers.", "wrong": ["no real purpose.", "purely for show.", "no strategic benefit."] },
          { start: "The Parthian preservation and promotion of Persian cultural traditions—art, literature, ceremony—showed that", "correct": "the kings understood that cultural legitimacy required connection to Persian imperial past.", "wrong": ["no cultural pride existed.", "purely Greek culture.", "no tradition survived."] },
          { start: "The Parthian religious tolerance, allowing the continuation of Zoroastrianism and respect for local religions, served to", "correct": "maintain the loyalty of diverse populations and demonstrate that Parthian rule was civilized and respectful.", "wrong": ["no religious policy existed.", "only Zoroastrianism was allowed.", "all religions were suppressed."] }
        ]
      },
      {
        name: "Parthian Diplomacy & Foreign Relations",
        emoji: "📜",
        quotes: [
          { start: "The Parthian approach to diplomacy with Rome involved using envoys, exchanging embassies, and negotiating treaties because", "correct": "continuous war with Rome was exhausting and periods of peace allowed focus on internal consolidation and other threats.", "wrong": ["Parthia feared Rome.", "weakness was demonstrated.", "no real diplomacy occurred."] },
          { start: "Parthian diplomatic marriages with neighboring powers served to", "correct": "cement alliances, create networks of kinship with other rulers, and provide leverage in negotiations.", "wrong": ["have no strategic value.", "purely ceremonial.", "no real benefit."] },
          { start: "The Parthian maintenance of relationships with India, China, and other distant powers showed that the kings understood", "correct": "that diplomatic relationships could create mutual interests and that trade partnerships could be as valuable as military alliances.", "wrong": ["no real relationships.", "purely commercial.", "no strategic value."] },
          { start: "The Parthian use of diplomacy with client kingdoms required demonstrating that", "correct": "Parthian protection was valuable and that the client would benefit more from loyalty than from resistance or rebellion.", "wrong": ["pure force was used.", "no benefits existed.", "only submission was acceptable."] }
        ]
      },
      {
        name: "Parthian Succession & Dynastic Politics",
        emoji: "👑",
        quotes: [
          { start: "Parthian succession disputes were common because the feudal system meant that", "correct": "powerful nobles could support different claimants and a weak king could be removed by the nobles.", "wrong": ["heredity was absolute.", "succession was uncontested.", "no change ever occurred."] },
          { start: "A Parthian king had to maintain the support of the major nobles or risk", "correct": "deposition or assassination, as the nobles collectively had the power to choose a different ruler.", "wrong": ["absolute rule.", "no opposition.", "eternal power."] },
          { start: "The Parthian practice of sometimes executing or blinding rival claimants served to", "correct": "eliminate the possibility of rivals using family connections to challenge the reigning king.", "wrong": ["have no strategic purpose.", "purely cruel.", "no real benefit."] },
          { start: "The long reign of a successful Parthian king like Mithridates I was possible because he", "correct": "maintained military victories, kept the nobles satisfied, and demonstrated that his rule benefited the empire.", "wrong": ["any king could rule indefinitely.", "heredity alone mattered.", "nobles had no power."] }
        ]
      },
      {
        name: "Parthian Decline & Fall",
        emoji: "📜",
        quotes: [
          { start: "The weakening of Parthian power came from multiple sources: the rise of the Sassanid Persians, continuing conflict with Rome, internal noble conflict, and", "correct": "the inherent limitations of the feudal system in responding to organized challenges.", "wrong": ["purely external conquest.", "single cause.", "sudden collapse."] },
          { start: "The inability of later Parthian kings to maintain unified action against the Sassanid challenge showed that", "correct": "the feudal system's decentralization, which gave strength in other contexts, became a weakness when facing a centralized rival.", "wrong": ["Parthia was weak.", "Rome destroyed it.", "no real threat existed."] },
          { start: "The final collapse of Parthian power to the Sassanids demonstrated that", "correct": "even successful empires that survive for centuries can decline when facing a more effectively organized rival with similar military capabilities.", "wrong": ["Parthia had no real power.", "sudden conquest occurred.", "weakness was always present."] },
          { start: "The Parthian legacy included establishing that", "correct": "light cavalry and mobile warfare could compete with heavy infantry and legionary discipline, and that an empire based on feudal relationships could survive for centuries.", "wrong": ["only heavy infantry mattered.", "no military legacy.", "empires are eternal."] }
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
        name: "Seleucus I Nicator (Founder & Historical Records)",
        emoji: "👑",
        quotes: [
          { start: "I was appointed by Alexander to rule Babylon, and through my skill and determination, I expanded this into an empire stretching from", "correct": "the Mediterranean to India.", "wrong": ["the Aegean alone.", "only Mesopotamia.", "a small kingdom."] },
          { start: "To maintain control of such vast territories, a king must establish", "correct": "cities, administrative centers, and a system of governance that allows distant regions to function semi-independently.", "wrong": ["absolute centralization.", "military rule alone.", "no structure."] },
          { start: "The founding of cities like Antioch and Seleucia-on-the-Tigris served to", "correct": "create centers of Hellenistic culture, facilitate administration, and establish focal points for trade and military power.", "wrong": ["have no real purpose.", "purely ceremonial.", "only for defense."] },
          { start: "My dynasty's survival depended on balancing Greek culture with respect for local traditions because", "correct": "the empire governed diverse peoples with different customs, religions, and languages.", "wrong": ["all were Greeks.", "local traditions were rejected.", "no adaptation was needed."] },
          { start: "The ability to defeat rivals like Lysimachus and Antigonus Monophthalmus required not only military skill but also", "correct": "diplomacy, intelligence gathering, and willingness to form strategic alliances.", "wrong": ["pure military force.", "no strategy.", "no allies."] },
          { start: "A Seleucid king's authority came from demonstrating ability to", "correct": "maintain order, protect territories, expand influence, and provide stability.", "wrong": ["inheritance alone.", "ritual alone.", "no accountability."] }
        ]
      },
      {
        name: "Antiochus III the Great (Expansion & Power)",
        emoji: "🐘",
        quotes: [
          { start: "My campaigns to recover the eastern territories lost during the troubled times showed that a Seleucid king must", "correct": "be willing to take military action to maintain the empire's integrity and prestige.", "wrong": ["accept losses without resistance.", "rule passively.", "ignore distant territories."] },
          { start: "The confrontation with Rome at Thermopylae demonstrated that even a powerful Seleucid king could not", "correct": "successfully resist the rising power of Rome when Rome committed its full force.", "wrong": ["be defeated militarily.", "lack military skill.", "have no chance of victory."] },
          { start: "A Seleucid king's responsibilities included managing relationships with powerful neighbors through a combination of", "correct": "diplomacy, strategic marriages, military preparedness, and maintaining trade relationships.", "wrong": ["pure military domination.", "complete isolation.", "no negotiation."] },
          { start: "The extent of my campaigns across Asia demonstrated that a Seleucid king could not actually", "correct": "effectively administer and defend territories stretching from the Mediterranean to India.", "wrong": ["rule vast empires.", "extend power far.", "maintain control."] },
          { start: "My reign showed that the Seleucid Empire's vulnerability came from", "correct": "distance between center and periphery, the ambitions of powerful generals, and the rise of new powers like Rome.", "wrong": ["internal weakness.", "lack of military power.", "no real stability."] }
        ]
      },
      {
        name: "Seleucid Governance & Administration",
        emoji: "⚖️",
        quotes: [
          { start: "The Seleucid system of government required appointing governors and administrators because", "correct": "a single king could not personally oversee such vast and diverse territories.", "wrong": ["the king lacked power.", "administrators had no authority.", "centralization was impossible."] },
          { start: "Seleucid kings maintained power by using a combination of", "correct": "Hellenistic administration, religious authority, military strength, and respect for local traditions.", "wrong": ["pure force.", "no respect for locals.", "centralized control alone."] },
          { start: "The Seleucid practice of founding Greek cities served multiple purposes: cultural expression, strategic military positions, and", "correct": "centers for administration, trade, and the spread of Hellenistic culture.", "wrong": ["purely for display.", "no practical benefit.", "only for prestige."] },
          { start: "Seleucid kings used the Ptolemaic dynasty of Egypt as both allies and rivals because", "correct": "both dynasties competed for influence in Syria, Palestine, and the eastern Mediterranean.", "wrong": ["they were always enemies.", "no relationship existed.", "Egypt was weak."] },
          { start: "The integration of Mesopotamian and Persian administrative traditions into Seleucid governance showed that", "correct": "the empire adapted existing systems rather than imposing purely Greek administration.", "wrong": ["all systems were Greek.", "no adaptation occurred.", "local traditions were rejected."] }
        ]
      },
      {
        name: "Seleucid Military & Strategy",
        emoji: "⚔️",
        quotes: [
          { start: "The Seleucid military was strengthened by recruiting from diverse regions because", "correct": "troops from different backgrounds brought varied skills: archers from Persia, cavalry from Bactria, infantry from Anatolia.", "wrong": ["all were Greek.", "no diversification existed.", "it weakened the army."] },
          { start: "The use of war elephants by Seleucid forces, inherited from Alexander's campaigns, served as", "correct": "psychological weapons and platforms for commanders, giving advantages in specific terrain and situations.", "wrong": ["purely for show.", "ineffective in battle.", "only for terror."] },
          { start: "Seleucid military reforms and innovations were necessary because they faced threats from", "correct": "the rising power of Rome, independent Hellenistic kingdoms, and local resistance movements.", "wrong": ["no real enemies.", "pure dominance.", "no challenges."] },
          { start: "The loss of eastern territories to rising powers like Parthia and the loss of Syria to Egypt demonstrated that", "correct": "even strong military powers cannot maintain all territories when facing multiple determined opponents.", "wrong": ["military weakness alone.", "poor leadership.", "inevitable decline."] },
          { start: "Seleucid generals and kings who successfully maintained power understood that military victory must be followed by", "correct": "consolidation, establishing administration, securing supply lines, and maintaining local support.", "wrong": ["only conquest.", "no follow-up needed.", "pure military rule."] }
        ]
      },
      {
        name: "Seleucid Hellenization & Cultural Policy",
        emoji: "🏛️",
        quotes: [
          { start: "The Seleucid policy of promoting Hellenistic culture through architecture, language, and education served to", "correct": "unite diverse conquered territories under a shared cultural framework and legitimize Greek rule.", "wrong": ["purely for vanity.", "no practical purpose.", "cultural erasure."] },
          { start: "The founding of cities with Greek names, temples to Greek gods, and gymnasiums demonstrated that Seleucid kings believed that", "correct": "Hellenistic culture was a tool of governance and a way to integrate diverse populations.", "wrong": ["culture had no importance.", "purely ceremonial.", "no real effect."] },
          { start: "The Seleucid approach to religion included tolerance for local cults and the introduction of Greek gods because", "correct": "this strategy both respected local populations and promoted a shared cultural identity.", "wrong": ["all gods were equal.", "no strategy existed.", "local cults were suppressed."] },
          { start: "The use of Greek as the administrative language of the Seleucid Empire facilitated", "correct": "communication across the empire and created a common language for educated elites and officials.", "wrong": ["no real benefit.", "purely for pride.", "local languages were rejected."] },
          { start: "The Seleucid promotion of philosophy, art, and literature through patronage served to", "correct": "enhance the prestige of Seleucid kings, attract talented people, and legitimize their rule through cultural achievement.", "wrong": ["purely for entertainment.", "no real purpose.", "only for the elite."] }
        ]
      },
      {
        name: "Seleucid Economic Systems & Trade",
        emoji: "💰",
        quotes: [
          { start: "The Seleucid economy depended on control of trade routes between", "correct": "the Mediterranean, Mesopotamia, and Asia, which brought wealth through customs duties and merchant taxes.", "wrong": ["military conquest alone.", "agriculture only.", "no real commerce."] },
          { start: "Seleucid kings maintained economic power by controlling mints and establishing a standardized coinage because", "correct": "this allowed them to regulate commerce, collect taxes, and display authority and prestige.", "wrong": ["no real benefit.", "purely ceremonial.", "no economic value."] },
          { start: "The Seleucid approach to taxation required establishing a balance between", "correct": "extracting sufficient revenue for the state while not driving regions to rebellion or economic collapse.", "wrong": ["maximum extraction.", "no taxation.", "equal treatment of all."] },
          { start: "Seleucid cities benefited from their role as centers of trade because they could", "correct": "collect taxes on commerce, attract merchants and craftspeople, and grow wealthy through commercial activity.", "wrong": ["have no real purpose.", "purely military bases.", "only for administration."] },
          { start: "The Seleucid control of spice routes and luxury goods trade allowed them to", "correct": "accumulate wealth that could be used for military campaigns, building projects, and maintaining elite networks.", "wrong": ["have limited wealth.", "purely ceremonial.", "no economic advantage."] }
        ]
      },
      {
        name: "Seleucid Philosophers & Intellectual Life",
        emoji: "📚",
        quotes: [
          { start: "Seleucid patronage of philosophers and scholars served the kings' interests by", "correct": "enhancing prestige, attracting talent, and promoting the idea that Seleucid rule was civilized and enlightened.", "wrong": ["purely charitable.", "no political benefit.", "purely for entertainment."] },
          { start: "The promotion of Greek philosophy, mathematics, and science in Seleucid cities contributed to", "correct": "cultural advancement, technological innovation, and the establishment of centers of learning that attracted scholars from across the known world.", "wrong": ["having no real value.", "purely ceremonial.", "entertainment only."] },
          { start: "Seleucid scholars built on the legacy of Alexander by preserving and developing knowledge in fields like", "correct": "mathematics, astronomy, medicine, geography, and philosophy.", "wrong": ["purely military knowledge.", "no innovation.", "no learning."] },
          { start: "The use of Greek learning as a tool of governance demonstrated that Seleucid rulers understood that", "correct": "cultural and intellectual leadership could be as important as military power in establishing authority.", "wrong": ["only force mattered.", "learning had no value.", "culture was irrelevant."] }
        ]
      },
      {
        name: "Seleucid Relations with Subject Peoples",
        emoji: "🌍",
        quotes: [
          { start: "The Seleucid approach to governing diverse ethnic and religious groups required", "correct": "respecting local traditions, allowing local rulers to maintain power under Seleucid oversight, and tolerating religious practices.", "wrong": ["pure cultural erasure.", "no respect for locals.", "complete assimilation forced."] },
          { start: "The Seleucid treatment of Jerusalem and Judea showed the limits of cultural tolerance when", "correct": "efforts to impose Greek culture and religious practices on the Jewish population led to the Maccabean Revolt.", "wrong": ["Jews were always loyal.", "no resistance occurred.", "tolerance was absolute."] },
          { start: "The survival of Seleucid rule depended on the willingness of local elites to", "correct": "accept Seleucid authority in exchange for maintaining their local power and the ability to govern their people.", "wrong": ["complete submission.", "no local autonomy.", "forced cultural change."] },
          { start: "The Seleucid inability to fully assimilate distant territories like Bactria and Parthia demonstrated that", "correct": "vast empires cannot impose uniform culture on all subjects, and distant regions eventually seek independence.", "wrong": ["Seleucid power was unlimited.", "no resistance was possible.", "all territories were equal."] }
        ]
      },
      {
        name: "Seleucid Decline & Historical Significance",
        emoji: "📜",
        quotes: [
          { start: "The decline of the Seleucid Empire resulted from a combination of factors: the rise of Rome, the loss of eastern territories, internal civil conflict, and", "correct": "the inability to effectively govern territories stretching from the Mediterranean to central Asia.", "wrong": ["purely military defeat.", "single cause.", "inevitable decline."] },
          { start: "The Seleucid inability to maintain unity despite founding a vast empire showed that", "correct": "even effective governance systems cannot hold together such diverse territories indefinitely when facing external pressure.", "wrong": ["their system was weak.", "no real governance existed.", "Rome conquered it all."] },
          { start: "The Seleucid legacy in the regions they ruled included", "correct": "the spread of Hellenistic culture, the founding of cities that continued as important centers, and the establishment of administrative systems that influenced later empires.", "wrong": ["pure destruction.", "no lasting impact.", "complete cultural erasure."] },
          { start: "The study of the Seleucid Empire demonstrates that", "correct": "even powerful Hellenistic kingdoms could not resist the rising power of Rome and the forces of regional independence.", "wrong": ["Rome was invincible.", "Hellenism was superior.", "empires are eternal."] },
          { start: "The Seleucid attempt to rule diverse territories from the Mediterranean to India was ultimately limited by", "correct": "the technology of the time (slow communication, difficult travel) and the distances involved, which made centralized control impossible.", "wrong": ["lack of military power.", "poor leadership.", "internal weakness."] }
        ]
      },
      {
        name: "Seleucid Dynastic Politics & Succession",
        emoji: "👑",
        quotes: [
          { start: "Seleucid succession often led to civil conflict because", "correct": "multiple claimants competed for power and generals and officials chose sides based on their interests.", "wrong": ["primogeniture was always followed.", "no real competition.", "smooth transitions."] },
          { start: "The use of dynastic marriages to create alliances with other Hellenistic kingdoms showed that Seleucid kings understood that", "correct": "political relationships based on family ties could be as important as military alliances.", "wrong": ["marriages had no value.", "only military alliance mattered.", "no strategy."] },
          { start: "The co-rule system used by some Seleucid kings (where a son ruled alongside his father) served to", "correct": "prepare the heir for rule, maintain continuity, and prevent rival claimants from gaining power during transition.", "wrong": ["weaken central authority.", "no real purpose.", "create conflict."] },
          { start: "The removal of a Seleucid king from power by generals or rivals required demonstrating that", "correct": "he was incompetent, unable to defend the realm, or had lost the support of powerful factions.", "wrong": ["only military force.", "no real criteria.", "purely hereditary succession."] }
        ]
      },
      {
        name: "Seleucid Military Innovations & Adaptation",
        emoji: "⚔️",
        quotes: [
          { start: "The Seleucid military developed tactics to counter Roman legions because", "correct": "Roman military organization and discipline required new strategies to remain competitive.", "wrong": ["they defeated Rome always.", "no adaptation was needed.", "tactics did not matter."] },
          { start: "The use of heavy cavalry and specialized units showed that Seleucid generals understood that", "correct": "effective warfare required diverse unit types that could work together rather than relying on a single type of soldier.", "wrong": ["cavalry was unimportant.", "specialization did not matter.", "quantity alone was important."] },
          { start: "The Seleucid maintenance of a navy served to", "correct": "protect trade routes, contest control of maritime regions, and project power beyond land territories.", "wrong": ["have no real purpose.", "purely for prestige.", "land power was sufficient."] }
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
          { start: "A Celtic chieftain's authority came from his ability to", "correct": "gather warriors, provide protection, and distribute wealth among his followers.", "wrong": ["inherit position without challenge.", "rule unopposed.", "have no rivals."] },
          { start: "Celtic tribes remained independent and often in conflict with each other because", "correct": "each chieftain sought to expand territory, gain prestige, and accumulate treasure and followers.", "wrong": ["unity was their goal.", "no ambition existed.", "they rejected warfare."] },
          { start: "A Celtic leader who lost battles or failed to protect his people would likely", "correct": "lose his warriors' loyalty and be replaced by a more capable rival.", "wrong": ["retain power indefinitely.", "rule unquestioned.", "gain more authority."] },
          { start: "Celtic warfare between tribes served important purposes: gaining cattle, slaves, and treasure; acquiring prestige; and", "correct": "establishing dominance and the right to levy tribute.", "wrong": ["purely ceremonial.", "no economic purpose.", "gaining land only."] },
          { start: "The Celtic value system emphasized personal bravery and honor because a chieftain's power depended on", "correct": "the loyalty of warriors attracted by his reputation for courage and generosity.", "wrong": ["laws alone.", "inherited authority.", "ritual alone."] },
          { start: "Celtic chieftains used the redistribution of plunder and wealth to", "correct": "build and maintain relationships with their warriors and establish their status and authority.", "wrong": ["have no strategic purpose.", "purely for accumulation.", "ceremonial only."] },
          { start: "The Celtic practice of taking the heads of enemies as trophies reflected their belief that", "correct": "victory and dominance were demonstrated through the visible conquest of rivals.", "wrong": ["no real warfare.", "purely ceremonial.", "no actual conflict."] },
          { start: "Celtic clients—warriors and followers who swore loyalty to a chief—received protection and a share of plunder in exchange for", "correct": "military service, loyalty, and accepting the chief's authority.", "wrong": ["nothing.", "equal status.", "freedom to leave."] }
        ]
      },
      {
        name: "Celtic Druids & Spiritual Leaders",
        emoji: "🕯️",
        quotes: [
          { start: "Celtic druids held significant power in tribal societies because they", "correct": "controlled religious knowledge, interpreted omens, conducted sacrifices, and legitimized a chieftain's rule.", "wrong": ["ruled directly.", "had no political influence.", "were purely spiritual."] },
          { start: "The training of druids required years of study in poetry, law, astronomy, and natural philosophy because", "correct": "they served as judges, advisors to chieftains, repositories of tribal law, and teachers.", "wrong": ["purely religious purposes.", "no practical knowledge.", "only ritual knowledge."] },
          { start: "Celtic religious practices included human sacrifice because the culture believed that", "correct": "this offering would appease the gods, ensure victory in war, or address serious crises.", "wrong": ["it served no purpose.", "they were barbaric without reason.", "only for entertainment."] },
          { start: "The Celtic belief in an afterlife where warriors continued to feast and fight influenced their society by", "correct": "making warriors less fearful of death and more willing to engage in risky combat.", "wrong": ["having no real effect.", "making them pacifistic.", "purely spiritual."] },
          { start: "Celtic druids were respected and protected even between warring tribes because they", "correct": "were seen as neutral arbiters, keepers of law and tradition, and essential to the spiritual well-being of all Celtic peoples.", "wrong": ["held no real power.", "were powerless in society.", "only served one tribe."] },
          { start: "The Celtic understanding of nature included belief in sacred groves, water sources, and animal spirits because", "correct": "the natural world was understood as inhabited by divine forces that required respect and ritual propitiation.", "wrong": ["purely poetic.", "no real beliefs.", "only decorative."] },
          { start: "Celtic priests conducted divination by observing bird flight, interpreting dreams, and examining animal entrails in order to", "correct": "determine the gods' will regarding important decisions about war, peace, and governance.", "wrong": ["purely for entertainment.", "no real purpose.", "purely superstition."] }
        ]
      },
      {
        name: "Celtic Warriors & Warfare",
        emoji: "⚔️",
        quotes: [
          { start: "Celtic warriors developed a reputation across the Mediterranean world because they", "correct": "fought with individual courage, used effective weapons, and were willing to challenge larger armies.", "wrong": ["had superior technology.", "were naturally superior.", "rejected organized tactics."] },
          { start: "Celtic fighting style emphasized individual prowess and single combat because", "correct": "their culture valued personal honor and bravery, and warriors gained status through demonstrated martial skill.", "wrong": ["they lacked discipline.", "they were disorganized.", "tactics were unimportant."] },
          { start: "Celtic warriors adorned themselves with torcs (metal necklaces), elaborate shields, and fine weapons as displays of", "correct": "wealth, status, and their position as elite warriors within the tribe.", "wrong": ["pure vanity.", "no real purpose.", "only for ceremony."] },
          { start: "The Celtic practice of challenging enemies to single combat before general battle served to", "correct": "determine superiority, minimize casualties, and demonstrate a warrior's courage and skill.", "wrong": ["delay warfare.", "show cowardice.", "serve no purpose."] },
          { start: "Celtic warriors were rewarded for bravery with wealth, cattle, and prestige because", "correct": "the culture believed that martial excellence and courage were the highest virtues.", "wrong": ["no real value existed.", "status came from other sources.", "wealth alone mattered."] },
          { start: "The Celtic use of chariots in warfare gave them advantages in speed and positioning because", "correct": "the elevated platform allowed warriors to survey the battlefield and strike from unexpected angles.", "wrong": ["purely for show.", "no tactical advantage.", "only ceremonial."] },
          { start: "Celtic warriors often fought shirtless or with minimal armor because they believed that", "correct": "displaying the body demonstrated confidence and that courage could substitute for protection.", "wrong": ["they lacked armor.", "purely for intimidation.", "no strategy."] }
        ]
      },
      {
        name: "Celtic Bards & Oral Tradition",
        emoji: "📜",
        quotes: [
          { start: "Celtic bards held important social positions because they", "correct": "preserved tribal history, composed poetry honoring warriors, and had the power to praise or satirize chieftains.", "wrong": ["had no real authority.", "only entertained.", "were purely ceremonial."] },
          { start: "The power of a Celtic bard's satire was so feared that", "correct": "a bard's harsh words could damage a chieftain's reputation and undermine his authority.", "wrong": ["bards had no influence.", "satire served no purpose.", "poetry was ignored."] },
          { start: "Celtic oral tradition preserved knowledge about law, genealogy, history, and mythology because", "correct": "bards trained for years to memorize vast amounts of material essential to tribal identity and governance.", "wrong": ["written records did not exist.", "no other knowledge preservation method.", "purely for entertainment."] },
          { start: "The stories told by Celtic bards about gods, heroes, and ancestors served to", "correct": "teach values, explain natural phenomena, justify the social hierarchy, and inspire warriors.", "wrong": ["purely for entertainment.", "no real purpose.", "purely mythological."] },
          { start: "Celtic poetry often used riddles, metaphor, and complex language because", "correct": "the difficulty of the language demonstrated the bard's skill and made the knowledge seem more valuable and sacred.", "wrong": ["poets lacked clarity.", "it served no purpose.", "purely for obscurity."] },
          { start: "The three classes of bards—fili (poets), brehons (jurists), and seers—each held specific roles because", "correct": "the Celtic culture valued specialized knowledge and assigned different responsibilities to different types of learned men.", "wrong": ["no distinction existed.", "all were equal.", "roles were ceremonial."] },
          { start: "A Celtic warrior's greatest desire was to be immortalized in the bards' songs because", "correct": "a warrior's fame depended on being remembered and celebrated in stories passed to future generations.", "wrong": ["material wealth was paramount.", "no real value existed.", "individual glory mattered less."] }
        ]
      },
      {
        name: "Celtic Trade & Economic Systems",
        emoji: "💰",
        quotes: [
          { start: "Celtic tribes participated in trade across Europe because they valued", "correct": "foreign goods like wine, olive oil, and luxury items that demonstrated status and could be redistributed.", "wrong": ["purely economic reasons.", "self-sufficiency.", "no status value."] },
          { start: "Celtic metalwork—swords, shields, torcs, and jewelry—was highly valued across the Mediterranean because", "correct": "Celtic craftspeople possessed superior techniques and created items of both practical and artistic excellence.", "wrong": ["they had unique materials.", "no real quality.", "purely decorative."] },
          { start: "The Celtic economy was based on cattle wealth because", "correct": "cattle could be herded, were a food source, could be stolen as plunder, and formed bride-prices and fines.", "wrong": ["land had no value.", "no other wealth forms.", "purely agricultural."] },
          { start: "Celtic trading relationships with Mediterranean civilizations brought wealth to Celtic chieftains through", "correct": "the exchange of metals, agricultural products, and amber for wine, oil, and manufactured goods.", "wrong": ["conquest alone.", "no real trade.", "purely ceremonial exchange."] },
          { start: "The Celtic value placed on gift-giving and wealth redistribution served to", "correct": "build and maintain relationships between chieftains and their warriors, and establish alliances between tribes.", "wrong": ["have no real purpose.", "purely ceremonial.", "no political value."] }
        ]
      },
      {
        name: "Celtic Society & Social Structure",
        emoji: "🏛️",
        quotes: [
          { start: "Celtic society was divided into distinct classes: warriors, druids, craftspeople, and commoners because", "correct": "this hierarchy allowed for specialization and coordination while preserving tribal identity and values.", "wrong": ["pure domination.", "random division.", "all were equal."] },
          { start: "Celtic kinship systems were complex, with loyalty to family and tribe serving as the foundation of social organization because", "correct": "in a society without central government, kinship networks provided security, obligation, and identity.", "wrong": ["no real structure.", "purely ceremonial.", "no practical value."] },
          { start: "Celtic women could own property, divorce, and participate in legal proceedings because", "correct": "Celtic culture recognized women's economic value and their role in maintaining family and tribal relationships.", "wrong": ["men were weak.", "women ruled society.", "purely ceremonial rights."] },
          { start: "Fosterage—the practice of raising noble children in other families—served to", "correct": "create bonds between families and tribes, provide education, and establish networks of loyalty and alliance.", "wrong": ["have no purpose.", "purely ceremonial.", "no real value."] },
          { start: "Celtic honor codes required that debts be repaid, oaths be honored, and hospitality be offered because", "correct": "in a decentralized society, reputation and trust were essential to survival and success.", "wrong": ["purely ceremonial.", "no practical value.", "enforced by law."] }
        ]
      },
      {
        name: "Celtic Religion & Cosmology",
        emoji: "🌌",
        quotes: [
          { start: "Celtic religion included belief in many gods associated with war, fertility, water, fire, and other natural phenomena because", "correct": "the culture saw divine forces inhabiting the natural world and requiring propitiation.", "wrong": ["purely mythological.", "no real beliefs.", "purely poetic."] },
          { start: "Celtic sacred sites—springs, groves, hillforts—were chosen because they were believed to be", "correct": "places where the boundary between the human and divine worlds was thin and where the gods could be accessed.", "wrong": ["purely ceremonial.", "randomly selected.", "only for defense."] },
          { start: "The Celtic belief in an Otherworld—an idealized realm of eternal youth and plenty—influenced their culture by", "correct": "making them less fearful of death and more willing to engage in risky warfare for glory.", "wrong": ["having no real effect.", "making them pacifistic.", "purely spiritual."] },
          { start: "Celtic head-hunting and the preservation of enemy heads reflected their belief that", "correct": "the head contained the soul and that keeping an enemy's head gave one power over them.", "wrong": ["purely for intimidation.", "no real spiritual belief.", "purely savage."] },
          { start: "The Celtic festival calendar—Samhain, Beltane, Imbolc, Lughnasadh—marked important agricultural and spiritual transitions because", "correct": "these celebrations aligned human society with natural cycles and propitiated the gods for continued prosperity.", "wrong": ["purely for entertainment.", "no real purpose.", "random celebrations."] }
        ]
      },
      {
        name: "Celtic Resistance & Identity",
        emoji: "🛡️",
        quotes: [
          { start: "Celtic tribes resisted Roman conquest despite military disadvantages because they", "correct": "valued their independence, their chieftains refused to submit, and their decentralized structure allowed for continued resistance.", "wrong": ["they had superior military power.", "Rome was weak.", "they were united."] },
          { start: "The Celtic adoption of Roman administrative structures and culture in some areas shows that", "correct": "Celtic peoples were pragmatic and willing to adapt to new circumstances while maintaining cultural identity.", "wrong": ["they completely abandoned tradition.", "Rome conquered through force alone.", "no Celtic culture survived."] },
          { start: "Celtic language and cultural practices survived Roman occupation in areas like Ireland because", "correct": "those regions were never fully conquered and maintained independent Celtic kingdoms that preserved traditions.", "wrong": ["Roman rule was weak.", "Celts were superior.", "no real culture survived."] },
          { start: "The Celtic response to external pressures—sometimes fighting, sometimes trading, sometimes adapting—shows that", "correct": "Celtic societies were diverse and responded differently based on local circumstances and leadership.", "wrong": ["all Celts responded identically.", "purely military resistance.", "no cultural adaptation."] }
        ]
      },
      {
        name: "Celtic Craftsmanship & Artistry",
        emoji: "🎨",
        quotes: [
          { start: "The distinctive Celtic artistic style—spirals, interlace, animal motifs—appears across Europe because", "correct": "this style was shared and transmitted through Celtic craftspeople, trade networks, and cultural contact.", "wrong": ["purely independent invention.", "random patterns.", "no real meaning."] },
          { start: "Celtic metalworkers achieved fame across the Mediterranean for their ability to create", "correct": "weapons, jewelry, and vessels of superior quality through mastery of forging, casting, and decoration techniques.", "wrong": ["using rare materials alone.", "no real skill.", "purely through trade."] },
          { start: "The symbols and patterns in Celtic art—the triquetra, the spiral, animal motifs—likely held spiritual significance because", "correct": "Celtic culture used imagery to represent sacred concepts and protect the wearer or user of the object.", "wrong": ["purely decorative.", "no real meaning.", "random patterns."] },
          { start: "Celtic craftspeople were highly valued by chieftains because", "correct": "skilled artisans could create goods that displayed status, could be traded for profit, and enhanced the chieftain's prestige.", "wrong": ["they were undervalued.", "craftsmanship had no value.", "only warriors were valued."] }
        ]
      },
      {
        name: "Celtic Law & Justice Systems",
        emoji: "⚖️",
        quotes: [
          { start: "Celtic law, preserved in Irish law texts, shows that legal systems existed because societies needed", "correct": "mechanisms to resolve disputes, establish compensation for injuries, and maintain social order.", "wrong": ["no real law existed.", "pure force determined justice.", "no organization."] },
          { start: "Celtic brehon laws (from the word 'brehon' meaning judge) established fines and compensation for injuries because", "correct": "the society valued restitution and restoration of relationships rather than purely retributive punishment.", "wrong": ["no justice system.", "purely brutal punishment.", "no real law."] },
          { start: "The Celtic use of oath-taking in legal proceedings reflected their belief that", "correct": "one's word and honor were sacred, and breaking an oath brought divine punishment and social disgrace.", "wrong": ["oaths had no power.", "purely ceremonial.", "no real consequences."] },
          { start: "Celtic judges held high status because they", "correct": "possessed knowledge of complex law and custom, and their decisions were essential to maintaining peace and order.", "wrong": ["had no real authority.", "purely ceremonial.", "forced compliance through fear."] }
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
          { start: "Mississippian chiefdoms were organized hierarchically with a paramount chief at the top because this system allowed for", "correct": "mobilization of labor, coordination of resources, and unified response to external threats.", "wrong": ["pure domination through fear.", "no real authority.", "equal distribution of power."] },
          { start: "A Mississippian leader's authority came from", "correct": "control of trade networks, religious knowledge, and the ability to organize large-scale projects.", "wrong": ["conquest alone.", "supernatural power.", "inherited privilege alone."] },
          { start: "Mississippian chiefdoms maintained power by controlling access to valuable resources such as", "correct": "shell, copper, mica, and manufactured goods that could be redistributed to loyal followers.", "wrong": ["only warfare.", "purely ceremonial items.", "no real wealth."] },
          { start: "The Great Sun (the paramount chief of Natchez and other Mississippian societies) was expected to", "correct": "coordinate ceremonies, direct labor projects, control trade, and ensure the prosperity of the people.", "wrong": ["rule through fear.", "isolate in the palace.", "have no practical duties."] },
          { start: "Mississippian chiefdoms expanded their influence by", "correct": "establishing trade relationships, demanding tribute from weaker communities, and demonstrating military strength.", "wrong": ["peaceful expansion only.", "no expansion occurred.", "conquest for its own sake."] },
          { start: "A Mississippian chief who failed to provide for his people or protect them from enemies would likely", "correct": "lose support and be replaced or overthrown.", "wrong": ["retain power indefinitely.", "rule unopposed.", "be honored for strength."] },
          { start: "The role of secondary chiefs under the paramount chief was to", "correct": "administer districts, collect tribute, ensure labor service, and serve as intermediaries between the paramount chief and commoners.", "wrong": ["have no real power.", "be purely ceremonial.", "rule independently."] },
          { start: "Mississippian societies valued leaders who demonstrated", "correct": "organizational ability, religious knowledge, and ability to accumulate and redistribute wealth and goods.", "wrong": ["only military prowess.", "rejection of hierarchy.", "equal treatment of all."] }
        ]
      },
      {
        name: "Mississippian Mound Building & Engineering",
        emoji: "🏗️",
        quotes: [
          { start: "The construction of massive earthen mounds at sites like Cahokia required", "correct": "organized labor forces, careful planning, and understanding of construction techniques and geometry.", "wrong": ["supernatural assistance.", "slavery alone.", "no real engineering."] },
          { start: "The largest mound at Cahokia—Monks Mound—demonstrates that Mississippian societies possessed", "correct": "the ability to mobilize thousands of workers, plan large-scale projects, and execute them over years or decades.", "wrong": ["primitive engineering.", "no real planning.", "random construction."] },
          { start: "The arrangement of mounds in plazas at Mississippian centers like Cahokia shows that architects understood", "correct": "spatial planning, ceremonial needs, and the integration of sacred and civic spaces.", "wrong": ["random placement.", "no planning.", "only religious purposes."] },
          { start: "Mississippian mound-building served multiple purposes: platforms for elite residences and temples, markers of elite status, and", "correct": "ritual centers for ceremonies that reinforced social hierarchy and religious authority.", "wrong": ["only defensive purposes.", "no real function.", "purely decorative."] },
          { start: "The labor required to build Mississippian mounds came from", "correct": "the combined effort of commoners under the direction of elite leaders, paid through redistribution of goods and access to resources.", "wrong": ["slavery alone.", "voluntary work only.", "conquest forced labor."] },
          { start: "The precision of Mississippian mound construction, with specific angles and dimensions, indicates that", "correct": "builders understood mathematics, could measure and plan, and possessed specialized knowledge.", "wrong": ["construction was random.", "no planning existed.", "only ritual knowledge was used."] },
          { start: "The location of Mississippian centers near rivers shows that leaders understood the importance of", "correct": "water access for transportation, agriculture, drinking, and trade.", "wrong": ["only ceremonial purposes.", "no practical value.", "defense alone."] }
        ]
      },
      {
        name: "Mississippian Religious & Ceremonial Systems",
        emoji: "🕯️",
        quotes: [
          { start: "Mississippian religious practices centered on a cosmology that included", "correct": "a layered universe (upper, middle, lower worlds), celestial bodies, and spirits associated with natural phenomena.", "wrong": ["only one god.", "no complex beliefs.", "purely shamanic practices."] },
          { start: "The Southeastern Ceremonial Complex—shared symbolism and rituals across Mississippian societies—suggests that", "correct": "these cultures shared common religious beliefs and participated in a regional religious tradition.", "wrong": ["each society was isolated.", "no shared beliefs.", "no ritual exchange."] },
          { start: "Mississippian priests or spiritual leaders likely held significant power because they", "correct": "understood ceremonies, could interpret omens, and were believed to communicate with spiritual forces that ensured prosperity.", "wrong": ["only performed rituals.", "had no real authority.", "were powerless."] },
          { start: "The use of specific symbols—the cross-in-circle, the eye motif, the woodpecker—in Mississippian art suggests that", "correct": "these symbols held spiritual meaning and communicated religious concepts across the culture.", "wrong": ["they were purely decorative.", "no meaning existed.", "only artistic expression."] },
          { start: "Mississippian ceremonies likely took place in plazas and on mounds because", "correct": "large public gatherings reinforced social hierarchy, displayed elite authority, and united the community around shared religious beliefs.", "wrong": ["only private rituals mattered.", "ceremony served no purpose.", "religion was personal."] },
          { start: "The artifacts found in Mississippian burial mounds—shell, copper, mica, feather headdresses—indicate that", "correct": "the culture believed in an afterlife and prepared elite individuals for it with valued goods.", "wrong": ["no beliefs about afterlife.", "purely practical items.", "no spiritual meaning."] },
          { start: "Mississippian religious specialists used knowledge of", "correct": "celestial events, plant and animal behavior, and water cycles to predict seasons and guide ceremonial timing.", "wrong": ["only supernatural power.", "no real knowledge.", "purely ritual knowledge."] }
        ]
      },
      {
        name: "Mississippian Trade & Economic Networks",
        emoji: "💰",
        quotes: [
          { start: "Mississippian societies controlled trade routes because this allowed them to", "correct": "accumulate wealth, distribute goods to followers, and maintain power and influence over surrounding regions.", "wrong": ["purely economic reasons.", "no political benefit.", "equal distribution of wealth."] },
          { start: "The distribution of Mississippian artifacts across vast distances shows that", "correct": "these cultures participated in extensive trade networks exchanging shells, copper, mica, and manufactured goods.", "wrong": ["they were isolated.", "no trade occurred.", "random distribution."] },
          { start: "The control of copper sources and the ability to produce copper artifacts gave Mississippian elites", "correct": "valuable goods for redistribution that reinforced their authority and attracted followers.", "wrong": ["no advantage.", "no exchange value.", "purely decorative value."] },
          { start: "Mississippian leaders used redistribution of trade goods to", "correct": "build and maintain political relationships, reward loyalty, and reinforce their position as intermediaries between the human and spiritual worlds.", "wrong": ["only for profit.", "purely economical.", "no political purpose."] },
          { start: "Shell from the Gulf Coast, found in Mississippian centers far to the north, demonstrates that", "correct": "trade networks connected distant regions and that valuable marine resources were highly valued and exchanged.", "wrong": ["conquest brought all goods.", "no real trade occurred.", "local resources only."] }
        ]
      },
      {
        name: "Mississippian Urban Planning & Settlement",
        emoji: "🏘️",
        quotes: [
          { start: "Mississippian centers like Cahokia were organized with mounds surrounding a central plaza because this design", "correct": "created spaces for ceremonies, demonstrated elite power, and organized movement of populations.", "wrong": ["random placement.", "no planning.", "only defensive purposes."] },
          { start: "The size of Cahokia at its peak—with thousands of residents, extensive suburbs, and surrounding farmland—shows that Mississippian societies had", "correct": "the ability to organize large urban populations, manage food supplies, and coordinate complex labor.", "wrong": ["no real cities.", "primitive settlements.", "no organization."] },
          { start: "The location of elite residences on mounds separated from commoner housing reflects", "correct": "a hierarchical society where elite status was visibly displayed and residential segregation reinforced social distinctions.", "wrong": ["equal housing.", "no hierarchy.", "random arrangement."] },
          { start: "Mississippian agricultural villages and farms surrounding urban centers provided", "correct": "food surplus to support the non-agricultural population of the city and labor forces for mound building.", "wrong": ["only local consumption.", "no surplus.", "independent communities."] },
          { start: "The roads and pathways connecting Mississippian sites show that", "correct": "these centers communicated with each other and maintained relationships through movement of people and goods.", "wrong": ["isolation was the norm.", "no connections.", "purely ceremonial paths."] }
        ]
      },
      {
        name: "Mississippian Agriculture & Food Systems",
        emoji: "🌾",
        quotes: [
          { start: "Mississippian societies depended on cultivation of", "correct": "maize (corn), beans, and squash, supplemented by hunting, fishing, and gathering.", "wrong": ["only hunting.", "imports alone.", "no agriculture."] },
          { start: "The agricultural surplus produced by Mississippian farmers allowed for", "correct": "support of non-agricultural workers, craftspeople, priests, and elite—the foundation of complex society.", "wrong": ["no cities.", "no specialization.", "no hierarchy."] },
          { start: "Mississippian farmers understood the local environment well enough to", "correct": "cultivate crops suited to river valley climates and exploit seasonal resources like fish and game.", "wrong": ["use no knowledge.", "struggle with crops.", "have no skill."] },
          { start: "The reliance on maize agriculture made Mississippian societies vulnerable to", "correct": "drought and crop failure, which may have contributed to the decline of some chiefdoms.", "wrong": ["no environmental stress.", "complete stability.", "no consequences to failure."] },
          { start: "Mississippian storage of corn and other foods allowed for", "correct": "survival through seasons of scarcity and provisioning of large labor forces for construction projects.", "wrong": ["wasteful accumulation.", "no practical benefit.", "purely ceremonial storage."] }
        ]
      },
      {
        name: "Mississippian Craftsmanship & Artistry",
        emoji: "🎨",
        quotes: [
          { start: "The high quality and distinctive style of Mississippian pottery indicates that", "correct": "specialized craftspeople possessed advanced techniques and created wares valued for both practical and ceremonial use.", "wrong": ["no skill.", "random production.", "no specialized knowledge."] },
          { start: "The elaborate shell work, copper work, and stone carving found in Mississippian sites shows that", "correct": "artisans held important positions and possessed knowledge transmitted through apprenticeship and practice.", "wrong": ["no real craftsmanship.", "purely decorative.", "no skill required."] },
          { start: "The symbols and motifs repeated in Mississippian art—crosses, eyes, feathers—suggest that", "correct": "a shared religious and artistic tradition united these cultures and communicated spiritual meanings.", "wrong": ["random decoration.", "no meaning.", "purely aesthetic."] },
          { start: "The production of shell gorgets (ornaments) by Mississippian artisans indicates that", "correct": "these items held high value and were likely exchanged or given as gifts to reinforce social relationships.", "wrong": ["purely for personal use.", "no exchange value.", "no social function."] }
        ]
      },
      {
        name: "Mississippian Social Organization & Hierarchy",
        emoji: "🏛️",
        quotes: [
          { start: "Mississippian societies were organized into distinct social classes: elites, priests, craftspeople, farmers, and warriors because", "correct": "this hierarchy allowed for specialization and coordination of complex tasks.", "wrong": ["all were equal.", "random organization.", "no structure."] },
          { start: "Elite burial mounds containing valuable goods suggest that Mississippian societies believed in", "correct": "an afterlife and that status in life continued in death.", "wrong": ["no beliefs about death.", "pure materialism.", "no social distinction."] },
          { start: "The concentration of wealth and resources among Mississippian elites shows that", "correct": "these individuals controlled production, trade, and religious authority, which translated to political power.", "wrong": ["wealth was equally distributed.", "no power structure.", "pure democracy."] },
          { start: "Mississippian warriors, distinct from other members of society, served to", "correct": "defend the chiefdom, conduct raids against enemies, and enforce elite authority.", "wrong": ["have no real function.", "be purely ceremonial.", "exist outside the hierarchy."] }
        ]
      },
      {
        name: "Mississippian Warfare & Political Relations",
        emoji: "⚔️",
        quotes: [
          { start: "Mississippian chiefdoms competed with each other through warfare because", "correct": "conquest and tribute collection increased a chief's wealth and power.", "wrong": ["purely for honor.", "no economic motive.", "random conflict."] },
          { start: "The evidence of palisades (defensive walls) around some Mississippian centers shows that", "correct": "warfare between chiefdoms was real and communities needed to defend against attack.", "wrong": ["peaceful coexistence.", "no conflict.", "purely ceremonial walls."] },
          { start: "Mississippian chiefdoms maintained power through a combination of", "correct": "military strength, control of valuable resources, religious authority, and the ability to redistribute wealth.", "wrong": ["purely military force.", "no real power.", "complete equality."] },
          { start: "The decline of some Mississippian chiefdoms may have resulted from", "correct": "internal conflict, external pressure from rivals, environmental stress, or loss of trade networks.", "wrong": ["no real reason.", "peaceful dissolution.", "divine intervention."] }
        ]
      },
      {
        name: "Mississippian Cosmology & Worldview",
        emoji: "🌌",
        quotes: [
          { start: "Mississippian cosmology included a three-tiered universe: upper world (sky, celestial bodies), middle world (humans), and lower world because", "correct": "this framework helped explain natural phenomena and humanity's place within the cosmos.", "wrong": ["purely mythological.", "no real worldview.", "random beliefs."] },
          { start: "The importance of celestial observation in Mississippian culture—with mounds possibly aligned to celestial events—shows that", "correct": "these societies understood astronomy and incorporated it into ceremonial calendars and religious beliefs.", "wrong": ["no astronomy.", "random alignments.", "purely decorative."] },
          { start: "Mississippian societies understood natural cycles and seasonal changes because they", "correct": "depended on agriculture and fishing, requiring detailed knowledge of climate, water levels, and animal behavior.", "wrong": ["had no real knowledge.", "relied only on luck.", "ignored environmental patterns."] },
          { start: "The Mississippian belief that natural phenomena had spiritual causes and that proper ritual could influence them reflects", "correct": "a worldview where humans, nature, and the spiritual realm were interconnected.", "wrong": ["pure superstition.", "no real beliefs.", "no connection to nature."] }
        ]
      },
      {
        name: "Mississippian Decline & Historical Legacy",
        emoji: "📜",
        quotes: [
          { start: "The decline of major Mississippian chiefdoms by the 16th century may have been caused by", "correct": "a combination of environmental stress (drought, flooding), internal conflict, disease, and disruption of trade networks.", "wrong": ["European contact alone.", "no real reason.", "pure conquest."] },
          { start: "The abandonment of Cahokia and other major centers shows that even advanced civilizations are vulnerable to", "correct": "environmental change, internal instability, and external pressure.", "wrong": ["no real reason.", "weakness from the start.", "inevitable decline."] },
          { start: "The Mississippian legacy influenced later Native American societies in the region through", "correct": "continued occupation of sites, adoption of cultural practices, and memory of former centers of power.", "wrong": ["complete discontinuity.", "no influence.", "no connection to later peoples."] },
          { start: "The study of Mississippian culture demonstrates that", "correct": "sophisticated, complex societies with cities, organized trade, and hierarchical systems existed in pre-Columbian North America.", "wrong": ["North America was primitive.", "no real cities existed.", "no complex societies."] }
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
          { start: "The Great Law of Peace established that decisions must be made by consensus because", "correct": "a united people are stronger than a divided one.", "wrong": ["one person's will is sufficient.", "force determines right.", "quick decisions are better."] },
          { start: "A leader of the Haudenosaunee is expected to listen to the voices of his people because his role is to", "correct": "serve the interests of the nation, not his own ambitions.", "wrong": ["accumulate personal wealth.", "dominate through fear.", "rule without accountability."] },
          { start: "The Iroquois Confederacy united five nations—Mohawk, Oneida, Onondaga, Cayuga, and Seneca—by establishing a system where", "correct": "each nation retained autonomy while cooperating for mutual defense and peace.", "wrong": ["one nation ruled all others.", "warfare was constant.", "no unity existed."] },
          { start: "The Haudenosaunee practice of allowing sachems (peace chiefs) to be removed by the women of their clan if they failed to lead properly demonstrates that", "correct": "accountability to the people was built into the governing system.", "wrong": ["women had no power.", "leaders were absolute.", "no checks existed on power."] },
          { start: "The Iroquois understanding of leadership includes the principle that a chief must consider the impact of decisions on", "correct": "seven generations to come.", "wrong": ["only immediate profit.", "personal legacy.", "military glory."] },
          { start: "The council fire of the Haudenosaunee, kept burning at Onondaga, symbolizes that", "correct": "the confederacy is united, and decisions made together represent all five nations.", "wrong": ["one nation's dominance.", "temporary alliances.", "purely ceremonial unity."] },
          { start: "Iroquois leaders who made decisions without consulting the people risked", "correct": "losing their position and authority.", "wrong": ["gaining more power.", "being honored for strength.", "strengthening their leadership."] },
          { start: "The Great Law of Peace provided mechanisms for resolving disputes between nations because the Haudenosaunee understood that", "correct": "internal conflict weakens the confederacy and makes it vulnerable to external enemies.", "wrong": ["conflict is inevitable.", "war strengthens nations.", "peaceful resolution is weakness."] }
        ]
      },
      {
        name: "Haudenosaunee Governance & The Great Law of Peace",
        emoji: "⚖️",
        quotes: [
          { start: "The Great Law of Peace is built on the principle that all people are born with equal rights because", "correct": "the Creator gave these rights to all humans, not just to rulers or elites.", "wrong": ["some are naturally superior.", "kings must rule.", "hierarchy is natural."] },
          { start: "The three principles of the Haudenosaunee—peace, justice, and power—work together to create a system where", "correct": "strength serves justice, and justice serves the well-being of all people.", "wrong": ["power is used for domination.", "justice serves the powerful.", "peace means submission."] },
          { start: "The Iroquois Confederacy inspired later democratic systems because it demonstrated that", "correct": "representative government with checks on power could create stability and peace.", "wrong": ["democratic principles are foreign.", "representation weakens nations.", "checks on power are unnecessary."] },
          { start: "The Haudenosaunee required unanimous consent for major decisions because they believed that", "correct": "decisions supported by all nations are stronger and more likely to be honored.", "wrong": ["majority rule is better.", "quick decisions are best.", "consensus is impossible."] },
          { start: "The Great Law of Peace established that each nation would maintain its own territory and govern its own people while", "correct": "respecting the autonomy and decisions of the other nations in matters that affect all.", "wrong": ["surrendering all power to a central authority.", "allowing one nation to dominate.", "eliminating local governance."] },
          { start: "The Iroquois practice of taking decisions to the whole people, not just elites, shows that they valued", "correct": "the wisdom and input of all members of the nation.", "wrong": ["only leadership opinion.", "pure democracy without structure.", "the opinions of warriors alone."] },
          { start: "The role of the Onondaga nation as keepers of the council fire demonstrates that", "correct": "even within a confederacy, one group can hold a trusted, neutral position that serves all.", "wrong": ["all nations are equal in all ways.", "no special role exists.", "one nation must dominate."] }
        ]
      },
      {
        name: "Haudenosaunee Women & the Clan Mothers",
        emoji: "👩",
        quotes: [
          { start: "In Iroquois society, women hold significant power because they", "correct": "own the houses, control the cultivation of corn and food, elect and can remove leaders, and make major decisions.", "wrong": ["men allow them.", "they have no real authority.", "they only manage households."] },
          { start: "The Clan Mothers of the Haudenosaunee have the authority to choose sachems (peace chiefs) and remove them from office because", "correct": "women are seen as the source of life and the guardians of the nation's future.", "wrong": ["men are weak.", "women are superior in all ways.", "it is ceremonial only."] },
          { start: "Iroquois women's role in agriculture—cultivating the three sisters (corn, beans, squash)—gives them significant influence because", "correct": "control of food production translates to economic and political power in the society.", "wrong": ["agriculture is unimportant.", "women's work has no value.", "it is only domestic labor."] },
          { start: "The authority of Iroquois women to stop warriors from going to war demonstrates that", "correct": "the society valued peace and recognized women's stake in preventing loss of life.", "wrong": ["men were afraid of women.", "women controlled all decisions.", "warfare was unimportant."] },
          { start: "Iroquois clan systems trace descent through the mother's line because", "correct": "the mother is the certain parent, and this system ensures stability and women's position in society.", "wrong": ["men are unimportant.", "fathers have no role.", "it is purely spiritual."] },
          { start: "The respect shown to Iroquois women by men includes", "correct": "listening to their counsel, honoring their role as life-givers, and recognizing their economic contributions.", "wrong": ["submission to female authority.", "elimination of male roles.", "purely ceremonial respect."] }
        ]
      },
      {
        name: "Haudenosaunee Elders & Oral Traditions",
        emoji: "🦉",
        quotes: [
          { start: "In Haudenosaunee culture, elders are respected because they hold", "correct": "accumulated knowledge, spiritual understanding, and connection to ancestral wisdom.", "wrong": ["merely age alone.", "superstitious beliefs.", "no real authority."] },
          { start: "The stories told by Haudenosaunee elders preserve knowledge about", "correct": "creation, the formation of the confederacy, moral lessons, and guidance for living in balance with nature.", "wrong": ["only entertainment.", "purely fictional tales.", "no practical wisdom."] },
          { start: "The Thanksgiving Address (Ganohonyohon) recited by the Haudenosaunee gives thanks to all elements of creation in order to", "correct": "maintain awareness of interdependence and responsibility to all living things.", "wrong": ["only religious ritual.", "purely ceremonial.", "no practical importance."] },
          { start: "Haudenosaunee oral tradition ensures that children learn the history of the confederacy and their nation because", "correct": "knowing one's history and identity strengthens cultural cohesion and guides future actions.", "wrong": ["only entertainment for children.", "no real educational value.", "written records are superior."] },
          { start: "The role of grandparents in Haudenosaunee families includes", "correct": "teaching children stories, values, practical skills, and instilling cultural identity.", "wrong": ["no parenting role.", "only ceremonial position.", "diminished influence."] },
          { start: "Haudenosaunee elders make important decisions about the community because they", "correct": "possess wisdom from lived experience and can see patterns across generations.", "wrong": ["are dominating.", "are resisting change.", "are purely ceremonial."] }
        ]
      },
      {
        name: "Haudenosaunee Warfare & Peace",
        emoji: "⚔️",
        quotes: [
          { start: "The Iroquois Confederacy, united under the Great Law of Peace, became a formidable military power because", "correct": "unity and coordinated defense allowed the five nations to resist enemies much larger in number.", "wrong": ["they were naturally superior warriors.", "they conquered for conquest's sake.", "they rejected peace entirely."] },
          { start: "Iroquois women had the power to prevent wars or demand their continuation because", "correct": "the society recognized that war affects families and that women's voices must be heard in such decisions.", "wrong": ["women controlled everything.", "men were weak.", "it was purely symbolic."] },
          { start: "The Iroquois practice of adopting captives into their nation shows that they understood", "correct": "that military power is not only about destroying enemies but also about building strength through adoption of capable people.", "wrong": ["they were merciful to all.", "adoption served no military purpose.", "cruelty was rejected entirely."] },
          { start: "Iroquois warriors who killed in defense of the nation were expected to undergo purification rituals because", "correct": "the society recognized that taking life affects the spiritual as well as physical condition of the person.", "wrong": ["they were ashamed.", "they were considered unworthy.", "it was purely ceremonial."] },
          { start: "The Haudenosaunee achieved military dominance in the Northeast not through conquest for territorial expansion, but by", "correct": "defending their interests, maintaining strategic alliances, and building a system that could withstand external pressure.", "wrong": ["pure aggression.", "superior weapons.", "numbers alone."] }
        ]
      },
      {
        name: "Haudenosaunee Agriculture & Environmental Knowledge",
        emoji: "🌾",
        quotes: [
          { start: "The Iroquois practice of cultivating the three sisters—corn, beans, and squash—demonstrates understanding that", "correct": "these plants work together: corn provides a stalk for beans to climb, beans fix nitrogen in soil, squash shades the ground.", "wrong": ["it is only traditional.", "no scientific principle exists.", "it is purely ceremonial."] },
          { start: "Iroquois women's authority over agriculture comes from their role as cultivators and their knowledge of", "correct": "plant cycles, soil management, crop storage, and feeding the community.", "wrong": ["ceremonial authority.", "male allowance.", "no real power."] },
          { start: "Haudenosaunee communities prepared for winter by", "correct": "storing corn, dried vegetables, and preserved foods, requiring careful planning and organization.", "wrong": ["hunting only.", "gathering without storage.", "having no foresight."] },
          { start: "The Iroquois understanding of the natural world shows that", "correct": "humans must live in balance with nature, taking only what is needed and allowing ecosystems to regenerate.", "wrong": ["nature exists only for human use.", "balance is unnecessary.", "conservation is weakness."] },
          { start: "Haudenosaunee food systems were sustainable because they", "correct": "used crops suited to the climate, practiced crop rotation, and did not deplete the soil.", "wrong": ["had no agricultural science.", "wasted resources.", "caused environmental damage."] }
        ]
      },
      {
        name: "Haudenosaunee Trade & Diplomacy",
        emoji: "💰",
        quotes: [
          { start: "The Iroquois Confederacy's control of trade routes in the Northeast gave them economic and political influence because", "correct": "control of trade means wealth, and wealth translates to power in negotiating with other nations.", "wrong": ["they conquered all competitors.", "they rejected external trade.", "only military power mattered."] },
          { start: "Haudenosaunee diplomacy was based on principles of respect and reciprocity because", "correct": "the confederacy understood that lasting alliances are built on mutual benefit, not force.", "wrong": ["they were weak.", "force was rejected.", "all nations were equal."] },
          { start: "The Iroquois use of wampum—beaded belts—in treaties and exchanges served multiple purposes: recording agreements, honoring relationships, and", "correct": "establishing and confirming alliances and trade relationships.", "wrong": ["only decoration.", "purely spiritual items.", "no practical value."] },
          { start: "Iroquois trading networks connected distant regions because", "correct": "the confederacy's stability and military power made travel through Iroquois territory safe and profitable.", "wrong": ["they were isolationist.", "trade was ceremonial.", "no real commerce existed."] }
        ]
      },
      {
        name: "Haudenosaunee Spiritual Beliefs & Practice",
        emoji: "🕯️",
        quotes: [
          { start: "The Haudenosaunee belief in the Creator (Ganiodaio/the Good Mind) includes understanding that", "correct": "all humans possess the capacity to choose between good and evil, and this choice determines their path.", "wrong": ["humans are predetermined.", "spirituality is passive.", "ritual alone determines fate."] },
          { start: "The Haudenosaunee midwinter festival (Ganyestawadoh) serves to", "correct": "renew the world, give thanks for survival through winter, and reset the spiritual calendar of the people.", "wrong": ["only celebrate.", "serve no purpose.", "be purely festive."] },
          { start: "In Haudenosaunee spirituality, the concept of balance (the way of the two powers) represents", "correct": "the tension between opposing forces that must remain in equilibrium for health and harmony.", "wrong": ["one force triumphing.", "good defeating evil.", "no spiritual complexity."] },
          { start: "Haudenosaunee ceremonies are conducted throughout the year because they", "correct": "maintain the connection between humans and the natural world, and give thanks for sustenance.", "wrong": ["are purely superstitious.", "serve no purpose.", "are only for entertainment."] },
          { start: "The Haudenosaunee belief that plants, animals, and natural forces have spirits means that", "correct": "all beings deserve respect, and humans must act with humility and gratitude in taking from nature.", "wrong": ["nature is sacred but irrelevant.", "spirit does not require restraint.", "only humans matter."] }
        ]
      },
      {
        name: "Haudenosaunee Social Structure & Family",
        emoji: "🏛️",
        quotes: [
          { start: "In Iroquois society, the extended family household (longhouse) is the basic social and economic unit because", "correct": "multiple families living together share labor, resources, and child-rearing responsibilities.", "wrong": ["nuclear families are rejected.", "no variation exists.", "purely ceremonial structure."] },
          { start: "The Haudenosaunee clan system organizes society through matrilineal descent and mutual obligation because", "correct": "this system creates networks of relatives across the nation and ensures support for all members.", "wrong": ["women are superior.", "men have no role.", "purely ceremonial."] },
          { start: "Young men in Haudenosaunee society gain status and authority by", "correct": "demonstrating skill in hunting, warfare, oratory, and service to the community.", "wrong": ["birth alone.", "wealth accumulation.", "age only."] },
          { start: "Children in Haudenosaunee society are raised to understand that they belong to", "correct": "their mother's clan first, then their nation, then the confederacy.", "wrong": ["only their nuclear family.", "purely the nation.", "no clan identity."] },
          { start: "The role of uncles (mother's brothers) in Haudenosaunee family structure includes", "correct": "discipline, guidance, and ensuring that children learn their clan's responsibilities and traditions.", "wrong": ["no real parenting role.", "less important than fathers.", "ceremonial only."] }
        ]
      },
      {
        name: "Haudenosaunee Resistance & Cultural Survival",
        emoji: "🛡️",
        quotes: [
          { start: "The Haudenosaunee maintained their political systems and cultural identity despite colonization because they", "correct": "protected their lands, maintained diplomatic relationships, and transmitted knowledge through families and communities.", "wrong": ["completely rejected outsiders.", "had military superiority.", "no change was necessary."] },
          { start: "The principle that decisions must benefit seven generations to come allowed Haudenosaunee leaders to", "correct": "resist pressure for short-term gain that would harm future members of the nation.", "wrong": ["reject all change.", "live only for today.", "ignore the future."] },
          { start: "Haudenosaunee communities continue to practice traditional governance and ceremonies today because these practices", "correct": "maintain cultural identity, strengthen community bonds, and honor ancestral knowledge.", "wrong": ["are purely nostalgic.", "serve no purpose.", "are outdated."] },
          { start: "The Haudenosaunee Confederacy influenced democratic thought in North America because the Great Law of Peace demonstrated that", "correct": "representative government with checks and balances could function effectively and protect individual rights.", "wrong": ["democracy is European.", "no non-European democracy existed.", "the Haudenosaunee had no influence."] }
        ]
      },
      {
        name: "Haudenosaunee Values & Philosophy",
        emoji: "🧠",
        quotes: [
          { start: "The Haudenosaunee concept of peace is not the absence of conflict but", "correct": "the establishment of justice, harmony, and right relationships between individuals and nations.", "wrong": ["submission to authority.", "weakness.", "purely spiritual."] },
          { start: "In Haudenosaunee philosophy, power (skenentoan) means the ability to", "correct": "accomplish good things, protect the people, and maintain balance and harmony.", "wrong": ["dominate others.", "accumulate wealth.", "display military strength."] },
          { start: "The Haudenosaunee principle of consensus decision-making ensures that", "correct": "no major decision is made that leaves significant portions of the nation opposed or resentful.", "wrong": ["all agree on everything.", "no hierarchy exists.", "decisions are slow."] },
          { start: "The welfare of the children guides Haudenosaunee decision-making because the nation believes that", "correct": "the responsibility to future generations must outweigh personal or short-term interests.", "wrong": ["children are powerless.", "only adults matter.", "the future is unimportant."] },
          { start: "Haudenosaunee stories preserve wisdom about living in balance with nature and community because", "correct": "narratives transmit complex knowledge in memorable forms that guide behavior across generations.", "wrong": ["written law is superior.", "stories are only entertainment.", "wisdom cannot be taught."] }
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
          { start: "A pueblo leader's authority comes from the consent of the community and the respect of the", "correct": "council of elders.", "wrong": ["conquest and force.", "wealth accumulation.", "ritual power alone."] },
          { start: "The role of a pueblo governor is to ensure that", "correct": "the village remains in harmony with its people and the natural world.", "wrong": ["accumulate personal wealth.", "dominate neighboring pueblos.", "control all resources."] },
          { start: "Pueblo communities survived in the harsh Southwest because they practiced", "correct": "cooperation, water conservation, and respect for limited resources.", "wrong": ["isolation from neighbors.", "conquest of rivals.", "pure military strength."] },
          { start: "A wise pueblo leader understands that the community's survival depends on", "correct": "maintaining the balance between human needs and the land's capacity to provide.", "wrong": ["expanding territory endlessly.", "accumulating surplus.", "building monuments."] },
          { start: "The pueblo system of governance, where decisions are made collectively, ensures that", "correct": "the needs of all members are considered and disagreements are resolved peacefully.", "wrong": ["one person rules absolutely.", "conflicts go unresolved.", "the majority is ignored."] },
          { start: "A pueblo leader who ignores the council and the people's wishes will", "correct": "lose respect and authority.", "wrong": ["gain absolute power.", "rule more effectively.", "strengthen the community."] },
          { start: "The kiva—the ceremonial chamber—is central to pueblo governance because it is where", "correct": "leaders and community members gather to make important decisions and maintain spiritual unity.", "wrong": ["only priests meet.", "secrets are hidden.", "rituals are performed privately."] },
          { start: "Pueblo communities value consensus because it", "correct": "strengthens unity and ensures that decisions reflect the will of the people.", "wrong": ["slows progress.", "prevents action.", "weakens leadership."] }
        ]
      },
      {
        name: "Pueblo Spiritual Leaders & Kachina Traditions",
        emoji: "🕯️",
        quotes: [
          { start: "The Kachina ceremonies are central to pueblo spiritual life because they", "correct": "connect the people to the spirits, ensure rainfall, and reinforce community values.", "wrong": ["only entertain the people.", "serve no practical purpose.", "are purely theatrical."] },
          { start: "Pueblo spiritual leaders understand that kachinas represent", "correct": "ancestral spirits and natural forces that influence the seasons, weather, and community wellbeing.", "wrong": ["only mythical beings.", "false idols.", "harmless entertainment."] },
          { start: "The role of pueblo priests is to maintain the sacred balance by performing rituals that", "correct": "ensure rainfall, guide the seasons, and preserve the harmony between human and natural worlds.", "wrong": ["control the people through fear.", "accumulate personal power.", "hide knowledge from the community."] },
          { start: "Pueblo spiritual knowledge is preserved through", "correct": "oral tradition, initiation into sacred societies, and participation in ceremonies.", "wrong": ["written texts alone.", "secret codices.", "purely individual experience."] },
          { start: "The pueblo understanding of the spiritual world includes", "correct": "ancestors, nature spirits, and divine forces that guide and sustain life.", "wrong": ["only one supreme god.", "purely abstract philosophy.", "no real beliefs."] },
          { start: "Pueblo sacred societies, like the Kiva societies, maintain community cohesion by", "correct": "transmitting knowledge, performing ceremonies, and guiding spiritual development.", "wrong": ["controlling the people.", "hiding secrets from the community.", "serving only the elite."] },
          { start: "The pueblo relationship with the spiritual world is based on reciprocity—the people give to the spirits through ceremony, and the spirits provide", "correct": "rain, fertility, health, and guidance.", "wrong": ["only blessings.", "no material benefits.", "pure intangible rewards."] },
          { start: "Pueblo religious practices emphasize that", "correct": "the sacred and the everyday are inseparable, and all actions must be undertaken with spiritual awareness.", "wrong": ["only ceremonies are sacred.", "daily life is purely secular.", "spirituality is private."] }
        ]
      },
      {
        name: "Pueblo Agricultural & Environmental Knowledge",
        emoji: "🌾",
        quotes: [
          { start: "Pueblo farmers developed dry farming techniques that allowed them to", "correct": "grow corn, beans, and squash in an arid environment with minimal rainfall.", "wrong": ["reject innovation.", "ignore environmental challenges.", "rely only on gathering."] },
          { start: "The pueblo understanding of weather patterns and plant cycles comes from", "correct": "centuries of observation and accumulated knowledge passed from generation to generation.", "wrong": ["only spiritual intuition.", "random trial and error.", "no real knowledge."] },
          { start: "Pueblo agricultural practices respect the land by", "correct": "rotating crops, allowing fields to rest, and maintaining sustainable yields.", "wrong": ["exploiting the soil.", "maximizing short-term gain.", "ignoring environmental impact."] },
          { start: "The three-sisters agricultural system—corn, beans, and squash planted together—demonstrates that pueblo farmers understood", "correct": "how plants work together to improve soil, provide mutual support, and maximize nutrition.", "wrong": ["random planting.", "no agricultural science.", "only superstition."] },
          { start: "Pueblo water management systems, including check dams and terraces, show that farmers", "correct": "understood how to capture water, reduce runoff, and improve soil in arid regions.", "wrong": ["had no engineering knowledge.", "relied only on rainfall.", "wasted resources."] },
          { start: "The pueblo relationship with nature is based on the principle that", "correct": "humans are part of the ecosystem and must live in balance with it.", "wrong": ["humans are superior to nature.", "nature exists for human exploitation.", "balance is unnecessary."] },
          { start: "Pueblo communities prepare for drought by", "correct": "storing surplus crops, maintaining diverse food sources, and practicing water conservation.", "wrong": ["relying only on current harvest.", "ignoring seasonal variations.", "hoarding without limit."] }
        ]
      },
      {
        name: "Pueblo Architecture & Settlement Planning",
        emoji: "🏘️",
        quotes: [
          { start: "Pueblo dwellings are built in compact clusters because this design", "correct": "provides defense, conserves heat, and facilitates community interaction and mutual support.", "wrong": ["shows poverty.", "indicates lack of skill.", "prevents individual development."] },
          { start: "The pueblo use of adobe and stone reflects understanding of", "correct": "local materials, climate conditions, and the need for structures that are durable and thermally efficient.", "wrong": ["only poverty and lack of options.", "no real architectural knowledge.", "random building methods."] },
          { start: "Pueblo towns built on mesas and plateaus demonstrate that people understood", "correct": "defensibility, water access, and the advantages of elevated locations.", "wrong": ["no strategic thinking.", "purely ceremonial location.", "only spiritual factors."] },
          { start: "The kiva—built partially underground—serves both practical and spiritual purposes: it", "correct": "stays warm in winter, cool in summer, and provides a sacred space for community and spiritual activities.", "wrong": ["only serves ceremonial purposes.", "has no practical value.", "is purely a meeting place."] },
          { start: "Pueblo town planning, with central plazas for ceremonies and markets, shows that", "correct": "communities valued gathering spaces that strengthened social bonds and facilitated trade and ceremony.", "wrong": ["no planning existed.", "only religious considerations mattered.", "practical concerns were ignored."] }
        ]
      },
      {
        name: "Pueblo Trade & Exchange Networks",
        emoji: "💰",
        quotes: [
          { start: "Archaeological evidence shows pueblo communities participated in extensive trade networks because they", "correct": "exchanged agricultural products, pottery, and crafts for materials and goods from distant regions.", "wrong": ["were isolated.", "rejected outside contact.", "had no goods to trade."] },
          { start: "Pueblo potters developed distinctive styles that allowed their work to be recognized and valued in distant trade networks because", "correct": "quality, artistry, and consistent technique made pueblo pottery highly desirable.", "wrong": ["it was the only pottery available.", "trade was purely ceremonial.", "quality did not matter."] },
          { start: "Pueblo trade with coastal peoples provided access to", "correct": "shells, sea products, and items unavailable in the inland Southwest.", "wrong": ["only luxury goods.", "unnecessary imports.", "purely ceremonial items."] },
          { start: "The exchange of goods between pueblo communities strengthened relationships because it", "correct": "created interdependence, mutual benefit, and peaceful ties between neighboring groups.", "wrong": ["demonstrated dominance.", "required submission.", "prevented cooperation."] }
        ]
      },
      {
        name: "Pueblo Artistry & Craftsmanship",
        emoji: "🎨",
        quotes: [
          { start: "Pueblo pottery is made by hand without a potter's wheel because artisans developed", "correct": "coiling techniques and surface decoration methods that produce strong, beautiful vessels.", "wrong": ["they lacked technology.", "the method is inferior.", "it shows primitiveness."] },
          { start: "The geometric designs on pueblo pottery represent", "correct": "sacred symbols, natural patterns, and spiritual meanings important to the community.", "wrong": ["only decorative patterns.", "no real meaning.", "random designs."] },
          { start: "Pueblo weavers create textiles using traditional methods because these techniques", "correct": "produce durable, beautiful fabrics and transmit cultural knowledge through artistic practice.", "wrong": ["no alternatives exist.", "modern methods are rejected.", "they lack innovation."] },
          { start: "The high quality of pueblo crafts indicates that artisans", "correct": "held important status in the community and possessed specialized knowledge transmitted through apprenticeship.", "wrong": ["were isolated workers.", "had low social value.", "worked randomly without training."] },
          { start: "Pueblo artistic traditions persist because they are seen as", "correct": "expressions of cultural identity, spiritual connection, and family heritage.", "wrong": ["only for sale.", "purely commercial.", "merely nostalgic."] }
        ]
      },
      {
        name: "Pueblo Response to External Pressures",
        emoji: "🛡️",
        quotes: [
          { start: "When Spanish colonizers arrived, pueblo communities responded by", "correct": "sometimes accepting Christianity while maintaining traditional practices—a strategy of cultural preservation through adaptation.", "wrong": ["complete surrender.", "violent rejection.", "complete abandonment of tradition."] },
          { start: "The Pueblo Revolt of 1680 shows that pueblo peoples", "correct": "united across different communities to resist colonial oppression and reclaim their autonomy.", "wrong": ["passively accepted colonization.", "had no capacity to organize.", "were naturally submissive."] },
          { start: "Pueblo communities maintained their cultural identity despite centuries of colonization because they", "correct": "protected sacred knowledge, continued ceremonies, and passed traditions to younger generations.", "wrong": ["isolated themselves completely.", "had no real culture to preserve.", "easily adopted all foreign ways."] },
          { start: "The pueblo strategy of cultural survival involved", "correct": "selective adoption of external elements while preserving core spiritual and social practices.", "wrong": ["total rejection of change.", "complete cultural erasure.", "no resistance."] }
        ]
      },
      {
        name: "Pueblo Values & Social Organization",
        emoji: "🏛️",
        quotes: [
          { start: "Pueblo society emphasizes the community above the individual because", "correct": "survival in a harsh environment depends on cooperation, shared resources, and collective decision-making.", "wrong": ["individuals have no value.", "all are identical.", "leadership is absent."] },
          { start: "The pueblo concept of wealth differs from European models because it is measured by", "correct": "community resources, social relationships, generosity, and spiritual well-being rather than individual accumulation.", "wrong": ["pure material possession.", "military power.", "land area controlled."] },
          { start: "Pueblo women hold important roles in society including", "correct": "managing households, agriculture, pottery production, and participating in community decisions and ceremonies.", "wrong": ["servitude alone.", "no authority.", "only domestic work without influence."] },
          { start: "Pueblo elders are respected because they", "correct": "hold accumulated knowledge, guide younger generations, and maintain connection to ancestral traditions.", "wrong": ["control all resources.", "rule by authority alone.", "have supernatural power."] },
          { start: "Pueblo initiation ceremonies serve to", "correct": "transmit sacred knowledge, mark life transitions, and integrate individuals into the community and spiritual world.", "wrong": ["only separate groups.", "exclude outsiders.", "serve no practical purpose."] },
          { start: "The pueblo understanding of kinship extends beyond blood relations to include", "correct": "clan relationships, ceremonial relationships, and spiritual connections that create complex social bonds.", "wrong": ["only nuclear families.", "purely biological relationships.", "no social structure."] }
        ]
      },
      {
        name: "Pueblo Oral History & Cultural Knowledge",
        emoji: "📜",
        quotes: [
          { start: "Pueblo knowledge is transmitted through stories, ceremonies, and oral tradition because this method", "correct": "preserves cultural values, teaches practical skills, and maintains spiritual connections across generations.", "wrong": ["written records do not exist.", "they reject written knowledge.", "oral tradition is inferior."] },
          { start: "Pueblo storytelling includes narratives of", "correct": "creation, emergence, spiritual beings, ancestral deeds, and lessons about living in harmony with the land.", "wrong": ["only entertainment.", "purely fictional tales.", "no spiritual significance."] },
          { start: "A pueblo person who knows the stories and ceremonies of their community maintains", "correct": "connection to their ancestors, their land, and their spiritual and cultural identity.", "wrong": ["only entertainment value.", "no real importance.", "nothing of substance."] },
          { start: "Pueblo oral traditions preserve knowledge about", "correct": "plant and animal behavior, weather patterns, healing practices, and the consequences of human actions.", "wrong": ["only mythology.", "no practical information.", "purely spiritual matters."] }
        ]
      },
      {
        name: "Pueblo Relationship with the Land",
        emoji: "🌿",
        quotes: [
          { start: "Pueblo peoples understand the land as", "correct": "a living entity deserving respect, care, and reciprocal relationship.", "wrong": ["a resource for exploitation.", "something to be conquered.", "purely economic value."] },
          { start: "Sacred places in pueblo geography—springs, mesas, caves—are important because they", "correct": "connect the people to their history, their ancestors, and the spiritual forces that sustain life.", "wrong": ["have only ceremonial value.", "are purely symbolic.", "serve no practical purpose."] },
          { start: "Pueblo stewardship of the land demonstrates that", "correct": "sustainable practices and respect for nature create abundance and stability for present and future generations.", "wrong": ["land conservation is purely idealistic.", "practical concerns outweigh environmental care.", "balance is impossible."] },
          { start: "The pueblo return to traditional lands after forced removal shows that", "correct": "connection to specific places is essential to cultural identity and spiritual wellbeing.", "wrong": ["they could thrive anywhere.", "the land is unimportant.", "only people matter."] }
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
          { start: "The precision of Tiwanaku's stonework demonstrates that the builders possessed", "correct": "advanced mathematical knowledge and engineering skill.", "wrong": ["supernatural power.", "unlimited labor.", "simple techniques."] },
          { start: "The construction of the Gateway of the Sun required", "correct": "careful planning, skilled labor, and an understanding of stone properties.", "wrong": ["only ritual knowledge.", "supernatural assistance.", "brute force alone."] },
          { start: "Tiwanaku's architects aligned buildings with celestial events because they", "correct": "understood astronomy and believed the cosmos ordered human society.", "wrong": ["had no other knowledge.", "were trying to summon gods.", "feared the sky."] },
          { start: "The terraced agricultural fields around Tiwanaku show that the engineers understood", "correct": "water management, soil preservation, and maximizing crop yields.", "wrong": ["random design.", "only ritual purposes.", "no practical knowledge."] },
          { start: "The transport of massive stone blocks to Tiwanaku required", "correct": "organized labor, ingenious techniques, and understanding of leverage and friction.", "wrong": ["supernatural power.", "enslaved populations alone.", "simple rolling methods."] },
          { start: "Tiwanaku's urban planning reflects a society that valued", "correct": "order, symmetry, and the integration of ceremonial and practical spaces.", "wrong": ["only ritual.", "chaos and randomness.", "purely defensive layout."] },
          { start: "The construction techniques used at Tiwanaku prove that the civilization possessed", "correct": "sophisticated knowledge of materials, tools, and organizational systems.", "wrong": ["no real skill.", "only imitation of earlier cultures.", "no innovation."] },
          { start: "The durability of Tiwanaku's structures demonstrates that", "correct": "quality craftsmanship and proper technique create works that outlast centuries.", "wrong": ["only ritual makes structures last.", "materials are unimportant.", "luck determines survival."] }
        ]
      },
      {
        name: "Tiwanaku Spiritual & Religious System",
        emoji: "🕯️",
        quotes: [
          { start: "The religious iconography of Tiwanaku suggests that the civilization worshipped", "correct": "creator deities, sky gods, and nature spirits tied to the Andes and Lake Titicaca.", "wrong": ["only war gods.", "no spiritual system.", "exclusively local spirits."] },
          { start: "The Staff God depicted on the Gateway of the Sun represents", "correct": "a supreme deity or creator figure central to Tiwanaku religious belief.", "wrong": ["only a royal figure.", "a military commander.", "a foreign god."] },
          { start: "Tiwanaku's religious practices likely included", "correct": "ceremonial feasting, ritual processions, and astronomical observations tied to seasonal cycles.", "wrong": ["only human sacrifice.", "secret rituals.", "pure warfare rituals."] },
          { start: "The sacred nature of Lake Titicaca to Tiwanaku peoples shows that", "correct": "water, fertility, and natural phenomena were central to their cosmology.", "wrong": ["they had no connection to nature.", "only land mattered.", "water was feared."] },
          { start: "Tiwanaku's religious art suggests that", "correct": "complex mythology and a hierarchical pantheon of deities existed.", "wrong": ["religion was simple.", "no spiritual system developed.", "only shamanism existed."] },
          { start: "The ritual use of Tiwanaku's public spaces indicates that", "correct": "large gatherings for ceremonies reinforced social cohesion and religious authority.", "wrong": ["only rulers gathered.", "no communal rituals existed.", "private worship dominated."] },
          { start: "Tiwanaku's spiritual leaders likely", "correct": "interpreted astronomical events and guided the civilization's ceremonial calendar.", "wrong": ["had no real authority.", "were pure shamans.", "did not influence society."] }
        ]
      },
      {
        name: "Tiwanaku Leadership & Administration",
        emoji: "👑",
        quotes: [
          { start: "Tiwanaku's size and complexity indicate that the civilization was led by", "correct": "an organized elite who coordinated labor and distributed resources.", "wrong": ["only spiritual leaders.", "no real government.", "completely egalitarian."] },
          { start: "The ability to construct monumental buildings shows that Tiwanaku's leaders could", "correct": "mobilize vast labor forces and allocate substantial resources.", "wrong": ["command through fear alone.", "rely only on volunteer work.", "do nothing impressive."] },
          { start: "Tiwanaku's expansion of influence across the southern Andes required", "correct": "military strength, diplomatic skill, and control of valuable resources like tin and copper.", "wrong": ["only cultural prestige.", "no real power.", "pure spiritual influence."] },
          { start: "A Tiwanaku leader's authority was based on their ability to", "correct": "organize society, maintain order, and ensure prosperity through ritual and administration.", "wrong": ["pure divine right.", "military conquest alone.", "ritual knowledge only."] },
          { start: "The hierarchical layout of Tiwanaku's monumental centers suggests that", "correct": "elite individuals controlled access to sacred spaces and religious ceremonies.", "wrong": ["no hierarchy existed.", "all had equal access.", "no social structure."] },
          { start: "Tiwanaku's influence over surrounding regions was maintained through", "correct": "control of trade routes, military presence, and religious authority.", "wrong": ["only peaceful trade.", "no military power.", "purely cultural dominance."] }
        ]
      },
      {
        name: "Tiwanaku Agriculture & Water Management",
        emoji: "🌾",
        quotes: [
          { start: "Tiwanaku's survival at high altitude was possible because farmers developed", "correct": "sophisticated terracing systems and understanding of altitude-specific crops.", "wrong": ["only luck.", "imported food.", "no innovation."] },
          { start: "The raised field agricultural system around Lake Titicaca shows that Tiwanaku peoples understood", "correct": "water management, soil improvement, and maximizing yields in challenging terrain.", "wrong": ["only ritual agriculture.", "basic farming only.", "no agricultural innovation."] },
          { start: "Tiwanaku's prosperity depended on managing the resources of both", "correct": "the highlands and the lake, using different crops and animals appropriately.", "wrong": ["a single resource.", "only trade.", "only local resources."] },
          { start: "The labor required to build and maintain Tiwanaku's agricultural infrastructure required", "correct": "communal cooperation, skilled engineering, and long-term planning.", "wrong": ["enslaved populations.", "no skill.", "only individual effort."] },
          { start: "Tiwanaku's agricultural practices were sustainable because they", "correct": "worked with local climate and geography rather than against natural limitations.", "wrong": ["rejected all innovation.", "wasted resources.", "caused environmental damage."] }
        ]
      },
      {
        name: "Tiwanaku Trade & Economic System",
        emoji: "💰",
        quotes: [
          { start: "Tiwanaku's control of valuable resources like copper, tin, and obsidian allowed it to", "correct": "establish trade networks across the Andes and exercise economic influence.", "wrong": ["isolate from neighbors.", "dominate through conquest alone.", "rely purely on farming."] },
          { start: "Archaeological evidence shows Tiwanaku goods reached distant regions because", "correct": "the civilization was integrated into extensive trade networks across South America.", "wrong": ["they conquered all territories.", "trade was forbidden.", "goods traveled randomly."] },
          { start: "Tiwanaku merchants and traders likely", "correct": "exchanged Andean goods for resources from the coast, jungle, and other regions.", "wrong": ["only raided neighbors.", "rejected all external trade.", "never left the highlands."] },
          { start: "The economic power of Tiwanaku derived from", "correct": "control of resources, skilled craftspeople, and participation in long-distance trade.", "wrong": ["military conquest alone.", "theft and plunder.", "no real commerce."] }
        ]
      },
      {
        name: "Tiwanaku Craftspeople & Artistic Traditions",
        emoji: "🎨",
        quotes: [
          { start: "The quality of Tiwanaku textiles, pottery, and metalwork indicates that", "correct": "skilled artisans held important status and possessed generations of technical knowledge.", "wrong": ["crafts were primitive.", "no real skill existed.", "craftsmanship was unimportant."] },
          { start: "Tiwanaku's distinctive artistic style, found across the region, shows that", "correct": "a shared cultural tradition unified distant communities under Tiwanaku influence.", "wrong": ["all art was identical.", "local variation did not exist.", "art had no meaning."] },
          { start: "The symbolic motifs repeated in Tiwanaku art suggest that", "correct": "a coherent religious and cosmological worldview was shared across the civilization.", "wrong": ["art was random.", "no meaning existed.", "symbols had no significance."] },
          { start: "Tiwanaku craftspeople mastered bronze working, which allowed them to", "correct": "create superior tools, weapons, and ceremonial objects.", "wrong": ["only copper was used.", "metalwork was primitive.", "bronze had no advantage."] }
        ]
      },
      {
        name: "Tiwanaku Decline & Archaeological Understanding",
        emoji: "📜",
        quotes: [
          { start: "Tiwanaku's decline around 1000 CE was likely caused by", "correct": "drought, environmental change, and possibly social upheaval—not external conquest.", "wrong": ["foreign invasion.", "loss of military power.", "cultural collapse."] },
          { start: "The abandonment of Tiwanaku as a major center shows that", "correct": "even advanced civilizations are vulnerable to environmental stress and internal change.", "wrong": ["no real civilization existed.", "they were destroyed by enemies.", "they simply moved."] },
          { start: "Tiwanaku's legacy influenced later Andean civilizations because", "correct": "its religious ideas, artistic traditions, and administrative techniques were adopted and adapted.", "wrong": ["it was completely forgotten.", "later civilizations rejected it.", "no continuity existed."] },
          { start: "The study of Tiwanaku teaches that pre-Columbian American civilizations possessed", "correct": "sophisticated knowledge, organized societies, and genuine historical importance.", "wrong": ["no real sophistication.", "no organization.", "no significant achievements."] },
          { start: "Tiwanaku's monumental architecture endures because", "correct": "the builders understood materials, geometry, and construction techniques that created durability.", "wrong": ["ritual magic preserved it.", "it was indestructible by nature.", "luck alone sustained it."] }
        ]
      },
      {
        name: "Tiwanaku & Cosmological Understanding",
        emoji: "🌌",
        quotes: [
          { start: "Tiwanaku's astronomical alignments show that the civilization understood", "correct": "celestial movements and incorporated them into ceremonial and agricultural calendars.", "wrong": ["no astronomy.", "random alignment.", "only ritual purposes."] },
          { start: "The Layout of Tiwanaku's ceremonial centers reflects a cosmology where", "correct": "sacred geography connected the human world to the spiritual realm and cosmos.", "wrong": ["only practical concerns mattered.", "no spiritual meaning existed.", "randomness determined layout."] },
          { start: "Tiwanaku's understanding of water cycles and seasonal patterns enabled them to", "correct": "predict flooding, plan agriculture, and maintain social order through religious ceremonies.", "wrong": ["only shamanism guided them.", "no real knowledge existed.", "ritual alone mattered."] },
          { start: "The symbolism of the Gateway of the Sun and other monuments suggests that", "correct": "Tiwanaku peoples possessed a complex worldview integrating nature, time, and divinity.", "wrong": ["symbols were purely decorative.", "no philosophy existed.", "meaning was random."] }
        ]
      },
      {
        name: "Tiwanaku Social Organization & Hierarchy",
        emoji: "🏛️",
        quotes: [
          { start: "The archaeological evidence of Tiwanaku shows that the society was organized into", "correct": "social classes with rulers, priests, craftspeople, farmers, and traders.", "wrong": ["purely egalitarian.", "no structure.", "only religious hierarchy."] },
          { start: "Elite residences and ceremonial centers at Tiwanaku indicate that", "correct": "powerful individuals controlled resources, labor, and access to sacred knowledge.", "wrong": ["no elites existed.", "all were equal.", "leadership was temporary."] },
          { start: "Tiwanaku's ability to coordinate massive labor projects shows that", "correct": "a centralized authority system could mobilize and organize thousands of workers.", "wrong": ["no real government.", "only voluntary cooperation.", "random labor."] },
          { start: "The role of religious specialists in Tiwanaku society likely included", "correct": "interpreting omens, guiding rituals, and legitimizing the authority of secular rulers.", "wrong": ["complete political power.", "no real influence.", "only personal spirituality."] }
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
        name: "Lonko (Chiefs) - Documented Historical Records",
        emoji: "👑",
        quotes: [
          { start: "A lonko's authority comes not from conquest alone but from the", "correct": "respect and consent of his people.", "wrong": ["fear of his warriors.", "wealth he possesses.", "ritual alone."] },
          { start: "The Mapuche resist conquest because", "correct": "we value our land, freedom, and independence above all.", "wrong": ["we are naturally warlike.", "we reject all change.", "we fear the Spanish."] },
          { start: "A wise lonko understands that the community survives through", "correct": "cooperation, shared resources, and collective decision-making.", "wrong": ["hierarchical control.", "individual ambition.", "ritual authority."] },
          { start: "Mapuche warriors fight to defend", "correct": "their families, their lands, and their way of life.", "wrong": ["conquest and expansion.", "wealth and plunder.", "ritual glory."] },
          { start: "The lonko who listens to his council of elders and warriors", "correct": "makes decisions that benefit the entire community.", "wrong": ["shows weakness.", "loses respect.", "invites betrayal."] },
          { start: "Mapuche independence was preserved for centuries because", "correct": "we adapted our tactics, maintained unity, and refused subjugation.", "wrong": ["we were isolated.", "we rejected all trade.", "we were numerically superior."] },
          { start: "A leader's legacy is measured by whether his people", "correct": "remained free and preserved their culture.", "wrong": ["accumulated wealth.", "conquered neighbors.", "built monuments."] }
        ]
      },
      {
        name: "Machis (Shamans) - Spiritual & Healing Traditions",
        emoji: "🕯️",
        quotes: [
          { start: "The machi's role is to maintain balance between", "correct": "the human world and the spiritual world.", "wrong": ["control the people.", "command respect through fear.", "accumulate power."] },
          { start: "Healing comes from understanding that sickness affects", "correct": "body, spirit, and community together.", "wrong": ["only the body.", "only through ritual.", "through force alone."] },
          { start: "The machi uses plants and rituals because nature itself is", "correct": "the greatest teacher and healer.", "wrong": ["we have no other tools.", "the spirits demand it.", "ritual alone works."] },
          { start: "To become a machi, one must have the calling of the spirits and", "correct": "the knowledge passed from elder machis.", "wrong": ["birth alone.", "wealth and status.", "desire and ambition."] },
          { start: "A machi who serves the people honestly will be", "correct": "respected and supported by the community.", "wrong": ["feared and obeyed.", "ignored by the people.", "blamed for failures."] },
          { start: "The spirits teach us that the earth is", "correct": "alive and deserves respect and care.", "wrong": ["ours to exploit.", "a resource for wealth.", "subject to our will."] },
          { start: "Mapuche healing practices survive because they are", "correct": "based on generations of observation and understanding of plants and healing.", "wrong": ["purely spiritual.", "based on superstition.", "ineffective."] },
          { start: "The machi reminds the people that harmony with nature", "correct": "brings health, prosperity, and peace.", "wrong": ["requires submission.", "demands sacrifice.", "is impossible."] }
        ]
      },
      {
        name: "Mapuche Warriors & Resistance",
        emoji: "⚔️",
        quotes: [
          { start: "A Mapuche warrior fights not for glory but to", "correct": "protect his family, community, and the land of his ancestors.", "wrong": ["gain riches.", "seek individual honor.", "follow the lonko blindly."] },
          { start: "The Mapuche maintained their independence for over 300 years against Spanish conquest because", "correct": "they adapted their tactics, maintained unity among diverse groups, and never accepted subjugation.", "wrong": ["they were isolationist.", "they rejected all foreign contact.", "they were militarily superior."] },
          { start: "A warrior's courage is shown not by recklessness but by", "correct": "wise decisions that protect his people and land.", "wrong": ["fearlessness alone.", "individual valor.", "conquest and expansion."] },
          { start: "Mapuche warriors understand that", "correct": "defending the land is more important than individual glory.", "wrong": ["personal honor matters most.", "conquest brings wealth.", "ritual determines victory."] },
          { start: "The strength of Mapuche resistance lay in", "correct": "unity among diverse groups and adaptation to changing circumstances.", "wrong": ["superior numbers.", "rejection of all trade.", "isolation from neighbors."] }
        ]
      },
      {
        name: "Mapuche Community & Social Values",
        emoji: "🏘️",
        quotes: [
          { start: "Mapuche society values the community above the individual because", "correct": "survival and prosperity depend on cooperation and mutual support.", "wrong": ["individual ambition is rejected.", "all are equal in all ways.", "there is no hierarchy."] },
          { start: "The ayllu (extended family group) is the foundation of Mapuche society because it", "correct": "organizes labor, resources, and defense.", "wrong": ["rituals demand it.", "the spirits require it.", "it is purely cultural."] },
          { start: "A Mapuche person's responsibility to their ayllu includes", "correct": "contributing labor, defending the land, and supporting the vulnerable.", "wrong": ["absolute obedience.", "sacrificing all individuality.", "ritual participation."] },
          { start: "Mapuche women hold important roles in society including", "correct": "managing households, agriculture, weaving, and participating in decisions.", "wrong": ["servitude alone.", "no authority.", "ritual participation only."] },
          { start: "Respect for elders in Mapuche culture comes from", "correct": "their knowledge, experience, and role in preserving tradition.", "wrong": ["ritual authority alone.", "age determining all power.", "automatic submission."] },
          { start: "The mapuche concept of land ownership differs from Spanish/European models because", "correct": "land is shared communally and belongs to the people who work it, not individuals.", "wrong": ["there is no ownership.", "anyone can use any land.", "land has no value."] }
        ]
      },
      {
        name: "Mapuche & Nature - Environmental Values",
        emoji: "🌿",
        quotes: [
          { start: "The Mapuche understand that respecting the natural world brings", "correct": "abundance, health, and stability to the people.", "wrong": ["supernatural power.", "eternal life.", "military victory."] },
          { start: "Water, forest, and land are not possessions but", "correct": "living entities deserving respect and care.", "wrong": ["resources to exploit.", "subjects of human will.", "only for human use."] },
          { start: "A lonko who pollutes the water or destroys the forest commits an act against", "correct": "the present and future generations.", "wrong": ["only spiritual harm.", "ritual violation.", "personal dishonor."] },
          { start: "Mapuche agricultural practices are sustainable because they", "correct": "work with natural cycles rather than against them.", "wrong": ["are purely spiritual.", "reject innovation.", "are less productive."] },
          { start: "The relationship between Mapuche and nature teaches that", "correct": "we are part of the ecosystem, not masters of it.", "wrong": ["nature is inferior to humans.", "we can use without consequence.", "nature is hostile."] }
        ]
      },
      {
        name: "Mapuche Oral History & Cultural Preservation",
        emoji: "📜",
        quotes: [
          { start: "Stories told by elders preserve", "correct": "history, values, and knowledge essential to Mapuche survival.", "wrong": ["only entertainment.", "secrets of power.", "ritual formulas."] },
          { start: "The transmission of knowledge from elder to youth ensures that", "correct": "traditions, skills, and wisdom survive across generations.", "wrong": ["nothing ever changes.", "innovation is rejected.", "all remain the same."] },
          { start: "A Mapuche person who forgets the stories of their ancestors loses", "correct": "their connection to their people and their land.", "wrong": ["nothing of value.", "only entertainment.", "ritual knowledge."] },
          { start: "Mapuche language is not merely words but", "correct": "a repository of cultural knowledge and worldview.", "wrong": ["a tool for communication alone.", "less important than Spanish.", "purely linguistic."] }
        ]
      },
      {
        name: "Mapuche Resistance to Colonization",
        emoji: "🛡️",
        quotes: [
          { start: "The Mapuche rejection of Spanish colonization was not based on hatred but on", "correct": "a determination to preserve their independence, land, and way of life.", "wrong": ["rejection of all change.", "fear of the Spanish.", "religious fanaticism."] },
          { start: "Mapuche warriors adapted to Spanish military technology because they", "correct": "understood that survival requires adaptation while maintaining core values.", "wrong": ["they abandoned tradition.", "they rejected their culture.", "they became Spanish."] },
          { start: "The Mapuche maintained alliances with other groups because", "correct": "unity against colonization was stronger than any single group.", "wrong": ["they had no independent strength.", "they were united in all things.", "hierarchy determined all."] },
          { start: "Mapuche resistance teaches that", "correct": "a people who value freedom will sacrifice greatly to maintain it.", "wrong": ["military strength guarantees victory.", "resistance is futile.", "conquest is inevitable."] }
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
          { start: "I am the punishment of God. If you had not committed great sins, God would not have sent a punishment like me upon you.", "correct": "", "wrong": ["I am a savior.", "I bring only peace.", "I am merciful."] },
          { start: "The greatest happiness is to scatter your enemy and drive him before you and take his horses and his goods and hear the lamenting of his women and children.", "correct": "", "wrong": ["Peace brings happiness.", "Trade brings happiness.", "Mercy brings happiness."] },
          { start: "A man's greatest work is to break his enemies, to drive them before him, to take their property, and to see those dearest to them wrapped in tears.", "correct": "", "wrong": ["A man's greatest work is learning.", "A man's greatest work is peace.", "A man's greatest work is mercy."] },
          { start: "An army cannot exist without discipline. Discipline cannot exist without", "correct": "unity of command.", "wrong": ["fear.", "ritual.", "numbers."] },
          { start: "The Mongol warrior must be prepared to endure", "correct": "hardship and adapt to any terrain or climate.", "wrong": ["only comfort.", "luxury.", "predictable conditions."] },
          { start: "I will not punish those who surrender willingly, but I will destroy those who", "correct": "resist without cause.", "wrong": ["question my orders.", "show weakness.", "seek peace."] },
          { start: "Loyalty to the Khan is rewarded with", "correct": "wealth, position, and protection.", "wrong": ["mercy alone.", "freedom.", "autonomy."] },
          { start: "The conquered must understand that Mongol rule brings", "correct": "law, order, and the end of internal conflict.", "wrong": ["only hardship.", "only servitude.", "no benefit."] }
        ]
      },
      {
        name: "Mongol Military Strategy & Tactics",
        emoji: "⚔️",
        quotes: [
          { start: "The Mongol archer on horseback is superior to any foot soldier because he can", "correct": "strike from distance while remaining mobile.", "wrong": ["fear nothing.", "obey without question.", "fight endlessly."] },
          { start: "Reconnaissance and intelligence determine victory before the battle begins. A commander who underestimates his enemy will", "correct": "suffer defeat.", "wrong": ["win easily.", "gain honor.", "prove his strength."] },
          { start: "The Mongol strategy of feigned retreat confuses the enemy and draws them into", "correct": "prepared traps and encirclement.", "wrong": ["shameful flight.", "cowardly action.", "dishonorable tactics."] },
          { start: "A Mongol warrior must master the horse, the bow, and", "correct": "the ability to ride for days without rest.", "wrong": ["formal combat.", "ritual warfare.", "single combat."] },
          { start: "To conquer a city, one must first understand its", "correct": "defenses, resources, and the will of its people.", "wrong": ["its beauty.", "its history.", "its wealth alone."] },
          { start: "The Mongol empire expands because we understand that", "correct": "speed and coordination overwhelm static defenses.", "wrong": ["we are naturally superior.", "our gods favor us.", "we fear nothing."] },
          { start: "A general who maintains supply lines and cares for his horses will", "correct": "move faster and strike harder than his enemy.", "wrong": ["appear weak.", "lose the loyalty of his men.", "be defeated by those who ignore logistics."] },
          { start: "Mongol warriors are not mercenaries; they fight for", "correct": "the Khan and the honor of the tribe.", "wrong": ["gold alone.", "personal glory.", "ritual duty."] }
        ]
      },
      {
        name: "Mongol Administrative & Governance",
        emoji: "📜",
        quotes: [
          { start: "The Yassa (Mongol Law Code) exists to ensure that", "correct": "all subjects—noble and commoner—answer to the same law.", "wrong": ["nobles are exempt.", "the Khan stands above law.", "mercy prevails."] },
          { start: "A Mongol governor must be just in his dealings with the conquered because", "correct": "fair governance prevents rebellion and generates tax revenue.", "wrong": ["the Khan demands it.", "mercy is a weakness.", "cruelty works better."] },
          { start: "Mongol rule allows religious freedom because", "correct": "the Khan cares only that subjects pay taxes and remain loyal.", "wrong": ["the Khan is merciful.", "all religions are equal.", "faith strengthens the empire."] },
          { start: "Trade and commerce are protected under Mongol rule because", "correct": "prosperous merchants pay more taxes and stability benefits the Khan.", "wrong": ["the Khan loves merchants.", "trade is a moral good.", "the Khan is generous."] },
          { start: "A Mongol administrator who shows favoritism or corruption will be", "correct": "severely punished, regardless of rank.", "wrong": ["forgiven if he is loyal.", "ignored if he is effective.", "rewarded for ambition."] },
          { start: "The Mongol postal system (Yam) was established to ensure", "correct": "rapid communication across the empire and control of distant territories.", "wrong": ["free movement of all people.", "ease of trade.", "the Khan's mercy."] },
          { start: "Mongol governors are selected based on", "correct": "ability and merit, not birth or clan affiliation.", "wrong": ["royal blood.", "ritual qualification.", "age alone."] },
          { start: "The Khan tolerates local customs and rulers because", "correct": "stability and continuity reduce resistance and maintain order.", "wrong": ["he respects tradition.", "he is merciful.", "it is the right thing to do."] }
        ]
      },
      {
        name: "Batu Khan & Mongol Expansion",
        emoji: "🐴",
        quotes: [
          { start: "The conquest of the Khwarazmian Empire showed that", "correct": "those who resist the Khan will be utterly destroyed as a lesson to others.", "wrong": ["mercy awaits the defeated.", "negotiation is always possible.", "the Khan seeks peace."] },
          { start: "Mongol warriors move faster than any enemy because they", "correct": "travel light, use relay horses, and prioritize speed over comfort.", "wrong": ["fear nothing.", "are naturally superior.", "obey without thought."] },
          { start: "The Mongol siege of Baghdad demonstrated that", "correct": "even the greatest cities fall to coordinated military discipline and overwhelming force.", "wrong": ["the Khan is merciful.", "scholars can stop armies.", "walls are impenetrable."] }
        ]
      },
      {
        name: "Kublai Khan (Yuan Dynasty)",
        emoji: "👑",
        quotes: [
          { start: "To rule China, one must understand that", "correct": "Chinese administrative systems are more effective than tribal governance.", "wrong": ["Chinese culture is superior.", "Mongol traditions must dominate.", "warfare alone brings order."] },
          { start: "I employ Chinese scholars and administrators because", "correct": "they understand governance, law, and how to extract revenue fairly.", "wrong": ["I love Chinese culture.", "I have abandoned Mongol ways.", "I am weak."] },
          { start: "The Great Khan tolerates the religions of his subjects because", "correct": "diversity prevents unified rebellion and reduces unrest.", "wrong": ["he is merciful.", "all faiths are equal.", "religion is unimportant."] },
          { start: "Maritime trade under Mongol protection benefits", "correct": "both the merchants and the Khan through taxation.", "wrong": ["only merchants.", "the Khan alone.", "no one."] },
          { start: "The Mongol rule of China proves that", "correct": "military conquest is only the beginning; administration determines lasting power.", "wrong": ["conquest is all that matters.", "occupation is permanent.", "the conquered always rebel."] },
          { start: "To maintain power in conquered lands, a wise Khan must", "correct": "preserve local structures while ensuring tribute and loyalty.", "wrong": ["destroy all local authority.", "rule with iron fist alone.", "ignore local customs."] }
        ]
      },
      {
        name: "Mongol Warriors & the Honor Code",
        emoji: "🏹",
        quotes: [
          { start: "A Mongol warrior's word is his bond because", "correct": "the Khan's trust depends on the reliability of his commanders.", "wrong": ["honor is intrinsically noble.", "the gods demand it.", "it is written in law."] },
          { start: "To flee battle without orders is", "correct": "shameful and punishable by death.", "wrong": ["sometimes necessary.", "a tactical retreat.", "prudent."] },
          { start: "A warrior who kills without the Khan's permission will be", "correct": "executed, regardless of his rank or previous service.", "wrong": ["forgiven.", "rewarded for ambition.", "promoted."] },
          { start: "The bond between warrior and Khan is sacred because", "correct": "the empire cannot function without absolute discipline and trust.", "wrong": ["the gods demand it.", "it is merciful.", "it is fair."] },
          { start: "Mongol warriors respect their enemies when they", "correct": "fight with skill, discipline, and courage, even in defeat.", "wrong": ["surrender quickly.", "flee without fighting.", "show mercy."] }
        ]
      },
      {
        name: "Mongol Trade & The Silk Road",
        emoji: "💰",
        quotes: [
          { start: "The Mongol peace (Pax Mongolica) allows merchants to travel safely because", "correct": "the Khan enforces order and punishes bandits and corrupt officials severely.", "wrong": ["the Khan is merciful.", "there is no danger.", "everyone trusts each other."] },
          { start: "Trade flourishes under Mongol rule because", "correct": "stable governance, safe roads, and consistent law attract merchants from many lands.", "wrong": ["the Khan is generous.", "war has ended everywhere.", "taxation is light."] },
          { start: "The Khan protects merchants and trade routes because", "correct": "commerce generates wealth and taxes that strengthen the empire.", "wrong": ["he loves merchants.", "he believes in free trade.", "it is morally right."] },
          { start: "A merchant who pays his taxes and remains loyal can expect", "correct": "protection, justice, and the ability to profit.", "wrong": ["unlimited freedom.", "no taxation.", "complete autonomy."] },
          { start: "The Mongol Empire connects East and West through trade because", "correct": "control of trade routes means control of wealth and information.", "wrong": ["cultural exchange is noble.", "the Khan desires peace.", "it is inevitable."] }
        ]
      },
      {
        name: "Mongol Succession & Leadership",
        emoji: "👑",
        quotes: [
          { start: "The Khan is chosen based on", "correct": "ability to command, military skill, and the respect of the kurultai (assembly).", "wrong": ["age alone.", "royal blood only.", "ritual alone."] },
          { start: "Fragmentation of the Mongol Empire shows that", "correct": "without a strong central Khan, regional commanders prioritize their own power.", "wrong": ["the Khan's authority is absolute.", "the empire is eternal.", "law alone holds it together."] },
          { start: "A Khan who loses the confidence of his generals will", "correct": "be replaced or deposed.", "wrong": ["remain in power forever.", "be protected by law.", "be forgiven."] },
          { start: "The strength of Mongol leadership lies in the fact that", "correct": "the Khan must prove his worthiness through military success and wise governance.", "wrong": ["birth determines power.", "ritual grants authority.", "force alone is sufficient."] }
        ]
      },
      {
        name: "Mongol Culture & Values",
        emoji: "🎯",
        quotes: [
          { start: "Mongol culture values courage, loyalty, and skill in", "correct": "horsemanship, archery, and wrestling.", "wrong": ["poetry and philosophy.", "ritual and ceremony.", "mercy and compassion."] },
          { start: "The Mongols respect those who", "correct": "face hardship with endurance and adapt to circumstances.", "wrong": ["seek comfort.", "avoid danger.", "remain unchanged."] },
          { start: "To the Mongols, a life well-lived is one spent in", "correct": "service to the Khan and the tribe, with honor in battle.", "wrong": ["pursuit of wealth.", "peaceful retirement.", "spiritual contemplation."] },
          { start: "Mongol women have more freedom and responsibility than many contemporary societies because", "correct": "they manage households, herds, and are capable of riding and fighting.", "wrong": ["the Khan is merciful.", "all women are equal.", "there are no restrictions."] }
        ]
      },
      {
        name: "Mongol Decline & Historical Lessons",
        emoji: "📜",
        quotes: [
          { start: "The fragmentation of the Mongol Empire occurred because", "correct": "distance, cultural differences, and ambitious regional khans eventually overwhelmed central authority.", "wrong": ["external conquest defeated them.", "the Khan became merciful.", "the empire was too large by design."] },
          { start: "Mongol rule in various regions lasted only as long as the Khan could", "correct": "enforce his authority and ensure that local administrators remained loyal.", "wrong": ["the people remained peaceful.", "no resistance emerged.", "the system was perfect."] },
          { start: "The Mongol Empire's greatest strength was its ability to", "correct": "adapt tactics, tolerate diversity, and use existing institutions for governance.", "wrong": ["show mercy.", "unite all peoples.", "create perfect order."] },
          { start: "The Mongol legacy shows that", "correct": "military conquest alone cannot sustain an empire without stable governance and administration.", "wrong": ["conquest determines all.", "administration is unnecessary.", "law and order are irrelevant."] }
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
        name: "Mansa Musa I (Historical Records)",
        emoji: "👑",
        quotes: [
          { start: "I have decided to make a pilgrimage to the Holy City of Mecca, so that", "correct": "the people of my kingdom will know the way.", "wrong": ["I can gain personal glory.", "I can escape my kingdom.", "I can become wealthy."] },
          { start: "The pilgrimage to Mecca demonstrated that Mali is a kingdom of", "correct": "wealth, faith, and learning.", "wrong": ["military might.", "fear.", "isolation."] },
          { start: "Upon my return from Mecca, I established centers of learning because", "correct": "knowledge strengthens the empire.", "wrong": ["I feared rebellion.", "I wanted personal glory.", "rituals demanded it."] },
          { start: "The University of Timbuktu was founded to ensure that", "correct": "Mali's scholars could rival those of any nation.", "wrong": ["I could control the people.", "I could hide knowledge.", "the poor would serve better."] },
          { start: "Gold is valuable, but", "correct": "the prosperity of Mali's people is more valuable still.", "wrong": ["it brings true happiness.", "it grants eternal power.", "it ensures loyalty."] },
          { start: "A ruler's generosity is not weakness; it is a sign of", "correct": "strength and confidence.", "wrong": ["foolishness.", "desperation.", "fear of rebellion."] },
          { start: "Mali's power comes not from conquest alone, but from", "correct": "trade, justice, and respect among nations.", "wrong": ["fear of our armies.", "our vast wealth.", "ritual sacrifice."] }
        ]
      },
      {
        name: "Ibn Battuta's Observations of Mali (14th Century Traveler)",
        emoji: "✍️",
        quotes: [
          { start: "The people of Mali show great respect for", "correct": "justice and the rule of law.", "wrong": ["the sultan's fear.", "ritual alone.", "wealth."] },
          { start: "In Mali, women have more freedom and rights than in many Muslim lands because", "correct": "the culture respects women's roles in society.", "wrong": ["there is no law.", "they are not truly free.", "it is a sign of weakness."] },
          { start: "The markets of Mali are orderly and safe because", "correct": "merchants are protected and laws are enforced.", "wrong": ["people fear punishment.", "no theft occurs.", "trade is banned."] },
          { start: "Mali's strength lies in the fact that", "correct": "merchants, scholars, and rulers work together.", "wrong": ["the army is the largest.", "gold reserves are endless.", "rituals control all."] },
          { start: "The people of Timbuktu are known for their", "correct": "learning, piety, and respect for knowledge.", "wrong": ["military prowess.", "isolation.", "poverty."] }
        ]
      },
      {
        name: "Griots (Oral Tradition & Historical Records)",
        emoji: "📜",
        quotes: [
          { start: "The griot is the keeper of", "correct": "history and the memory of the people.", "wrong": ["the king's secrets.", "only positive tales.", "forbidden knowledge."] },
          { start: "Through the griot's words, the deeds of ancestors are", "correct": "preserved and passed to future generations.", "wrong": ["forgotten.", "hidden.", "exaggerated endlessly."] },
          { start: "A ruler who ignores the griot's counsel ignores the", "correct": "wisdom of his people.", "wrong": ["his own power.", "ritual demands.", "necessary cruelty."] },
          { start: "The epic of Sundiata teaches that", "correct": "courage, wisdom, and justice build great empires.", "wrong": ["only conquest matters.", "birth determines all.", "fear secures loyalty."] },
          { start: "Stories of Mali's founding show that", "correct": "the kingdom was built by united people, not conquest alone.", "wrong": ["force was all that mattered.", "one man created it all.", "no sacrifice was needed."] },
          { start: "The griot reminds rulers that their power is temporary, but their", "correct": "legacy through deeds is eternal.", "wrong": ["wealth is eternal.", "fear lasts forever.", "rituals protect them."] }
        ]
      },
      {
        name: "Sundiata Keita (Founder of Mali - Historical/Legendary)",
        emoji: "⚔️",
        quotes: [
          { start: "I was born weak, but I became strong through", "correct": "determination and the support of my people.", "wrong": ["magic alone.", "conquest only.", "ritual only."] },
          { start: "A true leader unites his people; he does not rule through", "correct": "fear or force alone.", "wrong": ["magic.", "rituals.", "weakness."] },
          { start: "Mali was not built in a day, but through the patience and", "correct": "hard work of many hands.", "wrong": ["conquest alone.", "gold.", "ritual sacrifice."] },
          { start: "The battle of Kirina taught that", "correct": "strategy and unity defeat even larger armies.", "wrong": ["numbers alone determine victory.", "ritual determines fate.", "fear wins wars."] },
          { start: "A kingdom endures when its people believe in its", "correct": "justice and purpose.", "wrong": ["only in its wealth.", "only in fear of the ruler.", "only in ritual."] }
        ]
      },
      {
        name: "Mali Merchants & Trade Wisdom",
        emoji: "💰",
        quotes: [
          { start: "The salt trade enriched Mali because merchants understood that", "correct": "fair dealing and reliable supply bring lasting profit.", "wrong": ["hoarding creates wealth.", "deception pays.", "theft is justified."] },
          { start: "Mali's gold drew traders from across the world because", "correct": "honest exchange and stable governance made trade safe.", "wrong": ["we forced them.", "we had the most gold.", "we isolated ourselves."] },
          { start: "A merchant of Mali knows that reputation is worth more than", "correct": "a single large profit.", "wrong": ["loyalty.", "gold.", "power."] },
          { start: "The caravans crossing Mali prosper because", "correct": "the empire protects travelers and enforces fair trade.", "wrong": ["bandits never appear.", "routes are easy.", "no one competes."] },
          { start: "Mali's control of trade routes ensured that", "correct": "wealth flowed into the kingdom through honest commerce.", "wrong": ["conquest brought all riches.", "we needed no skill.", "gold appeared freely."] }
        ]
      },
      {
        name: "Timbuktu Scholars & Islamic Learning",
        emoji: "📚",
        quotes: [
          { start: "The University of Timbuktu was built because Mali's rulers believed that", "correct": "knowledge and learning strengthen a nation.", "wrong": ["we wanted to isolate ourselves.", "ritual demanded it.", "gold alone mattered."] },
          { start: "Scholars in Mali teach that wisdom comes from", "correct": "study, reflection, and respect for learning.", "wrong": ["conquest.", "ritual alone.", "fear."] },
          { start: "The great mosques of Timbuktu show that Mali is a nation of", "correct": "faith, learning, and cultural pride.", "wrong": ["fear of the gods.", "isolated from the world.", "focused only on war."] },
          { start: "Manuscripts preserved in Mali hold", "correct": "knowledge that serves all people.", "wrong": ["secrets that grant power.", "weapons of war.", "rituals of control."] },
          { start: "Mali's scholars attracted students from across Africa because", "correct": "the kingdom offered genuine learning and opportunity.", "wrong": ["they were forced to attend.", "we controlled them.", "no other schools existed."] }
        ]
      },
      {
        name: "Mali Administrative & Governance Wisdom",
        emoji: "⚖️",
        quotes: [
          { start: "Mali's stability came from having clear laws and", "correct": "officials who enforced them fairly.", "wrong": ["fear of punishment.", "the ruler's whims.", "ritual alone."] },
          { start: "A Mansa who appointed skilled administrators found that", "correct": "good governance prevents rebellion better than force.", "wrong": ["fear maintained order.", "conquest secured loyalty.", "ritual ensured peace."] },
          { start: "The provincial governors of Mali prospered when they", "correct": "served both the Mansa and the welfare of their people.", "wrong": ["hoarded wealth.", "ruled by fear.", "ignored the people."] },
          { start: "Mali's tax system was effective because it was", "correct": "fair and transparent, ensuring resources for defense and development.", "wrong": ["so high people had no choice.", "hidden from the people.", "used only for the palace."] },
          { start: "Mali's military strength came from", "correct": "well-trained soldiers who believed in their cause.", "wrong": ["enslaved warriors.", "mercenaries alone.", "ritual power."] }
        ]
      },
      {
        name: "Mali & Women's Status (Historical Evidence)",
        emoji: "👩",
        quotes: [
          { start: "In Mali, women could own property and conduct trade because", "correct": "the society valued economic contribution and family stability.", "wrong": ["they had complete freedom.", "no laws existed.", "men did not control resources."] },
          { start: "Mali's queens and princess held real power because", "correct": "the kingdom recognized women's capacity to govern and counsel.", "wrong": ["they were merely symbolic.", "they had no real authority.", "ritual alone granted them power."] },
          { start: "Mali's stability was strengthened by the fact that", "correct": "women managed households, trade, and helped preserve culture.", "wrong": ["women were powerless.", "they served no purpose.", "only men contributed."] },
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
          { start: "Do not neglect the fields, for the fields sustain", "correct": "all.", "wrong": ["the king.", "the gods.", "the temples."] },
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