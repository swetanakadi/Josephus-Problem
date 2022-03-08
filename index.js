class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class CircularLinkedList{
        constructor() {
            this.head=null;
            this.size=0
        }

        add(player){
            var node = new Node(player)
            if(this.head == null){
                node.next = node
                this.head  = node
            }
            else{
                var current = this.head
                while(current.next!= this.head)
                    current = current.next
                node.next=this.head
                current.next = node
            }
            this.size++
        }
    }
    var players=new Array()
    var playerslist = new CircularLinkedList()
    
    function addplayers(){
        let player = document.getElementById("player").value
        document.getElementById("player").value=""
        //console.log(player)
        if(player!="")
        {
            let p=player.toUpperCase()
            playerslist.add(p)
        }
    }

    function display(){
        let demo=document.getElementById("demo")
        let temp = playerslist.head
        //var i=1
        while(temp.next!=playerslist.head){
            let box= document.createElement("div")
            let para = document.createElement("p")
            box.setAttribute("class", "players")
            para.setAttribute("class", "playernames")
            let node=document.createTextNode(temp.data)
            para.appendChild(node)
            //console.log(box, node)
            box.appendChild(para)
            demo.appendChild(box)
            temp=temp.next
            //i++
        }
        let box= document.createElement("div")
        let para = document.createElement("p")
        box.setAttribute("class", "players")
        para.setAttribute("class", "playernames")
        let node=document.createTextNode(temp.data)
        para.appendChild(node)
        box.appendChild(para)
        demo.appendChild(box)
    }

    function solution(){
        let m=document.getElementById("m").value
        console.log(m)
        let losers = document.getElementById("loser_container")
        let temp=playerslist.head
        if(m<playerslist.size){
            if(m==1){
                while(playerslist.size!=1){
                    killnode=temp
                    temp=temp.next
                    playerslist.size--
                    var box= document.createElement("div")
                    var para=document.createElement("p")
                    box.setAttribute("class", "losers")
                    para.setAttribute("class", "losernames")
                    var node=document.createTextNode(killnode.data+" you are out :( Better luck next time!")
                    para.appendChild(node)
                    box.append(para)
                    losers.appendChild(box)
                    killnode.next=null
                }
            }
            else{
                let pos=1
                let prev=null
                while(playerslist.size!=1){
                    if(pos==m){
                        killnode = temp
                        prev.next = temp.next
                        temp = temp.next
                        pos=1
                        playerslist.size--
                        var box= document.createElement("div")
                        var para=document.createElement("p")
                        box.setAttribute("class", "losers")
                        para.setAttribute("class", "losernames")
                        var node=document.createTextNode(killnode.data+" you are out:( Better luck next time!")
                        para.appendChild(node)
                        box.append(para)
                        losers.appendChild(box)
                        killnode.next = null
                        killnode =null
                    }
                    else{
                        prev = temp
                        pos++
                        temp=temp.next
                    }

                }
            }
            var winner = document.getElementById("winner_container")
            box= document.createElement("div")
            para = document.createElement("p")
            box.setAttribute("class", "winner")
            para.setAttribute("class", "winnername")
            node=document.createTextNode("Congratulations "+temp.data+"!!! You have won the game!")
            para.appendChild(node)
            box.append(para)
            winner.appendChild(box)
        }
        else{
            window.alert("Oops you entered incorrect value of m. You have "+playerslist.size +" players and value of 'm' should be less than that")   
        }
    }