import { TbSearch } from "react-icons/tb";
import { useContext } from 'react';
import { MovieContext } from '../Context/DataContext';
import { SpotlightProvider } from '@mantine/spotlight';
import { useNavigate } from "react-router-dom";
import { Center, Group, Image, Text, UnstyledButton } from "@mantine/core";
import styled from "@emotion/styled";



function Spotlight({ children }) {

    const navigate = useNavigate()

    const lol = [

        {
            title: 'Home',
            description: 'Get to home page',
            onTrigger: () => navigate("/seatch"),
        },
        {
            title: 'Search Movies',
            description: 'Search for movies',
            onTrigger: () => console.log('Dashboard'),
        },
        {
            title: 'Movies By Genre',
            description: 'Click Here to Go to Movies by Genre Page',
            onTrigger: () => navigate(`/Explore`),
        },
    ];

    const { state: { search } } = useContext(MovieContext)


    const actions = search.map((action) => {
        return (
            {
                title: action.title,
                description: action.overview,
                onTrigger: () => navigate(`/movie/${action.id}`),
                image: `https://image.tmdb.org/t/p/original${action.poster_path}`

            }
        )

    })

    const Wrapper = styled.div`
    flex : 1;
`

    const Button = styled(UnstyledButton)`
    position: relative;
    display: block;
    width: 100%;
    padding: 1rem 1.2rem;
    background: var(--background-color);
    color: white ;


    &:hover{
        background-color:red;
    } 

`

    const Div = styled.div`
    background-color: var(--background-color) ;
    
`

    function Styles({
        action,
        styles,
        classNames,
        hovered,
        onTrigger,
        ...others
    }) {
        return (
            <Button
                tabIndex={-1}
                onMouseDown={(event) => event.preventDefault()}
                onClick={onTrigger}
                {...others}
            >
                <Group noWrap>
                    {action.image && (
                        <Center>
                            <Image src={action.image} alt={action.title} width={100} height={90} sx={{ objectFit: "contain" }} />
                        </Center>
                    )}

                    <Wrapper >
                        <Text size="lg" weight="bold">{action.title}</Text>

                        {action.description && (
                            <Text size="xs">
                                {action.description}
                            </Text>
                        )}
                    </Wrapper>
                </Group>
            </Button>
        );
    }

    function ActionsWrapper({ children }) {
        return (
            <Div>
                {children}
            </Div>
        );
    }


    return (
        <SpotlightProvider
            actions={actions.length > 0 ? actions : lol}
            actionComponent={Styles}
            searchIcon={<TbSearch size={18} />}
            searchPlaceholder="Search for Options Or Movies"
            shortcut="mod + shift + 1"
            nothingFoundMessage="Nothing found..."
            maxWidth={800}
            actionsWrapperComponent={ActionsWrapper}

        >
            {children}
        </SpotlightProvider>
    );
}

export default Spotlight