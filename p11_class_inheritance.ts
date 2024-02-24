class Building {
    windows: string;
    escalators () {
        console.log(`The escalator is moving`);
        
    }


}

// const building = new Building();
// building.escalators();


class Building2 extends Building {}

const building2 = new Building2;

building2.escalators();