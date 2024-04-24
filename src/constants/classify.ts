import { activity } from './activity';
import { body } from './body';
import { emotes } from './emote';
import { flag } from './flag';
import { food } from './food';
import { goods } from './goods';
import { journey } from './journey';
import { sign } from './sign';
import { zoon } from './zoon';

declare type Classify = {
  id: string;
  name: string;
  icon: string;
  children: Array<{
    name: string;
    emoji: string;
  }>;
};

export const CLASSIFY: Array<Classify> = [
  {
    id: 'emotes',
    name: '表情',
    icon: '😀',
    children: [...emotes],
  },
  {
    id: 'body',
    name: '人',
    icon: '👧',
    children: [...body],
  },
  {
    id: 'activity',
    name: '活动',
    icon: '🎁',
    children: [...activity],
  },
  {
    id: 'food',
    name: '食物',
    icon: '🎁',
    children: [...food],
  },
  {
    id: 'goods',
    name: '物品',
    icon: '👑',
    children: [...goods],
  },
  {
    id: 'journey',
    name: '旅行和地点',
    icon: '🌎',
    children: [...journey],
  },
  {
    id: 'flag',
    name: '旗帜',
    icon: '🚩',
    children: [...flag],
  },
  {
    id: 'sign',
    name: '标志',
    icon: '☢️',
    children: [...sign],
  },
  {
    id: 'zoon',
    name: '动物',
    icon: '🐉',
    children: [...zoon],
  },
];
