import style from './img-simple.module.scss';

export interface ImgSimpleProps {}

const defaultProps = {} as Required<ImgSimpleProps>;

/**
 * DESCRIPTION
 */
// TODO: No good export default
export default function ImgSimple(props: ImgSimpleProps) {
    const {} = { ...defaultProps, ...props };

    // const SOMETHING = useSelector((state: AppState) => state.session.SOMETHING);

    // const [STATE, SETSTATE] = useState();

    return <div className={style['container']}>Image</div>;
}
