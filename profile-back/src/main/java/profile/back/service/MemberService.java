package profile.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import profile.back.domain.Member;
import profile.back.repository.MemberRepository;

@Service
public class MemberService {
    @Autowired
    MemberRepository memberRepository;

    public List<Member> memberList() {
        // TODO Auto-generated method stub
        return null;
    }

    public Boolean searchRoot(@PathVariable Member member) {
        // TODO Auto-generated method stub
        System.out.println(member.getMno());
        System.out.println(memberRepository.existsById(member.getMno()));
        return memberRepository.existsById(member.getMno());
    }

}
