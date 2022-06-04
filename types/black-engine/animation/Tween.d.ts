export class Tween extends Component {
    static set defaultEase(arg: (arg0: number) => number);
    static get defaultEase(): (arg0: number) => number;
    constructor(values: any, duration?: number, properties?: any, plugins?: any);
    private mValues;
    private mDuration;
    private mProperties;
    private mPlugins;
    private mIsPlaying;
    private mIsPaused;
    private mStartTime;
    private mPausedTime;
    private mValuesStart;
    private mElapsed;
    private mInterpolation;
    private mDelay;
    private mRepeatDelay;
    private mRepeats;
    private mInitiated;
    private mStarted;
    private mReversed;
    private mYoyo;
    private mIsYoyoBack;
    private mReverseOnInit;
    private mRemoveOnComplete;
    private mPlayOnAdded;
    private mEase;
    set ease(arg: (arg0: number) => number);
    get ease(): (arg0: number) => number;
    set interpolation(arg: (arg0: any[], arg1: number) => number);
    get interpolation(): (arg0: any[], arg1: number) => number;
    get elapsed(): number;
    set delay(arg: number);
    get delay(): number;
    set repeats(arg: number);
    get repeats(): number;
    set repeatDelay(arg: number);
    get repeatDelay(): number;
    set loop(arg: boolean);
    get loop(): boolean;
    set yoyo(arg: boolean);
    get yoyo(): boolean;
    set reversed(arg: boolean);
    get reversed(): boolean;
    set removeOnComplete(arg: boolean);
    get removeOnComplete(): boolean;
    set playOnAdded(arg: boolean);
    get playOnAdded(): boolean;
    set plugins(arg: any);
    get plugins(): any;
    get duration(): number;
    get isPlaying(): boolean;
    private __start;
    play(): Tween;
    stop(): Tween;
    reset(): Tween;
    to(values?: any, duration?: number): Tween;
    pause(): Tween;
    private __resume;
    chain(tween: any): Tween;
    onAdded(gameObject: any): void;
    private __update;
    set(values: any): void;
    reverse(asYoyo?: boolean): Tween;
    private __reverse;
    __collectStartingValues(): void;
}
import { Component } from '../core/Component';
